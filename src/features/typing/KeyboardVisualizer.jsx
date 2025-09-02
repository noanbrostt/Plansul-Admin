import React from "react";
import { LuHand } from "react-icons/lu";

// ===== Layout do teclado ABNT2 =====
const KEYBOARD_LAYOUT = [
  // 1ª linha
  ["'", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
  // 2ª linha
  ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "´", "[", "]"],
  // 3ª linha
  ["CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", "ç", "~", "Enter"],
  // 4ª linha
  ["Shift", "\\", "z", "x", "c", "v", "b", "n", "m", ",", ".", ";", "Shift"],
  // 5ª linha
  ["Ctrl", "Fn", "Win", "Alt", " ", "AltGr", "Menu", "Ctrl"],
];

// ===== Mapeamento tecla → dedo =====
const FINGER_MAPPING = {
  // números e símbolos da 1ª linha
  "'": "left-pinky",
  "1": "left-pinky",
  "2": "left-ring",
  "3": "left-middle",
  "4": "left-index",
  "5": "left-index",
  "6": "right-index",
  "7": "right-index",
  "8": "right-middle",
  "9": "right-ring",
  "0": "right-pinky",
  "-": "right-pinky",
  "=": "right-pinky",

  // linha QWERTY
  q: "left-pinky",
  w: "left-ring",
  e: "left-middle",
  r: "left-index",
  t: "left-index",
  y: "right-index",
  u: "right-index",
  i: "right-middle",
  o: "right-ring",
  p: "right-pinky",
  "´": "right-pinky",
  "[": "right-pinky",
  "]": "right-pinky",

  // linha ASDF
  a: "left-pinky",
  s: "left-ring",
  d: "left-middle",
  f: "left-index",
  g: "left-index",
  h: "right-index",
  j: "right-index",
  k: "right-middle",
  l: "right-ring",
  "ç": "right-pinky",
  "~": "right-pinky", // tecla do til (dead key no ABNT2)

  // linha ZXCV
  "\\": "left-pinky",
  z: "left-pinky",
  x: "left-ring",
  c: "left-middle",
  v: "left-index",
  b: "left-index",
  n: "right-index",
  m: "right-index",
  ",": "right-middle",
  ".": "right-ring",
  ";": "right-pinky",

  // modificadoras mais comuns (cores só p/ referência visual)
  Backspace: "right-pinky",
  Tab: "left-pinky",
  CapsLock: "left-pinky",
  Enter: "right-pinky",
  Shift: "left-pinky", // temos 2 Shifts; ambos rotulados igual
  " ": "thumbs", // espaço
};

// ===== Cores por dedo =====
const FINGER_COLORS = {
  "left-pinky": "bg-pink-200 border-pink-400 text-pink-900",
  "left-ring": "bg-purple-200 border-purple-400 text-purple-900",
  "left-middle": "bg-blue-200 border-blue-400 text-blue-900",
  "left-index": "bg-green-200 border-green-400 text-green-900",
  thumbs: "bg-gray-200 border-gray-400 text-gray-900",
  "right-index": "bg-green-200 border-green-400 text-green-900",
  "right-middle": "bg-blue-200 border-blue-400 text-blue-900",
  "right-ring": "bg-purple-200 border-purple-400 text-purple-900",
  "right-pinky": "bg-pink-200 border-pink-400 text-pink-900",
};

// ===== Nomes dos dedos =====
const FINGER_NAMES = {
  "left-pinky": "Mindinho Esquerdo",
  "left-ring": "Anelar Esquerdo",
  "left-middle": "Médio Esquerdo",
  "left-index": "Indicador Esquerdo",
  thumbs: "Polegares",
  "right-index": "Indicador Direito",
  "right-middle": "Médio Direito",
  "right-ring": "Anelar Direito",
  "right-pinky": "Mindinho Direito",
};

// ===== Helpers de normalização/realce =====
const COMBINING = {
  ACUTE: "\u0301",      // ´
  TILDE: "\u0303",      // ~
  CIRC: "\u0302",       // ^
  GRAVE: "\u0300",      // `
};

// remove diacríticos mantendo exceções (ç)
function stripDiacriticsKeepSpecial(ch) {
  if (!ch) return "";
  // mantém ç/Ç como especiais
  if (/[çÇ]/.test(ch)) return "ç";
  const base = ch.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return base;
}

// retorna diacríticos do char (ex.: 'á' -> ['´'])
function getCombiningMarks(ch) {
  const decomposed = ch.normalize("NFD");
  const marks = [];
  for (const c of decomposed) {
    if (/[\u0300-\u036f]/.test(c)) marks.push(c);
  }
  return marks;
}

// mapeia diacrítico → tecla dead key do layout
function accentKeyForMark(mark) {
  if (mark === COMBINING.ACUTE) return "´";
  if (mark === COMBINING.TILDE) return "~";
  if (mark === COMBINING.CIRC) return "~"; // ABNT2: ^ normalmente via Shift+~ (destacamos "~")
  if (mark === COMBINING.GRAVE) return "´"; // fallback visual (tecla ` não está no layout)
  return null;
}

// escolhe Shift (visual): destacamos ambos (nossos dois "Shift" têm o mesmo rótulo)
function needsShiftForChar(ch) {
  if (!ch) return false;
  // maiúsculas
  const isLetter = /[A-Za-zÁÉÍÓÚÀÃÕÂÊÔÇáéíóúàãõâêôç]/.test(ch);
  if (isLetter && ch === ch.toUpperCase() && ch !== ch.toLowerCase()) return true;
  // alguns símbolos da 1ª linha podem exigir Shift; para simplicidade: não tratamos aqui
  return false;
}

