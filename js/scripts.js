// program to return User Akan Names based on birthdate;
// requirements: Year of birth, month and day of the month;

function akanName() {
    // call already defined functions
    let dayOfWeek = calDayOfWeek();
    let akanNames = myArrayGen();
    // capture user name
    let userName = document.getElementById("userName").value;

    // check required fields
    if (userName!= ""){

        // create html element to append your output
        let addElement = document.createElement("p");
        let node = document.createTextNode("Hello [" + userName + "] you were born on Day [" +
            dayOfWeek + "] of the week, and your AKAN Name is: [" + akanNames[dayOfWeek] + "]");
        addElement.appendChild(node);
        // append to your output to our created html element id = "output"
        const element = document.getElementById("output");
        element.appendChild(addElement);
    };
}


// A function to return Akan Names array based on user gender
function myArrayGen() {
    // capture user's gender and store it in var gender
    let gender = document.getElementById("gender").value;
    // insert control to return arrays with Akan Names based on gender
    if (gender === "male") {
        myArray = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    }
    else {
        myArray = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    }
    return myArray;
}

// A function to calculate day of the user's birthday
function calDayOfWeek() {
    // capture user input for birthday
    let birthDay = document.getElementById("birthDay").value;
    // slice user birthday to obtain century, year, day & month
    let yearCentury = parseInt(birthDay.slice(0, 2));
    let year = parseInt(birthDay.slice(2, 4));
    let day = parseInt(birthDay.slice(5, 7));
    let month = parseInt(birthDay.slice(8, 10));
    // apply formula to obtain day of the week based on user input birthday
    let dayOfWeek = (((yearCentury / 4) - 2 * yearCentury - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + day) % 7;
    // return an integer value
    return dayOfWeek | 0;
}