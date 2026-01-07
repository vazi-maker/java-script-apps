//bindmethod
const movieInfo = {
  movieDetails: function () {
    return this.heroName + " " + this.villianName;
  },
};
const pushpa = {
  heroName: "Allu Arjun",
  villianName: "fahad fasil",
};
let res = movieInfo.movieDetails.bind(pushpa);
console.log(res());
