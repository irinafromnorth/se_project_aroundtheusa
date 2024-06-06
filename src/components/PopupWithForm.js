import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._handleFormSubmit = handleFormSubmit;
    this._inputs = this._popupForm.querySelectorAll(".modal__input");
    this._modalButton=this._popupElement.querySelector(".modal__button");
    this._submitText=this._modalButton.textContent;
  }
  _getInputValues() {
    const data = {};
    this._inputs.forEach((input) => {
      data[input.name] = input.value;
    });
    return data;
  }
  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this._popupForm.reset();
    });
  }
  renderLoad(isLoading,loadingText="Saving..."){
    if (isLoading){
      this._modalButton.textContent=loadingText;
    }else{
      this._modalButton.textContent=this._submitText;
    }
  }
}
