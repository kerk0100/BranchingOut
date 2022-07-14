import './styles.css';


const ListFrame = (props) => {
  const listElements = props.elements;
  const listName = props.listName;
  return (
    <div className="listFrame">
        <ol className={listName}>
        <header className="listHeader">
        <b>{props.header}</b>
      </header>
          {listElements.map((el, i) => (
            <li key={i}>
              {el}
            </li>
          ))}
        </ol>
    </div>
  );
}

export default ListFrame;