function handle(number){
  document.querySelectorAll("img").forEach(function(img) {
    const id = img.id;
    if(id == number){
      const rotate = img.style.transform
      const topic = "topic" + number
      const element = document.getElementById(topic);
      if(rotate === ""){
        img.style.transform = "rotate(180deg)"
        element.children[1].style.display = "none"
        element.style.height = "max-content"
      }else{
        img.style.transform = ""
        element.children[1].style.display = "block"
        element.style.height = "max-content"
      }
    }
  });
};

function menuOpen(){
  const element = document.getElementById('menu')
  element.style.left = "0%"
  const body = document.getElementsByTagName('body')
  body[0].style.overflow = "hidden"
}

function menuClose(){
  const element = document.getElementById('menu')
  element.style.left = "100%"
  const body = document.getElementsByTagName('body')
  body[0].style.overflow = "auto"
}

function initial(number){
  document.querySelectorAll("img").forEach(function(img) {
    const id = img.id;
    const rotate = img.style.transform
    if(id == number){
      const topic = "topic" + number
      const element = document.getElementById(topic);
      if(number === 2 || number === 3 || number === 4){
        img.style.transform = "rotate(180deg)"
        element.children[1].style.display = "none"
        element.style.height = "max-content"
      }else{
        img.style.transform = ""
        element.children[1].style.display = "block"
        element.style.height = "max-content"
      }
    }
  });
}

initial(1)
initial(2)
initial(3)
initial(4)