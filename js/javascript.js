




window.onload = function() {

CSSPlugin.defaultForce3D = "auto";

gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline();


tl.from('.container',3, { 
   autoAlpha:-5, 
   y: '-=40%', 
   ease: Power1.Out, 
})



/*

tl.from('.container', {
  y: '-30%',
  autoAlpha: 0,
  duration: 2.5,
  ease: Power4.Out
})


tl.from('.stagger1', {
  y: '-50',
  autoAlpha: 0,
  duration: 2.5,
  stagger: .4,
  ease: Power4.Out,
},"-=1.5")

*/




  // get the element
  const text = document.querySelector(".typing-text");

  // make a words array
  const words = ["a Software Engineer", "a Front-End Developer", "a Rock Climber", "a Dog Dad"];

  // start typing effect
  setTyper(text, words);

  function setTyper(element, words) {
    const LETTER_TYPE_DELAY = 75;
    const WORD_STAY_DELAY = 2000;

    const DIRECTION_FORWARDS = 0;
    const DIRECTION_BACKWARDS = 1;

    var direction = DIRECTION_FORWARDS;
    var wordIndex = 0;
    var letterIndex = 0;

    var wordTypeInterval;

    startTyping();

    function startTyping() {
      wordTypeInterval = setInterval(typeLetter, LETTER_TYPE_DELAY);
    }

    function typeLetter() {
      const word = words[wordIndex];

      if (direction == DIRECTION_FORWARDS) {
        letterIndex++;

        if (letterIndex == word.length) {
          direction = DIRECTION_BACKWARDS;
          clearInterval(wordTypeInterval);
          setTimeout(startTyping, WORD_STAY_DELAY);
        }
      } else if (direction == DIRECTION_BACKWARDS) {
        letterIndex--;

        if (letterIndex == 0) {
          nextWord();
        }
      }

      const textToType = word.substring(0, letterIndex);

      element.textContent = textToType;
    }

    function nextWord() {
      letterIndex = 0;
      direction = DIRECTION_FORWARDS;
      wordIndex++;

      if (wordIndex == words.length) {
        wordIndex = 0;
      }
    }
  }



$(function()
{
  $(".menuitem").click(function()
   {
    $(".menuitem").removeClass("active");
    $(this).addClass("active");

  
  });
});

$('.menuitem[href*="#"]').on('click', function (e) {
  e.preventDefault()

  $('html, body').animate(
    {
      scrollTop: $($(this).attr('href')).offset().top,
    },
    500,
    'linear'
  )
})


}