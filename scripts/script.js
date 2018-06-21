var tab = [];
var ListValueTab = 1;

function myValueTab()
    {
      tab[ListValueTab] =  Math.floor(Math.random() * 6 + 1);
      document.getElementById("ok").innerHTML = "Ok !"
      solution = tab[ListValueTab];
      return tab[ListValueTab];
}
function CompareValueTab()
    {   
      if(document.getElementById("redaction").value == solution)
        {
          document.getElementById("resultat").innerHTML = "Bravo ! Vous avez deviné ce nombre en " + ListValueTab + " essai(s).";
        tab = new Array();
        ListValueTab = 1;
        document.getElementById("ok").innerHTML = "";
        }
      else if(document.getElementById("redaction").value > solution)
        {
          document.getElementById("resultat").innerHTML = "Votre nombre est trop grand."; 
          ListValueTab++;
        }
      else{
          document.getElementById("resultat").innerHTML = "Votre nombre est trop petit."; 
          ListValueTab++;
        }
}
