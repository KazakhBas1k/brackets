module.exports = function check(str, bracketsConfig) {
  let brackets = str;
  for (let i = 0; i < Math.trunc(str.length / 2); i++) {
    bracketsConfig.forEach((item) => {
      brackets = brackets.replace(`${item[0]}${item[1]}`, "");
    });
  }
  return brackets.length == 0;
};
