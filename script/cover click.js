var antfarm = document.getElementsByClassName("cover1")[0];
var echo = document.getElementsByClassName("cover2")[0];
var purgatory = document.getElementsByClassName("cover3")[0];

var set1 = document.getElementsByClassName("album-set")[0];
var set2 = document.getElementsByClassName("album-set")[1];
var set3 = document.getElementsByClassName("album-set")[2];
document.addEventListener("click", klik, false);

var images = new Array()
			function preload() {
				for (i = 0; i < preload.arguments.length; i++) {
					images[i] = new Image()
					images[i].src = preload.arguments[i]
				}
			}
			preload(
				"img/music-img/cover1.jpg",
                "img/music-img/cover2.jpg",
                "img/music-img/cover3.jpg",
                "img/tom.jpg"
			);

function klik(evObj) {
    var background = document.getElementsByClassName("background")[0];
    switch (evObj.target) {
        case antfarm: background.style.background = "url('img/music-img/cover1.jpg')";
            background.style.backgroundPosition = "center center";
            background.style.backgroundSize = "cover";
            background.style.backgroundAttachment = "fixed";
            set2.classList.remove("visible");
            set2.classList.add("hidden");
            set3.classList.remove("visible");
            set3.classList.add("hidden");
            set1.classList.remove("hidden");
            set1.classList.add("visible");
            break;
            
        case echo: background.style.background = "url('img/music-img/cover2.jpg')";
            background.style.backgroundPosition = "center center";
            background.style.backgroundSize = "cover";
            background.style.backgroundAttachment = "fixed";
            set1.classList.remove("visible");
            set1.classList.add("hidden");
            set3.classList.remove("visible");
            set3.classList.add("hidden");
            set2.classList.remove("hidden");
            set2.classList.add("visible");
            break;
            
        case purgatory: background.style.background = "url('img/music-img/cover3.jpg')";
            background.style.backgroundPosition = "center center";
            background.style.backgroundSize = "cover";
            background.style.backgroundAttachment = "fixed";
            set1.classList.remove("visible");
            set1.classList.add("hidden");
            set2.classList.remove("visible");
            set2.classList.add("hidden");
            set3.classList.remove("hidden");
            set3.classList.add("visible");
            break;
            
        default: background.style.background = "url('img/tom.jpg')";
            background.style.backgroundPosition = "center center";
            background.style.backgroundSize = "cover";
            background.style.backgroundAttachment = "fixed";
            set2.classList.remove("visible");
            set2.classList.add("hidden");
            set3.classList.remove("visible");
            set3.classList.add("hidden");
            set1.classList.remove("visible");
            set1.classList.add("hidden");
    }
}
