// program to return User Akan Names based on birthdate;
// requirements: Year of birth, month and day of the month;
function akanName() {
    let dayOfWeek = calDayOfWeek();
    let akanNames = myArrayGen();
    
    let addElement = document.createElement("p");
    let node = document.createTextNode(akanNames[dayOfWeek]);
    addElement.appendChild(node);
    
    const element = document.getElementById("output");
    element.appendChild(addElement);
    console.log(akanNames[dayOfWeek]);
}

// A function to return Akan Names array based on user gender
function myArrayGen(){
    // declare arrays with Akan Names based on gender
    let gender = document.getElementById("gender").value;
    
    if (gender === "male") {
        myArray = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    }
    else {
        myArray = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    }
    return myArray;
}

// A function to calculate day of the user's birthday
function calDayOfWeek() {
    let birthDay = document.getElementById("birthDay").value;
    let yearCentury = parseInt(birthDay.slice(0, 2));
    let year = parseInt(birthDay.slice(2, 4));
    let day = parseInt(birthDay.slice(5, 7));
    let month = parseInt(birthDay.slice(8, 10));
    let dayOfWeek = (((yearCentury / 4) - 2 * yearCentury - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + day) % 7;
    // return an integer value
    return dayOfWeek | 0;
}