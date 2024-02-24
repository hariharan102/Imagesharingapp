

import * as yup from 'yup';

export const userValidation = yup.object().shape({
  Username: yup.string().email('Invalid email').required('Email is required'),
  Password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
});
