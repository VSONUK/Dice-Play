var clickButton = document.getElementById('press')
clickButton.addEventListener('click',reFresh)



function reFresh(){

    var randomNumber1 = Math.floor(Math.random() * 6) + 1 // 1 -6 number generate
    var randomDiceImage1 = "dice"+randomNumber1+".png"  // dice image 1 - 6
    var randomImageSources1 = "images/"+ randomDiceImage1   // images/dice1.png  -  image/dice6.png
    document.querySelectorAll('img')[0].setAttribute('src',randomImageSources1)


    var randomNumber2 = Math.floor(Math.random() * 6) + 1 // 1 -6 number generate
    var randomDiceImage2 = "dice"+randomNumber2+".png"  // dice image 1 - 6
    var randomImageSources2 = "images/"+ randomDiceImage2   // images/dice1.png  -  image/dice6.png
    document.querySelectorAll('img')[1].setAttribute('src',randomImageSources2)


    if(randomNumber1 > randomNumber2){
        document.querySelector('h1').innerHTML = '⛳ Player 1 Wins!'
    }
    else if (randomNumber1 < randomNumber2){
        document.querySelector('h1').innerHTML = 'Player 2 Wins! ⛳'
    }
    else {
        document.querySelector('h1').innerHTML = '⛳ Match Draw! ⛳'
    }

    document.getElementById('press').innerHTML = 'Click'

}
