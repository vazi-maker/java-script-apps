//Api calliing with async-await
const post_Info= async()=>{
   try{
  const result = await fetch("https://jsonplaceholder.typicode.com/posts");
const data=await result.json();  
console.log(data); 
}catch(error){
    console.log("error");
   }
};
post_Info();
