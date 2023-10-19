import React from 'react'
import "../../Styles/WorkExperienceCard.css"
import "../../Styles/BlogHome.css"
import { blogPostLinks } from '../../data/data';
import { Link } from "react-router-dom"

function BlogHome() {
  return (
    <div className="blog">
      <div className='blogHeader'>
        <h1 className='blogHeaderH1'>Welcome to My Blog</h1>
        <p className='blogHeaderP'>Discover the latest articles, tips, and insights.</p>
      </div>

      <section className="boxContainer">
        <div className='flexCenter'>
          {blogPostLinks.map((item) => (
              <div className="box boxItems" key={item.id}>
                <Link to={`/blogdetails/${item.id}`}>
                  <div className='img'>
                    <img src={item.imgSrc} alt=''/>
                  </div>
                  <div className='details'>
                    <h2>{item.title}</h2>
                    <p>{item.summary}</p>
                  </div>
                </Link>
              </div>
          ))}
        </div>
      </section>

      {/* <aside className="sidebar">
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
          </ul>
        </div>
      </aside> */}
    </div>
  );
}

export default BlogHome