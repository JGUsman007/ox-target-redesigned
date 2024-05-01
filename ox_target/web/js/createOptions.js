import { fetchNui } from "./fetchNui.js";

const optionsWrapper = document.getElementById("options-wrapper");



export function onClick() {
  var opselected = optionsWrapper.children[active]
  // when nuifocus is disabled after a click, the hover event is never released
  opselected.style.pointerEvents = "none";

  fetchNui("select", [opselected.targetType, opselected.targetId, opselected.zoneId]);
  // is there a better way to handle this? probably
  setTimeout(() => (opselected.style.pointerEvents = "auto"), 100);
}
var active = -1
export function createOptions(type, data, id, zoneId) {
  if (data.hide) return;

  const option = document.createElement("button");
  const iconElement = `<i class="fa-fw ${data.icon} option-icon" ${
    data.iconColor ? `style = color:${data.iconColor} !important` : null
  }"></i>`;

  option.innerHTML = `${iconElement}<p class="option-label">${data.label}</p>`;
  option.className = "option-container";
  option.targetType = type;
  option.targetId = id;
  option.zoneId = zoneId;

  option.addEventListener("click", onClick);
  optionsWrapper.appendChild(option);
  active = 0
  optionsWrapper.children[0].classList.add('option-container-active')
 // optionsWrapper.children[0].focus();
}


export function wheelup() {
  var l = optionsWrapper.children.length
  if (active > -1) {
    if (active > 0) {
      active--
    }
    clearotherchildrens(active)
    optionsWrapper.children[active].classList.add('option-container-active')
  }
}

export function wheeldown() {
  var l = optionsWrapper.children.length
  if (active < l) {
    if (active < l - 1) {
      active++
    }
    clearotherchildrens(active)
    optionsWrapper.children[active].classList.add('option-container-active')

  }
}


function clearotherchildrens(){
  var length = optionsWrapper.children
  for (let i = 0; i < length.length; i++) {
    if (i != active){ 
      optionsWrapper.children[i].classList.remove('option-container-active')
    }
  }
}
