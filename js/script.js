(function (){

  var add = document.querySelector('.add');
  var shadow = document.querySelector('.shadow');
  var form = document.querySelector('.form-wrapper');
  var boton = document.querySelector('.btn-submit');


    add.addEventListener('touchstart', handlerFunctionAdd);
    add.addEventListener('click', handlerFunctionAdd);

    boton.addEventListener('click', handlerFunctionRemove);

    function handlerFunctionAdd(event) {

      shadow.classList.add('active');
      form.classList.add('active');
    }


    shadow.addEventListener('touchstart', handlerFunctionRemove);
    shadow.addEventListener('click', handlerFunctionRemove);

    function handlerFunctionRemove(event) {

      shadow.classList.remove('active');
      form.classList.remove('active');
    }

})();
