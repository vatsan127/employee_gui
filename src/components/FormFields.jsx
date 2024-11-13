function FormFields(props) {
  return (
    <div className="row mb-3">
      <label htmlFor={props.field} className="col-sm-2 col-form-label ">
        {props.field}
      </label>
      <div className="col-sm-10">
        <input type="text" className="form-control" id={props.field} />
      </div>
    </div>
  );
}

export default FormFields;
