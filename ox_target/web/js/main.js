import { createOptions } from "./createOptions.js";
import { onClick } from "./createOptions.js";
import { wheelup } from "./createOptions.js";
import { wheeldown } from "./createOptions.js";
const optionsWrapper = document.getElementById("options-wrapper");
const body = document.body;
const eye = document.getElementById("eye");

window.addEventListener("message", (event) => {


  

  if (event.data.type == 'input') {
    switch (event.data.key) {
      case 'E':
        onClick()
        break;
      case 'up':
        wheelup()
        break;
      case 'down':
        wheeldown()
        break;
    }
    return
  }


  switch (event.data.event) {


    case "visible": {
      return body.style.display = event.data.state;
    }

    case "leftTarget": {
      optionsWrapper.innerHTML = "";
      return eye.style.visibility = 'hidden';
    }

    case "setTarget": {
      eye.style.visibility = 'visible';
      optionsWrapper.innerHTML = "";
      if (event.data.options) {
        for (const type in event.data.options) {
          event.data.options[type].forEach((data, id) => {
            createOptions(type, data, id + 1);
          });
        }
      }

      if (event.data.zones) {
        for (let i = 0; i < event.data.zones.length; i++) {
          event.data.zones[i].forEach((data, id) => {
            createOptions("zones", data, id + 1, i + 1);
          });
        }
      }
    }
  }
});
