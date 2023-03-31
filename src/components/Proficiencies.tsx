import Image from './Image';

export default function Proficiencies() {
	return (
		<section id='proficiencies' className='proficiencies spacing'>
			<h2 className='proficiency-heading'>Skills</h2>
			<section className='list-container'>
				<ul className='p-list'>
					<li>
						<Image
							src='https://img.shields.io/badge/typescript-f1f6ff?logo=typescript&logoColor=0374c2&style=for-the-badge'
							alt='TypeScript logo'
						/>
					</li>
					<li>
						<Image
							src='https://img.shields.io/badge/mongodb-f1f6ff?logo=mongodb&logoColor=4aae3e&style=for-the-badge'
							alt='MongoDB logo'
						/>
					</li>
					<li>
						<Image
							src='https://img.shields.io/badge/express-f1f6ff?logo=express&logoColor=black&style=for-the-badge'
							alt='Express logo'
						/>
					</li>
					<li>
						<Image
							src='https://img.shields.io/badge/react-f1f6ff?logo=react&logoColor=61dbfb&style=for-the-badge'
							alt='React logo'
						/>
					</li>
					<li>
						<Image
							src='https://img.shields.io/badge/node.js-f1f6ff?logo=node.js&logoColor=6bbf47&style=for-the-badge'
							alt='Node.js logo'
						/>
					</li>
					<li>
						<Image
							src='https://img.shields.io/badge/postgresql-f1f6ff?logo=postgresql&logoColor=35b3eb&style=for-the-badge'
							alt='PostgreSQL logo'
						/>
					</li>
					<li>
						<Image
							src='https://img.shields.io/badge/tailwind-f1f6ff?logo=tailwindcss&logoColor=35b3eb&style=for-the-badge'
							alt='TailwindCSS logo'
						/>
					</li>
				</ul>
				<ul className='p-list'>
					<li>
						<Image
							src='https://img.shields.io/badge/git-f1f6ff?logo=git&logoColor=F05032&style=for-the-badge'
							alt='Git logo'
						/>
					</li>
					<li>
						<Image
							src='https://img.shields.io/badge/pnpm-f1f6ff?logo=pnpm&logoColor=f1a800&style=for-the-badge'
							alt='PNPM logo'
						/>
					</li>
					<li>
						<Image
							src='https://img.shields.io/badge/jest-f1f6ff?logo=jest&logoColor=99425b&style=for-the-badge'
							alt='Jest logo'
						/>
					</li>
					<li>
						<Image
							src='https://img.shields.io/badge/vercel-f1f6ff?logo=vercel&logoColor=000000&style=for-the-badge'
							alt='Vercel logo'
						/>
					</li>
					<li>
						<Image
							src='https://img.shields.io/badge/aws-f1f6ff?logo=amazon&logoColor=f29100&style=for-the-badge'
							alt='AWS logo'
						/>
					</li>
					<li>
						<Image
							src='https://img.shields.io/badge/Netlify-f1f6ff?logo=netlify&logoColor=00c7b7&style=for-the-badge'
							alt='Netlify logo'
						/>
					</li>
					<li>
						<Image
							src='https://img.shields.io/badge/go-f1f6ff?logo=Go&logoColor=00aed8&style=for-the-badge'
							alt='Golang logo'
						/>
					</li>
					<li>
						<Image
							src='https://img.shields.io/badge/Rust-f1f6ff?logo=Rust&logoColor=ea4800&style=for-the-badge'
							alt='Rust logo'
						/>
					</li>
				</ul>
			</section>
		</section>
	);
}
