const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastCheked;

function handleCheck(e) {
  // Check if they had the SHIFT key down
  // AND check that they are checking it
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    // go ahead and do what we please
    //loop over every single checkbox
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastCheked) {
        inBetween = !inBetween;
        console.error('between');
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastCheked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));