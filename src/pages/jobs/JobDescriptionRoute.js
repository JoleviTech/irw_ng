import { useParams } from "react-router";
import { JobDescription } from "./jobs"; 

export const JobDescriptionRoute = () => {
  const { jobId } = useParams();
  return <JobDescription jobId={jobId} />;
};