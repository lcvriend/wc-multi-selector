const componentSheet = new CSSStyleSheet()
componentSheet.replaceSync(`
/* ==========================================================================
   HOST & FOUNDATION
   ========================================================================== */

:host {
    box-sizing: border-box;
    display: grid;
    height: var(--ms-height);
    color: var(--ms-text-color);
    border-radius: var(--ms-border-radius);
}

:host *,
:host *::before,
:host *::after {
    box-sizing: border-box;
}

/* ==========================================================================
   CUSTOM PROPERTIES (LIGHT THEME)
   ========================================================================== */

:host {
    /* Layout & Spacing - these are fine */
    --ms-height: calc(2rem + var(--ms-padding-block));
    --ms-max-height: 60vh;
    --ms-padding-block: .25em;
    --ms-padding-inline: 1em;
    --ms-border-radius: 5px;

    /* Base Colors */
    --ms-text-color: inherit;
    --ms-border-color: currentColor;
    --ms-checkbox-color: currentColor;

    /* Derived Colors */
    --ms-text-color-disabled: color-mix(in srgb, currentColor 50%, transparent);
    --ms-border-color-disabled: color-mix(in srgb, currentColor 40%, transparent);

    /* Backgrounds */
    --ms-dropdown-background: hsl(0, 0%, 100%);
    --ms-filter-background: color-mix(in srgb, var(--ms-dropdown-background) 96%, currentColor 4%);
    --ms-hover: color-mix(in srgb, var(--ms-dropdown-background) 93%, currentColor 7%);

    /* Button States */
    --ms-button-background: color-mix(in srgb, currentColor 10%, transparent);
    --ms-button-background-hover: color-mix(in srgb, currentColor 15%, transparent);
    --ms-button-background-active: color-mix(in srgb, currentColor 20%, transparent);

    /* Filter */
    --ms-filter-text-color: inherit;
    --ms-filter-placeholder-text-color: color-mix(in srgb, currentColor 50%, transparent);
}

:host([mode="dark"]) {
    --ms-dropdown-background: hsl(0, 0%, 18%);
}

/* ==========================================================================
   TRIGGER
   ========================================================================== */

.trigger-bar {
    anchor-name: --ms-trigger;

    display: flex;
    align-items: center;
    padding-inline: .5rem;
    border: 1px solid color-mix(in srgb, currentColor 30%, transparent);
    border-radius: var(--ms-border-radius);
    background: transparent;
    color: inherit;
    font: inherit;
}

.trigger {
    flex: 1;
    min-width: 0;
    display: flex;
    align-items: center;
    padding: 0.25rem;
    border: none;
    background: transparent;
    color: inherit;
    font: inherit;
    text-align: start;
    cursor: pointer;
}

.trigger > .display {
    margin-right: auto;
}

:host([open]) .trigger-bar {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: none;
}

/* ==========================================================================
   DISPLAY AREA
   ========================================================================== */

.display {
    display: table;
    table-layout: fixed;
    width: 100%;
    white-space: nowrap;
    margin-right: 3ch;
}

/* https://collaboradev.com/2015/03/28/responsive-css-truncate-and-ellipsis/ */
.display > span {
    display: table-cell;
    overflow: hidden;
    text-overflow: ellipsis;
}

.display span > code {
    font-size: .65em;
}

/* ==========================================================================
   CONTROL PANEL & BUTTONS
   ========================================================================== */

.control-panel {
    display: flex;
}

[data-command] {
    display: none;
    user-select: none;
    font-family: monospace;
}

:where([data-command]) {
    background-color: var(--ms-button-background);
    border: 1px solid color-mix(in srgb, currentColor 30%, transparent);
    color: var(--ms-text-color);
}

[data-command][disabled] {
    color: hsl(0, 0%, 72%);
}

:where([data-command]:not([disabled])):hover {
    cursor: pointer;
    background-color: var(--ms-button-background-hover);
}

:where([data-command]:not([disabled])):active {
    background-color: var(--ms-button-background-active);
}

[data-command]:first-of-type {
    border-radius: var(--ms-border-radius) 0 0 var(--ms-border-radius);
}

[data-command]:last-of-type {
    border-radius: 0 var(--ms-border-radius) var(--ms-border-radius) 0;
}

:host([open]) [data-command] {
    display: grid;
    place-items: center;
}

/* ==========================================================================
   DROPDOWN CONTAINER
   ========================================================================== */

.dropdown:popover-open {
    position-anchor: --ms-trigger;
    position: fixed;
    top: anchor(bottom);
    left: anchor(left);
    width: anchor-size(width);
    margin: 0;
    padding: 0;
    color: inherit;
    border: 1px solid color-mix(in srgb, currentColor 30%, transparent);
    border-top: none;
    border-radius: 0 0 var(--ms-border-radius) var(--ms-border-radius);
    background-color: var(--ms-dropdown-background);
    display: grid;
    grid-template-rows: auto 1fr;
    gap: .5em;
    padding-inline: var(--ms-padding-inline);
    padding-bottom: 1em;
}

:host([open]) .click-me {
    display: none;
}

/* ==========================================================================
   FILTER SECTION
   ========================================================================== */

.filter {
    display: grid;
    grid-template-columns: 1fr auto;
}

.search-container {
    display: grid;
    gap: .5em;
    grid-template-columns: 1fr auto;
    padding-inline: .5em;
    padding-block: var(--ms-padding-block);
    border-radius: var(--ms-border-radius) 0 0 var(--ms-border-radius);
    border: 1px solid color-mix(in srgb, currentColor 30%, transparent);
    border-right: none;
}

.search-container > input {
    padding-block: var(--ms-padding-block);
    padding-inline: var(--ms-padding-inline);
    border: none;
    background-color: transparent;
    color: inherit;
}

.filter .search-container > [data-command] {
    border-radius: var(--ms-border-radius);
    background-color: transparent;
    border: none;
    font-size: .65em;
}

.filter .search-container > [data-command]:hover {
    background-color: var(--ms-button-background-hover);
}

.filter .search-container > [data-command].active {
    background-color: var(--ms-button-background-active);
}

:where(.filter) {
    background-color: var(--ms-filter-background);
    color: var(--ms-filter-text-color);
}

::placeholder {
    color: var(--ms-filter-placeholder-text-color);
}

/* ==========================================================================
   OPTIONS CONTAINER
   ========================================================================== */

[popover] > .options {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: .5em;
    overflow-y: auto;
    scrollbar-gutter: stable;
    padding: 3px;
    padding-right: 8px;
    max-height: var(--ms-max-height);
}

/* ==========================================================================
   GROUPS
   ========================================================================== */

[data-role="group"] > summary {
    display: grid;
    grid-template-columns: auto 1fr;
    padding: .15em;
    align-items: center;
    cursor: pointer;
}

:where([data-role="group"] > summary) {
    border-radius: var(--ms-border-radius);
}

[data-role="group"] > summary > label {
    display: inline;
}

[data-role="group"] > summary > label > span {
    font-weight: bold;
    font-variant: small-caps;
}

[data-role="group"] > summary > label > code {
    user-select: none;
    font-size: .65em;
    margin-left: .5em;
    vertical-align: middle;
}

[data-role="group"] > summary:after {
    content: "\\2B";
    color: var(--ms-text-color);
    justify-self: end;
    margin-right: .25em;
}

[data-role="group"][open] > summary:after {
    content: "\\2212";
}

[data-role="group"] > :not(summary) {
    border-left: 2px solid color-mix(in srgb, currentColor 30%, transparent);
    margin-left: .25rem;
    padding-left: .75rem;
}

/* Checkbox scaling - when hovering the wrapper */
[data-role="option"]:hover input[type="checkbox"] + label:before,
.checkbox-wrapper:hover input[type="checkbox"] + label:before {
    transform: scale(1.25);
}

/* Plus/minus scaling - when hovering summary but NOT the checkbox wrapper */
[data-role="group"] > summary:hover:not(:has(.checkbox-wrapper:hover)):after {
    transform: scale(1.25);
}

/* Smooth transitions */
input[type="checkbox"] + label:before,
[data-role="group"] > summary:after {
    transition: transform 0.1s ease;
}

/* ==========================================================================
   OPTIONS
   ========================================================================== */

[data-role="option"] {
    display: grid;
    padding: .1em;
}

/* ==========================================================================
   HOVER STATES (GROUPS & OPTIONS)
   ========================================================================== */

:where([data-role="group"] > summary):hover,
:where([data-role="option"]):hover {
    background-color: var(--ms-hover);
}

/* ==========================================================================
   CUSTOM CHECKBOXES
   ========================================================================== */

input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
}

input[type="checkbox"] + label {
    cursor: pointer;
}

input[type="checkbox"] + label:before {
    content: "";
    display: inline-block;
    border-radius: 3px;
    margin-right: .5rem;
    width: .6rem;
    height: .6rem;
    border: 1px solid var(--ms-border-color);
}

input[type="checkbox"]:checked + label:before {
    background-color: var(--ms-checkbox-color);
}

input[type="checkbox"]:indeterminate + label:before {
    background: linear-gradient(to right,
        var(--ms-checkbox-color) 0%,
        var(--ms-checkbox-color) 48%,
        var(--ms-dropdown-background) 48%,
        var(--ms-dropdown-background) 100%
    );
}

input[type="checkbox"]:focus-visible + label:before {
    outline: 2px solid var(--focus-color, Highlight);
    outline-offset: 2px;
}

/* ==========================================================================
   STATES & UTILITIES
   ========================================================================== */

[data-role].hide {
    display: none;
}

.trigger:focus-visible {
    outline: none;
}

.trigger-bar:has(.trigger:focus-visible) {
    outline: 2px solid var(--focus-color, Highlight);
}

/* ==========================================================================
   DISABLED STATE
   ========================================================================== */

:host([disabled]),
:host([data-empty]) {
    --ms-border-color: var(--ms-border-color-disabled);
    background-color: var(--ms-background-disabled);
    color: var(--ms-text-color-disabled);
    pointer-events: none;
    user-select: none;
}

/* ==========================================================================
   TYPOGRAPHY
   ========================================================================== */

code {
    font-family: Consolas, 'Courier New', Courier, monospace;
    font-size: .8em;
}

/* ==========================================================================
   SCROLLBAR (WEBKIT)
   ========================================================================== */

::-webkit-scrollbar {
    width: 6px;
}

::-webkit-scrollbar-track {
    background: transparent;
}

::-webkit-scrollbar-thumb {
    background-color: rgba(155, 155, 155, 0.5);
    border-radius: 20px;
    border: transparent;
}

/* ==========================================================================
   TOOLTIP
   ========================================================================== */

.tooltip {
    position-anchor: --ms-trigger;
    position: fixed;
    top: calc(anchor(bottom) + 0.25rem);
    left: anchor(left);
    position-try-fallbacks: flip-block, flip-inline;
    margin: 0;
    padding: 0.5rem;
    border: 1px solid color-mix(in srgb, currentColor 30%, transparent);
    border-radius: var(--ms-border-radius);
    background-color: var(--ms-dropdown-background);
    color: inherit;
    font: inherit;
    width: anchor-size(width);
}

.tooltip-title {
    font-weight: bold;
    font-size: .95em;
    margin-bottom: 0.25rem;
}

.tooltip-items {
    line-height: 1.4;
    font-size: 0.85em;
}

.tooltip-group + .tooltip-group {
    margin-top: 0.25rem;
}

.tooltip-group-header {
    font-weight: bold;
}
`)


