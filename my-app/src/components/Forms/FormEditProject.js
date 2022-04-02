import { Editor } from '@tinymce/tinymce-react'
import { Col, DatePicker, Form, Input, Row, Select } from 'antd'
import { Option } from 'antd/lib/mentions'
import { withFormik } from 'formik'
import React, { useEffect, useRef } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { GET_CATEGORY, SEND_UPDATE_SAGA } from '../../redux/constants/Cyberbugs/Cyberbugs'

function FormEditProject(props) {
    let dispatch = useDispatch()

    let { arrProjectCategory } = useSelector(state => state.ProjectCyberbugCategoryReducer)
    

    const editorRef = useRef(null);
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
    } = props;

    const log = () => {

        if (editorRef.current) {
            setFieldValue('description', editorRef.current.getContent())
            console.log(editorRef.current.getContent());
        }
    };
  

        // if (editorRef.current) {
        //     setFieldValue('description124', editorRef.current.getContent())
        //     console.log(editorRef.current.getContent());
        // }
 
    const combineFunction = ()=>{
        handleSubmit()
        log()
    }
    
    const submitForm = (e) => {
        e.preventDefault()
        setFieldValue('description', editorRef.current.getContent())

        alert('Already edit')
    }

    useEffect(() => {
        //goi api load list category
        dispatch({
            type: GET_CATEGORY
        })
        //Load su kien submit len drawer nut submit
        dispatch({
            type: 'SET_SUBMIT_EDIT_PROJECT',
            submitFunction: combineFunction
        })
    }, [])
    return (
        <div>
            <form onSubmit={submitForm} >
                <div className='row'>
                    <div className="form-group col-4">
                        <p>Project ID</p>
                        <input name='id'
                         type="text" 
                         onChange={handleChange}
                        className="form-control" 
                        value={values.id} />
                    </div>
                    <div className="form-group col-4">
                        <p>Project Name</p>
                        <input name='projectName' type="text" className="form-control"
                         value={values.projectName}
                         onChange={handleChange}
                          />
                    </div>
                    <div className="form-group col-4">
                        <p>Project Category</p>
                        <select name="categoryId"  onChange={handleChange}  className="form-control">
                            {arrProjectCategory?.map((item, index) => {
                                // console.log(item)
                                return <option
                                    value={item.id}
                                    key={index}>
                                        {item.projectCategoryName}
                                </option>
                            })}
                        </select>
                    </div>
                </div>


                <>
                    <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        name="description124"
                        // value={values.description}
                        initialValue={values.description}
                        init={{
                            height: 500,
                            menubar: false,
                            plugins: [
                                'advlist autolink lists link image charmap print preview anchor',
                                'searchreplace visualblocks code fullscreen',
                                'insertdatetime media table paste code help wordcount'
                            ],
                            toolbar: 'undo redo | formatselect | ' +
                                'bold italic backcolor | alignleft aligncenter ' +
                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                'removeformat | help',
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                        }}
                    />
                    <button type='button' onClick={log}>Log editor content</button>
                </>
            </form>
        </div>
    )
}

const UpdateProject = withFormik({

    enableReinitialize: true,
    mapPropsToValues: (props) => {
        console.log(props)
        let { info } = props
        console.log(info)
        return {
            id: info.id,
            projectName: info?.projectName,
            description: info?.description,
            categoryId: info[0]?.id

        }
    },

    // Custom sync validation

    // validationSchema: Yup.object().shape({
    //   password: Yup.string()
    //     .min(2, 'Too Short!')
    //     .max(8, 'Too Long!')
    //     .required('Required nhap vao di ba'),
    //   email: Yup.string().email('Invalid email').required('Required'),
    // }),

    handleSubmit: (values, { props, setSubmitting }) => {
        // console.log(props)
        console.log("values",values.id)
        //Khi nguoi dung bam submit thi dua du lieu ve api
        props.dispatch({
            type:SEND_UPDATE_SAGA,
           values
        })
    },

    displayName: 'CreateProject',
})(FormEditProject);

const mapStatetoProps = (state) => {
    return {
        info: state.ProjectOverallReeducer.info
    }
}
export default connect(mapStatetoProps)(UpdateProject)
