/****************************FrontEnd************************/
npm i react-router-dom


--Folders---
src/components
src/pages
src/redux

---Create Routes App.js--

--Files /Components--
components/DefaultLayput.jsx

--index.html---
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

--Add <DefaultLayout></DefaultLayout> into Apps.js---
--Add <DefaultLayout></DefaultLayout> into BookingCars.js---

/*********************BACKEND*********************************/

//ROOT PATH
-----Create package.json-------
npm init

---Install Express Nodemon Mongoose---
npm i express mongoose
npm i nodemon -g
--Create Server.js


---MongoDB Atlas---
->Login inoob007@outlook.com -> www.mongodb.com

-Create DB
    ->Browse Collections
        ->Create Database
            ->auto-rental
            ->users
-Overview
    ->Connect
        ->Connect using MongoDB Compass
            ->Copy the connection string, then open MongoDB Compass

***Create an user for Database Access***
->Security
    ->Database Acess
        ->Username : Password

**Those creds will be type into connection strings <username>:<password>**
You will be prompted for the password for the <username> user's (Database User) username.
When entering your password, make sure that any special characters are URL encoded

*** Meanings
Database :: Database name
Collection Name :: Table
***

--Create Database File--
db.js

--Check databases via MongoDB Compass App---
We can check databases via typing the connection string into app

///ROOT FRONT END///
npm i redux react-redux redux-thunk redux-devtools-extension

****WHAT IS IT USED FOR***
REDUX:Redux es un contenedor predecible del estado de aplicaciones JavaScript.

Te ayuda a escribir aplicaciones que se comportan de manera consistente, corren en distintos ambientes (cliente, servidor y nativo), y son fáciles de probar. Además de eso, provee una gran experiencia de desarrollo, gracias a edición en vivo combinado con un depurador sobre una línea de tiempo.
https://es.redux.js.org/

REACT-REDUX: React bindings para Redux
https://github.com/reduxjs/react-redux

REDUX THUNK: Redux Thunk es un middleware que le permite invocar creadores de acciones que devuelven una función en vez de un objeto de acción. Esa función recibe el método de envío de la tienda, que luego se utiliza para enviar acciones síncronas regulares dentro del cuerpo de la función una vez que se completaron las operaciones asíncronas.
https://www.digitalocean.com/community/tutorials/redux-redux-thunk-es

****WHAT IS IT USED FOR****

/// **** WORKING ON REDUX PATH//

store.js
    -> Snippet gotten from https://www.npmjs.com/package/redux-devtools-extension

reduces/carReducers.jsx
    ->After coding store.js we will work on this.

actions/

//Index.js//
import {Provider} from 'react-redux'
import {store} from '../redux/store'

Replace <React.Strict></React.Strict> to <Provider store={store}></Provider>

//Home.jsx//
import { useSelector } from 'react-redux';

const {cars} = useSelector(state => state.carsReducer)


//redux/actions Working Path
../actions
    ->carsActions.jsx
    ->alertsReducer.jsx      //add this to store => rootReducer


****//INSTALL AXIOS ///****
npm i axios

****//              ///****
//ADD proxy @ JSON BACKEND //////////////////////

"proxy":"localhost:5000"

../reducers/carsReducer.jsx
Create switch case

//Home.jsx  ////////////////////
We are going to render "getAllCars
import getAllCars from "../redux/actions/carsActions"
Create useDispatch instance
Create useEffect


///HOME PAGE DESIGN USING ANTD DESGINER//
antd.design/components/overview/
antd provides plenty of UI components to enrich your web applications, and we will improve components experience consistently. We also recommend some great Third-Party Libraries additionally.


    //installing antd library(FRONTEND PATH)//
https://ant.design/docs/react/introduce
npm i antd

**import antd css manually**

//App.jsx//
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

//Styling Home.jsx + index.css//
Home.js
index.css

//Home.js
Add const {loading}

//Create ../components/Spining.jsx 


//Working on css
.car .car-img .car-content .car:hover .


///LOGIN REGISTER PAEGES DESING
Login.jsx
index.css => .login 

