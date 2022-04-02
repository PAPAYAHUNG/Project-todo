import React from 'react'
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker, Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';
import 'antd/dist/antd.css';
import { useDispatch, useSelector } from 'react-redux';

export default function ModalEditManager() {
    const { Option } = Select;
    let {visible,ComponentDrawer,callbackSubmit} = useSelector(state=>state.DrawerModalCyberbugReducer)
    // console.log(visible)

    // let [state, setState] = useState({ visible: false })

    let dispatch = useDispatch()

    const showDrawer = () => {
        dispatch({
            type:'OPEN_DRAWER'
        })
        // setState({
        //     visible: true,
        // });
    };

    const onClose = () => {
        dispatch({
            type:'CLOSE_DRAWER'
        })
        // setState({
        //     visible: false,
        // });
    };

    return (
        <div>
            <>
                {/* <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
                    New account
                </Button> */}
                <Drawer
                    title="Create a new account"
                    width={720}
                    onClose={onClose}
                    visible={visible}
                    bodyStyle={{ paddingBottom: 80 }}
                    extra={
                        <Space>
                            <Button onClick={onClose}>Cancel</Button>
                            <Button onClick={
                                // onClose
                                callbackSubmit
                                } type="primary">
                                Submit
                            </Button>
                        </Space>
                    }
                >

                    {ComponentDrawer}
                 
                </Drawer>
            </>
        </div>
    )
}
