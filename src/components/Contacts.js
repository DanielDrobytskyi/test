import React from "react"


const Contacts = () => {

	return (
		<section className="section bg-dark">
			<article className="contact-form">
				<h3>Поработаем вместе?</h3>
				<h4>Расскажи нам о своей задаче и мы свяжемся
					с вами</h4>
				<form action="https://formspree.io/f/xrgroekz" method="POST">
					<div className="form-group">
						<input
							type="text"
							name="name"
							placeholder="Имя"
							className="form-control"
						/>
						<input
							type="email"
							placeholder="email"
							name="email"
							className="form-control"
						/>
						<input
							type="phone"
							placeholder="Номер телефона"
							name="phone"
							className="form-control"
						/>
						<textarea
							name="message"
							rows="5"
							placeholder="Описание"
							className="form-control"
						></textarea>
					</div>
					<button type="submit" className="submit-btn btn">
						Отправить на оценку
					</button>
				</form>
			</article>
		</section>
	)
}

export default Contacts
