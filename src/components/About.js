import React from "react";
import Footer from "../Layout/Footer";
import Navbar from "../Layout/Navbar";
import '../About.css';
import { Link } from 'react-router-dom'

export default function () {
  return (
    <>
      <section>
        <div className="ab-1">
          <img src="section header2.jpg" alt="" />
          <h1>HOSTEL SMITH</h1>
          <h3>Campus Hostel</h3>
          <h2>Know More About Us</h2>
          {/* <h2>ABOUT US</h2> */}
          {/* <p>We are Here Providing the Best Environment</p>  */}
        </div>
        

      </section>   
      <section>
        <div className="box-1">
        <ul>
        <p className="b-1">Get To Know</p>
        {/* <li href='./https://cutmap.ac.in/co-founder-president/'>Leadership</li> */}
        <li><a href="../https://cutmap.ac.in/co-founder-president/" />Leadership</li>
        <li><Link to='https://cutmap.ac.in/about/overview-of-cutm/'>Hostel Glimpse</Link></li>
        <li href='@learning'>@learning</li>
        <li href='Mission & Vision'>Mission & Vision</li>
        <li href='Organogram'>Organogram</li>
          </ul>
          <ul>
            <p className="b-2">Info About</p>
            <li href='Annual Report'>Annual Report</li>
            <li href='Acts,Statutes & Ordinances'>Acts,Statutes & Ordinances</li>
            <li href='Rules & Policies'>Rules & Policies</li>
            <li href='Academic Regulations'>Academic Regulations</li>
            <li href='Gazettes'>Gazettes</li>
          </ul>
          <ul>
            <p className="b-3">Quick Links</p>
            <li href='Contact Us'>Contact Us</li>
          </ul>
          <ul>
            <p className="b-4">Experience</p>
            <li href='Students Testimonials'>Students Testimonials</li>
            <li href='Awards & Achievements'>Awards & Achievements</li>
            <li href='Culture Sports and Responsibility'>Culture Sports and Responsibility</li>
          </ul>
          <ul>
            <p className="b-5">Presentation</p>
            <li href='MAP Presentation'>MAP Presentation</li>
            <li href='Domain Presentation'>Domain Presentation</li>
            <li href='Skill Presentation'>Skill Presentation</li>
          </ul> 

          {/* <ul>
          <p className="b-1">Get To Know</p>
          <p className="b-1">Get To Know</p>
          <p className="b-2">Info About</p>
          <p className="b-3">Quick Links</p>
          <p className="b-4">Experience</p>
          <p className="b-5">Presentation</p>
          </ul>
             <ul>
        <li href='Leadership'>Leadership</li>
        <li href='Hostel Glimpse'>Hostel Glimpse</li>
        <li href='@learning'>@learning</li>
        <li href='Mission & Vision'>Mission & Vision</li>
        <li href='Organogram'>Organogram</li>
          </ul>
          <ul>
            <li href='Annual Report'>Annual Report</li>
            <li href='Acts,Statutes & Ordinances'>Acts,Statutes & Ordinances</li>
            <li href='Rules & Policies'>Rules & Policies</li>
            <li href='Academic Regulations'>Academic Regulations</li>
            <li href='Gazettes'>Gazettes</li>
          </ul>
          <ul>
            <li href='Contact Us'>Contact Us</li>
          </ul>
          <ul>
            <li href='Students Testimonials'>Students Testimonials</li>
            <li href='Awards & Achievements'>Awards & Achievements</li>
            <li href='Culture Sports and Responsibility'>Culture Sports and Responsibility</li>
          </ul>
          <ul>
            <li href='MAP Presentation'>MAP Presentation</li>
            <li href='Domain Presentation'>Domain Presentation</li>
            <li href='Skill Presentation'>Skill Presentation</li>
          </ul>  */}

        </div>
      </section>

      <Footer />
    </>
  );
}
