import { useState } from 'react';

import './Contact.css';

export const Contact = () => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const emailHandler = (e) => {
    setIsValidEmail(true);
    setEmail(e.target.value);
  };

  const formHandler = (e) => {
    e.preventDefault();

    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/;
    if (!pattern.test(email)) setIsValidEmail(false);
  };

  return (
    <section className="contact">
      <div className="container contact__body">
        <p className="contact__description">35,000+ already joined</p>
        <h2 className="contact__title">
          Stay up-to-date with what we’re doing
        </h2>
        <form className="contact-form" onSubmit={formHandler} noValidate>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            className={isValidEmail ? 'email' : 'email email-error'}
            onChange={emailHandler}
            value={email}
          />
          <span className={isValidEmail ? 'hidden' : 'error-msg'}>
            <em>Whoops, make sure it's an email</em>
          </span>
          <button className="btn btn-red btn-contact">Contact Us</button>
        </form>
      </div>
    </section>
  );
};
