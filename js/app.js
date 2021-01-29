
 class Modal {
	constructor({ id, classes}) {
		this.id = id;
		this.classes = classes;
		this.modal = this.render();
	}
	render() {
		const content = this.createForm() || "";
		const span = this.createElement({
			elem: "span",
			content: " X close",
			classes: ["close"],
		});
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
	 createForm(){}

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
	openModal() {
		this.modal.classList.add("active");
	}
	closeModal() {
		this.modal.classList.remove("active");
	}
}

class RegisterModal extends Modal {
	constructor({ id, classes}) {
super({ id, classes});
	}

createForm() {
		const form = document.createElement("form");
		form.id = "register-form";
		form.action= "";
		//форма регистрации
		const login = document.createElement("input");
		login.type = "email";
		login.className = "form-control";
		login.id="exampleInputEmail1";
		login.placeholder="Enter email";
		login.required = true;



	}
}




const modalWindow = new Modal({
	id: "modal1",
	classes: ["modal", "class2"],
	text: "Hello World",
});
console.log(modalWindow.render());

const btn = document.getElementById("myBtn");
const root = document.getElementById("root");

root.append(modalWindow.modal);
btn.addEventListener("click", function () {
	modalWindow.openModal();
});

const close = document.querySelector(".close");
close.addEventListener("click", function () {
	modalWindow.closeModal();
});
