// This is a functional component

// Functional components are stateless components. Which means they don't have
// state.

// The following code does not update the component because React renders
// 'number' only once, when the page is loaded.

function CounterOne() {
  let number = 0;

  const print = () => {
    console.clear();
    console.log(number);
  };

  const decrement = () => {
    number--;
    print();
  };

  const increment = () => {
    number++;
    print();
  };

  return (
    <section>
      <h2>Updating a variable without state (bad)</h2>
      <div className="counter">
        <input type="button" onClick={decrement} value="Minus" />
        <input type="text" value={number} readOnly />
        <input type="button" onClick={increment} value="Plus" />
      </div>
    </section>
  );
}

export default CounterOne;
