const selectBtn = document.querySelector(".select-btn");
const selectArrowClose = document.querySelector(".select-arrow-close");
const selectArrowOpen = document.querySelector(".select-arrow-open");
const selectItem = document.querySelectorAll(".select-item");
const selectItems = document.querySelector(".select-items");
const selectInput = document.querySelector(".select-input");

selectArrowClose.classList.add("select-arrow_active");


function closeSelect () {
    selectArrowClose.classList.add("select-arrow_active");
    selectArrowOpen.classList.remove("select-arrow_active");

    selectItems.classList.remove("select-items_active");
    
    selectBtn.classList.remove ("select-btn_active");
}

function changeSelect () {
    selectArrowClose.classList.toggle("select-arrow_active");
    selectArrowOpen.classList.toggle("select-arrow_active");

    selectItems.classList.toggle("select-items_active");
    
    selectBtn.classList.toggle("select-btn_active");
}


selectBtn.onclick = (e) => {
    e.stopPropagation();
    changeSelect();
    return false;
  }

selectItem.forEach(function (listItem) {
    listItem.onclick = (e) => {
        e.stopPropagation();
        changeSelect();
        selectBtn.innerText = listItem.innerText;
        selectInput.value = listItem.dataset.value;
        return false;
      }
})

document.onclick = () => {
    closeSelect();
}

document.onkeydown = (e) => {
    if (e.key === 'Tab' || e.key === 'Escape' ) {
        closeSelect();
    }
}


// ---------------------------------------

const rangeOutput = document.querySelector(".range__output");
const rangeInput = document.querySelector(".range__input");

rangeInput.onchange = () => {
    rangeOutput.innerText = `${rangeInput.value}%`
  }



// ---------------------------------------

function ready () {
    let 
}