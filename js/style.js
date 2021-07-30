 /* PIERRE PAPIER CISEAUX  */
 var victoire = 0;
 var defaite = 0;
 var egalite = 0;
 var manche = 0;

 function jeu(){
     
     var user = prompt("Choisissez Pierre - Papier - Ciseaux :");
     var joujou = document.getElementById("ppc");
     var para = joujou.getElementsByTagName("P");
     var match = joujou.getElementsByTagName("H2");
     var ordi = Math.floor(Math.random()*3);

    manche++;
    match[0].innerHTML = "Round N°" + (manche) ;
    
     switch(user){
         case "pierre" :
             para[0].innerText = "Vous avez Choisi : Pierre";
             console.log("Choix User : Pierre"); 
         
         break;
         case "papier":
             para[0].innerText = "Vous avez Choisi : Papier";
             console.log("Choix User : Papier");
         break;
         case "ciseaux" :
             para[0].innerText = "Vous avez Choisi : Ciseaux";
             console.log("Choix User : Ciseaux");
         break;
         default:
             para[0].innerText = "Erreur !!";
             console.log("Aucun des trois !")
         break;
     }

     switch(ordi){
         case 0 : 
             para[1].innerText = "L'ordinateur a Choisi : Pierre";
             console.log("Choix Ordi : Pierre");
         break;
         case 1:
             para[1].innerText = "L'ordinateur a Choisi : Papier";
             console.log("Choix Ordi : Papier");
         break;
         case 2:
             para[1].innerText = "L'ordinateur a Choisi : Ciseaux";
             console.log("Choix Ordi : Ciseaux");
         break;
         default:
             para[1].innerText = "Erreur !!";
             console.log("Aucun des trois !");
         break;
     }


     if((user == "pierre" && ordi == 2) || (user == "papier" && ordi == 0) || (user == "ciseaux" && ordi == 1)){
         victoire++;
         para[2].innerText = "Vous avez gagné !!"
         console.log("Vous avez gagné !!");
         return para[3].innerText = "Vous avez : "+ (victoire)+" Points";
         
     }
     else if((user == "pierre" && ordi == 0) || (user == "papier" && ordi == 1) || (user == "ciseaux" && ordi == 2)){
         egalite++;
         para[2].innerText = "Egalité !!"
         console.log("Egalité !!");
         return para[5].innerText = "Il y a : "+ (egalite)+" Egalité";
     }
     else{
         defaite++;
         para[2].innerText = "Vous avez perdu !!"
         console.log("Vous avez perdu !!");
         return para[4].innerText = "L'ordinateur a : "+ (defaite)+" Points";
         
     } 
    
    
     
 }
