
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
                            <AnchorLink offset='-910' href="#projects">Projects</AnchorLink>
                            <AnchorLink offset='-1870' href="#about">About</AnchorLink>
                            <AnchorLink offset='-3000' href="#contact">Contact</AnchorLink>
                        </header>
                    </section>
                    <div>
                        <h1 className="title">Michael<br/>Perkins</h1>
                        <h2 className="subtitle">:Full-Stack<br/>Web Development</h2>
                    </div>
                    <div className="arrow">
                        <AnchorLink offset='-910' href="#projects" className="arrow"><i className="fa fa-angle-down fa-3x"></i></AnchorLink>
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
                            <div className="row">
                                <div className="project1 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                    <h4>To-Do List</h4>
                                    <br/>
                                    <p>View To-Do List <a className="project-content-links" href="https://to-do-list-mp.netlify.com/" target="_blank">Here</a></p>
                                    <p>View the code for this project: <a className="project-content-links" href="https://github.com/MichaelPerkins2/to-do-list-fe" target="_blank">Front</a> // <a className="project-content-links" href="https://github.com/MichaelPerkins2/to-do-list-be" target="_blank">Back</a></p>
                                </div>
                                <div className="project2 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                    <h4>Blackjack</h4>
                                    <br/>
                                    <p>View Blackjack Game <a className="project-content-links" href="https://blackjack-game-mp.herokuapp.com/" target="_blank">Here</a></p>
                                    <p>View the <a className="project-content-links" href="https://github.com/MichaelPerkins2/blackjack" target="_blank">code</a> for this project</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="project3 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                    <h4>Tic-Tac-Toe</h4>
                                    <br/>
                                    <p>View Tic-Tac-Toe Game <a className="project-content-links" href="https://tic-tac-toe-mp.netlify.com/" target="_blank">Here</a></p>
                                    <p>View the <a className="project-content-links" href="https://github.com/MichaelPerkins2/tic-tac-toe-game" target="_blank">code</a> for this project</p>
                                </div>
                                <div className="project4 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                    <h4>Scrubble</h4>
                                    <br/>
                                    <p>View the <a className="project-content-links" href="https://github.com/MichaelPerkins2/scrubble" target="_blank">code</a> for this project</p>
                                </div>
                            </div>
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
                            <p className="about-p"> Hi, I am a full-stack developer from Salt Lake City, Utah. I have recently earned my Certificate of Proficiency from
                                Helio Training's full-stack web development bootcamp course. I am analytical, detail-oriented, and ambitious about my goals,
                                and plan to continue my education and to enhance my abilities as a developer.</p><br/>
                            <p className="skills-p"> The skills I have acquired and will further develop include:<br/>
                                JavaScript, HTML, CSS, React, GraphQL, MongoDB, and Bootstrap.</p><br/>
                            <p className="about-p"> I am determined to deepen my knowledge and perfect my skills in each stage of development as to prove a valuable asset to a company.
                                I am passionate about my work and driven to achieve success.</p>
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
                            <p>LinkedIn: <a className="linked-in" href="https://www.linkedin.com/in/michael-perkins-d/" target="_blank">Michael Perkins</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="col-6 hr"/>
                <div className="container-fluid social">
                    <a href="https://www.facebook.com/michael.perkins.d" target="_blank" className="fa fa-facebook"></a>
                    <a href="https://www.linkedin.com/in/michael-perkins-d/" target="_blank" className="fa fa-linkedin"></a>
                    <a href="https://github.com/MichaelPerkins2" target="_blank" className="fa fa-github"></a>
                    <a href="mailto:michael.perkins.d@gmail.com" target="_blank" className="fa fa-envelope"></a>
                </div>
            {/*<div className="container">*/}
                {/*<div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">*/}
                    {/*<ol className="carousel-indicators">*/}
                        {/*<li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>*/}
                        {/*<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>*/}
                        {/*<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>*/}
                    {/*</ol>*/}
                    {/*<div className="carousel-inner">*/}
                        {/*<div className="carousel-item active">*/}
                            {/*<img className="d-block w-100" src={require('../img/carousel/Earth.jpg')} alt=" First slide"/>*/}
                        {/*</div>*/}
                        {/*<div className="carousel-item">*/}
                            {/*<img className="d-block w-100" src={require('../img/carousel/Lighthouse.jpg')} alt="Second slide"/>*/}
                        {/*</div>*/}
                        {/*<div className="carousel-item">*/}
                            {/*<img className="d-block w-100" src={require('../img/carousel/Matterhorn.jpg')} alt="Third slide"/>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    {/*<a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"*/}
                       {/*data-slide="prev">*/}
                        {/*<span className="carousel-control-prev-icon" aria-hidden="true"></span>*/}
                        {/*<span className="sr-only">Previous</span>*/}
                    {/*</a>*/}
                    {/*<a className="carousel-control-next" href="#carouselExampleIndicators" role="button"*/}
                       {/*data-slide="next">*/}
                        {/*<span className="carousel-control-next-icon" aria-hidden="true"></span>*/}
                        {/*<span className="sr-only">Next</span>*/}
                    {/*</a>*/}
                {/*</div>*/}
            {/*</div>*/}
            </div>
        )
    }

}

export default Home