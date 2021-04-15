const about=document.querySelector('.about');
const skille=document.querySelector('.skille');
const contact=document.querySelector('.contact');
const content=document.querySelector('.content');
const menu1=document.querySelector('.menu');


x=0;
function play(x){
    switch (x){
    case 1:about.style.display="block";skille.style.display="none";contact.style.display="none" ; 
    break;
    case 2:about.style.display="none";skille.style.display="flex";contact.style.display="none"  ;
    break;
    case 3:about.style.display="none";skille.style.display="none";contact.style.display="flex"  ;
    break;

}
}

/*This is for moblie*/ 
/*menu*/ 
function go(){
    
   if(menu1.style.display==="block") {
    menu1.style.display="none";
    
    content.style.display="block";
   }
   else{
    menu1.style.display="block";
    
    content.style.display="none";
   }
}
/**/ 
m=0;


function menu(m){
    switch(m){
        case 1:about.style.display="block";skille.style.display="none";contact.style.display="none" ;menu1.style.display="none";content.style.display="block";
        break;
       case 2:about.style.display="none";skille.style.display="block";contact.style.display="none"  ;menu1.style.display="none"; content.style.display="block";
       break;
       case 3:about.style.display="none";skille.style.display="none";contact.style.display="block"  ;menu1.style.display="none";content.style.display="block";
       break;

    }
}





