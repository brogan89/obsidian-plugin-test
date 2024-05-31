import {App, Plugin, SuggestModal} from 'obsidian';

export default class JustRunner extends Plugin {
	async onload() {
		this.addCommand({
			id: 'just-runner',
			name: 'Run just recipes',
			callback: () => this.runJust()
		});
	}

	async onunload() {
		console.log('unloading my plugin');
	}

	private runJust() {
		const options = ['Option 1', 'Option 2', 'Option 3', 'tasks'];
		new SampleModal(this.app, options).open();
	}
}

class SampleModal extends SuggestModal<string> {
	constructor(app: App, private items: string[]) {
		super(app);
	}

	getSuggestions(query: string): string[] {
		return this.items.filter(item => item.toLowerCase().includes(query.toLowerCase()));
	}

	renderSuggestion(item: string, el: HTMLElement): void {
		el.setText(item);
	}

	onChooseSuggestion(item: string, evt: MouseEvent | KeyboardEvent): void {
		console.log(`You selected: ${item}`);
	}

	onOpen() {
		const {contentEl} = this;
		contentEl.empty();
	}

	onClose() {
		const {contentEl} = this;
		contentEl.empty();
	}
}

