import Child from "./Student";
import "./index.css"
 
function UseProps(){

  const letter: string = "C";
  const name: string = "Adrian Tabiolo";
  const age: number = 23;
  const grade: number = 2.25;
  const isPassed: boolean = true; 
  const score: number = 67;

  return(
    <div className="wrapper">
      <div className="container">
        <Child
          letter={letter}
          name={name}
          age={age}
          grade={grade}
          isPassed={isPassed}
          score={score}
        />
      </div>
    </div>
  );
 }

export default UseProps;