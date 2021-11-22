import React from 'react'
import { Menu, Dropdown, Space, Row , Col, Divider} from 'antd';
import {Link} from 'react-router-dom'

export const DefaultLayout = (props) => {

    //JSON parser
    const user = JSON.parse(localStorage.getItem('user')) //It gets the current logged username in 
    //Dropdown Menu
    const menu = (
        <Menu>
            <Menu.Item>
            <a href="/">
              Home
            </a>
          </Menu.Item>
          <Menu.Item>
            <a href="/userbookings">
              Bookings
            </a>
          </Menu.Item>
          <Menu.Item>
            <a href="/admin">
              Admin
            </a>
          </Menu.Item>
          <Menu.Item onClick={() => {
            localStorage.removeItem('user')     //logs out user
            window.location.href="/login"            //redirect logged user out to Login page 
            }}>
            <li>
              Logout
            </li>
          </Menu.Item>
        </Menu>
    );

    return (
        <div>
            <div className="header box-shadow-1">
                <Row gutter={16} justify="center">
                  <Col lg={20} sm={24} xs={24}>
                  <div className="d-flex justify-content-between">
                      <h1><Link  to="/"><span>506</span> <span style={{color: "white"}}>Auto</span> <span style={{color: "red"}}>Rental</span></Link></h1>
                      <Dropdown overlay={menu} placement="bottomCenter">
                          <button className="btn-logout btn btn-dark">{user.username}</button>
                      </Dropdown>
                      
                  </div>
                  </Col>
                </Row>
            </div>
            <div className="content">
                {props.children}
            </div>
            <div className="footer mt-2">
              <hr style={{color: "transparent"}}/>
              
              <p><b>Design and Development</b></p>



              
              <Divider type="horizontal dashed" style={{color: "darkgoldenrod"}}>Jonathan Villalobos Mora</Divider>

            </div>
        </div>
    );
}

/**It would be the static for all app */ 