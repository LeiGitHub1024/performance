// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Scale from './pages/scale';
import Elements from './pages/elements';
import Visual from './pages/Visual';
import Time from './pages/time';
import './perf.js'

function App() {
  return (
    <div className='App'>
      <header className='Header'>
        <div><a href='/' style={{marginLeft:10}}>Home</a></div>
        <div><a href='/elements' style={{marginLeft:10}}>Elements</a></div>
        <div><a href='/scale' style={{marginLeft:10}}>Scale</a></div>
        <div><a href='/visual' style={{marginLeft:10}}>Visual</a></div>
        <div><a href='/time' style={{marginLeft:10}}>Time</a></div>
      </header>
      <body className='Content'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/elements" element={<Elements />} />
            <Route path="/scale" element={<Scale />} />
            <Route path="/visual" element={<Visual />} />
            <Route path="/time" element={<Time />} />
          </Routes>
        </BrowserRouter>
      </body>
    </div>
  );
}
const Home = () => {
  return <div>什么是LCP？</div>
}


export default App;
