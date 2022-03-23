import React, { useState } from 'react';

const ForgetPassword = () => {
  const [values, setValues] = useState({
    email: '',
  });

  const [errors, setErros] = useState({});

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className='container'>
      <div className='app-wrapper'>
        <h2 className='title'>Forget Password</h2>
        <form className='form-wrapper'>
          <div className='email'>
            <label className='label'></label>
            <p className='para'>Please enter your email address</p>
            <input
              placeholder='Email'
              type='email'
              className='input'
              name='email'
              value={values.email}
              onChange={handleChange}
            />
          </div>

          <button className='submit' onClick={handleFormSubmit}>
            Find Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
