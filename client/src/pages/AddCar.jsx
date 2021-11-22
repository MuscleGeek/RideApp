import React from 'react'
import { DefaultLayout } from '../components/DefaultLayout'
import {Row, Col, Form, Input, Divider}from 'antd'
import {useDispatch, useSelector} from 'react-redux'
import { addCar } from '../redux/actions/carsActions'
//Loading effect
import { Spinner } from '../components/Spinner'

export const AddCar = () => {

    const dispatch = useDispatch()

    const {loading} =  useSelector(state => state.alertsReducer)

    const onFinish = (values) => {

        values.bookedTimeSlots=[] //saves retrieved objects from form

        dispatch(addCar(values))
        console.log(values)
    }
    return (
        <DefaultLayout>
            {loading && (<Spinner/>)} {/**loading true USE spinner effect */}

            <Row justify="center mt-5">
                <Col lg={12} sm={24} xs={24} className="p-2" >
                    <Form style={{borderRadius:"12px"}} className="box-shadow-1 p-2" layout="vertical" onFinish={onFinish}> {/**layout="vertical fits all elements vertiocally(responsiveness be like...) when the app is displayed any different mobile device" */}
                        <Divider type="horizontal dashed">ADD CAR</Divider>
                        
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
                        <button className="btn btn-success">Add Car</button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </DefaultLayout>
    )
}
