import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './Components/Login/Login'
import Signin from './Components/Signin/Signin'
function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path ="/" element={<Login/>}/>
        <Route path ="/Signin" element={<Signin/>}/>
       </Routes>
    </Router>
  </div>
  );
}

export default App;
