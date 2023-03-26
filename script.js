let value = '0'
let number = document.querySelector('section')
const buttons = document.querySelectorAll('button')

const add = (n) => {
    let length = value.length
    if (value == 0) {
        if (typeof(n) === 'number') {
            value = ''
            value = String(n)
            return number.innerHTML = value
        }
    }
    value = value + n
    number.innerHTML = value
}


const operator = (n) => {
    let lastIndex = value.length - 1
    if (isNaN(Number(value[lastIndex])) === true) {
        if (lastIndex > 0) {
            value = String(value).slice(0, value.length - 1)
        }
        value = value + n
        number.innerHTML = value 
        console.log('atas')
    } else {
        value = value + n
        number.innerHTML = value
        console.log('bawah')
    }
}

const calculate = (fn) => {
    return Function('return ' + fn)()
}
buttons[0].addEventListener('click',() => {
    value = 0
    number.innerHTML = 0
})
buttons[1].addEventListener('click',() => {
    if (value <= 9) {
        value = 0

    } else {
        value = String(value).slice(0, value.length - 1)
    }
    number.innerHTML = value
    
})
buttons[2].addEventListener('click',() => {
    operator('%')
})
buttons[3].addEventListener('click',() => {
    operator('/')
})
buttons[4].addEventListener('click',() => {
    add(7)
})
buttons[5].addEventListener('click',() => {
    add(8)
})
buttons[6].addEventListener('click',() => {
    add(9)
})
buttons[7].addEventListener('click',() => {
    operator('*')
})
buttons[8].addEventListener('click',() => {
    add(4)
})
buttons[9].addEventListener('click',() => {
    add(5)
})
buttons[10].addEventListener('click',() => {
    add(6)
})
buttons[11].addEventListener('click',() => {
    operator('-')
})
buttons[12].addEventListener('click',() => {
    add(1)
})
buttons[13].addEventListener('click',() => {
    add(2)
})
buttons[14].addEventListener('click',() => {
    add(3)
})
buttons[15].addEventListener('click',() => {
    operator('+')
})
buttons[16].addEventListener('click',() => {
    add()
})
buttons[17].addEventListener('click',() => {
    add(0)
})
buttons[18].addEventListener('click',() => {
    operator('.')
})
buttons[19].addEventListener('click',() => {
    value = calculate(value)
    number.innerHTML = value
})
