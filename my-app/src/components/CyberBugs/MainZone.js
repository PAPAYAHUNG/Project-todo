import { Avatar, Popover } from 'antd'
import React, { useState } from 'react'
import HtmlParser from 'react-html-parser'
import { useSelector } from 'react-redux'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';



export default function MainZone() {
    let { lstTask, members, projectName, description } = useSelector(state => state.MainZoneReducer.content)
    console.log("lstTask", lstTask)
    console.log("members", members)
    console.log("members", projectName)

    return (
        <div>
            <h4 className='mt-4 ml-3'>
                Projects/singularity 1.0/Kanban Board
            </h4>
            <div className="d-flex justify-content-between align-items-center mt-2
                ">
                <h5 className='ml-3'>{projectName}</h5>

                <div className="d-flex">
                    <h5>Git repo</h5>
                    <i className="fab fa-github mx-4" style={{ fontSize: 40, color: 'rgb(56, 39, 39)' }} />
                </div>
            </div>
            <section className='ml-3'>{ReactHtmlParser(description)}</section>

            <div className="row mt-3">
                <div className="input-group ml-5 d-flex align-items-center" style={{ width: 260 }}>
                    <span> <i className="fa fa-search mx-3" /></span>
                    <input type="text" className="form-control" placeholder="Recipient's username" />
                </div>
                <div className="member d-flex align-items-center ml-4">
                    {members?.slice(0, 3).map((mem, index) => {
                        return <Avatar key={index}
                            src={mem.avatar} alt="gdfjs">
                        </Avatar>
                    })}
                    {members?.length > 3 ?
                        <Popover placement="top" title={<span>Title</span>} content={() => {
                            return members?.slice(4, members.length).map((item, index) => {
                                return <Avatar src={item.avatar} key={index}></Avatar>
                            })
                        }} trigger="click">
                            <Avatar>...</Avatar>
                        </Popover>
                        : ''}

                </div>
                <span>
                    <h5 className="mx-5">Only my issue</h5>
                </span>
                <span>
                    <h5>Recentl Updated</h5>
                </span>

            </div>
            <div className="mainZone-Info mt-4 mx-2 ">
                <div className="row justify-content-between">
                    {lstTask?.map((mem, index) => {
                        return <div key={index} className="col-3">
                            <div className="card cyberbug-card bg-dark ">
                                <div className="card-header">
                                    {mem.statusName}
                                </div>
                                {lstTask.lstTaskDeTail?.map((item, index) => {
                                    return <div key={index} className="card-body bg-light my-2 mx-2">
                                        <p className="card-text">Click on an issue to see what's behind it</p>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="icon-card d-flex">
                                                <i className="fa fa-check text-success" />
                                                <i className="fa fa-arrow-up text-danger ml-3" />
                                            </div>
                                            <img src="https://i1-vnexpress.vnecdn.net/2022/03/25/tau-67-dau-bo-1634-1648148457-4782-6350-1648209533.jpg?w=680&h=408&q=100&dpr=1&fit=crop&s=KKTDfCwUO4zHvwKhxHNZCQ" alt="gdfjs" />
                                        </div>
                                    </div>
                                })}
                            </div>
                        </div>
                    })}

                    <div className="col-3">
                        <div className="card cyberbug-card bg-dark ">
                            <div className="card-header">
                                BACKLOG 2
                            </div>
                            <div className="card-body bg-light my-2 mx-2">
                                <p className="card-text">Click on an issue to see what's behind it</p>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="icon-card d-flex">
                                        <i className="fa fa-check" />
                                        <i className="fa fa-arrow-up" />
                                    </div>
                                    <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#modelId">
                                        Launch
                                    </button>
                                    <img src="https://i1-vnexpress.vnecdn.net/2022/03/25/tau-67-dau-bo-1634-1648148457-4782-6350-1648209533.jpg?w=680&h=408&q=100&dpr=1&fit=crop&s=KKTDfCwUO4zHvwKhxHNZCQ" alt="gdfjs" />
                                </div>
                            </div>
                            <div className="card-body bg-light my-2 mx-2">
                                <p className="card-text">Click on an issue to see what's behind it</p>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="icon-card d-flex">
                                        <i className="fa fa-check" />
                                        <i className="fa fa-arrow-up" />
                                    </div>
                                    <img src="https://i1-vnexpress.vnecdn.net/2022/03/25/tau-67-dau-bo-1634-1648148457-4782-6350-1648209533.jpg?w=680&h=408&q=100&dpr=1&fit=crop&s=KKTDfCwUO4zHvwKhxHNZCQ" alt="gdfjs" />
                                </div>
                            </div>
                            <div className="card-body bg-light my-2 mx-2">
                                <p className="card-text">Click on an issue to see what's behind it</p>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="icon-card d-flex">
                                        <i className="fa fa-check" />
                                        <i className="fa fa-arrow-up" />
                                    </div>
                                    <img src="https://i1-vnexpress.vnecdn.net/2022/03/25/tau-67-dau-bo-1634-1648148457-4782-6350-1648209533.jpg?w=680&h=408&q=100&dpr=1&fit=crop&s=KKTDfCwUO4zHvwKhxHNZCQ" alt="gdfjs" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    )
}
