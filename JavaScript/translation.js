$(document).ready(function(){
  language_complete = navigator.language.split("-");
  language = (language_complete[0]);
  console.log("Sprache (root): %s", language);

  i18n.init({ lng: language });
  i18n.init({ debug: true });
  $(".menu").i18n();
  $("headline").i18n();
});
