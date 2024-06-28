import React, { Component } from 'react';
// import Card from '../components/Card/Card';
import Modal from '../components/Modal/Modal';
import Header from '../components/Header/Header';
import Table from '../components/Table/Table';
// import Button from '../components/Button/Button';
class Roles extends Component {
    state = {
        roles:[]
    }
    componentDidMount(){
        this.setState({roles:this.props.roles})
    }
    render(){ 
        const roles = (
            <div>
                <Modal 
                    createHandler={this.props.createHandler}
                    title='Add Role' 
                    name = 'Role'/>
                <Header title="Roles Management"/>
                
                <button 
                    style={{marginBottom:'10px'}}
                   type="button" 
                    className="btn btn-outline-primary" 
                    data-bs-toggle="modal" 
                    data-bs-target="#exampleModal">
                    <i className="fa fa-plus-circle" aria-hidden="true"></i> Add Role
                </button>
                {this.state.roles.length>0 ?
                <Table obj = {this.state.roles}  deleteObj = {this.props.deleteObj} type = 'role'/>
                    : <h3>Add a role</h3>}
        </div>
        )
        return(
            <div>
                {roles}
            </div>
        )
    }
}
export default Roles;