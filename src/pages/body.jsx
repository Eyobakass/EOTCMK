import { useState, useEffect } from 'react';
import AboutUs from './aboutUs';
import axios from 'axios';
function Body() {
  const [count, setCount] = useState(0)
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/posts/forHome");
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error.response?.data || error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <div className="pl-[7%] pr-[7%] bg-[#ECF0F2]" id="top">
        <h1 className="text-center pt-[2rem] pb-[1rem] text-xl text-gray-800">
          ዜናዎች፣ ወቅታዊ ክንውኖች እና ልዩ ልዩ ይዘቶች
          <span className="block w-[60%] bg-gray-400 h-[1px] ml-auto mr-auto mb-[3rem] mt-[3rem]"></span>
        </h1>
        <main className="md:w-[55vw]">
          {posts.length > 0 ? (
            <>
              {posts.map((post) => (
                <section key={post._id} className="pb-[1rem]">
                  {post.image && (
                    <img
                      src={`http://localhost:5000/api/posts/${post._id}/image`}
                      alt={post.title}
                      className="rounded-lg h-[8rem]"
                    />
                  )}
                  <h2 className="font-bold mb-[1.5rem] text-[1.3rem] text-gray-800">
                    <a href="#">{post.title}</a>
                  </h2>

                  <p className="text-gray-600 text-justify leading-relaxed mb-[1rem]">
                    {post.smallContent}
                  </p>
                  <a
                    className="text-red-800 flex items-center gap-1 text-[0.8rem] font-serif hover:text-red-500"
                    href="#"
                  >
                    Read more<span>&gt;</span>
                  </a>

                  <span className="block bg-gray-300 h-[1px] w-full mt-5"></span>
                </section>
              ))}
              <nav className="flex justify-between pb-[1rem]">
                <ul className="flex">
                  <a
                    className="block text-[0.6rem] bg-white p-[0.5rem] rounded-[50%] w-[1.8rem] text-center mr-1"
                    href="#"
                  >
                    1
                  </a>
                  <a
                    className="block text-[0.6rem] bg-white p-[0.5rem] rounded-[50%] w-[1.8rem] text-center text-gray-500 hover:bg-gray-400 hover:text-white mr-1 duration-150 ease-in"
                    href="#"
                  >
                    2
                  </a>
                  <a
                    className="block text-[0.6rem] bg-white p-[0.5rem] rounded-[50%] w-[1.8rem] text-center text-gray-500 hover:bg-gray-400 hover:text-white mr-1 duration-150 ease-in"
                    href="#"
                  >
                    3
                  </a>
                  <a
                    className="block text-[0.6rem] bg-white p-[0.5rem] rounded-[50%] w-[1.8rem] text-center text-gray-500 hover:bg-gray-400 hover:text-white mr-1 duration-150 ease-in"
                    href="#"
                  >
                    <span>&gt;</span>
                  </a>
                  <a
                    className="block text-[0.6rem] bg-white p-[0.5rem] rounded-[50%] w-[1.8rem] text-center text-gray-500 hover:bg-gray-400 hover:text-white mr-1 duration-150 ease-in"
                    href="#"
                  >
                    <span>&gt;</span>
                    <span>&gt;</span>
                  </a>
                </ul>
                <p className="text-[0.7rem] text-gray-500 font-[Georgia]">
                  Page 1 of {posts.length}
                </p>
              </nav>
            </>
          ) : (
            <div className="flex items-center justify-center h-[5rem]">
              <p className="text-gray-600 text-center text-2xl font-semibold p-5 pb-[4rem]">
                No posts available.
              </p>
            </div>
          )}
        </main>
        <aside></aside>
      </div>
      <AboutUs />
    </div>
  );
}

export default Body