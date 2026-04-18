var bulb = document.querySelector("#bulb")
var btn = document.querySelector("button")
var flag = 0
btn.addEventListener("click",function(){
     if(flag==0){
        
        btn.style.backgroundcolor="Yellow"
        console.log("Clicked Button")
         flag=1
        
     }else{
        bulb.style.backgroundcolor="transparent"
       console.log("Again Clicked")
         flag=0
        

     }
 })  ; 


    
    

