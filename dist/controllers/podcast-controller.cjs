"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/controllers/podcast-controller.ts
var podcast_controller_exports = {};
__export(podcast_controller_exports, {
  getListEpisodes: () => getListEpisodes
});
module.exports = __toCommonJS(podcast_controller_exports);
var getListEpisodes = (req, res) => __async(void 0, null, function* () {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify([
      {
        podcastName: "flow",
        episodeName: "[MEDALHISTA OL\xCDMPICO \u{1F948}] ISAQUIAS QUEIROZ - Flow #393",
        videoId: "7BZkp3qaRu8",
        episodeImage: "https://i.ytimg.com/vi/7BZkp3qaRu8/hqdefault.jpg",
        episodeLink: "https://www.youtube.com/watch?v=7BZkp3qaRu8",
        categories: ["sa\xFAde", "esporte"]
      },
      {
        podcastName: "flow",
        episodeName: "[MEDALHISTA OL\xCDMPICO \u{1F948}] ISAQUIAS QUEIROZ - Flow #393",
        videoId: "16ItO8XPrX",
        episodeImage: "https://i.ytimg.com/vi/16ItO8XPrXY/maxresdefault.jpg",
        episodeLink: "https://www.youtube.com/watch?v=16ItO8XPrXY",
        category: ["mentalidade, humor"]
      }
    ])
  );
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getListEpisodes
});
