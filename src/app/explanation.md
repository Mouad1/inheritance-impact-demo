Context :

In the above setup, AppComponent passes an object data to Component A, which then passes it down to Component B and subsequently to Component C. When Component C changes the message, it emits an event, which is listened to by Component B. Component B then updates its own data property and emits another event, which could be listened to by AppComponent

the following happens:

The child component makes a change to the object.
The child emits an event to the parent with the updated object.
The parent component receives the updated object and assigns it to its property.
Because the parent's property has changed (even if it's an internal property of the object and the reference is the same), Angular runs change detection on the parent component and its subtree, which includes the child components.