function createTemplate(options) {
    return /*html*/`
<div part="trigger" class="trigger-bar">
    <button class="trigger" popovertarget="dropdown">
        <div part="display" class="display"><span>...</span></div>
        <div class="click-me">&#9660;</div>
    </button>
    <div part="controls" class="control-panel">
        <button 
            part="control-button"
            data-command="unfold"
            title="${options.titles.unfoldGroups}"
            popovertarget="dropdown"
            popovertargetaction="show"
        >&plus;</button>
        <button
            part="control-button"
            data-command="fold"
            title="${options.titles.foldGroups}"
            popovertarget="dropdown"
            popovertargetaction="show"
        >&minus;</button>
        <button
            part="control-button"
            data-command="show-selected"
            title="${options.titles.showSelected}"
            popovertarget="dropdown"
            popovertargetaction="show"
            disabled
        >&#9745;</button>
    </div>
</div>
<div id="dropdown" part="dropdown" popover class="dropdown">
    <div part="filter" class="filter">
        <div class="search-container">
            <input part="search" type="text" placeholder="${options.labels.filter.placeholder}" aria-label="search" role="searchbox">
            <button data-command="toggle-values-only"
            title="${options.titles.valuesOnly}">[val]</button>
        </div>
        <button part="control-button" data-command="clear-query"
            title="${options.titles.clearFilter}">&Cross;</button>
    </div>
    <div part="options" class="options"></div>
</div>
<div id="tooltip" part="tooltip" popover="manual" class="tooltip"></div>
    `
}


