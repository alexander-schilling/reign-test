import React, { FunctionComponent, useState } from 'react';
import { NewsType } from '@/interfaces/NewsInterfaces';
import { FilterSelectComponent } from '@/components/FilterSelectComponent';

const NewsPage: FunctionComponent = () => {
  const [currentFilter, setCurrentFilter] = useState<NewsType | undefined>(
    undefined,
  );
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div>
      <FilterSelectComponent
        currentFilter={currentFilter}
        updateCurrentFilter={setCurrentFilter}
        updateCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export { NewsPage };
