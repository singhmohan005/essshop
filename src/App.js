import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import { Provider } from 'react-redux';
import store from './store/store';
import Nav from './components/Nav';

function App() {
  return (
    // <div className='text-3xl'>hello</div>
    <Provider store={store} >
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />

    </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
