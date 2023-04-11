<script lang="ts">
	export let status = '';

	export let doneColor = '#36d964';
	export let doneBorderColor = '#46e974';

	export let readyColor = '#36c1d9';
	export let readyBorderColor = '#46d1e9';

	export let waitColor = '#cccccc';
	export let waitBorderColor = '#cfcfcf';

	export let color = '#eeeeee';
	export let borderColor = '#efefef';

	export let size = '25';
	export let linewidth = '5';
</script>

<li
	class={status}
	style="--size:{size + 'px'};--linewidth:{linewidth + 'px'};--dotpos:{((parseInt(size) +
		parseInt(linewidth)) /
		2 +
		1) *
		-1 +
		'px'};--linepos:{(parseInt(size) + parseInt(linewidth)) / 2 + 'px'};--lastpos:{(parseInt(size) +
		parseInt(linewidth)) /
		2 +
		parseInt(linewidth) +
		'px'};--readycolor:{readyColor};--readybordercolor:{readyBorderColor};--donecolor:{doneColor};--donebordercolor:{doneBorderColor};--waitcolor:{waitColor};--waitbordercolor:{waitBorderColor};--color:{color};--bordercolor:{borderColor}"
>
	<slot />
</li>

<style>
	li {
		list-style: none;
		padding: 0;
		padding-top: 0.1rem;
		padding-bottom: 1rem;
		border-left: var(--linewidth) dotted var(--bordercolor);
		position: relative;
		padding-left: var(--size);
		margin-left: var(--linepos);
	}

	li.ready {
		border-left: var(--linewidth) solid var(--readycolor);
	}

	li.done {
		border-left: var(--linewidth) solid var(--donecolor);
	}

	li.wait {
		border-left: var(--linewidth) solid var(--waitcolor);
	}

	li:last-child {
		margin-left: var(--lastpos);
		border: 0;
		padding-bottom: 0;
	}

	li:before {
		content: '';
		width: var(--size);
		height: var(--size);
		background: var(--color);
		border: 1px solid var(--bordercolor);
		border-radius: 50%;
		position: absolute;
		left: var(--dotpos);
		top: 0;
	}

	li.done:before {
		background: var(--donecolor);
		border: 1px solid var(--donebordercolor);
	}

	li.ready:before {
		background: var(--readycolor);
		border: 1px solid var(--readybordercolor);
	}

	li.wait:before {
		background: var(--waitcolor);
		border: 1px solid var(--waitbordercolor);
	}
</style>
