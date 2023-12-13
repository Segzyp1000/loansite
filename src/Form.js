import {useState} from 'react'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Logo from './Logo.svg'; 
import Formic from './display/Formic.svg'; 
import './Form.css';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';

const Form =({setIsLoggedIn}) => {
  const [showPassword, setShowPassword] = useState(false);
	
const schema = yup.object().shape({
    email: yup.string().email().required('Please enter a valid email'),
    password: yup.string().min(6).max(19).required('password must be at leasst six characters'),
});


const {register, handleSubmit, formState:{errors} }  = useForm({
resolver: yupResolver(schema)
});

const onSubmit = (data) => {
  setIsLoggedIn(data);
}


return (
      <div className='LoginPage'>
      <div className='slider-page'>
        <img src={Logo} alt='myLogo' className='logo'/>
        <img src={Formic} alt='formulated img' className='image' /> 
      </div>
      <div className='Form-G'>
        <h2>Welcome!</h2>
        <h6>Enter details to login</h6>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type='text'
            id='email'
            placeholder='Email'
		        {...register('email')}
          />
	        <p className='error'>{errors.email?.message}</p>
          <div className='password-input'>
            <input
              type={showPassword ? 'text' : 'password'}
              id='password'
              placeholder='Password'
		          {...register('password')}
            />
	          <p className='error'>{errors.password?.message}</p>
	
            <span
              className='password-icon'
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
            </span>
          </div>
          
          <div className='lead'>
            <p>FORGOT PASSWORD?</p>
          </div>
          <button type='submit' id='submit'>
            Login In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;





