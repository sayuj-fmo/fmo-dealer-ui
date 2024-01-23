import './App.css';
import Signup from './components/Auth/SignUp';
import PageBg from './assets/icons/page-bg.svg';

function App() {
  return (
    <div className="App">
      <img src={PageBg} alt="bg" className='hidden md:block absolute bottom-0 w-[50%]'/>
     <Signup />
    </div>
  );
}

export default App;
