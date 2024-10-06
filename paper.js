const dom=document.querySelectorAll(".game");
const computerchoice=()=>{
  arr=["rock","paper","scissor"];
  r=Math.floor(Math.random()*3)
  return arr[r]


}
let compscore=0;
let yourscore=0;
const you=document.querySelector("#your")
const com=document.querySelector("#comp")

const b=document.querySelector("#result");
function gamedraw(){
  b.innerText="game was Draw,play game again"
  b.style.backgroundColor="black"
}
function checkresult(userwin,choice,co){
  if(userwin){
    yourscore++;
    you.innerText=yourscore
    b.innerText=`you win you choose ${choice} comp choose ${co}`;
    b.style.backgroundColor="green"
  }
  else{
    compscore++;
    com.innerText=compscore
    b.innerText=`comp win !you choose ${choice} comp choose ${co}`
    b.style.backgroundColor="red";
  }
  const f=document.querySelector("#final")
if(yourscore>compscore){
  f.innerText="Till NOW USER IS WINNER..."
}else if(compscore>yourscore){
  f.innerText="Till NOW MACHINE IS WINNER..."

}else{
  f.innerText="";
}
}


const startgame=(choice)=>{
  
let co=computerchoice();
if(choice===co){
  gamedraw();
}else{

   let userwin=true;
  if(choice=="rock"){
    userwin= co==="scissor"?true:false;
  }else if(choice==="scissor"){
    userwin= co==="paper"?false:true;
  }else if(choice=="scissor"){
     userwin=co=="paper"?false:true;
  }else{
    console.log("i have nothing two print")
  }
  checkresult(userwin,choice,co);
  } 
 

}






dom.forEach((game)=>{
  game.addEventListener("click",function(){
    const choice=game.getAttribute("id");
    startgame(choice)
    
  })
 

});
