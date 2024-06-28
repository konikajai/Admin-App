import React, { Component } from 'react';
// import Card from '../components/Card/Card';
import Modal from '../components/Modal/Modal';
import Header from '../components/Header/Header';
import Table from '../components/Table/Table';
class Users extends Component {
    state = {
        employees:[]
    }
    componentDidMount(){
        this.setState({employees:this.props.employees})
    }
    render(){
        const emps = (
            <div>
                <Modal 
                    title='Add User' 
                    name = 'User' 
                    users={this.props.employees}
                    roles={this.props.roles}
                    organizations={this.props.organizations}
                    createHandler={this.props.createHandler}    
                />
                <Header title="Employee Management"/>   
                
                <button 
                style={{marginBottom:'10px'}}
                type="button" 
                className="btn btn-outline-primary" 
                data-bs-toggle="modal" 
                data-bs-target="#exampleModal">
                    <i className="fa fa-plus-circle" aria-hidden="true"></i> Add User
                </button>
                {this.state.employees.length>0 ? 
                <Table obj = {this.state.employees}  deleteObj = {this.props.deleteObj} type = 'user'/>
                    :<h3>Add an employees</h3>        
            } 
                
            </div>
        )
        return(
            <div>
                {emps}
            </div>
        )
    }
}
export default Users;