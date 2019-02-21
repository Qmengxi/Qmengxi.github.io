import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ThreeLevelLinkageService {

    constructor(private http: HttpClient) { }

    /**
     * 获取省市区数据
     * @param type 获取数据的类型  province | city | county
     */
    getAreaData(type){
        let url = `assets/${type}.json`;
        return this.http.get(url)
            .toPromise()
            .catch(error=>{console.log(error)})
            .then(res=>res)

    }
}
