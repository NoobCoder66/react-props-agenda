type ChildProps = {
  letter: string;
  name: string;
  age: number;
  grade: number;
  isPassed: boolean;
  score: number;
}

function Child(props: ChildProps) {
  return (
    <div className="card">
      <h2>Child Component</h2>
      <p>Name (VarChar:) {props.name}</p>
      <p>Age (Integer:) {props.age}</p>
      <p>Grade (Float:) {props.grade}</p>
      <p>Letter Grade (Char:) {props.letter}</p>
      <p>Score (Extra Field): {props.score}</p>

      <p className={props.isPassed ? "passed" : "failed"}>
        {props.isPassed ? "Passed" : "Failed"}
      </p>
    </div>
  );
}

export default Child;