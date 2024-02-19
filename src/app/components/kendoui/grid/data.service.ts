import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { map } from 'rxjs/operators';
import { Product } from './model';

@Injectable({providedIn:'root'})
export class ODataService extends BehaviorSubject<Product[]> {
    public loading: boolean = false;

    constructor(private http: HttpClient) {
        super([]);
    }

    public read(): void {
        this.loading = true;
        this.fetch().subscribe((data) => {
            super.next(data);
            this.loading = false;
        });
    }

    private fetch(): Observable<Product[]> {
        return this.http
            .get(`https://demos.telerik.com/kendo-ui/service-v4/odata/Products/`)
            .pipe(map((data: any) => <Product[]>data.value));
    }
}