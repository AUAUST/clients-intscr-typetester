import { myFunction } from "./function";

["A", "B", "C", "D"].forEach((string) => {
  test("returns HEY", () => {
    expect(myFunction(string)).toBe(string);
  });
});

test("foo", () => {
  expect("foo");
});
