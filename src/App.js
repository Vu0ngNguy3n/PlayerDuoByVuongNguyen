import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Stories from './pages/stories/Stories';

function App() {
  return (
   <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<Home/>} path='/'/>
          <Route element={<Stories/>} path='/stories'/>
        </Routes>
      </div>
   </BrowserRouter>
  );
}

export default App;
