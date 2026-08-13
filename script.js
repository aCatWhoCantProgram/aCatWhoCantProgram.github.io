const button = document.getElementById('coolButton');
const randomResult1 = document.getElementById('randomResult');

//i think this might work
button.addEventListener('click', function() {
    const randomNumber = Math.random();
    randomResult1.textContent = `${randomNumber}`;
});
