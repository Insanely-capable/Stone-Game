// document.getElementById("blank").innerHTML=("sahi kro cpu choice yeh upar aayega")
// document.getElementById("lose").innerHTML=("isko bhi yeh lose ya win wala")


  function Game(){
    const inputValue = document.getElementById("dropdown").value; 
    let arr=["Stone","Paper","Scissors"]
    temp=Math.floor(Math.random()*arr.length)
    cpu =arr[temp]
    console.log("cpu is" +cpu)
    console.log("u is" +inputValue)
    document.getElementById("blank").innerHTML = "CPU CHOICE IS " +cpu.toUpperCase();
   if(cpu===inputValue){
    document.getElementById("lose").innerHTML=("Play Again 🤓")
    document.getElementById("dropdown").value = ""
   }
   else if(inputValue==="Stone" && cpu==="Paper"){
    document.getElementById("lose").innerHTML=("YOU LOSE 😎")
    document.getElementById("dropdown").value = ""
   }
   else if(inputValue==="Paper" && cpu==="Stone"){
    document.getElementById("lose").innerHTML=("YOU WIN ❤️")
    document.getElementById("dropdown").value = ""
   }
   else if(inputValue==="Stone" && cpu==="Scissors"){
    document.getElementById("lose").innerHTML=("YOU WIN ❤️")
    document.getElementById("dropdown").value = ""
   }
   else if(inputValue==="Scissors" && cpu==="Stone"){
    document.getElementById("lose").innerHTML=("YOU LOSE 😎")
    document.getElementById("dropdown").value = ""
   }
   else if(inputValue==="Paper" && cpu==="Scissors"){
    document.getElementById("lose").innerHTML=("YOU LOSE 😎")
    document.getElementById("dropdown").value = ""
   }
   else if(inputValue==="Scissors" && cpu==="Paper"){
    document.getElementById("lose").innerHTML=("YOU WIN ❤️")
    document.getElementById("dropdown").value = ""
   }
   else{
    document.getElementById("lose").innerHTML=("INVALID INPUT")
    document.getElementById("dropdown").value = ""
   }
}
