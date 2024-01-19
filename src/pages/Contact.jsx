import React from "react";
import "./css/contactPage.scss";
import { MapPinned, Phone, Printer } from "lucide-react";

function Contact() {
    return (
        <div className="contact">
            <div className="contact-container">
                <div className="banner-area">
                    <h2>İLETİŞİM</h2>
                </div>
            </div>


            <div className="content-area">
                <div className="wrapper">
                    <h2>Bize Ulaşın </h2>
                    <p>İlgili numaramızı arayarak ya da iletişim formunu doldurarak bize ulaşabilirsiniz.</p>
                </div>


                <div className="content">

                    <div className="contact-info">

                        <div className="box">

                            <div className="icon">
                                <MapPinned size={25} />
                            </div>

                            <div className="text">
                                <h3>Adress</h3>
                                <p>Ankara Asfaltı Belkahve Mevkii No:277 <br/>Kavaklıdere Köyü Bornova /İzmir </p>
                            </div>
                        </div>

                        <div className="box">
                            <div className="icon">
                                <Phone size={25} />
                            </div>

                            <div className="text">
                                <h3>Phone</h3>
                                <p>0232 360 17 77</p>
                            </div>
                        </div>

                        <div className="box">
                            <div className="icon">
                                <Printer size={25} />
                            </div>
                            <div className="text">
                                <h3>Fax</h3>
                                <p>0232 360 16 16</p>
                            </div>
                        </div>
                    </div>

                    <div className="contactForm">
                        <form>
                            <h2>İletişim Formu</h2>
                            <div className="inputBox">
                                <input type="text" required className="input" placeholder="İsim-Soyisim.." />
                            </div>
                            <div className="inputBox">
                                <input type="text" required className="input" placeholder="Email..." />
                            </div>
                            <div className="inputBox">
                                <textarea required className="input" placeholder="Mesajınız.." />
                            </div>
                            <div className="inputBox">
                                <button type="submit">Gönder</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
        
       
    )
}

export default Contact;
