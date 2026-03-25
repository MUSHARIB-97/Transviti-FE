import { useState } from "react";
import { Job } from "../types/dataTypes";
import { X, CheckCircle } from "lucide-react";
import CustomButton from "./CustomButton";

interface JobModalProps {
  isOpen: boolean;
  onClose: () => void;
  job: Job | null;
}

function JobModal({ isOpen, onClose, job }: JobModalProps) {
  const [applied, setApplied] = useState(false);

  if (!isOpen || !job) return null;

  const handleApply = () => {
    setApplied(true);
  };

  const handleClose = () => {
    setApplied(false);
    onClose();
  };

  const details = [
    { label: "Location", value: job.location },
    { label: "Job Type", value: job.jobType },
    { label: "Date Posted", value: job.datePosted },
    { label: "Applicants", value: job.applicants },
  ];

  if (applied) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative mx-4 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-black mb-2">Application Submitted!</h2>
          <p className="text-text-secondary mb-2">
            You have successfully applied for
          </p>
          <p className="font-semibold text-primary text-lg mb-1">{job.title}</p>
          <p className="text-text-secondary text-sm mb-6">at {job.company}</p>
          <p className="text-sm text-text-secondary mb-6">
            The recruiter will review your application and get back to you soon.
          </p>
          <CustomButton title="Done" onClick={handleClose} customStyles="w-full" />
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-[#F4F4F4] rounded-2xl shadow-2xl w-full max-w-lg p-6 relative mx-4">
        <button onClick={handleClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <X size={22} />
        </button>

        <div className="pb-2 border-b">
          <h2 className="text-2xl font-bold text-black">{job.title}</h2>
          <p className="text-text-secondary text-sm">{job.company}</p>
        </div>

        <div className="mt-4 space-y-3 text-sm text-black">
          {details.map(({ label, value }) => (
            <div key={label} className="flex justify-between">
              <span className="font-medium">{label}:</span>
              <span>{value}</span>
            </div>
          ))}
        </div>

        <div className="mt-3 pt-3 flex justify-end gap-3 border-t">
          <button onClick={handleClose} className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-black transition">
            Close
          </button>
          <CustomButton title="Apply Now" onClick={handleApply} />
        </div>
      </div>
    </div>
  );
}

export default JobModal;
