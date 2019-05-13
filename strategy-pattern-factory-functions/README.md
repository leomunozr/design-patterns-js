# Strategy pattern using JS Factory functions

Same pattern as Strategy pattern, but syntax takes advantages of JS Factory functions rather than classes.

- Using composition rather than inheritance.
- Given a family of algorithms, incapusulate each one and makes it interchangable.
- Lets the algorithm vary independently of the client that uses it
- Decouple algorithm from client (client does not have to vary if the algorithm changes).
- Avoids duplicated code