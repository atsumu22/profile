const buttonToEngs = document.querySelectorAll(".change-lang-eng")
const buttonToJpns = document.querySelectorAll(".change-lang-jpn")
const englishWords = document.querySelectorAll(".lang-en");
const JpWords = document.querySelectorAll(".lang-jp");
const dropDown = document.querySelector(".dropdown-toggle")

buttonToJpns.forEach((buttonToJpn) => {
  buttonToJpn.addEventListener("click", () => {
    englishWords.forEach((englishWord) => {
      englishWord.classList.add("d-none");
    })
    JpWords.forEach((JpWords) => {
      JpWords.classList.remove("d-none")
    })
    buttonToJpn.classList.add("active");
    buttonToEngs.forEach((buttonToEng) => {
      buttonToEng.classList.remove("active");
    });
  });
});

buttonToEngs.forEach((buttonToEng) => {
  buttonToEng.addEventListener("click", () => {
    englishWords.forEach((englishWord) => {
      englishWord.classList.remove("d-none");
    })
    JpWords.forEach((JpWords) => {
      JpWords.classList.add("d-none")
    })
    buttonToEng.classList.add("active");
    buttonToJpns.forEach((buttonToJpn) => {
      buttonToJpn.classList.remove("active");
    });
  });
});
