var contactsButton = document.querySelector(".contacts-button");
var modalFeedback = document.querySelector(".modal-feedback");
var modalClose = document.querySelector(".modal-close");
var modalOverlay = document.querySelector(".modal-overlay");

contactsButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalFeedback.classList.add("modal-show-bounce");
  modalOverlay.classList.add("modal-show");
});

modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalFeedback.classList.remove("modal-show-bounce");
  modalOverlay.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalFeedback.classList.contains("modal-show-bounce") && modalOverlay.classList.contains("modal-show")) {
      evt.preventDefault();
      modalFeedback.classList.remove("modal-show-bounce");
      modalOverlay.classList.remove("modal-show");
    }
  }
});
