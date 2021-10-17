
var i = 0;
function increment(value, cible) {
        console.log(value, cible);
        if(cible === 'set1p1'){
        document.getElementById('set1p1').value = ++value;
        }else if (cible === 'set2p1'){
           document.getElementById('set2p1').value = ++value;
        }else if (cible === 'set3p1'){
                document.getElementById('set3p1').value = ++value;
             }else if (cible === 'pointsp1'){
                     var afficher = 0;
                     console.log(typeof value);
                  if(value == 0){
                        afficher = 15;
                  }else if(value == 15){
                         afficher = 30;
                  }else if(value == 30){
                        afficher = 40;
                }
                console.log(afficher);
                document.getElementById('pointsp1').value = afficher;
             }else if (cible === 'set1p2'){
           document.getElementById('set1p2').value = ++value;
         }else if (cible === 'set2p2'){
            document.getElementById('set2p2').value = ++value;
          }else if (cible === 'set3p2'){
            document.getElementById('set3p2').value = ++value;
          }else if (cible === 'pointsp2'){
            var afficher_2 = 0;
            console.log(typeof value);
         if(value == 0){
               afficher_2 = 15;
         }else if(value == 15){
                afficher_2 = 30;
         }else if(value == 30){
               afficher_2 = 40;
       }
       console.log(afficher_2);
       document.getElementById('pointsp2').value = afficher_2;
      }else if(afficher == 40 && afficher_2 == 40)
         {if(cible === 'pointsp1'){
            afficher == "Av";
         }console.log(afficher);
         document.getElementById('pointsp1').value = afficher;

      }


}
function resetPoints (){
   afficher = 0;
   afficher_2 = 0;
   console.log(afficher, afficher_2);
   document.getElementById('pointsp2').value = afficher_2;
   document.getElementById('pointsp1').value = afficher;
}