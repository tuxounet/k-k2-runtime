import { Logger } from "./libs/Logger";
import { Results } from "./libs/Results";
export * as types from "./types/index";

export default {
  log: new Logger(),
  results: new Results(),
};
