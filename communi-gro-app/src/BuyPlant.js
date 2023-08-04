import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BuyPlant({ plants }) {
    const navigate = useNavigate();
    const [input, setInput] = useState("");

    function handleGoBack(){
        navigate("/");
    }

    function handleSubmit(){
        if(input.length > 1){
           window.alert("Order made!");
           
        } else {
            window.alert("Kindly Specify your Address")
        }
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='plant_names'>Select a Plant</label>
        <select name='plant_names' id='plant_names'>
        <option value='' disabled>Select a plant...</option>
          {plants.map((plant) => (
            <option key={plant.id} id={plant.id} value={plant.common_name}>
              {plant.common_name}
            </option>
          ))}
        </select>
        <p></p>
        <label htmlFor='plant_quantity'>Quantity</label><br/>
        <input name="plant_quantity" type='number' placeholder='1'/>
        <p></p>
        <label htmlFor='plant_address'>Address</label><br/>
        <input name="plant_adress" type='text' placeholder="adress" onChange={(e) => setInput(e.target.value)}/>
        <p></p>
        <input type='submit' value="Place Order" />
        <button onClick={handleGoBack}>Return to Home Page</button>
      </form>
    </div>
  );
}

export default BuyPlant;
