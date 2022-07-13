// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <a href='/' style={{marginLeft:10}}>Home</a>
      <a href='/about' style={{marginLeft:10}}>About</a>
      <a href='/dashboard' style={{marginLeft:10}}>Dashboard</a>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
const Home = () => {
  return <div>阿廖沙的主页</div>
}

const About = () => {
  return <div>阿廖沙的主页</div>
}

const Dashboard = () => {
  return <div>今日活跃用户: 42</div>
}


export default App;
