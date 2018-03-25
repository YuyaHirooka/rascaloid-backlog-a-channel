import React from 'react'
import ShowIterationsWithTree from './ShowIterationsWithTree'
import iterations from "../reducer/AddItarationReducer";


const ShowIterations=({iterations,onHandleChange,addStory})=>{
    {return(iterations.map((iteration)=>(
        <ShowIterationsWithTree
            key={iteration.iterationId}
            iteration={iteration}
            onHandleChange={onHandleChange}
            addStory={addStory}
        />
    )))}
}

export default ShowIterations