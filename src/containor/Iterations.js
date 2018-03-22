import React,{Component} from 'react'
import AddIterationForm from '../component/AddIterationForm'
import {addNewIterationAction, editTheItarationAction} from "../action/actions";
import ShowIterations from './ShowIterarions'
import {connect} from 'react-redux'

class Iterations extends Component{

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
                <AddIterationForm onSubmit={this.handleAddIteration} />
                <ShowIterations/>
            </div>
        )
    }

}



export default connect()(Iterations)