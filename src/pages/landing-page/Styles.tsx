export const Styles = {
  userProfileContainer: "flex h-screen pt-0 md:pt-8 gap-6",
  userProfileSUbContainer: "hidden md:flex flex-col items-center w-full md:w-1/3 xl:w-1/4 [&>div]:w-full",

  heroSection: "bg-white my-4 py-4 px-1 md:p-4 rounded-md flex flex-col lg:flex-row lg:items-center justify-between border-b border-border-primary md:border-0",
  heroFilterWrapper: "flex flex-col searchtextcustom:flex-row items-center gap-2",
  heroMenuWrapper: "w-full flex items-center gap-2 searchtextcustom:mr-10 md:mr-0 my-4 lg:my-0",
  heroButtonWrapper: "flex w-full md:w-auto justify-end",

  similarJobsContainer: "flex items-start gap-2 md:gap-4 border-b border-border-primary pb-4",
  similarJobsTitle: "text-lg md:text-xl font-light text-text-secondary",
  similarJobsTagsWrapper: "flex items-center gap-2 flex-wrap overflow-hidden",

  cardSectionContainer: "my-4 border-b pb-10 last:border-b-0",
  cardSectionHeader: "flex items-center gap-2 my-6",
  cardSectionTitle: "text-text-card sm:text-base md:text-xl whitespace-nowrap truncate overflow-hidden",
  cardSectionSeeMore: "text-primary sm:text-base border-b-2 border-primary whitespace-nowrap truncate overflow-hidden",
  cardGridWrapper: "grid grid-cols-2 smcustom:grid-cols-3 sm:grid-cols-3 mdcustom:grid-cols-4 xlcustom:grid-cols-5 gap-2",
} as const;
