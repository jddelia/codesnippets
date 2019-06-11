import React, { useState, useEffect, useRef } from 'react';

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const redInputBorder = {
  borderColor: "red"
};

const MailingList = ({ emailExists, onSubmit }) => {
  const [emailInvalid, setEmailInvalid] = useState(false);
  const inputRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!validateEmail(inputRef.current.value)) {
      setEmailInvalid(true);
      return;
    }

    setEmailInvalid(false);
    await onSubmit(inputRef.current.value);
  }

  const emailError = emailInvalid ? (
    <label className="emailInvalid">Email Invalid</label>
  ) : null;

  useEffect(() => {
    if (emailExists) {
      inputRef.current.value = "Subscriber Already Exists";
      setEmailInvalid(true);
    }
  }, [emailExists])

  const inputErrorBorder = emailError ? redInputBorder : null;

  return (
    <div className="mailList">
      <div className="mailListLogo">
        <img
          className="mailListImg"
          src={require("../../assets/images/codesnippetslogomain.png")}
          alt="codesnippets logo"
        />
      </div>

      <div className="mailListTitle">
        <span className="mailListTitleText">Join The Mailing List!</span>
        <span className="mailListTitleSubText">No Spam.</span>
      </div>

      <form 
        className="mailListForm"
        onSubmit={handleSubmit}
      >
        {emailError}
        <input
          ref={inputRef}
          className="mailListInput"
          style={inputErrorBorder}
          type="text"
          placeholder="Enter your email"
          required
        />

        <button
          className="mailListBtn"
          type="submit"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default MailingList;