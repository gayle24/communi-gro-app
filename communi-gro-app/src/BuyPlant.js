import React from 'react';

function BuyPlant({ plants }) {
  return (
    <div>
      <form>
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
        <input name="plant_quantity" type='number' />
        <p></p>
        <label htmlFor='plant_address'>Address</label><br/>
        <input name="plant_adress" type='text' placeholder="adress" />
        <p></p>
        <input type='submit' value="Place Order" />
      </form>
    </div>
  );
}

export default BuyPlant;
