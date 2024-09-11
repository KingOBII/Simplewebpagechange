
const changeColorBtn = document.getElementById('changeColorBtn');


const colors = ['blue', 'red', 'green', 'cyan', 'purple', 'grey'];


function changeBackgroundColor() {
   
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
   
    document.body.style.backgroundColor = randomColor;
}


changeColorBtn.addEventListener('click', changeBackgroundColor);
