let template = document.createElement("template")
// template.innerHTML = `
function createTemplate(options) {
    return `
        <style>
            :host {
                position: relative;
                box-sizing: border-box;
            }

            :host *,
            :host *::before,
            :host *::after {
                box-sizing: border-box;
            }
            :host {
                --ms-primary-color: hsl(0, 0%, 67%);
                --ms-primary-color-disabled: hsl(0, 5%, 72%);
                --ms-dropdown-background: hsl(0, 0%, 100%);
                --ms-option-hover: hsl(0, 0%, 92%);
                --ms-text-color: hsl(0, 0%, 0%);
                --ms-text-color-disabled: hsl(0, 5%, 72%);
                --ms-padding-block: .25em;
                --ms-padding-inline: 1em;
                --ms-border-radius: 5px;
                --ms-button-background: hsl(0, 0%, 94%);
                --ms-button-hover: hsl(0, 0%, 87%);
                --ms-button-active: hsl(0, 0%, 97%);
                --ms-accent-color: hsl(0, 0%, 0%);
                --ms-search-background: hsl(0, 0%, 100%);
                --ms-search-text-color: var(--ms-text-color);
                --ms-search-placeholder-color: hsl(0, 0%, 50%);
                --ms-height: calc(2rem + var(--ms-padding-block));
                --ms-max-height: 60vh;
                display: grid;
                color: var(--ms-text-color);
                height: var(--ms-height);
            }
            :host([mode="dark"]),
            :host > details.system-dark {
                --ms-primary-color: hsl(0, 0%, 67%);
                --ms-primary-color-disabled: hsl(0, 5%, 42%);
                --ms-dropdown-background: hsl(0, 0%, 7%);
                --ms-option-hover: hsl(0, 0%, 15%);
                --ms-text-color: hsl(0, 0%, 84%);
                --ms-text-color-disabled: hsl(0, 5%, 52%);
                --ms-button-background: hsl(0, 0%, 24%);
                --ms-button-hover: hsl(0, 0%, 32%);
                --ms-button-active: hsl(0, 0%, 39%);
                --ms-accent-color: hsl(0, 0%, 100%);
                --ms-search-background: hsl(0, 0%, 12%);
                --ms-search-text-color: var(--ms-text-color);
                color: var(--ms-text-color);
            }
            :host > details {
                position: absolute;
                border: 1px solid var(--ms-primary-color);
                border-radius: var(--ms-border-radius);
                cursor: pointer;
                height: 100%;
            }
            :host > details[open] {
                height: unset;
                z-index: 999999;
            }
            :host > details > summary {
                display: flex;
                align-items : center;
                gap: .5em;
                height: var(--ms-height);
                padding-block: var(--ms-padding-block);
                padding-inline: var(--ms-padding-inline);
            }
            :host > details > summary > .display {
                margin-right: auto;
            }
            :host > details[open] .click-me {
                display: none;
            }
            /* display */
            /* https://collaboradev.com/2015/03/28/responsive-css-truncate-and-ellipsis/ */
            .display {
                display: table;
                table-layout: fixed;
                width: 100%;
                white-space: nowrap;
                margin-right: 3ch;
            }
            .display span {
                display: table-cell;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            code {
                font-family: Consolas, 'Courier New', Courier, monospace;
                font-size: .8em;
            }
            /* control panel */
            .control-panel {
                display: flex;
            }
            /* buttons */
            [data-command] {
                display: grid;
                visibility: hidden;
                background-color: var(--ms-button-background);
                border: 1px solid var(--ms-primary-color);
                user-select: none;
                color: var(--ms-text-color);
            }
            [data-command][disabled] {
                color:hsl(0, 0%, 72%);
            }
            [data-command]:not([disabled]):hover {
                cursor: pointer;
                background-color: var(--ms-button-hover);
            }
            [data-command]:not([disabled]):active {
                background-color: var(--ms-button-active);
            }
            [data-command]:first-of-type {
                border-radius: var(--ms-border-radius) 0 0 var(--ms-border-radius);
            }
            [data-command]:last-of-type {
                border-radius: 0 var(--ms-border-radius) var(--ms-border-radius) 0;
            }
            :host > details[open] [data-command] {
                display: grid;
                visibility: visible;
                place-items: center;
            }
            /* container */
            :host > details[open] > div {
                background-color: var(--ms-dropdown-background);
                border-bottom-left-radius: var(--ms-border-radius);
                border-bottom-right-radius: var(--ms-border-radius);
                padding-inline: var(--ms-padding-inline);
                padding-bottom: 1em;
                display: grid;
                grid-template-rows: auto 1fr;
                gap: .5em;
            }
            /* filter */
            .filter {
                padding-block: var(--ms-padding-block);
                display: flex;
            }
            .filter input {
                width: 100%;
                padding-block: var(--ms-padding-block);
                padding-inline: var(--ms-padding-inline);
                background-color: var(--ms-search-background);
                border-radius: var(--ms-border-radius) 0 0 var(--ms-border-radius);
                border: 1px solid var(--ms-primary-color);
                border-right: none;
                color: var(--ms-search-text-color);
            }
            ::placeholder {
                color: var(--ms-search-placeholder-color);
            }
            [data-role].hide {
                display: none;
            }
            /* options */
            :host > details[open] > div > .options {
                position: relative;
                display: flex;
                flex-direction: column;
                gap: .5em;
                overflow-y: auto;
                scrollbar-gutter: stable;
                padding-right: 8px;
                max-height: var(--ms-max-height);
            }
            /* focus */
            :focus-visible {
                z-index: 99999;
            }
            /* groups */
            [data-role="group"] > summary {
                display: grid;
                grid-template-columns: auto 1fr;
                border-radius: var(--ms-border-radius);
                padding: .15em;
                align-items: center;
                cursor: pointer;
                font-variant: small-caps;
                font-weight: bold;
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
                border-left: 2px solid var(--ms-primary-color);
                margin-left: .25rem;
                padding-left: .75rem;
            }
            [data-role="group"] > summary > label:hover {
                text-decoration: underline;
                text-underline-offset: .25em;
            }
            /* options */
            [data-role="option"] {
                display: grid;
                padding: .1em;
            }
            /* groups/options */
            [data-role="group"] > summary:hover,
            [data-role="option"]:hover {
                background-color: var(--ms-option-hover);
            }
            /* custom checkbox */
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
                outline: 1px solid var(--ms-primary-color);
            }
            input[type="checkbox"]:checked + label:before {
                background-color: var(--ms-accent-color);
            }
            input[type="checkbox"]:indeterminate + label:before {
                background: linear-gradient(to right, var(--ms-dropdown-background) 50%, var(--ms-accent-color) 50%);
            }
            input[type="checkbox"]:focus-visible + label:before {
                outline: 2px solid Highlight;
                outline: 2px solid -webkit-focus-ring-color;
                outline-offset: 2px;
            }
            /* disable */
            /* https://stackoverflow.com/a/63207226 */
            :host([disabled]) {
                --ms-primary-color: var(--ms-primary-color-disabled);
                background-color: var(--ms-background-disabled);
                color: var(--ms-text-color-disabled);
                tab-index: -1;
                pointer-events: none;
                user-select: none;
            }
            /* scrollbar chrome */
            /* https://stackoverflow.com/questions/66166047 */
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
        </style>
        <details>
            <summary>
                <div class="display"><span>...</span></div>
                <div class="control-panel">
                    <button data-command="unfold"
                        title="${options.titles.unfoldGroups}">&plus;</button>
                    <button data-command="fold"
                        title="${options.titles.foldGroups}">&minus;</button>
                    <button data-command="show-selected"
                        title="${options.titles.showSelected}" disabled>&#9745;</button>
                </div>
                <div class="click-me">&#9660;</div>
            </summary>
            <div>
                <div class="filter">
                    <input type="text" placeholder="${options.labels.placeholderSearch}" aria-label="search" role="searchbox">
                    <button data-command="clear-query"
                        title="${options.titles.clearFilter}">&Cross;</button>
                </div>
                <div class="options"></div>
            </div>
        </details>
        `.trim()
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
            selection: "Filtered items",
            placeholderSearch: "Search...",
            placeholderAllSelected: "<all selected>",
        },
        titles: {
            unfoldGroups: "unfold groups: ctrl-]",
            foldGroups: "fold groups: ctrl-[",
            showSelected: "show selected: ctrl-\\",
            clearFilter: "clear filter",
        }
    }

    constructor() {
        super()
        this._settings = {...this.constructor.defaultSettings}
        this._pendingAttributes = new Map()
        this._isReady = false
        this.internals_ = this.attachInternals()
        this.attachShadow({ mode: 'open' })
        this.name = "options"
        this._data = null

        this.renderer = new Renderer(this)
        this.dataHandler = new DataHandler(this)
        this.searchHandler = new SearchHandler(this)
        this.checkboxHandler = new CheckboxHandler(this)
        this.foldingHandler = new FoldingHandler(this)
        this.navigationHandler = new NavigationHandler(this)

        this.onMouseEnter = this.onMouseEnter.bind(this)
        this.onMouseLeave = this.onMouseLeave.bind(this)
        this.onDocumentClick = this.onDocumentClick.bind(this)
        this.onTabOutOrEscape = this.onTabOutOrEscape.bind(this)
        this.handleMediaQueryChange = this.handleMediaQueryChange.bind(this)

        this.isHover = false

        // re-dispatch changes
        this.checkboxHandler.addEventListener("change", (event) => {
            this.dispatchEvent(new CustomEvent("change", {detail: event.detail}))
        })
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

        document.addEventListener("click", this.onDocumentClick)
        document.addEventListener("keyup", this.onTabOutOrEscape)

        this.addEventListener('mouseenter', this.onMouseEnter)
        this.addEventListener('mouseleave', this.onMouseLeave)

        this.checkboxHandler.addListener()
        this.searchHandler.addListener()
        this.foldingHandler.addListener()
        this.navigationHandler.addListener()

        if (this.hasAttribute("disabled")) {
            this.getElement("box").setAttribute("tabindex", -1)
        }

        // observe mutations
        let observer = new MutationObserver(async () => {
            this.data = await this.dataHandler.getData()
        })
        observer.observe(this, {childList: true})

        this.mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
        this.mediaQuery.addEventListener("change", this.handleMediaQueryChange)
        this.handleMediaQueryChange()
    }

    disconnectedCallback() {
        document.removeEventListener("click", this.onDocumentClick)
        document.removeEventListener("keyup", this.onTabOutOrEscape)
        document.removeEventListener("keydown", this.foldingHandler.handleKeyFolding)
        document.removeEventListener("keydown", this.searchHandler.handleKeyManageFilter)
        this.mediaQuery.removeEventListener("change", this.handleMediaQueryChange)
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
        switch(property) {
            case "mode":
                this.getElement("box").classList.remove('system-dark')
                break
            case "disabled":
                const box = this.getElement("box")
                if (box) {
                    if (newValue === "") {
                        box.setAttribute("tabindex", -1)
                    } else {
                        box.removeAttribute("tabindex")
                    }
                }
                break
            default:
                this[property] = newValue
        }
    }

    get settings() {
        return this._settings
    }

    set settings(newSettings) {
        this._settings = {...this.constructor.defaultSettings, ...newSettings}
        this.renderer?.render()
    }

    get options() {
        return [...this.getElements("options")].map(i => i.dataset.value)
    }

    // MARK: ...selection
    get selectedValues() {
        return [...this.getElements("selected-values")].map(i => i.value)
    }

    addSelectedValues(...values) {
        values.forEach(item => {
            const element = this.shadowRoot.querySelector(`input[value="${item}"]`)
            if (element) { element.checked = true }
        })
        this.checkboxHandler.setAllGroupStates()
        this.renderer.renderSelected()
    }

    removeSelectedValues(...values) {
        values.forEach(item => {
            const element = this.shadowRoot.querySelector(`input[value="${item}"]`)
            if (element) { element.checked = false }
        })
        this.checkboxHandler.setAllGroupStates()
        this.renderer.renderSelected()
    }

    get selectedLabels() {
        return [...this.getElements("selected-labels")].map(i => i.textContent)
    }

    get selectedLeastNested() {
        const firstGroup = this.getElement("first-group")
        return firstGroup ? this.getLeastNestedCheckedLabels(firstGroup) : []
    }

    getLeastNestedCheckedLabels(el) {
        let output = []
        const checkbox = el.querySelector("input")
        if (checkbox?.checked) {
            // let label = checkbox.nextElementSibling.textContent
            const textNodes = checkbox.nextElementSibling.childNodes
            let label = ""
            for (const node of textNodes) {
                if (node.nodeType === Node.TEXT_NODE) {
                    label += node.textContent
                }
            }
            if (el.dataset.role === "group") {
                const n = el.querySelectorAll(`[data-role="option"] input:checked`).length
                label = `${label} <code>[${n}]</code>`
            }
            return [label] }
        for (const child of el.querySelectorAll(":scope > div > [data-role]")) {
            output = [...output, ...this.getLeastNestedCheckedLabels(child)]
        }
        return output
    }

    // MARK: ...elements
    getElement(name) {
        let query
        switch (name) {
            case "box":
                query = "details"
                break
            case "display":
                query = ".display"
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
            case "options-container":
                query = ":host > details > div > .options"
                break
            case "first-group":
                query = `[data-role="group"]`
                break
            case "label-all":
                query = `[data-role="group"] label`
                break
            default:
                console.warn(`Unexpected value passed to getElement: ${name}`)
                return null
        }
        return this.shadowRoot.querySelector(query)
    }

    getElements(name) {
        let query
        switch(name) {
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
                query = `[data-role="group"]:not(.hide) > summary > [type="checkbox"]`
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

        if (this.dataHandler.needsConversion(newValue)) {
            processedData = this.dataHandler.convertStructure(newValue)
        }

        if (this.dataHandler.needsWrapping(processedData)) {
            processedData = [{
                label: this.settings.labels.all,
                value: 'all',
                children: processedData ?? []
            }]
        }

        if (JSON.stringify(processedData) !== JSON.stringify(this._data)) {
            this._data = processedData
            this.renderer.render()
        }
    }

    get placeholder() {
        if (!this._placeholder) { return `Select ${this.name}...` }
        return this._placeholder
    }

    set placeholder(text) {
        this._placeholder = text
        if (this.selectedValues === 0) {
            this.render.renderSelected()
        }
    }

    // MARK: ...color
    set mode(newValue) {
        if (newValue === "dark") {
            this.setAttribute("mode", "dark")
        } else if (newValue === "light") {
            this.setAttribute("mode", "light")
        } else if (newValue === null) {
            this.removeAttribute("mode")
        }
    }

    get mode() {
        return this.getAttribute("mode") || "light"
    }

    handleMediaQueryChange() {
        if (!this.hasAttribute("mode")) {
            if (this.mediaQuery.matches) {
                this.getElement("box").classList.add("system-dark")
            } else {
                this.getElement("box").classList.remove("system-dark")
            }
        }
    }

    // MARK: ...focus
    onDocumentClick(event) {
        if ( event.target === this ) { return }
        this.shadowRoot.querySelector("details").open = false
        this.onBlur()
    }

    onTabOutOrEscape(event) {
        let keys = ["Tab", "Escape"]
        let isInRoot = event.target === this
        if ( event.key === "Tab" && isInRoot || !keys.includes(event.key) ) { return }
        this.shadowRoot.querySelector("details").open = false
        this.onBlur()
    }

    onBlur() {
        this.internals_.setFormValue(JSON.stringify(this.selectedValues))
    }

    onMouseEnter() {
        this.isHover = true
    }
    onMouseLeave() {
        this.isHover = false
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
        this.ms.shadowRoot.innerHTML = createTemplate(this.ms.settings).trim()
        let html = this.htmlBuilder.buildHTML(this.ms.data)
        this.optionsContainer.innerHTML += html
        this.ms.checkboxHandler.setAllGroupStates()
        this.renderSelected()
    }

    renderSelected() {
        const selectedLabels = this.ms.selectedLabels
        const selectedLeastNested = this.ms.selectedLeastNested
        this.ms.getElement("display").innerHTML = selectedLabels.length > 0
            // ? `<b><code>[${selectedLabels.length}]</code> | </b>${this.listFormat.format(selectedLeastNested)}`
            ? `<span title="${this.listFormat.format(selectedLabels)}">${this.listFormat.format(selectedLeastNested)}</span>`
            : this.ms.placeholder
        this.ms.getElement("show-selected").disabled = selectedLabels.length === 0
    }
}


