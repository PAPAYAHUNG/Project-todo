import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { Button } from 'antd';
import {withFormik} from 'formik'

export default function Login(props) {
    let navigate = useNavigate()

    let [input, setInput] = useState({
        userName: "",
        password: "",
    })

    const handleOnchange = (event) => {
        let { name, value } = event.target
        console.log(name, value)

        setInput({
            ...input,
            [name]: value
        })
        console.log(input)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (input.userName === 'hung' && input.password === "hung") {
            //thanh cong thi chuyen ve trang truoc do
            // props.history.goback()
            // navigate('/about')
            navigate(-1);
            localStorage.setItem('userLogin', JSON.stringify(input))
        }
        else {
            alert('Not matching!')
        }
    }
    return (
        <div >
            {/* <Button type="primary">Primary Button</Button> */}
            <div className='row ' style={{ height: window.innerHeight }}  >
                <div className='col-3' style={{ backgroundColor: '#343161' }}>

                </div>
                <div className='col-9 '>
                    <form className='container text-center' onSubmit={handleSubmit}>
                        <h1 className='display-4'>Login</h1>
                        <div className="form-group text-left">
                            <p>Email</p>
                            <input onChange={handleOnchange} name="userName" type="email" className="form-control" />
                        </div>
                        <div className="form-group text-left">
                            <p>Password</p>
                            <input onChange={handleOnchange} name="password" type="password" className="form-control" />
                        </div>
                        <button style={{ width: 200 }} className='btn btn-success mt-4 '>Login</button>
                        <p>Join by social network</p>
                        <div className='d-flex justify-content-center mt-5'>
                            <i class="fab fa-facebook mr-3" style={{fontSize:40,color:'blue'}}></i>
                            <i class="fab fa-google ml-3" style={{fontSize:40,color:'red'}}></i>
                        </div>
                    </form>
                </div>

            </div>

        </div>
    )
}

