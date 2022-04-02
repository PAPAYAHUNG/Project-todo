import React from 'react'
import { withFormik,Formik,Field,Form } from 'formik';
import * as Yup from 'yup';
import {connect} from 'react-redux'
import { REDIRECT_SAGA, SIGNIN_API } from '../../../redux/constants/Cyberbugs/Cyberbugs';
import { signinApiAction } from '../../../redux/actions/CyberBugAction';
import { Navigate, useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
function LoginCyberBug(props) {
    // let navigate = useNavigate()
 let dispatch = useDispatch()
    const {
      values,
      touched,
      errors,
      handleChange,
      handleBlur,
      handleSubmit,
    } = props;
  
    

    return (
        <div> 
            {/* style={{ height: window.innerHeight }} */}
            <div >
                {/* <Button type="primary">Primary Button</Button> */}
                <div className='row ' style={{ height: window.innerHeight }}  >
                    <div className='col-6' style={{ backgroundImage:`url(https://picsum.photos/2000)`,backgroundSize:'100%' }}>
                           
                    </div>
                 
                    <div className='col-6 mt-5 '>
                        <form onSubmit={(e)=>{
                            handleSubmit(e)
                        //    dispatch({
                        //        type:REDIRECT_SAGA,
                        //        navigate
                        //    })
                        }
                      
                        } className='container text-center' >
                            <h1 className='display-4'>LOGIN</h1>
                            <div className="form-group text-left">
                                <p>Email</p>
                                <input  type="text" className="form-control"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                                name="email"
                                 />
                                   {errors.email && touched.email && <div className='text-danger'>{errors.email}</div>}
                                 {/* <span className='text text-danger'>{errors.email}</span> */}
                            </div>
                            <div className="form-group text-left">
                                <p>Password</p>
                                <input name="password" type="password" className="form-control"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                                 />
                                 {/* <span className='text text-danger'>{errors.password}</span> */}
                                 {errors.password && touched.password && <div  className='text-danger'>{errors.password}</div>}

                            </div>
                            <button  type='submit' style={{ width: 200 }} className='btn btn-success mt-4 '>Login</button>
                            <p>Join by social network</p>
                        </form>
                            <div className='d-flex justify-content-center mt-5'>
                                <i class="fab fa-facebook mr-3" style={{ fontSize: 40, color: 'blue' }}></i>
                                <i class="fab fa-google ml-3" style={{ fontSize: 40, color: 'red' }}></i>
                            </div>
                    </div>

                </div>

            </div>
        </div>
    )
    
}


const LoginCyberBugwithFormik = withFormik({
    
  
    mapPropsToValues: () => ({
        email: '',
        password: ''
    }),
    
    // Custom sync validation
  
    validationSchema: Yup.object().shape({
        password: Yup.string()
          .min(2, 'Too Short!')
          .max(8, 'Too Long!')
          .required('Required nhap vao di ba'),
        email: Yup.string().email('Invalid email').required('Required'),
      }), 
    handleChange: e=>{
        console.log(e)
    },
    handleSubmit: (values, {props, setSubmitting }) => {
       
        console.log(props)
        // console.log(values)
        
        props.dispatch(signinApiAction(values,Navigate))
    },

    displayName: 'Login CyberBug',
})(LoginCyberBug);
export default connect () (LoginCyberBugwithFormik)


