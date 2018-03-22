//import fetch from 'cross-fetch'

export const ADD_STORY = 'ADD_STORY'
export const SORT_STORY ='SORT_STORY'
export const ADD_ITERATION = 'ADD_ITERATION'
//todo:id採番について考える。
//todo:projectについて考える。
let iterationId=0





export function addNewIterationAction(title,startDate,expireDate){
    return{
        //todo:projectId
        type:ADD_STORY,
        id:iterationId++,
        title,
        startDate,
        expireDate,
    }
}

export function sortStory(sortedStory) {
    return{
        type:SORT_STORY,
        sortedStory
    }
}

export function addIteration(iterationTitle, iterationId) {
    type:ADD_ITERATION
}




