import IMAGES from "../assets/images";
import {
  CardSection,
  MenuItemProps,
  RoutesLinksType,
  SearchProps,
} from "../types/dataTypes";

const JOB_TYPE = {
  REMOTE: "Remote",
  ONSITE: "OnSite",
  HYBRID: "Hybrid",
} as const;

// type JobTypeValue = (typeof JOB_TYPE)[keyof typeof JOB_TYPE];

export const APP_CONFIG = {
  APP_NAME: "TalentVare",
  DEBOUNCE_DELAY: 300,
  DEFAULT_PAGE_SIZE: 10,
} as const;

export const RoutesLinks: RoutesLinksType[] = [
  { to: "/", label: "Find Jobs", icon: IMAGES.job },
  { to: "/top-companies", label: "Top Companies", icon: IMAGES.diversity },
  { to: "/job-tracker", label: "Job Tracker", icon: IMAGES.tracker },
  { to: "/my-calendar", label: "My Calendar", icon: IMAGES.date },
  { to: "/documents", label: "Documents", icon: IMAGES.document },
  { to: "/messages", label: "Messages", icon: IMAGES.messages },
  { to: "/notifications", label: "Notifications", icon: IMAGES.notification },
] as const;

export const locations: MenuItemProps[] = [
  { id: 1, title: "New York" },
  { id: 2, title: "London" },
  { id: 3, title: "Paris" },
  { id: 4, title: "Tokyo" },
  { id: 5, title: "Berlin" },
] as const;

export const jobTypes: MenuItemProps[] = [
  { id: 1, title: JOB_TYPE.ONSITE },
  { id: 2, title: JOB_TYPE.REMOTE },
  { id: 3, title: JOB_TYPE.HYBRID },
] as const;

export const InitialValues: SearchProps = {
  jobTypes: "",
  locations: "",
};

export const cardData: CardSection[] = [
  {
    id: 1,
    key: "Featured Jobs",
    seeMore: "See Featured Jobs",
    data: [
      {
        id: 1,
        title: "Frontend Developer",
        company: "PixelWorks",
        location: "Barcelona, Spain",
        jobType: "Remote",
        datePosted: "Today",
        applicants: 8,
        isSaved: true,
      },
      {
        id: 2,
        title: "SEO Specialist",
        company: "RankHigher",
        location: "Los Angeles, USA",
        jobType: "Hybrid",
        datePosted: "1 day ago",
        applicants: 16,
        // isSaved: true,
      },
      {
        id: 3,
        title: "HR Manager",
        company: "PeopleFirst",
        location: "Cape Town, South Africa",
        jobType: "OnSite",
        datePosted: "2 days ago",
        applicants: 20,
        isSaved: true,
      },
      {
        id: 4,
        title: "Machine Learning Engineer",
        company: "AI Labs",
        location: "Toronto, Canada",
        jobType: "Remote",
        datePosted: "3 days ago",
        applicants: 27,
        isSaved: true,
      },
      {
        id: 5,
        title: "Sales Executive",
        company: "SellWell",
        location: "Dubai, UAE",
        jobType: "OnSite",
        datePosted: "4 days ago",
        applicants: 19,
        // isSaved: true,
      },
    ],
  },
  {
    id: 2,
    key: "Recommended Jobs",
    seeMore: "See Recommended Jobs",
    data: [
      {
        id: 1,
        title: "Backend Developer",
        company: "ServerSide Inc",
        location: "Austin, USA",
        jobType: "Remote",
        datePosted: "3 days ago",
        applicants: 18,
      },
      {
        id: 2,
        title: "Content Writer",
        company: "WriteGood",
        location: "Dublin, Ireland",
        jobType: "Hybrid",
        datePosted: "5 days ago",
        applicants: 22,
      },
      {
        id: 3,
        title: "Mobile App Developer",
        company: "Appify",
        location: "Amsterdam, Netherlands",
        jobType: "OnSite",
        datePosted: "2 days ago",
        applicants: 14,
      },
      {
        id: 4,
        title: "Business Analyst",
        company: "Insight Corp",
        location: "New Delhi, India",
        jobType: "Remote",
        datePosted: "1 week ago",
        applicants: 35,
      },
      {
        id: 5,
        title: "Cybersecurity Specialist",
        company: "SecureTech",
        location: "Zurich, Switzerland",
        jobType: "OnSite",
        datePosted: "6 days ago",
        applicants: 12,
      },
    ],
  },
  {
    id: 3,
    key: "Latest Jobs",
    seeMore: "See Latest Jobs",
    data: [
      {
        id: 1,
        title: "Software Engineer",
        company: "Tech Company",
        location: "New York, USA",
        jobType: "Remote",
        datePosted: "2 days ago",
        applicants: 50,
      },
      {
        id: 2,
        title: "UI/UX Designer",
        company: "Design Studio",
        location: "London, UK",
        jobType: "Remote",
        datePosted: "1 week ago",
        applicants: 30,
      },
      {
        id: 3,
        title: "Data Scientist",
        company: "Data Corp",
        location: "San Francisco, USA",
        jobType: "OnSite",
        datePosted: "3 days ago",
        applicants: 20,
      },
      {
        id: 4,
        title: "Product Manager",
        company: "Product Co",
        location: "Berlin, Germany",
        jobType: "Hybrid",
        datePosted: "5 days ago",
        applicants: 15,
      },
      {
        id: 5,
        title: "Marketing Specialist",
        company: "Marketing Agency",
        location: "Paris, France",
        jobType: "Remote",
        datePosted: "1 day ago",
        applicants: 25,
      },
      {
        id: 6,
        title: "DevOps Engineer",
        company: "Cloud Solutions",
        location: "Tokyo, Japan",
        jobType: "Remote",
        datePosted: "2 weeks ago",
        applicants: 10,
      },
      {
        id: 7,
        title: "Graphic Designer",
        company: "Creative Agency",
        location: "Sydney, Australia",
        jobType: "OnSite",
        datePosted: "4 days ago",
        applicants: 40,
      },
      {
        id: 8,
        title: "Web Developer",
        company: "Web Solutions",
        location: "Toronto, Canada",
        jobType: "Remote",
        datePosted: "1 month ago",
        applicants: 5,
      },
    ],
  },
];
