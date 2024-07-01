---
layout: page.11ty.cjs
title: <fumble-button> ⌲ Home
---

# &lt;fumble-button>

`<fumble-button>` is an awesome element. It's a great introduction to building web components with LitElement, with nice documentation site as well.

## As easy as HTML

<section class="columns">
  <div>

`<fumble-button>` is just an HTML element. You can it anywhere you can use HTML!

```html
<fumble-button></fumble-button>
```

  </div>
  <div>

<fumble-button></fumble-button>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<fumble-button>` can be configured with attributed in plain HTML.

```html
<fumble-button name="HTML"></fumble-button>
```

  </div>
  <div>

<fumble-button name="HTML"></fumble-button>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<fumble-button>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name = 'lit-html';

render(
  html`
    <h2>This is a &lt;fumble-button&gt;</h2>
    <fumble-button .name=${name}></fumble-button>
  `,
  document.body
);
```

  </div>
  <div>

<h2>This is a &lt;fumble-button&gt;</h2>
<fumble-button name="lit-html"></fumble-button>

  </div>
</section>
