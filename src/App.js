import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Feed from './Feed/Feed';
import Widgets from './Widgets/Widgets';
import { useStateValue } from './StateProvider';
import Login from './Login/Login';


function App() {
  const [{ user }, dispatch] = useStateValue();
  

  return (
    <div className="app">
      {!user ? (
        <Login /> ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}
export default App;
