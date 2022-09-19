import { ThemeProvider } from 'styled-components';

import ThemeProps, { ColorProps, MainThemeProps } from './Theme.interface';

const Theme = ({ children, theme = 'LIGHT' }: ThemeProps): JSX.Element => {
	const LIGHT_COLORS: ColorProps = {
		color: '#111111',
		bgColor: '#F2F2F2',
	};

	const DARK_COLORS: ColorProps = {
		color: '#FFFFFF',
		bgColor: '#111111',
	};

	const mainThemeVars: ColorProps =
		theme === 'LIGHT' ? LIGHT_COLORS : DARK_COLORS;

	const MAIN_THEME: MainThemeProps = {
		fontFamily: 'DM Sans',
		...mainThemeVars,
	};

	return <ThemeProvider theme={MAIN_THEME}>{children}</ThemeProvider>;
};

export default Theme;
