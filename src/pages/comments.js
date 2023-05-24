import {Small} from "../elements/small";
import {Text} from "../elements/text";

export const Comments = (props) => {
	return (
		<div className={'container'}>
			<h1>
				Comments
				<Small theme={props.theme} />
				<Text />
			</h1>
		</div>
	)
}
