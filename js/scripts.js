// design user input form
// requirements: Year of birth, month and day of the month
let birthDay = document.getElementById("birthDay").value
let gender = document.getElementById("gender").value
let yearCentury = birthDay.slice(0,4)
let year = birthDay.slice(2,4)
let day = birthDay.slice(5,6)
let month = birthDay.slice(7,8)

console.log(birthDay)