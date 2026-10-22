const test = require("node:test");
const assert = require("node:assert/strict");
const { getMessage } = require("../app");

test("application returns expected message", () => {
  assert.equal(
    getMessage(),
    "Hello! DevOps CI/CD Pipeline is working."
  );
});
