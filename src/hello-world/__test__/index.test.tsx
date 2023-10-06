import { describe, test, expect } from "@jest/globals";
import { render, queryAllByTestId } from "@testing-library/react";
import { HelloWorld } from "../hello-world";

describe("HelloWorld", () => {
  test("first test", () => {
    const { baseElement } = render(<HelloWorld />);

    expect(queryAllByTestId(baseElement, "hello-world")).toHaveLength(1);
  });

  test("second test", () => {
    const { baseElement } = render(<HelloWorld hidden />);

    expect(queryAllByTestId(baseElement, "hello-world")).toHaveLength(0);
  });
});
