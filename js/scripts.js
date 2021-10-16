// design user input form
// requirements: Year of birth, month and day of the month
function akanName() {
    let birthDay = document.getElementById("birthDay").value;
    let gender = document.getElementById("gender").value;
    let yearCentury = parseInt(birthDay.slice(0, 2));
    let year = parseInt(birthDay.slice(2, 4));
    let day = parseInt(birthDay.slice(5, 7));
    let month = parseInt(birthDay.slice(8,10));
    let dayOfWeek = (((yearCentury/4)-2*yearCentury-1)+((5*year/4))+((26*(month+1)/10))+day)%7;
    console.log(dayOfWeek);
};