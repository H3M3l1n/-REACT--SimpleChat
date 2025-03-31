import { useContext } from "react";
import { HomeContext } from "../../pages/Home";
import "./userid.sass";

const UserId = () => {
  const { userId } = useContext(HomeContext);

  return <p className="user_id">{userId}</p>;
};

export default UserId;
