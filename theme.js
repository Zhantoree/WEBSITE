let switchMode = document.getElementById("theme");

switchMode.onclick = function(){
  let theme = document.getElementById("themee");

  if(theme.getAttribute("href") == "lightstyle.css"){
    theme.href = "darkstyle.css";
  } else{
    theme.href = "lightstyle.css";
  }
}
