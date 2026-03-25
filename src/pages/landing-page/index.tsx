import { useState, useCallback, useMemo, ChangeEvent } from "react";
import MainLayout from "../../layout/MainLayout";
import { Styles } from "./Styles";
import MenuButton from "../../components/MenuButton";
import { cardData, InitialValues, jobTypes, locations, APP_CONFIG } from "../../helper/Constant";
import CustomButton from "../../components/CustomButton";
import { SearchProps, CardSection, Job } from "../../types/dataTypes";
import UserProfile from "../../components/user-profile-container/UserProfile";
import IMAGES from "../../assets/images";
import CustomAnchorCard from "../../components/CustomAnchorCard";
import { filterJobs, debounce } from "../../utils/searchUtils";
import JobModal from "../../components/Modal";

const SIMILAR_TAGS = ["Frontend", "Backend", "Graphic designer"] as const;

const initializeJobData = (): CardSection[] => {
  return cardData.map(section => ({
    ...section,
    data: section.data.map(job => ({ ...job }))
  }));
};

function LandingPage() {
  const [selected, setSelected] = useState<SearchProps>(InitialValues);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [jobData, setJobData] = useState<CardSection[]>(initializeJobData);
  const [filteredData, setFilteredData] = useState<CardSection[]>(initializeJobData);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const performSearch = useCallback((keyword: string, location: string, jobType: string) => {
    const isActive = Boolean(keyword || location || jobType);
    setIsSearchActive(isActive);

    if (!isActive) {
      setFilteredData([...jobData]);
      return;
    }

    const newFilteredData = jobData.map((section) => ({
      ...section,
      data: filterJobs(section.data, { keyword, location, jobType }),
    }));
    setFilteredData(newFilteredData);
  }, [jobData]);

  const toggleSaveJob = useCallback((sectionId: number, jobId: number) => {
    const updateData = (data: CardSection[]) =>
      data.map(section =>
        section.id === sectionId
          ? {
              ...section,
              data: section.data.map(job =>
                job.id === jobId ? { ...job, isSaved: !job.isSaved } : job
              ),
            }
          : section
      );

    setJobData(prev => updateData(prev));
    setFilteredData(prev => updateData(prev));
  }, []);

  const debouncedSearch = useMemo(
    () => debounce((keyword: string, location: string, jobType: string) => {
      performSearch(keyword, location, jobType);
    }, APP_CONFIG.DEBOUNCE_DELAY),
    [performSearch]
  );

  const handleSearchInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchKeyword(value);
    debouncedSearch(value, selected.locations, selected.jobTypes);
  }, [selected.locations, selected.jobTypes, debouncedSearch]);

  const handleLocationChange = useCallback((value: string) => {
    setSelected(prev => ({ ...prev, locations: value }));
    debouncedSearch(searchKeyword, value, selected.jobTypes);
  }, [searchKeyword, selected.jobTypes, debouncedSearch]);

  const handleJobTypeChange = useCallback((value: string) => {
    setSelected(prev => ({ ...prev, jobTypes: value }));
    debouncedSearch(searchKeyword, selected.locations, value);
  }, [searchKeyword, selected.locations, debouncedSearch]);

  const handleSearch = useCallback(() => {
    performSearch(searchKeyword, selected.locations, selected.jobTypes);
  }, [searchKeyword, selected.locations, selected.jobTypes, performSearch]);

  const handleReset = useCallback(() => {
    setSelected(InitialValues);
    setSearchKeyword("");
    setFilteredData([...jobData]);
    setIsSearchActive(false);
  }, [jobData]);

  const handleTagClick = useCallback((tag: string) => {
    setSearchKeyword(tag);
    performSearch(tag, selected.locations, selected.jobTypes);
  }, [selected.locations, selected.jobTypes, performSearch]);

  const totalResults = useMemo(() => {
    return filteredData.reduce((sum, section) => sum + section.data.length, 0);
  }, [filteredData]);

  const openJobModal = (job: Job) => {
    setSelectedJob(job);
    setModalOpen(true);
  };

  return (
    <MainLayout>
      <main className={Styles.userProfileContainer}>
        <section className={Styles.userProfileSUbContainer}>
          <UserProfile />
        </section>

        <section className="flex-1">
          <header>
            <h1 className="text-2xl font-bold capitalize">
              Find Your Dream Job, <span className="text-primary">Albert</span>
            </h1>
            <p className="text-text-secondary">
              Explore the latest job openings and apply for the best opportunities available today!
            </p>
          </header>

          <section className={Styles.heroSection}>
            <div className="w-full xl:w-auto flex-1">
              <input
                type="text"
                value={searchKeyword}
                onChange={handleSearchInputChange}
                placeholder="Job Title, Company, or Keywords"
                className="w-full px-3 h-full flex-1 py-2 border border-gray-300 rounded-md outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm"
                autoComplete="off"
              />
            </div>
            <div className={Styles.heroFilterWrapper}>
              <div className={Styles.heroMenuWrapper}>
                <MenuButton
                  title="Select Location"
                  list={locations}
                  selected={selected.locations}
                  setSelected={handleLocationChange}
                  style="w-full lg:w-max"
                />
                <MenuButton
                  title="Job Type"
                  list={jobTypes}
                  selected={selected.jobTypes}
                  setSelected={handleJobTypeChange}
                  style="w-full lg:w-max"
                />
              </div>
              <div className={Styles.heroButtonWrapper}>
                <CustomButton title="Search" rightIcon={IMAGES.searchIcon2} onClick={handleSearch} />
                {isSearchActive && (
                  <CustomButton title="Clear" onClick={handleReset} isOutline customStyles="ml-2" />
                )}
              </div>
            </div>
          </section>

          {isSearchActive && (
            <div className="flex items-center justify-between my-4 px-2">
              <p className="text-sm text-text-secondary">
                Found <span className="font-semibold text-primary">{totalResults}</span> job{totalResults !== 1 ? "s" : ""}
              </p>
              <button onClick={handleReset} className="text-sm text-primary hover:underline" type="button">
                Clear all filters
              </button>
            </div>
          )}

          <section className={Styles.similarJobsContainer}>
            <p className={Styles.similarJobsTitle}>Similar:</p>
            <div className={Styles.similarJobsTagsWrapper}>
              {SIMILAR_TAGS.map((tag) => (
                <CustomButton key={tag} title={tag} isOutline onClick={() => handleTagClick(tag)} />
              ))}
            </div>
          </section>

          {filteredData.map((section) => {
            if (section.data.length === 0) return null;
            return (
              <section key={section.id} className={Styles.cardSectionContainer}>
                <header className={Styles.cardSectionHeader}>
                  <h2 className={Styles.cardSectionTitle}>
                    {section.key}
                    {isSearchActive && (
                      <span className="text-sm font-normal text-text-secondary ml-2">({section.data.length})</span>
                    )}
                  </h2>
                  <a href="#" className={Styles.cardSectionSeeMore}>{section.seeMore}</a>
                </header>
                <div className={Styles.cardGridWrapper}>
                  {section.data.map((job) => (
                    <CustomAnchorCard
                      key={`${section.id}-${job.id}`}
                      title={job.title}
                      company={job.company}
                      location={job.location}
                      datePosted={job.datePosted}
                      applicants={job.applicants}
                      isSaved={job.isSaved || false}
                      isPromoted={section.key === "Featured Jobs"}
                      jobType={job.jobType}
                      onClick={() => openJobModal(job)}
                      onSaveToggle={() => toggleSaveJob(section.id, job.id)}
                    />
                  ))}
                </div>
              </section>
            );
          })}

          {isSearchActive && totalResults === 0 && (
            <div className="flex flex-col items-center justify-center py-16 px-4">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-black mb-2">No jobs found</h3>
              <p className="text-text-secondary text-center mb-4">
                We couldn't find any jobs matching your criteria.<br />
                Try adjusting your filters or search keywords.
              </p>
              <CustomButton title="Clear Filters" onClick={handleReset} />
            </div>
          )}
        </section>
      </main>
      <JobModal isOpen={modalOpen} onClose={() => setModalOpen(false)} job={selectedJob} />
    </MainLayout>
  );
}

export default LandingPage;
