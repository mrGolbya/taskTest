const KEYBOARD_SHFT = [
  { code: 'Backquote', key: '~' },
  { code: 'Digit1', key: '!' },
  { code: 'Digit2', key: '@' },
  { code: 'Digit3', key: '#' },
  { code: 'Digit4', key: '$' },
  { code: 'Digit5', key: '%' },
  { code: 'Digit6', key: '^' },
  { code: 'Digit7', key: '&' },
  { code: 'Digit8', key: '*' },
  { code: 'Digit9', key: '(' },
  { code: 'Digit0', key: ')' },
  { code: 'Minus', key: '_' },
  { code: 'Equal', key: '+' },
  { code: 'BracketLeft', key: '{' },
  { code: 'BracketRight', key: '}' },
  { code: 'Backslash', key: '|' },
  { code: 'Comma', key: '<' },
  { code: 'Period', key: '>' },
  { code: 'Slash', key: '?' },
];
const KEYBOARD_EN = [
  { code: 'Backquote', key: '`' },
  { code: 'Digit1', key: '1' },
  { code: 'Digit2', key: '2' },
  { code: 'Digit3', key: '3' },
  { code: 'Digit4', key: '4' },
  { code: 'Digit5', key: '5' },
  { code: 'Digit6', key: '6' },
  { code: 'Digit7', key: '7' },
  { code: 'Digit8', key: '8' },
  { code: 'Digit9', key: '9' },
  { code: 'Digit0', key: '0' },
  { code: 'Minus', key: '-' },
  { code: 'Equal', key: '=' },
  { code: 'Backspace', key: 'Backspace' },
  { code: 'Tab', key: 'Tab' },
  { code: 'KeyQ', key: 'q' },
  { code: 'KeyW', key: 'w' },
  { code: 'KeyE', key: 'e' },
  { code: 'KeyR', key: 'r' },
  { code: 'KeyT', key: 't' },
  { code: 'KeyY', key: 'y' },
  { code: 'KeyU', key: 'u' },
  { code: 'KeyI', key: 'i' },
  { code: 'KeyO', key: 'o' },
  { code: 'KeyP', key: 'p' },
  { code: 'BracketLeft', key: '[' },
  { code: 'BracketRight', key: ']' },
  { code: 'Backslash', key: '\\' },
  { code: 'Delete', key: 'Del' },
  { code: 'CapsLock', key: 'Caps Lock' },
  { code: 'KeyA', key: 'a' },
  { code: 'KeyS', key: 's' },
  { code: 'KeyD', key: 'd' },
  { code: 'KeyF', key: 'f' },
  { code: 'KeyG', key: 'g' },
  { code: 'KeyH', key: 'h' },
  { code: 'KeyJ', key: 'j' },
  { code: 'KeyK', key: 'k' },
  { code: 'KeyL', key: 'l' },
  { code: 'Semicolon', key: ';' },
  { code: 'Quote', key: "'" },
  { code: 'Enter', key: 'Enter' },
  { code: 'ShiftLeft', key: 'Shift' },
  { code: 'KeyZ', key: 'z' },
  { code: 'KeyX', key: 'x' },
  { code: 'KeyC', key: 'c' },
  { code: 'KeyV', key: 'v' },
  { code: 'KeyB', key: 'b' },
  { code: 'KeyN', key: 'n' },
  { code: 'KeyM', key: 'm' },
  { code: 'Comma', key: ',' },
  { code: 'Period', key: '.' },
  { code: 'Slash', key: '/' },
  { code: 'ShiftRight', key: 'Shift' },
  { code: 'ArrowUp', key: '&#x25b2;' },
  { code: 'Language', key: 'EN' },
  { code: 'ControlLeft', key: 'Ctrl' },
  { code: 'MetaLeft', key: 'Win' },
  { code: 'AltLeft', key: 'Alt' },
  { code: 'Space', key: ' ' },
  { code: 'AltRight', key: 'Alt' },
  { code: 'ControlRight', key: 'Ctrl' },
  { code: 'ArrowLeft', key: '&#x25c0;' },
  { code: 'ArrowDown', key: '&#x25bc;' },
  { code: 'ArrowRight', key: '&#x25ba;' },
];
const KEYBOARD_RU = [
  { code: 'Backquote', key: 'ё' },
  { code: 'Digit1', key: '1' },
  { code: 'Digit2', key: '2' },
  { code: 'Digit3', key: '3' },
  { code: 'Digit4', key: '4' },
  { code: 'Digit5', key: '5' },
  { code: 'Digit6', key: '6' },
  { code: 'Digit7', key: '7' },
  { code: 'Digit8', key: '8' },
  { code: 'Digit9', key: '9' },
  { code: 'Digit0', key: '0' },
  { code: 'Minus', key: '-' },
  { code: 'Equal', key: '=' },
  { code: 'Backspace', key: 'Backspace' },
  { code: 'Tab', key: 'Tab' },
  { code: 'KeyQ', key: 'й' },
  { code: 'KeyW', key: 'ц' },
  { code: 'KeyE', key: 'у' },
  { code: 'KeyR', key: 'к' },
  { code: 'KeyT', key: 'е' },
  { code: 'KeyY', key: 'н' },
  { code: 'KeyU', key: 'г' },
  { code: 'KeyI', key: 'ш' },
  { code: 'KeyO', key: 'щ' },
  { code: 'KeyP', key: 'з' },
  { code: 'BracketLeft', key: 'х' },
  { code: 'BracketRight', key: 'ъ' },
  { code: 'Backslash', key: '\\' },
  { code: 'Delete', key: 'Del' },
  { code: 'CapsLock', key: 'Caps Lock' },
  { code: 'KeyA', key: 'ф' },
  { code: 'KeyS', key: 'ы' },
  { code: 'KeyD', key: 'в' },
  { code: 'KeyF', key: 'а' },
  { code: 'KeyG', key: 'п' },
  { code: 'KeyH', key: 'р' },
  { code: 'KeyJ', key: 'о' },
  { code: 'KeyK', key: 'л' },
  { code: 'KeyL', key: 'д' },
  { code: 'Semicolon', key: 'ж' },
  { code: 'Quote', key: 'э' },
  { code: 'Enter', key: 'Enter' },
  { code: 'ShiftLeft', key: 'Shift' },
  { code: 'KeyZ', key: 'я' },
  { code: 'KeyX', key: 'ч' },
  { code: 'KeyC', key: 'с' },
  { code: 'KeyV', key: 'м' },
  { code: 'KeyB', key: 'и' },
  { code: 'KeyN', key: 'т' },
  { code: 'KeyM', key: 'ь' },
  { code: 'Comma', key: 'б' },
  { code: 'Period', key: 'ю' },
  { code: 'Slash', key: '.' },
  { code: 'ShiftRight', key: 'Shift' },
  { code: 'ArrowUp', key: '&#x25b2;' },
  { code: 'Language', key: 'EN' },
  { code: 'ControlLeft', key: 'Ctrl' },
  { code: 'MetaLeft', key: 'Win' },
  { code: 'AltLeft', key: 'Alt' },
  { code: 'Space', key: ' ' },
  { code: 'AltRight', key: 'Alt' },
  { code: 'ControlRight', key: 'Ctrl' },
  { code: 'ArrowLeft', key: '&#x25c0;' },
  { code: 'ArrowDown', key: '&#x25bc;' },
  { code: 'ArrowRight', key: '&#x25ba;' },
];

