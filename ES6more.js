//multi line strings(back tick)
let desc = `vignan lara institute of technology $ science is a private engineering college`;
console.log(desc);
//string interepolation
let firstname="vignan";
let lastname="lara";
console.log(`${firstname} ${lastname}`);
//array destructing
let pnames = ["realme","lg","vivo"];
let [brand1,brand2,brand3]=pnames;
console.log(brand1,brand2,brand3);
console.log(brand1);
console.log(brand2);
console.log(brand3);
//object destructing
const movieinfo={
    moviename:"bahubali",
    director:"rajmouli",
    producer:"shobu"
};
let {moviename,director,producer}=movieinfo;
console.log(moviename);
console.log(director);
console.log(producer);
