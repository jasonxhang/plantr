const {db, Gardener, Plot, Vegetable} = require('./models.js');




Vegetable.create({
  name: 'carrot',
  color: 'orange',
  planted_on: '2012-11-25'
})
.then((veg) => {
  return Gardener.create({
    name: "John",
    age: 2,
    favoriteVegetableId: veg.id
  })
})
.then((gardener) => {
  return Plot.create({
    size: 51,
    shaded: false,
    gardenerId: gardener.id
  })
});


Vegetable.create({
  name: 'broccoli',
  color: 'green',
  planted_on: '1952-12-21'
})
.then((veg) => {
  return Gardener.create({
    name: "Peter",
    age: 3,
    favoriteVegetableId: veg.id
  })
})
.then((gardener) => {
  return Plot.create({
    size: 51,
    shaded: false,
    gardenerId: gardener.id
  })
});

Vegetable.create({
  name: 'string beans',
  color: 'yellow',
  planted_on: '1900-01-01'
})
.then((veg) => {
  return Gardener.create({
    name: "Lucas",
    age: 89,
    favoriteVegetableId: veg.id
  })
})
.then((gardener) => {
  return Plot.create({
    size: 51,
    shaded: false,
    gardenerId: gardener.id
  })
});

Vegetable.create({
  name: 'spinach',
  color: 'green',
  planted_on: '2018-09-24'
})
.then((veg) => {
  return Gardener.create({
    name: "Sarah",
    age: 75,
    favoriteVegetableId: veg.id
  })
})
.then((gardener) => {
  return Plot.create({
    size: 51,
    shaded: false,
    gardenerId: gardener.id
  })
})

// const PlotVegetable = db.model('vegetable_plot')

// PlotVegetable.create({
//   vegetableId: 1,
//   plotId: 3
// })




db.sync()
.then(() => {
  console.log("Database synced.")
  db.close()
})
.catch(err => {
  console.log("Error!", err)
  db.close()
})




