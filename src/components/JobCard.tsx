import { Job } from "@/lib/types";
import { Button } from "./ui/Button";
import { MapPin, Clock, ArrowRight } from "lucide-react";

interface JobCardProps {
  job: Job;
  primaryColor?: string;
  onClick?: () => void;
}

export function JobCard({ job, primaryColor = "#000", onClick }: JobCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl border bg-white p-6 shadow-sm transition-all hover:shadow-md">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors"
              style={{ '--primary': primaryColor } as React.CSSProperties} // Dynamic hover color via CSS var if needed, or just inline
          >
            {job.title}
          </h3>
          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {job.location}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {job.type}
            </div>
          </div>
        </div>
        
        {/* Salary Pill if exists */}
        {job.salaryRange && (
             <span className="inline-flex items-center rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                {job.salaryRange}
             </span>
        )}
        
      </div>
      
      <div className="mt-4 flex items-center justify-between border-t pt-4">
          <span className="text-xs text-gray-400">Posted {new Date(job.publishedAt).toLocaleDateString()}</span>
          <Button variant="outline" size="sm" onClick={onClick} className="gap-2 group-hover:bg-slate-50">
             Apply <ArrowRight className="h-4 w-4" />
          </Button>
      </div>
    </div>
  );
}
