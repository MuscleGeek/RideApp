import React, {useState, useEffect} from 'react'
import { DefaultLayout } from '../components/DefaultLayout'
import {Row, Col, Form, Input, Divider}from 'antd'
import {useDispatch, useSelector} from 'react-redux'

//Loading effect
import { Spinner } from '../components/Spinner'

//GET_ALL_CARS
import { editCar, getAllCars } from '../redux/actions/carsActions'


export const EditCar = ({match}) => {

    
    const dispatch = useDispatch()

    const {loading} =  useSelector((state) => state.alertsReducer)

    const {cars} = useSelector((state) => state.carsReducer) //invoke GET_ALL_CARS
    const [car , setCar] = useState()  //Gen a new state from GET_ALL_CARS
    

    const [totalCars, setTotalCars] = useState([])

    //GET_ALL_CARS RENDER
    useEffect(() => {
        
        if (cars.length == 0) {
            dispatch(getAllCars())
        }else {
            setTotalCars(cars)
            setCar(cars.find((o) => o._id == match.params.carid)) //if id matches then it will trigger a rendering for car update operation
            console.log(car)
        }
    },[cars])

    const onFinish = (values) => {

        values._id = car._id

        dispatch(editCar(values))
        console.log(values)
    }
    return (
        <DefaultLayout>
            {loading && (<Spinner/>)} {/**loading true USE spinner effect */}

            <Row justify="center mt-5">
                <Col lg={12} sm={24} xs={24} className="p-2">
                    {totalCars.length > 0 && (<Form initialValues={car} style={{borderRadius:"12px"}} className="box-shadow-1 p-2" layout="vertical" onFinish={onFinish}> {/**layout="vertical fits all elements vertiocally(responsiveness be like...) when the app is displayed any different mobile device" */}
                        <Divider type="horizontal dashed">EDIT CAR</Divider>
                        {/**{car.name}
                        {cars.length}    testing data output */}

                        <Form.Item name="name" label="Car Name" rules={[{required:true}]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item name="image" label="Image URL" rules={[{required:true}]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item name="rentPerHour" label="Rent per Hour" rules={[{required:true}]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item name="capacity" label="Passengers" rules={[{required:true}]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item name="fuel"label="Fuel" rules={[{required:true}]}>
                            <Input/>
                        </Form.Item>
                        <div style={{textAlign: "right"}}>
                        <button className="btn btn-success">Update</button>
                        </div>
                    </Form>
                    )}
                </Col>
            </Row>
        </DefaultLayout>
    )
}
