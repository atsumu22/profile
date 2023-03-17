const rotateBtns = document.querySelectorAll(".btn-rotate");

rotateBtns.forEach((rotateBtn) => {
  rotateBtn.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('rotated');
  });
});
