const mongoose = require("mongoose");
const Recipe = require("./models/Recipe"); // Import of the model Recipe from './models/Recipe'
const data = require("./data.js"); // Import of the data from './data.js'

// Connection to the database "recipeApp"
mongoose
  .connect("mongodb://localhost/recipeApp", { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to Mongo!");
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

// Recipe - empty documentcreation
// Recipe.create({
//   cuisine: "German"
// })
//   .then(document => {
//     console.log(document);
//   })
//   .catch(err => {
//     console.log("ERROR: ", err);
//   });

// Recipe.insertMany(data)
//   .then(document => {
//     console.log(document);
//   })
//   .catch(err => {
//     console.log("ERROR: ", err);
//   });

// Recipe.findByIdAndDelete("5dc53c308a910016b11d4ccd").then(document => {
//   console.log(document);
// });
/*   {_id: "5dc53c308a910016b11d4cce"},
  {_id: "5dc53c308a910016b11d4ccf"},
  {_id: "5dc53c308a910016b11d4cd0"},
  {_id: "5dc53c308a910016b11d4cd1"} */
// Recipe.deleteMany({
//   _id: "5dc53c308a910016b11d4cce",
// }).then(document => {
//   console.log(document);
// });
// Recipe.find().then(document => {
//   document.forEach(el => {
//     console.log(el.title);
//   });
// });

// Recipe.updateOne({ title: "Rigatoni alla Genovese" }, { duration: 100 })
//   .then(response => {
//     console.log("succesfull UPDATE!");
//   })
//   .catch(err => {
//     console.log(err);
//   });

/* Recipe.deleteOne({ title: "Carrot Cake" }).then(() => {
  console.log("deleted Carrotcake!!");
}); */

mongoose.connection.close();
// .then(() => {
//   console.log("Connected CLOSED!");
// })
// .catch(err => {
//   console.error("Error connecting to mongo", err);
// });;
