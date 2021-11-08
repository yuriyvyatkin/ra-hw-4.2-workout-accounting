import './TableRow.css';

export default function TableRow(props) {
  const {
    id,
    date,
    distance,
    onDeleteClick: handleDeleteClick,
    onEditClick: handleEditClick,
  } = props;

  return (
    <tr className="TableRow" id={id}>
      <td>{date}</td>
      <td>{distance}</td>
      <td>
        <a
          className="TableRow-control__edit"
          href="#0"
          onClick={handleEditClick}
        >
          &#9998;
        </a>
        <a
          className="TableRow-control__delete"
          href="#0"
          onClick={handleDeleteClick}
        >
          &#10008;
        </a>
      </td>
    </tr>
  );
}
