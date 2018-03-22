//import fetch from 'cross-fetch'

export const ADD_NEW_ITERATION = 'ADD_NEW_ITERATION'
export const SORT_STORY ='SORT_STORY'

//todo:id採番について考える。
//todo:projectについて考える。
let iterationId=0





export function addNewIterationAction(title,startDate,expireDate){
    return{
        //todo:projectId
        type:ADD_NEW_ITERATION,
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




