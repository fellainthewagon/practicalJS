const calc = (size, material, options, promo, result) => {
  const sizeBlock = document.querySelector(size),
    materialBlock = document.querySelector(material),
    optionslBlock = document.querySelector(options),
    promolBlock = document.querySelector(promo),
    resultBlock = document.querySelector(result);

  let sum = 0;

  const calcFunc = () => {
    sum = Math.round(
      +sizeBlock.value * +materialBlock.value + +optionslBlock.value
    );
    if (sizeBlock.value == "" || materialBlock.value == "") {
      resultBlock.textContent =
        "Пожалуйста, выберите размер и материал картины";
    } else if (promolBlock.value === "IWANTPOPART") {
      resultBlock.textContent = Math.round(sum * 0.7);
    } else {
      resultBlock.textContent = sum;
    }
  };

  sizeBlock.addEventListener("change", calcFunc);
  materialBlock.addEventListener("change", calcFunc);
  optionslBlock.addEventListener("change", calcFunc);
  promolBlock.addEventListener("input", calcFunc);
};

export default calc;
