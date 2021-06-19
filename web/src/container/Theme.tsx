import { Provider as ThemeProvider } from "@fluentui/react-northstar";
import { useAppSelector } from "core/hooks/redux";

const ThemeProviderWrapper: React.FC = ({ children }) => {
	const theme = useAppSelector((state) => state.themeReducer.theme);

	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeProviderWrapper;
