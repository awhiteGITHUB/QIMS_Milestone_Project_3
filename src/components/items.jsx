import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import { Link } from "react-router-dom";

function items() {
  const [inventory, setWorkouts] = useState([
    {
      SKU: "",
      Type: "",
      Name: "",
      Location: "",
      Date: "",
      Description: "",
    },
  ]);

  useEffect(() => {
    fetch("/items")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setItems(jsonRes))
      .catch((err) => console.log(err));
  }, [inventory]);

  function deleteItems(id) {
    axios.delete("http://localhost:3001/delete/" + id);
  }

  return (
    <div className="App">
      <Navbar />
      <h1>Inventory Page</h1>
      {inventory.map((items, index) => {
        return (
          <div key={index}>
            <h1>{items.SKU}</h1>
            <p>{items.Type}</p>
            <p>{items.Name}</p>
            <p>{items.Location}</p>
            <p>{items.Date}</p>
            <p>{items.Description}</p>
            {/* <Link to="/edit">
              <button>Edit</button>
            </Link> */}
            <button onClick={() => deleteItems(items._id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default items;






























/*const db = require('../../models/dbconn');

class Item {

    constructor(id, name, sku, inventory) {
        this.id = id;
        this.name = name;
        this.sku = sku;
        this.inventory = inventory;

    }

    
    static inventoryChange(itemid, qty) {
        // needs to remove/add inventory to specific item
        console.log(`This is itemid: ${itemid}`);
        return db.result(`
        UPDATE items
        SET inventory = inventory + ${qty}
        WHERE id=${itemid}
        `)
        
    }
    
    
}

module.exports = Item;