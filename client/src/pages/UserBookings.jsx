import React, {useEffect} from 'react'
import { DefaultLayout } from '../components/DefaultLayout'
import {useDispatch, useSelector} from 'react-redux'
import {getAllBookings} from '../redux/actions/bookingActions.jsx'
import moment from 'moment'
import {Spinner} from '../components/Spinner.jsx'

//ANT DESIGN
import {Row, Col} from 'antd';

//AOS Animation on Scroll
import AOS from 'aos';
import 'aos/dist/aos.css';  // <link> for styles could be an alternative too

AOS.init();
//Range Timing type

export const UserBookings = () => {

    const dispatch = useDispatch()

    //BookingsReducer
    const {bookings} = useSelector(state => state.bookingsReducer) // bookings: action.payload
    const user = JSON.parse(localStorage.getItem("user"))
    const {loading} =  useSelector(state => state.alertsReducer) //loading: action.payload

    useEffect(() => {           //RE/RENDER GET ALL BOOKINGS COLLECTION BOOKED BY USER 
        dispatch(getAllBookings())
    }, [])

    return (
        <div>
            <DefaultLayout>
                {loading && (<Spinner />)}
               <h3 className="text-center mt-3">MY BOOKINGS</h3>
               <hr/>

               <Row justify="center" gutter={16}>
                    <Col lg={16} sm={24}>
                        {bookings.filter(u => u.user == user._id).map((booking) => {
                        
                        return(
                            <Row gutter={16} className="booked-car-detail box-shadow-1 m-2 " style={{textAlign: "left"}} data-aos="slide-left" data-aos-duration="1000">
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

                                <Col lg={6} sm={24} style={{textAlign: "right"}}>
                                    <img src={booking.car.image} height="150" className="p-2" style={{borderRadius: "15px"}} alt="Booking Car" />
                                </Col>
                            </Row>)
                        })}
 
                    </Col>  
               </Row>
            </DefaultLayout>
        </div>
    )
}
