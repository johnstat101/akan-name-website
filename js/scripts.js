// design user input form
// requirements: Year of birth, month and day of the month
function akanName() {
    let birthDay = document.getElementById("birthDay").value;
    let gender = document.getElementById("gender").value;
    let yearCentury = parseInt(birthDay.slice(0, 2));
    let year = parseInt(birthDay.slice(2, 4));
    let day = parseInt(birthDay.slice(5, 7));
    let month = parseInt(birthDay.slice(8,10));
    console.log(day)
}
