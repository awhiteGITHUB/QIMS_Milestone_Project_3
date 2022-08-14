import React, { useState } from "react";
import axios from "axios";
import Navbar from "./navbar";
import { Link } from "react-router-dom";

function record() {
  const [input, setInput] = useState({
    sku: "",
    type: "",
    name: "",
    qty: "",
    date: "",
    description: "",

  });

  function handleChange(e) {
    const { name, value } = e.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handleClick(e) {
    e.preventDefault();
    const newRecord = {
      sku: input.sku,
      type: input.type,
      name: input.name,
      qty: input.qty,
      date: input.date,
      description: input.description,
    };
    axios.post("http://localhost:3001/record", newRecord);
  }

  return (
    <div className="App">
      <Navbar />
      <h1>Create Record</h1>
      <form>
        <div className="form-group">
          <label htmlFor="sku">SKU</label>
          <input
            onChange={handleChange}
            name="sku"
            value={input.sku}
            className="form-control"
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="type">Type</label>
          <textarea
            onChange={handleChange}
            name="type"
            value={input.type}
            className="form-control"
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="string"
            onChange={handleChange}
            name="name"
            value={input.name}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="qty">Qty</label>
          <input
            type="string"
            onChange={handleChange}
            name="qty"
            value={input.qty}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="string"
            onChange={handleChange}
            name="date"
            value={input.date}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="string"
            onChange={handleChange}
            name="description"
            value={input.description}
            className="form-control"
          />
        </div>

        <button onClick={handleClick}>Add Records</button>

        <Link to="/items" className="linkToRecords">
          Records List
        </Link>
      </form>
    </div>
  );
}

export default record;