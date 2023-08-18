import React, {useEffect} from 'react'
import './WorkExperienceSection.css'
import AOS from 'aos'
import 'aos/dist/aos.css'


function WorkExperienceSection() {
    useEffect(() => {
        AOS.init({duration: 3000})
    }, [])
  return (
    <>
        <section className='animation' data-aos="fade-left" data-aos-easing="linear">
            <h1>Work Experience</h1>
        </section>
        <section className='animation' data-aos="fade-left">
            <h2>Guidewire</h2>
            <h3>November 2020 - March 2023</h3>
        </section>
        <section className='animation' data-aos="fade-left">
            <p>
                Worked at a Multinational SaaS Insurance software company as a client
                facing software consultant as part of the CAPS (Cloud Assurance
                Production Services) team. Spearheaded defect resolution and
                enhancement development using Java to align software functionality with
                intended requirements. This included tackling scenarios where existing
                functionalities fell short and pioneering solutions for emerging needs.
                Collaborated closely with clients to architect a robust SQL-based solution
                that updated over sixty thousand policies within the production database.
                Led engaging presentations to senior managers, outlining the
                comprehensive approach encompassing design, testing, release, and
                contingency plans for fallback scenarios.
            </p>
            <p>
                Played an instrumental role in orchestrating a high-impact migration
            initiative, successfully transitioning a flagship insurance company from
            traditional on-premises hosting to the dynamic realm of AWS cloud
            services.
            </p>
        </section>
        <section className='animation' data-aos="fade-left">
            <p>
                Designed, developed, and implemented a range of data-passing
            functionalities to external services via XML, following meticulous best
            practices throughout the project lifecycle, from requirements gathering
            to rigorous testing.
            </p>

            <p>
                Rapidly mastered the integration landscape, swiftly adopting REST APIs
            for various integrations. Became the primary liaison for four intricate
            integration projects, capitalizing on my comprehensive expertise to drive
            their successful execution.
            </p>

            <p>
                Mentored two new team members through a rigorous three-month
            training program, ensuring a 75% pass rate. Regularly conducted
            productive weekly check-ins, offering guidance and solutions to resolve
            any roadblocks.
            </p>

            <p>
                My tenure at Guidewire showcases my unwavering commitment to
                delivering exceptional results while fostering collaboration and
                innovation. I am eager to contribute my technical prowess and mentoring
                abilities to a dynamic team dedicated to pushing the boundaries of
                software engineering excellence.
            </p>
        </section>
    </>
  )
}

export default WorkExperienceSection