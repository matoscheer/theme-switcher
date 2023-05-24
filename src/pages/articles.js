import {Small} from "../elements/small";
import {Text} from "../elements/text";

export const Articles = (props) => {
	return (
		<div className={'container'}>
			<h1>
				Articles
				<Small theme={props.theme} />
				<Text />
			</h1>
		</div>
	)
}