// region selector
class MultiSelector extends HTMLElement {
    static formAssociated = true
    static get observedAttributes() {
        return ["src", "name", "disabled", "placeholder", "mode"]
    }

    static defaultSettings = {
        labels: {
            all: "All items",
            empty: "No options loaded...",
            placeholder: "options",
            selection: "Filtered items",
            filter: {
                placeholder: "Search...",
                allSelected: "<all selected>",
            }
        },
        titles: {
            unfoldGroups: "unfold groups: ctrl-]",
            foldGroups: "fold groups: ctrl-[",
            showSelected: "show selected: ctrl-\\",
            clearFilter: "clear filter",
            valuesOnly: "search values only",
        }
    }

    constructor() {
        super()
        this._settings = { ...this.constructor.defaultSettings }
        this._pendingAttributes = new Map()
        this._isReady = false
        this.internals_ = this.attachInternals()
        this.attachShadow({ mode: "open" })
        this._data = null

        this.renderer = new Renderer(this)
        this.dataHandler = new DataHandler(this)
        this.searchHandler = new SearchHandler(this)
        this.checkboxHandler = new CheckboxHandler(this)
        this.foldingHandler = new FoldingHandler(this)
        this.navigationHandler = new NavigationHandler(this)
        this.tooltipHandler = new TooltipHandler(this)

        this.handlePopoverToggle = this.handlePopoverToggle.bind(this)
        this.handleExternalScroll = this.handleExternalScroll.bind(this)
        this.handleMediaQueryChange = this.handleMediaQueryChange.bind(this)
        this.handleWheel = this.handleWheel.bind(this)
    }

    async connectedCallback() {
        this.data = await this.dataHandler.getData()

        this._isReady = true
        for (const [property, value] of this._pendingAttributes) {
            this.applyAttribute(property, value)
        }
        this._pendingAttributes.clear()

        // participate in form
        this.internals_.setFormValue(this.selectedValues)

        this.getElement("dropdown").addEventListener("toggle", this.handlePopoverToggle)
        this.addEventListener("wheel", this.handleWheel, {
            passive: false,
            capture: true
        })
        this.checkboxHandler.addListener()
        this.searchHandler.addListener()
        this.foldingHandler.addListener()
        this.navigationHandler.addListener()
        this.tooltipHandler.addListener()

        if (this.hasAttribute("disabled")) {
            this.getElement("trigger").disabled = true
        }

        // observe mutations
        let observer = new MutationObserver(async () => {
            this.data = await this.dataHandler.getData()
        })
        observer.observe(this, { childList: true })

        this.mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
        this.mediaQuery.addEventListener("change", this.handleMediaQueryChange)
        this.handleMediaQueryChange()
    }

    disconnectedCallback() {
        this.getElement("dropdown")?.removeEventListener("toggle", this.handlePopoverToggle)
        document.removeEventListener("keydown", this.foldingHandler.handleKeyUp)
        document.removeEventListener("keydown", this.searchHandler.handleKeyManageFilter)
        this.removeEventListener("wheel", this.handleWheel, {
            capture: true
        })
        window.removeEventListener("scroll", this.handleExternalScroll, true)
    }

    attributeChangedCallback(property, oldValue, newValue) {
        if (oldValue === newValue) return

        if (!this._isReady) {
            this._pendingAttributes.set(property, newValue)
            return
        }

        this.applyAttribute(property, newValue)
    }

    applyAttribute(property, newValue) {
        switch (property) {
            case "name":
                this.name = newValue
                break
            case "disabled":
                const trigger = this.getElement("trigger")
                if (trigger) {
                    trigger.disabled = (newValue === "")
                }
                break
            default:
                this[property] = newValue
        }
    }

    dispatchChangeEvent() {
        this.dispatchEvent(new CustomEvent("change", {
            detail: this.selectedValues,
            bubbles: true,
            composed: true
        }))
    }

    get settings() {
        return this._settings
    }

    set settings(newSettings) {
        this._settings = { ...this.constructor.defaultSettings, ...newSettings }
        this.renderer?.render()
    }

    get options() {
        return [...this.getElements("options")].map(i => i.dataset.value)
    }

    get isActive() {
        return this.contains(document.activeElement)
    }

    // MARK: ...selection
    get selectedValues() {
        return [...this.getElements("selected-values")].map(i => i.value)
    }

    addSelectedValues(...values) {
        values.forEach(item => {
            const element = this.shadowRoot.querySelector(`input[value="${item}"]`)
            if (element) {
                element.checked = true
                this.checkboxHandler.toggleCheckboxChildren(element)
            }
        })
        this.checkboxHandler.setAllGroupStates()
        this.renderer.renderSelected()
        this.dispatchChangeEvent()
    }

    removeSelectedValues(...values) {
        values.forEach(item => {
            const element = this.shadowRoot.querySelector(`input[value="${item}"]`)
            if (element) {
                element.checked = false
                this.checkboxHandler.toggleCheckboxChildren(element)
            }
        })
        this.checkboxHandler.setAllGroupStates()
        this.renderer.renderSelected()
        this.dispatchChangeEvent()
    }

    get selectedLabels() {
        return [...this.getElements("selected-labels")].map(i => i.textContent.trim())
    }

    get selectedLeastNested() {
        const firstGroup = this.getElement("first-group")
        return firstGroup ? this.getLeastNestedCheckedLabels(firstGroup) : []
    }

    getLeastNestedCheckedLabels(el) {
        let output = []
        const checkbox = el.querySelector("input")
        if (checkbox?.checked) {
            const span = checkbox.nextElementSibling.querySelector("span")
            let label = span ? span.textContent : checkbox.nextElementSibling.textContent

            if (el.dataset.role === "group") {
                const depth = parseInt(el.dataset.depth)
                const checkedOptions = el.querySelectorAll(`[data-role="option"] input:checked`)
                const items = [...checkedOptions].map(input =>
                    input.nextElementSibling.textContent.trim()
                )
                return [{
                    type: "group",
                    label: label,
                    count: items.length,
                    depth: depth,
                    items: items,
                }]
            } else {
                return [{ type: "item", label: label }]
            }
        }

        for (const child of el.querySelectorAll(":scope > div > [data-role]")) {
            output = [...output, ...this.getLeastNestedCheckedLabels(child)]
        }
        return output
    }

