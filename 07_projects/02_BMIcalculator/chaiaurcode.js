// form me event "submit hota hai"
const form = document.querySelector('form');
//const weight = parseInt(document.querySelector('#weight').value)
//this will store wrong value
//post aur get type se form submit hota aur uski value url me chali jaati hai aur usko rokne ke liye javascript me ek method hota hai hum yaha pe url me bhej nahi rahe
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid height ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
