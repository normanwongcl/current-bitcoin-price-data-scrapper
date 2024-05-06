import { useState } from 'react';

import { SelectMenu } from './SelectMenu';

export const TimeSelectionMenu = ({
  setQueryString,
}: {
  setQueryString: (value: string) => void;
}) => {
  const [currentTimeRange, setTimeRange] = useState('' as string);
  const createQueryString = (name: string, value: string) => {
    const params = new URLSearchParams();
    params.set(name, value);

    return params.toString();
  };

  return (
    <>
      <SelectMenu
        label={'Filter time range'}
        options={[
          { value: '', label: 'Select a time range' },
          { value: '10', label: '10 minutes ago' },
          { value: '60', label: '1 hour ago' },
          { value: '120', label: '2 hours ago' },
        ]}
        value={currentTimeRange}
        onChange={(value) => {
          setTimeRange(value);
          const param = createQueryString('timerange', value);
          setQueryString(param);
          window.location.search = param;
        }}
      />
    </>
  );
};
