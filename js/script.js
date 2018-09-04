var contactsButton = document.querySelector(".contacts-button");

var modalFeedback = document.querySelector(".modal-feedback");

var modalClose = document.querySelector(".modal-close");

var modalOverlay = document.querySelector(".modal-overlay");

var feedbackName = modalFeedback.querySelector("[name=feedback-name]");
var feedbackMail = modalFeedback.querySelector("[name=feedback-mail]");
var feedbackMessage = modalFeedback.querySelector("[name=feedback-message]");

var form = modalFeedback.querySelector("form");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("feedbackName");
} catch (err) {
  isStorageSupport = false;
}

contactsButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalFeedback.classList.add("modal-show-bounce");
  modalOverlay.classList.add("modal-show");

  if (storage) {
    feedbackName.value = storage;
    feedbackMail.focus();
  }
  else {
    feedbackName.focus();
  }
});

modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalFeedback.classList.remove("modal-show-bounce");
  modalOverlay.classList.remove("modal-show");
  modalFeedback.classList.remove("modal-error");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalFeedback.classList.contains("modal-show-bounce") && modalOverlay.classList.contains("modal-show")) {
      evt.preventDefault();
      modalFeedback.classList.remove("modal-show-bounce");
      modalOverlay.classList.remove("modal-show");
      modalFeedback.classList.remove("modal-error");
    }
  }
});

form.addEventListener("submit", function (evt) {
  if (!feedbackName.value || !feedbackMail.value || !feedbackMessage.value) {
    evt.preventDefault();
    modalFeedback.classList.add("modal-error");
  }
  else {
    if (isStorageSupport) {
      localStorage.setItem("feedbackName", feedbackName.value);
    }
  }

})




ymaps.ready(init);
function init(){
  var myMap = new ymaps.Map("map", {
  center: [59.9, 30.3],
  zoom: 14
  });
}

var myPlacemark = new ymaps.Placemark([59.9, 30.3], {
  hintContent: 'Содержимое всплывающей подсказки',
  balloonContent: 'Содержимое балуна'
});

myMap.geoObjects.add(myPlacemark);
