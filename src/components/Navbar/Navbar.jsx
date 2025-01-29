import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.jpg';
import arrow_icon from '../../assets/arrow_icon.png';
import { CoinContext } from '../../context/CoinContext';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const { setCurrency } = useContext(CoinContext);

  const [showSignupForm, setShowSignupForm] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case 'usd': {
        setCurrency({ name: 'usd', Symbol: '$' });
        break;
      }
      case 'eur': {
        setCurrency({ name: 'eur', Symbol: '€' });
        break;
      }
      case 'inr': {
        setCurrency({ name: 'inr', Symbol: '₹' });
        break;
      }
      default: {
        setCurrency({ name: 'usd', Symbol: '$' });
        break;
      }
    }
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Show alert message when form is submitted
    alert('You are registered!');
    // Optionally reset the form after submission
    setEmail('');
    setPassword('');
    setShowSignupForm(false); // Close the signup form after submission
  };

  return (
    <div className='navbar'>
      <Link to={'/'}>
        <img src={logo} alt='' className='logo' />
      </Link>

      <ul>
        <Link to={'/'}>
          <li>Home</li>
        </Link>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>

      <div className='nav-right'>
        <select onChange={currencyHandler}>
          <option value='usd'>USD</option>
          <option value='eur'>EUR</option>
          <option value='inr'>INR</option>
        </select>
        <button onClick={() => setShowSignupForm(true)}>
          Sign up <img src={arrow_icon} alt='' />
        </button>
      </div>

      {/* Conditional rendering of the signup form */}
      {showSignupForm && (
        <div className='signup-form'>
          <form onSubmit={handleSignupSubmit}>
            <div className='form-field'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className='form-field'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type='submit'>Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default NavBar;
