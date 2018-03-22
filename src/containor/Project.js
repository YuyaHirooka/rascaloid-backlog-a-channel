import React,{Component} from 'react'
import AddStory from '../component/AddIStory'
import {addNewIterationAction, editTheItarationAction} from "../action/actions";
import ShowIterations from './ShowIterations'
import {connect} from 'react-redux'

class ShowItratins extends Component{

    constructor(props) {
        super(props)
        this.handleAddIteration=this.handleAddIteration.bind(this)
    }

    handleAddIteration(values){

        this.props.dispatch(addNewIterationAction(values.title,values.startDate,values.expireDate))

    }

    render(){
        return(
            <div>
                <AddStory onSubmit={this.handleAddIteration} />
                <ShowIterations/>
            </div>
        )
    }

}



export default connect()(ShowIterations)