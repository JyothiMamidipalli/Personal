import React from 'react';
import './Certifications.css';
import C from "../../assets/Certifications/Cisco_C.pdf";
import Cpp from '../../assets/Certifications/Cisco_C++.pdf';
import Python from '../../assets/Certifications/Cisco_Python.pdf';
import Java from '../../assets/Certifications/Java.pdf';
import DSA from '../../assets/Certifications/DSA_Internship.pdf';
import Html from '../../assets/Certifications/HTML1.pdf';
import JS from '../../assets/Certifications/JS.pdf';
import HTML1 from '../../assets/Certifications/Summer_Internship.pdf';
import Veritech from '../../assets/Certifications/Veritech.pdf';

function Certifications() {
    const certifications = [
        {
            id: 1,
            name: "C",
            company: "Cisco",
            date: "26 Jan 2023",
            domain: "Programming",
            file: C,
        },
        {
            id: 2,
            name: "CPP",
            company: "Cisco",
            date: "29 Oct 2023",
            domain: "Programming",
            file: Cpp,
        },
        {
            id: 3,
            name: "Python",
            company: "Cisco",
            date: "3 Oct 2023",
            domain: "Programming",
            file: Python,
        },
        {
            id: 4,
            name: "Java",
            company: "IT_Pearson",
            date: "6 July 2024",
            domain: "Programming",
            file: Java,
        },
        {
            id: 5,
            name: "DSA",
            company: "Technical Hub",
            date: "15 Jun 2024",
            domain: "DSA & Algo",
            file: DSA,
        },
        {
            id: 6,
            name: "HTML & CSS Certifications",
            company: "Pearson IT Specialist",
            date: "8 May 2023",
            domain: "Web Development",
            file: Html,
        },
        {
            id: 7,
            name: "JavaScript Certification",
            company: "Hacker Rank",
            date: "23 Sep 2024",
            domain: "Web Development",
            file: JS,
        },
        {
            id: 8,
            name: "Summer Internship Certificate",
            company: "Technical Hub",
            date: "27 July 2024",
            domain: "Web Development",
            file: HTML1,
        },
        {
            id: 9,
            name: "InternShip Certificate",
            company: "Veritech",
            date: "05 Aug 2024",
            domain: "Web Development",
            file: Veritech,
        },


    ];
    

    const handleDownload = (file) => {
        const link = document.createElement('a');
        link.href = file;
        link.download = file.split('/').pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="certifications" id="Certifications">
            <div className="ctitle">My <span>Certifications</span></div>
            <div className="my-certifications">
                <div className="table-responsive">
                    <table>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Certification Name</th>
                                <th>Certified By</th>
                                <th>Date of Completion</th>
                                <th>Domain</th>
                                <th>Download</th>
                            </tr>
                        </thead>
                        <tbody>
                            {certifications.map((cert, index) => (
                                <tr key={cert.id}>
                                    <td>{index + 1}</td>
                                    <td>{cert.name}</td>
                                    <td>{cert.company}</td>
                                    <td>{cert.date}</td>
                                    <td>{cert.domain}</td>
                                    <td>
                                        <button onClick={() => handleDownload(cert.file)}>
                                            Download
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Certifications;