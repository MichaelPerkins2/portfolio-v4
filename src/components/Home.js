
import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';


class Home extends Component {
    render() {
        return (
            <div className="page">
                <div className="home container-fluid">
                    <section id='top'>
                        <header className="header">
                            <AnchorLink href="#top"><i className="fa fa-home"></i></AnchorLink>
                            <AnchorLink offset='60' href="#projects">Projects</AnchorLink>
                            <AnchorLink offset='60' href="#about">About</AnchorLink>
                            <AnchorLink offset='60' href="#contact">Contact</AnchorLink>
                        </header>
                    </section>
                    <br/>
                    <div className="row">
                        <h1 className="title col">Michael <br/> Perkins</h1>
                        <h2 className="subtitle col">Full-Stack <br/> Web Development</h2>
                    </div>
                    <div className="arrow">
                        <AnchorLink offset='60' href="#projects" className="arrow"><i className="fa fa-angle-down fa-2x"></i></AnchorLink>
                    </div>
                </div>
                <hr className="col-6 hr"/>
                <div className="projects">
                    <section id='projects'>
                        <h2 className="headers">Projects</h2>
                    </section>
                </div>
                <div className="about">
                    <hr className="col-6 hr"/>
                    <section>
                        <section id='about'>
                            <h2 className="headers">About</h2>
                        </section>
                        <h4>Hi, I am a full-stack developer from Salt Lake City, Utah.</h4>
                    </section>
                </div>
                <hr className="col-6 hr"/>
                <div className="contact">
                    <section id='contact'>
                        <h2 className="headers">Contact</h2>
                    </section>
                    <h3>Feel free to reach out to me</h3>
                    <br/>
                    <div className="contacts">
                        <h5>Email: michael.perkins.d@gmail.com</h5>
                        <br/>
                        <h5>LinkedIn: <a className="linked-in" href="https://www.linkedin.com/in/michael-perkins-d/">Michael Perkins</a></h5>
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