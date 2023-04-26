let cardsName = ['Apple', 'Cabbage', 'Cucumber', 'Flower', 'Tomato', 'Banana', 'Potato','Carrot']
cardsName = [...cardsName, ...cardsName]
cardsName = cardsName.sort(function(){
    return Math.random() - 0.5;
})

const innerContainer = document.querySelector('.inner_container')
let shownCards
let textCards = []


const renderCards = () => {

    for(let i = 0; i < cardsName.length; i++){
        let newCard = ` <div class="card">
                        <div class="card_container">
                            <div class="answer hidden">${cardsName[i]}</div>
                        </div>
                    </div>`

        innerContainer.innerHTML = innerContainer.innerHTML + newCard
    }

}



function revertCard(element) {
    //открываем карточку
    let hiddenCards = document.querySelectorAll('.hidden')
    console.log(hiddenCards.length)

        const answer = element.querySelector('.answer')
        answer.classList.toggle('hidden')
        answer.classList.toggle('shown')
}

function compareCards(element){
    const answer = element.querySelector('.answer')
    console.log(answer.innerHTML)
    textCards.push(answer.textContent)
        console.log(textCards)
        if (textCards.length === 2){
            winCards()
        }
}


function winCards(){
    if (textCards[0] === textCards[1]){
        shownCards = document.querySelectorAll('.shown')
        shownCards.forEach(el => {
            el.classList.remove('shown')
            el.classList.remove('hidden')
            el.classList.add('stable')
        })
        textCards = []
    }else{
        textCards = []
        shownCards = document.querySelectorAll('.shown')
        setTimeout(() => {
            shownCards.forEach(el => {
                el.classList.toggle('shown')
                el.classList.toggle('hidden')
                console.log(333)
                console.log(textCards)
            })
        }, 500)


    }
}




function winGame(){
    let hiddenCards = document.querySelectorAll('.hidden')
    console.log(8888, hiddenCards.length)
    if(hiddenCards.length === 0){
        let cards = document.querySelectorAll('.card')
        cards.forEach(el => {
            el.classList.add('hidden')
            el.classList.remove('stable')

        })

        let buttonElement = document.createElement('button')
        buttonElement.classList.add('button')
        buttonElement.type = 'button'
        buttonElement.textContent = 'Try again'
        let gifElement = document.createElement('img')
        gifElement.classList.add('img')
        gifElement.src = './CFO.gif'
        gifElement.style.width = '100%'
        innerContainer.append(gifElement)
        innerContainer.append(buttonElement)
        buttonElement.addEventListener('click', ()=>{
            location.reload()
        })

    }
}


function game() {
    renderCards()
    let cards = document.querySelectorAll('.card')
    cards.forEach(el => {
        el.addEventListener('click', ()=>{
            revertCard(el)
            compareCards(el)
            winGame()
        })
    })

}


game()