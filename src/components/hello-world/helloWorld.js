import { useNavigate } from "react-router";
import "./helloWorld.css"

function HelloWorld() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="backButton"
        onClick={() => {
          navigate("/");
        }}
      >
        Back
      </div>
      <div className="helloWorld-container">Hello., World!</div>
    </div>
  );
}

export default HelloWorld;
