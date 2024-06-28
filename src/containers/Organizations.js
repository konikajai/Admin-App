import React, { Component } from 'react';
// import Card from '../components/Card/Card';
import Modal from '../components/Modal/Modal';
import Header from '../components/Header/Header';
import Table from '../components/Table/Table';
// import Button from '../components/Button/Button';
class Organizations extends Component {
    state = {
        organizations:[]
    }
    componentDidMount(){
        // console.log(this.props)
        this.setState({organizations:this.props.organizations})
    }
    render(){
        const orgs = (
            <div>
                <Modal 
                    createHandler={this.props.createHandler}
                    title='Add Organization' 
                    name = 'Organization'/>
                <Header title='Organizations Management'/>
                
                <button
                    style={{marginBottom:'10px'}}
                    type="button" 
                    className="btn btn-outline-primary" 
                    data-bs-toggle="modal" 
                    data-bs-target="#exampleModal">
                    <i className="fa fa-plus-circle" aria-hidden="true"></i> Add Organization
                </button>
                {this.state.organizations.length > 0 ? 
                <Table obj = {this.state.organizations}  deleteObj = {this.props.deleteObj} type = 'organization'/>
                    : <h3>Add an organizaiton</h3>
            }
        </div>
        )
        return(
            <div>
                {orgs}
            </div>
        )
    }
}
export default Organizations;