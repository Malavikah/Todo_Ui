import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ViewWeekly from './Component/ViewWeekly';
import DeleteWeekly from './Component/DeleteWeekly';
import UpdateWeekly from './Component/UpdateWeekly';
import AddAll from './Component/AddAll';
import Notes from './Component/Notes';
import Navbar from './Component/NavBar';
import Addnew from './Component/Addnew';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path={"/nav"} element={<Navbar/>} exact={true}></Route>
    <Route path={"/"} element={<Notes/>} exact={true}></Route>
    <Route path={"/viewweekly"} element={<ViewWeekly/>} exact={true}></Route>
    <Route path={"/add"} element={<Addnew/>}></Route>
    <Route path={"/updateweekly/:_id"} element={<UpdateWeekly/>} exact={true}></Route>    
    <Route path={"/deleteweekly"} element={<DeleteWeekly/>} exact={true}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
