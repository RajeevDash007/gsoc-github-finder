"use client";
import React, { useState } from "react";

type Organization = {
  name: string;
  url: string;
  technologies?: string[];
  category?: string;
};

type YearData = {
  year: string;
  data: {
    organizations: Organization[];
  };
};

type Props = {
  organizationData: YearData[];
};

const MostListed: React.FC<Props> = ({ organizationData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const defaultCompaniesPerPage = 10;

  const [searchTerm, setSearchTerm] = useState("");
  const companiesPerPage = searchTerm ? 50 : defaultCompaniesPerPage;

  const getMostListedCompanies = () => {
    const organizationCounts: { [key: string]: number } = {};
    const organizationYears: { [key: string]: string[] } = {};

    organizationData.forEach(({ year, data }) => {
      data.organizations.forEach((org) => {
        if (!organizationCounts[org.name]) {
          organizationCounts[org.name] = 1;
          organizationYears[org.name] = [year];
        } else {
          organizationCounts[org.name]++;
          if (!organizationYears[org.name].includes(year)) {
            organizationYears[org.name].push(year);
          }
        }
      });
    });

    return Object.entries(organizationCounts)
      .map(([name, count]) => ({
        name,
        count,
        years: organizationYears[name].join(", "),
        url:
          organizationData
            .flatMap(({ data }) => data.organizations)
            .find((org) => org.name === name)?.url || "N/A",
      }))
      .sort((a, b) => b.count - a.count);
  };

  const mostListedCompanies = getMostListedCompanies();
  const indexOfLastCompany = currentPage * companiesPerPage;
  const indexOfFirstCompany = indexOfLastCompany - companiesPerPage;
  const currentCompanies = mostListedCompanies.slice(
    indexOfFirstCompany,
    indexOfLastCompany
  );

  const filteredCompanies = mostListedCompanies.filter((company) =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="most-listed-companies-section bg-white rounded-lg overflow-hidden my-8 w-5/6 shadow-2xl shadow-blue-500/50">
      <h2 className="text-2xl font-semibold text-gray-800 py-5 px-6 flex justify-between items-center">
  Most Listed Organizations
  <input
    type="text"
    placeholder="Search by organization name"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="px-3 py-2 border border-gray-300 rounded-md text-blue-500"
    style={{ marginLeft: "10px", fontSize: "15px"}}
  />
</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Sl No.
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Organization Name
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Listed Years
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                URL
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredCompanies.slice(
              (currentPage - 1) * companiesPerPage,
              currentPage * companiesPerPage
            ).map((company, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-red-400">
                  {(currentPage - 1) * companiesPerPage + index + 1}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-black">
                  {company.name}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-green-600">
                  {company.years}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <a
                    href={company.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-900 hover:underline"
                  >
                    {company.url}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="px-5 py-3 flex justify-between items-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => paginate(currentPage + 1)}
            disabled={indexOfLastCompany >= filteredCompanies.length}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default MostListed;