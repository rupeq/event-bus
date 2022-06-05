import core from "@/core";

import { BroadcastProps } from "@/types";

const eventName: string = "broadcastEvent";

const broadcast = (data: BroadcastProps) => core.broadcast(eventName, ...data);

export default broadcast;
