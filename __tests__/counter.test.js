const { TextEncoder, TextDecoder } = require('util');
if (!global.TextEncoder) global.TextEncoder = TextEncoder;
if (!global.TextDecoder) global.TextDecoder = TextDecoder;
const { JSDOM } = require('jsdom');

function animateCounter(counter) {
  const target = parseFloat(counter.dataset.counter);
  const duration = parseInt(counter.dataset.duration) || 1500;
  const delay = parseInt(counter.dataset.delay) || 0;
  const isFloat = target % 1 !== 0;
  setTimeout(() => {
    let current = 0;
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);
    const increment = target / totalFrames;
    const update = () => {
      current += increment;
      if ((increment > 0 && current < target) || (increment < 0 && current > target)) {
        counter.textContent = isFloat ? current.toFixed(1) : Math.floor(current);
        requestAnimationFrame(update);
      } else {
        counter.textContent = isFloat ? target.toFixed(1) : String(target);
      }
    };
    requestAnimationFrame(update);
  }, delay);
}

describe('counter animation', () => {
  beforeAll(() => {
    global.requestAnimationFrame = (cb) => setTimeout(cb, 0);
  });

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  test('counts to integer target', () => {
    const dom = new JSDOM('<span data-counter="10"></span>');
    const el = dom.window.document.querySelector('span');
    animateCounter(el);
    jest.runAllTimers();
    expect(el.textContent).toBe('10');
  });

  test('counts to float target', () => {
    const dom = new JSDOM('<span data-counter="3.2"></span>');
    const el = dom.window.document.querySelector('span');
    animateCounter(el);
    jest.runAllTimers();
    expect(el.textContent).toBe('3.2');
  });
});
