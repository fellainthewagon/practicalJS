const scrolling = (upSelector) => {
  const upElem = document.querySelector(upSelector);

  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 1650) {
      upElem.classList.add("animated", "fadeIn");
      upElem.classList.remove("fadeOut");
    } else {
      upElem.classList.add("fadeOut");
      upElem.classList.remove("fadeIn");
    }
  });

  //scrolling with requestAnimationFrame

  let links = document.querySelectorAll("[href^='#']"),
    speed = 0.1;

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      let widthTop = document.documentElement.scrollTop,
        hash = this.hash,
        toBlock = document.querySelector(hash).getBoundingClientRect().top,
        start = null;

      requestAnimationFrame(step);

      function step(time) {
        if (start === null) {
          start = time;
        }

        let progress = time - start,
          r =
            toBlock < 0
              ? Math.max(widthTop - progress / speed, widthTop + toBlock)
              : Math.min(widthTop + progress / speed, widthTop + toBlock);

        document.documentElement.scrollTo(0, r);

        if (r != widthTop + toBlock) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash;
        }
      }
    });
  });

  // pure JS  smooth scrolling
  /* const element = document.documentElement,
    body = document.body;

  const calcScroll = () => {
    upElem.addEventListener("click", function (event) {
      // scrollTop - user's scroll distance down in px
      let scrollTop = Math.round(body.scrollTop || element.scrollTop);
      //   console.log(this, this.hash);
      if (this.hash !== "") {
        event.preventDefault();
        let hashElem = document.querySelector(this.hash),
          // hashElemTop - dist from hashElem to parent
          hashElemTop = 0;

        while (hashElem.offsetParent) {
          hashElemTop += hashElem.offsetTop;
          hashElem = hashElem.offsetParent;
        }

        hashElemTop = Math.round(hashElemTop);

        smoothScroll(scrollTop, hashElemTop, this.hash);
      }
    });
  };

  const smoothScroll = (from, to, hash) => {
    let timeInterval = 1,
      prevScrollTop,
      speed;

    if (to > from) {
      speed = 50;
    } else {
      speed = -50;
    }

    let move = setInterval(function () {
      let scrollTop = Math.round(body.scrollTop || element.scrollTop);
      if (
        prevScrollTop === scrollTop ||
        (to > from && scrollTop >= to) ||
        (to < from && scrollTop <= to)
      ) {
        clearInterval(move);
        history.replaceState(
          history.state,
          document.title,
          location.href.replace(/#.*$/g, "") + hash
        );
      } else {
        body.scrollTop += speed;
        element.scrollTop += speed;
        prevScrollTop = scrollTop;
        // console.log(to, from, scrollTop, to);
      }
    }, timeInterval);
  };

  calcScroll(); */
};

export default scrolling;
