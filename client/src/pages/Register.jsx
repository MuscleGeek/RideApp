import React from 'react'

//Router
import {Link} from 'react-router-dom'
//Ant Desing Library
import {Row, Col, Form, Input} from 'antd';

//devuelve una función que podremos emplear para enviar acciones a la store de Redux.
import {useDispatch, useSelector} from 'react-redux'

//call user Register action
import { userRegister } from '../redux/actions/userActions.jsx';

//Col1 Background 
import bgLogin1 from "../assets/bgLogin1.jpg"

//AOS Animation On Scroll
import AOS from 'aos';
import 'aos/dist/aos.css';  //<link> for could be an alternative too

//Loading spinner animation
import {Spinner} from '../components/Spinner';
//..AOS Initializing
AOS.init();

export const Register = () => {

    //returns a function we could employ to send "actions" to store @redux
    const dispatch = useDispatch()

    //Spinner loading animation alert. Invoke loading while AOS initializes
    const {loading} = useSelector(state => state.alertsReducer);

    //Retrieves value data from form inputs when data is sent
    const onFinish = (values) => {
        dispatch(userRegister(values))
        console.log(values)
    }
    return (
        <div className="login">   
            {loading && (<Spinner />)}
            <Row gutter={16} className="d-flex align-items-center">

                <Col lg={16} style={{position: 'relative'}} className="col-logo">
                    <img  src={bgLogin1} alt="car login" className="bg-img" data-aos="slide-left"/>   
                    <h1 className="login-logo logo-font">RideApp Auto Rental</h1>
                </Col>
                <Col lg={8} className="text-left p-5">                    {/* Begin Form Area*/}
                    <Form layout='vertical'  className="login-form p-5" onFinish={onFinish}>
                        <h1>Register</h1>
                        <hr/>
                        <Form.Item name="username" label="Username" rules={[{required:true}]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item name="password" label="Password" rules={[{required:true}]}>
                            <Input type="password"/>
                        </Form.Item>
                        <Form.Item name="cpassword" label="Confirm Password" rules={[{required:true}]}>
                            <Input type="password"/>
                        </Form.Item>

                        <button className="btn-login-register btn btn-warning mt-4 mb-3">Register</button>
                        <hr/>
                        
                        <Link to="/login" style={{color:"greenyellow"}}>Click here to Login</Link>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

/*
NOTES: AOS
Small library to animate elements on your page as you scroll
data-aos="slide-left" :: Invoke Animation on Scroll (slide-left animation) on car image
data-aos-duration="1500" :: slide-left animation ~ 1.5 seconds
*/