import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar profilePic="https://media.licdn.com/dms/image/D4E03AQErHnoetyL0Og/profile-displayphoto-shrink_400_400/0/1686083136878?e=1694649600&v=beta&t=ElDbB3W0kIjWSkDjvi1KFbTnYKLbIzvxvCDxa_FtrSI" />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(props) {
  return (
    <div>
      <img className="avatar" src={props.profilePic} alt="myImg" />
    </div>
  );
}

function Intro() {
  return (
    <div className="data">
      <h3>Evert Amador</h3>
      <p>
        Front-End Developer and Software Engineer. I ❤️ to code and when not
        coding I like to play videogames.
      </p>
    </div>
  );
}

function SkillList(props) {
  return (
    <ul className="skill-list">
      <li className="skill">{"Java Script 😃"}</li>
      <li className="skill">{"CSS 🐐"}</li>
      <li className="skill">{"HTML 👏"}</li>
      <li className="skill">{"Python 🐍"}</li>
      <li className="skill">{"Git and Github 🌏"}</li>
    </ul>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
