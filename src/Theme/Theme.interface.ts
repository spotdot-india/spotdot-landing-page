interface ThemeProps {
	children: JSX.Element;
	theme?: String;
}

export interface ColorProps {
	color: String;
	bgColor: String;
}

export interface MainThemeProps extends ColorProps {
	fontFamily: String;
}

export default ThemeProps;
