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
-
