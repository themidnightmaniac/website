/*Check If Mobile*/

var warned = localStorage.getItem('alerted') || '';
if (warned != 'yes') {
 uaAlert();
 localStorage.setItem('alerted','yes');
}

function uaAlert(){
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    window.alert("WARNING! this website looks cursed on mobile, proceed at your own risk, you'll be warned only once.");
    console.log("Phone User")
  }else{
    console.log("Desktop User")
  }
}

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
  
  }else if (prevtheme == 'neon') {
  
    theme.setAttribute('href', '/gallery/themes/neon.css');
  
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

/*Open Image On Click*/

function openImg(link, target){
  window.open(link, target)
}

/*/Open Image On Click*/