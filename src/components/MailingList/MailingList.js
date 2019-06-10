import React from 'react';

const MailingList = () => {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="mailList">
      <div className="mailListLogo">
        <img
          className="mailListImg"
          src={require('../../assets/images/codesnippetslogomain.png')}
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
        <input
          className="mailListInput"
          type="text"
          placeholder="Enter your email"
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