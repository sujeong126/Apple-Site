/* Sitemap Accordion */
$('.menu-item-title').click(function(){
  $(this).next().slideDown()
  $(this).parent().siblings().children('.menu-item-content').slideUp()

  $(this).addClass('active')
  $(this).parent().siblings().children('.menu-item-title').removeClass('active')
})