import React from 'react'
import './contact.css'
import Swal from 'sweetalert2'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "YOUR_ACCESS_KEY_HERE");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://script.google.com/macros/s/AKfycbw8LgqBMbi6Xm6QgeYxDfX6VXFcU5RCet6_I247zbaUswdDkqQ4XACEH7asF5HXCcE/exec", {
          method: "GET",
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
              });
        }
      };
    



    return (
        <div>
            <section className="contact">
                <form onSubmit={onSubmit}>
                    <h2>
                        Contact Form
                    </h2>
                    <div className="input-box">
                        <label>Full Name</label>
                        <input type="text" className='field' placeholder='Enter Your Name' name='fullname' required />
                    </div>
                    <div className="input-box">
                        <label>Email Address</label>
                        <input type="email" className='field' placeholder='Enter Your email' name='email' required />
                    </div>
                    <div className="input-box">
                        <label>Phone Number</label>
                        <input type="number" className='field' placeholder='Enter Your Phone Number' name='phone' required />
                    </div>
                    <div className="input-box">
                        <label>Your Message</label>
                       <textarea name="message" id="" className='field mess' placeholder='Enter Your Message' required></textarea>
                    </div>
                    <button type='submit'>Send Message</button>
                </form>

            </section>
        </div>
    )
}

export default Contact