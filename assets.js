/**
* @param {number} dx - Starting X position.
* @param {number} dy - Starting Y position.
* @param {string} title - Title content of dropdown. Max: 41 characters.
* @param {string[]|string} text - Content inside of dropdown.
* @param {string[]|string} type - Type of element inside of dropdown
* @param {'up, down, left, right'} direction - Direction dropdown opens.
* @param {'event'} [interaction] - Using on event listeners reciprocated. 
* @param {'HTML element ID'} [parentElement] - Element for child elements.
  */
function dropdown(dx, dy, title, text, type, direction, parentElement, interaction) {
  //Defining variables. Used later.
  this.dx = dx;
  this.dy = dy;
  this.title = title;
  this.text = text;
  this.type = type;
  this.direction = direction;
  this.parentElement = parentElement;
  this.interaction = interaction;

  let offX = title.length;
  let eventNav = false;
  //Checks if interaction is active.
  if (interaction) {
    document.addEventListener('${interaction}', e => {
      if (e.returnValue) {
        eventNav = true;
      }
      else {
        console.error("Reciprocated value is unable to be used.");
        eventNav = false;
      }
    });
  }
  //Returning error if code is too long.
  if (offX > 41){
    console.error("String is longer than 41 characters. Reduce string to 41 characters or less.");
    return 0;
  }
  //Checks if parentElement is active.
  var parentElementsrc;
  if (parentElement) {
    parentElementsrc = document.getElementById(parentElement);
  }
  else {
    parentElementsrc = document.querySelector('body');
  }
  //Element setup
  let bodyElement = document.createElement(type);
  let titleElement = document.createElement("h1");
  titleElement.style.paddingRight = offX + "px";
  titleElement.style.display = "inline";
  titleElement.innerHTML = title;
  bodyElement.innerHTML = text;
  parentElementsrc.appendChild(titleElement);
  //Directional setup
  let dwnimg = document.createElement('img');
  dwnimg.src = "https://cdn-icons-png.flaticon.com/512/25/25623.png";
  dwnimg.style.width = "32pt";
  dwnimg.style.height = "32pt";
  //Directional check
  if (direction == "down") {
    parentElementsrc.appendChild(dwnimg);
  }
  //Dropdown element(s)
  let dropdownfill = parentElementsrc.appendChild(bodyElement);
  dropdownfill.style.position = 'absolute';
  dropdownfill.style.left = '2.5vmax';

}

//Example function
dropdown(200, 200, "Title Content", "Inner content", "p", "down", "container");