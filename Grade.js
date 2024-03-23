function calculateGrade(mark) {
    if (mark > 79) {
        return 'A';
    } else if (mark >= 60 && mark <= 79) {
        return 'B';
    } else if (mark >= 50 && mark <= 59) {
        return 'C';
    } else if (mark >= 40 && mark <= 49) {
        return 'D';
    } else {
        return 'E';
    }
}

const inputMark = ("70");
const mark = parseFloat(inputMark);

if (!isNaN(mark) && mark >= 0 && mark <= 100) {
    const grade = calculateGrade(mark);
    console.log(`The grade for mark ${mark} is: ${grade}`);
} else {
    console.log("Mark should be between 0 and 100");
} 