import React, { useState, useEffect } from "react";
import "./BlogPage.css";
import BlogCard from "./BlogCard";
const BlogPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const mockPosts = [
      {
        id: 1,
        title: "Travel Diaries",
        excerpt:
          "The resort hotel is a luxury facility that is intended primarily for vacationers and is usually located near special attractions, such as beaches and seashores, scenic or historic areas, ski parks, or spas. Though some resorts operate on a seasonal basis, the majority now try to…",

        image: "b.webp",
      },
      {
        id: 2,
        title: "This luxurious resort tucked in the wilderness of Coorg makes for an idyllic wedding destination",
        excerpt:
          "Whisk away your friends and folks to the mystical mountains of Coorg for a truly splendid wedding celebration. Step into your fabled forever surrounded by grandeur, nature's bounty and impeccable hospitality.",
        content:
          "Closures are a fundamental concept in JavaScript that allow functions to have access to variables from their outer scope. This post will explain what closures are, how they work, and practical examples of using them.",
        image: "c.jpg",
      },
      {
        id: 3,
        title: "A Space for All Events - Coorg Wilderness Resort and Spa OR Kumarakom Lake Resorts",
        excerpt:"If you are presuming that the best of your team could be accomplished by tasking teammates with endless targets, you are certainly not on the right side of the run! Restricting teammates within the space of your corporate chamber will make the workload seem a heavy strain to your colleagues.Nevertheless, a small modification in the daily routine of your corporate calendar can yield huge gains in terms of team performance." ,
 
        image: "e.jpeg",
      },
      
    ];

    setPosts(mockPosts);
  }, []);

  return (
    <div className="blog-page">
      <div className="container">
        <div className="row">
          <h1 className=" col-lg-12 text-center mb-5 ">Blog</h1>
          <div className="col-lg-8">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
