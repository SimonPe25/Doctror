class Input {
  constructor({ type, name, required, id, classes, placeholder, errorText }) {
    this.type = type;
    this.name = name;
    this.required = required;
    this.id = id;
    this.classes = classes;
    this.placeholder = placeholder;
    this.errorText = errorText;
  }
  render() {
    let input = document.createElement("input");
    input.type = this.type;
    input.name = this.name;
    input.required = this.required;
    input.classes = this.classes;
    input.placeholder = this.placeholder;

    this.input = input;
    return input;
  }
  handleBlur() {
    if (this.required) {
      if (!this.input.validity.valid) {
        this.input.setCustomValidity(this.errorText);
      }
    }
  }
}

class Modal {
  constructor({ id, classes }) {
    this.id = id;
    this.classes = classes;
    this.modal = this.render();
  }
  render() {
    const content = this.createForm(this.createFormElements());

    const span = this.createElement({
      elem: "span",
      content: "X",
      classes: ["close"],
    });
    span.addEventListener("click", () => this.closeModal());

    const divModalContent = this.createElement({
      elem: "div",
      classes: ["modal-content"],
      content: [span, content],
    });
    const divModal = this.createElement({
      elem: "div",
      classes: this.classes,
      content: [divModalContent],
      id: this.id,
    });
    return divModal;
  }

  createElement({ elem, id, classes, content }) {
    const element = document.createElement(elem);
    if (id) {
      element.id = id;
    }
    if (classes) {
      element.classList.add(...classes);
    }
    if (content) {
      element.append(...content);
    }

    return element;
  }

  createForm(formElements = []) {
    const form = document.createElement("form");
    form.id = "register-form";
    form.action = "";

    form.append(...formElements);

    return form;
  }
  createFormElements() {}

  openModal() {
    this.modal.classList.add("active");
  }

  closeModal() {
    this.modal.classList.remove("active");
  }
}

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

    const password = document.createElement("input");
    password.type = "password";
    password.name = "password";
    password.placeholder = "Ваш пароль";
    password.required = true;

    const submit = document.createElement("input");
    submit.type = "submit";
	submit.value = "Вход";
	

    function autorization() {
      submit.addEventListener("click", function (e) {
        e.preventDefault();

        const registrArr = {
          email: login.value,
          password: password.value,
        };
        console.log(registrArr);

        function post() {
          return fetch("https://ajax.test-danit.com/api/cards/login", {
            method: "POST",
            body: JSON.stringify(registrArr),
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer ${97430a23-0c4a-4353-896b-3a594003c441}",
            },
          })
            .then((response) => {
              console.log(response);
				return response.json();
            })
            .catch((e) => {
              console.log(e);
            })
            .then((data) => {
              console.log(data);
            });
        }
        post();
      });
    }
    autorization();
    return [login, password, submit];
  }
}

class Form {
  constructor({ id, classes, action }) {
    this.id = id;
  }
}

const root = document.getElementById("root");
const loginBtn = document.getElementById("login");


const loginForm = new AutorizationModal({
  id: "modalLogin",
  classes: ["modal", "class2"],
});

root.append(loginForm.modal);
loginBtn.addEventListener("click", function (e) {
  e.preventDefault();
  loginForm.openModal();
});
