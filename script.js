document.querySelectorAll('[data-service]').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('service').value = link.dataset.service;
  });
});

document.getElementById('quote-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const lines = [
    'Hello, I would like a cleaning quote.',
    `Service: ${data.get('service')}`,
    `Area: ${data.get('area').trim()}`,
    `Property / job: ${data.get('size').trim()}`,
    `Preferred timing: ${data.get('timing').trim() || 'Flexible'}`
  ];
  document.getElementById('preview-text').textContent = lines.join('\n');
  const preview = document.getElementById('preview');
  preview.hidden = false;
  preview.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});
