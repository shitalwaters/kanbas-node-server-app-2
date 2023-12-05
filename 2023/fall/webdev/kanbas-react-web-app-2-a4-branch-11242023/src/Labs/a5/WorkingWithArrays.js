

function WorkingWithArrays() {
    const API = "http://localhost:4000/a5/todos";
    return (
      <div>
        <h3>Working with Arrays</h3>
        <h4>Retrieving Arrays</h4>
        <a href={API} className="btn btn-primary me-2">
          Get Todos
        </a>
      </div>
    );
  }
  export default WorkingWithArrays;