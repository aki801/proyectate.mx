function leftClick(obj) {
    var container = $(obj).parent();
    var viewerClass = ('.Carousel-viewer');
    var sliderClass = ('.Carousel-slider');
    var itemClass = ('.Carousel-item');
    var itemNum = container.find(itemClass).length;
    var root = document.documentElement;
    var slider = container.find(sliderClass);

    root.style.setProperty('--carousel-num-items', itemNum);
    slider.css('transform', "translateX("+ 0 +"px)");    
}

function rightClick(obj) {
    var container = $(obj).parent();
    var viewerClass = ('.Carousel-viewer');
    var sliderClass = ('.Carousel-slider');
    var itemClass = ('.Carousel-item');
    var itemNum = container.find(itemClass).length;
    var root = document.documentElement;
    var slider = container.find(sliderClass);

    root.style.setProperty('--carousel-num-items', itemNum);
    slider.css('transform', "translateX("+ -190 +"px)");    
}