    // MARK: ...elements
    getElement(name) {
        let query
        switch (name) {
            case "display":
                query = ".display"
                break
            case "trigger":
                query = ".trigger"
                break
            case "trigger-bar":
                query = ".trigger-bar"
                break
            case "dropdown":
                query = "[popover]"
                break
            case "fold":
                query = `[data-command="fold"]`
                break
            case "unfold":
                query = `[data-command="unfold"]`
                break
            case "show-selected":
                query = `[data-command="show-selected"]`
                break
            case "searchbox":
                query = ".filter input"
                break
            case "clear-query":
                query = `[data-command="clear-query"]`
                break
            case "toggle-values-only":
                query = `[data-command="toggle-values-only"]`
                break
            case "options-container":
                query = "[popover] > .options"
                break
            case "first-group":
                query = `[data-role="group"]`
                break
            case "label-all":
                query = `[data-role="group"] label`
                break
            case "tooltip":
                query = "#tooltip"
                break
            default:
                console.warn(`Unexpected value passed to getElement: ${name}`)
                return null
        }
        return this.shadowRoot.querySelector(query)
    }

    getElements(name) {
        let query
        switch (name) {
            case "options":
                query = `[data-role="option"]`
                break
            case "shown-options":
                query = `[data-role="option"]:not(.hide)`
                break
            case "selected-values":
                query = `[data-role="option"] > :checked`
                break
            case "selected-labels":
                query = `[data-role="option"] > :checked + label`
                break
            case "groups":
                query = `[data-role="group"]:not(.hide) > summary > .checkbox-wrapper > [type="checkbox"]`
                break
            case "hidden":
                query = ".hide"
                break
            default:
                console.warn(`Unexpected value passed to getElements: ${name}`)
                return null
        }
        return this.shadowRoot.querySelectorAll(query)
    }

    // MARK: ...data
    get data() {
        return this._data
    }

    set data(newValue) {
        let processedData = newValue

        if (!processedData || processedData.length === 0) {
            this.setAttribute("data-empty", "")
            this._data = []
            this.renderer.renderEmpty()
            return
        }

        this.removeAttribute("data-empty")

        if (this.dataHandler.needsConversion(newValue)) {
            processedData = this.dataHandler.convertStructure(newValue)
        }

        processedData = this.dataHandler.normalizeLabels(processedData)

        if (this.dataHandler.needsWrapping(processedData)) {
            processedData = [{
                label: this.settings.labels.all,
                value: "all",
                children: processedData ?? []
            }]
        }

        if (JSON.stringify(processedData) !== JSON.stringify(this._data)) {
            this._data = processedData
            this.renderer.render()
        }
    }

    // MARK: ...placeholder
    get placeholder() {
        if (!this._placeholder) {
            const displayName = this.getAttribute("name") ?? this.settings.labels.placeholder
            return `Select ${displayName}...`
        }
        return this._placeholder
    }

    set placeholder(text) {
        this._placeholder = text
        if (this.selectedValues.length === 0) {
            this.renderer.renderSelected()
        }
    }

    // MARK: ...mode
    handleMediaQueryChange() {
        //only update mode if it wasn't explicitly set by user
        if (!this._modeExplicitlySet) {
            this.setAttribute("mode", this.mediaQuery.matches ? "dark" : "light")
        }
    }

    get mode() {
        return this.getAttribute("mode") || "light"
    }

    set mode(newValue) {
        this._modeExplicitlySet = true
        if (newValue === "dark") {
            this.setAttribute("mode", "dark")
        } else if (newValue === "light") {
            this.setAttribute("mode", "light")
        } else if (newValue === null) {
            this._modeExplicitlySet = false
            this.removeAttribute("mode")
            this.handleMediaQueryChange()
        }
    }

    // MARK: ...focus
    onClose() {
        this.internals_.setFormValue(JSON.stringify(this.selectedValues))
    }

    handlePopoverToggle(event) {
        if (event.newState === "open") {
            this.tooltipHandler.hide()
            this.setAttribute("open", "")
            this.getElement("trigger")?.focus()
            window.addEventListener("scroll", this.handleExternalScroll, true)
        } else {
            this.removeAttribute("open")
            window.removeEventListener("scroll", this.handleExternalScroll, true)
            this.onClose()
        }
    }

    handleTriggerClick(event) {
        if (event.target.closest("[data-command]")) return
        if (!event.target.closest(".trigger")) return
        if (this._justDismissed) return
        this.getElement("dropdown").togglePopover()
    }

    // MARK: ...scroll
    handleWheel(event) {
        event.stopPropagation()

        // only handle scroll containment if dropdown is open
        const dropdown = this.getElement("dropdown")
        if (!dropdown?.matches(":popover-open")) return

        const optionsContainer = this.getElement("options-container")
        if (!optionsContainer) return

        // check if scroll is happening within options area
        const rect = optionsContainer.getBoundingClientRect()
        const isWithinOptions =
            event.clientX >= rect.left &&
            event.clientX <= rect.right &&
            event.clientY >= rect.top &&
            event.clientY <= rect.bottom

        if (!isWithinOptions) return

        const atTop = optionsContainer.scrollTop === 0
        const atBottom =
            optionsContainer.scrollTop + optionsContainer.clientHeight >=
            optionsContainer.scrollHeight - 1

        const scrollingUp = event.deltaY < 0
        const scrollingDown = event.deltaY > 0

        if ((atTop && scrollingUp) || (atBottom && scrollingDown)) {
            event.preventDefault()
        }
    }

    handleExternalScroll() {
        this.getElement("dropdown").hidePopover()
    }
}


// region render
class Renderer {
    constructor(multiselector) {
        this.ms = multiselector
        this.htmlBuilder = new HTMLBuilder()
        this.listFormat = new Intl.ListFormat()
    }

    get labelAll() {
        return this.ms.getElement("label-all")
    }

    get optionsContainer() {
        return this.ms.getElement("options-container")
    }

    get options() {
        return this.ms.getElements("options")
    }

    get shownOptions() {
        return this.ms.getElements("shown-options")
    }

