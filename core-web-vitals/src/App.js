// import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Routes,Link } from 'react-router-dom'
import Scale from './pages/scale';
import Elements from './pages/elements';
import Visual from './pages/Visual';
import Time from './pages/time';
import './perf.js'
function App() {
  return (
    <div className='App'>
      <header className='Header'>
        
        <div><Link to='/' style={{marginLeft:10}}>Home</Link></div>
        <div><Link to='/elements' style={{marginLeft:10}}>Elements</Link></div>
        <div><Link to='/scale' style={{marginLeft:10}}>Scale</Link></div>
        <div><Link to='/visual' style={{marginLeft:10}}>Visual</Link></div>
        <div><Link to='/time' style={{marginLeft:10}}>Time</Link></div>
      </header>
      <div className='Content'>
        {/* <HashRouter> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/elements" element={<Elements />} />
            <Route path="/scale" element={<Scale />} />
            <Route path="/visual" element={<Visual />} />
            <Route path="/time" element={<Time />} />
          </Routes>
        {/* </HashRouter> */}
      </div>
    </div>
  );
}
const Home = () => {
  return <div>什么是LCP？</div>
}


export default App;
