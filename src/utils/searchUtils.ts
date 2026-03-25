import { Job } from "../types/dataTypes";

export interface SearchFilters {
  keyword: string;
  location: string;
  jobType: string;
}

export function filterJobs(jobs: Job[], filters: SearchFilters): Job[] {
  return jobs.filter((job) => {
    const keywordMatch =
      !filters.keyword ||
      job.title.toLowerCase().includes(filters.keyword.toLowerCase()) ||
      job.company.toLowerCase().includes(filters.keyword.toLowerCase());

    const locationMatch =
      !filters.location ||
      filters.location === "All Locations" ||
      job.location.toLowerCase().includes(filters.location.toLowerCase());

    const jobTypeMatch =
      !filters.jobType ||
      filters.jobType === "All Types" ||
      job.jobType.toLowerCase() === filters.jobType.toLowerCase();

    return keywordMatch && locationMatch && jobTypeMatch;
  });
}

export function getUniqueJobTypes(jobs: Job[]): string[] {
  return [...new Set(jobs.map((job) => job.jobType))];
}

export function getUniqueLocations(jobs: Job[]): string[] {
  const locations = jobs.map((job) => {
    const parts = job.location.split(",");
    return parts[parts.length - 1].trim();
  });
  return [...new Set(locations)];
}

export function debounce<T extends (...args: Parameters<T>) => void>(func: T, delay: number) {
  let timeoutId: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}