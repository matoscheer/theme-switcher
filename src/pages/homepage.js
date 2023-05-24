import {Small} from "../elements/small";
import {Text} from "../elements/text";

export const Homepage = (props) => {
	return (
		<div className={'container'}>
			<h1>
				Home Page
				<Small theme={props.theme} />
				<Text />
			</h1>
		</div>
	)
}
