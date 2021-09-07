import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class DataService {
    constructor(private http: HttpClient) { }

    getApiLog(): Observable<any> {
        let apiUrl = './../../assets/data/api/example.json';
        return this.http.get<any>(apiUrl);
    }
}