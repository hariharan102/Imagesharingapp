import React, { useState, useEffect } from 'react';
import TwilioService from './TwilioService';

const BulkSMSSender = () => {
  const [message, setMessage] = useState('');

  const handleSendSMS = async () => {
    try {
      await TwilioService.sendBulkSMS(message);
    } catch (error) {
      console.error('Error sending SMS:', error);
    
    }
  };

  return (
    <div>
      <label>
        Message:
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      </label>
      <br />
      <button onClick={handleSendSMS}>Send Bulk SMS</button>
    </div>
  );
};

export default BulkSMSSender;
