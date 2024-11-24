import React from "react";
import { FiFacebook } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { RiGoogleLine } from "react-icons/ri";
import { CiTwitter } from "react-icons/ci";




const End = () => {
  return (
    <footer className="bg-slate-900" style={{ color: "white", padding: "3rem ",}}>
      <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
        {/* About Us Section */}
        <div style={{ flex: "1", minWidth: "200px", margin: "1rem" }}>
          <h3 className="text-3xl" style={{ borderBottom: "1px solid #444", paddingBottom: "0.5rem" }}>ABOUT US</h3>
          <p> We are an innovative EdTech company dedicated to transforming education through technology. 
    Our mission is to make learning accessible, engaging, and effective for everyone, 
    anywhere in the world.</p>
          <p>By combining cutting-edge tools with creative teaching methods, we empower students, 
          educators, and institutions to achieve their full potential in the digital age.</p>
        </div>


        {/* Contact Info Section */}
        <div style={{ flex: "1", minWidth: "200px", margin: "1rem" }}>
          <h3 className="text-3xl" style={{ borderBottom: "1px solid #444", paddingBottom: "0.5rem" }}>CONTACT INFO</h3>
          <p>
            <i className="fas fa-map-marker-alt"></i> Janakpurdham, Nepal
          </p>
          <p>
            <i className="fas fa-phone-alt"></i> 9779800000302
          </p>
          <p>
            <i className="fas fa-envelope"></i> info@edusite.com
          </p>
          <div className="text-white flex mt-[100px]">
            <a href="#!" style={{ margin: "0 10px", color: "#fff" }}>
            <FiFacebook  className="text-3xl"/>

            </a>
            <a href="#!" style={{ margin: "0 10px", color: "#fff" }}>
            <CiTwitter className="text-3xl" />
            </a>
            <a href="#!" style={{ margin: "0 10px", color: "#fff" }}>
            <SlSocialLinkedin  className="text-3xl"/>
        
            </a>
            <a href="#!" style={{ margin: "0 10px", color: "#fff" }}>
            <RiGoogleLine className="text-3xl" />
            </a>
          </div>
        </div>

        {/* Footer Menu Section */}
        <div style={{ flex: "1", minWidth: "200px", color:"white" ,margin: "1rem" }}>
          <h3 className="text-3xl" style={{ borderBottom: "1px solid #444", paddingBottom: "0.5rem" }}>FOOTER MENU</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <a href="#!" style={{ textDecoration: "none" }}>
                Home
              </a>
            </li>
            <li>
              <a href="#!" style={{textDecoration: "none" }}>
                About Us
              </a>
            </li>
            <li>
              <a href="#!" style={{textDecoration: "none" }}>
                Services
              </a>
            </li>
            <li>
              <a href="#!" style={{ textDecoration: "none" }}>
                Blog
              </a>
            </li>
            <li>
              <a href="#!" style={{  textDecoration: "none" }}>
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div style={{ textAlign: "center", padding: "1rem", borderTop: "1px solid #444" }}>
        <p>Copyright © 2024. All rights reserved</p>
        <p>Design by Tri Squad</p>
      </div>
    </footer>
  );
};

export default End;