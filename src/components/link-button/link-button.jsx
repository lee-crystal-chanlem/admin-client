/*
用户登陆的路由组件
*/
import { Button } from 'antd'
import React, { Component } from 'react'
import './index.less'

export default function LinkButton (props) {
        return (
            <button {...props} className='link-button'></button>
        )
}