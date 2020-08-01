$(document).ready(function() {
    $("#breadboard1").on("click", function(event) {
        var x = event.pageX - this.offsetLeft;
        var y = event.pageY - this.offsetTop;
        console.log("X: " + x + ";" + "Y: " + y);
        alert("X Coordinate: " + x + " Y Coordinate: " + y);
    });
});