import React, { useRef, useEffect } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux'
import { withFormik } from 'formik';

import * as Yup from 'yup';
import { ADD_PROJECT, GET_CATEGORY } from '../../../redux/constants/Cyberbugs/Cyberbugs';
function Createproject(props) {
  let dispatch = useDispatch()

  useEffect(() => {
    dispatch({
      type: GET_CATEGORY
    })
  }, []) 

  // console.log(props)
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
  } = props;

  let { arrProjectCategory } = useSelector(state => state.ProjectCyberbugCategoryReducer)
  // console.log(arrProjectCategory)


  const editorRef = useRef(null);
  const log = () => {

    if (editorRef.current) {
      setFieldValue('description',editorRef.current.getContent())
      console.log(editorRef.current.getContent());
    }
  };

  // log()
  return (
    <div className='d-flex align-items-center'>
      <form onSubmit={handleSubmit} className="container  pt-4 mt-5 ">
        <h3>Projects / singularity 1.0 / Project Details</h3>
        <h2>Project detail</h2>
        <div className="form-group mt-4 ">
          <p>Name</p>
          <input
            type="text" className="form-control bg-light"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            name="projectName"
            placeholder="Singularity" />
        </div>

        <div>
          <p>Description</p>
          <>
            <Editor
              onInit={(evt, editor) => editorRef.current = editor}
              name="description"
             
              initialValue="<p>This is the initial content of the editor.</p>"
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
          <p>Describe the project in as much detail as you'd like.</p>
        </div>



        <div className="form-group mt-4 pb-3">
          <label >Project Category</label>
          <select
            name="categoryId"
            className="form-control bg-light"
            onChange={handleChange}
          >
            <option disabled>Search</option>
            {arrProjectCategory.map((item, index) => {
              return <option
                value={item.id}
                key={index}  >
                {item.projectCategoryName}
              </option>
            })}

          </select>
        </div>
        <button type='submit'  onClick={log} className='btn btn-primary'>Submit</button>

      </form>

    </div>
  )
}

const CreateprojectForm = withFormik({

  enableReinitialize:true,
  mapPropsToValues: (props) => {
    console.log(props)
    return {
      projectName: '',
      description: '',
      categoryId: props.arrProjectCategory[0]?.id
  
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
    console.log(values)
    props.dispatch({
        type:ADD_PROJECT,
        data:values
    })
  },

  displayName: 'CreateProject',
})(Createproject);

const mapStatetoProps = (state)=>{
  return {
    arrProjectCategory:state.ProjectCyberbugCategoryReducer.arrProjectCategory
  }
}
export default connect(mapStatetoProps)(CreateprojectForm)
