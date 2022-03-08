function handle(number){
  document.querySelectorAll("img").forEach(function(img) {
    const id = img.id;
    if(id == number){
      const rotate = img.style.transform
      if(rotate === ""){
        img.style.transform = "rotate(180deg)"
        console.log(img)
      }else{
        img.style.transform = ""
        console.log(img)
      }

      
    }
  });
};