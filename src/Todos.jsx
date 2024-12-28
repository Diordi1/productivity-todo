import React from 'react';

let Todos=()=>{
    return<div className='container'>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
      <th scope="col">Delete</th>
      <th scope="col">Update</th>
    </tr>
  </thead>
  <tbody className="table-group-divider">
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td><button className="btn btn-warning">Delete</button></td>
      <td><button className="btn btn-success">Update</button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td><button className="btn btn-warning">Delete</button></td>
      <td><button className="btn btn-success">Update</button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td><button className="btn btn-warning">Delete</button></td>
      <td><button className="btn btn-success">Update</button></td>
    </tr>
    
  </tbody>
</table>
    </div>
}
export default Todos;
