import { Styles } from "./UserProfileStyle";
import IMAGES from "../../assets/images";

const USER_STATS = [
  { label: "Profile Visitors", count: 140 },
  { label: "Resume Viewers", count: 20 },
  { label: "My Jobs", count: 88 },
] as const;

function UserProfile() {
  return (
    <section className={Styles.container}>
      <article className={Styles.profileCard}>
        <figure className={Styles.coverImage}>
          <img src={IMAGES.cover} alt="" />
        </figure>
        <figure className={Styles.profileImage}>
          <img src={IMAGES.profile} alt="Albert Flores" />
        </figure>
        <header className={Styles.userInfo}>
          <h2 className={Styles.userName}>Albert Flores</h2>
          <p className={Styles.userDesc}>
            Senior Product Designer | UI/UX Designer | Graphic Designer | Web Developer
          </p>
          <p className={Styles.userLocation}>Clinton, Maryland</p>
        </header>
      </article>

      <section className={Styles.statsCard}>
        {USER_STATS.map(({ label, count }, i) => (
          <button key={i} className={Styles.statsItem}>
            <span>{label}</span>
            <span className="count">{count}</span>
          </button>
        ))}
      </section>

      <section className={Styles.calendarCard}>
        <div className={Styles.calendarHeader}>
          <h3 className={Styles.calendarTitle}>My Calendar</h3>
          <p className={Styles.calendarSubtitle}>Upcoming Interview</p>
        </div>
        <button className={Styles.calendarButton}>
          <img src={IMAGES.arrowdown} alt="" className={Styles.calendarIcon} />
        </button>
      </section>
    </section>
  );
}

export default UserProfile;
