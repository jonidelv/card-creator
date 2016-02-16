var botonReg = document.querySelector('.btn-submit');

botonReg.addEventListener('click', function() {
  post('http://sysgarage.com/introductory-course-1/fake-api-post.php',
  loadData(),
  function success(response) {
    createCard(response);
  },
  function error(error) {
    createCard2( );
  });
});


function loadData() {
  var formElements = document.forms[0].elements;
  var data = {};

  for(var i=0 ; i<formElements.length; i++) {
    // verifica si hay un elemento distinto de un boton, para que no
    if(formElements[i].type !== 'button') {
      data[formElements[i].name] = formElements[i].value;
    }
  }

  return data;
}
