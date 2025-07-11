let menu = document.getElementById('menu');
    let nav= document.querySelector('nav');
    let closer = document.getElementById('closer');
    let box = document.querySelectorAll('.grad');
    
    menu.onclick=()=>{
        nav.classList.add('showMenu');
    }
    closer.onclick=()=>{
        nav.classList.remove('showMenu');
    }
  for (list of box){
      list.n = 0;
      let nPages = list.children.length;
     for(let i =2; i < nPages;i++){
     let div = document.createElement('div');
       list.parentElement.children[2].appendChild(div);
     }
     list.parentElement.children[2].children[0].style.background='green'
  }
function right(me){
let cont = me.parentElement;
let imArr = Array.from(cont.children);
let items = cont.children.length;
let page = Array.from(cont.parentElement.children[2].children);
if(cont.n < (items -3)){
  cont.n++;
  for (let a=2;a<imArr.length;a++){
    imArr[a].style.display = 'none';
  }
  imArr[cont.n + 2].style.display = 'block';
  for(i of page){
      i.style.background='transparent';
  }
  page[cont.n].style.background = 'green';
  }
}


function left(me){
    let cont = me.parentElement;
let items = cont.children.length;
let page = Array.from(cont.parentElement.children[2].children);
if(cont.n > 0){
cont.n--
    cont.children[cont.n+2].style.display ="block";
  
  for(i of page){
      i.style.background='transparent';
  }
  page[cont.n].style.background = 'green';
  }
}
document.body.onscroll =(e)=>{
    //alert(e.target.innerHeight);
}
let pagingBox = document.getElementsByClassName('paging');
for (each of pagingBox){
  let arr = Array.from(each.children);
  for(list of arr){
    list.onclick =(e) =>{
  let imgsBox = e.target.parentElement.parentElement.children[1];
  for(let i = 2;i < imgsBox.children.length;i++){
    imgsBox.children[i].style.display = 'none';
  }
  for(allc of arr){
    allc.style.background = 'transparent';
  }
      imgsBox.children[(arr.indexOf(e.target))+2].style.display = 'block';
      imgsBox.n = arr.indexOf(e.target);
      arr[imgsBox.n].style.background = 'green';

    }
  }
}

let roller = document.querySelector('.roller');
    let action = document.getElementById('action');

setInterval(()=>{
    let first = roller.children[0];
    roller.removeChild(first);
    setTimeout(()=>{
        roller.appendChild(first);
    },100)
},3000);

