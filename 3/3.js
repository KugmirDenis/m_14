document.getElementById("numberInp").value = 8
const inputNumb = document.getElementById("numberInp").value;

function useRequest(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  
  xhr.onload = function() {
    if (xhr.status != 200 || inputNumb >=  11) {
      console.log('«число вне диапазона от 1 до 10».','Ответ', xhr.status);
    } else {
      const result = JSON.parse(xhr.response);
      if (callback) {
        callback(result)
      }
    }
  }
  
  xhr.onerror = function() {
    console.log('Ошибка', xhr.status);
  };
  xhr.send();
};

const resultNode = document.querySelector('.result');
const btnNode = document.querySelector('.btn');

function displayResult(apiData) {
  let photo = '';
   apiData.forEach(item => {
    const cardBlock = `
      <div class="card">
        <img
          src="${item.thumbnailUrl}"
          class="card-image"
        />
        <p>${item.title}</p>
      </div>
    `;
    photo = photo + cardBlock;
  });
  resultNode.innerHTML = photo;
}


btnNode.addEventListener('click', () => {
  useRequest('https://jsonplaceholder.typicode.com/photos?_limit=8', displayResult);
})