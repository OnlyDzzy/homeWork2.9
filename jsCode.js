//1. Реализация элемента "Счетчик нажатий на кнопку"

const lal = document.getElementById("bottonStage1__minus");
const lal2 = document.getElementById("bottonStage1__plus");
const val = document.getElementById("bottonStage1__value");
let valu = 0;

function updateval(){
    val.textContent = valu;
}

lal2.addEventListener('click', ()=>{
    valu++;
    updateval();
});
lal.addEventListener('click', ()=>{
    valu--;
    updateval();
});

//2. Реализация реактивной валидации поля формы

const emailInput = document.getElementById("email")
const errorMessage = document.getElementById("error-message")
const submitBtn = document.getElementById("submit-btn")

emailInput.addEventListener("input", function(){
    const emailValue= emailInput.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(emailValue)){
        errorMessage.style.display = "block";
    }else  
    errorMessage.style.display = "none";
    submitBtn.disabled = false;
})
