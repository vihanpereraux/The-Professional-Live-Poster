// download function for download button click
document.getElementById("get").onclick = function() {
    convertHtml2Canvas();
}

// download function for button press event
window.addEventListener('keydown', (event) => {
    if(event.code == "KeyD"){
        convertHtml2Canvas();
    }
});

// html2canvas function
function convertHtml2Canvas(){
    const screenShotTarget = document.getElementById("test");

    html2canvas(screenShotTarget).then((canvas) => {
        const base64Image = canvas.toDataURL("image/png");
        var anchor = document.createElement('a');
        anchor.setAttribute("href", base64Image);
        anchor.setAttribute("download", "my-poster");
        anchor.click();
        anchor.remove();
    });
}
