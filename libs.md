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


///LOGIN REGISTER PAGES DESING  CHECKPOINT
Login.jsx
Register.jsx  //a login.jsx clone
index.css

//Login and Register actions
Implement onFinish @ <Form></Form> for Register and Login.jsx

//redux/actions
    ->userActions.jsx

Create file mentioned above, it will be created to perform how user state will be managed via axios.post (login/register :: request and response)

//Login.jsx, Register.jsx
import userLogin => Login.jsx
import userRegister => Register.jsx
import useDispatch => each module
Instance useDispatch() = each module


///USER AUTHENTICATION API CHECKPOINT
//ROOT PROJECT PATH
Create
    ->routes/
            ->carsRoute.jsx
            ->usersRoute.jsx
    ->models/
            ->carsModel.jsx
            ->userModel.jsx

--Add routes carsRouter and usersRoute @server.js

const cors = require('cors')
app.use(express.json())
app.use(cors())
app.use("api/users, require("./routes/usersRoute"))
app.use("api/cars", require("./routes/carsRoute"))


//USER AUTHENTICATION API CHECKPOINT
DefaultLayout.jsx modifying  (add logged in function button + dropdown using Ant Design library)
    ***
    (Copy dropdown menu botton center from ant design site from components -> dropdown)
    ->JSON.parse..
    ->const menu
    -><Row>
        -><Col>
    -><Dropdown>
        -><Button>
    

//Protected Routes(Router) FE CHECKPOINT
Apps.js
    ->add {Redirect} @ router-router-dom 


//Car animation login/register Pages // FE CHECKPOINT 
***AOS - Animate on scroll library***
Small library to animate elements on your page as you scroll
npm i aos

**IMPORT NEXT LINES @ Login.jsx and Register.jsx
-> import AOS from 'aos'
-> import 'aos/dist/aos.css'
->import Spinner from '../components/Spinner.jsx'
->AOS.init()
-import {useSelector} @react-redux
-add data-aos="slide-left" data-aos-duration="1500" on <img/>

//CAR BOOKING SCREEN (CARD INFO)// FE 
->Home.js
import {Link} from 'react-router-dom
Add <Link> for Booking Now!

->BookingCar.jsx

->App.js
Modifiying path='/bookingCar' to path='/booking/:carid'

//WORKING ON TIMESLOTS //DATAPICKER // FE-BE CHECKPOINT
->BookingCar.jsx
import {DataPicker} from 'antd'
const {RangePicker} = DataPicker     //Specific datapicker type
->add another <Divider></Divider>

-Create const SelectTimeSlot
-Create RangPicker states
-Create <div></div> for {totalHours}

//BOOKING CAR // FE CHECKPOINT
->BookingCar.jsx
**Implementing Total hours <div></div>Section**
-Add const [driver, setDriver] //if driver needed
-Add const [totalAmount, setTotalAmount]

-Add useEffect for Driver    //Add up TotalAmount when driver is required

-Add const bookNow  //Create Booking Car Order Data

->Create file actions
                ->bookingActions.jsx

->BookingCar.jsx
-import {bookCar} from  '../redux/actions/bookingActions.jsx'

-Add dispatch(bookCar(reqObject)) into const bookCar()

//BOOKING CAR BACKEND///// CHECKPOINT
***MODELS**
Create models/bookingModel.jsx

***ROUTES***
Create routes/bookingsRoute.jsx


//FILTER CARS BASED ON AVAILABILITY

->Home.jsx
import {Divider, Checkbox, DatePicker} from 'antd'
import moment from 'moment'
const RangePicker = DatePicker; // DatePicker as RangePicker style

ADD <Row><Col></Col></Row> tags like this:
    <DefaultLayout>
        <Row>
            <Col>
                <RangePicker onChange={setFilter}/>
            </Col>
        </Row>

        ///REST OF CODE.... BELOW///
    </DefaultLayout>

-Create [totalCars, setTotalCars] = useState([])
-Create setFilter function

-Create useEffect(() => {
    setTotalCars(cars)
},[cars])

->Change state for mapping "cars.map(cars => ...)" to "totalCars.map(cars => ...)"

-BookingCar.jsx

-->{from && to ()} will wrap TOTAL HOURS SECTION ... The block will be display if from-to dates is filled in <RangePicker/>
*************** 
{from && to && (
    <div></div>
)}
****************

//BOOKED TIMESLOTS MODAL//

BookingCar.jsx
//It will show car reserved slots 
-Add <button>See Booked Slots<button> after <RangePicker> tag

***Modal***
-add import {Modal} from 'antd' 

-add <Modal></Modal> after </Row>
-add const[showModal, setShowModal] = useState(false)
-add onClick{() => setShowModal(true)} "Show Time Slots" button

//STRIPE PAYMENT CHECKPOINT
-Sign in/up @ stripe.com
    ->Developers
        ->API KEYS
            ->Publishable Key (FOR FRONTEND)
                pk_test_51JwKlOACraCbfISzuTaAqqeM5dU0mEbDF1b3HX2PdbOMk19ku95TmkkQGp3ODp9Y9muhfwJX31BfW2WuyGTNgPix00tELKPqEB
            ->Secret Key (FOR BACKEND)
                sk_test_51JwKlOACraCbfISzAaLgqYHBwHIOVzOsgPGwlWforyMzzsb40TPojwcT9D5tsHlfIQDzt9h40dYXJGx1Y8QEOX7400lu5fZWtB

//PAYMENT GATEWAY FRONTEND CHECKPOINT
https://stripe.com/docs/payments/checkout //DOCS FOR MORE DETAILS!

We need to implement checkout payment.So, we need to install this library from FontEnd

$npm i react-stripe-checkout

->BookingCar.jsx
    ADD:
    import StripeCheckout from 'react-stripe-checkout'

    <StripeCheckout token={this.onToken} stripeKey="pk_test_51JwKlOACraCbfISzuTaAqqeM5dU0mEbDF1b3HX2PdbOMk19ku95TmkkQGp3ODp9Y9muhfwJX31BfW2WuyGTNgPix00tELKPqEB"/>

*****NOTE
import and Stripe tag Snippet have been gotten from https://www.npmjs.com/package/react-stripe-checkout

****
-Add <StripeCheckout/> BELOW <h3>Total Amount: {totalAmount}</h3>

-Move and delete "onClick" function to <button>Book Now</button> getting something like this:
            <StripeCheckout>
                <button className="btn btn-secondary p-2">Book Now</button>
            </StripeCheckout>

->Create onToken = (token)=>{console.log(token)} 

****TEST PAYMENT INTEGRATION
https://stripe.com/docs/testing#cards -> CARDS
https://temp-mail.org                   ->Temp Mail

***AT THIS POINT WE SHOULD BE ABLE TO SEE THE TRANSACTION DONE FROM INSPECT CODE
Object { id: "tok_1JwLz4ACraCbfISzPNEUcvz4", object: "token", card: {…}, client_ip: "186.32.223.83", created: 1637047298, email: "veloder577@erpipo.com", livemode: false, type: "card", used: false }
​*********************



***NOW WE NEED TO INTEGRATE PAYMENT GATEWAY FROM BACKEND

Now we need to move bookNow() content to onToken() like this: (delete BookNow())
    const onToken= (token) => {
            const reqObj = {
                user: JSON.parse(localStorage.getItem('user'))._id,  //user PK
                car: car._id,   //car PK
                totalHours,
                totalAmount,
                driverRequired: driver,
                bookedTimeSlots: {
                    from,
                    to,
                }
            }

            dispatch(bookCar(reqObj))
        }

**Install Stripe  BACKEND**
$npm i stripe
*****************************

->BookingsRoute.jsx

****INSTALL uuid***
$npm i uuid
****************

-ADD
    -> const stripe = require('stripe')('')    //second parenthesis refers to Secret Key
    -> const {v4: uuidv4} = require('uuid')   //Unique UID

    //AFTER req.body.transactionID= '1234'
    -> const {token} = req.body

-ADD into Try{} statement
    -const customer = await Str...//CODE CODE MORE CODE

    -const payment = await ....

-Then, create if(){}else{} move const newBooking and const Car like this:
It will be the payment validation

            if(payment){

                req.body.transactionId = payment.source.id
                const newBooking = new Booking(req.body)
                await newBooking.save()
                
                const car = await Car.findOne({_id: req.body.car})
                /**console.log(req.body.car); */
                car.bookedTimeSlots.push(req.body.bookedTimeSlots)
                
                await car.save()
                res.send('Your booking has been successfully')

            }else {
        
                return res.status(400).json(error)
            }

            ///....CODE CODE CODE MORE CODE BELOW

At this point we should be able to save transaction into our DB.Lets take a look at DB for our new booked record are correctly added (transactionId column must appear something like transactionId:"card_1JwOo9ACraCbfISzla1Ova42". If it is correct, payment gateway has been integrated correctly.)

///USER BOOKINGS PAGE DESIGN FE// CHECKPOINT

->Create src/pages/UserBookings.jsx

*****ADD ROUTE @App.jsx***
import {UserBookings} from '../src/pages/UserBookings.jsx'
<ProtectedRoute path="/userbookings" exact component={UserBookings}/>

->BookingsRoute.jsx
Create route request to get all cars booked by User

    ->route.get('/getallbookings', async(req,res) => {//...CODE CODE MORE CODE} )

->bookingActions.jsx
Create getallbookings() to dispatch all cars booked by User

    ->export const getallbookings = () => async dispatch => {//CODE MORE CODE...}

->Create
    ->src/redux/reducers/bookingsReducer.jsx
        ->Create const bookingsReducer = (state=state, action) => {//CODE MORE CODE}


->UserBookings.jsx
    ->import {useState, useEffect} from 'react'
    ->import {userDispatch, useSelector} from 'react-redux'
    ->import {getAllBookings} from '../redux/actions/bookingsActions.jsx'
    ->const dispatch =useDispatch()

    //RE/RENDER All cars booked by User
    ->Add UserEffect({  
        dispatch(getallbookings())   
    },[])

->Store.jsx
-import {bookingsReducer} from './reducer/bookingsReducer.jsx
Add bookingsReducer to rootReducer() like this:
    const rootReducer = combneReducers({
        carsReducer,
        alertReducer,
        bookingReducer
    })


//USERBOOSTRAP LOGIC

->UserBookings.jsx

->bookingsRoute.jsx

-remove this line const bookings =  await Booking.find() then add this one
                  const bookings =  await Booking.find().populate('car')  //From Booking Table find out 'car' entity(PK n:n)


->UserBookings.jsx
ADD

We are going to create Car Booking Details (Detail Card Style) purchased by User

//AS FIRST STEP
import moment from 'moment'
import {Spinner} from '../components/Spinner.jsx'

//AS SECOND STEP
const {bookings} = useSelector(state => state.bookingsReducer)
const user =  JSON.parse(localStorage.getItem('user')
const {loading} = useSelector(state => state.alertsReducer)

Structure when get adds and any modifying it is going to look like this:

***********************
return (
        <div>
            <DefaultLayout>
                {loading && (<Spinner />)}
               <h3 className="text-center mt-3">MY BOOKINGS</h3>
               <hr/>
                //AS First Step
               <Row justify="center" gutter={16}>
                    <Col lg={16} sm={24}>
                        {bookings.filter(u => u.user == user._id).map((booking) => {
                        
                        return(
                            <Row gutter={16} className="booked-car-detail box-shadow-1 m-2 text-left ">
                                <Col lg={6} sm={24}>
                                    <p><b>{booking.car.name}</b></p>
                                    <p>Total Hours: <b>{booking.totalHours}</b></p>
                                    <p>Rent Per Hour:<b>{booking.car.rentPerHour}</b></p>
                                    <p>Total Amount: <b>{booking.totalAmount}</b></p>
                                </Col>

                                <Col lg={12} sm={24}>
                                    <p>TransactionID: <b>{booking.transactionId}</b></p>
                                    <p>From: <b>{booking.bookedTimeSlots.from}</b></p>
                                    <p>To: <b>{booking.bookedTimeSlots.to}</b></p>
                                    <p>Date of Booking: <b>{moment(booking.createdAt).format('MMM DD yyyy HH:mm')}</b></p>

                                </Col>

                                <Col lg={6} sm={24} className="text-right">
                                    <img src={booking.car.image} height="150" className="p-2" style={{borderRadius: "15px"}} />
                                </Col>
                            </Row>)
                        })}
 
                    </Col>  
               </Row>
               //END First Step
            </DefaultLayout>
        </div>
**************************************************************

->bookingsAction.jsx
ADD this @ axios.post() Block after message.success() line

setTimeout(() => {  
            
            window.location.href="/userbookings" //When car booked user will be redirect to user bookings                
       }, 1000)

It will useful when an USER booking a car. There will be 1 sec delay after redirecting to /userbookings page.It will display all cars booked by currently logged in user.

-DefaultLayout.jsx
import {Link} from 'react-router-dom

Modifying hrefs
href="/"
href="/userbookings"
href="/profile"             //NEXT LECTURE  

Modifying <h1></h1> to <h1><Link to="/">506 Auto Rental</Link></h1>


            ////CRUD//////CRUD/////CRUD/////

//ADD NEW CAR
-Create src/pages/AddCar.jsx and adding <DefaultLayout> component.
-import { DefaultLayout } from '../components/DefaultLayout'


-App.jsx

ADD
import {AddCar} from './pages/AddCar.jsx;

<ProtectedRoute path='/addcar' exact component={AddCar}/>

-AddCar.jsx
    ->Import {Col, Row, Form, Input} from 'antd'
    ->Create whole <Row><Col><Form><Form.Item><Input/></Form.Item></Form></Col></Row> with its respective functionality.


-CarActions.jsx

    ->Create const addCar()  Action with its respective functionality

-AddCar.jsx

    ->import {useDispatch, useSelector} form "react-redux'
    ->import { addCar } from '../redux/actions/carsActions' //AddCar Action

    ->const dispatch = useDispatch()

    ->Create onFinish(values)  //retrieves all values from form to POST a new car API request operation.

/ADD NEW CAR API CHECKPOINT //BE

->carRouter.jsx

-ADD router functionality
router.post("./addcar", (req, res) => {//code more code})

-Test form functionalitY; adding a new car. It must be functional.
***HINT: STOP AND RUN BE - FE after any new changes (404 error issue(tested))***

---I JUST FOUND OUT className="text-<left-right-center>" it seems like not working. So, Instead of using className replacing by style={{textAlign: "<left-right-center>"}} property---- IT'S WORKING now!


//UPDATE CAR DESIGN //CHECKPOINT FE
Create
    ->src/pages/AdminHome.jsx
        ***CLONE CODE FROM ./Home PAGE TO ./AdminHome.jsx PAGE

        **//REMOVE
            ->setFilter()
            -><button></button>  //it will replace by delete ant desing API icons 

ADD ROUTE 
    ->App.jsx
        -<ProtectedRoute path='/admin' exact component={AdminHome}/>
        
//INSTALL ANT DESIGN ICONS
**info https://ant.design/components/icon/#API **
$npm i --save @ant-design/icons

->AdminHome.jsx
        //We will use Ant Design API Icons
    ->import {deleteOutlined, editOutlined} from '@ant-desing/icons'
    ->import {Edit} from 'antd' //for Edit popup Modal

-CREATE 
    ->src/pages/EditCar.jsx                 //CRUD :: U

        ***CLONING WHOLE CODE FROM AddCar.jsx***

-ADD ROUTE App.jsx

    -import { EditCar } from './pages/EditCar';
    -<ProtectedRoute path="/editcar/:carid" exact component={EditCar}/>

-HomeAdmin.jsx

    -import {Link} from "react-router-dom"

        //Redirecting to Edit Car page//
    -MODIFY
        -<Link to={`/editcar/${car._id}`}><EditOutlined  style={{color: "green", marginRight: "10px", cursor: "pointer"}}/></Link>

        -import { getAllCars } from '../redux/actions/carsActions'
        -useEffect( () => {
            
            useEffect(() => {
        
        if (cars.length == 0) {
            dispatch(getAllCars())
        }else {
            setTotalCars(cars)
            setCar(cars.find((c) => c._id == match.params.carid)) //if id matches then it will trigger a rendering for car update operation
            console.log(car)
        }
    },[cars])

        -import {useState, useEffect} from 'react'
        const {cars} = useSelector(state => state.carsReducer)
        const [car, setCar] = useState()

        MODIFY
        const EditCar({match})     //incorporate "match" parameter. So, matching IDs will do trigger an update operation. If doesnt, user needs to create new car.
        
        //ADD initalValues prop
        <Form initialValues={car}>

carsAction.jsx
CREATE function for edit car operation
    export editCar = (reqObj) => async dispatch {//CODE MORE CODE HERE//}


carsRoute.jsx

CREATE route for car editing

    router.post("/editcar", (req, res) => {
        //code more code //
    })


carsActions.jsx

CREATE
    ->export const editCar = async(req,res) => {
        //CODE MORE CODE
    }

TEST EDIT CAR FUNCTIONALITY! (IT SHOULD BE FULLY FUNCTIONAL)

//DefaultLayout.jsx
Replace "Profile" => "Admin"
        -Replace href to href="/admin"


AdminHome.jsx
ADD 
    ->New Button named "ADD CAR" under 
        <DefaultLayout>

            <Row justify="center" gutter={16} className="mt-2">
                <Col lg={20} sm={24} className="mt-2">
                    <div style={{textAlign: "right"}}>
                        <button className="btn btn-light" style={{borderColor: "green"}}>
                            <a href="/addcar" style={{color: "green"}} target="_blank">ADD CAR</a>
                        </button>
                    </div>
                </Col>
            </Row>
            /////code more code..... below

//DELETE CAR // CHECKPOINT     CRUD :: D

We will use an button from ANT DESIGN named "popconfirm". It will perform a popup action before delete car(yes/no).
https://ant.design/components/popconfirm/

AdminHome.jsx  //delete functionality

import { Popconfirm, message } from 'antd';

Under <Link to={`/editcar/${car._id}`}>.....</Link> (Move <DeleteOutlined> into it!!)
      
      <Popconfirm
        title="Are you sure you want to delete this car?"
        onConfirm={() => {}}
        okText="Yes"
        cancelText="No"
       >
        <DeleteOutlined style={{color:"orangered", cursor: "pointer"}}/>
       </Popconfirm>

carAction.jsx
CREATE DELETE FUNCIONALITY
    export const deleteCar = (reqObject) => async dispatch {
        //CODE MORE CODE
    }

AdminHome.jsx
import {deleteCar} from from "../redux/actions/carsActions.jsx"

MODIFY "onConfirm" functionality to <Popconfirm>
onConfirm={() => {dispatch(deleteCar({carid : car._id}))}}


carsRoute.jsx

CREATE DELETE ROUTE FUNCTIONALITY
    ->router.post("/deletecar", async (req,res) => { //CODE MORE CODE HERE }

RESTART FB-BE runtimes (will avoid status 400 or 404 errors before going to check code again)
At this point we could be able to delete cars!!. Test add some car and then delete it!


//CSS FIXES AND DEPLOYMENTE //RESPONSIVENESS