    render() {
        this.ms.shadowRoot.adoptedStyleSheets = [componentSheet]
        this.ms.shadowRoot.innerHTML = createTemplate(this.ms.settings).trim()
        let html = this.htmlBuilder.buildHTML(this.ms.data)
        this.optionsContainer.innerHTML += html
        this.ms.checkboxHandler.setAllGroupStates()
        this.renderSelected()
        this.ms.getElement("dropdown").addEventListener("toggle", this.ms.handlePopoverToggle)
    }

    renderEmpty() {
        this.ms.shadowRoot.adoptedStyleSheets = [componentSheet]
        this.ms.shadowRoot.innerHTML = createTemplate(this.ms.settings).trim()
        this.ms.getElement("display").innerHTML = `<span>${this.ms.settings.labels.empty}</span>`
        this.ms.getElement("dropdown").addEventListener("toggle", this.ms.handlePopoverToggle)
    }

    renderSelected() {
        const selectedLabels = this.ms.selectedLabels
        const selectedStructured = this.ms.selectedLeastNested

        let displayText
        if (selectedLabels.length > 0) {
            // sort: groups first, then by depth (shallow to deep), then by count (high to low)
            const sorted = selectedStructured.sort((a, b) => {
                // groups before items
                if (a.type !== b.type) return a.type === "group" ? -1 : 1

                // for groups: sort by depth first, then by count
                if (a.type === "group" && b.type === "group") {
                    if (a.depth !== b.depth) return a.depth - b.depth
                    return b.count - a.count
                }

                // items stay in original order relative to each other
                return 0
            })

            const displayItems = sorted.map(item => {
                return item.type === "group"
                    ? `<span>${item.label} <code>[${item.count}]</code></span>`
                    : item.label
            })
            displayText = this.listFormat.format(displayItems)
        } else {
            displayText = this.ms.placeholder
        }

        this.ms.getElement("display").innerHTML = selectedLabels.length > 0
            ? `<span>${displayText}</span>`
            : displayText

        this.ms.getElement("show-selected").disabled = selectedLabels.length === 0
        this.updateGroupCounts()
    }

    updateGroupCounts() {
        const groupCounts = this.ms.shadowRoot.querySelectorAll(`[data-role="group-count"]`)
        groupCounts.forEach(countElement => {
            const group = countElement.closest(`[data-role="group"]`)
            const selectedCount = group.querySelectorAll(`:scope > div [data-role="option"] input:checked`).length
            const total = countElement.dataset.total

            countElement.textContent = selectedCount > 0
                ? `[${selectedCount}/${total}]`
                : `[${total}]`
        })
    }

    renderTooltip() {
        const selectedLabels = this.ms.selectedLabels
        if (selectedLabels.length === 0) return false

        const groups = this.ms.shadowRoot.querySelectorAll(`[data-role="group"]`)
        let html = ""

        groups.forEach(group => {
            const checkedOptions = [...group.querySelectorAll(`[data-role="option"] input:checked`)]
                .filter(input => input.closest(`[data-role="group"]`) === group)
            if (checkedOptions.length === 0) return

            const checkbox = group.querySelector("input")
            const nextSibling = checkbox.nextElementSibling
            let label = nextSibling.querySelector("span")?.textContent || nextSibling.textContent

            if (parseInt(group.dataset.depth) === 0) {
                const hasChildGroups = group.querySelector(`[data-role="group"]`) !== null
                if (hasChildGroups) return
                label = this.ms.getAttribute("name") ?? label
            }

            const labels = checkedOptions.map(input => input.nextElementSibling.textContent.trim())

            html += `<div class="tooltip-group">`
                + `<div class="tooltip-group-header">${label} [${checkedOptions.length}]</div>`
                + `<div>${this.listFormat.format(labels)}</div>`
                + `</div>`
        })

        const tooltip = this.ms.getElement("tooltip")
        tooltip.innerHTML = html

        return true
    }
}


// region builder
class HTMLBuilder {
    constructor() {
        this.keys = []
    }

    buildHTML(items, depth = 0) {
        return items.map(item => this.buildItemHTML(item, depth)).join("")
    }

    buildItemHTML(item, depth) {
        const sanitizedValue = item.value.toString().replace(/[^a-zA-Z0-9_-]/g, '_')
        this.keys.push(sanitizedValue)
        const itemID = `ms-${this.keys.join("-")}`

        const rendered = item.children.length === 0
            ? this.buildOptionHTML(item, itemID)
            : this.buildGroupHTML(item, itemID, depth)

        this.keys.pop()
        return rendered
    }

    buildOptionHTML(item, itemID) {
        const input = `<input
            type="checkbox"
            id="${itemID}"
            name="${itemID}"
            value="${item.value}"
            ${item.selected ? "checked" : ""}>
        <label for="${itemID}">${item.label}</label>`

        return `<div
            data-role="option"
            data-label="${item.label}"
            data-value="${item.value}">
            ${input}
        </div>`
    }

    buildGroupHTML(item, itemID, depth) {
        const childCount = this.countCheckboxes(item.children)
        const label = `<span>${item.label}</span><code data-role="group-count" data-total="${childCount}">[${childCount}]</code>`

        const input = `<span class="checkbox-wrapper">
            <input
                type="checkbox"
                id="${itemID}"
                name="${itemID}"
                value="${item.value}"
                ${item.selected ? "checked" : ""}>
            <label for="${itemID}">${label}</label>
        </span>`

        return `<details
            data-role="group"
            data-label="${item.label}"
            data-value="${item.value}"
            data-depth="${depth}"
            ${depth === 0 ? " open" : ""}>
            <summary>${input}</summary>
            <div>${this.buildHTML(item.children, depth + 1)}</div>
        </details>`
    }

    countCheckboxes(data) {
        let count = 0

        function countRecursively(items) {
            for (const item of items) {
                const children = item?.children ?? []
                if (children.length === 0) {
                    count++
                } else {
                    countRecursively(item.children)
                }
            }
        }

        countRecursively(data)
        return count
    }
}


// region data
class DataHandler {
    constructor(multiselector) {
        this.ms = multiselector
        this.getDataFromElement = this.getDataFromElement.bind(this)
    }

    async getData() {
        return this.ms.getAttribute("src")
            ? await this.getDataFromJSON()
            : this.getDataFromDOM()
    }

    async getDataFromJSON() {
        const src = this.ms.getAttribute("src")
        const response = await fetch(src)
        const data = await response.json()
        return data
    }

