import React, {Component} from 'react'
import 'react-sortable-tree/style.css'
import SortableTree from 'react-sortable-tree'
import AddStory from './AddStory'

class ShowIterationsWithTree extends Component {
  render() {
    return (
      <div style={{
        border: 'solid 1px black',
        width: 700,
        marginTop: '2px',
        marginBottom: '2px'
      }}>
        <div style={{
          backgroundColor: '#dddddd',
          width: '100%'
        }}>
          <h4 style={{margin: 0}}>{this.props.iteration.iterationTitle}</h4>
          <AddStory onSubmit={this.props.addStory} iterationId={this.props.iteration.iterationId}/>
        </div>
        <div
          style={{
            height: this.props.iteration.story.length === 0 ? 70 : this.props.iteration.story.length * 62 + 8,
            width: '100%'
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

