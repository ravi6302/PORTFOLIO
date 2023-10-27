
const time = document.getElementById("time");

const weeks = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
const months = ["Janu", "Feb", "Mar", "Appr", "May", "June", "Julay", "Aug", "Sep", "Oct", "Nov", "Dec"];
const date = new Date();
const week = date.getDay(); //it has 0 index because today sunday.  the index value is changesd based on current day; it displays the index position of the days
console.log(weeks[week]); //here we just asking the index number position contained the value like weeks[5] week=5 we storing the index value in the week variable.

const month = date.getMonth(); //it displays the index position of months
console.log(months[month]);
const Dates = date.getDate();
console.log(Dates);
const year = date.getFullYear();
console.log(year);
const sentence = `${weeks[week]}, ${months[month]} ${Dates} ${year}`;
console.log(sentence);
time.innerHTML = `${sentence}`;
