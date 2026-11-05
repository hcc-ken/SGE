import {HttpClient} from "@angular/common/http";
import {inject, Service} from "@angular/core";
import type {Observable} from "rxjs";

import {environment} from "../../environments/environment";
import type {APIZeldaResponse} from "../models/zelda.models";

@Service()
export class ZeldaService {
    private readonly httpClient: HttpClient = inject(HttpClient);

        getMaterials(): Observable<APIZeldaResponse> {
            return this.httpClient.get<APIZeldaResponse>(
                environment.URLBase + '/materials', //Se ha creado la variable URLBase en environment.ts
            );
        }
}