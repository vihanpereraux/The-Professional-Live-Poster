// document.getElementById("get").onclick = function() {
//     const screenShotTarget = document.getElementById("test");
    
//     html2canvas(screenShotTarget).then((canvas) => {
//         const base64Image = canvas.toDataURL("image/png");
//         var anchor = document.createElement('a');
//         anchor.setAttribute("href", base64Image);
//         anchor.setAttribute("download", "my-poster");
//         anchor.click();
//         anchor.remove();
//     });
// }

window.addEventListener('keydown', (event) => {
    if(event.code == "KeyD"){
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
});
