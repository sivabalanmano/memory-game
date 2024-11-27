const cardArray =[
    {
        name:'fries',
        img:'images/fries.png',
    },
    {
        name:'cheeseburger',
        img:'images/cheeseburger.png',
    },
    {
        name:'hotdog',
        img:'images/hotdog.png',
    },
    {
        name:'ice-cream',
        img:'images/ice-cream.png',
    },
    {
        name:'millkshake',
        img:'images/milkshake.png',
    },
    {
        name:'pizza',
        img:'images/pizza.png',
    },
    {
        name:'fries',
        img:'images/fries.png',
    },
    {
        name:'cheeseburger',
        img:'images/cheeseburger.png',
    },
    {
        name:'hotdog',
        img:'images/hotdog.png',
    },
    {
        name:'ice-cream',
        img:'images/ice-cream.png',
    },
    {
        name:'millkshake',
        img:'images/milkshake.png',
    },
    {
        name:'pizza',
        img:'images/pizza.png',
    }
]
cardArray.sort(()=> 0.5 -  Math.random())

const griddisDilay=document.querySelector('#grid');
const resultDisply = document.getElementById('result')
let cardChosen =[]
let cardChosenIds=[]
const cardsWon =[]

function createBord(){
    for(i=0 ;i<cardArray.length;i++){
        const card = document.createElement('img');
        card.setAttribute('src','images/blank.png')
        card.setAttribute('data-id',i)
        card.addEventListener('click',flipCard)
        griddisDilay.appendChild(card);
    }
}
createBord();

function checkMatch(){
    const cards = document.querySelectorAll('img')
    const optionOneid = cardChosenIds[0]
    const optionTwoid = cardChosenIds[1]
    console.log(cards)
    console.log('check for match')
    if  (optionOneid == optionTwoid){
        cards[optionOneid].setAttribute('src','images/blank.png')
        cards[optionTwoid].setAttribute('src','images/blank.png')
        alert('two have cliked the same images')
    }
    if(cardChosen[0] == cardChosen[1]){
        alert('your match found')
        cards[optionOneid].setAttribute('src','images/white.png')
        cards[optionTwoid].setAttribute('src','images/white.png')
        cards[optionOneid].removeEventListener('click',flipCard)
        cards[optionTwoid].removeEventListener('click',flipCard)
        cardsWon.push(cardChosen)

    }  else {
        cards[optionOneid].setAttribute('src','images/blank.png')
        cards[optionTwoid].setAttribute('src','images/blank.png')
        alert('sorry try agin')
    }
    resultDisply.innerHTML = cardsWon.length
    cardChosen = []
    cardChosenIds=[]

    if(cardsWon.length == cardArray.length/2){
        resultDisply.innerHTML ='Congratulation you Find All'
    }
}

function flipCard(){
    const cardId =this.getAttribute('data-id')
    cardChosen.push(cardArray[cardId].name)
    cardChosenIds.push(cardId)
    console.log(cardChosen)
    console.log(cardChosenIds)
    this.setAttribute('src',cardArray[cardId].img)
    if(cardChosen.length === 2){
        setTimeout(checkMatch, 500)
    }

}