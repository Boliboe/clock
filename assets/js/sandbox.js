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
        year = date.getFullYear()

        if(hh >= 12){
            hh = hh - 12
            ampm = 'PM'
        }else{
            ampm = 'AM'
        }
        if(hh == 0){hh = 12}

if(hh < 10){hh = `0${hh}`}

textHour.innerHTML = `${hh}:`

if (mm < 10){mm = `0${mm}`}

textMinutes.innerHTML = mm

textAmPm.innerHTML = ampm

let months = ['January','February','March','April','May','June','July','August','September','October','November','December']


dateDay.innerHTML = day
dateMonth.innerHTML = `${months[month]}`
dateYear.innerHTML = year
}

setInterval(clockText, 1000)

// DARK LIGHT THEME CHANGE
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme){
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark theme
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () =>{
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // we save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})