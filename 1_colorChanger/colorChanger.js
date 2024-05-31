const buttons = document.querySelectorAll('.button');
// console.log(buttons);
const body = document.querySelector('body');

buttons.forEach(function (button) {
//   console.log(button);



  // Event listener
  button.addEventListener('click', function (eve_Object) {
    // console.log(eve_Object);
    // console.log(eve_Object.target);


    // Background color changer
    if (eve_Object.target.id === 'grey') {
      body.style.backgroundColor = eve_Object.target.id;
    }
    if (eve_Object.target.id === 'white') {
      body.style.backgroundColor = eve_Object.target.id;
    }
    if (eve_Object.target.id === 'blue') {
      body.style.backgroundColor = eve_Object.target.id;
    }
    if (eve_Object.target.id === 'yellow') {
      body.style.backgroundColor = eve_Object.target.id;
    }
  });
});
