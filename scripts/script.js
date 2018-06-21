var tab = [];
var ListValueTab = 1;

function myValueTab()
    {
      tab[ListValueTab] =  Math.floor(Math.random() * 6 + 1);
      document.getElementById("ok").innerHTML = "Ok !"
      return tab[ListValueTab];
}
function CompareValueTab()
    {   
      if(tab[ListValueTab] == document.getElementById("redaction").value)
        {
          document.getElementById("resultat").innerHTML = "Bravo ! Vous avez deviné ce nombre en " + ListValueTab + " essai(s)."; ListValueTab++;
        }
      else if(tab[ListValueTab] < document.getElementById("redaction").value)
        {
          document.getElementById("resultat").innerHTML = "Votre nombre est trop grand.";
        }
      else{
          document.getElementById("resultat").innerHTML = "Votre nombre est trop petit.";
        }
}
