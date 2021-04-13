const filter = () => {
  const menu = document.querySelector(".portfolio-menu"),
    items = menu.querySelectorAll("li"),
    btnAll = menu.querySelector(".all"),
    btnGrandmother = menu.querySelector(".grandmother"),
    btnGranddad = menu.querySelector(".granddad"),
    wrapper = document.querySelector(".portfolio-wrapper"),
    markAll = wrapper.querySelectorAll(".all"),
    no = document.querySelector(".portfolio-no");

  btnAll.addEventListener("click", () => {
    typeFilter(markAll);
  });
  btnGrandmother.addEventListener("click", () => {
    typeFilter();
  });
  btnGranddad.addEventListener("click", () => {
    typeFilter();
  });

  function grabActionItems(selector) {
    const btn = menu.querySelector(selector),
      markType = wrapper.querySelectorAll(selector);
    btn.addEventListener("click", () => {
      typeFilter(markType);
    });
  }

  grabActionItems(".girl");
  grabActionItems(".guy");
  grabActionItems(".chef");
  grabActionItems(".lovers");

  const typeFilter = (markType) => {
    markAll.forEach((mark) => {
      mark.style.display = "none";
      mark.classList.remove("animated", "FadeIn");
    });
    no.style.display = "none";
    no.classList.remove("animated", "FadeIn");

    if (markType) {
      markType.forEach((mark) => {
        mark.style.display = "block";
        mark.classList.add("animated", "FadeIn");
      });
    } else {
      no.style.display = "block";
      no.classList.add("animated", "FadeIn");
    }
  };

  menu.addEventListener("click", (e) => {
    let target = e.target;
    if (target && target.tagName == "LI") {
      items.forEach((btn) => btn.classList.remove("active"));
      target.classList.add("active");
    }
  });
};

export default filter;
