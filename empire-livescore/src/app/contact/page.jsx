import React from "react";
import style from "./contact.module.css";

const ContactPage = () => {
  return (
    <div className={style.contactContainer}>
      <h1 className={style.title}>Contact Us</h1>
      <p className={style.description}>
        We would love to hear from you! Whether you have a question, feedback,
        or need assistance, feel free to reach out to us through the following
        methods:
      </p>
      <div className={style.contactDetails}>
        <div className={style.contactItem}>
          <h2>Email</h2>
          <p>
            <a href="mailto:asehindej@gmail.com" className={style.contactLink}>
              asehindej@gmail.com
            </a>
          </p>
        </div>
        <div className={style.contactItem}>
          <h2>Phone</h2>
          <p>
            <a href="tel:+09154358139" className={style.contactLink}>
              09154358139
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
