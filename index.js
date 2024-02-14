//


let countel = document.getElementById("count-el")
let saveEL = document.getElementById("save-el") 

let count = 0
function increment() {
    count += 1
    countel.textContent = count
    console.log(count)
}
 
function save(){
    let prv= count + " - "  
    saveEL.textContent += prv
    console.log(count)
    countel.textContent = 0
     
}