    getDataFromDOM() {
        return [...this.ms.querySelectorAll(":scope > :where(optgroup, option)")].map(
            opt => this.getDataFromElement(opt)
        )
    }

    getDataFromElement(element) {
        const label = element.getAttribute("label") ?? element.textContent
        const value = element.getAttribute("value") ?? element.textContent
        const selected = element.hasAttribute("selected")
        const children = [...element.querySelectorAll(":scope > :where(optgroup, option)")]
            .map(this.getDataFromElement)
        return { label, value, children, selected }
    }

    normalizeLabels(data) {
        if (!Array.isArray(data)) return data

        return data.map(item => {
            const normalized = {
                children: [],
                ...item,
            }

            // if no label but has value, use value as label
            if (!normalized.label && normalized.value) {
                normalized.label = normalized.value
            }

            // recursively normalize children
            if (normalized.children && normalized.children.length > 0) {
                normalized.children = this.normalizeLabels(normalized.children)
            }

            return normalized
        })
    }

    convertStructure(source) {
        if (Array.isArray(source)) {
            return source.map(item => ({
                label: item,
                value: item,
                selected: false,
                children: this.convertStructure(item),
            }))
        } else if (typeof source === "object") {
            return Object.keys(source).map(key => {
                const children = this.convertStructure(source[key])
                return { label: key, value: key, selected: false, children }
            })
        } else {
            return []
        }
    }

    needsConversion(obj) {
        if (!Array.isArray(obj)) return true
        if (obj.length === 0) return false

        const firstItem = obj[0]
        return typeof firstItem !== "object" || firstItem === null || !("value" in firstItem)
    }

    needsWrapping(data) {
        return !(data.length === 1 && data[0]?.value === "all")
    }
}


// region search
class SearchHandler {
    constructor(multiselector) {
        this.ms = multiselector
        this.valuesOnlyMode = false
        this.matchPhrase = this.matchPhrase.bind(this)
        this.matchSelected = this.matchSelected.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleKeyUp = this.makeHandleKeyUp().bind(this)
        this.handleKeyManageFilter = this.handleKeyManageFilter.bind(this)
    }

    get searchbox() {
        return this.ms.getElement("searchbox")
    }

    get firstGroup() {
        return this.ms.getElement("first-group")
    }

    get toggleValuesButton() {
        return this.ms.getElement("toggle-values-only")
    }

    addListener() {
        this.ms.shadowRoot.addEventListener("keyup", this.handleKeyUp)
        this.ms.shadowRoot.addEventListener("click", this.handleClick)
        document.addEventListener("keydown", this.handleKeyManageFilter)
    }

    handleClick(event) {
        if (event.target.matches(`[data-command="clear-query"]`)) {
            this.handleClickClearQuery()
        }
        if (event.target.matches(`[data-command="show-selected"]`)) {
            this.handleClickShowSelected()
        }
        if (event.target.matches(`[data-command="toggle-values-only"]`)) {
            this.handleToggleValuesOnly()
        }
    }

    handleClickShowSelected() {
        this.filterData(this.firstGroup, this.matchSelected)
        this.updateStateAfterFilter()
        this.searchbox.placeholder = this.ms.settings.labels.filter.allSelected
    }

    handleKeyManageFilter(event) {
        // if (!this.ms.isActive) return
        if (!event.ctrlKey) return

        switch (event.key) {
            case "\\":
                this.handleClickShowSelected()
                break
            case "/":
                this.handleClickClearQuery()
                break
            default:
                return
        }

        event.preventDefault()
        event.stopPropagation()
    }

    handleClickClearQuery() {
        this.searchbox.value = ""
        this.filterData(this.firstGroup, this.matchPhrase)
        this.updateStateAfterFilter()
        this.searchbox.placeholder = this.ms.settings.labels.filter.placeholder
    }

    handleToggleValuesOnly() {
        this.valuesOnlyMode = !this.valuesOnlyMode
        this.toggleValuesButton.classList.toggle("active", this.valuesOnlyMode)
        if (this.searchbox.value !== "") {
            this.filterData(this.firstGroup, this.matchPhrase)
            this.updateStateAfterFilter()
        }
    }

    makeHandleKeyUp() {
        let timeout
        return function (event) {
            if (!event.target.matches('.filter input[type="text"]')) return

            const ignore = [
                "Tab", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"
            ]
            if (ignore.includes(event.key)) return
            if (event.key === "Escape") {
                if (event.target.value === "") {
                    this.ms.getElement("dropdown").hidePopover()
                } else {
                    event.target.value = ""
                }
            }

            clearTimeout(timeout)
            const waitSeconds = event.key === "Enter" ? 0 : 500
            timeout = setTimeout(() => {
                this.filterData(this.firstGroup, this.matchPhrase)
                this.updateStateAfterFilter()
                this.searchbox.placeholder = this.ms.settings.labels.filter.placeholder
            }, waitSeconds)
            // don't propegate: escape should clear the input but not close the selector
            event.stopPropagation()
        }
    }

    updateStateAfterFilter() {
        this.ms.checkboxHandler.setAllGroupStates()
        this.ms.foldingHandler.openAllLevels()
    }

    filterData(el, matcher) {
        if (el.matches(`[data-role="option"]`)) {
            const match = matcher(el)
            return this.toggleShowElem(el, match)
        }
        if (el.matches(`[data-role="group"]`)) {
            // skip wrapper group at depth 0
            // if phrase in group name and we are not in values only mode
            // then show element and all children
            const depth = parseInt(el.dataset.depth)
            if (!this.valuesOnlyMode && depth > 0 && matcher(el)) {
                const children = el.querySelectorAll(`[data-value]`)
                children.forEach(child => this.toggleShowElem(child, true))
                return this.toggleShowElem(el, true)
            }
            // check all children
            // if any children match with phrase
            // then also show group
            const children = el.querySelectorAll(`:scope > div > [data-value]`)
            const results = []
            for (const child of children) {
                results.push(this.filterData(child, matcher))
            }
            const match = results.some(i => i)
            return this.toggleShowElem(el, match)
        }
    }

    matchPhrase(el) {
        const phrase = this.searchbox.value.toUpperCase()
        let value = ""
        if (el.matches(`[data-value]`)) {
            value = el.dataset.label.toUpperCase()
        }
        return value.includes(phrase)
    }

