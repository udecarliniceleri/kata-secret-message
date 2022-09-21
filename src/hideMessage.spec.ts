import hideMessage from "./hideMessage";

describe("Converter", () => {
  test("should return e for a in 4", () => {
    console.log(hideMessage("a", 4));
    expect(hideMessage("a", 4)).toBe("e");
  });
  test("should return g for b in 5", () => {
    console.log(hideMessage("b", 5));
    expect(hideMessage("b", 5)).toBe("g");
  });
  test("should return de for ab in 3", () => {
    console.log(hideMessage("ab", 3));
    expect(hideMessage("ab", 3)).toBe("de");
  });
  test("should return lspe for hola in 4", () => {
    console.log(hideMessage("hola", 4));
    expect(hideMessage("hola", 4)).toBe("lspe");
  });
  test("should return vguv for test in 2", () => {
    console.log(hideMessage("test", 2));
    expect(hideMessage("test", 2)).toBe("vguv");
  });
});