// region builder
class HTMLBuilder {
    constructor() {
        this.keys = []
    }

    buildHTML(items, depth=-1) {
        depth++
        return items
            .map(item => {
                this.keys.push(item.label)
                const itemID = this.keys.join("-")
                const children = item?.children ?? []
                const label =
                    children.length > 0
                    ? `${item.label} <code>[${this.countCheckboxes(item.children)}]</code>`
                    : item.label
                const input = `<input
                    type="checkbox"
                    id="${itemID}"
                    name="${itemID}"
                    value="${item.value}"
                    ${item.selected ? "checked": ""}>
                <label for="${itemID}">${label} </label>`
                let rendered = ""
                if (children.length === 0) {
                    rendered = `<div
                        data-role="option"
                        data-value="${item.label}">
                        ${input}
                    </div>`
                } else {
                    rendered = `<details
                        data-role="group"
                        data-value="${item.label}"
                        data-depth="${depth}"${depth === 0 ? " open" : ""}>
                        <summary>${input}</summary>
                        <div>${this.buildHTML(item.children, depth)}</div>
                    </details>`
                }
                this.keys.pop()
                return rendered
            })
            .join("")
            .replace(/\s+/g, " ") // remove excess whitespace
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
        return this.ms.getAttribute('src')
            ? await this.getDataFromJSON()
            : this.getDataFromDOM()
    }

