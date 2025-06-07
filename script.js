$(document).ready(function() {
        $('#addRow').click(function() {
            $('#gradesTable').append(
                '<tr><td><input type="text" class="course"></td>' +
                '<td><input type="number" class="credit"></td>' +
                '<td><input type="number" class="point"></td></tr>'
            );
        });

        $('#calculateGPA').click(function() {
            let totalPoints = 0, totalCredits = 0;
            $('#gradesTable tr:gt(0)').each(function() {
                const credit = parseFloat($(this).find('.credit').val()) || 0;
                const point = parseFloat($(this).find('.point').val()) || 0;
                totalCredits += credit;
                totalPoints += point;
            });
            const gpa = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : 0;
            $('#result').text('GPA: ' + gpa);
        });
    });
