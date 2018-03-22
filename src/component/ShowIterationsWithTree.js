import React from 'react'
import 'react-sortable-tree/style.css'
import SortableTree from 'react-sortable-tree'


const ShowIterationsWithTree=({iterations,onChangeHandle})=>{
    return(
        <SortableTree
            treeData={iterations.treeData1}
            onChange={onChangeHandle}
            dndType={externalNodeType}
            shouldCopyOnOutsideDrop={shouldCopyOnOutsideDrop}
            maxDepth={0}
        />
    )
}

