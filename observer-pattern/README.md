# Observer pattern

- Changes internal state
- Subscriber wants to know whenever object changes state.
- Poll vs push
- When an object changes state, it's its responsability to let the subscribers know state has changed.
- Object that can change (Observable or subject), subscribers (observers).

Definition
- The observer pattern defines a 1 to many dependency between objects so that when one object changes state all of its dependencies are notified and updateded automatically.

