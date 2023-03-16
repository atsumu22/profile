const textboxes = document.querySelectorAll(".card-works__text");

  textboxes.forEach((textbox) => {
      textbox.addEventListener("click", (event) => {
        event.currentTarget.classList.toggle('clicked');
      });
  });
