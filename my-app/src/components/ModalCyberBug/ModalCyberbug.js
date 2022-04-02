import { Editor } from '@tinymce/tinymce-react';
import { Select, Radio, Slider } from 'antd';
import {  withFormik } from 'formik';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GET_ALL_PROJECT_FOR_MODAL_SAGA, GET_ALL_TASK_PRIORITY_SAGA, GET_ALL_TASK_TYPE_SAGA, GET_ALL_USER_MODAL_SAGA, SEARCH_AUTO_COMPLETE_SAGA } from '../../redux/constants/Cyberbugs/Cyberbugs';
import { connect } from 'react-redux';
// const { Option } = Select;
function ModalCyberbug(props) {
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch({
            type: GET_ALL_PROJECT_FOR_MODAL_SAGA,
        })
        dispatch({
            type: GET_ALL_TASK_TYPE_SAGA,
        })
        dispatch({
            type: GET_ALL_TASK_PRIORITY_SAGA,
        })
        dispatch({
            type: GET_ALL_USER_MODAL_SAGA,
        })

    }, [])



    let { arrProjectForModal } = useSelector(state => state.ProjectCyberbugCategoryReducer)
    // console.log(arrProjectForModal)
    let { listType } = useSelector(state => state.TaskTypeReducer)
    // console.log(listType)
    let { listPriority } = useSelector(state => state.TaskTypeReducer)
    // console.log(listPriority)
    let { listMembers } = useSelector(state => state.TaskTypeReducer)
    // console.log(listMembers)
    let { listSearch } = useSelector(state => state.SearchUserAutoCompleteReducer)
    // console.log(listSearch)
    let listSearchModified = listSearch.map((item, index) => {
        return { label: item.name, value: item.userId }
    })


    const [timeTracking, setTimeTracking] = useState({
        timeTrackingSpent: 1,
        timeTrackingRemaining: 5
    })


    const children = [];
    // for (let i = 10; i < 36; i++) {
    //     children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    // }
    // for (let i = 0; i < listSearch?.length; i++) {
    //     children.push(<Option key={listSearch[i].userId}>{listMembers[i].name}</Option>);
    // }

    // function handleChange(value) {
    //     console.log(`Selected: ${value}`);
    // }


    const [size, setSize] = useState('default');

    const handleSizeChange = e => {
        setSize(e.target.value);
    };

    //Editor tiny
    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };

    //With Forkmik
    const {values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        
      } = props;
    return (
        <form className="modal-cyberbug" onSubmit={handleSubmit}>
            <div className="modal  fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog modal-sm" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">HELLLOO</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body modal-cyberbug">
                            <div className="row justify-content-between">


                                <div className="form-group">
                                    <h5><i className="fa fa-check-square" />
                                        Task
                                    </h5>
                                    <select className="form-control" name="projectId" 
                                     onChange={handleChange}
                                     onBlur={handleBlur}
                                    //  value={values.name}
                                     >
                                        {arrProjectForModal?.map((item, index) => {
                                            return <option value={item.id} key={index}>
                                                {item.projectName}
                                            </option>
                                        })}

                                    </select>
                                </div>


                                <div className="right-header">
                                    <span className="mx-3 ">
                                        <i className="fa fa-paper-plane " />
                                        Give feedback
                                    </span>
                                    <span>
                                        <i className="fa fa-link" />
                                        Copy link
                                    </span>
                                    <span className="mx-3">
                                        <i className="fa fa-trash-alt " />
                                    </span>
                                    <button type="button" className="btn mr-3 btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-7">
                                    <h3>Click on an issue to see what behind it</h3>
                                    Desctiption
                                    <>
                                        <Editor
                                            onInit={(evt, editor) => editorRef.current = editor}
                                            initialValue="<p>This is the initial content of the editor.</p>"
                                            name='description'
                                            init={{
                                                height: 500,
                                                menubar: false,
                                                plugins: [
                                                    'a11ychecker', 'advlist', 'advcode', 'advtable', 'autolink', 'checklist', 'export',
                                                    'lists', 'link', 'image', 'charmap', 'preview', 'anchor', 'searchreplace', 'visualblocks',
                                                    'powerpaste', 'fullscreen', 'formatpainter', 'insertdatetime', 'media', 'table', 'help', 'wordcount'
                                                ],
                                                toolbar: 'undo redo | casechange styleselect | bold italic backcolor | ' +
                                                    'alignleft aligncenter alignright alignjustify | ' +
                                                    'bullist numlist checklist outdent indent | removeformat | a11ycheck code table help',
                                                 content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                            }}
                                        />
                                        <button onClick={log}>Log editor content</button>
                                    </>

                                </div>
                                <div className="col-5">
                                    <div className="rightModal">
                                        {/* <h5>STATUS</h5>
                                        <select  >
                                            <option value>BACKLOG</option>
                                            <option disabled value>Selected for development</option>
                                            <option className="btn btn-primary text-left" value>IN PROGRESS</option>
                                            <option className="btn btn-success text-left" value>DONE</option>
                                        </select> */}
                                        <div className='row'>
                                            <div className='col-6'>
                                                <h5>Type</h5>
                                                <select className='form-group'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.name}
                                                name="typeId" >
                                                    {listType.map((item, index) => {
                                                        return <option key={index} value={item.id}>
                                                            {item.taskType}
                                                        </option>
                                                    })}
                                                </select>
                                            </div>
                                            <div className='col-6'>
                                                <h5>Priority</h5>
                                                <select name='priorityId'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.name} >
                                                    {listPriority.map((item, index) => {
                                                        return <option key={index} value={item.priorityId}>
                                                            {item.description}
                                                        </option>
                                                    })}
                                                </select>
                                            </div>
                                        </div>

                                        <div className="assignees mt-4">
                                            <h5>ASSINEES</h5>
                                            <Select
                                                mode="multiple"
                                                options={listSearchModified}
                                                size={size}
                                                placeholder="Please Select"
                                                // defaultValue={['a10', 'c12']}
                                                optionFilterProp='label'
                                                onChange={handleChange}
                                                onSearch={(value) => {
                                                    console.log(value)
                                                    dispatch({
                                                        type: SEARCH_AUTO_COMPLETE_SAGA,
                                                        value
                                                    })
                                                }}
                                                onSelect={(value) => {
                                                    console.log(value)
                                                }}
                                                style={{ width: '100%' }}
                                            >
                                                {children}
                                            </Select>




                                            {/* <div className="row">
                                                <div className="col-6">
                                                    <div className="member  bg-light d-flex align-items-center">
                                                        <img className="mr-3" src="https://i1-kinhdoanh.vnecdn.net/2022/03/25/andrea-godfrey-kpmg-png-164819-1132-4182-1648195332.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=VFUYTdyLCqnB7f7EdO6NSA" alt="fdsdf" />
                                                        <p> Hellen york</p>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="member   d-flex align-items-center">
                                                        <i className="fa fa-plus" />
                                                        <p> Add more</p>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>
                                        {/* <div className="dropdown open mt-3">
                                            <button className="btn btn-secondary dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="fa fa-long-arrow-alt-down text-success" /> LOW
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="triggerId">
                                                <button className="dropdown-item" href="#"><i className="fa fa-arrow-up text-danger" /> HIGHEST</button>
                                                <button className="dropdown-item " href="#"><i className="fa fa-arrow-up text-warning" /> HIGH</button>
                                                <button className="dropdown-item " href="#"><i className="fa fa-long-arrow-alt-down text-success" /> LOWEST</button>
                                            </div>
                                        </div> */}

                                        <div className='mt-4'>
                                            <h5>ORIGINAL ESTIMATE (HOURS)</h5>
                                            <input type="number" min={0} defaultValue='0' className='form-control' name='originalEstimate' />

                                        </div>

                                        <div>
                                            <div className="form-group">
                                                <p >TRACKING TIME</p>
                                                <Slider defaultValue={0} max={Number(timeTracking.timeTrackingSpent) + Number(timeTracking.timeTrackingRemaining)} value={timeTracking.timeTrackingSpent} tooltipVisible />
                                                <div className='row justify-content-between'>
                                                    <span className='text-primary'>{timeTracking.timeTrackingSpent} logged</span>
                                                    <span className='text-primary'>{timeTracking.timeTrackingRemaining} remaining</span>
                                                </div>
                                                <div className='row'>
                                                    <div className='col-6'>
                                                        <p>Time spent</p>
                                                        <input onChange={(e) => {
                                                            handleChange()
                                                            setTimeTracking({
                                                                ...timeTracking,
                                                                timeTrackingSpent: e.target.value
                                                            })
                                                        }} type="number" value={values.name} min={0} defaultValue='0' className='form-control' name='timeTrackingSpent' />
                                                    </div>
                                                    <div className='col-6'>
                                                        <p>Time remaining</p>
                                                        <input onChange={(e) => {
                                                            console.log(e.target.value)
                                                            setTimeTracking({
                                                                ...timeTracking,
                                                                timeTrackingRemaining: e.target.value
                                                            })
                                                        }} type="number" max={50} defaultValue='0' className='form-control' name='timeTrackingRemaining' />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <hr style={{ border: 'solid gray 1px' }} />
                                        <div className="timeZone">
                                            <p>Create 2 days ago</p>
                                            <p>Updated 2 days ago</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button onSubmit={handleSubmit} type="submit" className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>

    )
}

const FormCreateTASK = withFormik({
    mapPropsToValues: () =>{
        return {
            taskName:'',
            description:0,
            originalEstimate:0,
            timeTrackingSpent:0,
            timeTrackingRemaining:0,
            typeId:0,
            priorityId:0,
            projectId:0,

        }
    } ,
  
    // Custom sync validation
    // validate: values => {
    //   const errors = {};
  
    //   if (!values.name) {
    //     errors.name = 'Required';
    //   }
  
    //   return errors;
    // },
  
    handleSubmit: (values, { setSubmitting }) => {
       console.log(values)
    },
  
    displayName: 'BasicForm',
  })(ModalCyberbug);

//   const mapStatetoProps = (state)=>{
//     return {
//       arrProjectCategory:state.ProjectCyberbugCategoryReducer.arrProjectCategory
//     }
//   }
  export default  FormCreateTASK