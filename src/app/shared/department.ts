import { CSE1 } from '../shared/first/comps';
import { ECE1 } from '../shared/first/eces';
import { CV1 } from '../shared/first/civils';
import { IT1 } from '../shared/first/its';
import { MECH1 } from '../shared/first/mechs';
import { AEIE1 } from '../shared/first/aeies';
import { BT1 } from '../shared/first/bts';
import { CSE2 } from '../shared/second/comps';
import { ECE2 } from '../shared/second/eces';
import { CV2 } from '../shared/second/civils';
import { IT2 } from '../shared/second/its';
import { MECH2 } from '../shared/second/mechs';
import { AEIE2 } from '../shared/second/aeies';
import { BT2 } from '../shared/second/bts';
import { CSE3 } from '../shared/third/comps';
import { ECE3 } from '../shared/third/eces';
import { CV3 } from '../shared/third/civils';
import { IT3 } from '../shared/third/its';
import { MECH3 } from '../shared/third/mechs';
import { AEIE3 } from '../shared/third/aeies';
import { BT3 } from '../shared/third/bts';
import { CSE4 } from '../shared/forth/comps';
import { ECE4 } from '../shared/forth/eces';
import { CV4 } from '../shared/forth/civils';
import { IT4 } from '../shared/forth/its';
import { MECH4 } from '../shared/forth/mechs';
import { AEIE4 } from '../shared/forth/aeies';
import { BT4 } from '../shared/forth/bts';

export class department {

    constructor(private user: any) {
    }
    departmentList() {
        if (this.user.year == 'first') {
            switch(this.user.dept) {
                case 'Cse':
                    return CSE1;break;
                case 'Ece':
                    return ECE1; break;
                case 'It':
                    return IT1; break;
                case 'Cv':
                    return CV1;break;
                case 'Aeie':
                    return AEIE1;break;
                case 'Mech':
                    return MECH1; break;
                case 'Bt':
                    return BT1; break;
                default:
                    return CSE1;break;
            }
        }
        else if (this.user.year == 'second') {
            switch(this.user.dept) {
                case 'Cse':
                    return CSE2;break;
                case 'Ece':
                    return ECE2; break;
                case 'It':
                    return IT2; break;
                case 'Cv':
                    return CV2;break;
                case 'Aeie':
                    return AEIE2;break;
                case 'Mech':
                    return MECH2; break;
                case 'Bt':
                    return BT2; break;
                default:
                    return CSE2;break;
            }
        }
        else if (this.user.year == 'fourth') {
            switch(this.user.dept) {
                case 'Cse':
                    return CSE4;break;
                case 'Ece':
                    return ECE4; break;
                case 'It':
                    return IT4; break;
                case 'Cv':
                    return CV4;break;
                case 'Aeie':
                    return AEIE4;break;
                case 'Mech':
                    return MECH4; break;
                case 'Bt':
                    return BT4; break;
                default:
                    return CSE4;break;
            }
        }
        else if (this.user.year == 'third') {
            switch(this.user.dept) {
                case 'Cse':
                    return CSE3;break;
                case 'Ece':
                    return ECE3; break;
                case 'It':
                    return IT3; break;
                case 'Cv':
                    return CV3;break;
                case 'Aeie':
                    return AEIE3;break;
                case 'Mech':
                    return MECH3; break;
                case 'Bt':
                    return BT3; break;
                default:
                return CSE3;break;
            }
        }    
        else {
            return null;
        }
    }

}