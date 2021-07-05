import { stringToMeetID, isValidMeetID } from "./common";

describe("Meet ID", () => {
  it("should convert xxxxxxxxxxxx to xxxx-xxxx-xxxx", () => {
    expect(stringToMeetID("xxxxxxxxxxxx")).toBe("xxxx-xxxx-xxxx");
  });
  it("should convert check valid meet id", () => {
    expect(isValidMeetID("xxxxxxxxxxxx")).toBe(false);
    expect(isValidMeetID("xxxx-xxxx-xxxx")).toBe(true);
  });
});
