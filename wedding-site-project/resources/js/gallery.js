// GALLERY
$(document).ready(function(){
    (function comingSoon(run) {
        if (!run) return;
        // if a div is given the class '.coming-soon' this should find it, clear it out, and replace it with a fancy banner
        $.each($('.coming-soon'), function (i, x) {
            $(x).empty();
            
            if ($(x).attr('id') !== 'contact') {
                $(x).append(
                    $('<div/>')
                        .addClass('coming-soon-replace')
                        .addClass('bio-display')
                        .append($('<h1/>').text('More Information Coming Soon!'))
                )
            }
        });
    })(1);
    
    (function test() { // YOU ARE AN IDIOT
        let arr = new Array(100).map(function (x, i) { return i });
        let count = 0;
        try {
            arr.map(function(x, i) {
                count++;
                console.log(count++);
                let suffix;
                if (i === 0) {
                    suffix = '.gif';
                } else {
                    suffix = '.jpg';
                }

                // put the code you wanna do in here and then catch a failure to exit cleanly
                $.get('resources/images/gallery/img (' + i + ')' + suffix);
            })
        } catch(err) {
            alert('caught the OOB');
        }
    });
    
    (function initGalleryThumbnails(numImages) {
        let srcBase = 'resources/images/gallery/';
        let $gallery = $('#gallery');
        let srcs = [];
        
        for (var i = 0; i < numImages; i++) {
            let suffix;
            if (i === 0) {
                suffix = '.gif';
            } else {
                suffix = '.jpg';
            }
            
            srcs.push(srcBase + 'img (' + i + ')' + suffix);
        }
        
        srcs = shuffle(srcs);
        let lazySrc = srcBase + 'lazy.jpg';
        for (var i = 0; i < numImages; i++) {
            let src = srcs[i];
            $gallery.append(
                $('<div/>')
                    .addClass('thumb')
                    .append(
                        $('<img/>')
                            .attr('src', lazySrc)
                            .attr('data-flickity-lazyload', src)
                    )
            )
        }
    })(84);
    
    let $gallery = $('#gallery');
    $gallery.flickity({
        // options
        cellAlign: 'center',
        contain: true,
        freeScroll: true,
        wrapAround: true,
        autoPlay: 5000,
        pauseAutoPlayOnHover: false,
        lazyLoad: 2,
        pageDots : false
    });
    
    updateImageGallery();

    let flkty = $gallery.data('flickity');
    $gallery.on( 'select.flickity', function() {
        updateImageGallery();
    })
    
    $gallery.on( 'staticClick.flickity', function(event, pointer, cellElement, cellIndex) {
        if ( !cellElement ) {
            return;
        }

        if (!$(cellElement).hasClass('is-selected')) {
            flkty.select(cellIndex);
        }
    });
    
    // add play & pause buttons
    //                    <span class='control glyphicon glyphicon-pause'></span>
//    <span class='control glyphicon glyphicon-play'></span>

    $controlBar = $('.slideshow-controls');
    $controlBar.append(
        $('<span/>')
        .addClass('control')
        .addClass('glyphicon')
        .addClass('glyphicon-pause')
        .attr('title', 'Pause Slideshow')
        .on('click', function(){flkty.pausePlayer()})
    ).append(
        $('<span/>')
        .addClass('control')
        .addClass('glyphicon')
        .addClass('glyphicon-play')
        .attr('title', 'Resume Slideshow')
        .on('click', function(){flkty.playPlayer()})
    );
});

function updateImageGallery() {
    let $gallery = $('#gallery');
    let flkty = $gallery.data('flickity');
    
    let imageSrc = $gallery.find('.is-selected').find('img').attr('src');
    changeGalleryImage(imageSrc);
}


function changeGalleryImage(imageSrc) {
    let $galleryImage = $('#gallery-image');
    $galleryImage.addClass('fade-out');
    window.setTimeout(changeAndFadeIn, 200);
    
    function changeAndFadeIn () {
        $galleryImage.attr('src', imageSrc);
        $galleryImage.removeClass('fade-out');
        $galleryImage.addClass('fade-in');
    }
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
