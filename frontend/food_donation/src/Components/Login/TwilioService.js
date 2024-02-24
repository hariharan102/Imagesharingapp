
import axios from 'axios';

const sendBulkSMS = async (message) => {
  try {
    const response = await axios.post('/api/send-sms', { message });
    console.log('SMS sent successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error sending SMS:', error);
    throw error;
  }
};

export default { sendBulkSMS };
