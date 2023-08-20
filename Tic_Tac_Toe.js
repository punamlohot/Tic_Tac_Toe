var flag=true;
var winnerDiv = document.querySelector('.winner');
let reset=document.getElementById('reset1');
var winCount1 = 0, winCount2 = 0;
var user1, user2;
var player1 , player2;


var state = [1,0,1,1,0,1,0,1,0];
document.querySelector('table').addEventListener('click',(e)=>{
    if(e.target.id){
        setvalue(e.target);
    }
});
//print X and O

function setvalue(curdiv)
{
    id=curdiv.id;
    if(flag){
        if(state[id]==0 || state[id]==1){
            document.getElementById(id).innerHTML="X";
            state[id] ='X';
            flag= !flag;
         checkwinner(!flag);
        }
        displayScore();
}
else{
    if(state[id]==0 || state[id]==1){
    document.getElementById(id).innerHTML="o";
    state[id] ='o';
    flag= !flag;
    checkwinner(!flag);
    }
displayScore();
}

}

//check winner
function checkwinner(type){
    user1 = document.querySelector('.name1').innerText;
    len1 = user1.length;
    size1 = len1- 2;
    user1 = user1.slice(0,  size1);

    user2 = document.querySelector('.name2').innerText;
    len2 = user2.length;
    size2 = len1- 2;
    user2 = user2.slice(0,  size2);
    const winIndex =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    for(let i=0;i<winIndex.length;i++)
    {
        let [a,b,c] = winIndex[i];
    
if(state[a]==state[b]&&state[a]==state[c]){
    if(type){
      winnerDiv.innerHTML =`Winner ${user1}`;
      ++winCount1;
      setWinner(winIndex[i]);
          setDisable();
        break;
    
    }
    else{
        winnerDiv.innerHTML = `Winner ${user2}`;
        ++winCount2;
        setWinner(winIndex[i]);
        setDisable();
    break;

    }
    }
 }
}
let temp=0;
for(i=0;i<state.length;i++){
    if(state[i]==1||state[i]==0||state[i]==null)
    {
        temp+=1;
    }
}
    if(temp==0)
    {
       winnerDiv.innerHTML='Draw';
    }


//disable remainng cell
 function setWinner(index){
    for(let i=0; i< index.length; i++){
        document.getElementById(index[i]).style.backgroundColor = 'rgb(187, 155, 197)';
    }
}

    function setDisable(){
    for(let i=0; i<state.length; i++){
    if(state[i]==1 || state[i]==0){
    state[i]=null;
    }
    }
    } 
//rstart
     function restart(){
       location.reload()
    }
//reset
reset.addEventListener("click",()=>{
   
const cells = document.querySelectorAll('td');
cells.forEach(cell => {
  cell.innerText= '';
});
 state = [1,0,1,1,0,1,0,1,0];
 winnerDiv.innerHTML="";
 colored_div = document.querySelectorAll('.gamediv table td'); 
 for(let i=0; i<colored_div.length; i++){
    colored_div[i].style.backgroundColor = "transparent";
}
 
});


function ShowAndHidewithout() {
   

    document.querySelector('.player_score').style.display = "none";
    document.querySelector('.gamediv').style.display = "flex";
    document.querySelector('.startdiv').style.display='none';
    
}

function showGame() {
    player1 = document.querySelector('#player-1').value;
    player2 = document.querySelector('#player-2').value;
    if (player1 && player2) {
        

        document.querySelector('.player_score').style.display = "none";
        document.querySelector('.gamediv').style.display = "flex";
        document.querySelector('.startdiv').style.display='none';

        document.querySelector('.name1').innerText = player1 + " : ";
        document.querySelector('.name2').innerText = player2 + " : ";
    }
    else {
        alert("Please Fill the above inputs!");
    }
    
    
}
function displayScore()
{
    if(winCount1>0 || winCount2 > 0){
        document.querySelector('#player1score').innerText = winCount1;
        document.querySelector('#player2score').innerText = winCount2;
    }
}