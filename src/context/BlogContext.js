import React, { createContext, useState } from 'react';

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogPost, setBlogPost] = useState([]);

  const addBlogPost = () => {
    setBlogPost([...blogPost, { title: `Blog Post #${blogPost.length + 1}` }]);
  };

  const value = {
    data: blogPost,
    addBlogPost,
  }

  return (
    <BlogContext.Provider value={value}>{children}</BlogContext.Provider>
  );
};

export default BlogContext;
