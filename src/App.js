import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from './pages/Home';
import AddContact from './contacts/AddContact';
import EditContact from './contacts/EditContact';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ViewContact from './contacts/ViewContact';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/add-contact' element={<AddContact/>}/>
          <Route exact path='/edit-contact/:id' element={<EditContact/>}></Route>
          <Route exact path='/view-contact/:id' element={<ViewContact/>}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
