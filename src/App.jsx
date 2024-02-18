import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/SignupPage.jsx';
import Login from './pages/LoginPage.jsx';
import Panel from './pages/Panel.jsx'
import './App.css'
import IndexPage from './pages/IndexPage.jsx';

// import Main from './pages/Panel.jsx'

function App() {

  const [username,setUsername] = useState('');
  const handleLogin = (loggedInUsername) => {
    setUsername(loggedInUsername);
  };

  return (
    <Router>
      <Routes>
        <Route path='/' element={<IndexPage></IndexPage>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/login' element={<Login onLogin={handleLogin}></Login>}></Route>
        <Route path='/dashboard' element={<Panel name={username}></Panel>}></Route>
      </Routes>
        {/* <Main></Main> */}
    </Router>
  )
}

export default App
