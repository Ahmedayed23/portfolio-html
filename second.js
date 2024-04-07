const students=["yessin","raslen","omar","hayfa"];
console.log(students[1]);
const person={
    firstName:"joe",
    lastName:"doe",
    tel:23466789,

};
console.log(person.tel);
const studentsInfo=[
    {
        name:"jane",
        tel:12354665
    },
    {
        name:"jack",
        tel:16883665
    },
];
console.log(studentsInfo[0].name + "'s phone number is" + studentsInfo[0].tel);
console.log(studentsInfo[1].name + "'s phone number is" + studentsInfo[1].tel);
for (let i=0 ; i<studentsInfo.length;i++){
    console.log(
        studentsInfo[i].name + "'s phone number is" + studentsInfo[i].tel;
    );
}

