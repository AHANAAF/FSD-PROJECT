import React, { useState } from "react";
import { auth } from "../firebase";
import firebase from "firebase/app";
import { motion } from "framer-motion";
import "../styles/animations.css";

const MobileAuth = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [verificationId, setVerificationId] = useState(null);

  const requestOtp = () => {
    const recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    auth.signInWithPhoneNumber(phoneNumber, recaptchaVerifier)
      .then((confirmationResult) => {
        setVerificationId(confirmationResult.verificationId);
        alert("OTP sent!");
      })
      .catch((error) => {
        console.error("Error sending OTP:", error);
      });
  };

  const verifyOtp = () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, otp);
    auth.signInWithCredential(credential)
      .then((result) => {
        alert("Phone Number Verified!");
      })
      .catch((error) => {
        console.error("Error verifying OTP:", error);
      });
  };

  return (
    <motion.div
      className="mobile-auth-container fade-in"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="fade-in visible">Mobile Authentication</h1>
      <div id="recaptcha-container"></div>
      <input
        type="text"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="Enter phone number"
        className="input"
      />
      <button className="button" onClick={requestOtp}>Request OTP</button>
      {verificationId && (
        <>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            className="input"
          />
          <button className="button" onClick={verifyOtp}>Verify OTP</button>
        </>
      )}
    </motion.div>
  );
};

export default MobileAuth;
