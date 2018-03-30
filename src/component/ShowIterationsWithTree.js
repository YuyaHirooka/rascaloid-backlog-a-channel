import React, {Component} from 'react'
import 'react-sortable-tree/style.css'
import SortableTree from 'react-sortable-tree'
import AddStory from './AddStory'

class ShowIterationsWithTree extends Component {

  render() {
    return (
        <div>
          <AddStory onSubmit={this.props.addStory} iterationId={this.props.iteration.iterationId}/>
          <div
              style={{
                height: 500,
                width: 700,
                float: 'left',
                border: 'solid black 1px',
              }}
          >
            <SortableTree
                treeData={this.props.iteration.story}
                onChange={story => this.props.onHandleChange(this.props.iteration.iterationId, story)}
                dndType={'yourNodeType'}
                maxDepth={0}
            />
          </div>
        </div>
    )
  }
}

export default ShowIterationsWithTree

