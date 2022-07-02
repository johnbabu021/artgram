import "../../styles/dashboard/follow.css";

export default function Follow() {
  return (
    <div className="single__profile__view">
      <div className="follower__basic">
        <img src="logo512.png" alt="" />
        <p>John</p>
      </div>
      <div className="follow__request">
        <button>Follow</button>
      </div>
    </div>
  );
}
