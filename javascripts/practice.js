function orderFood(ahad, callback) {
  console.log(ahad + " order ho gaya");

  callback();
}

function delivery() {
  console.log("Food deliver ho gaya 🍔");
}

orderFood("",delivery);
