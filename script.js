const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input");
qrImg = wrapper.querySelector(".qr-code img");
generateBtn = wrapper.querySelector(".form button");

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if(!qrValue) {
        swal("Error!", "You must enter the text or url to generate a QR code.", "error");
        return;
    };
    generateBtn.innerText = "Generating QR Code..";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrInput}`;
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");    
        generateBtn.innerText = "Generate QR Code";
    })
});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value){
        wrapper.classList.remove("active");
    };
});

var timer;
let duration = Math.random() * (2900 - 200);
console.log(duration)
function myFunction() {
    timer = setTimeout(showPage, duration);
}

function showPage() {
    document.querySelector(".lds-roller").style.display = "none";
    document.querySelector(".container").style.display = "flex";
}