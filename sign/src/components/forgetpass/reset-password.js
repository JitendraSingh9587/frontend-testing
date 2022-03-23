import React, { useState } from 'react';

const ResetPassword = () => {
  const [values, setValues] = useState({
    token: '',
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
        <h2 className='title'>Reset Password</h2>
        <form className='form-wrapper'>
          <div className='name'>
            <label className='label'>Token</label>
            <input
              type='text'
              className='input'
              name='token'
              value={values.token}
              onChange={handleChange}
            />
          </div>
          <div className='name'>
            <label className='label'>Set Password</label>
            <input
              type='password'
              className='input'
              name='password'
              value={values.password}
              onChange={handleChange}
            />
          </div>
          <div className='name'>
            <label className='label'>Confirm Password</label>
            <input
              type='password'
              className='input'
              name='confirmpassword'
              value={values.confirmpassword}
              onChange={handleChange}
            />
          </div>
          <button className='submit' onClick={handleFormSubmit}>
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
