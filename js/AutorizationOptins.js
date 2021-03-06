
import delAlert from "./delAlert.js";
import unBlockSearch from "./unBlockSearch.js";
import deleteBtn from "./deleteBtn.js";
import createWindowCard from "./createWindowCard.js";
import token from "./tokenVerification.js"
import wathCards from "./wathCard.js"

import Modal from "./classModal.js";




export default function AutorizationOptins() {
  class AutorizationModal extends Modal {
    constructor({ id, classes }) {
      super({ id, classes });
    }
    createFormElements() {
      const login = document.createElement("input");
      login.type = "text";
      login.name = "login";
      login.placeholder = "Ваш логин";
      login.required = true;
      login.classList = "modal_input"

      const password = document.createElement("input");
      password.type = "password";
      password.name = "password";
      password.placeholder = "Ваш пароль";
      password.required = true;
      password.classList = "modal_input"

      const submit = document.createElement("input");
      submit.type = "submit";
      submit.value = "Вход";
      submit.classList = "modal_input"


      function autorization() {
        submit.addEventListener("click", function (e) {
          e.preventDefault();



          const registrArr = {
            email: login.value,
            password: password.value,
          };

          console.log(registrArr);

          let parol = password.value;
          let newParol = parol.replace(/0/gi, '?');

          localStorage.setItem("login", login.value)
          localStorage.setItem('Uncaught SyntaxError', newParol)
          let clientSecret = localStorage.getItem('token');

          function post() {
            return fetch("https://ajax.test-danit.com/api/cards/login", {
              method: "POST",
              body: JSON.stringify(registrArr),
              headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${clientSecret}`,
              },
            })
              .then((response) => {
                if (response.status === 200) {
                  unBlockSearch()
                  deleteBtn()
                  token();
                  return response.text();
                } else {
                  alert(`Вы не зарегистрированный пользователь`)

                  return
                }
              })
              .catch((e) => {
                console.log(e);
              })
              .then((data) => {
                console.log(`data-token`, data);
                if (data.includes("-")) {
                  token()
                  localStorage.setItem("token", data);

                } else {
                  alert(`токен не записан`)
                }

              });
          }

          post();
        });
      }

      autorization();

      return [login, password, submit];
    }

  }

  const loginForm = new AutorizationModal({
    id: "modalLogin",
    classes: ["modal", "class2"],
  });

  const root = document.getElementById("root");
  const loginBtn = document.getElementById("login");



  root.append(loginForm.modal);
  loginBtn.addEventListener("click", function (e) {
    e.preventDefault();
    loginForm.openModal();
  });
}
