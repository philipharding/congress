


var latitude = ""
var longitude = ""


// Model
var members = []


var template;

$(document).ready(function() {
  var templateSource = $('#cc-template').html();
  template = Handlebars.compile(templateSource);
});

function renderMembers() {
  var memberHtml = template(members);
  $('#members').html(memberHtml);

  console.log(memberHtml);
}

$(document).ready(function() {
  // First render the view
  renderMembers();

  // Setup Listeners

$('#searchForm').on('submit', function(event) {
  event.preventDefault();

  // Get the artist enetered by the user
  var address = $('input[name="address"]').val();

  getLatitudeLongitude(showResult, address)



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
        members = data.results
        // console.log("address = " + address)
        // console.log(data.results)
        // console.log(data.results[0].chamber);
        // console.log("WE HAVE THE DATA OBJECT FROM Sun!");
        // console.log("first name = " + data.results[0].first_name);

        // Rerender the View
console.log(members);
    renderMembers();

      }
    })


}

})


function getLatitudeLongitude(callback, address) {
    // If adress is not supplied, use default value 'Ferrol, Galicia, Spain'
    address = address || 'Ferrol, Galicia, Spain';
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
