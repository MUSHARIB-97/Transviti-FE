export const style = {
  header: "w-full py-2",
  navDesktop: "hidden md:flex items-center justify-between h-full",
  navMobile: "flex md:hidden items-center justify-between gap-2",

  leftSection: "flex items-center gap-3 md:gap-4",
  logo: "[&>img]:w-full [&>img]:h-full",
  navLinks: "hidden xl:flex items-center gap-4",
  navLink: "font-medium flex items-center gap-2",
  navLinkActive: "text-primary text-lg font-bold",
  navLinkInactive: "text-text-secondary font-light hover:text-hover-primary",

  menuButton: "xl:hidden flex cursor-pointer",
  menuIcon: "w-10 h-10 md:w-6 md:h-6 border border-primary md:border-0 rounded-full object-contain",

  rightSection: "flex items-center gap-3 md:gap-5",
  searchWrapper: "flex items-center gap-2",
  searchContainer: "flex items-center gap-2 bg-[#F4F4F4] rounded-md px-2 h-8 w-full",
  searchInput: "w-full bg-transparent outline-none text-sm",
  resumeButton: "hidden md:flex",

  profileButton: "flex items-center justify-center",
  profileIcon: "w-8 h-8 rounded-full object-contain border border-primary",
  mobileSearch: "hidden md:flex-1 bg-[#F4F4F4] rounded-md px-2 h-8 outline-none text-sm placeholder:text-gray-500",
  mobileResumeButton: "text-sm px-3",

  backdrop: "fixed inset-0 bg-black bg-opacity-50 z-20",
  drawer: "fixed top-0 left-0 w-64 h-screen bg-white shadow-lg z-[100] flex flex-col rounded-tr-2xl overflow-y-auto",

  drawerHeader: "relative mb-4 block md:hidden",
  coverImage: "w-full h-28 [&>img]:w-full [&>img]:h-full [&>img]:object-cover rounded-tr-2xl",
  profileImage: "w-16 h-16 border-2 border-primary -mt-10 ml-4 rounded-full overflow-hidden [&>img]:w-full [&>img]:h-full [&>img]:object-contain",
  userInfo: "px-4",
  userName: "text-lg font-semibold text-hover-primary",
  userDesc: "text-sm font-light leading-tight -mt-1.5",
  userLocation: "text-sm text-text-secondary",

  statsSection: "bg-[#F4F4F4] block md:hidden p-3 mx-2 mb-3 rounded-lg text-sm text-text-secondary flex flex-col",
  statsItem: "flex justify-between w-full py-2 border-b last:border-b-0 rounded cursor-pointer transition-all hover:bg-white hover:text-primary [&>.count]:text-primary [&:hover>.count]:font-semibold",

  drawerLinks: "flex flex-col gap-4 p-2 bg-[#F4F4F4] rounded-lg mx-2 md:mx-0",
  drawerIcon: "w-5 h-5 object-contain",
} as const;
