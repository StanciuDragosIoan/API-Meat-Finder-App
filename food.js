class Food {
    
 
   async getFood(/*foodName*/){
     const foodResponse = await fetch(`https://api.edamam.com/api/food-database/parser?ingr=red%20meat&app_id=33ccb230&app_key=c15794f60cd18e262ffd57b303494108&page=0`);
     const foodData = await foodResponse.json();

     return{
       foodData
	  }
	}
   
 
}

 

