document.getElementById("ballon").addEventListener("click", 
  function(inflate) {
    changeSize("ballon", 20);
    changeColor("ballon", ["red", "green", "blue"]);
  }
);

let size = 200;

function changeSize(_divId_, n) {
  const maxSize = 420;
  const minSize = 200;

  if ( document.getElementById(_divId_) != null ) {
     size += n;
     document.getElementById(_divId_).style.width = String(size) + "px";
     document.getElementById(_divId_).style.height = String(size) + "px";
  }

  if (size >= maxSize) {
    document.getElementById(_divId_).style.width = "200px";
    document.getElementById(_divId_).style.height = "200px";
    size = 200;
  }

  if (size <= minSize) {
    document.getElementById(_divId_).style.width = "200px";
    document.getElementById(_divId_).style.height = "200px";
    size = 200;
  }
 }

 let couleur = "red"

 function changeColor(_divId_, tab) {
  let i = tab.indexOf(couleur);
  document.getElementById(_divId_).style.background = tab[(i+1)%3];
  couleur = document.getElementById(_divId_).style.background;
}

document.getElementById("ballon").addEventListener("mouseout", 
  function(deflate){
  changeColor("ballon", ["blue", "green", "red"]);
  changeSize("ballon", -5);
}
);