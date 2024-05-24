let btn = document.querySelector('#ekleBtn');

let liste = document.querySelector('#liste');
let todoTxt = document.querySelector('#todoTxt')

function listeyeEkle() {
  if(todoTxt.value == '') {
    alert('Metin alanı boş.');
    return;
  }
  // let eklenecek = prompt('Ne ekleyelim?');
  liste.innerHTML += '<li>' + todoTxt.value + '</li>';
}

btn.addEventListener('click', listeyeEkle);