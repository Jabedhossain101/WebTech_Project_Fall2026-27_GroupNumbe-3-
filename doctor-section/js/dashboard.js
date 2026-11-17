
function loadDashboard()
{
    let pending = 0;
    let table = "";

    for(let i = 0; i < AppointmentList.length; i++)
    {
        if(AppointmentList[i].status == "Pending")
        {
            pending = pending + 1;
        }

        table = table + "<tr>";
        table = table + "<td>" + AppointmentList[i].patientID + "</td>";
        table = table + "<td>" + AppointmentList[i].patientName + "</td>";
        table = table + "<td>" + AppointmentList[i].date + "</td>";
        table = table + "<td>" + AppointmentList[i].time + "</td>";
        table = table + "<td>" + AppointmentList[i].status + "</td>";
        table = table + "</tr>";
    }

    document.getElementById("totalAppointments").innerHTML = AppointmentList.length;
    document.getElementById("totalPatients").innerHTML = PatientList.length;
    document.getElementById("pendingAppointments").innerHTML = pending;

    document.getElementById("recentAppointments").innerHTML = table;
}

loadDashboard();
