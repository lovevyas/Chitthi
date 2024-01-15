import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Feed from './Feed/Feed';
import Widgets from './Widgets/Widgets';
import { useStateValue } from './StateProvider';
import Login from './Login/Login';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import EventCalendar from './EventCalendar/EventCalendar'; // Import the EventCalendar component

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Routes>
              <Route path='/' exact  element={<Feed />}/>
                <Route path="/event-calendar" element={<EventCalendar/>} />
                

              </Routes>
              <Widgets />
            </div> 
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
