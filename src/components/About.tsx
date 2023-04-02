import Image from './Image';

export default function About() {
	return (
		<section id='about' className='about spacing'>
			<div className='about-container'>
				<div className='about-text'>
					<h2 className='about-title'>
						I'm a Full Stack Engineer <br className='break' />
						from New York.
					</h2>
					<p className='about-info'>
						Hello, my name is Brian! I'm an experienced programmer motivated by
						solving complex problems. I have a proven track record of leading
						teams and delivering Full Stack web applications critical for
						clients and teams. I'm excited to join a company that encourages
						personal and professional growth. If you are hiring Engineers, I
						would love to connect with you on
						<a
							className='gradient-text gradient-link'
							href='https://twitter.com/BrianSchneeDev'
						>
							{' '}
							Twitter{' '}
						</a>
						or
						<a
							className='gradient-text gradient-link'
							href='https://www.linkedin.com/in/brian-schnee-dev/'
						>
							{' '}
							LinkedIn
						</a>
						.
					</p>
				</div>
				<div className='about-image'>
					<Image
						id='brian-image'
						src='assets/images/about-brian.png'
						alt='image of brian schnee'
					/>
					<h3 className='about-image-title'>Brian Schnee</h3>
					<div className='logos'>
						<a href='https://twitter.com/BrianSchneeDev'>
							<Image
								className='logo'
								src='assets/logos/twitter.png'
								alt='twitter logo'
							/>
						</a>
						<a href='https://www.linkedin.com/in/brian-schnee-dev/'>
							<Image
								className='logo'
								src='assets/logos/linkedin.png'
								alt='linkedIn logo'
							/>
						</a>
						<a href='https://github.com/brianschnee?tab=overview&from=2022-02-01&to=2022-02-11'>
							<Image
								className='logo'
								src='assets/logos/github.png'
								alt='github logo'
							/>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
