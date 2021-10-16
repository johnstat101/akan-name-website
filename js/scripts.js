// design user input form
// requirements: Year of birth, month and day of the month
function akanName() {
    let dayOfWeek = calDayOfWeek();
    let akanNames = myArrayGen();
    console.log(akanNames[dayOfWeek]);
}

function myArrayGen(){
    let gender = document.getElementById("gender").value;
    var myArray = [];
    if (gender === "male") {
        myArray = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    }
    else {
        myArray = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    }
    return myArray;
}


function calDayOfWeek() {
    let birthDay = document.getElementById("birthDay").value;
    let yearCentury = parseInt(birthDay.slice(0, 2));
    let year = parseInt(birthDay.slice(2, 4));
    let day = parseInt(birthDay.slice(5, 7));
    let month = parseInt(birthDay.slice(8, 10));
    let dayOfWeek = (((yearCentury / 4) - 2 * yearCentury - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + day) % 7;
    return dayOfWeek | 0;
}