import { SvelteComponent } from 'svelte';

declare class TimelineItem extends SvelteComponent {
	constructor(options: any);

	$$prop_def: {
		status?: 'done' | 'ready' | 'wait';

		size?: number | string;
		lineWidth?: number | string;

		doneColor?: string;
		doneBorderColor?: string;

		readyColor?: string;
		readyBorderColor?: string;

		waitColor?: string;
		waitBorderColor?: string;

		color?: string;
		borderColor?: string;
	};
}

export default TimelineItem;
