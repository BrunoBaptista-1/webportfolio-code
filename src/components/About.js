import React, { useEffect, useState } from "react";
import Contacts from "./Contacts";
import BackButton from "./BackButton";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function About() {

    const [path, setPath] = useState(1);

    useEffect(() => {
        const observer = new IntersectionObserver(element => {
            element.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                } else {
                    entry.target.classList.remove("show")
                }
            })
        })

        const hiddenElements = document.querySelectorAll(".hidden");
        hiddenElements.forEach(element => observer.observe(element));
    });

    return (
        <div>
            <BackButton />
            <div className="topSection">
                <h1 className="header">Who am I?</h1>
            </div>

            <div className="middleSection hidden hidden-left">
                <div className="wrapper">
                    <div className="avatar-border">
                        <img className="profile" src="../../images/Bruno.png" alt="" />
                    </div>
                </div>
                <p className="text text-mid">
                    Hi! My name is Bruno, and I'm from Portugal. I consider myself a foodie,
                    so I'm all about discovering the next hidden-gem restaurants and what
                    they have to offer!
                </p>
            </div>

            <div className="bottomSection hidden hidden-right">
                <p className="text text-bot">
                    I'm also an Electrical and Computer engineer who is
                    passionate about technology, and other problem solving
                    fields. I love facing new challenges,
                    learning about different cultures, and sharing
                    experiences with others.
                    <br /><br />
                    I also enjoy travelling
                    and exploring new places!
                </p>
                <div className="wrapper">
                    <div className="carousel">
                        <div className="container">
                            <div className="buttonPrev" onClick={() => {
                                if (path === 1) setPath(4);
                                if (path > 1) {
                                    const value = path - 1;
                                    setPath(value);
                                }
                            }}> <ArrowBackIosIcon fontSize="large" /> </div>
                            <img className="carousel-image" src={"../../images/carousel/" + path.toString() + ".JPG"} alt="" />
                            <div className="buttonNext" onClick={() => {
                                if (path === 4) setPath(1);
                                if (path < 4) {
                                    const value = path + 1;
                                    setPath(value);
                                }
                            }}> <ArrowForwardIosIcon fontSize="large" /> </div>
                        </div>
                    </div>
                </div>
            </div>
            <Contacts />
        </div>
    );

}

export default About;