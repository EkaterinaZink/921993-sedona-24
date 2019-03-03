var modal_button = document.querySelector(".find-hotel-button");
var modal_search = document.querySelector(".search-form");

var form = modal_search.querySelector("form");
var checkin_date = modal_search.querySelector(".checkin-date");
var checkout_date = modal_search.querySelector(".checkout-date");
var adult = modal_search.querySelector(".booking-adults");
var children = modal_search.querySelector(".booking-children");


modal_button.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal_search.classList.toggle("modal-close");
  modal_search.classList.remove("modal-error");
  checkin_date.focus();
});

form.addEventListener("submit", function (evt) {
  if (!checkin_date.value || !checkout_date.value || !adult.value || !children.value) {
    evt.preventDefault();
    modal_search.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("adult", adult.value);
      localStorage.setItem("children", children.value);
    }
  }
});
