document.addEventListener('DOMContentLoaded', function () {
  if (!requireAdminAuth()) return;

  const bills = [{ patient: 'Rahim Mia', amount: 1500, status: 'Unpaid' }];

  const form = document.getElementById('billingForm');
  const tbody = document.getElementById('billingTableBody');

  function renderBills() {
    tbody.innerHTML = '';
    bills.forEach(function (bill, index) {
      const tr = document.createElement('tr');
      tr.innerHTML =
        '<td>' +
        bill.patient +
        '</td>' +
        '<td>৳ ' +
        bill.amount +
        '</td>' +
        '<td><span class="badge">' +
        bill.status +
        '</span></td>' +
        '<td><button type="button" data-index="' +
        index +
        '">Mark Paid</button></td>';
      tbody.appendChild(tr);
    });
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    bills.push({
      patient: document.getElementById('billPatient').value.trim(),
      amount: document.getElementById('billAmount').value.trim(),
      status: 'Unpaid',
    });
    form.reset();
    renderBills();
  });

  tbody.addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
      const idx = Number(e.target.getAttribute('data-index'));
      bills[idx].status = 'Paid';
      renderBills();
    }
  });

  renderBills();
});
