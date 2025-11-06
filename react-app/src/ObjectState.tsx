import {useState} from 'react';

function ObjectState() {
  const fruits = ['apple', 'banana', 'orange', 'grape'];
  const colors = ['red', 'blue', 'green', 'yellow'];

  const [item, setItem] = useState({itemName: 'TV', price: 50});
  const [nestedItem, setNestedItem] = useState({
    itemName: 'Car',
    price: 1500,
    details: {model: '2024', color: 'red'},
  });
  const [fruit, setFruit] = useState([...fruits]);
  const [bugs, setBugs] = useState([
    {id: 1, title: 'Bug 1', fixed: false},
    {id: 2, title: 'Bug 2', fixed: false},
  ]);

  return (
    <div>
      <div>
        <button onClick={() => setItem({...item, price: item.price + 50})}>
          Click Me
        </button>
        <span>
          Item: {item.itemName} Price: {item.price}
        </span>
      </div>
      <div>
        <button
          onClick={() =>
            setNestedItem({
              ...nestedItem,
              details: {
                ...nestedItem.details,
                color: colors[Math.floor(Math.random() * colors.length)],
              },
            })
          }
        >
          Click Me
        </button>
        <span>Item: {JSON.stringify(nestedItem)}</span>
      </div>
      <div>
        <button
          onClick={
            () =>
              setFruit([
                ...fruit,
                fruits[Math.floor(Math.random() * fruits.length)],
              ]) // Add a random fruit from the existing list (just for demo purposes)
          }
        >
          Add
        </button>
        <button
          onClick={
            () => setFruit(fruit.filter((f) => f !== 'apple')) // Removes apples}>
          }
        >
          Remove
        </button>
        <button
          onClick={
            () =>
              setFruit(
                fruit.map((f) =>
                  f.startsWith('banana')
                    ? 'banana' + Math.floor(Math.random() * 1000)
                    : f
                )
              ) // Produce a new list of fruit changing the bananas to have a random appended number
          }
        >
          Edit
        </button>
        <span>Fruit: {JSON.stringify(fruit)}</span>
      </div>
      <div>
        <button
          onClick={() =>
            setBugs(
              bugs.map((bug) =>
                bug.id === 1 ? {...bug, fixed: !bug.fixed} : bug
              )
            )
          }
        >
          Fix/Unfix bug 1
        </button>
        <span>Bugs: {JSON.stringify(bugs)}</span>
      </div>
    </div>
  );
}

export default ObjectState;
