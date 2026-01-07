// async await logic
const movieRating = () => {
 return new Promise((resolve, reject) => {
  let rating = 4.5;
  if (rating > 4) {
    resolve("good movie");
  } else {
    resolve("waste of our time");
  }
})};
//how to call promise with async avoid
const movieResult = async () => {
  try {
    let result = await movieRating();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
movieResult();
