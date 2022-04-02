import { Axios } from 'axios'
import React, { Component } from 'react'
import axios from 'axios'
import './Todolistxxx.css'

export default class ToDoList extends Component {
  // getAllTask = ()=>{
  //   let promise = Axios({
  //     url:'http://svcy.myclass.vn/api/ToDoList/GetAllTask',
  //     method:'GET'
  //   })
  //   // let promise = Axios.get('http://svcy.myclass.vn/api/ToDoList/GetAllTask')
  //   promise.then((res)=>{
  //     console.log(res.data)
  //   })
  //   promise.catch(err=>{
  //     console.log(err.respose.data)
  //   })
  // }

  state ={
    taskList:[],
    values:{
      taskName:''
    },
    error:{
      taskName:''
    }
  }

  axiosTest = () => {
    axios.get('http://svcy.myclass.vn/api/ToDoList/GetAllTask')
      .then((response) => {
        console.log(response);
        //neu goi data thanh cong=>set lai state
        this.setState({
          taskList:response.data
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }
  DeleteTask =(taskname)=>{
    console.log(taskname)
    // axios.delete(`http://svcy.myclass.vn/api/ToDoList/deleteTask${taskname}`)
    axios.delete(`http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${taskname}`)
    .then((res)=>{
      this.axiosTest()
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  renderDoTask = () => {
    return this.state.taskList.filter(item=>!item.status).map((item, index) => {
      return <li key={index}>
        <span>{item.taskName}</span>
        <div className="buttons">
          <button className="remove" type="button" onClick={() => {
            this.DeleteTask(item.taskName)
          }}>
            <i className="fa fa-trash-alt" />
          </button>
          <button type="button" className="complete" onClick={() => {
              this.checkDone (item.taskName)
          }}>
            <i className="far fa-check-circle" />
            <i className="fas fa-check-circle" />
          </button>
        </div>
      </li>
    })
  }

  renderTaskDone =()=>{
    return this.state.taskList.filter(item=>item.status).map((item,index)=>{
      return <li key={index}>
      <span>{item.taskName}</span>
      <div className="buttons">
        <button className="remove">
          <i className="fa fa-trash-alt" />
        </button>
        <button onClick={()=>{this.rejectTask(item.taskName)}} className="complete">
        <i className="fas fa-undo" />
        </button>
      </div>
    </li>
    })
  }
  componentDidMount(){
    this.axiosTest()
  }

  // handleChange=(event)=>{
  //   let {name,value} = event.target
  //   // console.log(name,value)
  //   let newError = {...this.state.error}
  //   let newValue = {...this.state.value}
  //   newValue = {...newValue,[name]:value}

  //   let regex = /^[a-zA-Z ]*$/

  //   if(!regex.test(value) || value.trim()===""){
  //       newError[name]=name+'cant be empty or number'
  //       console.log(newError)
  //   }else{
  //     newError[name]=''
  //   }
  //   this.setState({
  //     ...this.state,
  //     value:newValue,
  //     error:newError
  //     // value:{...this.state.value,taskName:value},
  //     // error:{...this.state.error,taskName:newError}
  //   })
  //   console.log(this.state.value)
  // }

  handleChange= (e)=>{
      let {name,value}= e.target
    let newValues = {...this.state.values,[name]:value}
    let newError = {...this.state.error}
    console.log(newValues)
    let regex = /^[a-zA-Z ]*$/
    if(!regex.test(value) || value.trim()===''){
        newError[name]=name+'check no empty space or not a number'

    }else{
      newError[name]=''
    }
    this.setState({
      values:newValues,
      error:newError
    },()=>{

      console.log(this.state.values,this.state.error)
    })


  }

  addTask = (e)=>{
    e.preventDefault()
    let data = {
      taskName:this.state.values.taskName
    }
    console.log(data)
    axios.post('http://svcy.myclass.vn/api/ToDoList/AddTask',data)
    .then((res)=>{
      // console.log(res.data)
      this.axiosTest()
    })
    .catch((err)=>{
      console.log(err)
      alert('task name is already exist')
    })
  }
 
  checkDone= (taskName)=>{
    axios.put(`http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${taskName}`)
    .then((res)=>{
      alert(taskName +'is done')
      this.axiosTest()
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  rejectTask = (taskName)=>{
      axios.put(`http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${taskName}`)
      .then((res)=>{
        this.axiosTest()
      })
      .catch((err)=>{
        console.log(err)
      })
  }
  handleSubmit=(event)=>{
      event.preventDefault()
      
  }
  render() {
    return (
      <form onSubmit={()=>{this.handleSubmit()}}>
        {/* <button onClick={() => { this.axiosTest() }} className='btn btn-success'>Get Task</button> */}
        <div>
          <div className="card">
            <div className="card__header">
              <img src={require('./bg.png')} alt="fdfs" />
            </div>
            <div className="card__body">
              <div className="card__content">
                <div className="form-group">
                  <div className="card__title">
                    <h2>My Tasks</h2>
                    <p>September 9,2020</p>
                  </div>
                  <div className="card__add">
                    <input onChange={this.handleChange} name="taskName" id="newTask" type="text" placeholder="Enter an activity..." />
                    <button onClick={this.addTask} id="addItem" >
                      <i className="fa fa-plus" />
                    </button>
                  </div>
                    <span className='text text-danger'>{this.state.error.taskName}</span>
                </div>

                <div className="card__todo form-group">
                  {/* Uncompleted tasks */}
                  <ul className="todo" id="todo">
                    {this.renderDoTask()}
                    {/* <li>
                      <span>Eatting breakfast</span>
                      <div className="buttons">
                        <button className="remove" type="button" onClick={() => {

                        }}>
                          <i className="fa fa-trash-alt" />
                        </button>
                        <button type="button" className="complete" onClick={() => {

                        }}>
                          <i className="far fa-check-circle" />
                          <i className="fas fa-check-circle" />
                        </button>
                      </div>
                    </li> */}
                  </ul>
                  {/* Completed tasks */}
                  <ul className="todo" id="completed">
                    {this.renderTaskDone()}

                    
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    )
  }
}
