import { useDispatch, useSelector } from "react-redux";
import { selectFilterUsers } from "../redux/seletors";
import { useEffect } from "react";
import { getUsers } from "../service/API";
import { UserCard } from "../component/UserCard/UserCard";
import css from "./pages.module.css";

const Friends = () => {
  const Friends = useSelector(selectFilterUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <>
      <ul className={css.userList}>
        {Friends.length > 0 &&
          Friends.map((el) => (
            <li key={el.id}>
              <UserCard user={el} />
            </li>
          ))}
      </ul>
    </>
  );
};

export default Friends;