    matchSelected(el) {
        if (el.matches(`[data-role="option"]`)) {
            return el.querySelector(`[type="checkbox"]`).checked
        }
        return false
    }

    toggleShowElem(el, show) {
        if (show) {
            el.classList.remove("hide")
            return true
        }
        el.classList.add("hide")
        return false
    }
}


// region checkbox
class CheckboxHandler extends EventTarget {
    constructor(multiselector) {
        super()
        this.ms = multiselector
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
        this.setAllGroupStates = this.setAllGroupStates.bind(this)
        this.renderSelected = () => this.ms.renderer.renderSelected()
    }

    addListener() {
        this.ms.shadowRoot.addEventListener("change", (event) => {
            this.handleCheckboxChange(event)
            this.setAllGroupStates()
            this.renderSelected()
        })
    }

    handleCheckboxChange(event) {
        if (!event.target.matches(`[type="checkbox"]`)) { return }
        if (event.target.closest("details").matches(`[data-role="group"]`)) {
            this.toggleCheckboxChildren(event.target)
        }
        this.ms.dispatchChangeEvent()
    }

    toggleCheckboxChildren(clickedCheckbox) {
        // exit if the checkbox is an option (because then it has no children)
        if (clickedCheckbox.closest("div")?.matches(`[data-role="option"]`)) { return }

        const parentDetails = clickedCheckbox.closest("details")
        const childCheckboxes = this.getChildCheckboxes(parentDetails)

        childCheckboxes.forEach((child) => {
            child.checked = clickedCheckbox.checked
        })
    }

    getChildCheckboxes(parentDetails) {
        return parentDetails.querySelectorAll(`
            [data-role="option"]:not(.hide) > [type="checkbox"],
            [data-role="group"]:not(.hide) > summary > [type="checkbox"]
        `)
    }

    setAllGroupStates() {
        Array.from(this.ms.getElements("groups"))
            .reverse()
            .forEach(checkbox => this.setGroupState(checkbox))
    }

    setGroupState(checkbox) {
        // group states:
        // - checked if all children are checked
        // - indeterminate if some children are checked
        // - unchecked if no children are checked
        // apply only to non-hidden groups
        const childstates = []
        checkbox
            .closest("details")
            .querySelectorAll(":scope > div")
            .forEach(group =>
                group
                    .querySelectorAll(`[data-role="option"]:not(.hide) > [type="checkbox"]`)
                    .forEach(child => childstates.push(child.checked))
            )

        if (childstates.every(i => i)) {
            checkbox.checked = true
            checkbox.indeterminate = false
        }
        else if (childstates.some(i => i)) {
            checkbox.checked = false
            checkbox.indeterminate = true
        }
        else {
            checkbox.checked = false
            checkbox.indeterminate = false
        }
    }
}


// region folding
class FoldingHandler {
    constructor(multiselector) {
        this.ms = multiselector
        this.handleClick = this.handleClick.bind(this)
        this.handleKeyUp = this.handleKeyUp.bind(this)
    }

    get options() {
        return this.ms.getElement("options-container")
    }

    addListener() {
        this.ms.shadowRoot.addEventListener("click", this.handleClick)
        document.addEventListener("keyup", this.handleKeyUp)
    }

    handleKeyUp(event) {
        // if (!this.ms.isActive) return
        if (!event.ctrlKey) return

        switch (event.key) {
            case "]":
                this.handleClickUnfold()
                break
            case "[":
                this.handleClickFold()
                break
            default:
                return
        }

        event.preventDefault()
        event.stopPropagation()
    }

    handleClick(event) {
        if (event.target.matches('[data-command="fold"]')) {
            this.handleClickFold()
        }
        if (event.target.matches('[data-command="unfold"]')) {
            this.handleClickUnfold()
        }
    }

    handleClickFold() {
        const level = this.getDeepestOpen()
        this.closeLevel(level)
    }

    handleClickUnfold() {
        const level = this.getShallowestClosed()
        this.openLevel(level)
    }

    getShallowestClosed() {
        const details = this.options.querySelectorAll("details")
        const levels = [...details]
            .filter(el => !el.open)
            .map(el => el.getAttribute("data-depth"))
        return Math.min(...levels)
    }

    getDeepestOpen() {
        const details = this.options.querySelectorAll("details")
        const levels = [...details]
            .filter(el => el.open)
            .map(el => el.getAttribute("data-depth"))
        return Math.max(...levels)
    }

    closeLevel(level) {
        const details = this.options.querySelectorAll(`[data-depth="${level}"]`)
        details.forEach(el => {
            el.removeAttribute("open")
        })
    }

    openLevel(level) {
        const details = this.options.querySelectorAll(`[data-depth="${level}"]`)
        details.forEach(el => {
            el.setAttribute("open", "")
        })
    }

    openAllLevels() {
        const details = this.options.querySelectorAll("details")
        details.forEach(el => el.setAttribute("open", ""))
    }
}


// region navigation
class NavigationHandler {
    constructor(multiselector) {
        this.ms = multiselector
        this.handleKeyDown = this.handleKeyDown.bind(this)
    }

    get trigger() {
        return this.ms.getElement("trigger")
    }

    get dropdown() {
        return this.ms.getElement("dropdown")
    }

    get isOpen() {
        return this.dropdown?.matches(":popover-open")
    }

    get focusableElementsSelector() {
        return `
        .search-container input[type="text"],
        details[data-depth="0"]:not(.hide) > summary,
        details[open]:not(.hide) > div > details:not(.hide) > summary,
        details[open]:not(.hide) > div > div:not(.hide) > [type="checkbox"]`
    }

    get searchbox() {
        return this.ms.getElement("searchbox")
    }

    addListener() {
        this.ms.shadowRoot.addEventListener("keydown", event => this.handleKeyDown(event))
    }

