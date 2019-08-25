$(document).ready(function(){
  
  $(".search__btn").click(function(){
    $(".search__wrap, .search__input").toggleClass("active");
    $("input[type='text']").focus();
  });
  
});