
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Job } from "@/services/jobApi";
import { searchJobsFromBackend } from "@/services/backendApi";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JobCard from "@/components/JobCard";
import JobSearch from "@/components/JobSearch";
import SearchFilters from "@/components/SearchFilters";
import { Pagination } from "@/components/ui/pagination";
import { Skeleton } from "@/components/ui/skeleton";

const JobsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalJobs, setTotalJobs] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const keyword = searchParams.get("keyword") || "";
  const location = searchParams.get("location") || "";
  const page = parseInt(searchParams.get("page") || "1");
  
  const fetchJobs = async () => {
    setLoading(true);
    try {
      const results = await searchJobsFromBackend({
        keyword,
        location,
        page,
        limit: 10
      });
      setJobs(results);
      setTotalJobs(results.length * 3); // Mocked total for pagination
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
    setCurrentPage(page);
  }, [keyword, location, page]);

  const handleSearch = (query: { keyword: string; location: string }) => {
    setSearchParams({
      keyword: query.keyword,
      location: query.location,
      page: "1"
    });
  };

  const handlePageChange = (pageNumber: number) => {
    setSearchParams({
      keyword,
      location,
      page: pageNumber.toString()
    });
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white p-4 mb-6 rounded-lg shadow-sm">
          <JobSearch onSearch={handleSearch} />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <SearchFilters />
          </div>
          
          <div className="lg:col-span-3">
            <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">
                  {loading ? (
                    <Skeleton className="h-6 w-48" />
                  ) : (
                    `${totalJobs} Jobs found for "${keyword}" ${location ? `in ${location}` : ""}`
                  )}
                </h2>
                <div>
                  <select className="border rounded p-1 text-sm">
                    <option>Most Relevant</option>
                    <option>Newest</option>
                    <option>Highest Salary</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-4">
                {loading ? (
                  Array(5).fill(0).map((_, i) => (
                    <div key={i} className="border p-4 rounded-lg">
                      <Skeleton className="h-6 w-2/3 mb-2" />
                      <Skeleton className="h-4 w-1/3 mb-2" />
                      <Skeleton className="h-4 w-1/4 mb-4" />
                      <Skeleton className="h-16 w-full" />
                    </div>
                  ))
                ) : jobs.length > 0 ? (
                  jobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))
                ) : (
                  <div className="text-center py-8">
                    <h3 className="text-lg font-medium">No jobs found</h3>
                    <p className="text-gray-500 mt-2">
                      Try adjusting your search criteria or browse all jobs
                    </p>
                  </div>
                )}
              </div>
              
              {jobs.length > 0 && (
                <div className="mt-6 flex justify-center">
                  <Pagination>
                    <Pagination.PrevButton
                      onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                    />
                    <Pagination.Range>
                      {Array.from({ length: 3 }, (_, i) => i + 1).map((pageNum) => (
                        <Pagination.PageButton
                          key={pageNum}
                          active={pageNum === currentPage}
                          onClick={() => handlePageChange(pageNum)}
                        >
                          {pageNum}
                        </Pagination.PageButton>
                      ))}
                    </Pagination.Range>
                    <Pagination.NextButton
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === 3}
                    />
                  </Pagination>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JobsPage;
