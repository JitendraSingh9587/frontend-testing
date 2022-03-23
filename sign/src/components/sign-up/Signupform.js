import React, { useState } from 'react';

const Signupform = () => {
  const [values, setValues] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmpassword: '',
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
        <h2 className='title'>Create Account</h2>
        <form className='form-wrapper'>
          <div className='name'>
            <label className='label'>Full Name</label>
            <input
              type='text'
              className='input'
              name='fullname'
              value={values.fullnname}
              onChange={handleChange}
            />
          </div>
          <div className='email'>
            <label className='label'>Email</label>
            <input
              type='email'
              className='input'
              name='email'
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <div className='name'>
            <label className='label'>Password</label>
            <input
              type='password'
              className='input'
              name='password'
              value={values.password}
              onChange={handleChange}
            />
          </div>
          <div className='name'>
            <label className='label'>ConfirmPassword</label>
            <input
              type='password'
              className='input'
              name='confirmpassword'
              value={values.confirmpassword}
              onChange={handleChange}
            />
          </div>
          <button className='submit' onClick={handleFormSubmit}>
            sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signupform;
