import css from './Options.module.css';

import Button from '../Button/Button';

export default function Options ({ updateFeedback, isVisible }) {
	return (
		<div className={css.wrapper}>
			<Button handleClick={updateFeedback}>Good</Button>
			<Button handleClick={updateFeedback}>Neutral</Button>
			<Button handleClick={updateFeedback}>Bad</Button>
			{isVisible && <Button handleClick={updateFeedback}>Reset</Button>}
		</div>
	);
};
