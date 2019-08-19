# Folder Manager

### To Run:

*npm i*
*npm start*

### To Test:

*npm test*

## Summary

**WORK IN PROGRESS**

Treated this as an exercise to get used to React Testing Library - starting to get sold a little on it now but made TDD quite slow.
Wanted to use useContext and useReducer hooks but discovered early on that you can't dynamically create contexts in a map which shot down my initial approach, reverted to redux and some local state.

### Folder structure & Patterns

I try to limit the amount of connected components I have. Any components connected to global state are kept in Containers and are treated as parents or nodes at the top of the tree.
Ideally I'd like to keep everything outside of containers as a functional/dumb component. My initial idea was to use a context around `<Folder />` to hold some local state `open/closed`. Hooks don't allow contexts to be created in a loop so had to revert this and use local state.

HOC folder you will notice a Layout component. This is a convention I like to use as it helps from a styling perspective.

### React Testing Library

Treated this whole thing as a learning exericse for this library. Still a lot to learn from the much smaller API. More of an integration test way of thinking and this approach meant TDD made for slow progress. For the most part I agree with what this library is trying to achieve, interested to learn how it handles async. 