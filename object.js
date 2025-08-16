const hero = {
  name: "ron",
  id: 121,
  address: "movie cinema",
  isSingle: true,
  friends: ["apu", "nap", "sal", "ami"],
  movies: [
    { name: "no 1", year: 2015 },
    { name: "king khan", year: 2018 },
  ],
  act: function () {
    console.log("active like ron");
  },
  car: {
    brand: "tesla",
    price: 5000000,
    made: 2025,
    manufacturer: {
      name: "tesla",
      ceo: "mask",
      country: "usa",
    },
  },
};
console.log(hero.act);
hero.act();



