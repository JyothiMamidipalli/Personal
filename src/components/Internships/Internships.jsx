import React from 'react';
import './Internships.css';
// import { InternshipsContainer } from './InternshipsStyles';
import DSA from "../../assets/DSA.jpg"
// import CM from "../../assets/gfg_cm.jpg"
// import CN from "../../assets/CN.jpg"
import Mine1 from "../../assets/Mine1.jpg"
import Mine2 from "../../assets/Mine2.jpg"
// import BT from "../../assets/best_trainee.jpeg"


function Internships() {
    const internships = [
        {
            title: 'Data Structures Intern',
            startDate: 'November 2023',
            endDate: 'Novermber 2023',
            duration: '1 month',
            description: 'Conducted a Coding Workshop at Aditya University for Bright Juniors on Online Coding Platforms',
            certificateLink: 'https://www.linkedin.com/posts/nryadav18_codingworkshop-techeducation-teamleadership-activity-7135097066065723392-WFg7?utm_source=share&utm_medium=member_desktop',
            backgroundImage : Mine1,
        },
        {
            title: 'Data Structures Intern',
            startDate: 'February 2024',
            endDate: 'June 2023',
            duration: '5 months',
            description: 'Worked on Data Structures and Algorithms, helped Junior Student Friends enhance coding skills.',
            certificateLink: 'https://drive.google.com/file/d/1lKaqLnrdsb109SK3FdEfdQmo8J7tJgph/view?usp=drive_link',
            backgroundImage : DSA,
        },
        
        {
            title: 'Full Stack Development Intern',
            startDate: 'June 2024',
            endDate: 'July 2024',
            duration: '1 month',
            description: 'Worked on HTML,CSS, Javascript, Bootstrap and done Projects',
            certificateLink: 'https://drive.google.com/file/d/1QH2hhSYXqSCg7i6pc2xoV1WcYIQJZSR-/view?usp=drive_link',
            backgroundImage : Mine2,
        },

    ];

    return (
        <div className="internships" id="Internships">
            <div className="ititle">My <span>Internships</span> & <span>Works</span></div>
            <div className="internship-cards">
                {internships.map((internship, index) => (
                    <div className="internship-card" key={index}>
                        <img src={internship.backgroundImage} alt="Internship Background" className="background-img" />
                        <div className="card-content">
                            <h3>{internship.title}</h3>
                            <div className="hover-details">
                                <p><strong>Start Date:</strong> {internship.startDate}</p>
                                <p><strong>End Date:</strong> {internship.endDate}</p>
                                <p><strong>Duration:</strong> {internship.duration}</p>
                                <p>{internship.description}</p>
                                <a href={internship.certificateLink} target="_blank" rel="noopener noreferrer" className="view-certificate-btn">View Certificate</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Internships;