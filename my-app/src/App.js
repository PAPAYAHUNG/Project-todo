import logo from './logo.svg';
import './App.css';
// import { BrowserRouter, Route} from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom'
// import {
//   BrowserRouter ,
//   Switch,
//   Route,

// } from "react-router-dom";

import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About'
import Header from './components/Home/Header';
import { BrowserRouter } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Detail from './Pages/Detail/Detail';
import Profile from './Pages/Profile/Profile';
import ToDoListRFC from './Pages/ToDoList/ToDoListRFC';
import ToDoList from './Pages/ToDoList/ToDoList';
import ToDoListRedux from './Pages/ToDoList/ToDoListRedux';
import BaiTapToDoListSaGa from './Pages/BaiTapToDoListsSaGa/BaiTapToDoListsSaGa';
import LoadinComponnent from './assets/GlobalSettings/LoadinComponnent';
import DemoHOCModal from './Pages/DemoHOCmodal/DemoHOCModal';
import Modal from './HOC/Modal/Modal';
import { useSelector } from 'react-redux';
import LoginCyberBugwithFormik from './Pages/CyberBug/LoginCyberBug/LoginCyberBug';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { history } from './util/libs/history';
import BigCuberBugApp from './components/CyberBugs/BigCuberBugApp';
import ModalCyberbug from './components/ModalCyberBug/ModalCyberbug';
import Createproject from './Pages/CyberBug/CreateProject/Createproject';
import Home2 from './TestReactRouterV6/Home2';
import Invoice from './TestReactRouterV6/Invoice';
import Expense from './TestReactRouterV6/Expense';
import NotFound from './TestReactRouterV6/NotFound';
import MiniInvoice from './TestReactRouterV6/MiniInvoice';
import Test1 from './TestReactRouterV6/Test1';
import Loglog from './TestReactRouterV6/Loglog';
import SidebarCyberbug from './components/CyberBugs/SidebarCyberbug';
import MainZone from './components/CyberBugs/MainZone';
import ProjectManagement from './components/CyberBugs/ProjectManagement';
import ModalEditManager from './components/ModalCyberBug/ModalEditManager';

function App() {
  let { needToShow } = useSelector(state => state.checkWhomNeedToShowReducer)
  // console.log(needToShow)
  // const navigate = useNavigate()
  // let dispatch = useDispatch()
  // useEffect(()=>{
  //   // console.log(navigate)
  //       dispatch({
  //         type:'ADD_HISTORY',
  //         navigate
  //       })
  // },[])
  return (
    <>
      <Router history={history}>

        {/* {needToShow ? <Header /> : ''} */}
        {/* <Header /> */}
        {/* <Modal />
      <LoadinComponnent /> */}
        {/* <Routes>
      <Route exact path="/" element={ <>
        <Header />
        <Home/>
      </>} /> */}
        <ModalCyberbug />
        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />

          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<LoginCyberBugwithFormik />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/todolistrfc' element={<ToDoListRFC />} />
          <Route path='/todolistrcc' element={<ToDoList />} />
          <Route path='/todolistRedux' element={<ToDoListRedux />} />
          <Route path='/todolistSaga' element={<BaiTapToDoListSaGa />} />
          <Route path='/DemoHOCmodal' element={<DemoHOCModal />} />
          <Route path='/crateProject' element={<Createproject />} />
          <Route path='/new' element={<Home2 />}>
            <Route path='invoice' element={<Invoice />}>
              <Route index element={<h2>Please select an invoice</h2>} />
              <Route path=':invoiceID' element={<MiniInvoice />} />
              <Route path='xx' element={<Test1 />} />
              <Route path='log' element={<Loglog />} />
            </Route>
            <Route path='expense' element={<Expense />} />
            <Route path='*' element={<NotFound />} />
            <Route path='xx' element={<Test1 />} />
          </Route>
          <Route>
            <Route path='/CyberBug' element={<BigCuberBugApp />} >
              <Route index element={<ProjectManagement />} />
              <Route path='main:idDetail' element={<MainZone />} />
              <Route path='management/main:idDetail' element={<MainZone />} />
              {/* <Route path='management/main:idDetail' element={<ProjectManagement />} /> */}

              <Route path='create' element={<Createproject />} />
              <Route path='management' element={<ProjectManagement />} />
            
            </Route>
            {/* <Route path='modalEdit' element={<ModalEditManager />} /> */}
          </Route>
        </Routes>
        <ModalEditManager />

      </Router>
    </>



  )
}

export default App;


