const popup = document.querySelector('.popup');
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
    popup.classList.remove('popup_opened');
}

function popupClickHandler(event) {    
    if (event.target.classList.contains('popup')) {
        closePopup();
    }
}

editButton.addEventListener('click', showPopup);
popupCloseButton.addEventListener('click', closePopup);
popup.addEventListener('mousedown', popupClickHandler);

function openPopup() {
    nameField.value = title.textContent;
    profession.value = subTitle.textContent;
}

editButton.addEventListener('click', openPopup); 

function submitForm (event) {
    event.preventDefault ();
    title.textContent = nameField.value;
    subTitle.textContent = profession.value;
    closePopup();
}

form.addEventListener('submit', submitForm);
