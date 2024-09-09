import * as http from "http";
import {
  getFilterEpisodes,
  getListEpisodes,
} from "./controllers/podcast-controller";
import { Routes } from "./routes/routes";
import { HttpMethods } from "./utils/http-methods";

export const app = async (
  request: http.IncomingMessage,
  response: http.ServerResponse
) => {
  //Query string
  //http://localhost:3000/api/episodes?p=flow

  const baseUrl = request.url?.split("?")[0];

  // Listar podcasts            //endpoit criando rota
  if (request.method === HttpMethods.GET && baseUrl === Routes.LIST) {
    await getListEpisodes(request, response);
  }
  if (request.method === HttpMethods.GET && baseUrl === Routes.EPISODES) {
    await getFilterEpisodes(request, response);
  }
};
