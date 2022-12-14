import { useState } from 'react';
import './calculator.scss';

export const Calculator = () => {
	const [inputData, setInputData] = useState('');
	const [history, setHistory] = useState('Введите данные');

	const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		let value = e.target.value;
		const valueLastElem = value[e.target.value.length - 1];
		const valueNextToLastElem = value[e.target.value.length - 2];
		const valueLastElemIsMathSymbol = /[+-/*]/g.test(valueLastElem);
		const valueNextToLastElemIsMathSymbol = /[+-/*]/g.test(valueNextToLastElem);

		value = value.replace(/^0/, '');
		value = value.replace(/[.,]/g, '');
		value = value.replace(/[^\d+-/*]/g, '');

		if (valueLastElemIsMathSymbol) {
			if (valueNextToLastElem === valueLastElem) return;

			if (valueNextToLastElemIsMathSymbol) {
				value = value.replace(valueNextToLastElem, valueLastElem).slice(0, -1);
			}
		}

		setInputData(value);
	};

	const onClickAllClear = () => {
		setHistory('Введите данные');
		setInputData('');
	};

	const onClickBackspace = () => {
		setInputData(inputData.slice(0, -1));
	};

	const onClickMathSymbol = (e: React.MouseEvent<HTMLButtonElement>) => {
		const lastInputDataElem = inputData[inputData.length - 1];
		const mathSymbol = e.currentTarget.dataset.symbol;
		const lastElemIsMathSymbol = /[+-/*.]/g.test(lastInputDataElem);

		if (inputData.length === 0 || lastInputDataElem === mathSymbol) return;

		if (lastElemIsMathSymbol) {
			setInputData(inputData.replace(lastInputDataElem, `${mathSymbol}`));
		} else {
			setInputData(`${inputData}${mathSymbol}`);
		}
	};

	const onClickNumber = (e: React.MouseEvent<HTMLButtonElement>) => {
		setInputData(`${inputData}${e.currentTarget.textContent}`);
	};

	const onSubmit = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		setHistory(inputData);
		setInputData(eval(inputData));
	};

	return (
		<section className="calculator">
			<span className="calculator__history">{history}</span>
			<form
				className="calculator__form"
				onSubmit={onSubmit}>
				<input
					type="text"
					className="calculator__input-data"
					placeholder="0"
					value={inputData}
					onChange={onChangeInput}
				/>
			</form>
			<ul className="calculator__list">
				<li className="calculator__item calculator__item_all-clear">
					<button
						className="calculator__button calculator__button_all-clear"
						onClick={onClickAllClear}>
						Ac
					</button>
				</li>
				<li className="calculator__item calculator__item_backspace">
					<button
						className="calculator__button calculator__button_backspace"
						onClick={onClickBackspace}>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M6.53499 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H6.53499C6.3704 21 6.20835 20.9594 6.06321 20.8818C5.91807 20.8042 5.79434 20.6919 5.70299 20.555L0.369993 12.555C0.260354 12.3907 0.201843 12.1975 0.201843 12C0.201843 11.8025 0.260354 11.6093 0.369993 11.445L5.70299 3.445C5.79434 3.30808 5.91807 3.19583 6.06321 3.11821C6.20835 3.04058 6.3704 2.99998 6.53499 3ZM7.06999 5L2.40399 12L7.06999 19H20V5H7.06999ZM13 10.586L15.828 7.757L17.243 9.172L14.414 12L17.243 14.828L15.828 16.243L13 13.414L10.172 16.243L8.75699 14.828L11.586 12L8.75699 9.172L10.172 7.757L13 10.586Z"
								fill="#A5A5A5"
							/>
						</svg>
					</button>
				</li>
				<li className="calculator__item calculator__item_divide">
					<button
						className="calculator__button calculator__button_divide"
						onClick={onClickMathSymbol}
						data-symbol="/">
						<svg
							width="12"
							height="27"
							viewBox="0 0 12 27"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M12 0L3.47781 27H0L8.52219 0H12Z"
								fill="#339DFF"
							/>
						</svg>
					</button>
				</li>
				<li className="calculator__item calculator__item_multiply">
					<button
						className="calculator__button calculator__button_multiply"
						onClick={onClickMathSymbol}
						data-symbol="*">
						<svg
							width="12"
							height="12"
							viewBox="0 0 12 12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M10.5561 1.81915L12 4.37234L7.60428 6L12 7.59575L10.5241 10.2447L6.86631 7.34043L7.57219 12H4.58824L5.22995 7.34043L1.54011 10.3085L0 7.59575L4.36364 5.96809L0.0320855 4.37234L1.47594 1.78724L5.22995 4.65957L4.55615 0H7.57219L6.86631 4.65957L10.5561 1.81915Z"
								fill="#339DFF"
							/>
						</svg>
					</button>
				</li>
				<li className="calculator__item calculator__item_7">
					<button
						className="calculator__button calculator__button_7"
						onClick={onClickNumber}>
						7
					</button>
				</li>
				<li className="calculator__item calculator__item_8">
					<button
						className="calculator__button calculator__button_8"
						onClick={onClickNumber}>
						8
					</button>
				</li>
				<li className="calculator__item calculator__item_9">
					<button
						className="calculator__button calculator__button_9"
						onClick={onClickNumber}>
						9
					</button>
				</li>
				<li className="calculator__item calculator__item_minus">
					<button
						className="calculator__button calculator__button_minus"
						onClick={onClickMathSymbol}
						data-symbol="-">
						-
					</button>
				</li>
				<li className="calculator__item calculator__item_4">
					<button
						className="calculator__button calculator__button_4"
						onClick={onClickNumber}>
						4
					</button>
				</li>
				<li className="calculator__item calculator__item_5">
					<button
						className="calculator__button calculator__button_5"
						onClick={onClickNumber}>
						5
					</button>
				</li>
				<li className="calculator__item calculator__item_6">
					<button
						className="calculator__button calculator__button_6"
						onClick={onClickNumber}>
						6
					</button>
				</li>
				<li className="calculator__item calculator__item_plus">
					<button
						className="calculator__button calculator__button_plus"
						onClick={onClickMathSymbol}
						data-symbol="+">
						+
					</button>
				</li>
				<li className="calculator__item calculator__item_1">
					<button
						className="calculator__button calculator__button_1"
						onClick={onClickNumber}>
						1
					</button>
				</li>
				<li className="calculator__item calculator__item_2">
					<button
						className="calculator__button calculator__button_2"
						onClick={onClickNumber}>
						2
					</button>
				</li>
				<li className="calculator__item calculator__item_3">
					<button
						className="calculator__button calculator__button_3"
						onClick={onClickNumber}>
						3
					</button>
				</li>
				<li className="calculator__item calculator__item_equals">
					<button
						className="calculator__button calculator__button_equals"
						onClick={onSubmit}>
						=
					</button>
				</li>
				<li className="calculator__item calculator__item_0">
					<button
						className="calculator__button calculator__button_0"
						onClick={onClickNumber}>
						0
					</button>
				</li>
				{/* <li className="calculator__item calculator__item_point">
					<button className="calculator__button calculator__button_point">.</button>
				</li> */}
			</ul>
		</section>
	);
};
