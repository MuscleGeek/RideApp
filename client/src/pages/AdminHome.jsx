import React, { useEffect, useState } from "react";
import { DefaultLayout } from "../components/DefaultLayout";
import { useDispatch, useSelector } from "react-redux";
import { getAllCars , deleteCar } from "../redux/actions/carsActions.jsx";
import {Link} from 'react-router-dom'

//LIBRARY FOR ADMIN HOME
import {DeleteOutlined, EditOutlined} from '@ant-design/icons'

//Components
import { Spinner } from "../components/Spinner.jsx";

//DATE FORMAT
import moment from 'moment'
//Ant Design
import { Row, Col, DatePicker, Edit, Popconfirm, message, Divider} from "antd";  //Edit will be for Edit popup Modal
const {RangePicker} =  DatePicker;


export const AdminHome = () => {
  const { cars } = useSelector(state => state.carsReducer);
  //object created after having coded carsActions and alertsReducer switch and axios statements
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
 
  return (
    <DefaultLayout>

      <Row justify="center" gutter={16} className="mt-2">
        <Col lg={20} sm={24} className="mt-2">
            <div className="d-flex justify-content-between align-items-center">
                <h3 className="mt-1 p-3">Admin Panel</h3>
                <button className="btn btn-light" style={{borderColor: "green"}}>
                    <a href="/addcar" style={{color: "green"}} target="_blank">ADD CAR</a>
                </button>
            </div>
        </Col>
      </Row>
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
                    <p>{car.rentPerHour} Rent Per Hour /-</p>
                  </div>
                  <div className="mr-4">
                    {/**CRUD icons from Ant Design API Icons // for css custom stylize'em => .anticon*/} {/**REDIRECTS TO EDIT CAR PAGE!! */}
                    <Link to={`/editcar/${car._id}`}><EditOutlined  style={{color: "green", marginRight: "10px", cursor: "pointer"}}/></Link>
                    <Popconfirm
                    title="Are you sure you want to delete this car?"
                    onConfirm={() => {dispatch(deleteCar({carid : car._id}))}}
                    okText="Yes"
                    cancelText="No"
                    >
                     <DeleteOutlined style={{color:"orangered", cursor: "pointer"}}/>
                    </Popconfirm>
                  </div>
                </div>
              </div>
            </Col>
        })}
      </Row>
    </DefaultLayout>
  );
};
