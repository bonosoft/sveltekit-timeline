<script lang="ts">
	import { Timeline, TimelineItem } from '$lib';
</script>

<div class="lightmode">
	<h1>Test of timeline</h1>

	<Timeline>
		<TimelineItem status="done">
			<strong>Do something</strong><br />
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolor vero minima ullam magni a
			reiciendis quis optio, fugiat beatae dolores recusandae itaque illo omnis nobis, perspiciatis ducimus
			voluptas fuga?
		</TimelineItem>
		<TimelineItem status="ready">
			<strong>Do something</strong><br />
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolor vero minima ullam magni a
			reiciendis quis optio, fugiat beatae dolores recusandae itaque illo omnis nobis, perspiciatis ducimus
			voluptas fuga?
		</TimelineItem>
		<TimelineItem status="wait">
			<strong>Do something</strong><br />
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolor vero minima ullam magni a
			reiciendis quis optio, fugiat beatae dolores recusandae itaque illo omnis nobis, perspiciatis ducimus
			voluptas fuga?
		</TimelineItem>
		<TimelineItem>
			<strong>Do something</strong><br />
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolor vero minima ullam magni a
			reiciendis quis optio, fugiat beatae dolores recusandae itaque illo omnis nobis, perspiciatis ducimus
			voluptas fuga? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolor vero minima
			ullam magni a reiciendis quis optio, fugiat beatae dolores recusandae itaque illo omnis nobis,
			perspiciatis ducimus voluptas fuga?
		</TimelineItem>
		<TimelineItem>
			<strong>Do something</strong><br />
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolor vero minima ullam magni a
			reiciendis quis optio, fugiat beatae dolores recusandae itaque illo omnis nobis, perspiciatis ducimus
			voluptas fuga? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolor vero minima
			ullam magni a reiciendis quis optio, fugiat beatae dolores recusandae itaque illo omnis nobis,
			perspiciatis ducimus voluptas fuga?
		</TimelineItem>
	</Timeline>
</div>

<div class="darkmode">
	<h1>Test of timeline with darkline</h1>

	<Timeline>
		<TimelineItem status="done" doneColor="#080" doneBorderColor="#070">
			<strong>Do something</strong><br />
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolor vero minima ullam magni a
			reiciendis quis optio, fugiat beatae dolores recusandae itaque illo omnis nobis, perspiciatis ducimus
			voluptas fuga?
		</TimelineItem>
		<TimelineItem status="ready" readyColor="#088" readyBorderColor="#077">
			<strong>Do something</strong><br />
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolor vero minima ullam magni a
			reiciendis quis optio, fugiat beatae dolores recusandae itaque illo omnis nobis, perspiciatis ducimus
			voluptas fuga?
		</TimelineItem>
		<TimelineItem status="wait" waitColor="#555" waitBorderColor="#444">
			<strong>Do something</strong><br />
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolor vero minima ullam magni a
			reiciendis quis optio, fugiat beatae dolores recusandae itaque illo omnis nobis, perspiciatis ducimus
			voluptas fuga?
		</TimelineItem>
		<TimelineItem color="#333" borderColor="#222">
			<strong>Do something</strong><br />
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolor vero minima ullam magni a
			reiciendis quis optio, fugiat beatae dolores recusandae itaque illo omnis nobis, perspiciatis ducimus
			voluptas fuga? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolor vero minima
			ullam magni a reiciendis quis optio, fugiat beatae dolores recusandae itaque illo omnis nobis,
			perspiciatis ducimus voluptas fuga?
		</TimelineItem>
		<TimelineItem color="#333" borderColor="#222">
			<strong>Do something</strong><br />
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolor vero minima ullam magni a
			reiciendis quis optio, fugiat beatae dolores recusandae itaque illo omnis nobis, perspiciatis ducimus
			voluptas Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolor vero minima ullam
			magni a reiciendis quis optio, fugiat beatae dolores recusandae itaque illo omnis nobis, perspiciatis
			ducimus voluptas
		</TimelineItem>
	</Timeline>
</div>

<div class="lightmode">
	<h1>Test of timeline size</h1>

	<Timeline>
		<TimelineItem status="done" size="15" linewidth="3">
			<strong>Do something</strong><br />
		</TimelineItem>
		<TimelineItem status="ready" size="15" linewidth="3">
			<strong>Do something</strong><br />
		</TimelineItem>
		<TimelineItem status="wait" size="15" linewidth="3">
			<strong>Do something</strong><br />
		</TimelineItem>
		<TimelineItem size="15" linewidth="3">
			<strong>Do something</strong><br />
		</TimelineItem>
		<TimelineItem size="15" linewidth="3">
			<strong>Do something</strong><br />
		</TimelineItem>
	</Timeline>

	<Timeline>
		<TimelineItem status="done" size="50" linewidth="20">
			<strong>Do something</strong><br />
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolor vero minima ullam magni a
			reiciendis quis optio, fugiat beatae dolores recusandae itaque illo omnis nobis, perspiciatis ducimus
			voluptas Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolor vero minima ullam
			magni a reiciendis quis optio, fugiat beatae dolores recusandae itaque illo omnis nobis, perspiciatis
			ducimus voluptas
		</TimelineItem>
		<TimelineItem status="ready" size="50" linewidth="20">
			<strong>Do something</strong><br />
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolor vero minima ullam magni a
			reiciendis quis optio, fugiat beatae dolores recusandae itaque illo omnis nobis, perspiciatis ducimus
			voluptas Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolor vero minima ullam
			magni a reiciendis quis optio, fugiat beatae dolores recusandae itaque illo omnis nobis, perspiciatis
			ducimus voluptas
		</TimelineItem>
		<TimelineItem status="wait" size="50" linewidth="20">
			<strong>Do something</strong><br />
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolor vero minima ullam magni a
			reiciendis quis optio, fugiat beatae dolores recusandae itaque illo omnis nobis, perspiciatis ducimus
			voluptas Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolor vero minima ullam
			magni a reiciendis quis optio, fugiat beatae dolores recusandae itaque illo omnis nobis, perspiciatis
			ducimus voluptas
		</TimelineItem>
		<TimelineItem size="50" linewidth="20">
			<strong>Do something</strong><br />
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolor vero minima ullam magni a
			reiciendis quis optio, fugiat beatae dolores recusandae itaque illo omnis nobis, perspiciatis ducimus
			voluptas Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolor vero minima ullam
			magni a reiciendis quis optio, fugiat beatae dolores recusandae itaque illo omnis nobis, perspiciatis
			ducimus voluptas Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolor vero minima
			ullam magni a reiciendis quis optio, fugiat beatae dolores recusandae itaque illo omnis nobis,
			perspiciatis ducimus voluptas Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolor
			vero minima ullam magni a reiciendis quis optio, fugiat beatae dolores recusandae itaque illo omnis
			nobis, perspiciatis ducimus voluptas
		</TimelineItem>
		<TimelineItem size="50" linewidth="20">
			<strong>Do something</strong><br />
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolor vero minima ullam magni a
			reiciendis quis optio, fugiat beatae dolores recusandae itaque illo omnis nobis, perspiciatis ducimus
			voluptas Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolor vero minima ullam
			magni a reiciendis quis optio, fugiat beatae dolores recusandae itaque illo omnis nobis, perspiciatis
			ducimus voluptas
		</TimelineItem>
	</Timeline>
</div>

<style>
	.lightmode {
		padding: 20px;
	}

	.darkmode {
		color: white;
		padding: 20px;
		background-color: #111;
	}
</style>
