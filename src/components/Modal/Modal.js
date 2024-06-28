import React, { Component } from 'react';
import CreateForm from '../Form/CreateForm';
class Modal extends Component{
  state={
    users:[],
    roles:[],
    organizations:[],
    email:{
      value:'',
      validation:{
          required:true,
          isEmail: true
      },
      isValid: false,
      touched:false
  },
    name:{
      value:'',
      validation:{
        required:true,
        minLength:3
    },
      touched:false,
      isValid:false
    },
    role:{
      value:'',
      touched:false,
      isValid:false
    },
    organizaiton:{
      value:'',
      touched:false,
      isValid:false
    },
    description:{value:'',
    validation:{
      required:true,
      minLength:6
  },
    touched:false,
    isValid:false},
    isInvalid:true,
    
    
  }
  componentDidMount(){
    this.setState({
      users:this.props.users,
      roles:this.props.roles,
      organizations:this.props.organizations
    })
  }
  validationCheck=(validation,value)=>{
    let isValid = true;
    // console.log(validation)
    if (validation.required){
        isValid = value.trim() !== '' && isValid; 
    }
    if(validation.minLength){
        isValid = value.length >= validation.minLength && isValid; 
    }
    if(validation.maxLength){
        isValid = value.length <= validation.maxLength && isValid; 
    }
    if (validation.isEmail) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test(value) && isValid;
    }
       
    return isValid
}
  changeHandler=(e,type)=>{
    // console.log(e.target.value,type);
    let isInvalid =this.props.name === 'User'?
     this.state.name.isValid&&this.state.email.isValid&&this.state.role.isValid :
      this.state.name.isValid&&this.state.description.isValid ;
    
    // console.log(isInvalid);
    switch(type){
      case 'name':
        const updatedName={
          ...this.state.name,
          value:e.target.value,
          touched:true,
          isValid:this.validationCheck(this.state.name.validation,e.target.value)

        }
        this.setState({name:updatedName})
        break;
      case 'email':
        const updatedEmail={
          ...this.state.email,
          value:e.target.value,
          touched:true,
          isValid:this.validationCheck(this.state.email.validation,e.target.value)
        }
        this.setState({email:updatedEmail})
        break;
      case 'role':
        const updatedRole={
          ...this.state.role,
          value:document.getElementById('roleOption').value,
          touched:true,
          isValid:document.getElementById('roleOption').value.length>0
        }
        this.setState({role:updatedRole})
        break;
      case 'org':
        const updatedOrg={
          ...this.state.organizaiton,
          value:document.getElementById('orgOption').value,
          touched:true,
          isValid:document.getElementById('orgOption').value.length>0
        }
        this.setState({organizaiton:updatedOrg})
        break;
      case 'description':
        const updatedDescription={
          ...this.state.description,
          value:e.target.value,
          touched:true,
          isValid:this.validationCheck(this.state.description.validation,e.target.value)
        }
        this.setState({description:updatedDescription})
        break;
      default:
        console.log('No matching type')  
    }
    this.setState({isInvalid:!isInvalid});
  }
  
   render(){
    // console.log(this.state);
    return(
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{this.props.title}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form className="row g-3 needs-validation" noValidate>
            <div className="modal-body">
              
              <CreateForm 
                names ={this.props.name} 
                users={this.state.users}
                roles={this.state.roles}
                orgs={this.state.organizations}
                name={this.state.name}
                email={this.state.email}
                description={this.state.description}
                role={this.state.role}
                organizaiton={this.state.organizaiton}
                changeHandler={this.changeHandler}
              />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-outline-primary" disabled={this.state.isInvalid}data-bs-dismiss="modal" onClick={()=>this.props.createHandler({
                  name:this.state.name.value,
                  email:this.state.email.value,
                  role:this.state.role.value,
                  organizaiton:this.state.organizaiton.value,
                  description:this.state.description.value
              }
              )}>Create</button>
            </div>
            </form>
          </div>
        </div>
      </div>
    )}
}
export default Modal;