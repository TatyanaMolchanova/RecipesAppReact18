import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Favourite from "./pages/favourite";
import Details from "./pages/details";

function App() {
  return (
    <div>
      <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
        <Navbar />
          <Routes>
              <Route
                path='/'
                element={<Home />}
              />
              <Route
                path='/favorites'
                element={<Favourite />}
              />
              <Route
                path='/recipe-item/:id'
                element={<Details />}
              />
          </Routes>
      </div>
    </div>
  );
}

export default App;
// time 6:13:07