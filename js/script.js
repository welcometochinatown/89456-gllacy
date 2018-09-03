const contactsButton = document.querySelector(".contacts-button");
const modalFeedback = document.querySelector(".modal-feedback");
const modalClose = document.querySelector(".modal-close");
const modalOverlay = document.querySelector(".modal-overlay")

contactsButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  modalFeedback.classList.add("modal-show-bounce");
  modalOverlay.classList.add("modal-show");
});

modalClose.addEventListener("click", (evt) => {
  evt.preventDefault();
  modalFeedback.classList.remove("modal-show-bounce");
  modalOverlay.classList.remove("modal-show");
});

window.addEventListener("keydown", (evt) => {
  if (evt.keyCode === 27) {
    if (modalFeedback.classList.contains("modal-show-bounce") && modalOverlay.classList.contains("modal-show")) {
      evt.preventDefault();
      modalFeedback.classList.remove("modal-show-bounce");
      modalOverlay.classList.remove("modal-show");
    }
  }
});
