import { useDispatch, useSelector } from "react-redux";
import { selectFilterFriends } from "../redux/seletors";
import { useEffect } from "react";
import { getUsers } from "../service/API";
import { UserCard } from "../component/UserCard/UserCard";
import css from "./pages.module.css";

const Strangers = () => {
  const strangers = useSelector(selectFilterFriends);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <>
      <ul className={css.userList}>
        {strangers.length > 0 &&
          strangers.map((el) => (
            <li key={el.id}>
              <UserCard user={el} />
            </li>
          ))}
      </ul>
    </>
  );
};

export default Strangers;
