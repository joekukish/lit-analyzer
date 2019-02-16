import { customElement, property, html, LitElement, css } from "lit-element";

/**
 * This is my button
 */
@customElement("my-button")
export class MyButton extends LitElement {
	@property({ type: String }) size: "small" | "medium" | "large" = "medium";
	@property({ type: Number }) text: string = "";
	@property({ type: Boolean }) disabled: boolean = false;

	static styles = css`
		#hello.lol {
		}
		button {
			flx: hejsa;
			all: 1192;
			lkdjf: hej;
			color: ed;
		}
	`;

	render() {
		return html`
			<my-button size=""></my-button>
			<button aria-activedescendant>${this.text}</button>
		`;
	}
}

/*declare global {
    interface HTMLElementTagNameMap {
        "my-button": MyButton;
    }
}*/
