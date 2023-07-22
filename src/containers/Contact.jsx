import React from "react";
import Button from "../components/Button";
import "./contact.css";

const Contact = () => {
  return (
    <article className="contact">
      <div className="contact__heading">
        <h3>Let's build something together</h3>
        <p>contact me here!</p>
      </div>
      <div className="contact__form">
        <form action="" className="contact__form">
          <div className="form__first-row">
            <input type="text" className="first-name" placeholder="Name" />
            <input type="text" className="email" placeholder="Email Address" />
          </div>
          <input type="text" className="subject" placeholder="Subject" />
          <br />
          <textarea type="text" className="massage" placeholder="Massage" />
          <div className="contact-btn">
            <Button>Send</Button>
          </div>
        </form>
        <br />
        <section className="contact__email">
          <h4>
            Or mail to:{" "}
            <a href="mailto:maysarabasheer@gmail.com">
              maysarabasheer@gmail.com
            </a>
          </h4>
        </section>
      </div>
    </article>
  );
};

export default Contact;

// <style>
// {`
//      .contact {
//       max-width: 1020px;
//       margin: 0px auto;
//       padding-top: 64px;
//       height: 100vh;
//       display: flex;
//     }
//     .contact__heading {
//       width: 50vw;
//     }
//     .contact__form {
//       width: 550px;
//       gap: 12px;
//       display: grid;
//       background-color: red;
//       grid-template:
//         "a b"
//         "c c"
//         "d d";
//     }

//     .first-name {
//       grid-area: a;
//     }
//     .email{
//       grid-area: b;
//     }
//     .subject {
//       grid-area: c;
//     }
//     .massage {
//       grid-area: d;
//     }
//     .massage {
//       border: 1px solid black;
//       grid-area: f;
//       height: 150px;
//       resize: vertical;
//       padding: 12px 16px;
//     }
//     .neo-input {
//       all: unset;
//       border-bottom: 1.5px solid white;
//       color: white;
//       width: 44%;
//       padding: 5px 8px;
//     }
//     ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
//        color: white;
//        opacity: 1; /* Firefox */
//     }
//     :-ms-input-placeholder { /* Internet Explorer 10-11 */
//       color: white;
//     }

//     ::-ms-input-placeholder { /* Microsoft Edge */
//       color: white;
//     }
//     .contact__btn {
//       display: flex;
//       justify-content: center;
//       margin-top: 18px
//     }
// `}
// </style>
