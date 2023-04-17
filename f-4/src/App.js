import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavigationComponent from './components/static/NavigationComponent/NavigationComponent';
import FooterComponent from './components/static/FooterComponent/FooterComponent';
import HomePage from './pages/Home/HomePage';
import ClubPage from './pages/Club/ClubPage';
import LoginPage from './pages/Login/LoginPage';
import TicketsPage from './pages/Tickets/TicketPage';
import LocationPage from './pages/Location/LocationPage';
import SingleClubPage from './pages/Single/SingleClubPage';
import { useSelector } from 'react-redux';

function App() {

  const {user} = useSelector((state)=> state.AuthReducer);

  return (
    <div className='App'>
      <NavigationComponent />
      <Routes>
        <Route exact path="/" element= {<HomePage/>}></Route>
        <Route exact path="/club" element= {<ClubPage/>}></Route>
        <Route exact path="/club/:id" element= {<SingleClubPage/>}></Route>
        <Route exact path="/login" element= {user.user && user.user.id?<TicketsPage/> : <LoginPage/>}></Route>
        <Route exact path="/tickets" element= {user.user && user.user.id?<TicketsPage/> : <LoginPage/>}></Route>
        <Route exact path="/location" element= {<LocationPage/>}></Route>
      </Routes>
      <FooterComponent></FooterComponent>
    </div>


  );
}

export default App;
