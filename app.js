class Food {
    
 
  async getFood(/*foodName*/){
    const foodResponse = await fetch(`https://api.edamam.com/api/food-database/parser?ingr=red%20meat&app_id=33ccb230&app_key=c15794f60cd18e262ffd57b303494108&page=0`);
    const foodData = await foodResponse.json();

    return{
      foodData
   }
 }
  

}



//select event trigger
const searchFood = document.getElementById('searchFood');

//instantiate food class
const food = new Food();

//search series event listener
searchFood.addEventListener('change', (e)=>{
   
  let option = document.getElementById('searchFood');
  
    if(option.value === "Duck Meat"){
        food.getFood()
      .then(data =>{
     
           console.log(data.foodData.hints);
           
      

         document.getElementById('foodOutput').innerHTML = `
        <div class="card bg-light text-dark">

          <div class="card-header bg-info text-white ">
          <h1>Duck Meat</h1>
          </div>

          <div class="text-align: center">
            <h2>Calories and macros per 100g:</h2>
            <h3>Calories: ${data.foodData.hints[10].food.nutrients.ENERC_KCAL}</h3>
            <h3>Protein: ${data.foodData.hints[10].food.nutrients.PROCNT}</h3>
            <h3>Fat: ${data.foodData.hints[10].food.nutrients.FAT}</h3>
          </div>
        </div>
        `
         
        // }
      })

    } else if (option.value === "Stew Meat") {
      food.getFood()
      .then(data =>{
         
        document.getElementById('foodOutput').innerHTML = `
        <div class="card bg-light text-dark">

          <div class="card-header bg-info text-white ">
          <h1>Beef Hotdog</h1>
          </div>

          <div class="text-align: center">
            <h2> Calories and macros per 100g:</h2>
            <h3>Calories: ${data.foodData.hints[5].food.nutrients.ENERC_KCAL}</h3>
            <h3>Protein: ${data.foodData.hints[5].food.nutrients.PROCNT}</h3>
            <h3>Fat: ${data.foodData.hints[5].food.nutrients.FAT}</h3>
           
          </div>
        </div>
         `
      })
    } else if (option.value === "Goat Meat") {
      food.getFood()
      .then(data =>{
         
        document.getElementById('foodOutput').innerHTML = `
        <div class="card bg-light text-dark">

          <div class="card-header bg-info text-white ">
          <h1>Goat Meat</h1>
          </div>

          <div class="text-align: center">
            <h2> Calories and macros per 100g:</h2>
            <h3>Calories: ${data.foodData.hints[2].food.nutrients.ENERC_KCAL}</h3>
            <h3>Protein: ${data.foodData.hints[2].food.nutrients.PROCNT}</h3>
            <h3>Fat: ${data.foodData.hints[2].food.nutrients.FAT}</h3>
            
          </div>
        </div>
         `
      })
    } else if (option.value === "Beef Hotdog") {
      food.getFood()
      .then(data =>{
         
        document.getElementById('foodOutput').innerHTML = `
        <div class="card bg-light text-dark">

          <div class="card-header bg-info text-white ">
          <h1>Beef Hotdog</h1>
          </div>

          <div class="text-align: center">
            <h2>Calories and macros per 100g:</h2>
            <h3>Calories: ${data.foodData.hints[2].food.nutrients.ENERC_KCAL}</h3>
            <h3>Protein: ${data.foodData.hints[2].food.nutrients.PROCNT}</h3>
            <h3>Fat: ${data.foodData.hints[2].food.nutrients.FAT}</h3>
             
          </div>
        </div>
         `
      })
    } else if (option.value === "") {
      food.getFood()
      .then(data =>{
         
        document.getElementById('foodOutput').innerHTML = '';
      })
    }  else if (option.value === "Chipolata") {
      food.getFood()
      .then(data =>{
         
        document.getElementById('foodOutput').innerHTML = `
        <div class="card bg-light text-dark">

          <div class="card-header bg-info text-white ">
          <h1>Chipolata</h1>
          </div>

          <div class="text-align: center">
            <h2>Calories and macros per 100g:</h2>
            <h3>Calories: ${data.foodData.hints[5].food.nutrients.ENERC_KCAL}</h3>
            <h3>Protein: ${data.foodData.hints[5].food.nutrients.PROCNT}</h3>
            <h3>Fat: ${data.foodData.hints[5].food.nutrients.FAT}</h3>
             
          </div>
        </div>
         `
      })
    } else if (option.value === "Chipolata") {
      food.getFood()
      .then(data =>{
         
        document.getElementById('foodOutput').innerHTML = `
        <div class="card bg-light text-dark">

          <div class="card-header bg-info text-white ">
          <h1>Chipolata</h1>
          </div>

          <div class="text-align: center">
            <h2>Calories and macros per 100g:</h2>
            <h3>Calories: ${data.foodData.hints[5].food.nutrients.ENERC_KCAL}</h3>
            <h3>Protein: ${data.foodData.hints[5].food.nutrients.PROCNT}</h3>
            <h3>Fat: ${data.foodData.hints[5].food.nutrients.FAT}</h3>
             
          </div>
        </div>
         `
      })
    } else if (option.value === "Flap Steak") {
      food.getFood()
      .then(data =>{
         
        document.getElementById('foodOutput').innerHTML = `
        <div class="card bg-light text-dark">

          <div class="card-header bg-info text-white ">
          <h1>Flap Steak</h1>
          </div>

          <div class="text-align: center">
            <h2>Calories and macros per 100g:</h2>
            <h3>Calories: ${data.foodData.hints[7].food.nutrients.ENERC_KCAL}</h3>
            <h3>Protein: ${data.foodData.hints[7].food.nutrients.PROCNT}</h3>
            <h3>Fat: ${data.foodData.hints[7].food.nutrients.FAT}</h3>
             
          </div>
        </div>
         `
      })
    } else if (option.value === "Rabbit Meat") {
      food.getFood()
      .then(data =>{
         
        document.getElementById('foodOutput').innerHTML = `
        <div class="card bg-light text-dark">

          <div class="card-header bg-info text-white ">
          <h1>Rabbit Meat</h1>
          </div>

          <div class="text-align: center">
            <h2>Calories and macros per 100g:</h2>
            <h3>Calories: ${data.foodData.hints[8].food.nutrients.ENERC_KCAL}</h3>
            <h3>Protein: ${data.foodData.hints[8].food.nutrients.PROCNT}</h3>
            <h3>Fat: ${data.foodData.hints[8].food.nutrients.FAT}</h3>
             
          </div>
        </div>
         `
      })
    } else if (option.value === "Moose Meat") {
      food.getFood()
      .then(data =>{
         
        document.getElementById('foodOutput').innerHTML = `
        <div class="card bg-light text-dark">

          <div class="card-header bg-info text-white ">
          <h1>Moose Meat</h1>
          </div>

          <div class="text-align: center">
            <h2>Calories and macros per 100g:</h2>
            <h3>Calories: ${data.foodData.hints[9].food.nutrients.ENERC_KCAL}</h3>
            <h3>Protein: ${data.foodData.hints[9].food.nutrients.PROCNT}</h3>
            <h3>Fat: ${data.foodData.hints[9].food.nutrients.FAT}</h3>
             
          </div>
        </div>
         `
      })
    } else if (option.value === "Pork Meat") {
      food.getFood()
      .then(data =>{
         
        document.getElementById('foodOutput').innerHTML = `
        <div class="card bg-light text-dark">

          <div class="card-header bg-info text-white ">
          <h1>Pork Meat</h1>
          </div>

          <div class="text-align: center">
            <h2>Calories and macros per 100g:</h2>
            <h3>Calories: ${data.foodData.hints[11].food.nutrients.ENERC_KCAL}</h3>
            <h3>Protein: ${data.foodData.hints[11].food.nutrients.PROCNT}</h3>
            <h3>Fat: ${data.foodData.hints[11].food.nutrients.FAT}</h3>
             
          </div>
        </div>
         `
      })
    } else if (option.value === "Deer Meat") {
      food.getFood()
      .then(data =>{
         
        document.getElementById('foodOutput').innerHTML = `
        <div class="card bg-light text-dark">

          <div class="card-header bg-info text-white ">
          <h1>Deer Meat</h1>
          </div>

          <div class="text-align: center">
            <h2>Calories and macros per 100g:</h2>
            <h3>Calories: ${data.foodData.hints[13].food.nutrients.ENERC_KCAL}</h3>
            <h3>Protein: ${data.foodData.hints[13].food.nutrients.PROCNT}</h3>
            <h3>Fat: ${data.foodData.hints[13].food.nutrients.FAT}</h3>
             
          </div>
        </div>
         `
      })
    } else if (option.value === "Veal Meat") {
      food.getFood()
      .then(data =>{
         
        document.getElementById('foodOutput').innerHTML = `
        <div class="card bg-light text-dark">

          <div class="card-header bg-info text-white ">
          <h1>Veal Meat</h1>
          </div>

          <div class="text-align: center">
            <h2>Calories and macros per 100g:</h2>
            <h3>Calories: ${data.foodData.hints[14].food.nutrients.ENERC_KCAL}</h3>
            <h3>Protein: ${data.foodData.hints[14].food.nutrients.PROCNT}</h3>
            <h3>Fat: ${data.foodData.hints[14].food.nutrients.FAT}</h3>
             
          </div>
        </div>
         `
      })
    } else if (option.value === "Burger Meat") {
      food.getFood()
      .then(data =>{
         
        document.getElementById('foodOutput').innerHTML = `
        <div class="card bg-light text-dark">

          <div class="card-header bg-info text-white ">
          <h1>Burger Meat</h1>
          </div>

          <div class="text-align: center">
            <h2>Calories and macros per 100g:</h2>
            <h3>Calories: ${data.foodData.hints[15].food.nutrients.ENERC_KCAL}</h3>
            <h3>Protein: ${data.foodData.hints[15].food.nutrients.PROCNT}</h3>
            <h3>Fat: ${data.foodData.hints[15].food.nutrients.FAT}</h3>
             
          </div>
        </div>
         `
      })
    } else if (option.value === "Hen Meat") {
      food.getFood()
      .then(data =>{
         
        document.getElementById('foodOutput').innerHTML = `
        <div class="card bg-light text-dark">

          <div class="card-header bg-info text-white ">
          <h1>Hen Meat</h1>
          </div>

          <div class="text-align: center">
            <h2>Calories and macros per 100g:</h2>
            <h3>Calories: ${data.foodData.hints[17].food.nutrients.ENERC_KCAL}</h3>
            <h3>Protein: ${data.foodData.hints[17].food.nutrients.PROCNT}</h3>
            <h3>Fat: ${data.foodData.hints[17].food.nutrients.FAT}</h3>
             
          </div>
        </div>
         `
      })
    } else if (option.value === "Cured Meat") {
      food.getFood()
      .then(data =>{
         
        document.getElementById('foodOutput').innerHTML = `
        <div class="card bg-light text-dark">

          <div class="card-header bg-info text-white ">
          <h1>Cured Meat</h1>
          </div>

          <div class="text-align: center">
            <h2>Calories and macros per 100g:</h2>
            <h3>Calories: ${data.foodData.hints[19].food.nutrients.ENERC_KCAL}</h3>
            <h3>Protein: ${data.foodData.hints[19].food.nutrients.PROCNT}</h3>
            <h3>Fat: ${data.foodData.hints[19].food.nutrients.FAT}</h3>
             
          </div>
        </div>
         `
      })
    }


 
   
    
    
    


 
});


/*
//search series event listener
searchFood.addEventListener('onchange', (e)=>{
  const foodName = e.target.value;
  if(foodName !== ''){
    //make http call
    food.getFood(foodName)
    .then(data =>{
  //  if(data.profile.message === "Not Found"){
        //show alert
     //  }else{
        //show  food info
        console.log(data);
        
     // }
    })
  } else {
    //clear series
    
  }
});

*/