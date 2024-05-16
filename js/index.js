const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener(
    "mouseover",
    (event) => {
      // highlight the mouseover target
      event.target.style.color = "black";

      // reset the color after a short delay
      setTimeout(() => {
        event.target.style.color = "";
      }, 1000);
    },
    false,
  );

  link2.addEventListener(
    "mouseover",
    (event) => {
      // highlight the mouseover target
      event.target.style.color = "black";

      // reset the color after a short delay
      setTimeout(() => {
        event.target.style.color = "";
      }, 1000);
    },
    false,
  );

  link3.addEventListener(
    "mouseover",
    (event) => {
      // highlight the mouseover target
      event.target.style.color = "black";

      // reset the color after a short delay
      setTimeout(() => {
        event.target.style.color = "";
      }, 1000);
    },
    false,
  );
