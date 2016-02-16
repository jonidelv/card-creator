function createCard (data){

  var tpl = document.querySelector('#cardTpl').content;
  var newCard = tpl.cloneNode(true);
  var  backgroundImageGeneric = 'background-image: url('+data.img+')';
  var  backgroundImageAvatar = 'background-image: url('+data.avatar+')';

  newCard.querySelector('.nya').innerHTML = data.name;
  newCard.querySelector('.avatar').setAttribute('style', backgroundImageAvatar);
  newCard.querySelector('.blur').setAttribute('style', backgroundImageAvatar);
  newCard.querySelector('.general-text').innerHTML = data.description;
  newCard.querySelector('.picture').setAttribute('style', backgroundImageGeneric);
  newCard.querySelector('.brand').innerHTML = data.brand;
  newCard.querySelector('.model').innerHTML = data.model;
  newCard.querySelector('.color').innerHTML = data.color;
  newCard.querySelector('.facebook a').href = data.facebook;
  newCard.querySelector('.twitter a').href = data.twitter;
  newCard.querySelector('.google a').href = data.google;
  newCard.querySelector('.card').setAttribute('data-id', data.id);
  newCard.querySelector('.card').setAttribute('data-time', data.datetime);
  newCard.querySelector('input.show-menu-card').setAttribute('id', data.id);
  newCard.querySelector('label.show-menu-card').setAttribute('for', data.id);
  document.querySelector('.container').appendChild(newCard);

}

function createCard2 (){

  var data = loadData();
  var id = Math.floor(Math.random()*90000) + 10000;

  var tpl = document.querySelector('#cardTpl').content;
  var newCard = tpl.cloneNode(true);
  var  backgroundImageGeneric = 'background-image: url('+data.img+')';
  var  backgroundImageAvatar = 'background-image: url('+data.avatar+')';

  newCard.querySelector('.nya').innerHTML = data.name;
  newCard.querySelector('.avatar').setAttribute('style', backgroundImageAvatar);
  newCard.querySelector('.blur').setAttribute('style', backgroundImageAvatar);
  newCard.querySelector('.general-text').innerHTML = data.description;
  newCard.querySelector('.picture').setAttribute('style', backgroundImageGeneric);
  newCard.querySelector('.brand').innerHTML = data.brand;
  newCard.querySelector('.model').innerHTML = data.model;
  newCard.querySelector('.color').innerHTML = data.color;
  newCard.querySelector('.facebook a').href = data.facebook;
  newCard.querySelector('.twitter a').href = data.twitter;
  newCard.querySelector('.google a').href = data.google;
  newCard.querySelector('.card').setAttribute('data-id', id);
  newCard.querySelector('.card').setAttribute('data-time', Date());
  newCard.querySelector('input.show-menu-card').setAttribute('id', id);
  newCard.querySelector('label.show-menu-card').setAttribute('for', id);
  document.querySelector('.container').appendChild(newCard);

}
