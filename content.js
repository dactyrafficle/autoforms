

window.onload = function() {

  let url1 = 'https://www.theguardian.com/international';
  let url2 = 'https://www.theguardian.com/uk/sport';
  
  let url = window.location.href;

  if (url === url1) {
  
    window.setTimeout(function() {
      document.querySelector("#bannerandheader > header > nav > ul > li:nth-child(3) > a").click();
    }, 1000);
  }

  if (url === url2) {
  
    window.setTimeout(function() {
      document.querySelector("#bannerandheader > header > nav > ul > li:nth-child(4) > a").click();
    }, 1000);
  }

}