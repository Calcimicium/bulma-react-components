import * as React from "react"
import "bulma/sass/elements/other.sass"

namespace Block {
	export type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
}

/**
 * The `block` element is a simple **spacer tool**. It allows **sibling** HTML
 * elements to have a consistent margin between them.
 *
 * @see https://bulma.io/documentation/elements/block/
 */
export default class Block extends React.Component<Block.Props> {
	render(): React.ReactNode {
		const className = `block ${this.props.className}`.trim()
		const props: Block.Props = { ...this.props, className }
		return <div {...props}>{this.props.children}</div>
	}
}
