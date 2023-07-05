import css from "./UserCard.module.css";
import logo from "../../images/logo.svg";
import bgImg from "../../images/pictureToUserCard2x.png";
import { useDispatch, useSelector } from "react-redux";
import { selectSubscribe } from "../../redux/seletors";
import { following, unFollowing } from "../../redux/slice";
import { putUsersById } from "../../service/API";

export const UserCard = ({ user }) => {
  const subscription = useSelector(selectSubscribe);
  const dispatch = useDispatch();

  const handleClick = (el) => {
    if (subscription.includes(el.id)) {
      dispatch(unFollowing(el.id));
      dispatch(putUsersById({ ...el, followers: el.followers - 1 }));
    } else {
      dispatch(following(el.id));
      dispatch(putUsersById({ ...el, followers: el.followers + 1 }));
    }
  };

  return (
    <div className={css.card}>
      <img className={css.logo} src={logo} alt="logo" />
      <img className={css.firstImg} src={bgImg} alt="background image" />
      <span className={css.line}></span>
      <img className={css.userPhoto} src={user.avatar} alt="user photo" />
      <div className={css.infoBlock}>
        <p className={css.textTweet}>{user.tweets} Tweets</p>
        <p className={css.textFollowers}>{user.followers} Followers</p>
        <button
          className={
            !subscription.includes(user.id) ? css.btnFollow : css.btnFollowing
          }
          onClick={() => handleClick(user)}
          type="button"
        >
          {!subscription.includes(user.id) ? "Follow" : "Following"}
        </button>
      </div>
    </div>
  );
};
