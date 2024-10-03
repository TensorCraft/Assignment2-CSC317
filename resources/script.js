window.addEventListener('mousemove', function (e) {
    var w = window.innerWidth;
    var h = window.innerHeight;
    var offsetX = 0.5 - e.pageX / w;
    var offsetY = 0.5 - e.pageY / h;
    console.log(offsetX, offsetY)

    var city = document.getElementById("header_city");
    var mountains = document.getElementById("header_mountains");
    const city_offset = 20;
    const mounatins_offset = 50;

    var translate_city = "translate3d(" + Math.round(offsetX * city_offset) + "px," + Math.round(offsetY * city_offset) + "px, 0px)";
    var translate_mountains = "translate3d(" + Math.round(offsetX * mounatins_offset) + "px," + Math.round(offsetY * mounatins_offset) + "px, 0px)";

    city.style.webkitTransform = translate_city;
    city.style.transform = translate_city;
    city.style.mozTransform = translate_city;

    mountains.style.webkitTransform = translate_mountains;
    mountains.style.transform = translate_mountains;
    mountains.style.mozTransform = translate_mountains;
});