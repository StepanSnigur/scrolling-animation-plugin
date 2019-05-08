let isElementVisible = (elem) => {
    let elementBoundary = elem.getBoundingClientRect();
 
    let topIndent = elementBoundary.top;
    let bottomIndent = elementBoundary.bottom;
    let elemHeight = elementBoundary.height;
 
    return ((topIndent + elemHeight >= 0) && (elemHeight + window.innerHeight >= bottomIndent));
}


let scrollingAnimationPlugin = (animationBlocks) => {
    for (let blockToAnimate of animationBlocks) {
        let animationName = blockToAnimate.getAttribute('data-animationClass');
        window.addEventListener('scroll', () => {
            if (isElementVisible(blockToAnimate)) {
                blockToAnimate.classList.add(animationName);
            }
        });
    }
}