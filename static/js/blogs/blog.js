const copyUrl = () => {
  const url = window.location.href;
  const copyBtn = document.getElementById("copyBtn");
  navigator.clipboard.writeText(url)
  .then(() => {
    const popover = new bootstrap.Popover(copyBtn, {
      content: 'URL kopyalandı.',
      trigger: 'manual'
    });
    popover.show();
    setTimeout(() => popover.hide(), 2000); 
  }).catch(err => {
    const popover = new bootstrap.Popover(copyBtn, {
      content: 'Kopyalanırken hata oluştu: ' + err,
      trigger: 'manual'
    });
    popover.show();
    setTimeout(() => popover.hide(), 2000); 
  });
}
