export default function () {
	return (
		<section id='contact' className='contact'>
			<div className='container'>
				<div className='contact-heading'>
					<h2 className='contact-title gradient-text'>Contact</h2>
					<p className='contact-p'>
						Please leave your name and email, followed by a message describing
						how I can help you! I will respond to your message as soon as
						possible. For general inquiries, you may use this form or contact me
						via
						<a href='https://twitter.com/BrianSchneeDev'>
							<span className='gradient-text gradient-link'> Twitter</span>
						</a>
						. Thank you!
					</p>
				</div>
				<form
					className='form'
					action='POST'
					netlify-honeypot='bot-field'
					data-netlify-recaptcha='true'
					data-netlify='true'
				>
					<div>
						<div className='person'>
							<section className='name'>
								<label className='label' for='name-input'>
									Name
								</label>
								<input
									id='name-input'
									type='text'
									name='name'
									placeholder='Enter your name here'
									required
								/>
							</section>
							<section className='email'>
								<label className='label' for='email-input'>
									Email
								</label>
								<input
									id='email-input'
									type='email'
									name='email'
									placeholder='Enter your email here'
									required
								/>
							</section>
						</div>
						<section className='message'>
							<label className='label' for='message-area'>
								Message
							</label>
							<textarea
								id='message-area'
								name='message'
								placeholder='Enter message here'
								required
							></textarea>
						</section>
					</div>
					<div className='captcha' data-netlify-recaptcha='true'></div>
					<button className='submit' type='submit'>
						Submit
					</button>
				</form>
				<hr className='line' />
			</div>
		</section>
	);
}
