document.addEventListener('DOMContentLoaded', function () {
  if (!requireAdminAuth()) return;

  const patients = [
    { name: 'Rahim Mia', age: 34, phone: '01711000001', condition: 'Fever' },
    {
      name: 'Sadia Islam',
      age: 27,
      phone: '01811000002',
      condition: 'Checkup',
    },
  ];

  const form = document.getElementById('patientForm');
  const tbody = document.getElementById('patientTableBody');
  const detailBox = document.getElementById('patientDetailBox');

  function renderPatients() {
    tbody.innerHTML = '';
    patients.forEach(function (p, index) {
      const tr = document.createElement('tr');
      tr.innerHTML =
        '<td>' +
        p.name +
        '</td>' +
        '<td>' +
        p.age +
        '</td>' +
        '<td>' +
        p.phone +
        '</td>' +
        '<td><button type="button" data-index="' +
        index +
        '">View</button></td>';
      tbody.appendChild(tr);
    });
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    patients.push({
      name: document.getElementById('patName').value.trim(),
      age: document.getElementById('patAge').value.trim(),
      phone: document.getElementById('patPhone').value.trim(),
      condition: document.getElementById('patCondition').value.trim(),
    });
    form.reset();
    renderPatients();
  });

  tbody.addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
      const idx = Number(e.target.getAttribute('data-index'));
      const p = patients[idx];
      detailBox.innerHTML =
        '<strong>Name:</strong> ' +
        p.name +
        ' | <strong>Age:</strong> ' +
        p.age +
        ' | <strong>Phone:</strong> ' +
        p.phone +
        ' | <strong>Condition:</strong> ' +
        p.condition;
    }
  });

  renderPatients();
});
