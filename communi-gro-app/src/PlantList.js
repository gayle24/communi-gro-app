import React from 'react'

function PlantList({plants}) {
    // const[plantimage, setPlantImage] = useState("")
    // console.log(plants)
    
   
    const disp = plants.map(plant=>{

        // console.log(Object.keys(plant) );
            if(plant.default_image){
                // console.log("No image")
                // console.log(plant.default_image.small_url)
                // plantImage = (plant.default_image.small_url)
                plant.plantImage = plant.default_image.small_url
            }
            else{
                plant.plantImage = "https://mendocinomaples.com/wp-content/uploads/2019/12/Screen-Shot-2019-12-04-at-8.48.08-PM-247x371.png"
            }
            // console.log(plant)
        
    })

  return (
    <div className='mainlist'>
        {plants.map(plant=>(
            <div className="innerlist" key={plant.id}>
                <h4>{plant.common_name}</h4>
                <img src={plant.plantImage} alt={plant.common_name}/>
                <p>Scientific name: {plant.scientific_name}</p>
                <p>Other name: {plant.other_name[0]} | {plant.other_name[1]}
                </p>
                <p>Cycle: {plant.cycle}</p>
                <p>Watering: {plant.watering}</p>
                <p>Sunlight: {plant.sunlight[0]} | {plant.sunlight[1]} | {plant.sunlight[2]}</p>
                <button>Order Seedlings</button>
            </div>
        ))}
        <p>Plant list</p>
    </div>
  )
}

export default PlantList;