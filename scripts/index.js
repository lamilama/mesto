const popup = document.querySelector('.popup');
const popupContent = document.querySelector('.popup__content');
const popupTitle = document.querySelector('.popup__title');
const popupCloseButton = document.querySelector('.popup__close');
const editButton = document.querySelector('.edit-button');
const title = document.querySelector('.profile__title');
const subTitle = document.querySelector('.profile__subtitle');
const form = document.querySelector('.popup__form');
const nameField = document.querySelector('.popup__input_type_name');
const profession = document.querySelector('.popup__input_type_title');

function showPopup() {
    popup.classList.add('popup_opened');
}

function closePopup() {
    popup.classList.remove('popup_opened')
}

function popupClickHandler(event) {    
    if (event.target.classList.contains('popup')) {
        closePopup()
    }
}

editButton.addEventListener('click', showPopup);
popupCloseButton.addEventListener('click', closePopup);
popup.addEventListener('mousedown', popupClickHandler);


function submitForm (event) {
    event.preventDefault ();
    title.textContent = nameField.value;
    subTitle.textContent = profession.value;
}

form.addEventListener('submit', submitForm);