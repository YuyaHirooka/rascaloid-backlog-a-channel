import React from 'react'
import 'react-sortable-tree/style.css'
import SortableTree from 'react-sortable-tree'


const ShowIterationsWithTree = ({iterations, onChangeHandle}) => {
    console.log('bbbbbbbbb')
    console.log(iterations)
    const externalNodeType = 'yourNodeType';
    return (
        <div
            style={{
                height: 500,
                width: 700,
                float: 'left',
                border: 'solid black 1px',
            }}
        >
            <SortableTree
                treeData={iterations.story}
                onChange={story => onChangeHandle(story)}
                dndType={externalNodeType}
                maxDepth={0}
            />
        </div>
    )
}


export default ShowIterationsWithTree

