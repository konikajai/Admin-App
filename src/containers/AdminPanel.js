import React ,{Component} from 'react';
import NavBar from '../components/NavBar/NavBar';
import {Redirect, Route} from 'react-router-dom';
import Users from './Users';
import Roles from './Roles';
import Organizations from './Organizations';
class AdminPannel extends Component{
    state={
        employees : [
            {   
                id:1,
                name :'Aman',
                email:'test@test.com',
                role:'Associate Software Engineer',
                organization:'Cognizant Technology Solutions'
            },
            {   
                id:2,
                name :'Anand',
                email:'test@test.com',
                role:'Associate Software Engineer',
                organization:'Cognizant Technology Solutions'
            },
            {   
                id:3,
                name :'Vibhaas',
                email:'test@test.com',
                role:'Software Engineer',
                organization:'Velocity Solutions'
            }
        ],
        roles:[
            {
                id:1,
                name:'Associate Software Engineer',
                description:'Junior level developer'   
            },
            {
                id:2,
                name:'Software Engineer',
                description:'Full-time developer'   
            }
        ],
        organizations:[
            {
                id:1,
                name: 'Congnizant Technology Solutions',
                size: 1000,
                description:'US based MNC'
            },
            {
                id:2,
                name: 'Velocity Solutions',
                size: 100,
                description:'Indian Startup'
            }
        ],
        
    }
   
    shouldComponentUpdate(nextState,nextProps){
        if(this.state !== nextState || this.props !== nextProps){
            return true
        }
        return false

    }
        
    deleteUserHandler=(id)=>{
        const users = [...this.state.employees].filter(emp=>{
            return id !== emp.id }
        );
        this.setState({employees:users});
        // console.log('user deleted',users,id);
    }
    deleteRoleHandler=(id)=>{
        const roles = [...this.state.roles].filter(role=>role.id !== id);
        this.setState({roles:roles});
    }
    deleteOrganizationHandler=(id)=>{
        const orgs = [...this.state.organizations].filter(org=>org.id !== id);
        this.setState({organizations:orgs});
    }
    createUserHandler=(obj)=>{
        const len = this.state.employees.length;
        const emp={
            id:len+1,
            name :obj.name,
            email:obj.email,
            role:obj.role,
            organization:obj.organizaiton
        };
        let employees = [...this.state.employees];
        employees=employees.concat(emp);
        this.setState({employees:employees});
    }
    createRoleHandler=(obj)=>{
        // console.log(obj);
        const len = this.state.roles.length;
        const role={
            id:len+1,
            name :obj.name,
            description:obj.description
        };
        let roles = [...this.state.roles];
        roles=roles.concat(role);
        this.setState({roles:roles});
    }
    createOrganizationHandler=(obj)=>{
        // console.log(obj);
        // console.log(obj);
        const len = this.state.organizations.length;
        const organizaiton={
            id:len+1,
            name :obj.name,
            description:obj.description
        };
        let organizations = [...this.state.organizations];
        organizations=organizations.concat(organizaiton);
        this.setState({organizations:organizations});
    }
    render(){
        
        return(
            <div >
                <NavBar/>
                <div className='container'>
                <Route path='/roles' 
                exact 
                component={()=><Roles 
                                    roles={this.state.roles} 
                                    deleteObj={this.deleteRoleHandler} 
                                    createHandler={this.createRoleHandler}
                                />
                            } 
                />
                <Route path='/organizations' 
                exact 
                component={()=><Organizations 
                                    organizations={this.state.organizations} 
                                    deleteObj={this.deleteOrganizationHandler} 
                                    createHandler={this.createOrganizationHandler}
                                />
                            }
                /> 
                <Route path='/users' 
                 
                component={()=><Users 
                                employees={this.state.employees} 
                                roles={this.state.roles} 
                                organizations={this.state.organizations}
                                deleteObj={this.deleteUserHandler} 
                                createHandler={this.createUserHandler}
                                
                                />
                            } 
                />   
                <Redirect to='/users' />
                </div>
            </div>

        )
    }
}
export default AdminPannel;