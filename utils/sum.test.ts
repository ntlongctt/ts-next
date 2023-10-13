// test("adds 1 + 2 to equal 3", () => {
//   expect(sum(1, 2)).toBe(3);
// });

import { sum } from "./sum";

describe("sum", () => {
  it("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  // Adds two negative numbers together

  it("adds -1 + -2 to equal -3", () => {
    expect(sum(-1, -2)).toBe(-3);
  });

  // Adds two decimal numbers together

  it("adds 1.5 + 2.5 to equal 4", () => {
    expect(sum(1.5, 2.5)).toBe(4);
  });

  // Adds a positive number and a negative number together

  it("adds 5 + (-3) to equal 2", () => {
    expect(sum(5, -3)).toBe(2);
  });

  // Adds two large numbers together

  it("adds 1000000 + 2000000 to equal 3000000", () => {
    expect(sum(1000000, 2000000)).toBe(3000000);
  });
});
