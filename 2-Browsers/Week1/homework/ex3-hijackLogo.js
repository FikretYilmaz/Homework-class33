'use strict';
/*------------------------------------------------------------------------------
1. Find out how to select the element that contains the Google logo, and store 
   it in a variable. http://www.google.com/images/srpr/logo9w.png
2. Modify the `src` and `srcset` of the logo so that it's replaced by the 
   HackYourFuture logo instead.
------------------------------------------------------------------------------*/
function hijackGoogleLogo() {
  const img = document.createElement('img');
  img.src = 'http://www.google.com/images/srpr/logo9w.png';
  img.srcset =
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fgithub.com%2FHackYourFuture-CPH%2FFP-class11&psig=AOvVaw0nSmFuxQrk5mOpv6E3GeNp&ust=1627489917432000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJDr_cXWg_ICFQAAAAAdAAAAABAI';

  // TODO your code goes in here
}

hijackGoogleLogo();
