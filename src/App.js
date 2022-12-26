import logo from './assets/icons/logo.svg'
import './App.css';
import jumbotron from './assets/images/jumbotron-img.png'

function App() {
  return (
      <div className='App'>
          <div className='left-container basis-2/5'>
              <img className='m-5' src={logo} alt='logo-icon' />
              <img src={jumbotron} alt='jumbotron-image' />
          </div>
          <div className='right-container basis-3/5'>
            <div>
              <span>EN/USD<img src='./assets/icons/arrow-down.svg' alt='arrow-down'/></span>
            </div>
              <h2 className='text-[38px] text-white-base'>Sign up</h2>
              <p className='text-[#777E91] text-xs'>Use Your OpenID to Sign up</p>
              <div className='flex'>
                  <span className='text-[#02C3BD]'>Email</span>
                  <span>Phone Number</span>
              </div>

              <form className='text-white-base'>
                  <div >
                      <label htmlFor='emailInput'>Email</label>
                      <input id='emailInput' type='email' name='email' />
                  </div>
                  <div>
                      <label>Password</label>
                      <input type='password' name='password' />
                  </div>
                  <div>
                      <label>Confirm Password</label>
                      <input type='password' name='confirmPassword' />
                  </div>
              </form>
          </div>
      </div>
  )
}

export default App;
