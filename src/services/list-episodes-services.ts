import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { repositoryPodast } from "../repositories/podcast-repository";
import { StatusCode } from "../utils/status-code";

export const serviceListEpisodes = async (): Promise<PodcastTransferModel> => {
  //defini a interface de retorno
  let responseFormat: PodcastTransferModel = {
    statusCode: 0,
    body: [],
  };
  const data = await repositoryPodast();

  //verifico se tem conteúdo
  responseFormat = {
    statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
    body: data,
  };

  return responseFormat;
};
