import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Create from './components/Create';
import Update from './components/Update';
import Read from './components/Read';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { fetchUsers } from './features/userDetailSlice';
import { useDispatch } from "react-redux";

function App() {

  const dispatch = useDispatch();

  // Fetch users initial render page
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Read />} />
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/edit/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
