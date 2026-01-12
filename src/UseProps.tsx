import Child from "./Student";
import "./index.css"
 
function UseProps(){

  const letter: string = "B";
  const name: string = "Adrian Tabiolo";
  const age: number = 23;
  const grade: number = 1.75;
  const isPassed: boolean = true; 
  const score: number = 95;

  return(
    <div>
      <Child
        letter={letter}
        name={name}
        age={age}
        grade={grade}
        isPassed={isPassed}
        score={score}
      />
    </div>
  );
 }

export default UseProps;