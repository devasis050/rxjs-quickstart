import { Subject } from 'rxjs';

export function subjectSample() {
    const subject = new Subject();
    subject.subscribe(createSubscriber('subscriber1'));
    subject.subscribe(createSubscriber('subscriber2'));
    //Multicasting message
    subject.next("Hello");
    
    //Subscribing in the middle 
    console.log('Subscribing in the middle: subscriber 3');
    subject.subscribe(createSubscriber('subscriber3'));
    subject.next("Devasis");
    subject.unsubscribe();
    //subscribing after unsubscribe is invoked
    console.log('subscribing after unsubscribe is invoked');
    subject.subscribe(createSubscriber('subscriber4'));
}

export function subjectAsObserver() {

    const subject = new Subject();
}

function createSubscriber(name) {
    return {
        next: msg => console.log(`${name} next:`, msg),
        complete: () => console.log(`${name} complete`),
        error: () => err=> console.log(`${name} error:`, err)
    }
}