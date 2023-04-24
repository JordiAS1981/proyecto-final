import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import NavBarComponent from './static/NavbarComponent/NavbarComponent';
import HomePage from './pages/Home/HomePage';
import ClubPage from './pages/ClubPage/ClubPage'
import ContactoPage from './pages/ContactoPage/ContactoPage';
import LoginPage from './pages/LoginPage/LoginPage';
import PrivatePage from './pages/Private/PrivatePage';
import FooterComponent from './static/FooterComponent/FooterComponent';
import EventosComponent from "./components/EventosComponent/EventosComponent";
import CarritoComponent from "./components/CarritoComponent/CarritoComponent";

function App() {

  const { user } = useSelector((state)=> state.AuthReducer)

  return (
    <div>
      <NavBarComponent></NavBarComponent>
          <Routes>
            <Route exact path='/' element={<HomePage/>}></Route>
            <Route exact path='/club' element={<ClubPage/>}></Route>
            <Route exact path='/eventos' element={<EventosComponent/>}></Route>
            <Route exact path='/contacto' element={<ContactoPage/>}></Route>
            <Route exact path='/private' element = {user.user && user.user.id ? <CarritoComponent/>: <LoginPage/>}></Route>
          </Routes>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;