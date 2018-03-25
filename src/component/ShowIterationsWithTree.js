import React from 'react'
import 'react-sortable-tree/style.css'
import SortableTree from 'react-sortable-tree'
import AddStory from './AddIStory'


const ShowIterationsWithTree = ({iteration,addStory, onChangeHandle}) => {
    const externalNodeType = 'yourNodeType'


    return (
        <div>
            <AddStory onSubmit={addStory} iterationId={iteration.iterationId}/>
            <div
                style={{
                    height: 500,
                    width: 700,
                    float: 'left',
                    border: 'solid black 1px',
                }}
            >
                <SortableTree
                    treeData={iteration.story}
                    onChange={story => onChangeHandle(story)}
                    dndType={externalNodeType}
                    maxDepth={0}
                />
            </div>
        </div>
    )
}


export default ShowIterationsWithTree

