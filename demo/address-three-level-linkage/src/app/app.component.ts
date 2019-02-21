import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'address-three-level-linkage';

    receiveAreaInfo(event){
        //处理数据
        console.log(event);
    }
}
