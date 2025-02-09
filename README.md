# multi-selector (web component)

`<multi-selector>` is a web component that lets a user select multiple options from a drop-down menu:

* Arbitrarily nested groups of options
* Searchable
* Easy to control and navigate (also with the keyboard)
* Reads options from JSON or mark up
* Supports dark mode
* Style with custom properties
* VanillaJS (no dependencies)

Check out [this page](https://lcvriend.github.io/wc-multi-selector/) for several examples.

## How to use
Load the `<multi-selector>` web component and add it to your page:

```html
<multi-selector
    src="data/countries.json"
    name="countries">
</multi-selector>
<script src="src/wc-multi-selector.js"></script>
```

### Attributes
The following attributes are available for customizing the component:

attribute     | description
--------------|-------------
`name`        | Name of the component
`placeholder` | Text when no value is set
`disabled`    | If set then component is non-interactive
`src`         | Path to data to embed

### Properties
The component also exposes the following properties:

property              | description
----------------------|-------------
`options`             | All options as array
`selectedValues`      | All selected values as array
`selectedLabels`      | All selected labels as array
`selectedLeastNested` | All selected groups and labels that are least nested

### Events
The component dispatches a `change` event whenever an option is (de)selected.

### Methods
The following methods are available:

method                          | description
--------------------------------|-----------------------------
addSelectedValues(...values)    | Add values to selection
removeSelectedValues(...values) | Remove values from selection

## Data
### Load from JSON
Supply the data as JSON using the src attribute of `<multi-selector>`.

The data should be provided in this format:

```json
{ "label": "label", "value": "value", "children": [] }
```

See [soaps.json](data/soaps.json) for an example. To preselect values add `"selected": true`. Note that only values can be selected, not categories.

It is also possible to provide the data as a nested object where the options are given as strings in an array. `<multi-selector>` will convert this to the format above.

See [countries.json](data/countries.json) for an example.

### Load from DOM
Populate `<multi-selector>` with markup by using `<option>` tags. `<multi-selector>` will assume that the value of an option is its text content unless a value attribute is supplied. Use the `selected` attribute to preselect a value.

Use `<optgroup>` tags to categorize options. Unlike the default `<optgroup>` tag, it can be nested.

Set labels and values with the label and value attributes. If not present labels and values will be set from the textContent.

## Styling with custom properties
Some simple styling is possible using custom properties. The following properties are available:

* `--ms-primary-color`
* `--ms-primary-color-disabled`
* `--ms-background:`
* `--ms-option-hover`
* `--ms-text-color`
* `--ms-text-color-disabled`
* `--ms-main-padding`
* `--ms-border-radius`
* `--ms-button-color`
* `--ms-button-hover`
* `--ms-button-active`
* `--ms-accent-color`
* `--ms-search-background`
* `--ms-search-text-color`
* `--ms-search-placeholder-color`
* `--ms-max-height`

## Translations
There are three main ways to override the default labels:

1. Per instance after creation:
```js
const selector = document.querySelector('multi-selector')
selector.settings = {
    labels: { all: "Alle items" }
}
```

2. Global defaults before any instances:
```js
MultiSelector.defaultSettings = {
    labels: { all: "Alle items" }
}
```

3. Hybrid - extend defaults and set per instance:
```js
// Extend defaults
MultiSelector.defaultSettings.labels.all = "Alle items"

// Override specific instance
selector.settings = {
    titles: { unfold_groups: "Openvouwen" }
}
```
