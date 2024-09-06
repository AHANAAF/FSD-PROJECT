import React, { useState } from "react";
import { auth } from "../firebase";
import firebase from "firebase/app";

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
    <div>
      <h1>Mobile Authentication</h1>
      <div id="recaptcha-container"></div>
      <input
        type="text"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="Enter phone number"
      />
      <button onClick={requestOtp}>Request OTP</button>
      {verificationId && (
        <>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
          />
          <button onClick={verifyOtp}>Verify OTP</button>
        </>
      )}
    </div>
  );
};

export default MobileAuth;
