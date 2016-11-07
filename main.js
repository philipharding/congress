





// Create a members model array to load data from Sunlight API
// This will load the data object
var members = []

var members = ""
var Dems = ""
var Reps = ""

// variables to collect the MOC coordinates

var latitude = ""
var longitude = ""


//initialize the handlebars view

var template;

$(document).ready(function() {
  var templateSource = $('#cc-template').html();
  template = Handlebars.compile(templateSource);
});

function renderMembers() {
  var memberHtml = template(members);
  $('#members').html(memberHtml);

  //console.log(memberHtml);
}

$(document).ready(function() {
  // First render the view
  //renderMembers();

  // Setup Listeners

$('#searchForm').on('submit', function(event) {
  event.preventDefault();

  // Get the address enetered by the user
  var address = $('input[name="address"]').val();

// calls the Geolocator funtion to convert from address to coordinates
  getLatitudeLongitude(showResult, address)


//
function showResult(result) {
    var latitude = result.geometry.location.lat();
    var longitude = result.geometry.location.lng();
    console.log(longitude + " = longitude");
    console.log(latitude + " = latitude");


    // Make request to Sunlight API
    $.ajax({
      type: 'GET',
      url: 'https://congress.api.sunlightfoundation.com/legislators/locate?latitude=' + latitude + '&longitude=' + longitude + '&apikey=88fe617b42db4716b522b0cfb007b044',
      success: function (data) {
        // assign data object results to the members array
        members = data.results

        for (var i = 0; i < members.length; i++) {
          if (members[i].party === "D") {
            Dems++
          } else if (members[i].party === "R"){
            Reps++
          }
        }
        console.log("Dems = " + Dems);
        console.log("Reps = " + Reps);
        // membersTeamOne.zero = members[0].party
        // membersTeamOne.one = members[1].party
        // membersTeamOne.two = members[2].party



        console.log(membersTeamOne);
        // Rerender the View
        // console.log(members);
    renderMembers();

      }
    })


}

})

// Google Geolocator

function getLatitudeLongitude(callback, address) {
    // If adress is not supplied, use default value 'Sacramento, CA'
    address = address || 'Sacramento, California';
    // Initialize the Geocoder
    geocoder = new google.maps.Geocoder();
    if (geocoder) {
        geocoder.geocode({
            'address': address
        }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                callback(results[0]);
            }
        });
    }
}

})
