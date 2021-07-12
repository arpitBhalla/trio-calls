import { generateID } from "./UID";

describe("Meet ID", () => {
  it("should generate xxxx-xxxx-xxxx", () => {
    expect(generateID()).toMatch(/^(\w+){4}-(\w+){4}-(\w+){4}$/);
  });
});
