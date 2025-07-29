export async function solveTextCaptcha(rawText) {
  // مرحله‌ی پاک‌سازی اولیه
  const cleaned = rawText
    .replace(/[^a-zA-Z0-9]/g, '')   // حذف نویز
    .trim();

  // الگوریتم ساده یا اتصال به OCR حرفه‌ای
  const solved = await fakeOCR(cleaned);

  return solved;
}

async function fakeOCR(text) {
  // فرضی: میشه بعداً با Tesseract یا API جایگزین کرد
  console.log('[TextSolver] کپچا پردازش شد:', text);
  return text.toLowerCase();
}
