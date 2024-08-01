import React, { useState } from 'react';
import './Subscription.css';
import { getDatabase, set, ref } from 'firebase/database';
import { app } from '../../firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Subscription = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const db = getDatabase(app);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.includes('@')) {
      setErrorMessage('An email address must contain a single @.');
      toast.error('An email address must contain a single @.');
      return;
    }

    set(ref(db, 'subscribers'), { email: email })
      .then(() => {
        setSuccessMessage('You have successfully subscribed!');
        toast.success('You have successfully subscribed!');
        setEmail('');
        setErrorMessage('');
      })
      .catch((error) => {
        setErrorMessage('Subscription failed.');
        toast.error('Subscription failed.');
      });
  };

  return (

    <div className='subs'>
    <div className="subscription-warp">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-4">
            <div className="subscription-image">
              <img
                decoding="async"
                src="https://themes.envytheme.com/viba/wp-content/uploads/2023/10/subscription-shape1.png"
                alt="Images"
                className="subscription-shape1"
              />
            </div>
          </div>
          <div className="col-lg-7 col-md-8">
            <div className="subscription-content single-section">
              <span className="title">Subscribe</span>
              <h2>Subscribe and stay updated!</h2>
              <p>
                Essentially, a resort is everything a hotel is with a little more and aims to provide a luxury stay.
              </p>
              <div className="input-box">
                <form className="mailchimp subscribe-form" onSubmit={handleSubmit} noValidate>
                  <input
                    type="email"
                    className={`form-control memail ${errorMessage ? 'error' : ''}`}
                    placeholder="Enter your email address"
                    name="EMAIL"
                    value={email}
                    onChange={handleChange}
                    required
                  />
                  <button className="default-btn" type="submit">
                    Subscribe Now
                  </button>
                </form>
                {errorMessage && (
                  <p className="mchimp-errmessage">{errorMessage}</p>
                )}
                {successMessage && (
                  <p className="mchimp-sucmessage">{successMessage}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="all-shapes">
        <img
          decoding="async"
          src="https://themes.envytheme.com/viba/wp-content/uploads/2023/10/subscription-shape2.png"
          alt="Images"
          className="subscription-shape2"
        />
      </div>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div></div>
  );
};

export default Subscription;
