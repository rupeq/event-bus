import broadcast from "@/events/broadcast";
import subscribe from "@/events/subscribe";

describe("broadcast", () => {
  test("should call callbacks in subscriptions", () => {
    const callback = (a: string) => `Received ${a}`;
    const unsubscribe = subscribe(callback);
    expect(typeof unsubscribe).toBe("function");
    broadcast(["value"]);
  });
});
