import { FilterInput } from '../ComponentsStyled/Filter.styled';

function Filter({ filter, onChange }) {
  return (
    <FilterInput
      type="text"
      name="filter"
      placeholder="Search by name"
      value={filter}
      onChange={onChange}
    />
  );
}

export default Filter;