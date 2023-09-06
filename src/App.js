// import logo from './logo.svg';
import './App.css';
// import Resume from './components/Resume.js';

import R from './components/R';
import Style from './css/Style.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
    <Router>
      <Routes>
        {/* <Route path ="/" element ={<Resume />}></Route> */}
        <Route path ="/" element ={<R />}></Route>
        
      </Routes>
    </Router>
    </div>
  );
}

export default App;
