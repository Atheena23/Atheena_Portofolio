// src/App.jsx
import React from "react";
import Card from "./Card.jsx";
import "./App.css";
import webdev from "./assets/webdev.jpeg";
import photo from "./assets/photography.jpg";
import fitness from "./assets/fitness.jpg";

function App() {
  return (
    <div className="app">
      <header>
        <h1>Atheena Ragish</h1>
        <p>Web Developer & Creative Enthusiast</p>
      </header>

      <div className="card-container">
        <Card
          image={webdev}
          title="Web Development"
          description="Building modern, responsive websites and web applications using React, JavaScript, and modern CSS frameworks."
          tags={["React", "JavaScript"]}
        />
        <Card
          image={photo}
          title="Photography"
          description="Capturing beautiful moments and landscapes, specializing in street photography and natural lighting techniques."
          tags={["Creative", "Visual Arts"]}
        />
        <Card
          image={fitness}
          title="Fitness & Health"
          description="Passionate about maintaining a healthy lifestyle through regular exercise, yoga, and mindful nutrition practices."
          tags={["Wellness", "Lifestyle"]}
        />
      </div>
    </div>
  );
}

export default App;
