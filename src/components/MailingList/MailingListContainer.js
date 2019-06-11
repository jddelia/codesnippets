import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MailingList from './MailingList';

const MailingListContainer = () => {
  const [email, setEmail] = useState(null);
  const [emailExists, setEmailExists] = useState(false);

  useEffect(() => {
    async function postData() {
      if (!email) return;

      const formData = new URLSearchParams();
      formData.append('email', email);

      try {
        const response = await axios.post("https://codesnippetapi.herokuapp.com/subscribers/create", formData);
        if (response.data.errors) setEmailExists(true);
        else await setEmailExists(false);
      } catch(err) {
        return err;
      };
    }

    postData();
  }, [email]);

  return (
    <>
      <MailingList
        emailExists={emailExists}
        onSubmit={setEmail}
      />
    </>
  );
};

export default MailingListContainer;