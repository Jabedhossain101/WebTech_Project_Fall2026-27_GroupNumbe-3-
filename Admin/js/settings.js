document.addEventListener('DOMContentLoaded', function () {
  const admin = requireAdminAuth();
  if (!admin) return;

  const form = document.getElementById('settingsForm');
  const savedMsg = document.getElementById('settingsMsg');

  document.getElementById('hospitalName').value =
    localStorage.getItem('hms_hospital_name') || 'City Care Hospital';
  document.getElementById('supportEmail').value =
    localStorage.getItem('hms_support_email') || admin.email;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    localStorage.setItem(
      'hms_hospital_name',
      document.getElementById('hospitalName').value.trim(),
    );
    localStorage.setItem(
      'hms_support_email',
      document.getElementById('supportEmail').value.trim(),
    );
    savedMsg.textContent = 'Settings saved successfully.';
  });
});
