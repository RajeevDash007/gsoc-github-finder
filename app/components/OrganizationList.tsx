"use client";
import React, { useState } from "react";
import organizationsData2016 from "../api/data/2016.json";
import organizationsData2017 from "../api/data/2017.json";
import organizationsData2018 from "../api/data/2018.json";
import organizationsData2019 from "../api/data/2019.json";
import organizationsData2020 from "../api/data/2020.json";
import organizationsData2021 from "../api/data/2021.json";
import organizationsData2022 from "../api/data/2022.json";
import organizationsData2023 from "../api/data/2023.json";
import organizationsData2024 from "../api/data/2024.json";
import ReactPaginate from "react-paginate";
import Select, { ActionMeta, MultiValue } from "react-select";
import Fuse from "fuse.js";

type OptionType = {
  value: string;
  label: string;
};

const OrganizationList = () => {
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>(
    []
  );
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const allOrganizations = [
    ...organizationsData2024.organizations,
    ...organizationsData2023.organizations,
    ...organizationsData2022.organizations,
    ...organizationsData2021.organizations,
    ...organizationsData2020.organizations,
    ...organizationsData2019.organizations,
    ...organizationsData2018.organizations,
    ...organizationsData2017.organizations,
    ...organizationsData2016.organizations,
  ];

  const uniqueOrganizationNames = new Set();
  const distinctOrganizations = allOrganizations.filter((org) => {
    if (!uniqueOrganizationNames.has(org.name)) {
      uniqueOrganizationNames.add(org.name);
      return true;
    }
    return false;
  });

  const fuse = new Fuse(distinctOrganizations, {
    keys: ["name", "category", "technologies"],
    includeMatches: true,
  });

  const handleSearch = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchQuery(e.target.value);
  };

  const handleTechnologyChange = (
    newValue: MultiValue<OptionType>,
    actionMeta: ActionMeta<OptionType>
  ) => {
    const technologies = newValue.map((option) => option.value);
    setSelectedTechnologies(technologies);
  };

  const handleCategoryChange = (
    newValue: MultiValue<OptionType>,
    actionMeta: ActionMeta<OptionType>
  ) => {
    const categories = newValue.map((option) => option.value);
    setSelectedCategories(categories);
  };

  const allTechnologies = [
    ...new Set(distinctOrganizations.flatMap((org) => org.technologies)),
  ] as string[];
  const allCategories = [
    ...new Set(distinctOrganizations.map((org) => org.category)),
  ] as string[];

  const technologyOptions: OptionType[] = allTechnologies.map((tech) => ({
    value: tech,
    label: tech,
  }));

  const categoryOptions: OptionType[] = allCategories.map((category) => ({
    value: category,
    label: category,
  }));

  const filteredOrganizations = distinctOrganizations.filter((org) => {
    const matchesSearch =
      searchQuery === "" ||
      fuse
        .search(searchQuery)
        .map((result) => result.item)
        .includes(org);

    const matchesTechnologies =
      selectedTechnologies.length === 0 ||
      selectedTechnologies.some((tech) => org.technologies.includes(tech));

    const matchesCategories =
      selectedCategories.length === 0 ||
      selectedCategories.includes(org.category);

    return matchesSearch && matchesTechnologies && matchesCategories;
  });

  const pageCount = Math.ceil(filteredOrganizations.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = (currentPage + 1) * itemsPerPage;
  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  const displayedOrganizations = filteredOrganizations.slice(
    startIndex,
    endIndex
  );

  return (
    <div
      className="antialiased text-slate-300 dark:text-slate-200 bg-slate-900 dark:bg-slate-900 pt-10"
      id="explore-projects"
    >
      <div className="flex justify-center sm:text-6xl md:text-6xl lg:text-6xl mb-10 ">
        <h1>Find Projects</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-4 mb-10 px-20">
        <input
          type="text"
          placeholder="Search Projects"
          value={searchQuery}
          onChange={handleSearch}
          className="px-6 py-2 rounded-md bg-slate-700 text-slate-300 focus:outline-none focus:ring-2 focus:ring-green-500 w-full md:w-1/3 h-10"
        />
        <div className="flex flex-col md:flex-row justify-center gap-4 w-full md:w-2/3">
          <div className="w-full">
            <Select
              isMulti
              options={technologyOptions}
              className="text-black"
              classNamePrefix="select"
              onChange={handleTechnologyChange}
              value={technologyOptions.filter((option) =>
                selectedTechnologies.includes(option.value)
              )}
              placeholder="Select Technology"
            />
          </div>
          <div className="w-full">
            <Select
              isMulti
              options={categoryOptions}
              className="text-black"
              classNamePrefix="select"
              onChange={handleCategoryChange}
              value={categoryOptions.filter((option) =>
                selectedCategories.includes(option.value)
              )}
              placeholder="Select Category"
            />
          </div>
        </div>
      </div>

      <div className="grid max-w-[26rem] sm:max-w-[52.5rem] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-10 lg:gap-y-10 xl:gap-x-8 lg:max-w-7xl px-4 sm:px-6 lg:px-8">
        {displayedOrganizations.map((org) => (
          <div
            key={org.name}
            className="group relative rounded-xl bg-slate-800/80 dark:bg-slate-700/80 p-6 hover:scale-105"
          >
            <div className="aspect-[672/494] relative rounded-md transform overflow-hidden shadow-[0_2px_8px_rgba(15,23,42,0.08)] bg-slate-700 dark:bg-slate-600">
              <img
                src={org.image_url}
                alt={org.name}
                width="672"
                height="494"
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <h2 className="text-xl font-bold mb-2 mt-2">{org.name}</h2>
            <p className="text-slate-400 mb-2">{org.description}</p>
            <div className="bg-orange-500 dark:bg-orange-500 rounded-full px-3 py-1 mb-4 text-center">
              <span className="text-sm">{org.category}</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-5 justify-center">
              {org.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-yellow-500 dark:bg-yellow-500 text-slate-800 dark:text-slate-800 rounded-full px-2 py-1 text-sm "
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-center">
              <a
                href={org.url || undefined}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Visit Github
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          pageCount={pageCount}
          onPageChange={handlePageChange}
          containerClassName={
            "flex pagination gap-2 md:gap-10 mt-5 md:mt-20 mb-5 md:mb-20"
          }
          previousLinkClassName={
            "border py-2 px-3 rounded-full mr-2 md:mr-2 hover:bg-slate-800/80 dark:hover:bg-slate-700/80"
          }
          nextLinkClassName={
            "border py-2 px-3 rounded-full ml-2 md:ml-2 hover:bg-slate-800/80 dark:hover:bg-slate-700/80"
          }
          disabledClassName={"pagination__link--disabled"}
          activeClassName={
            "pagination__link--active bg-green-600 px-3 md:px-5 rounded-full"
          }
        />
      </div>
    </div>
  );
};

export default OrganizationList;
