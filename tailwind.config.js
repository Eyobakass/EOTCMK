/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A",  
        secondary: "#63B3ED", 
        neutral: "#f9fafb",   
        accent: "#81C784",    
        background: "#FFFFFF", 
        text: "#263238",      
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'],  
        heading: ['Poppins', 'sans-serif'],  
      },
      fontSize: {
        base: '1rem',        
        lg: '1.125rem',      
        xl: '2.25rem',       
      },
      spacing: {
        4: '1rem',           
        6: '1.5rem',         
        8: '2rem',           
        10: '2.5rem',        
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      
    },
  },
  plugins: [],
};