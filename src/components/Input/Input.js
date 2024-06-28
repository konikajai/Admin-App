import React from 'react';

const input = (props)=>{
    let inputEle = null;
    // console.log(props.control.touched,props.control.isValid)
    let inputClass =props.control.touched? (props.control.isValid? "form-control is-valid" :"form-control is-invalid"):"form-control";
    if(props.tag === 'input'){
        inputEle= (<div>
                <input 
                type={props.type} 
                className={inputClass} 
                id={props.id}
                placeholder={props.placeholder}
                onChange={(e)=>props.changeHandler(e,props.id)}
                required/>
                <div className="invalid-feedback">
                    Please provide a valid {props.id}.
                </div>
                <div className="valid-feedback">
                    Looks good!
                </div>
                </div>
        );
    }
    else if (props.tag === 'textArea'){
        inputEle=(
            <div>
                <textarea 
                className={inputClass} 
                id={props.id} 
                rows={props.rows} 
                onChange={(e)=>props.changeHandler(e,'description')}>
                </textarea>
                <div className="invalid-feedback">
                Please provide a valid value.
                </div>
                <div className="valid-feedback">
                    Looks good!
                </div>
            </div>
                
        )
    }
    // else if (props.tag === 'select'){
    //    inputEle=(
    //     <select 
    //         className="form-select" 
    //         id={props.id} 
    //         aria-label="Default select example" 
    //         changeHandler={(e)=>props.changeHandler(e,props.changeId)}>
    //         <option >Select a {props.changeId}</option>
    //         {props.options}
    //     </select>
    //    )
    // }
    return(
        <div className="mb-3">
            <label htmlFor={props.id} className="form-label">{props.title}</label>
            {inputEle}
        </div>
    )
}
export default input;