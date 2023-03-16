const infoButton = document.querySelector('.btn-moreinfo');
const infoButtonText = document.querySelector('.info-target');
const curText = infoButtonText.innerText

infoButton.addEventListener("click", (event) => {
  if(event.currentTarget.innerText == curText){
    infoButtonText.innerText = "Close";
  }
  else {
    infoButtonText.innerText = curText
  };
});
