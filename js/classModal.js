export default class Modal {
  constructor({ id, classes }) {
    this.id = id;
    this.classes = classes;
    this.modal = this.render();
  }
  render() {
    const content = this.createForm(this.createFormElements());
    const span = this.createElement ({
      elem: "span",
      content: "X",
      classes: ["close"],
    });
    span.addEventListener("click", () => this.closeModal());
    const divModalContent = this.createElement({
      elem: "div",
      classes: ["modal-content", "modal-dialog", "modal-lg"],
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
  createFormElements() { }
  openModal() {
    this.modal.classList.add("active");
  }
  closeModal() {
    this.modal.classList.remove("active");
  }
}