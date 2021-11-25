import React from 'react'

//Router
import {Link} from 'react-router-dom'
//Ant Design Library
import {Row, Col, Form, Input} from 'antd';

//devuelve una función que podremos emplear para enviar acciones a la store de Redux.
import {useDispatch, useSelector} from 'react-redux'

//Login action
import { userLogin } from '../redux/actions/userActions.jsx';

//Col1 Background 
import bgLogin1 from "../assets/bgLogin1.jpg"

//AOS Animation on Scroll
import AOS from 'aos';
import 'aos/dist/aos.css';  // <link> for styles could be an alternative too

//Loading spinner animation
import {Spinner} from "../components/Spinner"
//AOS Initializing
AOS.init()

export const Login = () => {

    //return a function we could employ to perform "actions" to store @ Redux.
    const dispatch = useDispatch();

    //Spinner loading animation alert. it Invoke loading animation while AOS initializes
    const {loading} = useSelector(state => state.alertsReducer) 

    //it retrieves data from inputs when after button has been clicked on//
    const onFinish = (values) => {
        dispatch(userLogin(values))      //userLogin Action
        console.log(values)
    }
    return (
        <div className="login">   
            {loading && (<Spinner />)}

            <Row gutter={16} className='d-flex align-items-center'>

                <Col lg={16} style={{position: 'relative'}} className="col-logo">
                    <img  src={bgLogin1} alt="car login" className="bg-img" data-aos="slide-right"/>
                    <h1 className="login-logo logo-font">RideApp Auto Rental</h1>
                </Col>
                <Col lg={8} className="text-left p-5">                    {/* Begin Form Area*/}
                    <Form layout='vertical' className="login-form p-5" onFinish={onFinish}>
                        <h1>Login</h1>
                        <hr/>
                        <Form.Item name="username" label="Username" rules={[{required:true}]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item name="password" label="Password" rules={[{required:true}]}>
                            <Input type="password"/>
                        </Form.Item>

                        <button className="btn-login-register mt-5 btn btn-warning">Login</button>
                        <hr/>

                        <Link to="/register" style={{color:"greenyellow"}}>Register Now!</Link>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}
/*
NOTES: AOS
Small library to animate elements on your page as you scroll
data-aos="slide-right" :: Invoke Animation on Scroll (slide-left animation) on car image
data-aos-duration="1500" :: slide-right animation ~ 1.5 seconds
*/