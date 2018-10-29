const item1 = document.querySelector("#item1");
const item2 = document.querySelector("#item2");
const item3 = document.querySelector("#item3");



item1.style.display = "none";
item2.style.display = "none";
item3.style.display = "none";

function change(change) {
    change.classList.toggle("close");
    if(change.classList.contains("close")){
        item1.style.display = "block";
        item2.style.display = "block";
        item3.style.display = "block";

    } else{
        item1.style.display = "none";
        item2.style.display = "none";
        item3.style.display = "none";

    }
}



