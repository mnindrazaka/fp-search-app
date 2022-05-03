const Maybe = (value) => {
  if (value === null || value === undefined) {
    return Maybe.Nothing();
  } else {
    return Maybe.Just(value);
  }
};

Maybe.Just = (value) => {
  return {
    map: (fn) => Maybe.Just(fn(value)),
    unwrapOr: () => value,
  };
};

Maybe.Nothing = () => {
  return {
    map: () => Maybe.Nothing(),
    unwrapOr: (value) => value,
  };
};

const entries = {
  accident: [
    "An unexpected, unfortunate mishap, failure or loss with the potential for harming human life, property or the environment.",
    "An event that happens suddenly or by chance without an apparent cause.",
  ],
  accumulator: [
    "A rechargeable device for storing electrical energy in the form of chemical energy, consisting of one or more separate secondary cells.\\n(Source: CED)",
  ],
  acid: [
    "A compound capable of transferring a hydrogen ion in solution.",
    "Being harsh or corrosive in tone.",
    "Having an acid, sharp or tangy taste.",
    "A powerful hallucinogenic drug manufactured from lysergic acid.",
    "Having a pH less than 7, or being sour, or having the strength to neutralize  alkalis, or turning a litmus paper red.",
  ],
  Paris: ["The capital and largest city of France."],
};

const format = (results) => results.join("<br>");

const search = (data, input) => Maybe(data[input]);

const searchWord = (word) =>
  search(entries, word).map(format).unwrapOr("word not found");

window.searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const input = event.target[0];
  window.result.innerHTML = searchWord(input.value);
});
