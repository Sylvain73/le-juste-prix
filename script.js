
var monPrix = document.getElementById("enterNumber");
var envoiResult = document.getElementById("envoiBouton");
 var justePrix = Math.floor(Math.random()*100+1);


/*var vosPrix = document.getElementById("dernierChiffre");
var comparaisonPrix = document.getElementById("hautBas");*/



envoiResult.onclick = function()
{
   
	if (isNaN(monPrix.value) == true || monPrix.value > 100) 
	{		
        alert("saisie un chiffre entre 1 et 100 !");
    }
    else 
       { 
        if(monPrix.value > justePrix) 
	    {
		    alert("C'est moins !");
	    }
	    else if(monPrix.value < justePrix)
	    {
		    alert("c'est plus");
	    } 
    
        else if (monPrix.value == justePrix)
        {
            alert("Bravo c'est good");
        }
        };
 
    };

