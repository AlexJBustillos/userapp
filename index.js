//Add all models
const db = require('./models');

//create a user inside of user table
// db.user.create({
//     firstName: 'Billy',
//     lastName: 'Bob',
//     age: '40'
// }).then(createdUser => {
//     console.log(createdUser.get());
// });

//Read from the users table
// db.user.findOne({
//     where: { firstName: 'Alex' }
// }).then(foundUser => {
//     console.log(foundUser.get());
// });

// //Find all users
// db.user.findAll().then(allUsers => {
//     console.log(allUsers);
//     console.log(allUsers[0].get());
// });

//Update a user
// db.user.update({
//     lastName: 'Bobby',
// }, {
//     where: { firstName: 'Billy' }
// }).then(numRowsChanged => {
//     console.log(numRowsChanged);
// });

//delete a user
db.user.destroy({
    where: { lastName: 'Bobby' }
}).then(numRowsDeleted => {
    console.log(numRowsDeleted);
});