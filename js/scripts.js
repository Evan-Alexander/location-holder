function Place(location, landmark, time, notes) {
  this.loc = location;
  this.landmark = landmark;
  this.time = time;
  this.notes = notes;
}

// Place.prototype.destination = function() {
//   return.this.local + " " + this.
// }

//UI logic

$(document).ready(function() {
  $("form#new-trip").submit(function(event) {
    event.preventDefault();

    var inputtedLocation = $("input#new-destination").val();
    var inputtedLandmark = $("input#new-landmark").val();
    var inputtedTime = $("input#new-time").val();
    var inputtedNotes = $("input#new-notes").val();

  });
});
