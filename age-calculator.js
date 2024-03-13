const btnE1 =document.getElementById("btn");
const birthdayE1 =document.getElementById("birthday");
const resultE1 =document.getElementById("result");

function calculateAge(){
    
  const birthdayvalue =birthdayE1.value;
if(birthdayvalue === ""){
    alert("please enter your birthday");
}else{
    const age = getAge(birthdayvalue);
    resultE1.innerText = `Your Age is  ${age} ${age > 1 ? "years" : "years"} old`;
}


}

function getAge(birthdayvalue){
    const currentDate = new Date();

    const birthdayDate = new Date(birthdayvalue);
    let age= currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if(month || (month === 0 && currentDate.getDate() < birthdayDate.getDate())){
        age--;
    }

    

    return age;
}




btnE1.addEventListener("click", calculateAge);