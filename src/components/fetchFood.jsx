const getApple = async () => {
    try {
      const response = await fetch("https://api.edamam.com/api/food-database/v2/parser?app_id=05937eba&app_key=7f8c81b2f89b7d71d740c4ba140c9201&ingr=apple&nutrition-type=cooking&category=generic-foods");
      const data = await response.json();
  
      const food = data.parsed[0].food;
      const nutrients = food.nutrients;
      const nutrientsObj = {
          name: food.label,
          servingsize: 100,
        calories: nutrients.ENERC_KCAL,
        protein: nutrients.PROCNT,
        fat: nutrients.FAT,
        carbohydrates: nutrients.CHOCDF,
        fiber: nutrients.FIBTG
      };
  
      return nutrientsObj;
    } catch (error) {
      console.log("Error fetching data:", error);
      throw error;
    }
  };
  
  export default getApple;
  