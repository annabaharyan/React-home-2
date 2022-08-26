import React from "react";

const ReadOnly=({contact,editClick,deleteClick})=>{
    return(
        <tr key={contact.id}>
        <td>{contact.fullName}</td>
        <td>{contact.address} </td>
        <td>{contact.phoneNumber} </td>
        <td>{contact.email} </td>
        <td>
            <button type="button"onClick={(event)=>editClick(event,contact)}>Edit</button>
            <button type="button"onClick={()=>deleteClick(contact.id)}>Delete</button>
        </td>
      </tr>
    )
}
export default ReadOnly