import React from 'react'
import Story from './Story'
//todo prop types

const Stories=({iterations,onClickIteration})=>(

    <ul>
        {iterations.map((iteration)=>(
            <Story key={iteration.id} {...iteration} onClick={()=>onClickIteration(iteration.id)}/>
        ))}
    </ul>
)

export default Story