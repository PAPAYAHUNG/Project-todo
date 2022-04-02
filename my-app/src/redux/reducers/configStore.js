import { applyMiddleware, combineReducers, createStore } from 'redux'
import ToDoListReducer from './ToDoListReducer'
import reduxThunk from 'redux-thunk'
//middelware saga
import createMiddleWareSaga from 'redux-saga'
import { rootSaga } from '../sagas/rootSaga'
import LoadingReducer from './LoadingReducer'
import ModalReducer from './ModalReducer'
import checkWhomNeedToShowReducer from './CheckWhomComponent'
import HistoryReducer, { history } from './HistoryReducer'
import UserCyberbugReducer from './UserCyberbugReducer'
import ProjectCyberbugCategoryReducer from './ProjectCyberbugCategoryReducer'
import ProjectMangamentReducer from './ProjectMangamentReducer'
import DrawerModalCyberbugReducer from './DrawerModalCyberbugReducer'
import ProjectOverallReeducer from './ProjectOverallReeducer'
import SearchUserAutoCompleteReducer from './SearchUserAutoCompleteReducer'
import MainZoneReducer from './MainZoneReducer'
import TaskTypeReducer from './TaskTypeReducer'

const middelwareSaga = createMiddleWareSaga()

const createRootReducer = combineReducers({
  // router: connectRouter(history),
  // rest of your reducers
  ToDoListReducer,
  LoadingReducer,
  ModalReducer,
  checkWhomNeedToShowReducer,
  UserCyberbugReducer,
  ProjectCyberbugCategoryReducer,
  ProjectMangamentReducer,
  DrawerModalCyberbugReducer,
  ProjectOverallReeducer,
  SearchUserAutoCompleteReducer,
  MainZoneReducer,
  TaskTypeReducer

})

// const rootReducer = combineReducers({
//     //khai bao reducer
//     ToDoListReducer,
//     LoadingReducer,
//     ModalReducer,
//     checkWhomNeedToShowReducer,

// })

const store = createStore(createRootReducer, applyMiddleware(reduxThunk, middelwareSaga))

//goi saga
middelwareSaga.run(rootSaga)

export default store