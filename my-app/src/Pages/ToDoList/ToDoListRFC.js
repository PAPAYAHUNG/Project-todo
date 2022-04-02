import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { compose } from 'redux'
import './Todolistxxx.css'
export default function ToDoListRFC() {
  const renderAllTask = () => {
    axios.get('http://svcy.myclass.vn/api/ToDoList/GetAllTask')
      .then((res) => {
        console.log(res)
        setState({
          ...state,
          taskList: res.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  let [state, setState] = useState({
    taskList: [],
    input:{
      taskName:""
    },
    inputError:{
      taskName:''
    }
  })

  useEffect(() => {
    renderAllTask()
  }, [])

  const renderDoTask = () => {
    return state.taskList.filter(item => !item.status).map((item, index) => {
      return <li key={index}>
        <span>{item.taskName}</span>
        <div className="buttons">
          <button onClick={()=>{deleteTask(item.taskName)}} className="remove" type="button">
            <i className="fa fa-trash-alt" />
          </button>
          <button onClick={()=>{checkComplete(item.taskName)}} type="button" className="complete">
            <i className="far fa-check-circle" />
            <i className="fas fa-check-circle" />
          </button>
        </div>
      </li>
    })
  }
  const renderCompleteTask = ()=>{
    return state.taskList.filter(item=>item.status).map((item,index)=>{
      return       <li key={index}>
      <span>{item.taskName}</span>
      <div className="buttons">
        <button className="remove">
          <i className="fa fa-trash-alt" />
        </button>
        <button onClick={()=>{rejectTask(item.taskName)}} className="complete">
          <i className="far fa-undo" />
          <i className="fa fa-undo" />
        </button>
      </div>
    </li>
    })
  }

  const handleOnchange = (e)=>{
      let {name,value}= e.target
      let newInpput = {...state.input,[name]:value}
      let newError = {...state.inputError}
      if(value===''){
        newError[name]=name +' cant be empty'
        
      }else{
        newError[name]=""
      }
      setState({
        ...state,
          input:newInpput,
          inputError:newError
      })
      // console.log(state)

  }
  // console.log(state.inputError.taskName2)
  console.log(state.inputError.taskName)

  const handleSubmit = (e)=>{
      e.preventDefault()
      let task = state.input
      console.log(task)
      axios.post('http://svcy.myclass.vn/api/ToDoList/AddTask',task)
      .then((res)=>{
        console.log(res)
        renderAllTask()
      })
      .catch((err)=>{
        console.log(err)
      })
  }

  const deleteTask = (task)=>{
    axios.delete(`http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${task}`)
    .then((res)=>{
      renderAllTask()
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  const checkComplete = (task)=>{
      axios.put(`http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${task}`)
      .then((res)=>{
        renderAllTask()
      })
      .catch((err)=>{
        console.log(err)
      })
  }

  const rejectTask = (task)=>{
    axios.put(`http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${task}`)
    .then((res)=>{
      renderAllTask()
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="card">
        <div className="card__header">
          <img src={require('./bg.png')} alt="sdfsd" />
        </div>
        {/* <h2>hello!</h2> */}
        <div className="card__body">
          <div className="card__content">
            <div className="form-group">
              <div className="card__title">
                <h2>My Tasks</h2>
                <p>September 9,2020</p>
              </div>
              <div className="card__add">
                <input onChange={handleOnchange} name="taskName" id="newTask" type="text" placeholder="Enter an activity..." />

                <button onClick={handleSubmit} id="addItem" >
                  <i className="fa fa-plus" />
                </button>
              </div>
              <span className="text text-danger">{state.inputError.taskName}</span>
            </div>

            <div className="card__todo form-group">
              {/* Uncompleted tasks */}
              <ul className="todo" id="todo">
                    {renderDoTask()}
              </ul>
              {/* Completed tasks */}
              <ul className="todo" id="completed">
                    {renderCompleteTask()}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
