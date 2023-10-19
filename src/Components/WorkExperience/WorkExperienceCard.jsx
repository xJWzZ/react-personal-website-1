import React from 'react'
import "../../Styles/WorkExperienceCard.css"
import { workExperience } from "../../data/data"
import { Link } from "react-router-dom"

function WorkExperienceCard() {
  return (
    <>
      <section className='boxContainer'>
        <div className='container grid3'>
          {workExperience.map((item) => (
            <div className='box boxItems' key={item.id}>
              <Link to={`/details/${item.id}`} className='link'>
              <div className='img'>
                <img src={item.cover} alt='' />
              </div>
              <div className='details'>
                
                  <h3>{item.title}</h3>
                  <h4>{item.job}</h4>
                
                <p>{item.desc.slice(0, 180)}...</p>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default WorkExperienceCard