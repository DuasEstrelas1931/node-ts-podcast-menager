import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { repositoryPodast } from "../repositories/podcast-repository";
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (
  podcastName: string | undefined
): Promise<PodcastTransferModel> => {
  //defini a interface de retorno
  let responseFormat: PodcastTransferModel = {
    statusCode: 0,
    body: [],
  };

  // buscando  os dados
  //http://localhost:3000/api/episodes?p=flow
  const queryString = podcastName?.split("?p=")[1] ?? "";
  const data = await repositoryPodast(queryString);

  //verifico se tem conteúdo
  responseFormat = {
    statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
    body: data,
  };

  return responseFormat;
};
