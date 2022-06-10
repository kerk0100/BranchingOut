import './styles.css';


const ListFrame = (props) => {
  const listElements = props.elements;
  return (
    <div className="listFrame">
        <ol className="olFrame">
          {listElements.map((el) => (
            <li>
              {el}
            </li>
          ))}
        </ol>
    </div>
  );
}

export default ListFrame;