import { useState, useEffect } from "react";
import axios from "axios";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    smallContent: "",
    fullContent: "",
    image: null,
  });
  const [editingPost, setEditingPost] = useState(null);

  // Fetch all posts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/posts");
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error.response?.data || error);
      }
    };
    fetchPosts();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    if (e.target.name === "image") {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  // Handle form submission (Create or Update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) return alert("You must be logged in!");

    const formDataObj = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key !== "image" || formData[key]) {
        formDataObj.append(key, formData[key]);
      }
    });


    try {
      if (editingPost) {
        await axios.put(
          `http://localhost:5000/api/posts/${editingPost}`,
          formDataObj,
          {
            headers: { "x-auth-token": token },
          }
        );
        setEditingPost(null);
      } else {
        await axios.post("http://localhost:5000/api/posts", formDataObj, {
          headers: { "x-auth-token": token },
        });
      }
      window.location.reload();
    } catch (error) {
      console.error("Error saving post:", error.response?.data || error);
    }
  };

  // Delete a post
  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    if (!token) return alert("You must be logged in!");

    try {
      await axios.delete(`http://localhost:5000/api/posts/${id}`, {
        headers: { "x-auth-token": token },
      });
      setPosts(posts.filter((post) => post._id !== id));
    } catch (error) {
      console.error("Error deleting post:", error.response?.data || error);
    }
  };

  // Set editing mode
  const startEditing = (post) => {
    setFormData({
      title: post.title,
      smallContent: post.smallContent,
      fullContent: post.fullContent,
      image: null,
    });
    setEditingPost(post._id);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">
        Posts
      </h1>

      {/* Create or Edit Post Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-6 mb-10 border border-gray-200"
      >
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <textarea
          name="smallContent"
          value={formData.smallContent}
          onChange={handleChange}
          placeholder="Small Content"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <textarea
          name="fullContent"
          value={formData.fullContent}
          onChange={handleChange}
          placeholder="Full Content"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <input
          type="file"
          name="image"
          onChange={handleChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg bg-gray-100 cursor-pointer"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
        >
          {editingPost ? "Update Post" : "Create Post"}
        </button>
      </form>

      {/* Display Posts */}
      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div
            key={post._id}
            className="bg-white shadow-lg rounded-xl p-5 border border-gray-200 hover:shadow-2xl transition-all duration-300"
          >
            {post.image && (
              <img
                src={`http://localhost:5000/api/posts/${post._id}/image`}
                alt={post.title}
                className="rounded-lg h-[8rem]"
              />
            )}
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              {post.title}
            </h2>
            <p className="text-gray-600 text-justify">{post.smallContent}</p>

            <div className="flex justify-between mt-5">
              <button
                onClick={() => startEditing(post)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition-all duration-300"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(post._id)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-all duration-300"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
