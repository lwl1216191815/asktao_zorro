import { Injectable } from '@angular/core';

declare var dragonConfig: any;
@Injectable({
    providedIn: 'root'
})
export class CommonConfig {
    constructor() {

    }
    public get baseUrl(): any {
        return dragonConfig.contextPath;
    }
}