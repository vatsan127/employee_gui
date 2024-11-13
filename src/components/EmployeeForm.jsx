import FormFieldsConfig from "../config/FormFields";
import FormFields from "./FormFields";

function EmployeeForm() {
  function generateForm(data) {
    return <FormFields key={data.id} field={data.field} />;
  }

  return (
    <div className="">
      <form>
        {FormFieldsConfig.map(generateForm)}
        <div className="d-flex flex-row justify-content-center">
          <button type="submit" className="btn btn-success">
            Create
          </button>
          <button type="submit" className="mx-3 btn btn-danger">
            clear
          </button>
        </div>
      </form>
    </div>
  );
}

export default EmployeeForm;
