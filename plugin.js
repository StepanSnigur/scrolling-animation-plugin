let scrollingAnimationPlugin = (animationBlocks) => {
    for (let blockToAnimate of animationBlocks) {
        let topIndent = blockToAnimate.getBoundingClientRect().top;
        window.addEventListener('scroll', () => {
            if (window.pageYOffset >= topIndent - window.innerHeight) {
                blockToAnimate.classList.add('block-animate'); //add class to animate block
            }
        });
    }
}

let elems = document.querySelectorAll('.block'); //getting all blocks to animate
scrollingAnimationPlugin(elems);