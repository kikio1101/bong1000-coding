import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h1>페이지를 찾을 수 없습니다.</h1>
      <button>
        <Link to="/">Go to Home </Link>
      </button>
    </>
  );
};

export default NotFound;
