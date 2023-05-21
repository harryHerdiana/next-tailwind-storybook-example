import classNames from 'classnames';
import { CheckboxInput } from 'components/atoms/CheckboxInput/CheckboxInput';
import { TextInput } from 'components/atoms/TextInput/TextInput';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
  donationAmount: Yup.number().min(10,'This donation amount is invalid!'),
  email: Yup.string().email().required('This email is invalid!'),
  firstName: Yup.string().required('This first name is invalid!'),
  lastName: Yup.string().required('This last name is invalid!'),
  phone: Yup.number().required('This phone is invalid'),
  incomeSource: Yup.array().min(1, 'At least one source of income is required'),
  agreement: Yup.bool().oneOf([true], 'Must agree to proceed'),
});

const initialValues = {
  donationAmount: 0,
  email: '',
  firstName: '',
  lastName: '',
  phone: null,
  incomeSource: null,
  agreement: false,
};

export const ExampleForm: React.FC = () => {
  const [formdata, setFormdata] = useState({});
  const handleSubmit = (value: React.SetStateAction<{}>) => {
    console.log(value);
  };
  return (
    <div className='w-full'>
      <h2 className='text-lg my-4'>Test Form</h2>

      <Formik
        validationSchema={loginSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, values }) => (
          <Form>
            <div className='relative mb-4'>
              <Field
                component={TextInput}
                name='firstName'
                id='firstName'
                label='First Name'
                backgroundColor='danger'
              />
              <ErrorMessage
                name='firstName'
                render={(err) => (
                  <div className='text-red-500 text-left'>{err}</div>
                )}
              />
            </div>
            <div className='relative mb-4'>
              <Field
                component={TextInput}
                name='lastName'
                id='lastName'
                label='Last Name'
                backgroundColor='secondary'
              />
              <ErrorMessage
                name='lastName'
                render={(err) => (
                  <div className='text-red-500 text-left'>{err}</div>
                )}
              />
            </div>
            <div className='relative mb-4'>
              <Field
                component={TextInput}
                name='email'
                id='email'
                label='Your Email'
                backgroundColor='danger'
              />
              <ErrorMessage
                name='email'
                render={(err) => (
                  <div className='text-red-500 text-left'>{err}</div>
                )}
              />
            </div>
            <div className='relative mb-4'>
              <Field
                component={TextInput}
                name='phone'
                id='phone'
                label='Your Phonenumber'
                backgroundColor='secondary'
              />
              <ErrorMessage
                name='phone'
                render={(err) => (
                  <div className='text-red-500 text-left'>{err}</div>
                )}
              />
            </div>
            <div className='relative mb-4'>
              <Field
                component={TextInput}
                name='donationAmount'
                id='donationAmount'
                label='Please fill the donation amount (in USD)'
                backgroundColor='secondary'
              />
              <ErrorMessage
                name='donationAmount'
                render={(err) => (
                  <div className='text-red-500 text-left'>{err}</div>
                )}
              />
            </div>
            <div role='group'>
              <legend className='text-left text-lg'>Your Income Source</legend>
              <div className='flex gap-x-4'>
                <Field
                  label='Parents'
                  component={CheckboxInput}
                  name='incomeSource'
                  id='incomeSource'
                  value='parents'
                />
                <Field
                  label='Business'
                  component={CheckboxInput}
                  name='incomeSource'
                  id='incomeSource'
                  value='business'
                />
                <Field
                  label='Fulltime Job'
                  component={CheckboxInput}
                  name='incomeSource'
                  id='incomeSource'
                  value='fulltime_job'
                />
              </div>
              <ErrorMessage
                name='incomeSource'
                render={(err) => (
                  <div className='text-red-500 text-left'>{err}</div>
                )}
              />
            </div>
            <div className='my-4 text-left'>
              <p>
                Do you agree to the{' '}
                <a className='text-blue-600' href='#'>
                  Terms and condition
                </a>{' '}
                ?
              </p>
              <Field
                component={CheckboxInput}
                name='agreement'
                id='agreement'
                value={true}
                label='Yes I agree'
              />
              <ErrorMessage
                name='agreement'
                render={(err) => (
                  <div className='text-red-500 text-left'>{err}</div>
                )}
              />
            </div>
            <button
              type='submit'
              className='border p-2 rounded-full px-4 border-black hover:bg-gray-500 hover:text-white'
            >
              Submit form
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
