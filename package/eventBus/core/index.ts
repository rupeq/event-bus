import {
  Subscriptions,
  SubscribeCore,
  UnsubscribeCore,
  Callbacks,
} from "@/types";

const subscriptions: Subscriptions = {};

const unsubscribe = ({ callbacks, callback, eventName }: UnsubscribeCore) => {
  callbacks.delete(callback);
  if (!!!callbacks.size) {
    delete subscriptions[eventName];
  }
};

const subscribe = ({ eventName, callback }: SubscribeCore) => {
  if (!subscriptions?.[eventName]) {
    subscriptions[eventName] = new Set();
  }

  const callbacks: Callbacks = subscriptions[eventName];
  callbacks.add(callback);

  return () => unsubscribe({ callbacks, callback, eventName });
};

const broadcast = (eventName: string, ...args: any[]) => {
  if (!subscriptions?.[eventName]) return;

  const callbacks = subscriptions[eventName];
  callbacks.forEach((callback) => {
    callback(...args);
  });
};

export default {
  subscribe,
  broadcast,
};
