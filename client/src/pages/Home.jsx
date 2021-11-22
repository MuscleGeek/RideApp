import React, { useEffect, useState } from "react";
import { DefaultLayout } from "../components/DefaultLayout";
import { useDispatch, useSelector } from "react-redux";
import { getAllCars } from "../redux/actions/carsActions.jsx";
import {Link} from 'react-router-dom'


//Components
import { Spinner } from "../components/Spinner.jsx";

//DATE FORMAT
import moment from 'moment'
//Ant Design
import { Row, Col, DatePicker } from "antd";
const {RangePicker} =  DatePicker;


export const Home = () => {
  const { cars } = useSelector(state => state.carsReducer);
  //object created after having coded carsActions and alertsReducer swtich and axios statements
  const { loading } = useSelector(state => state.alertsReducer);
  //FILTER Cars
  const [totalCars, setTotalCars] = useState([])
  const dispatch = useDispatch();

  //Render all stored cars (presentation)
  useEffect(() => {
    dispatch(getAllCars()) //carsActions.getAllCars()
  }, []);

  //Every time one or several cars are booked it returns total of available cars for booking between selected dates 
  useEffect(() => {
    setTotalCars(cars)
  }, [cars])

  const setFilter = (values) => {
    //FORMAT DATE FOR RANGEPICKER
    let selectedFrom = moment(values[0].format("MMM DD yyyy HH:mm"))
    let selectedTo = moment(values[1].format("MMM DD yyyy HH:mm"))

    let temp = []

    for(let car of cars) {

      if(car.bookedTimeSlots.length === 0){ //if "from: to:" date available
        temp.push(car)
      }
      else{

        for(let booking of car.bookedTimeSlots) {
            
          if(selectedFrom.isBetween(booking.from, booking.to) ||
          selectedTo.isBetween(booking.from, booking.to) ||
          moment(booking.from).isBetween(selectedFrom, selectedTo) ||
          moment(booking.to).isBetween(selectedFrom, selectedTo))
          {

          }
          else{
            temp.push(car)
          }
        } 
      }   
    }

    setTotalCars(temp)
  } 

  return (
    <DefaultLayout>
      {/**FILTER CARS BY AVAILABILITY DATE*/}
      <Row className="mt-3" justify="center">
        <Col style={{paddingLeft: "10px !important"}} className="d-flex justify-content-left" lg={20} sm={24} sx={24}>
          
          <RangePicker style={{borderRadius: "10px"}} showTime={{format:"HH:mm"}} format="MMM DD yyyy HH:mm" onChange={setFilter}/>

        </Col>
      </Row>
      {/**END FILTER CARS SECTION */}

      {/**Spinning animation while data is loaded on page */}
      {loading === true && (<Spinner/>)}                
      
      <Row justify="center" gutter={16} className="mt-5">
        {totalCars.map(car => {                       //Displays all cars availables between RangePicker Date
                                                       //Card Cars display
          return <Col lg={5} sm={24} xs={24}>
              <div className="car p-2 box-shadow-1">
                <img
                  src={car.image}
                  className="car-img"
                  alt="Oops!, something went wrong!"
                />
                <div className="car-content d-flex align-items-center justify-content-between">
                  <div className="pl-2" style={{textAlign: "left"}}>
                    <p>{car.name}</p>
                    <p>Rent Per Hour {car.rentPerHour} </p>
                  </div>
                  <div>
                    <button className="btn btn-warning mr-2"><Link to={`/booking/${car._id}`}>Book Now!</Link></button> {/*redirect to Car Info */}
                  </div>
                </div>
              </div>
            </Col>
        })}
      </Row>
    </DefaultLayout>
  );
};
