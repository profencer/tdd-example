/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react";
import { CommentForm } from ".";

describe("CommentForm", () => {
  test("has text area, text input and submit button", () => {
    const { getByLabelText, queryByTestId, getByText } = render(
      <CommentForm handleSubmit={() => {}} />
    );
    expect(getByLabelText("Name")).toBeInTheDocument();
    expect(queryByTestId("comment")).toBeInTheDocument();
    expect(getByText("Submit")).toBeInTheDocument();
  });
});
