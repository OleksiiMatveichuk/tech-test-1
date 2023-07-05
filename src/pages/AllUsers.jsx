import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../service/API";
import { selectUsers } from "../redux/seletors";
import { UserCard } from "../component/UserCard/UserCard";
import css from "./pages.module.css";

const AllUsers = () => {
  const [page, setPage] = useState(1);
  const [showBtn, setShowBtn] = useState(false);

  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  console.log("users", users);
  console.log("page", page);

  useEffect(() => {
    dispatch(getUsers(page));
    setShowBtn(page < Math.ceil(16 / 3));
  }, [dispatch, page]);

  const handleClick = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <ul className={css.userList}>
        {users.length > 0 &&
          users.map((el) => (
            <li key={el.id}>
              <UserCard user={el} />
            </li>
          ))}
      </ul>
      {showBtn && (
        <button className={css.btnLoad} onClick={handleClick}>
          Load more
        </button>
      )}
    </>
  );
};

export default AllUsers;
