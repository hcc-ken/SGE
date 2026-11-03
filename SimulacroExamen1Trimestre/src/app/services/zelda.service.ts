import {HttpClient} from "@angular/common/http";
import {APP_ID, inject, Service} from "@angular/core";
import {Observable} from "rxjs";
import {APIZeldaResponse} from "../models/zelda.models";

@Service()
export class ZeldaService {
    private readonly httpClient: HttpClient = inject(HttpClient);
    private readonly urlBase = "https://api.hyrule-compendium.com/v3/compendium/category/materials/";

        getMaterials(category: string): Observable<APIZeldaResponse> {
            return this.httpClient.get<APIZeldaResponse>(
                this.urlBase + category,
            );
        }
}