import { Input } from "@fluentui/react-northstar";
import { SearchIcon } from "@fluentui/react-icons-northstar";

const SearchBar: React.FC = () => (
  <Input icon={<SearchIcon />} placeholder="Search..." iconPosition="start" />
);

export default SearchBar;
