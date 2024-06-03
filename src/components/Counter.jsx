function CounterOne() {
  return (
    <section>
      <h2>Updating a variable without state</h2>
      <div className="counter">
        <input type="button" onClick={decrement} value="Minus" />
        <input type="text" value={number} readOnly />
        <input type="button" onClick={increment} value="Plus" />
      </div>
    </section>
  );
}

export default Counter;
