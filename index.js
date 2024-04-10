// min === minimal to Express

const express = require("express") // min
const app = express() // min
const port = 3000 // min

// import module with functions exported
const area = require("./module/area")

// import module with complete object exported
const 

app.get("/", function(req, res) { // min
    res.send("Hello world, Mr.Worm") // min
})

// area Module usage:
console.log(`The area of a square with side size equals 4 is ${area.area(4)}`)
console.log(`The perimeter of a square with side size equals 4 is ${area.perimeter(4)}`)

app.listen(port, function(){ // min
    console.log(`Express app listening to the port ${port}!`) // min
})