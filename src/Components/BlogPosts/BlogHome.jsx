import React from 'react'
import "../WorkExperience/WorkExperienceCard.css"
import "./BlogHome.css"

function BlogHome() {
  return (
    <div className="blog">
      <div className='blogHeader'>
        <h1 className='blogHeaderH1'>Welcome to My Blog</h1>
        <p className='blogHeaderP'>Discover the latest articles, tips, and insights.</p>
      </div>

      <section className="boxContainer">
        <div className='container grid3'>
          {/* Here you can map through your blog posts and display them */}
          <div className="box boxItems">
            <div>
              <img/>
            </div>
            <div className='details'>
              <h2>Blog Post Title</h2>
              <p>Short description of the blog post.</p>
              <a href="/blog/post-url">Read more</a>
            </div>
          </div>
          {/* Repeat this structure for other blog posts */}
          {/* Here you can map through your blog posts and display them */}
          <div className="box boxItems">
            <div>
              <img/>
            </div>
            <div className='details'>
              <h2>Blog Post Title</h2>
              <p>Short description of the blog post.</p>
              <a href="/blog/post-url">Read more</a>
            </div>
          </div>
          {/* Repeat this structure for other blog posts */}
          {/* Here you can map through your blog posts and display them */}
          <div className="box boxItems">
            <div>
              <img/>
            </div>
            <div className='details'>
              <h2>Blog Post Title</h2>
              <p>Short description of the blog post.</p>
              <a href="/blog/post-url">Read more</a>
            </div>
          </div>
          {/* Repeat this structure for other blog posts */}
          {/* Here you can map through your blog posts and display them */}
          <div className="box boxItems">
            <div>
              <img/>
            </div>
            <div className='details'>
              <h2>Blog Post Title</h2>
              <p>Short description of the blog post.</p>
              <a href="/blog/post-url">Read more</a>
            </div>
          </div>
          {/* Repeat this structure for other blog posts */}
          {/* Here you can map through your blog posts and display them */}
          <div className="box boxItems">
            <div>
              <img/>
            </div>
            <div className='details'>
              <h2>Blog Post Title</h2>
              <p>Short description of the blog post.</p>
              <a href="/blog/post-url">Read more</a>
            </div>
          </div>
          {/* Repeat this structure for other blog posts */}
          {/* Here you can map through your blog posts and display them */}
          <div className="box boxItems">
            <div>
              <img/>
            </div>
            <div className='details'>
              <h2>Blog Post Title</h2>
              <p>Short description of the blog post.</p>
              <a href="/blog/post-url">Read more</a>
            </div>
          </div>
          {/* Repeat this structure for other blog posts */}
        </div>
      </section>

      <aside className="sidebar">
        <div className="search">
          <input type="text" placeholder="Search for articles" />
          <button>Search</button>
        </div>

        <div className="categories">
          <h3>Categories</h3>
          <ul>
            <li>Programming</li>
            <li>Music</li>
            <li>Travel</li>
            {/* Add more categories here */}
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default BlogHome