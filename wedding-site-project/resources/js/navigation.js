/*------------------------------------------------------------------------------*/
let $storyMenu = 
    $('<ul/>')
        .addClass('dropdown-menu')
        .append($('<li/>')
                    .append($('<a/>')
                                .attr('href', '#our-story')
                                .text('How We Met')))
        .append($('<li/>')
                    .append($('<a/>')
                                .attr('href', '#photo-gallery')
                                .text('Photo Gallery')));

let $storyButton = 
    $('<li/>')
        .addClass('dropdown')
        .append($('<a/>')
                    .addClass('dropdown-toggle')
                    .attr('data-toggle', 'dropdown')
                    .attr('aria-haspopup', 'true')
                    .attr('aria-expanded', 'false')
                    .text('Our Story ')
                    .append($('<span/>').addClass('caret')))
        .append($storyMenu);

/*------------------------------------------------------------------------------*/
let $partiesMenu = 
    $('<ul/>')
    .addClass('dropdown-menu')
        .append($('<li/>')
                    .append($('<a/>')
                                .attr('href', '#bridesmaids-groomsmen')
                                .text('Bridesmaids')
                                .addClass('gallery-button')))
        .append($('<li/>')
                    .append($('<a/>')
                                .attr('href', '#bridesmaids-groomsmen')
                                .text('Groomsmen')
                                .addClass('gallery-button')))
        .append($('<li/>')
                .append($('<a/>')
                            .attr('href', '#mcs')
                            .text('The MCs')));
    
let $partiesButton = 
    $('<li/>')
        .addClass('dropdown')
        .append($('<a/>')
                    .addClass('dropdown-toggle')
                    .attr('data-toggle', 'dropdown')
                    .attr('aria-haspopup', 'true')
                    .attr('aria-expanded', 'false')
                    .text('Wedding Parties ')
                    .append($('<span/>').addClass('caret')))
        .append($partiesMenu);

/*------------------------------------------------------------------------------*/
let $infoMenu =
    $('<ul/>')
        .addClass('dropdown-menu')
        .append($('<li/>')
                    .append($('<a/>')
                                .attr('href', '#the-wedding')
                                .text('Details')))
        .append($('<li/>')
                    .append($('<a/>')
                                .attr('href', '#venue')
                                .text('The Venue')))
        .append($('<li/>')
                    .append($('<a/>')
                                .attr('href', '#accommodations')
                                .text('Accommodations')));

let $infoButton = 
    $('<li/>')
        .addClass('dropdown')
        .append(
            $('<a/>')
                .addClass('dropdown-toggle')
                .attr('data-toggle', 'dropdown')
                .attr('aria-haspopup', 'true')
                .attr('aria-expanded', 'false')
                .text('The Wedding ')
                .append($('<span/>').addClass('caret')))
        .append($infoMenu);

/*------------------------------------------------------------------------------*/
let $giftsMenu = 
    $('<ul/>')
        .addClass('dropdown-menu')
        .append($('<li/>')
                    .append($('<a/>')
                                .attr('href', '#gifts')
                                .text('Registries')));

let $giftsButton = 
    $('<li/>')
        .addClass('dropdown')
        .append($('<a/>')
                    .addClass('dropdown-toggle')
                    .attr('data-toggle', 'dropdown')
                    .attr('aria-haspopup', 'true')
                    .attr('aria-expanded', 'false')
                    .text('Gifts ')
                    .append($('<span/>').addClass('caret')))
        .append($giftsMenu);

/*------------------------------------------------------------------------------*/
let $contactMenu = 
    $('<ul/>')
        .addClass('dropdown-menu')
        .append($('<li/>')
                    .append($('<a/>')
                                .attr('href', '#rsvp')
                                .text('RSVP')))
        .append($('<li/>')
                    .append($('<a/>')
                                .attr('href', '#contact')
                                .text('Contact Info')))
        .append($('<li/>')
                    .append($('<a/>')
                                .attr('href', '#guestbook')
                                .text('Guestbook')));

let $contactButton =
    $('<li/>')
        .addClass('dropdown')
        .append($('<a/>')
                    .addClass('dropdown-toggle')
                    .attr('data-toggle', 'dropdown')
                    .attr('aria-haspopup', 'true')
                    .attr('aria-expanded', 'false')
                    .text('Contact ')
                    .append($('<span/>').addClass('caret')))
        .append($contactMenu);

/*------------------------------------------------------------------------------*/

$(document).ready(function(){
    $("#navbar")
        .append(
            $('<div/>')
                .addClass('container-fluid')
                .append(
                    $('<ul/>')
                        .addClass('nav')
                        .addClass('navbar-nav')
                        .append($storyButton)
                        .append($infoButton)
                        .append($partiesButton)
                        .append($giftsButton)
                        .append($contactButton)
                )
        )
        
    $('.dropdown-menu li a').click(function(){
        if ($(this).hasClass('.gallery-button')) {
            let flkty = $('#bio-gallery').data('flickity'); 
            if ($(this).text() === 'Bridesmaids') {
                if (flkty.selectedIndex !== 0) {
                    flkty.select(0);
                    changeBioText(flkty.getCellElements()[0]);
                }
            } else if ($(this).text() === 'Groomsmen') {
                if (flkty.selectedIndex !== 1) {
                    flkty.select(1);
                    changeBioText(flkty.getCellElements()[7]);
                }
            }
        }
        
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 500);
    });
    
    $('.navbar-brand').click(function(){
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
});