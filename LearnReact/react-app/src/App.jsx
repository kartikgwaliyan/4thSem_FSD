import StudentCard from "./studentcard";

function App() {
  return (
    <div>
      <h1>Student ID Card</h1>
      <StudentCard name="Kartik Gwaliyan" branch="CSE" year="2nd"/>
      <StudentCard name="Hemant" branch="CSE" year="3rd"/>
    </div>
  );
}

export default App;