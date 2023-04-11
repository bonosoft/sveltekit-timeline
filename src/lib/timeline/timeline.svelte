<script lang="ts">
	let empty = false;
</script>

<div class="timeline">
	<ul class="timeline">
		<slot />
	</ul>
</div>

<style>
	div.timeline ul.timeline {
		list-style: none;
		padding: 0;
		margin-top: 2rem;
		position: relative;
	}
</style>
