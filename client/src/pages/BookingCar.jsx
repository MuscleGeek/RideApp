import React , { useEffect, useState } from 'react'
//Redux
import {useSelector, useDispatch} from 'react-redux'
import { DefaultLayout } from '../components/DefaultLayout.jsx'
import {getAllCars} from '../redux/actions/carsActions' /**get all cars from DB */

//spinner loading effect
import {Spinner} from '../components/Spinner.jsx'

//Ant Design
import {Col, Row, Divider, DatePicker, Checkbox, Modal} from 'antd'

//Library for parsing, validating, manipulating, and formatting dates. Project Status
import moment from 'moment'

//Stripe Payment Gateway
import StripeCheckout from 'react-stripe-checkout'

//ACTIONS
import { bookCar } from '../redux/actions/bookingActions.jsx'

//AOS Animation on Scroll
import AOS from 'aos';
import 'aos/dist/aos.css';  // <link> for styles could be an alternative too

//Range Timing type
const {RangePicker} = DatePicker;






export const BookingCar = ({match}) => {
    
    const {cars} = useSelector(state => state.carsReducer)    //get car state from DB 
    const {loading} = useSelector(state => state.alertsReducer) //loading alert
    const dispatch = useDispatch()
    //Car State
    const[car, setCar] = useState({})
    //RangePicker State
    const[from, setFrom] = useState()
    const [to, setTo] = useState()
    const [totalHours, setTotalHours] = useState(0)
    const [driver, setDriver] = useState(false)
    const [totalAmount, setTotalAmount] = useState(0)
    const [showModal, setShowModal] = useState(false)
    

    useEffect(() => {
        
        if(cars.length == 0)
        {
            dispatch(getAllCars()) //send cars action (get_all_cars)
            
        }else {
            setCar(cars.find((c) => c._id === match.params.carid))  //save new state for cars what it have been filtered by id
        }
    }, [cars])

    useEffect(() => {   //Adding up Total Amount when driver has not been required or If it does

        setTotalAmount(totalHours * car.rentPerHour);   //!driver
        if (driver) {
            setTotalAmount(totalAmount + 30 * totalHours); //driver
        }
    }, [driver, totalHours]);
    //DatePicker timing slot  //Retrieves values from RangePicker {from: to:} 
    const selectTimeSlots = (values) => {
        /* console.log(moment(values[0]).format('MMM DD yyyy HH:mm')) //retrieved value output for from:
        console.log(moment(values[1].format('MMM DD yyyy HH:mm')))//retrieved value for to: */

        setFrom(moment(values[0]).format('MMM DD yyyy HH:mm')) //From
        setTo(moment(values[1]).format('MMM DD yyyy HH:mm')) //To

        setTotalHours(values[1].diff(values[0], 'hours')) //how many hours between "x and y" days (from: <=> to:)
    }


    const onToken= (token) => {
        const reqObj = {
            token,
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
    return (
        <DefaultLayout>

            {loading  && (<Spinner />)}

            <Row justify="center" className=" d-flex align-items-center" style={{minHeight: "90vh"}}>
                <Col lg={10} sm={24} xs={24} className='p-3'>                                               {/**CARD IMG */}
                    <img src={car.image} className='carImg-booking box-shadow-1 w-100 ' alt="booking card" data-aos="flip-left" data-aos-duration="1000"/>
                </Col>

                <Col lg={10} sm={24} xs={24} style={{textAlign: "right"}} className="p-3">             {/**CARD INFO @left side*/}
                    <Divider type="horizontal dashed">Car Info</Divider>   
                    <div style={{textAlign: "right"}}>
                        <p>{car.name}</p>
                        <p>Rent Per Hour:{car.rentPerHour} </p>
                        <p>Fuel: {car.fuel}</p>
                        <p>Passengers: {car.capacity}</p>
                    </div>
                                {/**<Divider></Divider> is like </hr> */}

                    <Divider type="horizontal dashed">Select Time Slots</Divider>   {/**FROM - TO TIMING */}
                    <RangePicker showTime={{format: "HH:mm"}} format="MMM DD yyyy HH:mm" onChange={selectTimeSlots}/>
                    <br />

                    {/**SEE RESERVED SLOTS  */}
                    <button className="btn btn-warning mt-2" onClick={() => {setShowModal(true)}}>See Booked Slots</button>

                    {/**TOTAL HOURS BLOCK */}
                    {from && to && (            /**When RangePicker is filled it will display booking car details */
                        <div>
                        <p>Total Hours: <b>{totalHours}</b></p>
                        <p>Rent Per Hour: <b>{car.rentPerHour}</b></p>
                        <Checkbox onChange={(e) => {
                            if (e.target.checked)        /**validating, when driver is needed  */
                            {
                                setDriver(true);
                            }else{
                                setDriver(false)
                            }
                         }}
                        >
                          Driver Required
                        </Checkbox>

                        <h3>Total Amount: {totalAmount}</h3>

                        {/**STRIPE PAYMENT GATEWAY */}
                        <StripeCheckout token={onToken} 
                                        stripeKey="pk_test_51JwKlOACraCbfISzuTaAqqeM5dU0mEbDF1b3HX2PdbOMk19ku95TmkkQGp3ODp9Y9muhfwJX31BfW2WuyGTNgPix00tELKPqEB"
                                        shippingAddress
                                        currency='usd'
                                        amount={totalAmount * 100}

                                        >
                                {/**When button is clicked on. It popups Payment Checkout Screen */}
                            <button className="btn btn-warning btn-book-now">Book Now!</button> 
                        </StripeCheckout>
                        
                        </div>
                    )}

                </Col>
                {/**SEE BOOKED SLOTS MODAL POP-UP */}
                {car.name && (
                    <Modal visible={showModal} closable={false} footer={false} title="Booked Time Slots">
                        {car && (<div className="modal-time-slots">
                            {car.bookedTimeSlots.map(slot => {
                                return(
                                    <button className="btn btn-secondary p-2 m-1">{slot.from} - {slot.to}</button>
                                )
                            })}
                                {/**CLOSE MODAL POP-UP */}
                            <div className="mt-5" style={{textAlign: "right"}}>
                                <button className= "btn btn-danger" onClick={() =>{setShowModal(false)}}>Close</button>
                            </div>
                        </div>)}     
                    </Modal>
                )}
            </Row>            
        </DefaultLayout>
    )
}
