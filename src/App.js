
import Home from './component/Home';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Gallery from './component/Gallery';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='gallery' element={<Gallery/>} />
        </Routes>
      </BrowserRouter> */}
      <Home />
    </div>
  );
}

export default App;
