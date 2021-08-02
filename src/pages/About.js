import React from 'react'

const About = () => {
    return (
        <div className ="aboutme">
            <span className ="title">About Me</span>
            <p>My name is He Zhao (Aka : Harry) , I define myself as a fullstack Developer.</p>
            <p>The following is my technical stack:</p>
            <p><a className="tools">Programing Language:     </a>Java, Python, JavaScript,Node.js, Html, SCSS, </p>
            <p><a className="tools">Frameworks & Tools:      </a> SpringBoot, React js, Express js , Mongoose, Spring MVC, Mybatis, MongoDB, JSP, MySQL</p>
            
            <p>Click button to view my updated resume</p>
            
            <a href ="https://docsend.com/view/x6j7hcjgnjz97y26" target="_blank">
            <button type="button" className="btn">He Zhao Resume</button>
            </a> 
            
            <p>Phone Number: 6265548678</p>
            <p>Email: hzhao0117@gmail.com</p>
            
            <br/>
            <span className ="title">About the Project</span>
            <p>The website was built base on the React js</p>
            <p>The data was fetched from pexel.com by using pexel API</p>
        </div>
    )
}

export default About
