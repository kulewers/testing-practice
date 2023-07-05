const caesarCipher = require("./caesar-cipher");

test("wrapping", () => {
  expect(caesarCipher("zeBra!", 1)).toBe("afCsb!");
});
