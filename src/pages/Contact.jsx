import React, { useState } from "react";
import "./css/contactPage.scss";
import { MapPinned, Phone, Printer } from "lucide-react";
import swal from "sweetalert";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function Send() {
    var body =
      "Name: " + name + "<br /> Email: " + email + "<br /> Message: " + message;

    window.Email.send({
      SecureToken: "b8c77eaf-d45f-4f9e-a163-1e39d4910939",
      To: "fatmaaydogdu581@gmail.com",
      From: "fatmaaydogdu581@gmail.com",
      Subject: "This is the subject",
      Body: body,
    }).then((message) => {
      if (message == `OK`) {
        swal("Success!", "You Message Successfull Received!", "success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        swal("Something Wrong", "Your Message is not Received", "error");
      }
    });
  }

  return (
    <div className="contact">
        <div className="banner-area">
          <h2>İLETİŞİM</h2>
        </div>

      <div className="content-area">
        <div className="wrapper">
          <h2>Bize Ulaşın </h2>
          <p>
            İlgili numaramızı arayarak ya da iletişim formunu doldurarak bize
            ulaşabilirsiniz.
          </p>
        </div>

        <div className="content">
          <div className="contact-info">
            <div className="box">
              <div className="icon">
                <MapPinned size={25} />
              </div>

              <div className="text">
                <h3>Adress</h3>
                <p>
                  Ankara Asfaltı Belkahve Mevkii No:277 <br />
                  Kavaklıdere Köyü Bornova /İzmir{" "}
                </p>
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
                <input
                  value={name}
                  type="text"
                  required
                  id="name"
                  className="input"
                  placeholder="İsim-Soyisim.."
                  onInput={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="inputBox">
                <input
                  value={email}
                  type="text"
                  required
                  id="email"
                  className="input"
                  placeholder="Email..."
                  onInput={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="inputBox">
                <textarea
                  value={message}
                  id="message"
                  required
                  className="input"
                  placeholder="Mesajınız.."
                  onInput={(e) => {
                    setMessage(e.target.value);
                  }}
                />
              </div>
              <div className="inputBox">
                <input type="button" value="Gönder" onClick={Send} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
