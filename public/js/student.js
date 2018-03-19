// We'll be rewriting the table's data frequently, so let's make our code more DRY
// by writing a function that takes in 'animals' (JSON) and creates a table body
function displayResults(students) {
    // First, empty the table
    $("tbody").empty();
  
    // Then, for each entry of that json...
    students.forEach(function(student) {
      // Append each of the animal's properties to the table
      $("tbody").append("<tr><td>" + student.studentId + "</td>" +
                           "<td>" + student.firstName + "</td>" +
                           "<td>" + student.lastName + "</td>" +
                           "<td>" + student.phone + "</td>" +
                           "<td>" + student.email + "</td>" +
                           "<td>" + student.studentStatus + "</td></tr>");
    });
  }
  
  // Bonus function to change "active" header
  function setActive(selector) {
    // remove and apply 'active' class to distinguish which column we sorted by
    $("th").removeClass("active");
    $(selector).addClass("active");
  }
  
  // 1: On Load
  // ==========
  
  // First thing: ask the back end for json with all students
  $.getJSON("/all", function(data) {
    // Call our function to generate a table body
    displayResults(data);
    console.log("all data: ", data)
  });
  
  // 2: Button Interactions
  // ======================
  
  // When user clicks the Last Name sort button, display table sorted by last name.
  $("#last-sort").on("click", function() {
    // Set new column as currently-sorted (active)
    setActive("#student-lastName");
  
    // Do an api call to the back end for json with all students sorted by last name.
    $.getJSON("/lastName", function(data) {
      // Call our function to generate a table body
      displayResults(data);
      console.log("last name data: ", data)
    });
  });
  
  // When user clicks the name sort button, display the table sorted by first name
  $("#first-sort").on("click", function() {
    // Set new column as currently-sorted (active)
    setActive("#student-firstName");
  
    // Do an api call to the back end for json with all students sorted by first name
    $.getJSON("/firstName", function(data) {
      // Call our function to generate a table body
      displayResults(data);
      console.log("first name data: ", data)
    });
  });

  // When user clicks the less than 2 contacts button, display the students with less than 2 contacts.
  $("#less-two").on("click", function() {
     
    // Do an api call to the back end for json from students.
    $.getJSON("/contacts", function(data) {
      // Call our function to generate a table body
      displayResults(data);
      console.log("contact data: ", data)
    });
  });
  