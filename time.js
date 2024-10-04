const date = new Date();
const timeCall = () => {
    const date = new Date();
    const hoursInput = document.getElementById('hours')
    const minuetsInput = document.getElementById('minuets')
    const SecondsInput = document.getElementById('Seconds')
    const amPm = document.getElementById('am-pm')

    let hours = date.getHours()
    const setAmPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12
    const hoursFormat = String(hours).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const seconds = String(date.getSeconds()).padStart(2, '0')

    hoursInput.innerText = hours
    minuetsInput.innerText = minutes
    SecondsInput.innerText = seconds
    amPm.innerText = setAmPm

}
setInterval(() => {
    timeCall()
}, 1000);



const year = date.getFullYear()
const month = date.getMonth()
const day = date.getDate()
const week = date.getDay();

const dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const dateMonthYear = document.getElementById('date-month-year')
dateMonthYear.innerHTML = `

        <span>${String(dayName[week])}</span> 
        <span>${String(day).padStart(2, '0')}</span> 
        <span>${String(monthName[month])}</span> 
        <span>${year}</span> 

`