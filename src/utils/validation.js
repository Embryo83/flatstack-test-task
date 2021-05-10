import * as yup from 'yup';

const nameRegExp = /[a-zA-Z][a-zA-Z ]{1,}/;
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const cardRegExp = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
const cardExpDateRegExp = /^(0[1-9]|1[0-2])\/\d{2}$/;

const schema = {
  name: yup
    .string()
    .required('Please enter recipient full name')
    .matches(nameRegExp, 'Name must be more then 2 letters'),
  address: yup.string().required('Please enter your address'),
  city: yup.string().required('Please enter your city'),
  country: yup.string().required('Please enter your country'),
  postcode: yup.string().required('Please enter your ZIP code'),
};

export const shippingSchema = yup.object().shape({
  ...schema,
  phone: yup
    .string()
    .required('Please enter your phone number')
    .min(5, 'Phone must be more then 5 numbers')
    .matches(phoneRegExp, 'Phone must be a valid phone number'),
});

export const billingSchema = yup.object().shape({
  ...schema,
  email: yup
    .string()
    .required('Please enter your email')
    .email('Email must be a valid email'),
});

export const paymentSchema = yup.object().shape({
  'cc-name': yup
    .string()
    .required('Please enter Name and Surname')
    .matches(nameRegExp, 'Name must be Name and Surname'),
  'cc-number': yup
    .string()
    .required('Please enter your card number')
    .matches(cardRegExp, 'Card number must be valid'),
  'cc-exp': yup
    .string()
    .required('Expiration date is required')
    .matches(cardExpDateRegExp, 'Expiration date must be MM/YY'),
  'cc-csc': yup
    .string()
    .required('CSC is required')
    .length(3, 'CSC number must be valid'),
});
