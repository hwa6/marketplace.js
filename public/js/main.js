/* eslint-env jquery, browser */
$(document).ready(() => {

  // Place JavaScript code here:
  
  //for the outside REST API:
  //press the button to get an image of a random dish
  document.getElementById("random-dishes-button").
  addEventListener("click", function(e){
    let req = new XMLHttpRequest();
    let url = new URL("https://foodish-api.herokuapp.com/api/");
    req.open('GET', url);
    req.responseType = 'json';

    req.onload = function (){
      //show/update dog image
      let image = this.response.url;
      document.getElementById("food-pic").setAttribute("src", image);
    };
    req.send();

  });

});
