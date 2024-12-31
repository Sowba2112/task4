// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'


// import Form from './Form.jsx'
// import Orange from './Orange.jsx'

// import Slambook from './Slambook.jsx'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
    {/* <h1>Hello World</h1> */}


    {/* <Form/> */}
    {/* <Orange/> */}


        //  <body ><Slambook/></body>
    
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
//     </>
//   )
// }

// export default App





// import Sow from "./Sow.jsx";
// import State from "./State.jsx"
// function App(){
//   return(
//     <>
//     {/* <div>Sow name={"Shanmuga Sundaram"}</div> */}
    
    
//     </>
//   )
// }
// export default App






import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Aboutus from './Aboutus';
import Contactus from './Contactus';
import Sow from './Sow.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Page.css';
function App(){
  return(
   <Router>
    <div>
      <header>
      <nav className="nav-container">
        <div className="nav-left">
          <Link to="/Sow">
          <i className="fas fa-user-circle Sow-icon"></i>
          </Link>
          <Link  to="/Sow" className="nav-item">Sow</Link>
        </div>
       <ul className="nav-list">  
        <li className="nav-item"><Link to="/">Home</Link></li>
        <li className="nav-item"><Link to="/AboutUs">About Us</Link></li>
        <li className="nav-item"><Link to="/ContactUs">Contact Us</Link></li>
       </ul>
      </nav>
      </header>
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/AboutUs" element={<Aboutus />} />
       <Route path="/ContactUs" element={<Contactus />} />
      </Routes>
       <footer>
        <p>&copy; 2025 Your College.All rights are prohibited.</p>
        </footer> 
      </div>
   </Router>
     
   );
 }
export default App
