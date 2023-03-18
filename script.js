let food = {
    plainBurger: {
        name: 'GAMBURGER',
        price: 10000,
        amount: 0,
        kcall: 500,
        get calcSum(){
            return this.price * this.amount
        },
        get caclKcall(){
            return this.kcall * this.amount
        }

    },
    freshBurger: {
        name: 'GAMBURGER FRESH',
        price: 20500,
        amount: 0,
        kcall: 650,
        get calcSum(){
            return this.price * this.amount
        },
        get caclKcall(){
            return this.kcall * this.amount
        }

    },
    freshCombo: {
        name: 'GAMBURGER COMBO',
        price: 31900,
        amount: 0,
        kcall: 700,
        get calcSum(){
            return this.price * this.amount
        },
        get caclKcall(){
            return this.kcall * this.amount
        }

    },

}

let btn = [...document.querySelectorAll('.main__product-btn')]
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click',function(){
        prapere(this)
    })
}

function prapere (item){
    let parent = item.closest('.main__product')
    let parentId = parent.getAttribute('id')
    let num = parent.querySelector('.main__product-num')
    let price = parent.querySelector('.main__product-price span')
    let kcall = parent.querySelector('.main__product-kcall span')
    let sym = item.getAttribute('data-symbol')
    let count = food[parentId].amount
    console.log(count);

    if(sym == '+'){
        count++
    }else if(sym == '-' && count > 0){
        count--
    }

    food[parentId].amount = count
    num.innerHTML = count

    price.innerHTML = food[parentId].calcSum
    kcall.innerHTML = food[parentId].caclKcall
}

let reciept = document.querySelector('.receipt')
let recieptWindow = reciept.querySelector('.receipt__window')
let recieptWindowOut = reciept.querySelector('.receipt__window-out')
let recieptWindowBtn = reciept.querySelector('.receipt__window-btn')
let addCart = document.querySelector('.addCart')

addCart.addEventListener('click',() => {
    reciept.style.display = 'block'
    setTimeout(() => {
        reciept.style.opacity = '1'
        recieptWindow.style.transition = '.5s'
        
    }, 100);

    let menu = 'Your Cart: \n\n'

    let totalPrice = 0
    let totalKcall = 0

    recieptWindow.style.top = '25%'

    for (const key in food) {
       if(food[key].amount){
        menu = menu + `${food[key].name} ${food[key].amount}x ${food[key].price} = ${food[key].calcSum}\n`
        totalPrice = totalPrice + food[key].calcSum
        totalKcall = totalKcall + food[key].caclKcall
       }
    }

    recieptWindowOut.innerHTML = `${menu} \nTotal price: ${totalPrice} sum \nTotal kcall: ${totalKcall} calories`
})

recieptWindowBtn.addEventListener('click',function(){
    location = 'https://click.uz/ru'
})