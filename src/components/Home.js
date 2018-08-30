
import React, { Component } from 'react';


class Home extends Component {
    render() {
        return (
            <div className="page">
                <div className="home">
                    <header className="header">
                        <div className="">
                                <div className="links">
                                    <a href="/" className="home-link" id=""><i className="fa fa-home"></i></a>
                                    <a href="http://localhost:3000#projects">Projects</a>
                                    <a href="http://localhost:3000#about">About</a>
                                    <a href="http://localhost:3000#contact">Contact</a>
                                </div>
                        </div>
                    </header>
                    <section className="section1">
                        <main>
                            <div className="parallax">
                                <br/>
                                <section className="">
                                    <h1 className="title">Michael Perkins</h1>
                                    <h2 className="subtitle">Full-Stack Web Development</h2>
                                </section>
                                <i className="arrow fa fa-angle-down"></i>
                            </div>
                        </main>
                    </section>
                </div>
                <hr className="col-6 hr"/>
                <div className="projects">
                    <a name="projects"></a>
                    <section className="section2">
                        <h2 className="headers">Projects</h2>
                        <hr/>
                    </section>
                    <hr/>
                    <div className="parallax2">
                    </div>
                </div>
                <div className="about">
                    <a name="about"></a>
                    <section className="section3">
                        <h2 className="headers">About</h2>
                        <h4>Hi, I am a full-stack developer from Salt Lake City, Utah.</h4>
                    </section>
                    <div className="parallax3">
                    </div>
                </div>
                <hr className="col-6 hr"/>
                <div className="contact">
                    <a name="contact"></a>
                    <section className="section4">
                        <h2 className="headers">Contact</h2>
                        <h3>Feel free to reach out to me</h3>
                        <br/>
                        <div className="contacts">
                            <h5>Email: michael.perkins.d@gmail.com</h5>
                            <br/>
                            <h5>LinkedIn: <a className="linked-in" href="https://www.linkedin.com/in/michael-perkins-d/">Michael Perkins</a></h5>
                        </div>
                        <div className="parallax4">
                        </div>
                    </section>
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