/*Check For Selected Theme*/

var theme = document.getElementsByTagName('link')[0];

var prevtheme = localStorage.getItem('theme') || '';

if (typeof prevtheme === 'undefined') {
  localStorage.setItem('theme','main');
}else {
  savetheme()
}

function savetheme(){

  if (prevtheme == 'main') {

    theme.setAttribute('href', '/gallery/themes/main.css');
    document.getElementById("theme-button").innerHTML = "Midnight";

  }else if (prevtheme == 'midnight') {

    theme.setAttribute('href', '/gallery/themes/midnight.css');
    document.getElementById("theme-button").innerHTML = "Neo";

  }else if (prevtheme == 'neo') {
  
    theme.setAttribute('href', '/gallery/themes/neo.css');
    document.getElementById("theme-button").innerHTML = "Heaven";
  
  }else if (prevtheme == 'heaven') {
  
    theme.setAttribute('href', '/gallery/themes/heaven.css');
    document.getElementById("theme-button").innerHTML = "Cancer";
  
  }else if (prevtheme == 'cancer') {
  
    theme.setAttribute('href', '/gallery/themes/cancer.css');
    document.getElementById("theme-button").innerHTML = "Wild";
  
  }else if (prevtheme == 'wild') {
  
    theme.setAttribute('href', '/gallery/themes/wild.css');
    document.getElementById("theme-button").innerHTML = "Main";
  
  }else {
  
    theme.setAttribute('href', '/gallery/themes/main.css')
    document.getElementById("theme-button").innerHTML = "Midnight";
  
  }
}
