import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.webp'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://adityauniversity.in/latecomers/dashboard" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> </div>
            </header>
            <div className="body">
              <h3>The Late Commers</h3>
              <p> The Late Commers website is designed and developed to offer track and send the alert messages to the students and also to the respected parents to make sure they come to the college on time next time and also it had several other facilities like creating visitor passes to new commers, out passes to hostler students etc...</p>
            </div>
            <footer> <ul className="tech-list"> <li>React.JS</li> <li>Node.JS</li> <li>MongoDB</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/JyothiMamidipalli/VeriTech-Task-2" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
                <a href="https://jyothimamidipalli.github.io/VeriTech-Task-2/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>College Website</h3>
              <p>
                It is a basic website college website. It shows the information about the college and the Environment.It features modern styling and focuses on providing a user-friendly experience across various devices.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>BootStrap</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://adityatransporthub.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> </div>
            </header>
            <div className="body">
              <h3>GPS Tracking Web Application</h3>
              <p> The GPS Tracking Web Application is designed to offer users seamless access to real-time bus tracking, reliable navigation, and a high-UI experience. With the Get Directions to My Bus page, users can locate the closest bus in real-time and receive accurate ETAs, while the Live Tracking feature keeps them informed of the buses exact location and route progression. the Home Page consists of featured notifications, and quick-access links, ensuring users can effortlessly navigate and make use of all application features. </p>
            </div>
            <footer> <ul className="tech-list"> <li>React.JS</li> <li>Node.JS</li> <li>MongoDB</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/JyothiMamidipalli/Resume_Builder" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> </div>
            </header>
            <div className="body">
              <h3>Resume Builder</h3>
              <p> We developed an ATS-Free Resume Builder that simplifies the process of creating ATS-compatible resumes. The solution will be structured as follows: </p>
                <p>1.User input and data collection</p>
                <p>2.ATS compatible templates</p>
                <p>3.Real Time Implementation </p>
                <p>4.Ability to download resume in pdf format</p> 
            </div>
            <footer> <ul className="tech-list"> <li>React.JS</li> <li>Node.JS</li> <li>MongoDB</li> </ul> </footer>
          </div>
        </ScrollAnimation>


        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/JyothiMamidipalli/CRUD-Application" target="\_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://jyothimamidipalli.github.io/CRUD-Application/" target="\_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>CRUD OPERATION</h3>
              <p>
                This website is a CRUD (Create, Read, Update, Delete) application designed for efficient data management. It features a user-friendly interface for adding, viewing, editing, and deleting records. The responsive design ensures smooth functionality across different devices.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}