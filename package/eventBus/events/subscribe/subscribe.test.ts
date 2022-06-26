import subscribe from "@/events/subscribe";

describe("subscribe", () => {
  let mockCallback;

  beforeEach(() => (mockCallback = () => console.log("Test")));

  test("should return unsubscribe", () => {
    const actual = subscribe(mockCallback);
    expect(typeof actual).toBe("function");
  });
});
