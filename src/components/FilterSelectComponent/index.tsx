import React, { FunctionComponent, useEffect, useState } from 'react';
import Select from 'react-select';
import { NewsType, NewsTypeOption } from '@/interfaces/NewsInterfaces';
import {
  NEWS_OPTIONS,
  getFilterFromStorage,
  isOfNewsType,
  saveFilterToStorage,
} from '@/utils/news';

import './styles/FilterSelectStyle.css';

interface FilterSelectComponentProps {
  currentFilter: NewsType | undefined;
  updateCurrentFilter: React.Dispatch<
    React.SetStateAction<NewsType | undefined>
  >;
  updateCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const FilterSelectComponent: FunctionComponent<FilterSelectComponentProps> = ({
  currentFilter,
  updateCurrentFilter,
  updateCurrentPage,
}) => {
  const [currentOption, setCurrentOption] = useState<
    NewsTypeOption | undefined
  >(undefined);
  const [isLoaded, setIsLoaded] = useState(false);

  const loadStoredFilter = (): void => {
    if (isLoaded) return;

    setIsLoaded(true);
    updateCurrentFilter(getFilterFromStorage());
    updateCurrentPage(0);
  };

  const handleSelectChange = (newValue: NewsType | undefined): void => {
    if (!isOfNewsType(newValue)) return;
    if (newValue !== currentFilter) updateCurrentPage(0);

    updateCurrentFilter(newValue);
    saveFilterToStorage(newValue);
  };

  const updateCurrentOption = (): void => {
    if (currentFilter === undefined) return;

    const newOption = NEWS_OPTIONS.find(
      (option) => option.value === currentFilter,
    );

    setCurrentOption(newOption);
  };

  useEffect(loadStoredFilter, [
    isLoaded,
    currentFilter,
    updateCurrentFilter,
    updateCurrentPage,
  ]);

  useEffect(updateCurrentOption, [currentFilter]);

  if (currentFilter === undefined) return null;

  return (
    <div className="filter-select-container">
      <Select
        className="filter-select"
        placeholder="Select your news"
        onChange={(newValue) => handleSelectChange(newValue?.value)}
        value={currentOption}
        options={NEWS_OPTIONS}
        components={{
          IndicatorSeparator: () => null,
        }}
        styles={{
          option: (provided, state) => ({
            ...provided,
            color: '#000',
            backgroundColor: state.isFocused ? '#fbfbfb' : '#fff',
          }),
        }}
        formatOptionLabel={(option) => (
          <div className="filter-select-option">
            <img src={option.image} alt={option.label} />
            <span>{option.label}</span>
          </div>
        )}
      />
    </div>
  );
};

export { FilterSelectComponent };
