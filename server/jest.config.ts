export default {
  roots: ["<rootDir>/src"],
  preset: "ts-jest",
  testEnvironment: "node",
  // Jest transformations -- this adds support for TypeScript
  // using ts-jest
  transform: {
    "^.+\\.(ts)$": "ts-jest",
  },

  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",

  moduleFileExtensions: ["ts", "json", "js", "node"],
};
