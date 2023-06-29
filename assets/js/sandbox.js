// clock
const hour = document.getElementById('clock-hour'),
      minutes = document.getElementById('clock-minutes'),
      seconds = document.getElementById('clock-seconds')

const clock = () =>{
    let date = new Date()

    let hh = date.getHours() * 30,
            mm = date.getMinutes() * 6,
            ss = date.getSeconds() * 6

            // add rotation of clock elements
            hour.style.transform = `rotateZ(${hh + mm / 12}deg)`
            minutes.style.transform = `rotateZ(${mm}deg)`
            seconds.style.transform = `rotateZ(${ss}deg)`

        }

setInterval(clock, 1000)


// clock and date text
const textHour = document.getElementById('text-hour'),
      textMinutes = document.getElementById('text-minutes'),
      textAmPm = document.getElementById('text-ampm'),
      dateDay = document.getElementById('date-day'),
      dateMonth = document.getElementById('date-month'),
      dateYear = document.getElementById('date-year')

const clockText = () =>{
    let date = new Date()

    let hh = date.getHours(),
        mm = date.getMinutes(),
        ampm,
        day = date.getDate(),
        month = date.getMonth(),
        year = date.getFullYear
}



textHour.innerHTML = `${hh}`

setInterval(clockText, 1000)