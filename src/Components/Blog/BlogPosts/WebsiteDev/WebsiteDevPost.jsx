import React from 'react'
import '../../../../Styles/WebsiteDevPost.css'
import {websiteBlogPhotos} from '../../../../data/data'
import { Link } from 'react-router-dom'

function WebsiteDevPost() {
  return (
    <div className="websiteDevPost">
        <h1>Creating a Personal Website with ReactJS and AWS Amplify</h1>
        <img src='../Assets/Images/Blog/Coding.jpg' alt='' />
        <ul>
          <li><a href='#project-overview'>Project Overview</a></li>
          <li><a href='#technology-stack'>Technology Stack</a></li>
          <li><a href='#structure'>Project Structure</a></li>
          <li><a href='#workflow'>Deployment Workflow</a></li>
          <li><a href='#mobile'>Optimization for Mobile Devices</a></li>
          <li><a href='#future'>Future Enhancements</a></li>
          <li><a href='#conclusion'>Conclusion</a></li>
        </ul>
        <h2>Introduction</h2>
        <p>
        In today's digital age, having a strong online presence is essential for any software engineer. One of the best ways to showcase your skills, projects, and experiences is by having a personal website. It's not just a digital business card but a platform where you can express your creativity, share your knowledge, and connect with like-minded professionals. </p>
        <p id="project-overview">In this article, we'll explore the process of creating your own personal website using ReactJS, a popular JavaScript library, and hosting it on AWS Amplify, a powerful cloud platform that simplifies deployment and hosting. Whether you're a seasoned developer or just getting started, this step-by-step guide will help you build a professional online presence that truly reflects your unique abilities and aspirations.
        </p>
        <h2 >Project Overview</h2>
        <h3>Online CV</h3>
        <p>In today's competitive job market, having a professional online presence is not just a preference but a necessity. The primary goal of this project is to build a personal website that doubles as an online CV. This serves as a one-stop destination for potential employers to learn more about my skills, work experience, and qualifications. Through a well-structured and visually appealing website, I can showcase my professional journey, highlight my accomplishments, and make a compelling case for why I am an ideal candidate for their organization.</p>
        <h3>Technical Portfolio</h3>
        <p>As a software engineer, I am continually engaged in personal projects that allow me to experiment with new technologies and showcase my creative problem-solving abilities. The website will act as a platform for hosting and presenting these projects. Whether it's a web application, a mobile app, or any other digital creation, my personal website will provide a place to display my portfolio. This not only demonstrates my technical skills but also offers tangible evidence of my ability to bring ideas to life.</p>
        <h3>Fusion of Personal and Professional</h3>
        <p>
        Beyond my professional life, I have a range of hobbies and interests that I'm passionate about. Creating a personal blog as part of this project will allow me to share my experiences and insights related to these hobbies. Whether it's surfing, playing chess, or exploring new aspects of music, the blog will be a space where I can connect with like-minded individuals, provide value through informative content, and document my personal journey. It's not just about showcasing my technical prowess but also sharing a more personal side of me.
        </p>
        <p id="technology-stack">
        In summary, this project is not merely about building a website; it's about crafting an online identity that reflects my professional competence, creativity, and personal interests. By amalgamating my professional portfolio and personal passions, I aim to create a dynamic and engaging online presence that resonates with potential employers, fellow developers, and anyone interested in the intersection of technology and personal expression. This website is a canvas where my diverse experiences and skills come to life, and I look forward to sharing the journey of its creation with you in this article.
        </p>
        <h2>Technology Stack</h2>
        <p>The choice of the right technology stack for your personal website can significantly impact its performance, scalability, and development process. In my project, I opted for ReactJS as the frontend framework and AWS Amplify as the hosting and deployment platform. Here's why these technologies were the perfect fit:</p>
        <h3>ReactJS: A Dynamic Frontend Framework</h3>
        <p>ReactJS stands out as one of the most popular and versatile JavaScript libraries for building dynamic user interfaces. Here are some key reasons I chose React:</p>
        <section >
        <div className='reactImage'>
          <img src='../Assets/Images/Blog/ReactJS.jpg' alt='' />
        </div>
        <section>
        <ol>
          <li><b>Component-Based Architecture: </b>React's component-based architecture promotes modularity and reusability. This means I can break down my website into smaller, manageable components, making it easier to maintain and extend in the long run. Whether it's a navigation bar, a blog post, or a project showcase, each can be encapsulated within its component.</li>
          <li><b>Virtual DOM: </b>React employs a virtual Document Object Model (DOM), which ensures efficient updates and renders. This translates into faster and smoother user experiences. As my website evolves and grows, React's virtual DOM helps maintain performance.</li>
          <li><b>Large Developer Community:</b> The vibrant React community provides an extensive library of open-source components, tools, and resources. This not only accelerates development but also ensures I have access to a wealth of solutions and best practices.</li>
          <li><b>SEO-Friendly:</b> React is well-equipped for SEO optimization. It's essential that my personal website is discoverable by search engines, and React's server-side rendering capabilities assist in this aspect.</li>
        </ol>
        </section>
        </section>
        <section>
          <h3>AWS Amplify: Steamlining Deployment and Hosting</h3>
          <p>Once the website was ready to go live, choosing AWS Amplify as the hosting and deployment platform was a strategic decision. AWS Amplify offers several advantages for hosting web applications:</p>
          <div className='reactImage'>
          <img src='../Assets/Images/Blog/AWS.jpg' alt='' />
        </div>
        <ol>
          <li><b>Simplified Deployment:</b> AWS Amplify simplifies the deployment process by providing a straightforward and automated way to connect your code repository (e.g., GitHub or GitLab) and set up continuous integration and continuous deployment (CI/CD) pipelines. This streamlined approach ensures that any updates to my website are seamlessly deployed without manual intervention.</li>
          <li><b>Scalability and Performance:</b> Leveraging AWS's robust cloud infrastructure, Amplify ensures that my website is both scalable and high-performing. It harnesses services like AWS Lambda for serverless functions and Amazon CloudFront for content delivery, which result in fast load times and an optimal user experience.</li>
          <li><b>Custom Domains and SSL:</b> AWS Amplify allows me to associate custom domains with my website, providing a professional and branded online presence. It also simplifies the process of setting up SSL certificates for secure browsing.</li>
          <li><b>Analytics and Monitoring:</b> AWS Amplify integrates with Amazon CloudWatch and other monitoring tools, allowing me to gain insights into user behavior and website performance. This data is invaluable for optimizing the website and understanding how users interact with it.</li>
        </ol>
        <br></br>
        <p id="structure">In summary, the selection of ReactJS and AWS Amplify forms a powerful combination for my personal website. React's flexibility and rich ecosystem make it an ideal choice for crafting an engaging user interface, while AWS Amplify streamlines the deployment and hosting process, ensuring that my website is performant, secure, and ready to evolve as my online presence continues to grow. These technologies play a pivotal role in turning my vision into a dynamic and effective personal website.</p>
        </section>
        <h2>Project Structure</h2>
        <section>
          <h3>Components and Modularity</h3>
          <p>The project is structured around a component-based architecture, which is one of React's core strengths. Each distinct section of the website, such as the header, navigation menu, blog posts, and project showcases, is encapsulated within its own React component. This approach promotes modularity, making it easier to manage and extend the website over time.</p>
          <img src='../Assets/Images/Blog/Directory.jpg' alt=''/>
        </section>
        <section>
          <h3>Directory Organisation</h3>
          <p>To keep the project tidy and maintainable, the codebase is organized into directories based on their functionality. Here's a glimpse of the main directories and their purposes:</p>
          <br></br>
          <ul>
            <li><b>Components:</b> This directory holds all the React components used in the project. Each component is stored in a separate file, promoting reusability and making it simple to locate and update specific sections of the website.</li>
            <li><b>Styles:</b> CSS and styling-related files are organized in this directory. It encompasses CSS files, style modules, or any other styling approach chosen for the project.</li>
            <li><b>Assets: </b>Images, icons, and other media resources used within the website are stored here. This directory ensures that all assets are easily accessible and properly organized.</li>
            <li><b>Pages:</b> React Router is employed to handle routing within the website. Pages, such as the home page, blog post page, and project showcase page, have their dedicated directory within the "pages" directory.</li>
          </ul>
          <br></br>
          <h3>Version Control</h3>
          <p>The project's code is managed using a version control system like Git, with a repository hosted on a platform like GitHub. This enables collaboration, tracks changes, and ensures that the project is well-documented and easy to manage.</p>
          <h3>Documentation</h3>
          <p>Proper documentation is an integral part of the project structure. This includes inline comments within the code, a README file detailing how to set up and run the project locally, and any other documentation necessary for onboarding collaborators or understanding the project's structure and functionality.</p>
          <h3>Scaling for the Future</h3>
          <p>The project's structure is not merely about organizing the current codebase but also anticipating future growth. The well-organized, modular structure ensures that as the website evolves, new features and components can be seamlessly integrated without causing codebase chaos.</p>
          <p id="workflow">In essence, the project structure is the backbone of the personal website, enabling organized development, maintainability, and scalability. It ensures that the code is clear, manageable, and well-documented, facilitating a smooth development process and positioning the website for future enhancements and growth.</p>
        </section>
        <h2>Deployment Workflow</h2>
        <h3>Continuous Integration and Continuous Deployment (CI/CD):</h3>
        <p>The deployment workflow revolves around the concept of Continuous Integration and Continuous Deployment (CI/CD). This approach is pivotal for maintaining a smooth development and deployment process. Here's how it works:</p>
        <img src='../Assets/Images/Blog/Github.jpg'/>
        <br></br>
        <section>
          <ol>
            <li><b>GitHub Integration:</b> The project's code is hosted on GitHub, a popular version control platform. The repository includes multiple branches for various stages of development, such as the master branch for the stable codebase and feature branches for ongoing work.</li>
            <li><b>Production Branch:</b> To maintain a clean separation between development and production, a dedicated production branch is used. This branch contains only the code that is considered ready for deployment to the live website. This separation ensures that any changes on the production branch have already been tested and are stable.</li>
            <li><b>Automation with AWS Amplify:</b> AWS Amplify is configured to monitor the production branch on GitHub. When changes are detected on the production branch, Amplify automatically initiates the deployment process.</li>
            <li><b>Building and Testing:</b> Upon receiving the trigger from GitHub, AWS Amplify automatically builds the website. It compiles the React code, processes the styles, and any other build steps required. Additionally, it can run tests to ensure the integrity of the code.</li>
            <li id="mobile"><b>Deployment to AWS:</b> Once the build process is completed and tests pass successfully, AWS Amplify deploys the website to the chosen environment, ensuring that the latest changes are reflected on the live site.</li>
          </ol>
        </section>
        <h2>Optimization for Mobile Devices: Overcoming Challenges</h2>
        <p>While optimizing my personal website for mobile devices, I encountered a series of issues that needed resolution to ensure a seamless and visually appealing experience for mobile users. Here, I'll walk you through the problems I faced and the solutions I devised to address them:</p>
        <img src='../Assets/Images/Blog/Mobile.jpg' alt=''/>
        <ol>
          <li>
            <h3>Issue: Nav Bar Incorrect Positioning with CSS</h3>
            <p><b>Root Cause:</b> One of the first challenges I encountered was the incorrect positioning of the navigation bar on mobile devices. After some investigation, I pinpointed the root cause of the problem: the CSS property 'justify-content' was set to 'end', which was causing the misalignment.</p>
            <p><b>Solution:</b> To resolve this issue, I adjusted the 'justify-content' property to 'center'. This realignment ensured that the navigation bar was displayed correctly and centrally on the mobile screen, enhancing the overall user experience.</p>
          </li>
          <li>
            <h3>Issue: Home Page Hyperlink Incorrect Color</h3>
            <p><b>Root Cause:</b> Another issue I faced was related to the incorrect color of hyperlinks on the home page when viewed on mobile devices. It was perplexing, as I had expected React Router Dom to handle these changes, but it wasn't functioning as expected.</p>
            <p><b>Solution:</b> To rectify this, I incorporated the 'Link' component from React Router Dom with the 'to' attribute, ensuring that the hyperlink color behaved as intended. This adjustment allowed me to control and customize the link's appearance, resolving the issue and enhancing user interaction.</p>
          </li>
          <li>
            <h3>Issue: Text Overrun on Mobile Devices</h3>
            <p><b>Solution:</b> On mobile devices, text overrun became apparent, making the content less legible and user-friendly. To tackle this issue, I adopted a modular approach to content display and made significant changes to the CSS layout. The content was restructured to ensure it flowed appropriately on smaller screens, enhancing readability and user engagement.</p>
          </li>
        </ol>
        <p id="future">These are just a few examples of the challenges I encountered while optimizing my website. There were other issues and solutions I implemented, which can be explored in detail by visiting my <Link to='https://github.com/xJWzZ/react-personal-website-1/issues'>Github</Link> repository, where you can find an extensive record of the development process, including the fixes and optimizations made to ensure a mobile-responsive and user-friendly experience.</p>
        <h2>Future Enhancements</h2>
        <p>Looking ahead, my personal website is not just a static project but a dynamic platform that can evolve and adapt to changing needs and technologies. Here, I'd like to highlight some of the future enhancements and improvements that I have in mind:</p>
        <img src='../Assets/Images/Blog/AWS2.jpg' alt=''/>
        <section>
          <ul>
            <li><b>Enhanced Interactivity:</b> I plan to incorporate more interactive elements, such as real-time chat or interactive data visualization, to make the website more engaging and user-friendly.</li>
            <li><b>Portfolio Expansion:</b> As my skills and experiences continue to grow, I intend to expand my portfolio section with new and innovative projects. These could include open-source contributions, personal software products, and collaborative ventures.</li>
            <li><b>Mobile Optimization:</b> Continuous efforts will be dedicated to further enhancing mobile responsiveness. As mobile usage continues to rise, it's imperative that the website provides a seamless experience on smaller screens.</li>
            <li><b>Blog Diversification:</b> The personal blog section will see more diversified content. Alongside technical insights, I plan to share personal development journeys, book recommendations, and perhaps even delve into video content in the form of webinars or tutorials.</li>
            <li><b>Accessibility Improvements:</b> Web accessibility is paramount. I aim to implement best practices for web accessibility to ensure that the website is inclusive and usable by all individuals, including those with disabilities.</li>
          </ul>
          <p id="conclusion">By detailing these future enhancements, I aim to convey my commitment to continuous learning and development. My personal website is not a static entity but a reflection of my growth as a software engineer and a commitment to providing an enriched user experience.</p>
        </section>
        <h2>Conclusion and Takeaway</h2>
        <p>In closing, the development of my personal website using ReactJS and its hosting on AWS Amplify has been an enlightening journey. This project embodies the synergy of cutting-edge technology and personal expression. Here are the key takeaways from this endeavor:</p>
        <img src='../Assets/Images/Blog/ThumbsUp.jpg'/>
        <p>In the world of software engineering, a personal website is not just a showcase of skills; it's a living testament to one's adaptability and ambition. ReactJS and AWS Amplify have proven to be invaluable tools in this journey, enabling the creation of a website that's not just a digital CV but a dynamic platform where technology and personal expression unite. I look forward to the ongoing evolution of this project and the continued journey of growth and exploration in the ever-evolving landscape of technology. Thank you for joining me on this adventure.</p>
        <br></br>
    </div>
  )
}

export default WebsiteDevPost