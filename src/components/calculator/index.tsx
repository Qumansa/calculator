import './calculator.scss';

export const Calculator = () => {
	return (
		<section className="calculator">
			<span className="calculator__output">Введите данные</span>
			<input type="text" className="calculator__input-data" placeholder="0"/>
			<ul className="calculator__list">
				<li className="calculator__item calculator__item_all-clear">
					<button className="calculator__button calculator__button_all-clear">Ac</button>
				</li>
				<li className="calculator__item calculator__item_backspace">
					<button className="calculator__button calculator__button_backspace">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M6.53499 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H6.53499C6.3704 21 6.20835 20.9594 6.06321 20.8818C5.91807 20.8042 5.79434 20.6919 5.70299 20.555L0.369993 12.555C0.260354 12.3907 0.201843 12.1975 0.201843 12C0.201843 11.8025 0.260354 11.6093 0.369993 11.445L5.70299 3.445C5.79434 3.30808 5.91807 3.19583 6.06321 3.11821C6.20835 3.04058 6.3704 2.99998 6.53499 3ZM7.06999 5L2.40399 12L7.06999 19H20V5H7.06999ZM13 10.586L15.828 7.757L17.243 9.172L14.414 12L17.243 14.828L15.828 16.243L13 13.414L10.172 16.243L8.75699 14.828L11.586 12L8.75699 9.172L10.172 7.757L13 10.586Z" fill="#A5A5A5"/>
						</svg>
					</button>
				</li>
				<li className="calculator__item calculator__item_divide">
					<button className="calculator__button calculator__button_divide">
						<svg width="12" height="27" viewBox="0 0 12 27" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M12 0L3.47781 27H0L8.52219 0H12Z" fill="#339DFF"/>
						</svg>
					</button>
				</li>
				<li className="calculator__item calculator__item_multiply">
					<button className="calculator__button calculator__button_multiply">
						<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M10.5561 1.81915L12 4.37234L7.60428 6L12 7.59575L10.5241 10.2447L6.86631 7.34043L7.57219 12H4.58824L5.22995 7.34043L1.54011 10.3085L0 7.59575L4.36364 5.96809L0.0320855 4.37234L1.47594 1.78724L5.22995 4.65957L4.55615 0H7.57219L6.86631 4.65957L10.5561 1.81915Z" fill="#339DFF"/>
						</svg>
					</button>
				</li>
				<li className="calculator__item calculator__item_7">
					<button className="calculator__button calculator__button_7">7</button>
				</li>
				<li className="calculator__item calculator__item_8">
					<button className="calculator__button calculator__button_8">8</button>
				</li>
				<li className="calculator__item calculator__item_9">
					<button className="calculator__button calculator__button_9">9</button>
				</li>
				<li className="calculator__item calculator__item_minus">
					<button className="calculator__button calculator__button_minus">-</button>
				</li>
				<li className="calculator__item calculator__item_4">
					<button className="calculator__button calculator__button_4">4</button>
				</li>
				<li className="calculator__item calculator__item_5">
					<button className="calculator__button calculator__button_5">5</button>
				</li>
				<li className="calculator__item calculator__item_6">
					<button className="calculator__button calculator__button_6">6</button>
				</li>
				<li className="calculator__item calculator__item_plus">
					<button className="calculator__button calculator__button_plus">+</button>
				</li>
				<li className="calculator__item calculator__item_1">
					<button className="calculator__button calculator__button_1">1</button>
				</li>
				<li className="calculator__item calculator__item_2">
					<button className="calculator__button calculator__button_2">2</button>
				</li>
				<li className="calculator__item calculator__item_3">
					<button className="calculator__button calculator__button_3">3</button>
				</li>
				<li className="calculator__item calculator__item_equals">
					<button className="calculator__button calculator__button_equals">=</button>
				</li>
				<li className="calculator__item calculator__item_0">
					<button className="calculator__button calculator__button_0">0</button>
				</li>
				<li className="calculator__item calculator__item_point">
					<button className="calculator__button calculator__button_point">.</button>
				</li>
			</ul>
		</section>
	);
};
