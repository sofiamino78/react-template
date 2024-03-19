import { useSelector } from "react-redux";
import "./Home.scss";

const Home = () => {
  const { name } = useSelector((state) => state.data);
  return (
    <div className="home">
      <div className="container">
        <h2>Home Page</h2>
        <p>
          Welcome to the <b>Home</b> page
        </p>
        <p>
          This page has <b>Redux ToolKit</b> set up.
        </p>
        <p>
          The name: <b>{name}</b> is stored in dataSlice
        </p>
      </div>
    </div>
  );
};
export default Home;
