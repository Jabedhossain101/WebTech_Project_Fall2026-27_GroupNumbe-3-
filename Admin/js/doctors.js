document.addEventListener('DOMContentLoaded', function () {
  if (!requireAdminAuth()) return;

  const doctors = [
    { id: 1, name: 'Dr. Karim Uddin', dept: 'Cardiology', status: 'Approved' },
    { id: 2, name: 'Dr. Nusrat Jahan', dept: 'Neurology', status: 'Pending' },
  ];

  const form = document.getElementById('doctorForm');
  const tbody = document.getElementById('doctorTableBody');

  function renderDoctors() {
    tbody.innerHTML = '';
    doctors.forEach(function (doc) {
      const tr = document.createElement('tr');
      tr.innerHTML =
        '<td>' +
        doc.name +
        '</td>' +
        '<td>' +
        doc.dept +
        '</td>' +
        '<td><span class="badge">' +
        doc.status +
        '</span></td>' +
        '<td><button type="button" data-id="' +
        doc.id +
        '">Approve</button></td>';
      tbody.appendChild(tr);
    });
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('docName').value.trim();
    const dept = document.getElementById('docDept').value.trim();
    if (!name || !dept) return;

    doctors.push({
      id: Date.now(),
      name: name,
      dept: dept,
      status: 'Pending',
    });

    form.reset();
    renderDoctors();
  });

  tbody.addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
      const id = Number(e.target.getAttribute('data-id'));
      const target = doctors.find(function (d) {
        return d.id === id;
      });
      if (target) {
        target.status = 'Approved';
        renderDoctors();
      }
    }
  });

  renderDoctors();
});
