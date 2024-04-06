import React, { useLayoutEffect } from "react";
import "../pages/css/aboutPage.scss";
import { Container } from "react-bootstrap";
import img from "../../assets/about/concept.jpg";

function About() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="about">
            <div className="banner-area">
                <h2>Biz Kimiz?</h2>
            </div>

            <div className="wrapper">
                <h2> Lorem ipsum dolor sit amet.</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam atque a facilis inventore sit, suscipit labore ad
                    velit quas sed iure perspiciatis provident necessitatibus
                    quasi saepe placeat accusamus ab minus ducimus voluptatum
                    aliquam minima! Eaque obcaecati vitae quae, perspiciatis
                    provident earum laudantium itaque ex distinctio iure! Ipsam
                    consequuntur eius deserunt.
                </p>
            </div>

            <iframe
                width={1120}
                height={630}
                src="https://www.youtube.com/embed/4xDzrJKXOOY?si=3r8UKgQb7dAtJiqN"
                title="YouTube video"
                allowFullScreen
            ></iframe>

            <div className="wrapper">
                <h2>Lorem ipsum dolor sit amet.</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Natus, esse accusamus. Quis natus quasi et rerum, nulla unde
                    tempore cumque id reprehenderit veritatis qui voluptate esse
                    excepturi omnis adipisci, doloremque consectetur dolores, ad
                    quae dolorem cum maxime aliquam. Dolor pariatur, dolores
                    enim quos porro quae rem laudantium debitis minus neque
                    repellat magni laborum distinctio corrupti esse totam ullam
                    praesentium odio tempore expedita cumque! Veniam minus
                    cumque id! Delectus, ea fuga modi dolorum officia impedit
                    esse dolores quae consequatur sed dolore.
                </p>
            </div>

            <div className="info-container">
                <div className="content">
                    <div className="imgContainer">
                        <img src={img} />
                    </div>
                    <div className="textContainer">
                        <h2>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Earum, temporibus.
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
