let isRed='false';
setInterval(()=>{
if(!isRed){
    action.style.color = "red";
    isRed= true;
}else{
    action.style.color = "#000";
    isRed= false;
}
},500);