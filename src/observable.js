import {Observable} from 'rxjs';

//Observable
export function observableSample () {
    var obs = new Observable((subscriber) => {
        subscriber.next("Hello");
        subscriber.next("Devasis");
        setTimeout(()=> {
            subscriber.next("Good morning")
            subscriber.error("Break")
            // subscriber.complete("Done");// Does not take any param
        }, 1000);
    })
    
    // obs.subscribe(x=> console.log(x));
    console.log('Before subscription');
    
    const sub = {
        next: (msg) => console.log(msg),
        complete: (msg)=> console.log('complete msg', msg),
        error: (err)=> console.log("error", err),
    }
    
    obs.subscribe(sub);
    
    //Pass function in the first param to see the behavior. the secont method will be used when there is any error. 
    // obs.subscribe(sub, (msg)=> console.log('complete1111 msg', msg));
    
    console.log('After subscription');
}

//=================observable destrction===============
export function observableDestruction() {
    const observable = new Observable((sub)=> {
        let count = 0;
        setInterval(() => {
            sub.next(count ++);
        }, 1000);
    })
    
    const subscription = observable.subscribe({
        next: (msg) => console.log("Next:", msg),
        complete: () => console.log('complete'),
        error: (err) => console.log('error:', err)
    });
    
    console.log('observable', observable);
    console.log('subscription before', subscription);
    setTimeout(() => {
        subscription.unsubscribe();
        console.log('subscription after', subscription);
    }, 5000);

}