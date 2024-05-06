type SelectMenuProps = {
  label: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
  [key: string]: unknown;
};

export const SelectMenu = ({
  label,
  options,
  onChange,
  ...delegated
}: SelectMenuProps) => {
  const handleChange = (e: { target: { value: string } }) => {
    onChange(e.target.value);
  };
  return (
    <div>
      <label
        htmlFor={label}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <select
        id={label}
        name={label}
        className="ring-black-300 mt-2 block w-full rounded-md border-0 bg-slate-100 py-1.5 pl-3 pr-10 text-gray-900  sm:text-sm sm:leading-6"
        onChange={handleChange}
        {...delegated}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
