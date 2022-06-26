import type { Config } from "@jest/types";

export default async (): Promise<Config.InitialOptions> => {
  return {
    verbose: true,
    injectGlobals: true,
    testEnvironment: "node",
    roots: ["<rootDir>/package/eventBus/"],
    transform: {
      "^.+\\.tsx?$": "ts-jest",
    },
    moduleNameMapper: {
      "@/(.*)": "<rootDir>/package/eventBus/$1",
    },
  };
};
