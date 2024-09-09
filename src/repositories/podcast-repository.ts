import fs from "fs";
import path from "path";
import { PodcastModel } from "../models/podcast-model";


const pathData = path.join(__dirname, "../repositories/podcast.json");

export const repositoryPodast = async (podcastName?: string): Promise<PodcastModel[]> => {
    const data = fs.readFileSync(pathData, "utf-8")
    let podcastFile = JSON.parse(data);
    if (podcastName) {
        podcastFile = podcastFile.filter(
            (podcast: PodcastModel) => podcast.podcastName == podcastName
        );
    }
    return podcastFile;
}