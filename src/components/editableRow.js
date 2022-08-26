import React from "react";

const EditableRow=({editFormData,EditFormChange,cancelClick})=>{
    console.log(editFormData);
    return(
      <tr>
        <td>
            <input type="text"
            required
             name="fullName"
              placeholder="fullName"
              value={editFormData.fullName} 
              onChange={EditFormChange}/>
        </td>
        <td>
            <input type="text"
            required 
            name="address"
             placeholder="address"
             value={editFormData.address}
              onChange={EditFormChange}/>
        </td>
        <td>
            <input type="text"
            required 
            name="phoneNumber"
             placeholder="phoneNumber"
             value={editFormData.phoneNumber}
             onChange={EditFormChange}/>
        </td>
        <td>
            <input type="email"
            required 
            name="email"
             placeholder="email"
             value={editFormData.email}
             onChange={EditFormChange}/>
        </td>
        <td>
            <button type="submit">Save</button>
            <button type="button" onClick={cancelClick}>Cancel</button>
        </td>
      </tr>
    )
}
export default EditableRow