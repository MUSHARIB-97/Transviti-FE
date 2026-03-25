import IMAGES from "../assets/images";

function UserProfileLogo() {
  return (
    <div className="w-11 h-11 border-2 border-primary rounded-full overflow-hidden">
      <img src={IMAGES.profile} alt="User profile" className="w-full h-full object-cover" />
    </div>
  );
}

export default UserProfileLogo;
