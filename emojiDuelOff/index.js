let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
 
    // When the user clicks on the "Pick Fighters" button, pick two random 
  
    let randomEmojiOne = Math.floor( Math.random() * fighters.length)
    // console.log(randomEmojiOne)
    let randomEmojiTwo = Math.floor( Math.random() * fighters.length)
    // console.log(randomEmojiTwo)
    stageEl.textContent = fighters[randomEmojiOne] + " Vs " + fighters[randomEmojiTwo]
    
    
    })
