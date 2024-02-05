let min = 0
let sec = 0
let hou = 0
let mini = 0
let interval;
let hours = document.querySelector('.hours')
const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')
const milliseconds = document.querySelector('.milliseconds')
const btnStart = document.querySelector('.start')
const btnStop = document.querySelector('.stop')
const btnReset = document.querySelector('.reset')
const btnElapse = document.querySelector('.elapsebtn')
const elapseParent = document.querySelector('.elapseContainer')

// const remElapse = document.querySelector('.elapse')

// removeBtn.addEventListener('click', () => {console.log(remElapse);})

btnStart.addEventListener('click', () => {
    interval = setInterval(startTimer,10);
});

btnStop.addEventListener('click', () => {
    clearInterval(interval)
})

btnReset.addEventListener('click', () => {
    clearInterval(interval)
    mini = 0
    sec = 0
    min = 0
    hou = 0
    milliseconds.innerHTML = '0' + mini
    seconds.innerHTML = '0' + sec
})

btnElapse.addEventListener('click', Elapse)

const startTimer = () => {
    mini++;
    if (mini > 99) {
        mini = 0;
        sec++;
    } 
    if (mini <= 9) {
        milliseconds.innerHTML = "0" + mini;
    } else {
        milliseconds.innerHTML = mini;
    }

    // SECONDS
    if(sec > 59) {
        sec=0
        min++
    }
    if (sec <= 9) {
        seconds.innerHTML = '0' + sec
    } else {
        seconds.innerHTML = sec
    }
    
    //    Minutes 
    if (min > 59) {
        min = 0
        hou++
    }  
    if (min <= 9) {
        minutes.innerHTML = '0' + min
    } else {
        minutes.innerHTML = min;
    }
 
    // HOURS
    if(hou > 23) {
        hou = 0
    }
    if (hou <= 9) {
        hours.innerHTML = '0' + hou
    } else {
        hours.innerHTML = hou
    }
}


function Elapse() {
    const elapse = document.createElement('div')
    const elapseHou = document.createElement('span')
    const elapseMin = document.createElement('span')
    const elapseSec = document.createElement('span')
    const elapseMilli = document.createElement('span')
    const remove = document.createElement('button')

    elapse.setAttribute('class', 'elapse')
    elapseHou.setAttribute('class', 'Hou')
    elapseMin.setAttribute('class', 'Min')
    elapseSec.setAttribute('class', 'Sec')
    elapseMilli.setAttribute('class', 'Milli')
    remove.setAttribute('class', 'remove')

    remove.innerText = 'Remove'
 
    elapseParent.appendChild(elapse)
    elapse.appendChild(elapseHou)
    elapse.appendChild(elapseMin)
    elapse.appendChild(elapseSec)
    elapse.appendChild(elapseMilli)
    elapse.appendChild(remove)
 
    elapseHou.innerHTML = hours.innerHTML + ' : '
    elapseMin.innerHTML =  minutes.innerHTML 
    elapseSec.innerHTML = ' : ' + seconds.innerHTML
    elapseMilli.innerHTML = ' : ' + milliseconds.innerHTML

    remove.addEventListener('click', () => {
        elapse.remove()
        console.log('clicked');
    })
 } 

