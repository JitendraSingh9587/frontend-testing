import ReactDOM from 'react-dom';
import { Routes, Route } from 'react-router-dom';
import SignIn from './components/sign-in/sign-in';
import Form from './components/sign-up/Form';
import ForgetPassword from './components/forgetpass/forgetPassword';
import ResetPassword from './components/forgetpass/reset-password';

export default function Router() {
  return (
    <Routes>
      <Route path='/signin' element={<SignIn />} />
      <Route path='/signup' element={<Form />} />
      <Route path='/forgetPassword' element={<ForgetPassword />} />
      <Route path='/resetpassword' element={<ResetPassword />} />
    </Routes>
  );
}
