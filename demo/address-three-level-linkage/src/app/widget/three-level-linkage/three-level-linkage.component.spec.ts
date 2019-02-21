import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeLevelLinkageComponent } from './three-level-linkage.component';

describe('ThreeLevelLinkageComponent', () => {
    let component: ThreeLevelLinkageComponent;
    let fixture: ComponentFixture<ThreeLevelLinkageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ThreeLevelLinkageComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ThreeLevelLinkageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
