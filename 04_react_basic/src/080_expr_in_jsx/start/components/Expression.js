import "./Expression.css";

const Expression = () => {
  const title = "Expression";
  const arry = ['item1', 'item2', 'item3'];

  return (
    <div className={title.toLowerCase()}>
      <h3>Hello {title}</h3>
      <h3>{arry}</h3>
    </div>
  )
};

export default Expression;
