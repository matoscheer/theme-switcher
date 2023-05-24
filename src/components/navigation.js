import {NavLink} from "react-router-dom";
import {useContext} from "react";
import {ThemeContext} from "../contexts/theme-context";
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import './navigation.scss';

export const Navigation = () => {

	const themeContext = useContext(ThemeContext);
	const theme = themeContext.theme
	const toggleTheme = themeContext.toggleTheme

	return (
		<div className={'nav-bar'}>
			<div className={'navigation'}>
				<nav className={'nav'}>
					<NavLink to={'/'} title={'Homepage'} className={'nav-item'}>Homepage</NavLink>
					<NavLink to={'/articles'} title={'Articles'} className={'nav-item'}>Articles</NavLink>
					<NavLink to={'/comments'} title={'Comments'} className={'nav-item'}>Comments</NavLink>
				</nav>
				<div className={'cta'}>
					<button className={'cta-nav-btn'} onClick={toggleTheme} >
						<label>{theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}</label>
						<span className={'icon'}>
							{theme === 'dark' ? <LightModeOutlinedIcon/> : <DarkModeOutlinedIcon/>}
						</span>
					</button>
				</div>
			</div>
		</div>
	)
}
