import React from 'react';
const table = (props) =>{
let tableBody = null;
let tableHeader = null;
let objs = props.obj;
if(props.type !== 'user'){
    tableHeader=( <thead  className=' text-white bg-dark bg-gradient'>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col"></th>
                </tr>
            </thead>);

    tableBody=(  <tbody>
            {[...objs].map(obj=>{
                // return <Card key={role.id} deleteObj={this.props.deleteObj} role={role}/>
                return <tr key={obj.id}>
                            <th scope="row">{obj.id}</th>
                            <td>{obj.name}</td>
                            <td>{obj.description}</td>
                            <td>
                            <button onClick={()=>props.deleteObj(obj.id)} type="button" 
                            className="btn btn-outline-danger"><i className="fa fa-trash" aria-hidden="true"></i></button>
                            </td>
                            </tr>
                })}    
            </tbody>)
    }
else{
    tableHeader=(
        <thead  className=' text-white bg-dark bg-gradient'>
        <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Role</th>
        <th scope="col">Organization</th>
        <th scope="col"></th>
        </tr>
    </thead>
    );
    tableBody=(
        <tbody>
                    {[...objs].map(obj=>{
                        
                        return <tr key={obj.id}>
                                <th scope="row">{obj.id}</th>
                                <td>{obj.name}</td>
                                <td>{obj.email}</td>
                                <td>{obj.role}</td>
                                <td>{obj.organization}</td>
                                <td>
                                <button onClick={()=>props.deleteObj(obj.id)} type="button" 
                                className="btn btn-outline-danger"><i className="fa fa-trash" aria-hidden="true"></i></button>
                                </td>
                                </tr>
                    })}    
                </tbody>
    )
}    

    return(
        <div className="table-responsive">
            <table className="table table-bordered border-dark">
            {tableHeader}
            {tableBody}
            
            </table>
        </div>    

    )
}
export default table;