import {HttpClient} from "@angular/common/http";
import { inject, Service } from '@angular/core';
import type {Observable} from "rxjs";

import {environment} from "../../environments/environment";
import type {apiValorantResponse} from "../models/valorant.models";

@Service()
export class AgentsService {
  private readonly httpClient: HttpClient = inject(HttpClient);

  getAgentMaterials(): Observable<apiValorantResponse> {
    return this.httpClient.get<apiValorantResponse>(
      environment.URLBase + '/agents',
    );
  }
}
