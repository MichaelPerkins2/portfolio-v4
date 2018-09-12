
import React, { Component } from 'react';
import Routing from './Routing';
import About from './styling/About.css';
import Contact from './styling/Contact.css';
import HeaderStyling from './styling/Header.css';
import HomeStyling from './styling/Home.css';
import Projects from './styling/Projects.css';


class App extends Component {
    render() {
        return (

            <div>
                <Routing/>
            </div>
        );
    }
}

export default App;
