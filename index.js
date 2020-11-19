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

// //delete a user
// db.user.destroy({
//     where: { lastName: 'Bobby' }
// }).then(numRowsDeleted => {
//     console.log(numRowsDeleted);
// });

// add pet to user
// db.user.findOne().then((foundUser) => {
//     foundUser.createPet({
//         name: 'Kaida',
//         species: 'Black Cat'
//     })
// })

//get pet from user
// db.user.findOne().then((foundUser) => {
//     foundUser.getPets().then((foundPets) => {
//         console.log(foundPets);
//     })
// })

// get user from pet
// db.pet.findOne({
//     where: {
//         name: 'Kaida'
//     }
// }).then((kaida) => {
//     kaida.getUser().then((foundUser) => {
//         console.log(foundUser);
//     })
// })

//create pet without user
// db.pet.create({
//     name: 'Hercules',
//     species: 'Chow chow'
// }).then((herc) => {
//     console.log(herc);
// })

//add herc to user
// db.pet.findOne({
//     where: {
//         name: 'Hercules'
//     }
// }).then((herc) => {
//     db.user.findOne().then((foundUser) => {
//         herc.setUser(foundUser)
//     })
// })

//create toy
// db.toy.create({
//     type: 'squeaky',
//     color: 'red'
// })

//add toy to pebs
// db.pet.findOne({
//     where: {
//         name: 'Pebs'
//     }
// }).then((pebs) => {
//     db.toy.findOne({
//         where: {
//             color: 'red',
//             type: 'squeaky'
//         }
//     }).then((foundToy) => {
//         pebs.addToy(foundToy)
//     })
// })

//add the same toy to kaida
// db.pet.findOne({
//     where: {
//         name: 'Kaida'
//     }
// }).then((kaida) => {
//     db.toy.findOne({
//         where: {
//             color: 'red',
//             type: 'squeaky'
//         }
//     }).then((foundToy) => {
//         kaida.addToy(foundToy)
//     })
// })

//find all pets that share red squeaky toy
db.toy.findOne({
    where: {
        type: 'squeaky',
        color: 'red'
    }
}).then((foundToy) => {
    foundToy.getPets().then((pets) => {
        //render this to a page instead of console.log "pets"
        console.log(pets);
    })
})