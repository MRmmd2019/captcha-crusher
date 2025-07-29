import Tesseract from 'tesseract.js';

export async function solveImageCaptcha(imageElement, lang = 'fas+eng') {
  try {
    // تبدیل تصویر به Blob یا Canvas
    const imageData = imageElement.src;

    const result = await Tesseract.recognize(
      imageData,
      lang,
      {
        logger: m => console.log(`[OCR] ${m.status}: ${m.progress}`)
      }
    );

    const cleanedText = result.data.text.trim();
    console.log('[OCR Result]', cleanedText);
    return cleanedText;

  } catch (error) {
    console.error('[OCR Error]', error);
    return null;
  }
}
