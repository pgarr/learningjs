const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true, useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// const fruit = new Fruit({
//     rating: 10,
//     review: "Pretty solid as a fruit."
// });

// fruit.save();

// const kiwi = new Fruit({
//     name: "Kiwi",
//     rating: 7,
//     review: "Pretty solid as a fruit."
// });

// const orange = new Fruit({
//     name: "Orange",
//     rating: 7,
//     review: "Pretty solid as a fruit."
// });

// const banana = new Fruit({
//     name: "Banana",
//     rating: 7,
//     review: "Pretty solid as a fruit."
// });


// Fruit.insertMany([kiwi, orange, banana], function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Succesfully saved all the fruits to fruitDB");
//     }
// });

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

// const person = new Person({
//     name: "John",
//     age: 37
// });

// person.save();

// Person.deleteMany({ name: "John" }, function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("John's deleted!");
//     }
// });

// Fruit.find(function (err, fruits) {
//     if (err) {
//         console.log(err);
//     } else {
//         mongoose.connection.close();

//         fruits.forEach(fruit => {
//             console.log(fruit.name);
//         });
//     }
// });

// Fruit.updateOne({ _id: "5e9bf9c4fdb35133d0b9fe06" }, { name: "Peach" }, function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Succesfully updated the document.");
//     }
// });

// Fruit.deleteOne({ name: "Peach" }, function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Succesfully deleted the document.");
//     }
// });

// const pineapple = new Fruit({
//     name: "Pineapple",
//     score: 9,
//     review: "Great!"
// });

// pineapple.save();

// const person = new Person({
//     name: "Amy",
//     age: 12,
//     favouriteFruit: pineapple
// });

// person.save();

const pear = new Fruit({
    name: "Pear",
    score: 9,
    review: "Great!"
});

pear.save();

Person.updateOne({ name: "John" }, { favouriteFruit: pear }, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("John has favourite fruit!");
    }
})