const KEYS = document.getElementsByClassName('keyboard-key');

// document.addEventListener('keydown', (e) => {
//   console.log(e);
//   KEYBOARD_RU.push(`{code:"${e.code}", key:"${e.key}"}`);
//   console.log(KEYBOARD_RU);
// });

(function () {
  let out = '';
  for (const keys of KEYBOARD_EN) {
    out += `<div class="keyboard-key" data-code="${keys.code}" data-key="${keys.key}">${keys.key}</div>`;
  }
  document.body.innerHTML = `<textarea name="screen" id="area" cols="107" rows="10" placeholder="Введите данные с клавиатуры" autofocus></textarea>
                              <div class="keyboard">${out}</div>`;
}());
function mouseClick(event) {
  const action = event.target.dataset.key; // Получаю key
  if (action !== 'Enter') {
    area.value += action;
  } else if (action === 'Enter') {
    area.value += '\n';
  } else if (action === '&#x25c0;') {
    area.value += '\n';
  }

  [...KEYS].forEach((element) => {
    element.addEventListener('click', () => {
      [...KEYS].forEach((el) => {
        el.classList.remove('active');
      });
      element.classList.add('active');
    });
  });
}
(function () {
  [...KEYS].forEach((item) => item.addEventListener('click', mouseClick));
}());


document.body.onload = function () {
  document.addEventListener('keydown', (e) => {
    [...KEYS].forEach((element) => {
      element.classList.remove('active');
    });
    document.querySelector(`[data-code="${e.code}"]`).classList.add('active');
  });
};

// document.addEventListener("keydown", (event) => {
//   if(event.code === 'ControlLeft'){
//     document.addEventListener("keyup", (e) => {
//       if(e.code === 'KeyZ' || e.code === 'KeyF'){
//         console.log('z')
//       };
//     });
//   }
//   event.preventDefault();
// });

// function controlPlusKey(targetKey, callback) {
// document.addEventListener("keydown", (event) => {
//   if(event.code === 'ControlLeft'){
//     document.addEventListener("keyup", (e) => {
//       if(e.code === 'KeyZ' || e.code === 'KeyF'){
//         console.log('z')
//       };
//     });
//   }
//   event.preventDefault();
// });
// }
