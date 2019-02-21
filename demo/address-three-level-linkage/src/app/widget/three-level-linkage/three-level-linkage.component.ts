import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ThreeLevelLinkageService } from '../../service/three-level-linkage.service';

@Component({
    selector: 'app-three-level-linkage',
    templateUrl: './three-level-linkage.component.html',
    styleUrls: ['./three-level-linkage.component.scss']
})
export class ThreeLevelLinkageComponent implements OnInit {
    @Output() areaInfoOut = new EventEmitter();

    private provinceData:Array<Object> = [];
    private cityAllData:Object = null;
    private cityData:Array<Object> = [];
    private countyAllData:Object = null;
    private countyData:Array<Object> = [];
    form:FormGroup = new FormGroup({
        province: new FormControl('-1'),
        city: new FormControl('-1'),
        county: new FormControl('-1'),
    });

    constructor(private areaService:ThreeLevelLinkageService) { }

    ngOnInit() {
        this.getAreaData('province','provinceData');
        this.getAreaData('city','cityAllData');
        this.getAreaData('county','countyAllData');
    }

    getAreaData(type,reveiveData){
        this.areaService.getAreaData(type).then(res=>{
            this[reveiveData] = res;
        })
    }

    resetSelect(type){
        let patchData = new Object();
        patchData[type] = '-1'
        this.form.patchValue(patchData)
    }

    provinceChange(){
        this.resetSelect('city');
        this.resetSelect('county');
        this.getCity(this.form.value.province.id)
    }

    cityChange(){
        this.resetSelect('county');
        this.getCounty(this.form.value.city.id)
    }

    countyChange(){
        this.areaInfoOut.emit(this.form.value);
    }

    getCity(id){
        this.cityData = this.cityAllData[id];
    }

    getCounty(id){
        this.countyData = this.countyAllData[id];
    }

}
