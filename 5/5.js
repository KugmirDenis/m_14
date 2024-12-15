
const inputErorrStr = document.querySelector(".error-str");
const inputErorrLim = document.querySelector(".error-lim");
const inputErorrLimStr = document.querySelector(".error-str-lim");
const btn = document.querySelector("button")
const imgContainer = document.querySelector(".img");


function saveDataToLocalStorage(pageNumber, limit) {
  localStorage.setItem('lastPageNumber', pageNumber);
  localStorage.setItem('lastLimit', limit);
}

function loadDataFromLocalStorage() {
  const lastPageNumber = localStorage.getItem('lastPageNumber');
  const lastLimit = localStorage.getItem('lastLimit');
  
  if (lastPageNumber && lastLimit) {
    document.querySelector(".inpt-str").value = lastPageNumber;
    document.querySelector(".inpt-lim").value = lastLimit;
  }
}


btn.addEventListener('click', () => {
const inputNumbStr = +document.querySelector(".inpt-str").value;
const inputNumbLim = +document.querySelector(".inpt-lim").value;
  if ((inputNumbStr > 10 || inputNumbStr < 1) || (typeof inputNumbStr != 'number')) {
  inputErorrStr.innerHTML = 'Номер страницы вне диапазона  от 1 до 10';
  }   else if ((inputNumbLim > 10 || inputNumbLim < 1) || (typeof inputNumbLim !== 'number')) {
  inputErorrLim.innerHTML = 'Лимит вне диапазона  от 1 до 10';
  }  else if ((inputNumbStr > 10 || inputNumbStr < 1) && (inputNumbLim > 10|| inputNumbLim < 1) || (typeof inputNumbStr !== 'number' && typeof inputNumbLim !== 'number')) {
    inputErorrLimStr.innerHTML = 'Номер страницы и лимит вне диапазона  от 1 до 10';
  } else {
  const url = `https://jsonplaceholder.typicode.com/photos?_page=${inputNumbStr}&_limit=${inputNumbLim}`;
 
  fetch(url)
  .then((response) => {
  if (!response.ok) {
  throw new Error('Ошибка запроса');
  }
  return response.text();
  })
  .then((data) => {
    console.log('Ответ от API:', data);
    const img = document.createElement('img');
    img.src = url;
    imgContainer.appendChild(img);
    saveDataToLocalStorage(inputNumbStr, inputNumbLim);
  })
  .catch(() => {
  console.log('error', error);
  });
  }
 });

 loadDataFromLocalStorage();

