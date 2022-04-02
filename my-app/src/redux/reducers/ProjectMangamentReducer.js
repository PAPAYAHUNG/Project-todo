/* eslint-disable import/no-anonymous-default-export */

import { FECTH_PROJECT_MANAGEMENT_NORMAL } from "../constants/Cyberbugs/Cyberbugs"

const initialState = {
    dataProject: [
        {
            "members": [
                {
                    "userId": 827,
                    "name": "sadsa",
                    "avatar": "https://ui-avatars.com/api/?name=sadsa"
                },
                {
                    "userId": 1092,
                    "name": "4234324",
                    "avatar": "https://ui-avatars.com/api/?name=4234324"
                },
                {
                    "userId": 967,
                    "name": "thubui",
                    "avatar": "https://ui-avatars.com/api/?name=thubui"
                }
            ],
            "members": [
                {
                    "userId": 1261,
                    "name": "Tester",
                    "avatar": "https://ui-avatars.com/api/?name=Tester"
                }
            ],
            "creator": {
                "id": 1261,
                "name": "Tester"
            },
            "id": 3751,
            "projectName": "Test Project 1 2",
            "description": "<p>&nbsp;adad mihc noc ahahsasazxz&nbsp;&nbsp;</p>",
            "categoryId": 1,
            "categoryName": "Dự án web",
            "alias": "test-project-1-2",
            "deleted": false
        },
        {
            "members": [],
            "creator": {
                "id": 1343,
                "name": "FE Developer"
            },
            "id": 3752,
            "projectName": "Dự án 3",
            "description": "<p>NEw type of</p>",
            "categoryId": 3,
            "categoryName": "Dự án di động",
            "alias": "du-an-3",
            "deleted": false
        },
       
    ],
    
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FECTH_PROJECT_MANAGEMENT_NORMAL:{
            state.dataProject=action.projectList
            return {...state}
        }

        default: return { ...state }

    }
}
