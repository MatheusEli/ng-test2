import { TestBed } from '@angular/core/testing';
import { ActionDirectiveModule } from './action.module';

describe('', () => {

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ActionDirectiveModule]
        }).compileComponents();
    });
});