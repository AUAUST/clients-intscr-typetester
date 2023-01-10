// import { myFunction } from "./function";

// ["A", "B", "C", "D"].forEach((string) => {
//   test("returns HEY", () => {
//     expect(myFunction(string)).toBe(string);
//   });
// });

// test("foo", () => {
//   expect("foo");
// });

// MyComponent.test.js
import { render } from "@testing-library/vue";
import Content from "../components/Content.vue";

test("it should work", () => {
  const { getByText } = render(Content, {
    props: {
      /* ... */
    },
  });

  // assert output
  getByText("Paragraph");
});
