document.addEventListener('DOMContentLoaded', function () {
  if (!requireAdminAuth()) return;

  const appointments = [
    {
      patient: 'Rahim Mia',
      doctor: 'Dr. Karim Uddin',
      date: '2026-11-20',
      status: 'Pending',
    },
  ];

  const form = document.getElementById('appointmentForm');
  const tbody = document.getElementById('appointmentTableBody');

  function renderAppointments() {
    tbody.innerHTML = '';
    appointments.forEach(function (item, index) {
      const tr = document.createElement('tr');
      tr.innerHTML =
        '<td>' +
        item.patient +
        '</td>' +
        '<td>' +
        item.doctor +
        '</td>' +
        '<td>' +
        item.date +
        '</td>' +
        '<td><span class="badge">' +
        item.status +
        '</span></td>' +
        '<td><button type="button" data-index="' +
        index +
        '">Confirm</button></td>';
      tbody.appendChild(tr);
    });
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    appointments.push({
      patient: document.getElementById('appPatient').value.trim(),
      doctor: document.getElementById('appDoctor').value.trim(),
      date: document.getElementById('appDate').value,
      status: 'Pending',
    });
    form.reset();
    renderAppointments();
  });

  tbody.addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
      const idx = Number(e.target.getAttribute('data-index'));
      appointments[idx].status = 'Confirmed';
      renderAppointments();
    }
  });

  renderAppointments();
});