    async getDataFromJSON() {
        const src = this.ms.getAttribute('src')
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
        return (obj.length > 0 && !(obj[0]?.label && obj[0]?.value))
    }

    needsWrapping(data) {
        return !(data.length === 1 && data[0]?.value === 'all')
    }
}


// region search
class SearchHandler {
    constructor(multiselector) {
        this.ms = multiselector
        this.matchPhrase = this.matchPhrase.bind(this)
        this.matchSelected = this.matchSelected.bind(this)
        this.handleKeyUp = this.makeHandleKeyUp().bind(this)
        this.handleClickClearQuery = this.handleClickClearQuery.bind(this)
        this.handleClickShowSelected = this.handleClickShowSelected.bind(this)
        this.handleKeyManageFilter = this.handleKeyManageFilter.bind(this)
    }

    get searchbox() {
        return this.ms.getElement("searchbox")
    }

    get showSelectedButton() {
        return this.ms.getElement("show-selected")
    }

    get clearQueryButton() {
        return this.ms.getElement("clear-query")
    }

    get firstGroup() {
        return this.ms.getElement("first-group")
    }

    addListener() {
        this.searchbox.addEventListener("keyup", this.handleKeyUp)
        this.clearQueryButton.addEventListener("click", this.handleClickClearQuery)
        this.showSelectedButton.addEventListener("click", this.handleClickShowSelected)
        document.addEventListener("keydown", this.handleKeyManageFilter)
    }

