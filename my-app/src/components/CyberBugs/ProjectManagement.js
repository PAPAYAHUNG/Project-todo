import React, { useRef } from 'react'
import { Button, Space, Table, Avatar, Popover, AutoComplete } from 'antd';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { ASSIGN_MEMBER_SAGA, CHANGE_MAIN_ZONE_SAGA, DELETE_PROJECT_SAGA, FECTH_PROJECT_MANAGEMENT, SEARCH_AUTO_COMPLETE_SAGA } from '../../redux/constants/Cyberbugs/Cyberbugs';
import FormEditProject from '../Forms/FormEditProject';
import { Popconfirm, message } from 'antd';
import { NavLink, useParams } from 'react-router-dom';
import { replace } from 'formik';




const cancel = (e) => {
    console.log(e);
    message.error('Click on No');
}
const confirm = (e) => {
    console.log(e);
    message.success('Delete succeed');
}

export default function ProjectManagement() {
    let listSearch = useSelector(state => state.SearchUserAutoCompleteReducer.listSearch)
    // console.log(listSearch)
    const [value, setValue] = useState('');

    let params = useParams()
    const searchRef = useRef(null)
    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            sorter: (a, b) => a.id - b.id,
        },
        {
            title: 'Project name',
            dataIndex: 'projectName',
            render: (text, record, index) => {
                return <NavLink
                    onClick={()=>{
                        dispatch({
                            type:CHANGE_MAIN_ZONE_SAGA,
                            idTosend:record.id
                        })
                    } }
                    to={`main${record.id}`} >

                    {record.projectName}
                </NavLink>
            },
            sorter: (a, b) => {
                let projectA = a.projectName?.trim().toLowerCase()
                let projectB = b.projectName?.trim().toLowerCase()
                if (projectA < projectB) {
                    return -1
                }
                return 1
            }
        },
        // {
        //     title: 'Description',
        //     dataIndex: 'description',
        //     render: (text, record, index) => {
        //         let jsxHtml = ReactHtmlParser(text)
        //         return <div key={index}>
        //             {jsxHtml}
        //         </div>
        //     }
        // },
        {
            title: 'Creator',
            dataIndex: 'creator',
            render: (text, record, index) => {
                //   console.log('record',record)
                //   console.log('text',text)
                return <div className='text-priamry' key={index}>
                    {record.creator.name}
                </div>
            }
        },
        {
            title: 'Members',
            dataIndex: 'members',
            render: (text, record, index) => {
                // console.log("record", record)
                // console.log("recordId",record.id)



                return <div>
                    {record.members?.slice(0, 3).map((member, index) => {
                        return <Popover key={index} placement='top' title={<span>Members</span>} content={() => {
                            return <table class="table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Avatar</th>
                                        <th>Name</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {record.members?.map((member, index) => {
                                        return <tr key={index}>
                                            <td>{member.userId}</td>
                                            <td><img src={member.avatar} alt="1dasfs" /></td>
                                            <td>{member.name}</td>
                                            <td><button className='btn btn-danger'>X</button></td>
                                        </tr>
                                    })}
                                </tbody>
                            </table>
                        }}>
                            <Avatar key={index} src={member.avatar} />
                        </Popover>
                    })
                    }
                    {record.members?.length > 2 ? <Avatar>...</Avatar> : ""}
                    <Popover placement="rightTop" title={<span>Members</span>} content={() => {
                        return <AutoComplete
                            onSearch={(value) => {
                                console.log(value)
                                if (searchRef.current) {
                                    clearTimeout(searchRef.current)
                                }
                                searchRef.current = setTimeout(() => {
                                    dispatch({
                                        type: SEARCH_AUTO_COMPLETE_SAGA,
                                        value
                                    })

                                }, 300)

                            }}
                            onSelect={(valueSelect, option) => {
                                //set gia tri cua hop thoai = option.label
                                setValue(option.label)
                                console.log('option', option)
                                //dispatch action value duoc chon len server
                                dispatch({
                                    type: ASSIGN_MEMBER_SAGA,
                                    UserProject: {
                                        projectId: record.id,
                                        userId: Number(valueSelect)
                                    }
                                })
                            }}

                            options={listSearch?.map((item, index) => {
                                return { label: item.name, value: item.userId.toString() }
                            })}
                            value={value}

                            onChange={(data) => {
                                setValue(data)
                            }}
                            placeholder="control mode"
                            style={{
                                width: 200,
                            }}
                        />
                    }} trigger="click">
                        <button style={{ borderRadius: '50%' }} className='btn btn-primary'>+</button>
                    </Popover>


                </div>


            }
        },
        {
            title: 'Action',
            key: 'action',

            render: (text, record, index) => (
                <div size="middle" className='d-flex'>

                    <Popconfirm
                        title="Are you sure to delete this project?"
                        onConfirm={() => {
                            confirm()
                            dispatch({
                                type: DELETE_PROJECT_SAGA,
                                id: record.id
                            })
                        }}
                        onCancel={cancel}
                        okText="Yes"
                        cancelText="No"
                    >
                        <button onClick={() => {

                        }} className='btn btn-danger mx-3'><i class="fa fa-trash-alt"></i>
                        </button>
                    </Popconfirm>,


                    <button onClick={() => {
                        let action = {
                            type: 'OPEN_EDIT_DRAWER',
                            Component: <FormEditProject />
                        }
                        dispatch(action)
                        //dispatch thong tin dong hien tai len reducer de renderlai
                        let actionEditProject = {
                            type: 'EDIT_PROJECT_INFO',
                            record
                        }
                        dispatch(actionEditProject)
                    }} className='btn btn-success'><i class="fa fa-edit"></i></button>

                </div>
            ),
        },

    ];







    let { dataProject } = useSelector(state => state.ProjectMangamentReducer)

    // let [state,useState]= useState({
    //      visible: false 
    // })

    let dispatch = useDispatch()
    useEffect(() => {
        dispatch({
            type: FECTH_PROJECT_MANAGEMENT
        })
    }, [])

    // console.log(dataProject)
    const onChange = (pagination, filters, sorter, extra) => {
        // console.log('params', pagination, filters, sorter, extra);
    }

    return (
        <div className='container'>
            <Table rowKey={"id"} columns={columns} dataSource={dataProject} onChange={onChange} />
        </div>

    )
}






