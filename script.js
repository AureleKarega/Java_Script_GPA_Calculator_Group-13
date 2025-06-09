// Wait until the entire HTML document is fully loaded before running the code
$(document).ready(function () {

    // Event listener for the "Add Course" button
    $('#addRow').click(function () {
        // Append a new row to the grades table with three input fields:
        // - Course name (text input)
        // - Credit (number input)
        // - Point (number input)
        $('#gradesTable').append(
            '<tr><td><input type="text" class="course"></td>' +
            '<td><input type="number" class="credit"></td>' +
            '<td><input type="number" class="point"></td></tr>'
        );
    });

    // Event listener for the "Calculate GPA" button
    $('#calculateGPA').click(function () {
        // Initialize totalPoints and totalCredits to 0
        let totalPoints = 0, totalCredits = 0;

        // Loop through all table rows except the header (tr:gt(0) means index > 0)
        $('#gradesTable tr:gt(0)').each(function () {
            // Get the credit and point values from the current row
            const credit = parseFloat($(this).find('.credit').val()) || 0; // fallback to 0 if empty/invalid
            const point = parseFloat($(this).find('.point').val()) || 0;

            // Accumulate total credits and total points
            totalCredits += credit;
            totalPoints += point;
        });

        // Calculate GPA only if totalCredits is greater than 0
        const gpa = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : 0;

        // Display the calculated GPA in the result div
        $('#result').text('GPA: ' + gpa);
    });

});
