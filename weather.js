<script>

let temperature;

  function updateHeading (newHeading){
    let heading = document.querySelector("h2");
    heading.innerHTML = newHeading;
  }

  function EmojiHeader2 (newHeading2){
    let heading = document.querySelector("h1");
    heading.innerHTML = newHeading2;
  }

function newTemp(){
   
  if (temperature >= 20){
    return true;
}
return false;
}
function changecity(){
  let currentcity = prompt ("What is your current city ? "); 
  temperature = prompt ("What is your current temperature in your city ? "); 

  if (newTemp(temperature)){
    EmojiHeader2("😊")
    updateHeading(` Currently ${temperature} °C  in ${currentcity}`);
  }
  else{
    EmojiHeader2("😭")
    updateHeading(` Currently ${temperature} °C  in ${currentcity}`);
  }
}
let CityButton = document.querySelector("button");
CityButton.addEventListener("click",changecity);
</script>
