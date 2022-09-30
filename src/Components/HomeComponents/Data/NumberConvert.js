export const NumberConvert = (n) => {
  let number = "";
  n += "";
  let l = n.length;
  for (let i = 0; i < l; i++) {
    if (l - i === 3 || l - i > 5 || l - i > 7) number += "," + n[i];
    else number += n[i];
  }

  return number + ".00";
};
