import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Episode from "./../Episode";

const testEpisode = {
  id: "",
  image: null,
  name: "",
  season: 1,
  number: 123,
  summary: "a summary",
  runtime: 123,
};

test("renders without error", async () => {
  render(<Episode episode={testEpisode} />);
});

test("renders the summary test passed as prop", () => {
  render(<Episode episode={testEpisode} />);
  const episodeSummary = screen.getByText(/a summary/i);
  expect(episodeSummary).toBeInTheDocument();
});

test("renders default image when image is not defined", () => {
  render(<Episode episode={testEpisode} />);
  const episodeImg = screen.queryByAltText(
    "https://i.ibb.co/2FsfXqM/stranger-things.png"
  );
  expect(episodeImg).toBeInTheDocument();
});
