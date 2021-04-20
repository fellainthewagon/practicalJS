import $ from "../core";

$.prototype.addClass = function (...classNames) {
  for (let i = 0; i < this.length; i++) {
    this[i].classList.add(...classNames);
  }
  return this;
};

$.prototype.removeClass = function (...classNames) {
  for (let i = 0; i < this.length; i++) {
    if (this[i].classList) {
      this[i].classList.remove(...classNames);
    }
  }
  return this;
};

$.prototype.toggleClass = function (className) {
  for (let i = 0; i < this.length; i++) {
    this[i].classList.toggle(className);
  }
  return this;
};

$.prototype.hasClass = function (className) {
  for (let i = 0; i < this.length; i++) {
    return this[i].classList.contains(className) ? true : false;
  }
};

$.prototype.setAtt = function (nameAtt, value) {
  for (let i = 0; i < this.length; i++) {
    this[i].setAttribute(nameAtt, value);
  }
  return this;
};

$.prototype.delAtt = function (nameAtt) {
  for (let i = 0; i < this.length; i++) {
    this[i].removeAttribute(nameAtt);
  }
  return this;
};

$.prototype.getAtt = function (nameAtt) {
  for (let i = 0; i < this.length; i++) {
    return this[i].getAttribute(nameAtt);
  }
};
