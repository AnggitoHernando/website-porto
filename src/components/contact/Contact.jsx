import React from "react";
import './Contact.css';
import ai from '../../assets/ai.png';
import {AiOutlineMail, AiOutlineLinkedin, AiOutlineInstagram} from 'react-icons/ai';



const Contact = () => {
    return(
        <div className="portofolio_kontak section_padding" id="Kontak">
            <div className="portofolio_kontak-image">
                <img src={ai} alt="ai" />
            </div>
            <div className="portofolio_kontak-content">
                <h1 className="gradient_text">
                    Kontak 
                </h1>
                <p>
                    <AiOutlineMail size={35}/>
                    <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMVJXkxxdxWKSgZzdzQzGxDHZKkWRHjDgDVvjRhsndDgVfbDlFhcWDJHWvwwfSntFwzwHJJ">
                        itto.carrer@gmail.com
                    </a>
                </p>
                <p>
                    <AiOutlineInstagram size={35}/>
                    <a href="https://www.instagram.com/ini.itto/">
                        @ini.itto
                    </a>
                </p>
                <p>
                    <AiOutlineLinkedin size={35}/>
                    <a href="https://www.linkedin.com/in/anggito-hernando-3676051bb/">
                        Anggito Hernando
                    </a>
                </p>
                
                
            </div>
            
        </div>
    )
}

export default Contact;

