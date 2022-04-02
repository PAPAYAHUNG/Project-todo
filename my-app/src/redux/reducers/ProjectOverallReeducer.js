/* eslint-disable import/no-anonymous-default-export */
const initialState = {
    info:{
        "id": 0,
        "projectName": "string",
        "creator": 0,
        "description": "<h1>hurrrraaaaaaa</h1>",
        "categoryId": 1
      }
}

export default (state = initialState,action) => {
  switch (action.type) {
        case 'EDIT_PROJECT_INFO':{
            return {...state,info:action.record}
        }

  default: return { ...state}
  }
}
