import css from './Feedback.module.css';

export default function Feedback ({ feedback, totalFeedback, positiveFeedback }) {
	return (
		<ul className={css.wrapper}>
			{Object.entries(feedback).map((item, idx) => {
				return (
					<li className={css.text} key={idx}>
						{item[0]}: <b>{item[1]}</b>
					</li>
				);
			})}
			<li>
				Total: <b> {totalFeedback}</b>
			</li>
			<li>
				Positive: <b> {positiveFeedback}% </b>
			</li>
		</ul>
	);
};
