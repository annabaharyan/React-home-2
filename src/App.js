import React, { useState,Fragment} from 'react';
import './App.css';
import datas from './datas.json';
import {nanoid} from 'nanoid'
import ReadOnly from './components/ReadOnly';
import EditableRow from './components/editableRow';
function App() {
  
  const [contacts,setContacts]=useState(datas)
  const[addFormData,setaddFormData]=useState({
    fullName:"",
    address:"",
    phoneNumber:"",
    email:""
  })
  const [editFormData, setEditFormData]=useState({
    fullName:"",
    address:"",
    phoneNumber:"",
    email:""
  })
  const [editContactId,setEditContactId]=useState(null)
  const addFormChange=(event)=>{
    event.preventDefault();
    const fildName=event.target.getAttribute('name');
    const fildValue=event.target.value;
    const newFormData={...addFormData};
    newFormData[fildName]=fildValue;
    setaddFormData(newFormData)
  }
  const EditFormChange=(event)=>{
    event.preventDefault();
    const fildName=event.target.getAttribute("name");
    const fildValue=event.target.value;
    const newFormData={...editFormData};
    newFormData[fildName]=fildValue;
    setEditFormData(newFormData)
  }
  const addFormChangeonSumbit=(event)=>{
    event.preventDefault();
    const newContact={
      id:nanoid(),
      fullName:addFormData.fullName,
      address:addFormData.address,
      phoneNumber:addFormData.phoneNumber,
      email:addFormData.email,
    }
    const newContacts=[...contacts,newContact];
    setContacts(newContacts)
    
  }
  const editFormSubmit=(event)=>{
    event.preventDefault();
    const editedContact={
      id:editContactId,
      fullName:editFormData.fullName,
      address:editFormData.address,
      phoneNumber:editFormData.phoneNumber,
      email:editFormData.email
    }
    const newContacts=[...contacts];

    const index=contacts.findIndex((contact)=>contact.id===editContactId)
    newContacts[index]=editedContact;
    setContacts(newContacts);
    setEditContactId(null)
  }
  const editClick=(event,contact)=>{
    event.preventDefault();
    setEditContactId(contact.id)
    const formValues={
      
        fullName:contact.fullName,
        address:contact.address,
        phoneNumber:contact.phoneNumber,
        email:contact.email
      
    }
  
    setEditFormData(formValues)
  };
  const cancelClick=()=>{
    setEditContactId(null)
  }
  const deleteClick=(contactId)=>{
const newContacts=[...contacts];
const index=contacts.findIndex((contact)=>contact.id===contactId);
newContacts.splice(index,1);
setContacts(newContacts)
  }
  return(
 <div className='app-container'>
  <form onSubmit={editFormSubmit}>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Addres</th>
          <th>Phone number</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map(contact=>(
          <Fragment>
            {editContactId===contact.id?(
                <EditableRow 
                editFormData={editFormData}
                EditFormChange={EditFormChange}
                cancelClick={cancelClick}
                />
            ):( 
               <ReadOnly
                contact={contact}
                editClick={editClick}
                deleteClick={deleteClick}/>
            )}
          </Fragment>
          
        ))}
      
      </tbody>
    </table>
</form>
 <h2>Add a Contact</h2>
 <form onSubmit={addFormChangeonSumbit}>
    <input type="text"name="fullName"required placeholder='fullName'onChange={addFormChange}/>
    <input type="text"name="address"required placeholder='address'onChange={addFormChange}/>
    <input type="text"name="phoneNumber"required placeholder='phoneNumber'onChange={addFormChange}/>
    <input type="email"name="email"required placeholder='email'onChange={addFormChange}/>
    <button type="submit">Add</button>
 </form>
  </div>
  );
}

export default App;
