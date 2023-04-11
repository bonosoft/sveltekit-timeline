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

![Standard Timeline](https://github.com/bonosoft/sveltekit-timeline/blob/486a325a894625211aa9a3f973f363ec225c878f/readme/sample1.png?raw=true)

The standard timeline can be modefied by adding different parameters.

# Status

On a timeline item, you can set a status: Done, Ready, Wait

```ts
  <TimelineItem status="done">
  <TimelineItem status="ready">
  <TimelineItem status="wait">
  <TimelineItem>
```

Items with no status will have a dotted line to the next item.

# Status colors

The standard status colors can be changed from green, cyan and grey to match your site layout

![Timeline Colors](https://github.com/bonosoft/sveltekit-timeline/blob/486a325a894625211aa9a3f973f363ec225c878f/readme/sample2.png?raw=true)

```ts
  <TimelineItem status="done" doneColor="#080" doneBorderColor="#070">
  <TimelineItem status="ready" readyColor="#088" readyBorderColor="#077">
  <TimelineItem status="wait" waitColor="#555" waitBorderColor="#444">
  <TimelineItem color="#333" borderColor="#222">
```

- doneColor and doneBorderColor can be used to set the done status colors
- readyColor and readyBorderColor can be used to set the ready status colors
- waitColor and waitBorderColor can be used to set the wait status colors
- color and borderColor can be used to set the status colors, when no status is set

# Size and line width

The size and linewidth attributes can be used to change the size of the dots and connecting line.

```ts
  <TimelineItem status="done" size="15" linewidth="3">

  <TimelineItem status="done" size="50" linewidth="10">
```

![Timeline Size](https://github.com/bonosoft/sveltekit-timeline/blob/486a325a894625211aa9a3f973f363ec225c878f/readme/sample3.png?raw=true)

