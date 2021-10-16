// function incrementSet1P1 ()
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
             }


}