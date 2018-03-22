import React, {Component} from 'react'
import {Provider} from 'react-redux'
import config from '../config'
import Project from './Project'


const store = config()

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <Project/>
            </Provider>
        )
    }

}