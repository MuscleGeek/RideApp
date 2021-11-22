import React from 'react'

import {Spin} from 'antd'  //spin animation while loading data

export const Spinner = () => {  //Loading spinner effect
    return (
        <div className="spinner">
            <Spin size="large"/>
        </div>
    )
}
