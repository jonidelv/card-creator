function post(url, data, success, error){
  var xhr = new XMLHttpRequest();

  xhr.open('POST', url);

  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.onreadystatechange = function(){
    if (xhr.readyState === 4) {
      if(xhr.status === 200){
        if (typeof success === 'function') {
          success(JSON.parse(xhr.responseText));
        }
      } else {
        if (typeof error === 'function') {
          error();
        }
      }
    }
  };

  xhr.send(JSON.stringify(data));
}
