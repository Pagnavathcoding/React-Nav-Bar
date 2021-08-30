import React, { useState, useEffect } from 'react';
import "./Nav.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
function Home() {
    const [toggle] = useState(true);
    return (
        <Router>
            <div className="container">
                <h1>Welcome to Home Page!</h1>
                <Link to="/about"><button onClick={toggle ? <About /> : undefined}>About Us</button></Link>
            </div>
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
            </Switch>
        </Router>
    )
}
function About() {
    const [user, setUser] = useState([]);
    const api = 'https://randomuser.me/api/0.8/?results=100';
    useEffect(() => {
        async function randomUser() {
            const res = await fetch(`${api}`);
            return res.json().then((data) => {
                setUser(data.results);
                console.log(data);
            }).catch((err) => {
                console.log(err);
            })
        }
        randomUser();
    }, [])
    return (
        <div>
            <div className="container">
                <h1>Welcome to About Page!</h1>
            </div>
            <div className="user">
                {user.map((infos) => {
                    function moreInfos() {
                        const x = infos.user;
                        alert(
                            `Name: ${x.name.first} ${x.name.last}\nEmail: ${x.email}\nPassword: ${x.password}\nCity: ${x.location.city}\nPhone: ${x.phone}`
                        );
                    }
                    return (
                        <div key={infos.user.username} className="infos">
                            <img src={infos.user.picture.large} alt={infos.user.username} />
                            <h1>{infos.user.name.first} {infos.user.name.last}</h1>
                            <button onClick={moreInfos}>More Infos</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
function Project() {
    return (
        <div className="container">
            <h1>Welcome to Project Page!</h1>
        </div>
    )
}
function Services() {
    return (
        <div className="container">
            <h1>Welcome to Services Page!</h1>
        </div>
    )
}
function Contact() {
    return (
        <div className="container">
            <h1>Welcome to Contact Page!</h1>
        </div>
    )
}
function Nav({ logo, bar, close }) {
    const [toggle, setToggle] = useState(true);
    function handleSubmit() {
        setToggle(!toggle);
    }
    return (
        <Router>
            <nav>
                <div className="logo">
                    <Link to="/" className="link"><h1>{logo}</h1></Link>
                </div>
                <ul className={toggle ? "menu" : "menu show"}>
                    <Link className="link" to="/" onClick={handleSubmit}><li>Home</li></Link>
                    <Link className="link" to="/about" onClick={handleSubmit}><li>About</li></Link>
                    <Link className="link" to="/project" onClick={handleSubmit}><li>Project</li></Link>
                    <Link className="link" to="/services" onClick={handleSubmit}><li>Services</li></Link>
                    <Link className="link" to="/contact" onClick={handleSubmit}><li>Contact</li></Link>
                    <div className="close" onClick={handleSubmit}>
                        <img src={close} />
                    </div>
                </ul>
                <div className="bar" onClick={handleSubmit}>
                    <img src={bar} />
                </div>
            </nav>
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/project">
                    <Project />
                </Route>
                <Route path="/services">
                    <Services />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}
export default Nav;