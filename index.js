// Code your solutions in this file
const gifts = ["teddy bear", "drone","doll"];

function wrapGifts(gifts){
    for (let i = 0; i < gifts.length; i++){
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
}
return gifts;
}

wrapGifts(gifts);



function writeCards([...string], event){
    let gifters = []
    for (let u = 0; u < string.length; u++ ){
    gifters.push(`Thank you, ${string[u]}, for the wonderful ${event} gift!`)
 
    }
   return gifters
}
function countDown(value){
let count = (value)
while (count > -1){
    console.log(count--)
}
}
