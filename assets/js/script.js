// TODO: Declare any global variables we need
let totalHeads= 0
let totalTails= 0
let totalFlipped= 0
let headsPercentage= 0
let tailsPercentage= 0
//let images= ["assets/images/penny-heads.jpg", "assets\images\penny-tails.jpg"]
let images= [
    {
        imagePath: "assets/images/penny-heads.jpg",
        message: "You flipped heads!",
        side: "heads"
    },
    {
        imagePath: "assets/images/penny-tails.jpg",
        message: "You flipped tails!",
        side: "tails"
    }
]
let defaultMessage = "Let's get rolling!"

document.addEventListener('DOMContentLoaded', function () {
    
    document.getElementById("flip").addEventListener("click", function() {
        let randomImage = images[Math.floor(Math.random() * images.length)]
        
        document.querySelector("#image").setAttribute("src", randomImage.imagePath)

        if(randomImage.side === "heads"){
            totalHeads++
            totalFlipped++

            document.getElementById("heads").textContent = totalHeads
            document.querySelector(".message-container").textContent = randomImage.message
        } else {
            totalTails++
            totalFlipped++

            document.getElementById("tails").textContent = totalTails
            document.querySelector(".message-container").textContent = randomImage.message
        }

        headsPercentage = Math.round(totalHeads * 100/totalFlipped)
        tailsPercentage = Math.round(totalTails * 100/totalFlipped)

        document.getElementById("heads-percent").textContent = headsPercentage + "%"
        document.getElementById("tails-percent").textContent = tailsPercentage + "%"
    })

    document.getElementById("clear").addEventListener("click", function(){
        totalHeads = 0
        totalTails = 0
        tailsPercentage = 0 + "%"
        headsPercentage = 0 + "%"
        defaultMessage = "Let's get rolling!"

        document.getElementById("heads").textContent = 0
        document.getElementById("tails").textContent = 0
        document.getElementById("heads-percent").textContent = 0 + "%"
        document.getElementById("tails-percent").textContent = 0 + "%"
        document.querySelector(".message-container").textContent = defaultMessage
    })

    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')

})