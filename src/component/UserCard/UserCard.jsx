import css from "./UserCard.module.css";
import logo from "../../images/logo.svg";
import bgImg from "../../images/pictureToUserCard2x.png";
import photoImg from "../../images/boy2x.png";
import { useState } from "react";

export const UserCard = () => {
  const [subscription, setSubscription] = useState(false);

  const handleClick = () => {
    subscription ? setSubscription(false) : setSubscription(true);
  };

  return (
    <div className={css.card}>
      <img className={css.logo} src={logo} alt="logo" />
      <img className={css.firstImg} src={bgImg} alt="background image" />
      <span className={css.line}></span>
      <img className={css.userPhoto} src={photoImg} alt="user photo" />
      <div className={css.infoBlock}>
        <p className={css.textTweet}>777 Tweets</p>
        <p className={css.textFollowers}>100500 Followers</p>
        <button
          className={!subscription ? css.btnFollow : css.btnFollowing}
          onClick={handleClick}
          type="button"
        >
          {!subscription ? "Follow" : "Following"}
        </button>
      </div>
    </div>
  );
};
