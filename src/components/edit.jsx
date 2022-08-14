import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../Navbar'
import { Link } from 'react-router-dom'

function Edit() {
  const [isPut, setIsPut] = useState(false)
  const [newRecord, setNewRecord] = useState({
    sku: "",
    type: "",
    name: "",
    qty: "",
    date: "",
    description: "",
  })

    
  
  function updateRecord(id) {
    axios.put('http://localhost:3001/edit/' + id, newRecord)
  }

  
  function handleUpdate(e) {
    const { name, value } = e.target
    setNewRecord((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      }
    })
  }

  
  return (
    <div className="container">
      <h1>Update Record</h1>
      <form>
        <div className="form-group">
        <label htmlFor="name">Name</label>
          <input
            onChange={handleUpdate}
            name="name"
            value={newRecord.name}
            className="form-control"
          ></input>
        </div>

        <div className="form-group">
        <label htmlFor="type">Type</label>
          <textarea
            onChange={handleUpdate}
            name="type"
            value={newRecord.content}
            className="form-control"
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="qty">Qty</label>
          <input
            type="number"
            onChange={handleUpdate}
            name="qty"
            value={newRecord.qty}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="sku">SKU</label>
          <input
            type="number"
            onChange={handleUpdate}
            name="sku"
            value={newRecord.sku}
            className="form-control"
          />
        </div>
         <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="number"
            onChange={handleUpdate}
            name="date"
            value={newRecord.date}
            className="form-control"
          />
        </div>
        <Link to= '/items'>
        <button onClick={() => updateRecord(newRecord._id)}>UPDATE</button>
        </Link>
      </form>
    </div>
      
  )
}

export default edit