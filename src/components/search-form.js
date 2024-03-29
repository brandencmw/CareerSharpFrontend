var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let SearchForm = (() => {
    let _classDecorators = [customElement('search-form')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = LitElement;
    let _instanceExtraInitializers = [];
    let _searchTerm_decorators;
    let _searchTerm_initializers = [];
    var SearchForm = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _searchTerm_decorators = [property()];
            __esDecorate(this, null, _searchTerm_decorators, { kind: "accessor", name: "searchTerm", static: false, private: false, access: { has: obj => "searchTerm" in obj, get: obj => obj.searchTerm, set: (obj, value) => { obj.searchTerm = value; } }, metadata: _metadata }, _searchTerm_initializers, _instanceExtraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            SearchForm = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        #searchTerm_accessor_storage = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _searchTerm_initializers, ''));
        get searchTerm() { return this.#searchTerm_accessor_storage; }
        set searchTerm(value) { this.#searchTerm_accessor_storage = value; }
        static styles = css `
    :host {
      display: block;
    }
    input {
      padding: 8px;
      font-size: 16px;
      margin-right: 8px;
    }
    button {
      padding: 8px 16px;
      font-size: 16px;
      background-color: #007bff;
      color: #ffffff;
      border: none;
      cursor: pointer;
    }
  `;
        render() {
            return html `
      <form @submit=${this._handleSubmit}>
        <input id='keywordSearchField' type="text" .value=${this.searchTerm} placeholder="Search...">
        <button type="submit">Search</button>
      </form>
    `;
        }
        _handleSubmit(event) {
            event.preventDefault();
            const searchField = this.shadowRoot.getElementById("keywordSearchField");
            const searchQuery = searchField.value.trim();
            if (searchQuery != "") {
                console.log(searchQuery);
                this.dispatchEvent(new CustomEvent("search", { detail: searchQuery }));
            }
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return SearchForm = _classThis;
})();
export { SearchForm };