    handleKeyDown(event) {
        const keys = [
            "ArrowUp", "ArrowDown",
            "ArrowLeft", "ArrowRight",
            "Home", "End", "Tab",
            "Enter", " ",
            "Escape",
        ]
        if (!keys.includes(event.key)) return

        if (event.key === "Escape") {
            if (event.target === this.searchbox && event.target.value !== "") {
                event.target.value = ""
            } else if (this.isOpen) {
                this.dropdown.hidePopover()
                this.trigger.focus()
            }
            event.stopPropagation()
            return
        }

        // handle search input
        // - prevent key escape
        // - manage navigation edges
        if (event.target === this.searchbox) {
            const keys = [
                "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight",
                "Home", "End", "Tab",
            ]
            if (!keys.includes(event.key)) {
                event.stopPropagation()
                return // let text edit happen
            }
            if (!this.shouldAllowNavigation(event)) return
        }

        if (!this.isOpen && !["Enter", " "].includes(event.key)) {
            return // let parent handle navigation
        }
        switch (event.key) {
            case "ArrowUp":
            case "ArrowDown":
                this.handleUpDownArrow(event)
                break
            case "ArrowLeft":
            case "ArrowRight":
                this.handleLeftRightArrow(event)
                break
            case "Home":
                this.handleHome()
                break
            case "End":
                this.handleEnd()
                break
            case "Enter":
                this.handleEnter(event)
            default:
                return
        }
        event.preventDefault()
        event.stopPropagation()
    }

    handleHome() {
        this.trigger.focus()
    }

    handleEnd() {
        const selectors = this.focusableElementsSelector
        const opened = this.dropdown.querySelectorAll(selectors);
        [...opened].at(-1).focus()
    }

    handleUpDownArrow(event) {
        const inc = event.key === "ArrowDown" ? 1 : -1

        // handle toplevel
        if (event.target === this.trigger) {
            if (inc > 0 && !this.isOpen) {
                this.dropdown.showPopover()
                return
            }
            if (inc < 0 && this.isOpen) {
                this.dropdown.hidePopover()
                return
            }
        }

        if (event.target === this.searchbox && inc < 0) {
            this.trigger.focus()
            return
        }

        // handle filter buttons
        if (event.target.matches(`.filter button`)) {
            if (inc > 0) {
                const firstOption = this.dropdown.querySelector(`.options details:not(.hide) > summary, .options div:not(.hide) > [type="checkbox"]`)
                if (firstOption) {
                    firstOption.focus()
                }
                return
            }
            if (inc < 0) {
                this.trigger.focus()
                return
            }
        }

        const selectors = this.focusableElementsSelector
        const opened = this.dropdown.querySelectorAll(selectors)
        const closest = event.target.closest(selectors)
        const nextIdx = [...opened].indexOf(closest)
        const next = opened[nextIdx + inc]
        if (next) { next.focus() }
    }

    handleLeftRightArrow(event) {
        const inc = event.key === "ArrowRight" ? 1 : -1
        if (event.target.closest(".trigger-bar")) {
            const bar = this.ms.getElement("trigger-bar")
            const elements = bar.querySelectorAll("button:not([disabled])")
            const idx = [...elements].indexOf(event.target)
            const inc = event.key === "ArrowRight" ? 1 : -1
            const next = elements[idx + inc]
            if (next) next.focus()
            return
        }
        const opened = this.dropdown.querySelectorAll(`
            .control-panel button:not([disabled]),
            .search-container input[type="text"],
            [data-command="toggle-values-only"],
            [data-command="clear-query"],
            details[data-depth="0"]:not(.hide) > summary,
            details[data-depth="0"]:not(.hide) > summary .checkbox-wrapper [type="checkbox"],
            details[open]:not(.hide) > summary,
            details[open]:not(.hide) > summary .checkbox-wrapper [type="checkbox"],
            details[open]:not(.hide) > div > details:not(.hide) > summary,
            details[open]:not(.hide) > div > details:not(.hide) > summary .checkbox-wrapper [type="checkbox"],
            details[open]:not(.hide) > div > div:not(.hide) > [type="checkbox"]`
        )
        const nextIdx = [...opened].indexOf(event.target)
        const next = opened[nextIdx + inc]

        if (next) { next.focus() }
    }

    handleEnter(event) {
        // trigger: do nothing when on data-commands
        if (event.target.matches(`[data-command]`)) {
            event.preventDefault()
            event.stopPropagation()
            return
        }

        // trigger: toggle dropdown
        if (event.target.closest(".trigger")) {
            this.dropdown.togglePopover()
            event.preventDefault()
            event.stopPropagation()
            return
        }

        // checkboxes: trigger change
        if (event.target.matches(`[type="checkbox"]`)) {
            event.target.checked = !event.target.checked
            event.target.dispatchEvent(new Event('change', { bubbles: true }))
            event.preventDefault()
            event.stopPropagation()
            return
        }

        // groups: open/close (default browser behavior)
        if (event.target.matches(`details > summary`)) {
            event.stopPropagation() // prevent dropdown close, allow details toggle
            return
        }
    }

    shouldAllowNavigation(event) {
        const isVerticalNav = ["ArrowUp", "ArrowDown"].includes(event.key)
        if (isVerticalNav) return true

        const isHorizontalNav = ["ArrowLeft", "ArrowRight"].includes(event.key)
        if (!isHorizontalNav) return false

        const input = event.target
        if (input.value === "") return true

        const atStart = input.selectionStart === 0
        const atEnd = input.selectionStart === input.value.length

        return (event.key === "ArrowLeft" && atStart) || (event.key === "ArrowRight" && atEnd)
    }
}

// region tooltip
class TooltipHandler {
    constructor(multiselector) {
        this.ms = multiselector
        this._delay = 400
        this._timer = null
        this.handleMouseOver = this.handleMouseOver.bind(this)
        this.handleMouseOut = this.handleMouseOut.bind(this)
    }

    get tooltip() {
        return this.ms.getElement("tooltip")
    }

    get isOpen() {
        return this.tooltip?.matches(":popover-open")
    }

    addListener() {
        this.ms.shadowRoot.addEventListener("mouseover", this.handleMouseOver)
        this.ms.shadowRoot.addEventListener("mouseout", this.handleMouseOut)
    }

    show() {
        if (!this.ms.renderer.renderTooltip()) return
        this.tooltip.showPopover()
    }

    hide() {
        clearTimeout(this._timer)
        if (this.isOpen) this.tooltip.hidePopover()
    }

    handleMouseOver() {
        if (!event.target.closest(".trigger-bar")) return
        if (event.relatedTarget?.closest(".trigger-bar")) return
        if (this.ms.getElement("dropdown").matches(":popover-open")) return
        if (this.ms.selectedLabels.length === 0) return
        this._timer = setTimeout(() => this.show(), this._delay)
    }

    handleMouseOut() {
        if (!event.target.closest(".trigger-bar")) return
        if (event.relatedTarget?.closest(".trigger-bar")) return
        this.hide()
    }
}

window.customElements.define("multi-selector", MultiSelector)
