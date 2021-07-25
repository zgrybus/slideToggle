module.exports = {
  moduleDirectories: [
    "node_modules",
    "src"
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  roots: [
    "src"
  ],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(ts?)$",
  transform: {
    "^.+\\.ts?$": "ts-jest"
  },
  moduleNameMapper: {
    "src/(.*)": "<rootDir>/src/$1"
  }
}