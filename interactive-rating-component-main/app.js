let selectListItem = document.querySelectorAll("li");
let btnSubmit = document.getElementById("btn-submit");
let amountSelected = 0;


let userSubmit = function (){
    document.querySelector("#amount-selected span").textContent = amountSelected;
    userSelectAmount()
}
let userSelectAmount = function(){
    for (let i = 0; i < selectListItem.length; i++) {
        if (selectListItem[i].classlist.includes("select")) {
            amountSelected++;
        }
    }
    String(amountSelected);
}
for (let i = 0; i < selectListItem.length; i++){
    selectListItem[i].addEventListener("click", function() {
        selectListItem[i].classList.toggle("select");
    })
}
btnSubmit.addEventListener("click", function() {
    document.querySelector(".card:first-child").classList.add("hidden");
    document.querySelector(".card:nth-child(2").classList.remove("hidden");
    userSubmit();
});
