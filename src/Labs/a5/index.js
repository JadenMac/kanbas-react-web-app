import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithObjects from "./WorkingWithObjects"
const LAB_BASE = process.env.REACT_APP_LAB_BASE;

function Assignment5() {
    return (
      <div>
        <h1>Assignment 5</h1>

        <div className="list-group">
          <a href={`${LAB_BASE}/welcome`}
             className="list-group-item">
            Welcome
          </a>
        </div>
        {/* <SimpleAPIExamples /> */}
        <EncodingParametersInURLs />
        <WorkingWithObjects />
        <WorkingWithArrays />
      </div>
    );
  }
  export default Assignment5;