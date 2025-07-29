document.getElementById('toggle').addEventListener('click', () => {
  chrome.storage.local.get('enabled', data => {
    const newStatus = !data.enabled;
    chrome.storage.local.set({ enabled: newStatus });
    alert(`افزونه ${newStatus ? 'فعال' : 'غیرفعال'} شد.`);
  });
});

document.getElementById('test').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      files: ['content.js']
    });
  });
});

document.getElementById('history').addEventListener('click', () => {
  chrome.storage.local.get('history', (data) => {
    console.table(data.history);
    alert(`📜 ${data.history.length} کپچا ثبت شده`);
  });
});
