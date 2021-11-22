import logo from './logo.svg';
import './App.css';

//Router
import {Route, BrowserRouter, Redirect} from 'react-router-dom'
//Components

import { BookingCar } from './pages/BookingCar.jsx';
import { Home } from './pages/Home.jsx';
import { Login } from './pages/Login.jsx';
import { Register } from './pages/Register.jsx';
import { UserBookings } from './pages/UserBookings';
import { AddCar } from './pages/AddCar';
import { AdminHome } from './pages/AdminHome';
import { EditCar } from './pages/EditCar';
//Antd Design
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'



function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <ProtectedRoute path="/" exact component={Home}/> {/**Logged in Users only */}
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register}/>
        <ProtectedRoute path="/booking/:carid" exact component={BookingCar}/> {/**Logged in Users only */}  
        <ProtectedRoute path="/userbookings" exact component={UserBookings}/>
        <ProtectedRoute path='/addcar' exact component={AddCar}/>
        <ProtectedRoute path='/admin' exact component={AdminHome}/>
        <ProtectedRoute path="/editcar/:carid" exact component={EditCar}/>
      
      </BrowserRouter>
    
    </div>
  );
}

export default App;


/**PROTECTED ROUTES */
export const ProtectedRoute = (props) => {

  if(localStorage.getItem('user')) /**If user gets authenticated, it can access to protected routes("/" by default) */
  {   
    return <Route {...props}/>
  }
  else{                                 /**If it doesnt... it will redirect to login page */
    return <Redirect to='/login'/>
  }
}