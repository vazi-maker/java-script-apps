//Api calling with async-await
const get_details = async () => {
  //request data gathering logic
  let userId = document.getElementById("userid").value;
  let para = document.getElementById("simple");
  let result = document.getElementById("sample");

  if (userid == "") {
    alert("please enter userid.....");
    return;
  }
  para.style.display = "block";
  //business logic
  try {
    const [userresult, postresult] = await Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/users/${user_id}`),
      fetch(`https://jsonplaceholder.typicode.com/posts/${user_id}`),
    ]);
    const userdata = await userresult.json();
    const postdata = await postresult.json();
    console.log(postdata);
    result.innerHTML = `<h3>${userdata.name}</h3>
    <p>${userdata.email}</p>
    <h2>posts:</h2>
    <ul>
    ${postdata.map((item) => `<li>${item.title}</li>`)}
    </ul>`;
  } catch (err) {
    result.innerHTML = "<h3>somthing went wrong.........</h3>";
  }
};
