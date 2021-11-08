import './Form.css';

export default function Form(props) {
  const {
    onSubmit: handleFormSubmit,
    onChange: handleInputChange,
    form,
  } = props;

  return (
    <form
      className="Form"
      onSubmit={(event) => {
        event.preventDefault();
        handleFormSubmit(form);
      }}
    >
      <div className="Form-control">
        <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
        <input
          className="Form-control__date"
          type="date"
          id="date"
          name="date"
          required
          value={form.date}
          onChange={handleInputChange}
        />
      </div>
      <div className="Form-control">
        <label htmlFor="distance">Пройдено (км.)</label>
        <input
          className="Form-control__distance"
          type="number"
          id="distance"
          name="distance"
          min="0"
          max="100"
          required
          value={form.distance}
          onChange={handleInputChange}
        />
      </div>
      <button
        className="Form-control__button-ok"
        type="submit"
      >
        OK
      </button>
    </form>
  );
}
