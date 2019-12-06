var ec = document.getElementById("echo");
var ant = document.getElementById("ant");
var pr = document.getElementById("prog");
var bak = document.getElementsByClassName("back")[0];

ant.addEventListener("click",function(){
var isClickInside = ant.contains(event.target);
    if (!isClickInside) {
	document.body.style.backgroundImage = "url('img/tom.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.transition = "all 0.5s";
  } else 
	{document.body.style.backgroundImage = "url('img/antfarm back.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.transition = "all 0.5s";
    }
}
)

ec.addEventListener("click",function(){
    var isClickInside = ec.contains(event.target);
    if (!isClickInside) {
	document.body.style.backgroundImage = "url('img/tom.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.transition = "all 0.5s";
  } else 
	{document.body.style.backgroundImage = "url('img/echo%20back.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.transition = "all 0.5s";
    }
}
                   )
pr.addEventListener("click",function(){
var isClickInside = pr.contains(event.target);
    if (!isClickInside) {
	document.body.style.backgroundImage = "url('img/tom.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.transition = "all 0.5s";
  } else 
	{document.body.style.backgroundImage = "url('img/purg back.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.transition = "all 0.5s";
    }
}
)
bak.addEventListener("click",function(){
var isClickInside = bak.contains(event.target);
    if (!isClickInside) {
	document.body.style.backgroundImage = "url('img/tom.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.transition = "all 0.5s";
  } else 
	{document.body.style.backgroundImage = "url('img/tom.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.transition = "all 0.5s";
    }
}
)
