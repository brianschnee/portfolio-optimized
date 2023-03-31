import Image from './Image';

const Circles = () => {
	return (
		<>
			<Image
				id='circle-one'
				src='assets/images/circle.png'
				alt='gradient circle'
			/>
			<Image
				id='circle-two'
				src='assets/images/circle.png'
				alt='gradient circle'
			/>
			<Image
				id='circle-three'
				src='assets/images/circle.png'
				alt='gradient circle'
			/>
		</>
	);
};

export default function Main() {
	return (
		<main className='main spacing'>
			<section className='main-content'>
				<section className='main-text'>
					<h1 className='title'>
						I'm Brian Schnee,
						<br className='break' />a
						<span className='engineer gradient-text'> Full Stack Engineer</span>
						.
					</h1>
					<p className='info'>
						Transforming ideas into code, one adventure at a time. Constantly
						pushing the bounds of my capabilities and finding the best ways to
						share my insights with others. Targeting Full Stack, Frontend, or
						Backend development roles.
					</p>
					<div className='social-links'>
						<div className='social-containers'>
							<Image
								className='social-icons'
								src='./assets/logos/twitter.png'
								alt='twitter logo'
							/>
							<a href='https://twitter.com/brianschneedev' target='_blank'>
								Twitter
							</a>
						</div>
						<div className='social-containers'>
							<Image
								className='social-icons'
								src='./assets/logos/linkedin.png'
								alt='linkedin logo'
							/>
							<a
								href='https://linkedin.com/in/brian-schnee-dev'
								target='_blank'
							>
								LinkedIn
							</a>
						</div>
						<div className='social-containers'>
							<Image
								className='social-icons'
								src='./assets/logos/github.png'
								alt='github logo'
							/>
							<a href='https://github.com/brianschnee' target='_blank'>
								GitHub
							</a>
						</div>
					</div>
				</section>
				<div className='circles'>
					<Circles />
				</div>
				<div className='main-button'>
					<a id='discover' href='#work'>
						See For Yourself
					</a>
				</div>
			</section>
			<div className='main-image'>
				<Image
					className='me'
					src='assets/images/brianschnee.png'
					alt='picture of brian schnee, a software engineer'
				/>
			</div>
		</main>
	);
}
