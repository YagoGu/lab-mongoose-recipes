const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb+srv://YagoGu:12345@cluster0.o829aei.mongodb.net/MyFirstDatabase';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })
  .then(async () => {
    // Run your code here, after you have insured that the connection was made
    //Iteration 2
    Recipe.create({
      title: "Creamy Garlic Parmesan Pasta",
      level: "Easy Peasy",
      ingredients: [
        "8 oz (225g) fettuccine pasta (or any pasta of your choice)",
        "3 tablespoons butter",
        "4 cloves garlic, minced",
        "1 cup heavy cream",
        "1 cup grated Parmesan cheese",
        "Salt and pepper to taste",
        "Fresh parsley, chopped (optional, for garnish)"
      ],
      cuisine: "Italian",
      dishType: "main_course",
      duration: 20,
      creator: "Your mom"}
    )
    
    //iteration 3
    await Recipe.insertMany(data)
    
    //iteration 4
    await Recipe.findOneAndUpdate({title : "Rigatoni alla Genovese"}, {duration : 100}, {new : true})

    //iteration 5
    await Recipe.deleteOne({ title: "Carrot Cake" })

    //iteration 6
    await mongoose.connection.close()
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  })
