import React from 'react';
import './BlogCard.css'; // Assuming you have a CSS file for styling
const BlogCard = ({ post }) => {
  return (
    <div className="blog-card">
      <img src={post.image} alt={post.title} className="blog-card-image" />
      <div className="blog-card-content">
        <h3 className="blog-card-title">{post.title}</h3>
        <p className="blog-card-excerpt">{post.excerpt}</p>
      </div>
    </div>
  );
};

export default BlogCard;
