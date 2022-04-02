import { CHANGE_MAIN_ZONE_SAGA, CHANGE_MAIN_ZONE_SAGA_NORMAL } from "../constants/Cyberbugs/Cyberbugs"

/* eslint-disable import/no-anonymous-default-export */
const initialState = {
    content: {
        lstTask: [
            { lstTaskDeTail: [], statusId: '1', statusName: 'BACKLOG', alias: 'tồn đọng' },
            { lstTaskDeTail: [], statusId: '2', statusName: 'SELECTED FOR DEVELOPMENT', alias: 'được chọn để phát triển' },
            { lstTaskDeTail: [], statusId: '3', statusName: 'IN PROGRESS', alias: 'trong tiến trình' },
            { lstTaskDeTail: [], statusId: '4', statusName: 'DONE', alias: 'hoàn thành' },
        ],
        members: [
            { userId: 850, name: 'thangtvads', avatar: 'https://ui-avatars.com/api/?name=thangtvads', email: null, phoneNumber: null },
            { userId: 827, name: 'sadf', avatar: 'https://ui-avatars.com/api/?name=sadf', email: null, phoneNumber: null },
            { userId: 967, name: 'thubui', avatar: 'https://ui-avatars.com/api/?name=thubui', email: null, phoneNumber: null },
            { userId: 935, name: 'Hanavi', avatar: 'https://ui-avatars.com/api/?name=Hanavi', email: null, phoneNumber: null },
            { userId: 943, name: 'Ngo Hang', avatar: 'https://ui-avatars.com/api/?name=Ngo Hang', email: null, phoneNumber: null },
            { userId: 1079, name: 'Tien Pham', avatar: 'https://ui-avatars.com/api/?name=Tien Pham', email: null, phoneNumber: null },
        ],
        projectCategory: { id: 1, name: 'Dự án web' },
        projectName: "",
        dateTime: "2022-04-01T19:29:05.4181656+07:00",
        description: "<p>qweasdqwe</p>",
        id: 3898
    }
}

export default (state = initialState, action) => {
    // console.log(action.data)
    // let {content}=action
    switch (action.type) {
        case CHANGE_MAIN_ZONE_SAGA_NORMAL:{
                let newContent= {...state.content}
                newContent.lstTask=action.data.lstTask
                newContent.members=action.data.members
                newContent.description=action.data.description
                newContent.projectName=action.data.projectName


                return {...state,content:newContent}
        }



        default: return { ...state }
    }
}
