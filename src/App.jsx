import Navbar from "./components/Navbar";
import EmployeeForm from "./components/EmployeeForm";

function App() {
  return (
    <div className="">
      <Navbar />
      <div className="container mt-5 col-5 border rounded p-3 shadow">
        <EmployeeForm />
      </div>
    </div>
  );
}

export default App;
