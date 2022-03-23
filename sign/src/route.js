import ReactDOM from 'react-dom';
import { Routes, Route } from 'react-router-dom';
import SignIn from './components/sign-in/sign-in';
import Form from './components/sign-up/Form';

export default function Router() {
  return (
    <Routes>
      <Route path='/signin' element={<SignIn />} />
      <Route path='/signup' element={<Form />} />
    </Routes>
  );
}
