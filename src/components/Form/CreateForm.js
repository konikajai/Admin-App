import React from 'react';
import Input from '../Input/Input';
const roleorgForm =(props)=>{
    // console.log(props.roles);
    const placeholder = props.names+" Name";
    const roleOpt = props.roles && [...props.roles].map(role=>{
        return (
            <option value={role.name} key={role.id}>{role.name}</option>
        )
    });
    const orgOpt = props.orgs?[...props.orgs].map(org=>{
        return(
            <option value={org.name} key={org.id}>{org.name}</option>
        )
    }):null;
    let inputClass =props.role.touched? (props.role.isValid? "form-select is-valid" :"form-select is-invalid"):"form-select";
    let inputClass1=props.organizaiton.touched?(props.organizaiton.isValid? "form-select is-valid" :"form-select is-invalid"):"form-select";
    let formInputs  = props.names !== 'User' ?
        (  <div>
                <Input 
                tag='textArea' 
                id='description' 
                title='Description' 
                rows={3} 
                changeHandler={props.changeHandler} 
                control={props.description}
                />
            </div>
        )
        :
        (   <div>
                <Input 
                    tag='input' 
                    id='email' 
                    title='Email Address' 
                    type='email' 
                    placeholder='abc@sample.com'
                    changeHandler={props.changeHandler}
                    control={props.email}
                />
                <div className='mb-3'>
                    <select 
                        className={inputClass} 
                        id='roleOption' 
                        aria-label="Default select example" 
                        onChange={(e)=>props.changeHandler(e,'role')}>
                        <option value=''>Select a role</option>
                        {roleOpt}
                    </select>
                    <div className="invalid-feedback">
                        Please select a role
                    </div>
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                {/* <Input 
                    tag='select'
                    id='roleOption'
                    changeId='role'
                    changeHandler={props.changeHandler}
                    options={roleOpt}
                /> */}
                <div className='mb-3'>
                    <select 
                        className={inputClass1} 
                        id='orgOption' 
                        aria-label="Default select example" 
                        onChange={(e)=>props.changeHandler(e,'org')}>
                        <option value=''>Select an organizaiton</option>
                        {orgOpt}
                    </select>
                    <div className="invalid-feedback">
                        Please select a organizaiton
                    </div>
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
            </div>
        )


    return(
        <div>
            <Input 
                tag='input' 
                id='name' 
                title='Name' 
                type='text' 
                placeholder={placeholder} 
                changeHandler={props.changeHandler}
                control={props.name}
                />
            {formInputs}
        </div>
    )
}
export default roleorgForm;