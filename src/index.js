import {Observable} from 'rxjs';
import ajaxSubscriber from "./operator/ajax";
import {observableSample, observableDestruction} from "./observable";
import {subjectSample, subjectAsObserver, multicastExample} from './subject/subjectExample'

//Observable example
document.getElementById("observableExample").onclick = observableSample;

//=================observable destrction===============

document.getElementById("observableDestruction").onclick = observableDestruction;

//Operator
document.getElementById("ajaxOperator").onclick = ajaxSubscriber;

//Subject
document.getElementById('sujectExample').onclick = subjectSample;

//converting observable to multicast
document.getElementById('sujectAsObserver').onclick = subjectAsObserver;

//multicasted operator
document.getElementById('multicastOperator').onclick = multicastExample;






