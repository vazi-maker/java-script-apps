const sInfo={
    sDetails:function (qualification,phnNumber) {
      return this.roolNo+ " " + this.name + " " + qualification + " " + phnNumber;         
    },
};
const stu = {
     roolNo:19,
     name:"shaik vazirunnisa",
};
console.log(sInfo.sDetails.apply(stu,["Btech",1234568789]));
