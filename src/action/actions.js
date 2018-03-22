//import fetch from 'cross-fetch'

export const GET_ITERATION_BY_PROJECT_ID = 'GET_ITERATION_BY_PROJECT_ID'
export const ADD_NEW_ITERATION = 'ADD_NEW_ITERATION'
export const EDIT_THE_ITERATION = 'EDIT_THE_ITERATION'
export const CONTROL_EDITER = 'CONTROL_EDITOR'

//todo:id採番について考える。
//todo:projectについて考える。
let iterationId=0

export function  getIterationByProjectIdAction(projectId) {
    return{
        type:GET_ITERATION_BY_PROJECT_ID,
        projectId,
    }
}



export function addNewIterationAction(title,startDate,expireDate){
    return{
        type:ADD_NEW_ITERATION,
        id:iterationId++,
        title,
        startDate,
        expireDate,
    }
}


export function editTheItarationAction(iterationId) {
    return{
        type:EDIT_THE_ITERATION,
        iterationId
    }
}


