
// function viewPrescription(Button)
// {
//     let Row = Button.parentElement.parentElement;

//     let ID = Row.cells[1].innerHTML;
//     let Doctor = Row.cells[2].innerHTML;
//     let Date = Row.cells[4].innerHTML;
//     let Medicine = Row.cells[5].innerHTML;

//     document.getElementById("PrescriptionID").innerHTML =
//         "Prescription ID: " + ID;

//     document.getElementById("DoctorName").innerHTML =
//         "Doctor Name: " + Doctor;

//     document.getElementById("PrescriptionDate").innerHTML =
//         "Prescription Date: " + Date;

//     document.getElementById("MedicineName").innerHTML =
//         "Medicine: " + Medicine;

//     document.getElementById("Dosage").innerHTML =
//         "Dosage: Refer to the doctor's original prescription.";

//     document.getElementById("Instructions").innerHTML =
//         "Instructions: Follow the doctor's prescribed instructions.";

//     document.getElementById("print").disabled = false;
// }

// function printPrescription()
// {
//     let Details = document.getElementById("PrescriptionDetails");

//     if(document.getElementById("PrescriptionID").innerHTML == "")
//     {
//         alert("Please select a prescription first.");
//     }
//     else
//     {
//         window.print();
//     }
// }
