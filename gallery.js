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

  }else if (prevtheme == 'midnight') {

    theme.setAttribute('href', '/gallery/themes/midnight.css');

  }else if (prevtheme == 'neo') {
  
    theme.setAttribute('href', '/gallery/themes/neo.css');
  
  }else if (prevtheme == 'heaven') {
  
    theme.setAttribute('href', '/gallery/themes/heaven.css');
  
  }else if (prevtheme == 'cancer') {
  
    theme.setAttribute('href', '/gallery/themes/cancer.css');
  
  }else if (prevtheme == 'wild') {
  
    theme.setAttribute('href', '/gallery/themes/wild.css');
  
  }else {
  
    theme.setAttribute('href', '/gallery/themes/main.css')
  
  }
}

/*/...Theme*/

/*Open Image On A New Tab*/

function openImg(link, target){
  window.open(link, target)
}

/*Open Image...*/