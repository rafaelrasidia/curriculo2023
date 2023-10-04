window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var button = document.getElementById("voltaInicio");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

document.getElementById("voltaInicio").addEventListener("click", function() {
    scrollToTop();
});

function scrollToTop() {
    var scrollDuration = 800; 
    var scrollStep = -window.scrollY / (scrollDuration / 15);
    var scrollInterval = setInterval(function() {
        if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
        } else {
            clearInterval(scrollInterval);
        }
    }, 15);
}
