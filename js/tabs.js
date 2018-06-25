(function($) {
$(function() {

    $('ul.tabs-list').delegate('li:not(.tabs-list__item-current)', 'click', function() {
        $(this).addClass('tabs-list__item-current').siblings().removeClass('tabs-list__item-current')
            .parents('div.section').find('div.box').hide().eq($(this).index()).fadeIn(150);
    })

})
})(jQuery)
