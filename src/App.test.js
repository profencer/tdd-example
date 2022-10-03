/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react";
import { App } from "./App";

describe("App", () => {
  test("A new comment can be added", () => {
    const comment = "An example comment";
    const author = "Arseniy";

    const {
      container,
      getByText,
      queryByTestId,
      getByLabelText,
    } = render(<App />);

    const input = getByLabelText('Name');
    const textArea =('comment');
    const button =  getByText('Submit')

  });
});
