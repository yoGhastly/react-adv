import {
	BrowserRouter,
	Routes,
	Route,
	NavLink,
	Navigate,
} from 'react-router-dom';
import logo from '../logo.svg';
import { LazyPage, LazyPage2, LazyPage3 } from '../01-lazyload/pages';

export const Navigations = () => {
	return (
		<BrowserRouter>
			<div className="main-layout">
				<nav>
					<img src={logo} alt="React Logo" />
					<ul>
						<li>
							<NavLink
								to="/lazy1"
								className={({ isActive }) => (isActive ? 'nav-active' : '')}>
								Lazy1
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/lazy2"
								className={({ isActive }) => (isActive ? 'nav-active' : '')}>
								Lazy2{' '}
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/lazy3"
								className={({ isActive }) => (isActive ? 'nav-active' : '')}>
								Lazy3{' '}
							</NavLink>
						</li>
					</ul>
				</nav>
				<Routes>
					<Route path="lazy1" element={<LazyPage />} />
					<Route path="lazy2" element={<LazyPage2 />} />
					<Route path="lazy3" element={<LazyPage3 />} />
					<Route path="/*" element={<Navigate to="/lazy1" replace />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};
