import * as React from "react"
import "bulma/sass/elements/container.sass"

namespace Container {
	export type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
}
/**
 * The `container` is a simple utility element that allows you to
 * **center** content on larger viewports. It can be used in any context, but
 * mostly as a **direct child** of either:
 * * `navbar`
 * * `hero`
 * * `section`
 * * `footer`
 *
 * @see https://bulma.io/documentation/layout/container/
 */
export default class Container extends React.Component<Container.Props> {
	render(): React.ReactNode {
		const className = `container ${this.props.className}`.trim()
		const props: Container.Props = { ...this.props, className }
		return <div {...props}>{this.props.children}</div>
	}
}
