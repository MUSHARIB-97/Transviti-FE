import { memo } from "react";
import { Bookmark } from "lucide-react";
import IMAGES from "../assets/images";
import CustomButton from "./CustomButton";
import { CustomAnchorCardProps } from "../types/dataTypes";

const CustomAnchorCard = memo(function CustomAnchorCard({
  title,
  company,
  location,
  jobType,
  datePosted,
  applicants,
  isSaved,
  isPromoted,
  onClick,
  onSaveToggle,
}: CustomAnchorCardProps) {
  const applicantText = `${applicants} Applicant${applicants !== 1 ? "s" : ""}`;

  return (
    <article className="w-full flex flex-col justify-between border-2 border-border-primary bg-white p-3 md:px-5 md:py-4 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <header>
        {isPromoted && (
          <p className="text-[10px] md:text-xs text-gray-500 font-medium">
            Promoted
          </p>
        )}
      </header>

      <div className="flex items-center gap-3 md:gap-4 my-2">
        <div className="w-10 h-10 md:w-11 md:h-11 rounded-md bg-background-secondary flex items-center justify-center shrink-0">
          <img
            src={IMAGES.teamsLogo}
            alt=""
            className="w-6 h-6 md:w-7 md:h-7 object-contain"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col justify-center overflow-hidden">
          <h3
            className="text-sm md:text-base font-semibold text-text-black truncate"
            title={title}
          >
            {title}
          </h3>
          <p className="text-xs md:text-sm text-text-secondary truncate">
            {company}
          </p>
        </div>
      </div>

      <div className="flex items-center mt-2">
        <div className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center shrink-0">
          <img
            src={IMAGES.location}
            alt=""
            className="w-5 h-5 object-contain"
            loading="lazy"
          />
        </div>
        <div className="flex items-center text-text-card text-sm md:text-base w-full overflow-hidden">
          <p className="truncate flex-shrink min-w-0">{location}</p>
          <p className="shrink-0 ml-1 whitespace-nowrap">({jobType})</p>
        </div>
      </div>

      <div className="flex items-center mt-2">
        <div className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center shrink-0">
          <img
            src={IMAGES.clock}
            alt=""
            className="w-5 h-5 object-contain"
            loading="lazy"
          />
        </div>
        <div className="flex items-center gap-1 text-text-card text-xs md:text-sm w-full">
          <p className="truncate min-w-0">{datePosted}</p>
          <div
            className="w-[1px] h-4 bg-text-card shrink-0"
            aria-hidden="true"
          />
          <p className="truncate text-primary font-semibold min-w-0 whitespace-nowrap">
            {applicantText}
          </p>
        </div>
      </div>

      <footer className="flex items-center justify-between mt-4 gap-2 md:gap-0">
        <CustomButton title="Apply" onClick={onClick} />
        <button
          onClick={onSaveToggle}
          className={`flex items-center justify-center`}
        >
          <Bookmark
            // size={20}
            className={` ${isSaved ? "text-primary fill-primary" : "text-gray-500"}`}
          />
        </button>
      </footer>
    </article>
  );
});

export default CustomAnchorCard;
