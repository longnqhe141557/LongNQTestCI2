let btnRandom = document.getElementById("random");
let count = 0;

btnRandom.addEventListener('click', () => {
    let inputNumber = document.getElementById("inputNumber").value;
    let randomNumber = Number(Math.floor(Math.random() * 10 + 1));
    
    if(inputNumber == randomNumber){
        alert('Congrat! You won a price!!!');
    }else{
        alert(`You wrong! the correct is ${randomNumber}`);
    }
    count++;
    if(count > 3){
        alert("You just have 3 times!");
    }
})





