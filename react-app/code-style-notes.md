# React JS Code Style Notes

## Structure

- Components should be put into a `components` directory i.e. `./src/components`.
- When defining custom CSS for a component, I prefer the CSS to be in a Css module e.g. (`ComponentName.module.css`) and the styles imported into the component like `import styles from './ComponentName.module.css'`. I do not want the CSS defined inline on the actual component.
- If a Component has an associated style file e.g. `ComponentName.module.css`, then a directory should be created e.g. `ComponentName` and both files put into that directory.

## Code

- When using an 'if' check to determine if a component should be shown, I prefer the logical and (&&) method over ternary method and returning null e.g. instead of `return {someExpression ? <p>Hello World</p> : null}` use `return {someExpression && <p>Hello World</p>}`
- When a component needs to return multiple elements at the same depth, I prefer to wrap them in a Fragment using the empty bracket `<>` rather than an empty `<div>` or explicit Fragment `<Fragment>`.
- Where a Component requires some text for displaying something, I prefer to pass this into the Component using Props with the `children` element e.g. `Props: {children: string}` so that we can do `<MyCustomComponent>Hello World</MyCustomComponent>` rather than `Props: {label: string}` so that we are foced to do `<MyCustomComponent label='Hello World' />` - if that text needs to be another HTML element e.g. `<span>` then the type of children should be `ReactNode` e.g. `Props: {children: ReactNode}`.
- Do not create state variables inside a component which will not change and or can easily be computed e.g. fullName.
- If multiple state variables are related put them inside an object and have a single variable e.g. firstName, lastName => Person: {firstName, lastName}
- If creating an object state variable keep it simple and do not make it deeply nested.
- If an attribute is passed into a component and thus used to render e.g. a counter, do not modify that attribute inside the component render - the output (render) of that component should remain the same for the same input - this is an optimisation for React so that it does not have to keep rerendering the component when input has not changed. Attributes created inside the component e.g. state vars can of course be updated inside the component this is handled efficiently through React's state hooks.
- Prefer immutability - when updating an object create a new version with the updates by using the java script spread operator e.g. `newObject = {...originalObject, price: 100}`
- Prefer immutability - When updating the child object of another object, make sure to make a copy of the child object so that the new object and the old object are not referencing the same child object e.g. `newObj = {...obj, childOb: {...obj.childObj, price: 100}`
- If updating state of a component that is an array of something by adding an new element, use the spread operator to copy the existing array then add the new object - do this rather than looping through the elements of the array and adding them to the new one e.g. `setPeople([...people], 'John')`
- If updating state of a component that is an array of something by removing an element, use the filter function to create a new array from the existing one keeping all but the element you want to remove e.g. `setPeople(people.filter(person => person ==! 'John'))`
- If updating state of a component that is an array of something by editing an element, use the map function to create a new array from the existing one by checking if the element is the one you want to edit, then returning the new version of that element e.g. `setPeople(people.map(person => person === 'john' ? 'johnny' : person))`
- If you are updating a state of a componenent which is an array of objects and only updating some of the objects, you only need to make a copy of the objects that require changing the rest can be passed into the new array (since it will replace the old state anyway). Do this by using the map function on the array and checking for the object(s) that you want to change, the others can just be passed through. E.g. `setNewStateArray(stateArray.map(o => o.id===123 ? {...o, price: 999} : o ))`.
