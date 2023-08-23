import React, {useEffect} from 'react'
import './WorkExperienceSection.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

function OverCSection() {
  useEffect(() => {
      AOS.init({duration: 3000})
  }, [])
  return (
    <div className='container'>
      <section className='animation' data-aos="fade-left">

            <h2>Over-C</h2>
            <h3>March 2019 - August 2019</h3>
        </section>
        <section className='animation' data-aos="fade-left">As a proactive software engineering intern at Over-C, a rapidly expanding
          startup, I enthusiastically engaged with diverse projects and
          technologies, leaving a distinct mark on the company's technological
          advancements. Some key accomplishments being:
        </section>
        <section className='animation' data-aos="fade-left">
          Designed and developed an Automated Map Converter that propelled
          operational efficiency by an impressive 50%. This innovative solution
          streamlined processes and demonstrated my ability to deliver impactful
          results within a fast-paced environment.
        </section>
        <section className='animation' data-aos="fade-left">
        Led the development of pioneering applications utilizing mesh network
        sensors for indoor location tracking, showcasing my capacity to explore
        and implement cutting-edge technologies to address real-world
        challenges.
      </section>
      <section className='animation' data-aos="fade-left">
        Leveraged the power of Uber's WebGL-powered framework, deck.gl, to
        transform raw user location data into a visually compelling program. This
        achievement underscored my knack for transforming complex data into
        actionable insights.
      </section>
      <section className='animation' data-aos="fade-left">
        Demonstrated expertise in the Vue.js JavaScript framework, successfully
        crafting a dynamic server health report website. This project highlighted
        my proficiency in creating user-friendly and informative interfaces.
      </section>
      <section className='animation' data-aos="fade-left">
        Displayed a knowledge of essential development and collaboration tools,
        including Git and Jira. These tools were integral to my workflow, enabling
        effective teamwork and efficient development and deployment processes.
      </section>
    </div>
  )
}

export default OverCSection