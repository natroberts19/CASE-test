// This file will include functionality to receive table data to display new student data.
$("#newStudent").on("click", function() {
  // event.preventDefault();
  $.ajax({
    type: "POST",
    dataType: "json",
    url: "/api/new",
    data: {
      studentId: $("#demoStudId").val(),
      firstName: $("#demoFirstName").val(),
      lastName: $("#demoLastName").val(),
      created: Date.now()
    }
  })
  .then(function(data) {
    $("#new-student-table > thead").append(
      "<tr><td>" + dbNewstudent.studentId +
      "</td><td>" + dbNewstudent.firstName +
      "</td><td>" + dbNewstudent.lastName +
      "</td><td>" + dbNewstudent.phone +
      "</td><td>" + dbNewstudent.email +
      "</td><td>" + dbNewstudent.program +
      "</td><td>" + dbNewstudent.schedule +
      "</td><td>" + dbNewstudent.campus +
      "</td><td>" + dbNewstudent.studentStatus +
      "</td><td>" + dbNewstudent.goal +
      "</td><td>" + dbNewstudent.highLevelEd +
      "</td><td>" + dbNewstudent.advisor +
      "</td><td>" + dbNewstudent.notes +
      "</td><td>" + dbNewstudent.files
    );
})
});
