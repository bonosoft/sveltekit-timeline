# Timeline for SvelteKit
With this module, you are able to add timelines to you Sveltekit site. 

## Install
Use your package manager to install the module:
```shell
npm install @bonosoft/sveltekit-timeline
```

## Adding Timeline to a svelte file in SvelteKit
Now you can start adding timeline components to your pages.
```ts
<script lang="ts">
	import { Timeline, TimelineItem } from "@bonosoft/sveltekit-timeline"
</script>

<Timeline>
	<TimelineItem status="done">
		<strong>Do something</strong><br />
		Lorem ipsum dolor sit amet consectetur adipisicing elit.
	</TimelineItem>
	<TimelineItem>
		<strong>Do something</strong><br />
		Lorem ipsum dolor sit amet consectetur adipisicing elit.
	</TimelineItem>
</Timeline>

```
The standard timeline can be modefied by adding different parameters.

# Status
On a timeline item, you can set a status: Done, Ready, Wait

Items with no status will have a dotted line to the next item.

# Status colors
The standard status colors can be changed from green, cyan and grey to match your site layout

* doneColor and doneBorderColor can be used to set the done status colors
* readyColor and readyBorderColor can be used to set the ready status colors
* waitColor and waitBorderColor can be used to set the wait status colors
* color and borderColor can be used to set the status colors, when no status is set

# Size and line width
The size and linewidth attributes can be used to change the size of the dots and connecting line.


