import * as React from "react"
import "bulma/bulma.sass"

namespace Box {
	export type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
}

/**
 * The `box` element is simply a container with a shadow, a border, a radius,
 * and some padding.
 *
 * For example, you can include a media object.
 *
 * @see https://bulma.io/documentation/elements/box/
 */
export default class Box extends React.Component<Box.Props> {
	render(): React.ReactNode {
		const className = `box ${this.props.className}`.trim()
		const props: Box.Props = { ...this.props, className }
		return <div {...props}>{this.props.children}</div>
	}
}
