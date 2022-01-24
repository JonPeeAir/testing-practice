import caesarCipher from "../src/caesarCipher";

test("caesarCipher returns the same word if key is zero", () => {
    expect(caesarCipher(0, "hello")).toBe("hello");
});

test("caesarCipher keeps spacing", () => {
    expect(caesarCipher(5, "hello world")).toBe("mjqqt btwqi");
});

test("caesarCipher keeps letter casing", () => {
    expect(caesarCipher(5, "Hello World")).toBe("Mjqqt Btwqi");
});

test("caesarCipher keeps punctuation", () => {
    expect(caesarCipher(5, "Hello World!")).toBe("Mjqqt Btwqi!");
});

test("caesarCipher also decrypts numbers", () => {
    expect(caesarCipher(15, "123")).toBe("678");
});

test("caesarCipher works with key of 1", () => {
    expect(caesarCipher(1, "you ugly!123")).toBe("zpv vhmz!234");
});

test("caesarCipher works with key of 10", () => {
    expect(caesarCipher(10, "you ugly!123")).toBe("iye eqvi!123");
});

test("caesarCipher works with key of -10", () => {
    expect(caesarCipher(-10, "you ugly!123")).toBe("iye eqvi!123");
});

test("caesarCipher works with key of 15", () => {
    expect(caesarCipher(15, "you ugly!123")).toBe("ndj jvan!678");
});

test("caesarCipher works with key of -15", () => {
    expect(caesarCipher(-15, "you ugly!123")).toBe("ndj jvan!678");
});

test("caesarCipher works with key of 50", () => {
    expect(caesarCipher(50, "you ugly!123")).toBe("wms sejw!123");
});

test("caesarCipher works with key of -50", () => {
    expect(caesarCipher(-50, "you ugly!123")).toBe("wms sejw!123");
});
