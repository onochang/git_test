document.getElementById("show-hobby").addEventListener("click", function() {
    var hobbyDetails = document.getElementById("hobby-details");
    if (hobbyDetails.style.display === "none") {
        hobbyDetails.style.display = "block";
    } else {
        hobbyDetails.style.display = "none";
    }
});
