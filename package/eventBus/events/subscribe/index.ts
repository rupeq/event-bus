import core from "@/core";

import { SubscribeProps } from "@/types";

const eventName: string = "subscribeEvent";

const subscribe = (callback: SubscribeProps) =>
  core.subscribe({ eventName, callback });

export default subscribe;
