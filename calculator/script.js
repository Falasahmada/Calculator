let realValue = 0
let count = 0
let key
const buttons = document.querySelectorAll('button')




buttons.forEach((button) => {
    button.addEventListener('mouseleave', () => (
        button.style.transition = '200ms'
    ))
})
const refresh = () => {
    document.querySelector('.value').innerHTML = realValue
}
const change = (x) => {
    if (realValue == 0) {
        realValue = ''
        document.querySelector('.value').innerHTML = realValue
    }
    realValue = realValue + x
    key = x
    refresh()
}

const add = (x) => {
    if (typeof key === 'string') {
        realValue = String(realValue).slice(0, realValue.length - 1)
        realValue = realValue += x
        key = x
        refresh()
    } else {
        realValue = realValue += x
        key = x
        refresh()
    }
}
const calculate = (fn) => {
    return Function('return ' + fn)()
}
buttons[0].addEventListener('click',() => {
    realValue = 0
    refresh()
})
buttons[1].addEventListener('click',() => {
    if (realValue <= 9) {
        realValue = '0'
        console.log(realValue)

    } else {
        realValue = String(realValue).slice(0, realValue.length - 1)
        console.log(realValue)
    }
    refresh()
    
})
buttons[2].addEventListener('click',() => {
    add('%')
})
buttons[3].addEventListener('click',() => {
    add('/')
})
buttons[4].addEventListener('click',() => {
    change(7)
})
buttons[5].addEventListener('click',() => {
    change(8)
})
buttons[6].addEventListener('click',() => {
    change(9)
})
buttons[7].addEventListener('click',() => {
    add('*')
})
buttons[8].addEventListener('click',() => {
    change(4)
})
buttons[9].addEventListener('click',() => {
    change(5)
})
buttons[10].addEventListener('click',() => {
    change(6)
})
buttons[11].addEventListener('click',() => {
    add('-')
})
buttons[12].addEventListener('click',() => {
    change(1)
})
buttons[13].addEventListener('click',() => {
    change(2)
})
buttons[14].addEventListener('click',() => {
    change(3)
})
buttons[15].addEventListener('click',() => {
    add('+')
})
buttons[16].addEventListener('click',() => {
    
})
buttons[17].addEventListener('click',() => {
    change(0)
})
buttons[18].addEventListener('click',() => {
    change('.')
})
buttons[19].addEventListener('click',() => {
    realValue = calculate(realValue)
    refresh()
})