import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import IMAGES from "../../assets/images";
import { RoutesLinks } from "../../helper/Constant";
import CustomButton from "../CustomButton";
import UserProfileLogo from "../UserProfileLogo";
import { NavbarProps } from "../../types/dataTypes";
import { style } from "./navbar-style";

const USER_STATS = [
  { label: "Profile Visitors", count: 140 },
  { label: "Resume Viewers", count: 20 },
  { label: "My Jobs", count: 88 },
] as const;

function Navbar({ openMenu = false, setOpenMenu }: NavbarProps) {
  return (
    <header className={style.header}>
      <nav className={style.navDesktop}>
        <section className={style.leftSection}>
          <div className={style.logo}>
            <img src={IMAGES.logo} alt="TalentVare" />
          </div>

          <div className={style.navLinks}>
            {RoutesLinks.map(({ to, label }, index) => (
              <NavLink
                key={index}
                to={to}
                className={({ isActive }) =>
                  `${style.navLink} ${isActive ? style.navLinkActive : style.navLinkInactive}`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          <button onClick={() => setOpenMenu(true)} className={style.menuButton}>
            <img src={IMAGES.menu} alt="menu" className={style.menuIcon} />
          </button>
        </section>

        <section className={style.rightSection}>
          <div className={style.searchWrapper}>
            <div className={style.searchContainer}>
              <img src={IMAGES.search} alt="" />
              <input type="search" placeholder="Search" className={style.searchInput} />
            </div>
            <div className={style.resumeButton}>
              <CustomButton title="Resume Builder" />
            </div>
          </div>
          <UserProfileLogo />
        </section>
      </nav>

      <nav className={style.navMobile}>
        <button onClick={() => setOpenMenu(true)} className={style.profileButton}>
          <img src={IMAGES.profile} alt="profile" className={style.profileIcon} />
        </button>
        <input type="search" placeholder="Search" className={style.mobileSearch} />
        <CustomButton title="Resume Builder" customStyles={style.mobileResumeButton} />
      </nav>

      <AnimatePresence>
        {openMenu && (
          <>
            <motion.div
              className={style.backdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpenMenu(false)}
            />

            <motion.aside
              className={style.drawer}
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className={style.drawerHeader}>
                <div className={style.coverImage}>
                  <img src={IMAGES.cover} alt="" />
                </div>
                <div className={style.profileImage}>
                  <img src={IMAGES.profile} alt="Albert Flores" />
                </div>
                <header className={style.userInfo}>
                  <h2 className={style.userName}>Albert Flores</h2>
                  <p className={style.userDesc}>
                    Senior Product Designer | UI/UX Designer | Graphic Designer | Web Developer
                  </p>
                  <address className={style.userLocation}>Clinton, Maryland</address>
                </header>
              </div>

              <section className={style.statsSection}>
                {USER_STATS.map(({ label, count }, i) => (
                  <button key={i} className={style.statsItem}>
                    <span>{label}</span>
                    <span className="count">{count}</span>
                  </button>
                ))}
              </section>

              <section className={style.drawerLinks}>
                {RoutesLinks.map(({ to, label, icon }, index) => (
                  <NavLink
                    key={index}
                    to={to}
                    className={({ isActive }) =>
                      `${style.navLink} ${isActive ? style.navLinkActive : style.navLinkInactive}`
                    }
                    onClick={() => setOpenMenu(false)}
                  >
                    <img src={icon} alt="" className={style.drawerIcon} />
                    {label}
                  </NavLink>
                ))}
              </section>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
