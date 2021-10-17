
var afficher = 0;
var afficher_2 = 0;

document.querySelector('#name1').addEventListener('click', (event) =>{
   console.log(event.target.value);
})
document.querySelector('#name2').addEventListener('click', (event) =>{
   console.log(event.target.value);
})


function increment(value, cible) {
        console.log(value, cible);
        if(cible === 'set1p1'){
        document.getElementById('set1p1').value = ++value;
        }else if (cible === 'set2p1'){
           document.getElementById('set2p1').value = ++value;
        }else if (cible === 'set3p1'){
                document.getElementById('set3p1').value = ++value;
             }else if (cible === 'pointsp1'|| cible ==='pointsp2' ){
                     console.log(typeof value);
                  if(value == 0){
                     if(cible === 'pointsp1'){
                        afficher = 15;}
                        if(cible === 'pointsp2'){
                           afficher_2 = 15;}
                  }else if(value == 15){
                     if(cible === 'pointsp1'){
                        afficher = 30;
                     }if(cible === 'pointsp2'){
                        afficher_2 = 30;}
                  }else if(value == 30){
                     if(cible === 'pointsp1'){
                        afficher = 40;}
                        if(cible === 'pointsp2'){
                           afficher_2 = 40;}
                }else if (value == 40){
                  if(cible === 'pointsp1' && afficher_2 == 40){
                     afficher = 'Av';}
                     if(cible === 'pointsp2' && afficher == 40){
                        afficher_2 = 'Av';}
                        if(cible === 'pointsp1' && afficher_2 == 'Av'){
                           afficher = 40;
                           afficher_2 = 40;}
                           if(cible === 'pointsp2' && afficher == 'Av'){
                              afficher = 40;
                              afficher_2 = 40;
                           }
                }else if (value == 'Av'){
                  if(cible === 'pointsp1' && afficher_2 == 40){
                     afficher = 0;
                     afficher_2 = 0;}
                     if(cible === 'pointsp2' && afficher == 40){
                        afficher = 0;
                        afficher_2 = 0;
                     }
                }
                console.log(afficher, afficher_2);
                document.getElementById('pointsp1').value = afficher;
                document.getElementById('pointsp2').value = afficher_2;
             }else if (cible === 'set1p2'){
           document.getElementById('set1p2').value = ++value;
         }else if (cible === 'set2p2'){
            document.getElementById('set2p2').value = ++value;
          }else if (cible === 'set3p2'){
            document.getElementById('set3p2').value = ++value;
          }
      }






function resetPoints (){
   afficher = 0;
   afficher_2 = 0;
   console.log(afficher, afficher_2);
   document.getElementById('pointsp2').value = afficher_2;
   document.getElementById('pointsp1').value = afficher;
}