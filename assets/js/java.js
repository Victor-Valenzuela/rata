function showhide(id) {
    var e = document.getElementById(id);
    e.style.display = (e.style.display == 'block') ? 'none' : 'block';
}


// tipeo
function typeEffect(element, speed) {
    var text = element.innerHTML;
    element.innerHTML = "";

    var i = 0;
    var timer = setInterval(function() {
        if (i < text.length) {
            element.append(text.charAt(i));
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
}

// application
var speed = 55;
var h1 = document.querySelector(".tipeo");

var delay = h1.innerHTML.length * speed + speed;

// type affect to header
typeEffect(h1, speed);

// type affect to body
setTimeout(function() {
    p.style.display = "inline-block";
    typeEffect(p, speed);
}, delay);