(function($) {
  "use strict"; // Start of use strict

  // Closes the sidebar menu
  $(".menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
    $(this).toggleClass("active");
  });

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('#sidebar-wrapper .js-scroll-trigger').click(function() {
    $("#sidebar-wrapper").removeClass("active");
    $(".menu-toggle").removeClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
  });

  // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

})(jQuery); // End of use strict

// Disable Google Maps scrolling
// See http://stackoverflow.com/a/25904582/1607849
// Disable scroll zooming and bind back the click event
var onMapMouseleaveHandler = function(event) {
  var that = $(this);
  that.on('click', onMapClickHandler);
  that.off('mouseleave', onMapMouseleaveHandler);
  that.find('iframe').css("pointer-events", "none");
}
var onMapClickHandler = function(event) {
  var that = $(this);
  // Disable the click handler until the user leaves the map area
  that.off('click', onMapClickHandler);
  // Enable scrolling zoom
  that.find('iframe').css("pointer-events", "auto");
  // Handle the mouse leave event
  that.on('mouseleave', onMapMouseleaveHandler);
}
// Enable map zooming with mouse scroll when the user clicks the map
$('.map').on('click', onMapClickHandler);

// Initialize and add the map
function initMap() {
  // The location of Uluru
  const seal = { lat: 58.808618, lng: -97.879810 };
 	const berens = {lat: 52.204120, lng: -95.964406};
  const pigeon = {lat: 51.900257, lng: -95.962823};
  const bloodvein = {lat: 51.523344, lng: -95.870549};
  const burntside = {lat: 47.928839, lng: -92.004851};
  const silverBay = {lat: 47.343977, lng: -91.215426};
  const splitrock = {lat: 47.200503, lng: -91.422274};
  const interstate = {lat: 45.389678, lng: -92.662521};
  const manchester = {lat: 35.475668, lng: -86.045402};
  const yellowstone = {lat: 44.502495, lng: -110.389844};
  const glacier = {lat: 48.607505, lng: -113.898176};
  const bighorn = {lat: 44.379114, lng: -107.175316};
  const copperMountain = {lat: 39.499269, lng: -106.157184};
  const sangreDeCristo = {lat: 36.889144, lng: -105.322951};
  const banff = {lat: 51.412438, lng: -116.227812};
  const tennessee = {lat: 35.782672, lng: -83.113931};
  const palmerLakesTrail = {lat: 60.783660, lng: -149.544985};
  const grandCanyon = {lat: 36.061717, lng: -112.107574};
  const superiorHikingTrail = {lat: 47.114073, lng: -91.765060};
  const centerMap = {lat: 39.970434, lng: -101.435926};
  
  // The map, centered at Seal River
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: centerMap,
  });
  // The marker, positioned at Seal River
  const markerSeal = new google.maps.Marker({
    position: seal,
    map: map,
    title: "Seal River",
  });
  
  const markerBerens = new google.maps.Marker({
    position: berens,
    map: map,
    title: "Berens River",
  });
  
  const markerPigeon = new google.maps.Marker({
    position: pigeon,
    map: map,
    title: "Pigeon River",
  });
  
  const markerBloodvein = new google.maps.Marker({
    position: bloodvein,
    map: map,
    title: "Bloodvein River",
  });
  
  const markerBurntside = new google.maps.Marker({
    position: burntside,
    map: map,
    title: "Burntside Lake",
  });
  
  const markerSilverBay = new google.maps.Marker({
    position: silverBay,
    map: map,
    title: "Silver Bay",
  });
  
  const markerSplitrock = new google.maps.Marker({
    position: splitrock,
    map: map,
    title: "Splitrock",
  });
  
  const markerInterstate = new google.maps.Marker({
    position: interstate,
    map: map,
    title: "Interstate Park",
  });
  
  const markerManchester = new google.maps.Marker({
    position: manchester,
    map: map,
    title: "Manchester, TN",
  });
  
  const markerYellowstone = new google.maps.Marker({
    position: yellowstone,
    map: map,
    title: "Yellowstone National Park",
  });
  
  const markerGlacier = new google.maps.Marker({
    position: glacier,
    map: map,
    title: "Glacier National Park, MT",
  });
  
  const markerBighorn = new google.maps.Marker({
    position: bighorn,
    map: map,
    title: "Bighorn Mountains, WY",
  });
  
   const markerCopperMountain = new google.maps.Marker({
    position: copperMountain,
    map: map,
    title: "Copper Mountain, CO",
  });
  const markerSangre = new google.maps.Marker({
    position: sangreDeCristo,
    map: map,
    title: "Sangre de Cristo Mountains, NM",
  });
  
  const markerBanff = new google.maps.Marker({
    position: banff,
    map: map,
    title: "Banff National Park",
  });
  
   const markerTN = new google.maps.Marker({
    position: tennessee,
    map: map,
    title: "Appalachian Trail",
  });
  // Below points added 3/12/23
  const markerPalmerLakes = new google.maps.Marker({
    position: palmerLakesTrail,
    map: map,
    title: "Palmer Lakes Trail, Hope, AK"
  });
  const markerArizona = new google.maps.Marker({
    position: grandCanyon,
    map: map,
    title: "Grand Canyon National Park, AZ"
  });
  const markerSuperiorHikingTrail = new google.maps.Marker({
    position: superiorHikingTrail,
    map: map,
    title: "Superior Hiking Trail, Section 2"
  });
  
}