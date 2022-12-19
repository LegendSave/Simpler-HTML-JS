/**
* @param {number} dx - Starting X position.
* @param {number} dy - Starting Y position.
* @param {string} title - Title content of dropdown.
* @param {string} text - Content inside of dropdown.
* @param {string} type - Type of element inside of dropdown
* @param {'down, left, right'} direction - Direction dropdown opens.
* @param {'HTML element ID'} [parentElement] - Element for child elements.
  */
function dropdown(dx, dy, title, text, type, direction, parentElement) {
  //Defining variables. Used later.
  this.dx = dx;
  this.dy = dy;
  this.title = title;
  this.text = text;
  this.type = type;
  this.direction = direction;
  this.parentElement = parentElement;

  let offX = 10;
  let opened = false;
  //Checks if interaction is active.
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
  let titleElement = document.createElement("h1");
  titleElement.style.paddingRight = offX + "px";
  titleElement.style.display = "inline";
  titleElement.innerHTML = title;
  parentElementsrc.appendChild(titleElement);
  //Directional setup
  let img = document.createElement('img');
  img.style.width = "32pt";
  img.style.height = "32pt";
  //Directional check
  if (direction == "down") {
    img.src = "https://cdn-icons-png.flaticon.com/512/25/25623.png";
    parentElementsrc.appendChild(img);
  }
  //Dropdown element(s)
  let bodyElement;
  let dropdownfill;
    bodyElement = document.createElement(type);
    bodyElement.innerHTML = text;
    dropdownfill.style.position = 'absolute';
    dropdownfill.style.left = '2.5vmax';
    dropdownfill.style.visibility = "hidden";
  img.addEventListener('click',function() {
    if (opened){
      dropdownfill.style.visibility = 'hidden';
      opened = false;
    }else{
      dropdownfill.style.visibility = 'visible';
      opened = true;
    }
  });
  img.style.cursor = 'pointer';
  titleElement.addEventListener('click',function() {
    if (opened){
      dropdownfill.style.visibility = 'hidden';
      opened = false;
    }else{
      dropdownfill.style.visibility = 'visible';
      opened = true;
    }
  });
  titleElement.style.cursor = 'pointer';
}
//Example function
dropdown(200, 200, "Title", "Inner text", "p", "down", "container");

