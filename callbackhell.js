const student_details = () => {
  console.log("student_info");
  setTimeout(() => {
    let roll_nos = [1, 2, 3, 4];
    console.log(roll_nos);
    setTimeout(
      (roll_nos) => {
        const data = { name: "vazi", qualification: "btech" };
        console.log(`name is ${data.name} and 
            qualification is ${data.qualification}
            roll_no is ${data.roll_nos}`);
      },
      2000,
      roll_nos[1]
    );
  }, 2000);
}
student_details();