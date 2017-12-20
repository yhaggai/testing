function createCssLink(params) {
  var fileref = document.createElement('link');
  fileref.setAttribute('rel', 'stylesheet');
  fileref.setAttribute('type', 'text/css');
  fileref.setAttribute('href', 'http://127.0.0.1:8081/overide.css');
  document.getElementsByTagName('head')[0].appendChild(fileref);
}

$(document).ready(function() {
  createCssLink();
});
