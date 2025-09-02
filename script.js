const homeNetworkBtn = document.getElementById('homeNetworkBtn');
const networkPage = document.getElementById('networkPage');

// Open network page modal
homeNetworkBtn.addEventListener('click', () => {
  networkPage.classList.add('active');
});

// Close modal when clicking outside
networkPage.addEventListener('click', (e) => {
  if (e.target === networkPage) networkPage.classList.remove('active');
});

// ✅ Close modal when pressing Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && networkPage.classList.contains('active')) {
    networkPage.classList.remove('active');
  }
});

// Handle network buttons
const netBtns = document.querySelectorAll('.net-btn');
netBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    window.open(btn.dataset.url, '_blank');
  });

  btn.addEventListener('mousemove', (e) => {
    const r = btn.getBoundingClientRect();
    btn.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
    btn.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
  });

  btn.addEventListener('mouseenter', () => { btn.dataset.active = 'true'; });
  btn.addEventListener('mouseleave', () => { btn.dataset.active = 'false'; });
});

// Handle network links
const links = document.querySelectorAll('.network-link');
links.forEach((link) => {
  link.addEventListener('click', () => {
    const name = link.querySelector('.title').textContent.trim().toLowerCase().split(' ')[0];
    let host = '';

    if (name === 'proxmox') host = 'https://proxmox.daemonide.xyz';
    else if (name === 'crafty') host = 'https://crafty.daemonide.xyz';
    else if (name === 'homeassistant') host = 'https://homeassistant.daemonide.xyz';
    else if (name === 'sftpgo') host = 'https://sftpgo.daemonide.xyz';
    else if (name === 'influxdb') host = 'https://influxdb.daemonide.xyz';
    else if (name === 'grafana') host = 'https://grafana.daemonide.xyz';
    else if (name === 'onlyoffice') host = 'https://onlyoffice.daemonide.xyz';
    else if (name === 'watchyourlan') host = 'https://lanwatch.daemonide.xyz';
    else if (name === 'technitium') host = 'https://dns.daemonide.xyz';

    if (host) window.open(host, '_blank');
  });

  link.addEventListener('mousemove', (e) => {
    const r = link.getBoundingClientRect();
    link.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
    link.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
  });

  link.addEventListener('mouseenter', () => { link.dataset.active = 'true'; });
  link.addEventListener('mouseleave', () => { link.dataset.active = 'false'; });
});

