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
        element.style.height = "93px"
        
          
      }else{
        img.style.transform = ""
        element.children[1].style.display = "block"
        element.style.height = "max-content"
      }
    }
  });
};