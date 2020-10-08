import cl from "classnames"
import * as React from "react"
import Color from "../../helpers/color"
import Size from "../../helpers/size"
import State from "../../helpers/state"
import "bulma/bulma.sass"

namespace Button {
	export interface BaseProps {
		colorName?: Color | string
		container?: "a" | "button" | "input"
		fullwidth?: boolean
		inverted?: boolean
		light?: boolean
		loading?: boolean
		outlined?: boolean
		rounded?: boolean
		size?: Size
		state?: State
		static?: boolean
	}

	export interface ButtonProps
	extends BaseProps, React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
		container?: "button"
	}

	export interface InputButtonProps
	extends BaseProps, React.DetailedHTMLProps<React.HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
		container: "input"
		type: "reset" | "submit"
	}

	export interface LinkButtonProps
	extends BaseProps, React.DetailedHTMLProps<React.HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
		container: "a"
	}

	export type Props = ButtonProps | LinkButtonProps | InputButtonProps
}

/**
 * The `button` is an essential element of any design. It's meant to look and
 * behave as an **interactive** element of your page.
 *
 * @see https://bulma.io/documentation/elements/button/
 */
export default class Button extends React.Component<Button.Props> {
	render(): React.ReactNode {
		const className = cl("button", this.props.className, {
			"is-fullwidth": this.props.fullwidth,
			"is-inverted": this.props.inverted,
			"is-light": this.props.light,
			"is-loading": this.props.loading,
			"is-outlined": this.props.outlined,
			"is-rounded": this.props.rounded,
			"is-static": this.props.static,
			[`is-${this.props.colorName}`]: !!this.props.colorName,
			[`is-${this.props.size}`]: !!this.props.size,
			[`is-${this.props.state}`]: !!this.props.state
		})
		const props: Button.Props = { ...this.props, className }

		if (isButtonProps(props))
			return <button {...props}>{this.props.children}</button>

		if (isLinkButtonProps(props))
			return <a {...props}>{this.props.children}</a>

		if (isInputButtonProps(props))
			return <input {...props as React.DetailedHTMLProps<React.HTMLAttributes<HTMLInputElement>, HTMLInputElement>}/>
	}
}

function isButtonProps(props: Button.Props)
: props is Button.ButtonProps {
	props = props as Button.ButtonProps
	return !props.container || props.container === "button"
}

function isLinkButtonProps(props: Button.Props)
: props is Button.LinkButtonProps {
	return (props as Button.LinkButtonProps).container === "a"
}

function isInputButtonProps(props: Button.Props)
: props is Button.InputButtonProps {
	props = props as Button.InputButtonProps
	return props.container === "input" && props.type === "reset"
}
