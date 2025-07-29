import { solveImageCaptcha } from './solver/imageSolver.js';

function findCaptchaImage() {
  // معمول‌ترین انتخابگرهای کپچا
  const selectors = ['img[alt*="captcha"]', 'img[src*="captcha"]', 'img[class*="captcha"]'];
  for (const sel of selectors) {
    const img = document.querySelector(sel);
    if (img) return img;
  }
  return null;
}

function insertAnswer(inputElement, text) {
  if (inputElement) {
    inputElement.value = text;
    inputElement.dispatchEvent(new Event('input', { bubbles: true }));
  }
}

(async () => {
  const image = findCaptchaImage();
  if (!image) {
    console.log('[Captcha Crusher] تصویری از کپچا پیدا نشد.');
    return;
  }

  const result = await solveImageCaptcha(image);
  console.log('[Captcha Crusher] نتیجه حل کپچا:', result);

  const input = document.querySelector('input[type="text"], input[name*="captcha"]');
  insertAnswer(input, result);
})();
