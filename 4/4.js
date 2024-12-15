
const inputNumbH = +document.querySelector(".inpt-h").value;
const inputNumbW = +document.querySelector(".inpt-w").value;
const btn = document.querySelector("button")
const imgContainer = document.querySelector(".img");

btn.addEventListener('click', () => {
 if((inputNumbH > 100 && inputNumbH < 300) && (inputNumbW > 100 && inputNumbW < 300) && (typeof inputNumbH === 'number' && typeof inputNumbW === 'number')) {
    const url = `https://dummyimage.com/${inputNumbW}x${inputNumbH}/cfcfcf/000000.png`
    fetch(url)
    .then((response) => {
      const result = response.text();
      return result
    })
    .then ((data) => {
 const img = document.createElement('img');
 img.src = url;
 imgContainer.appendChild(img);
    })
    .catch(() => { console.log('error', error) });
  } else {
console.log('одно из чисел вне диапазона от 100 до 300')
}

  
})
