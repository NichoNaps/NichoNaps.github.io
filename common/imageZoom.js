
// Allow click to maximize on all images
window.addEventListener("load", () => {
    document.querySelectorAll("img").forEach((elem) => {
        elem.addEventListener('click', () => {

            // note: align-items: center causes the image to clip oddly

            // create fullscreen view
            let center = document.createElement('div');
            center.classList.add('fade-in');
            // center and fill page
            center.style.cssText = 'position:fixed; left:0px; top:0px; height:100%; width:100%; background-color: rgba(0,0,0,0.8); overflow:auto;'

            let img = elem.cloneNode(true);

            // enlarge image
            // ideally this would scale using the max of the image width/height, this only looks at width
            let scaleAmount = Math.max(window.innerWidth, img.width); // either render at images real width (to account for bigger images) or stretch small images to fullscreen
            img.style.cssText = `border: none; outline: none; border-radius: none; min-width: ${scaleAmount}px; min-height: ${scaleAmount / img.width * img.height}px; object-fit: contain; object-position: 0px 0px;`;


            center.appendChild(img);
            document.body.appendChild(center);

            // dismiss enlarged image
            center.addEventListener('click', () => {
                center.remove();
            });

        })
    })

})

