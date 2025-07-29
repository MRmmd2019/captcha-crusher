import { solveImageCaptcha } from './solver/imageSolver.js';
import { solveTextCaptcha } from './solver/textSolver.js';

// 🎯 کپچای تصویری رو شناسایی کن
function findCaptchaImage() {
  const selectors = [
    'img[alt*="captcha"]',
    'img[src*="captcha"]',
    'img[class*="captcha"]'
  ];
  for (const sel of selectors) {
    const img = document.querySelector(sel);
    if (img) return img;
  }
  return null;
}

// 💡 جواب رو داخل فیلد وارد کن
function insertAnswer(inputElement, text) {
  if (inputElement) {
    inputElement.value = text;
    inputElement.dispatchEvent(new Event('input', { bubbles: true }));
  }
}

// 🚀 نقطه‌ی ورود اصلی
(async () => {
  const image = findCaptchaImage();

  if (image) {
    // 📷 حل کپچای تصویری
    const result = await solveImageCaptcha(image);
    console.log('[Captcha Crusher] کپچای تصویری حل شد:', result);

    const input = document.querySelector('input[type="text"], input[name*="captcha"]');
    insertAnswer(input, result);
  } else {
    // 🔡 حل کپچای متنی
    const input = document.querySelector('input[type="text"]');
    const rawText = input?.placeholder || input?.getAttribute('aria-label');

    if (rawText?.toLowerCase().includes('captcha')) {
      const result = await solveTextCaptcha(rawText);
      console.log('[Captcha Crusher] کپچای متنی حل شد:', result);
      insertAnswer(input, result);
    } else {
      console.log('[Captcha Crusher] کپچایی پیدا نشد.');
    }
  }
})();
