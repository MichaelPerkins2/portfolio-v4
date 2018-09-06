
import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';


class Home extends Component {
    render() {
        return (
            <div className="page">
                <div className="home">
                    <section id='top'>
                        <header className="header">
                            <AnchorLink href="#top"><i className="fa fa-home"></i></AnchorLink>
                            <AnchorLink offset='-600' href="#projects">Projects</AnchorLink>
                            <AnchorLink offset='-1236' href="#about">About</AnchorLink>
                            <AnchorLink offset='-1902' href="#contact">Contact</AnchorLink>
                        </header>
                    </section>
                    <br/>
                    <div className="">
                        <h1 className="title">Michael<br/>Perkins</h1>
                        <h2 className="subtitle">:Full-Stack<br/>Web Development</h2>
                    </div>
                    <div className="arrow">
                        <AnchorLink offset='-600' href="#projects" className="arrow"><i className="fa fa-angle-down fa-2x"></i></AnchorLink>
                    </div>
                </div>
                <div className="p-parallax container-fluid">
                    <br/>
                    <div className="projects">
                        <section id='projects' className="row justify-content-center">
                            <h2 className="headers col-lg-2 col-md-2 col-sm-4 col-7">Projects</h2>
                        </section>
                        <hr className="col-6 hr"/>
                        <div className="project-content container">
                            <p>Here are my projects</p>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                        </div>
                    </div>
                </div>
                <div className="break"></div>
                <div className="a-parallax container-fluid">
                    <br/>
                    <div className="about">
                        <section id='about' className="row justify-content-center">
                            <h2 className="headers col-lg-2 col-md-2 col-sm-4 col-7">About</h2>
                        </section>
                        <hr className="col-6 hr"/>
                        <div className="about-content container">
                            <p>Hi, I am a full-stack developer from Salt Lake City, Utah.</p>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                        </div>
                    </div>
                </div>
                <div className="break"></div>
                <div className="c-parallax container-fluid">
                    <br/>
                    <div className="contact">
                        <section id='contact' className="row justify-content-center">
                            <h2 className="headers col-lg-2 col-md-2 col-sm-4 col-7">Contact</h2>
                        </section>
                        <hr className="col-6 hr"/>
                        <div className="contact-content container">
                            <p>Feel free to reach out to me</p>
                            <div className="contacts">
                                <p>Email: michael.perkins.d@gmail.com</p>
                            <p>LinkedIn: <a className="linked-in" href="https://www.linkedin.com/in/michael-perkins-d/">Michael Perkins</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="col-6 hr"/>
                <div className="container-fluid social">
                    <a href="https://www.facebook.com/michael.perkins.d" className="fa fa-facebook"></a>
                    <a href="https://www.linkedin.com/in/michael-perkins-d/" className="fa fa-linkedin"></a>
                    <a href="https://github.com/MichaelPerkins2" className="fa fa-github"></a>
                    <a href="mailto:michael.perkins.d@gmail.com" className="fa fa-envelope"></a>
                </div>
            </div>
        )
    }

}

export default Home