import React from 'react';
// import Button from '../Button/Button';
const card =(props)=>{
    const obj = props.emp?props.emp:(props.role?props.role:props.org)
    // console.log(obj)
    return (
        <div className="card" >
            <div>
                <p className="card-header">{obj.name}
                {/* <Button clicked={()=>props.deleteObj(obj.id)} name='Delete' type='danger'/></p> */}
                <button onClick={()=>props.deleteObj(obj.id)} type="button" style={{marginLeft:'10px'}}
                className="btn btn-outline-danger"><i class="fa fa-trash" aria-hidden="true"></i></button>
                </p>
            </div>
            {/* <ul className="list-group list-group-flush">
                <li className="list-group-item">{props.emp.email} </li>
                <li className="list-group-item">{props.emp.role} </li>
                <li className="list-group-item">{props.emp.organization} </li>
            </ul> */}
            
        </div>
    )
}
export default card ;