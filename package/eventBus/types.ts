export type Callbacks = Set<Function>;

export type SubscribeProps = Function;

export type BroadcastProps = any;

export type SubscribeCore = {
  callback: SubscribeProps;
  eventName: string;
};

export type UnsubscribeCore = SubscribeCore & {
  callbacks: Callbacks;
};

export type Subscriptions = {
  [key: string]: Callbacks;
};
