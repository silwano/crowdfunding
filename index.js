const rewardSelect = document.querySelectorAll(".reward");
const backProject = document.querySelector(".modal");
const modalClose = document.querySelector(".modal-close");
// pledge selects
const pledgeReward = document.querySelector(".ple-select");
const radio1 = document.querySelector(".radio1");
const pledgeReward2 = document.querySelector(".ple-select2");
const radio2 = document.querySelector(".radio2");
const pledgeReward3 = document.querySelector(".ple-select3");
const radio3 = document.querySelector(".radio3");
const pledgeReward4 = document.querySelector(".ple-select4");
const radio4 = document.querySelector(".radio4");
const select = document.querySelector(".selected")
const select2 = document.querySelector(".selected1")
const select3 = document.querySelector(".selected2")
// hamburger
const hamburger = document.querySelector(".hamburger")
const navigation = document.querySelector(".nav")

// modal select
for(i = 0; i < rewardSelect.length; i++){
    rewardSelect[i].addEventListener("click", function(){
        backProject.classList.add("active")
    })
}
// modal closes
modalClose.addEventListener("click", () => {
    backProject.classList.remove("active")
})
// hamburger
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navigation.classList.toggle("active");
})
// pledge select
pledgeReward.addEventListener("click", () =>{
    radio1.checked = true;
})
pledgeReward2.addEventListener("click", () =>{
    radio2.checked = true;
    select.classList.add("active")
})
pledgeReward3.addEventListener("click", () =>{
    radio3.checked = true;
    select2.classList.add("active");
})
pledgeReward4.addEventListener("click", () =>{
    radio4.checked = true;
    select3.classList.add("active");
})





