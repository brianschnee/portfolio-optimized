const MainLinks = () => {
	return (
		<ul className='inner-list'>
			<li>
				<a href='#work'>Work</a>
			</li>
			<li>
				<a href='#about'>About</a>
			</li>
			<li>
				<a href='#proficiencies'>Skills</a>
			</li>
			<li>
				<a href='https://schnee.dev/blogs' target='_blank'>
					Blogs
				</a>
			</li>
			<li>
				<a id='contact-button' href='#contact'>
					Contact
				</a>
			</li>
		</ul>
	);
};

export default function Header() {
	return (
		<header className='primary-header'>
			<nav className='primary-nav spacing'>
				<ul className='nav-list'>
					<li className='mobile-disapear'>
						<a id='work-with-me' href='#contact'>
							<span id='with-one'>Work </span>
							<span id='with-two'>with </span>
							<span id='with-three'>me </span>
							<span id='with-four'>today!</span>
						</a>
					</li>
					<li>
						<MainLinks />
					</li>
				</ul>
			</nav>
		</header>
	);
}
