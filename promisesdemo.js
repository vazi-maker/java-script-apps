// promises logic in js
//  const movieRating= new Promise((resolve, reject) => {
//     let rating=3;
//     if(rating>4){
//         resolve("Movie is good");
//     } else {
//         reject("Movie is bad");
//     }
// });
// //call promises
// movieRating.then((result)=>{
//      console.log(result);
// }).catch((result)=>{
//     console.log(result);
// });

// //promisedemo1
// const bubblegame = new Promise((reslove, reject) => {
//   const number = Math.floor(Math.random() * 10) + 1;
//   if (number >= 5) {
//     reslove("high score");
//   } else {
//     reject("low score");
//   }
// });
// bubblegame
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((result) => {
//     console.log(result);
//   });

//promises chaining
//Promises chaining
const ticketBooking = () => {
  return new Promise((resolve, reject) => {
    resolve("Ticket booked.");
  });
};
const popcorn = (msg) => {
  return new Promise((resolve, reject) => {
    resolve(msg + "Buy Popcorn.");
  });
};
const coke = (msg) => {
  return new Promise((resolve, reject) => {
    resolve(msg + "Get Coke.");
  });
};
ticketBooking()
  .then((result) => {
    return popcorn(result);
  })
  .then((result) => {
    return coke(result);
  })
  .then((result) => {
    console.log("Wanna go to Movie." + result);
  })
  .catch((error) => {
    console.log(error);
  });
