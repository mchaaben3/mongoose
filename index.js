const mongoose = require('mongoose')
const Person = require('./Models/PersonSchema')
mongoose.connect('mongodb+srv://user:user@workshopcluster.yafpo.mongodb.net/test',(err)=>{
    if(err) throw err;

    console.log('Database Connected')
})

/* //Create and Save a Record of a Model:
let msg = new Person({
    name: 'Mahdi',
    age: 5,
    favoriteFoods: ['gateau']
})
msg.save(function (err, persons) {
    if (err) {
        console.log("Failed");
    } else {
        console.log("Saved Successful");
        console.log(persons);
    }
});
//Create Many Records with model.create()
const arrayOfPeople = [
    { name: "Malek", age: 24, favoriteFoods: ["burrito"] },
    { name: "Mohamed", age: 26, favoriteFoods: ["roast", "chicken","burrito"] },
    { name: "Salma", age: 31, favoriteFoods: ["Frites"] },
    { name: "Ayoub", age: 18, favoriteFoods: ["Frites","burrito","pizza"] },
  ];
  
 
    Person.create(arrayOfPeople, (err, persons) => {
        if (err) {
            console.log("Failed");
        } else {
            console.log("Saved Successful");
            console.log(persons);
        }
    });
 */
//Use model.find() to Search Your Database

Person.find({ name: 'Mahdi' }, (err, persons) => {
    if (err) {
        console.log("Failed");
    } else {
        console.log("recherche reussi");
        console.log(persons);
    }
  });

//Use model.findOne() to Return a Single Matching Document from Your Database    

  Person.findOne({ age: 5}, (err, persons) => {
    if (err) {
        console.log("Failed");
    } else {
        console.log("recherche reussi");
        console.log(persons);
    }
  });   

//Use model.findById() to Search Your Database By _id      

Person.findById('610ebc6666e77e03f0ebbccb', (err, persons) =>{
if (err) {
    console.log("Failed");
} else {
    console.log("recherche reussi");
    console.log(persons);
}
}

);

//Perform Classic Updates by Running Find, Edit, then Save

const foodToAdd = "hamburger";
Person.findById('610ebc6666e77e03f0ebbccb', (err, data) => {
if (err) return console.log(err);
data.favoriteFoods.push(foodToAdd);
data.save((err, persons) =>
{
    if (err) {
        console.log("Failed");
    } else {
        console.log("update successful");
        console.log(persons);
    }
 }
);
});

// Perform New Updates on a Document Using model.findOneAndUpdate()

Person.findOneAndUpdate(
{ name: 'Mahdi' },
{ $set: { age: 20 } },
{ new: true },
(err, persons) => {
    if (err) {
        console.log("Failed");
    } else {
        console.log("update successful");
        console.log(persons);
    }
 });
 
// Delete One Document Using model.findByIdAndRemove

 Person.findByIdAndRemove('610ebc6666e77e03f0ebbccd', (err, persons) =>
 {
     if (err){
         console.log('failed')
     }
     else{
         console.log('delete succesful');
         console.log(persons);
     }

 }
);   

//MongoDB and Mongoose - Delete Many Documents with model.remove()

const nameToRemove = "Mahdi";
Person.remove({ name: nameToRemove }, (err, persons) =>
{
if (err){
    console.log('failed')
}
else{
    console.log('delete succesful');
    console.log(persons);
}

}
);

//Chain Search Query Helpers to Narrow Search Results   

const foodToSearch = "burrito";
Person.find({ favoriteFoods: foodToSearch })
 .sort({ name: 1 })
 .limit(2)
 .select({ age: 0 })
 .exec((err, persons) =>
 {
    if (err){
        console.log('failed')
    }
    else{
        console.log('query succesful');
        console.log(persons);
    }

}
 );   