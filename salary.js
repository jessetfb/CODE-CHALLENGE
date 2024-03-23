function calculateNetSalary(basicSalary, benefits) {
    const PAYETHRESHOLD = 24000;
    const NHIFTHRESHOLD = 6000;
    const NHIFMAX = 5000;
    const NSSFEMPLOYEERATE = 0.06;
    const NSSFEMPLOYERRATE = 0.06;
    
    
    const grossSalary = basicSalary + benefits;

    
    let nhifDeductions = 0;
    if (grossSalary > NHIFTHRESHOLD) {
        nhifDeductions = Math.min(NHIFMAX, grossSalary * 0.075);
    }
    
    const nssfDeductions = grossSalary * NSSFEMPLOYEERATE;

    const taxableIncome = grossSalary - nhifDeductions - nssfDeductions;

    let payee = 0;
    if (taxableIncome > PAYETHRESHOLD) {
        payee = (taxableIncome - PAYETHRESHOLD) * 0.3;
    }

    const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

    return {
        grossSalary: grossSalary,
        payee: payee,
        nhifDeductions: nhifDeductions,
        nssfDeductions: nssfDeductions,
        netSalary: netSalary
    };
}


const basicSalary = parseFloat(("18000:"));
const benefits = parseFloat(("7000: "));

const result = calculateNetSalary(basicSalary, benefits);
console.log("Gross Salary:", result.grossSalary);
console.log("PAYE (Tax):", result.payee);
console.log("NHIF Deductions:", result.nhifDeductions);
console.log("NSSF Deductions:", result.nssfDeductions);
console.log("Net Salary:", result.netSalary);
