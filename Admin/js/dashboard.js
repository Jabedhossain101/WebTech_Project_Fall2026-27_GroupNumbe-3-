document.addEventListener('DOMContentLoaded', function () {
  if (!requireAdminAuth()) return;

  const stats = {
    doctors: 14,
    patients: 128,
    appointments: 36,
    revenue: '৳ 2,45,000',
  };

  document.getElementById('totalDoctors').textContent = stats.doctors;
  document.getElementById('totalPatients').textContent = stats.patients;
  document.getElementById('totalAppointments').textContent = stats.appointments;
  document.getElementById('totalRevenue').textContent = stats.revenue;

  const activityForm = document.getElementById('activityForm');
  const activityList = document.getElementById('activityList');

  activityForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const note = document.getElementById('activityInput').value.trim();
    if (!note) return;

    const li = document.createElement('li');
    li.textContent = note;
    li.style.padding = '6px 0';
    activityList.appendChild(li);

    activityForm.reset();
  });
});
