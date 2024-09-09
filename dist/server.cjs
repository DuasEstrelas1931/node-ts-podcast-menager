"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
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

// src/server.ts
var http = __toESM(require("http"), 1);

// src/controllers/podcast-controller.ts
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

// src/server.ts
var server = http.createServer(
  (req, res) => __async(void 0, null, function* () {
    if (req.method == "GET") {
      yield getListEpisodes(req, res);
    }
  })
);
var port = process.env.PORT;
var host = process.env.HOST;
server.listen(port, () => {
  console.log(`Server is running on port ${host}:${port}`);
});
