import { useEffect, useState } from 'react';

import css from'./App.module.css';

import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';

const DEFAULT_FEEDBACK_DATA = {
	good: 0,
	neutral: 0,
	bad: 0,
};

const getLSFeedbackData = () => {
	return localStorage.getItem('feedback-data') !== null
		? JSON.parse(localStorage.getItem('feedback-data'))
		: DEFAULT_FEEDBACK_DATA;
};

export default function App() {
	const [feedback, setFeedback] = useState(getLSFeedbackData);

	useEffect(() => {
		localStorage.setItem('feedback-data', JSON.stringify(feedback));
	}, [feedback]);

	const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
	const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

	const updateFeedback = (feedbackType) => {
		if (feedbackType === 'reset') {
			setFeedback(DEFAULT_FEEDBACK_DATA);
		} else {
			setFeedback({
				...feedback,
				[feedbackType]: feedback[feedbackType] + 1,
			});
		}
	};

	return (
		<div className={css.container}>
			<Description />
			<Options updateFeedback={updateFeedback} isVisible={!!totalFeedback} />
			{totalFeedback ? (
				<Feedback
					feedback={feedback}
					totalFeedback={totalFeedback}
					positiveFeedback={positiveFeedback}
				/>
			) : (
				<Notification />
			)}
		</div>
	);
}
