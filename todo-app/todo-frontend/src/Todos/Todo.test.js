import { render, screen } from "@testing-library/react";

import Todo from "./Todo";

describe("Test Todo", () => {
  it("Basic render", () => {
    render(
      <Todo
        todo={{ text: "best todo", done: false }}
        onClickDelete={() => console.log("mock")}
        onClickComplete={() => console.log("mock")}
      />
    );
    expect(screen.getByText("best todo")).toBeVisible();
  });
});
