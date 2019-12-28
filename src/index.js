import {Observable} from 'rxjs';
import ajaxSubscriber from "./operator/ajax";
import {observableSample, observableDestruction} from "./observable";
import subjectSample from './subject/subjectExample'

//Observable example
document.getElementById("observableExample").onclick = observableSample;

//=================observable destrction===============

document.getElementById("observableDestruction").onclick = observableDestruction;

//Operator
document.getElementById("ajaxOperator").onclick = ajaxSubscriber;

//Subject
document.getElementById('sujectExample').onclick = subjectSample;






