import { render } from "@testing-library/vue";
import { describe, it } from "vitest";
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