// calcula quais teclas destacar para o próximo caractere
function keysToHighlight(nextChar) {
  if (!nextChar) return new Set();
  const ch = String(nextChar);

  // espaço
  if (ch === " ") return new Set([" "]);

  // letra/símbolo
  const keys = new Set();

  // baseKey (letra principal no teclado)
  const baseKeyRaw = stripDiacriticsKeepSpecial(ch).toLowerCase();
  if (baseKeyRaw && (FINGER_MAPPING[baseKeyRaw] || /[a-zç]/.test(baseKeyRaw))) {
    keys.add(baseKeyRaw);
  } else {
    // se não for letra conhecida, tenta a própria tecla em minúsculo
    keys.add(ch.toLowerCase());
  }

  // acentos (dead keys)
  const marks = getCombiningMarks(ch);
  for (const m of marks) {
    const dead = accentKeyForMark(m);
    if (dead) keys.add(dead);
  }

  // maiúscula → Shift
  if (needsShiftForChar(ch)) {
    keys.add("Shift"); // destacamos ambos Shifts no layout
  }

  return keys;
}

// dedo principal a exibir (preferimos o dedo da letra base)
function mainFingerForChar(nextChar) {
  if (!nextChar) return null;
  const ch = String(nextChar);
  const baseKey = stripDiacriticsKeepSpecial(ch).toLowerCase();
  if (FINGER_MAPPING[baseKey]) return FINGER_MAPPING[baseKey];
  // fallback: se for espaço, polegares
  if (ch === " ") return "thumbs";
  return null;
}

export default function KeyboardVisualizer({ nextChar, isVisible = true }) {
  if (!isVisible) return null;

  const highlight = keysToHighlight(nextChar); // Set de teclas a realçar
  const currentFinger = mainFingerForChar(nextChar);

  const getKeyClass = (key) => {
    const k = typeof key === "string" ? key : "";
    const finger = FINGER_MAPPING[k] || FINGER_MAPPING[k.toLowerCase()] || null;
    const isHot = highlight.has(k) || highlight.has(k.toLowerCase());

    const base =
      "px-2 py-2 text-xs font-medium border-2 rounded transition-all duration-150 min-w-[32px] text-center select-none";

    // sempre colorimos por dedo, se houver mapeamento
    const colorCls = finger ? FINGER_COLORS[finger] : "bg-base-200 border-base-300 text-base-content/60";

    // realce extra para as teclas relevantes (letra, dead key e/ou Shift)
    if (isHot) {
      return `${base} ${colorCls} ring-4 ring-offset-2 ring-warning/60 animate-pulse scale-105 shadow-lg`;
    }
    return `${base} ${colorCls}`;
  };

  const getKeyWidth = (key) => {
    if (key === "Backspace") return "w-20";
    if (key === "Tab") return "w-16";
    if (key === "CapsLock") return "w-20";
    if (key === "Enter") return "w-20";
    if (key === "Shift") return "w-24";
    if (key === " ") return "w-64";
    if (key === "Ctrl" || key === "Alt" || key === "AltGr") return "w-16";
    return "w-8";
  };

  const displayKey = (key) => {
    if (key === " ") return "Space";
    if (key === "Backspace") return "⌫";
    if (key === "Tab") return "⇥";
    if (key === "CapsLock") return "Caps";
    if (key === "Enter") return "⏎";
    if (key === "Shift") return "⇧";
    return String(key).toUpperCase();
  };

  return (
    <div className="card bg-base-100 shadow-lg">
      <div className="card-body">
        {/* Header */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2 text-lg font-semibold">
            <LuHand className="text-primary" />
            <span>Guia do Teclado</span>
          </div>
          {currentFinger && (
            <span className={`badge ${FINGER_COLORS[currentFinger]} border font-semibold`}>
              Use: {FINGER_NAMES[currentFinger]}
            </span>
          )}
        </div>

        {/* Teclado */}
        <div className="space-y-1">
          {KEYBOARD_LAYOUT.map((row, ri) => (
            <div key={ri} className="flex justify-center gap-1">
              {row.map((key, ki) => (
                <button
                  key={`${ri}-${ki}`}
                  className={`${getKeyClass(key)} ${getKeyWidth(key)}`}
                  disabled
                >
                  {displayKey(key)}
                </button>
              ))}
            </div>
          ))}
        </div>

        {/* Legenda dos dedos */}
        <div className="mt-4 pt-3 border-t border-base-300">
          <div className="text-xs opacity-70 mb-2 text-center font-medium">
            Legenda dos Dedos
          </div>
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-pink-300 border border-pink-400" />
                <span>Mindinho</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-purple-300 border border-purple-400" />
                <span>Anelar</span>
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-blue-300 border border-blue-400" />
                <span>Médio</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-green-300 border border-green-400" />
                <span>Indicador</span>
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-gray-300 border border-gray-400" />
                <span>Polegar</span>
              </div>
            </div>
          </div>
        </div>

        {/* Próxima tecla */}
        {nextChar && (
          <div className="mt-3 p-3 bg-warning/10 border border-warning/20 rounded-lg text-center">
            <div className="text-sm font-medium">
              Próxima tecla:{" "}
              <span className="text-lg font-bold mx-2 px-3 py-1 bg-warning/20 rounded">
                {nextChar === " " ? "ESPAÇO" : String(nextChar).toUpperCase()}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
