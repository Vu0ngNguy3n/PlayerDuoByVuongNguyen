import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';

function App() {
  return (
   <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<Home/>} path='/'/>
        </Routes>
      </div>
   </BrowserRouter>
  );
}

export default App;
