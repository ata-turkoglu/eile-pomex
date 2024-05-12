import React, { useState, useLayoutEffect, useCallback, useRef } from "react";
import "./css/contactPage.scss";
import { MapPinned, Phone, Printer } from "lucide-react";
import swal from "sweetalert";
import ReCAPTCHA from "react-google-recaptcha";
import { translateText as t } from "../../store/reducers/language";

function Contact() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const recaptchaRef = useRef();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [token, setToken] = useState(null);

    const onVerify = useCallback((token) => {
        setToken(token);
    });

    function Send() {
        var body =
            "Name: " +
            name +
            "<br /> Email: " +
            email +
            "<br /> Message: " +
            message;

        window.Email.send({
            SecureToken: "b8c77eaf-d45f-4f9e-a163-1e39d4910939",
            To: "fatmaaydogdu581@gmail.com",
            From: "fatmaaydogdu581@gmail.com",
            Subject: "This is the subject",
            Body: body,
        }).then((message) => {
            if (message == `OK`) {
                swal(
                    "Success!",
                    "You Message Successfull Received!",
                    "success"
                );
                setName("");
                setEmail("");
                setMessage("");
            } else {
                swal(
                    "Something Wrong",
                    "Your Message is not Received",
                    "error"
                );
            }
            setToken(null);
            recaptchaRef.current.reset();
        });
    }

    return (
        <div className="contact">
            <div className="banner-area">
                <h2>{t("contact")}</h2>
            </div>

            <div className="content-area">
                <div className="wrapper">
                    <h2>{t("contactUs")}</h2>
                    <p>{t("reachUs")}</p>
                </div>

                <div className="content">
                    <div className="contact-info">
                        <div className="box">
                            <div className="icon">
                                <MapPinned size={25} />
                            </div>

                            <div className="text">
                                <h3>{t("address")}</h3>
                                <p>
                                    Yeniköy Mah. Menderes-Orhanlı Yolu Sk.{" "}
                                    <br />
                                    No: 179/26 Menderes/İzmir
                                </p>
                            </div>
                        </div>

                        <div className="box">
                            <div className="icon">
                                <Phone size={25} />
                            </div>

                            <div className="text">
                                <h3>{t("telephone")}</h3>
                                <p>0232 360 16 16</p>
                            </div>
                        </div>

                        <div className="box">
                            <div className="icon">
                                <Printer size={25} />
                            </div>
                            <div className="text">
                                <h3>{t("fax")}</h3>
                                <p>0232 360 17 77</p>
                            </div>
                        </div>
                    </div>

                    <div className="contactForm">
                        <form>
                            <h2>{t("contactForm")}</h2>
                            <div className="inputBox">
                                <input
                                    value={name}
                                    type="text"
                                    required
                                    id="name"
                                    className="input"
                                    placeholder={t("nameSurname") + "..."}
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
                                    placeholder={t("email") + "..."}
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
                                    placeholder={t("yourMessage") + "..."}
                                    onInput={(e) => {
                                        setMessage(e.target.value);
                                    }}
                                />
                            </div>
                            <div id="ata">
                                <ReCAPTCHA
                                    ref={recaptchaRef}
                                    sitekey="6Lf-S8UpAAAAAL58_LEdcdltYiANv69K7ei0K9wP"
                                    onChange={onVerify}
                                    size="normal"
                                />
                            </div>
                            <div className="inputBox">
                                <input
                                    style={{
                                        background: !token ? "grey" : "",
                                        textTransform: "capitalize",
                                    }}
                                    type="button"
                                    value={t("send")}
                                    disabled={!token}
                                    onClick={Send}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
