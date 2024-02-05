import React from "react";
import Main from "../../components/main/Main";
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <Main />
            <video
                width="100%"
                className="home__video"
                autoPlay
                muted
                loop
                playsInline
            >
                <source
                    src="https://digitalassets.tesla.com/tesla-contents/video/upload/Homepage-Model-Y-Desktop-NA-v2.mp4"
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default Home;