    handleClickShowSelected() {
        this.filterData(this.firstGroup, this.matchSelected)
        this.updateStateAfterFilter()
        this.searchbox.placeholder = this.ms.settings.labels.placeholderAllSelected
    }

    handleKeyManageFilter(event) {
        // return if no element within the tree is in focus/hovered
        if(!this.ms.contains(document.activeElement) && !this.ms.isHover) {
            return
        }
        if (event.ctrlKey && event.key === "\\") {
            this.handleClickShowSelected()
            event.preventDefault()
        }
        if (event.ctrlKey && event.key === "/") {
            this.handleClickClearQuery()
            event.preventDefault()
        }
    }

    handleClickClearQuery() {
        this.searchbox.value = ""
        this.filterData(this.firstGroup, this.matchPhrase)
        this.updateStateAfterFilter()
        this.searchbox.placeholder = this.ms.settings.labels.placeholderSearch
    }

    makeHandleKeyUp() {
        let timeout
        return function(event) {
            const ignore = [
                "Tab",
                "ArrowUp",
                "ArrowDown",
                "ArrowLeft",
                "ArrowRight",
            ]
            if (ignore.includes(event.key)) { return }
            if (event.key === "Escape") { event.target.value = "" }
            clearTimeout(timeout)
            const waitSeconds = event.key === "Enter" ? 0 : 500
            timeout = setTimeout( () => {
                this.filterData(this.firstGroup, this.matchPhrase)
                this.updateStateAfterFilter()
                this.searchbox.placeholder = this.ms.settings.labels.placeholderSearch
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
            // if phrase in groupname then show element and all children
            if (matcher(el)) {
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
            value = el.dataset.value.toUpperCase()
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
        this.addEventListener("change", this.setAllGroupStates)
        this.addEventListener("change", this.renderSelected)
        this.ms.shadowRoot.addEventListener("change", this.handleCheckboxChange)
    }

    handleCheckboxChange(event) {
        if (!event.target.matches(`[type="checkbox"]`)) { return }
        if (event.target.closest("details").matches(`[data-role="group"]`)) {
            this.toggleCheckboxChildren(event.target)
        }
        this.dispatchEvent(new CustomEvent("change", {detail: this.ms.selectedValues}))
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
        this.handleClickFold = this.handleClickFold.bind(this)
        this.handleClickUnfold = this.handleClickUnfold.bind(this)
        this.handleKeyFolding = this.handleKeyFolding.bind(this)
    }

    get options() {
        return this.ms.getElement("options-container")
    }

    get foldButton() {
        return this.ms.getElement("fold")
    }

    get unfoldButton() {
        return this.ms.getElement("unfold")
    }

    addListener() {
        this.foldButton.addEventListener("click", this.handleClickFold)
        this.unfoldButton.addEventListener("click", this.handleClickUnfold)
        document.addEventListener("keydown", this.handleKeyFolding)
    }

    handleKeyFolding(event) {
        // return if no element within the tree is in focus/hovered
        if(!this.ms.contains(document.activeElement) && !this.ms.isHover) {
            return
        }
        if (event.ctrlKey && event.key === "]") {
            this.handleClickUnfold()
            event.preventDefault()
        }
        if (event.ctrlKey && event.key === "[") {
            this.handleClickFold()
            event.preventDefault()
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
    }

    get box() {
        return this.ms.getElement("box")
    }

    get focusableElementsSelector() {
        return `
            input[type="text"],
            details[open]:not(.hide) > summary,
            details[open]:not(.hide) > div > details:not(.hide) > summary,
            details[open]:not(.hide) > div > div:not(.hide) > [type="checkbox"]`
    }

    get searchbox() {
        return this.ms.getElement("searchbox")
    }

    addListener() {
        this.ms.shadowRoot.addEventListener("keydown", event => {
            let ignore = [
                "ArrowUp",
                "ArrowDown",
            ]
            if (event.target === this.searchbox && !ignore.includes(event.key)) {return}
            switch ( event.key ) {
                case "ArrowUp":
                case "ArrowDown":
                    this.handleUpDownArrow(event)
                    event.preventDefault()
                    break
                case "ArrowLeft":
                case "ArrowRight":
                    this.handleLeftRightArrow(event)
                    event.preventDefault()
                    break
                case "Home":
                    this.handleHome()
                    event.preventDefault()
                    break
                case "End":
                    this.handleEnd()
                    event.preventDefault()
                    break
            }
        })
    }

    handleHome() {
        this.box.querySelector("summary").focus()
    }

    handleEnd() {
        const selectors = this.focusableElementsSelector
        const opened = this.box.querySelectorAll(selectors);
        [...opened].at(-1).focus()
    }

    handleUpDownArrow(event) {
        const inc = event.key === "ArrowDown" ? 1 : -1

        // handle toplevel
        if ( event.target.matches(`:host > details > summary, :host > details > summary > *`) ) {
            if ( inc > 0 && !this.box.open ) {
                this.box.setAttribute("open", "")
                return
            }
            if ( inc < 0 && this.box.open ) {
                this.box.removeAttribute("open")
                return
            }
        }

        const selectors = this.focusableElementsSelector
        const opened = this.box.querySelectorAll(selectors)
        const closest = event.target.closest(selectors)
        const nextIdx = [...opened].indexOf(closest)
        const next = opened[nextIdx + inc]
        if ( next ) { next.focus() }
    }

    handleLeftRightArrow(event) {
        // handle searchbox
        if ( event.target.matches("#search") ) { return }

        let inc = event.key === "ArrowRight" ? 1 : -1
        let opened = this.box.querySelectorAll(`
            #control-panel,
            button,
            input[type="text"],
            details[open]:not(.hide) > summary,
            details[open]:not(.hide) > div > details:not(.hide) > summary,
            details[open]:not(.hide) > div > details:not(.hide) > summary > [type="checkbox"],
            details[open]:not(.hide) > div > div:not(.hide) > [type="checkbox"]`
        )
        let nextIdx = [...opened].indexOf(event.target)
        let next = opened[nextIdx + inc]
        if (next) { next.focus() }
    }
}


window.customElements.define('multi-selector', MultiSelector)
