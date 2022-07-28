import { render, screen } from "@testing-library/react";

import Todo from "./Todo";

describe("Test Todo", () => {
  it("Basic render", () => {
    render(<Todo todo={{ text: "best todo", done: false }} />);
    expect(screen.getByText("best todo")).toBeVisible();
  });
});
