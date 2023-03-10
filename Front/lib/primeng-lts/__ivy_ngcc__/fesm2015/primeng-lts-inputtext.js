import { Directive, ElementRef, Optional, HostListener, NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/forms';
class InputText {
    constructor(el, ngModel) {
        this.el = el;
        this.ngModel = ngModel;
    }
    ngDoCheck() {
        this.updateFilledState();
    }
    onInput(e) {
        this.updateFilledState();
    }
    updateFilledState() {
        this.filled = (this.el.nativeElement.value && this.el.nativeElement.value.length) ||
            (this.ngModel && this.ngModel.model);
    }
}
InputText.ɵfac = function InputText_Factory(t) { return new (t || InputText)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NgModel, 8)); };
InputText.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: InputText, selectors: [["", "pInputText", ""]], hostVars: 6, hostBindings: function InputText_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("input", function InputText_input_HostBindingHandler($event) { return ctx.onInput($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("p-inputtext", true)("p-component", true)("p-filled", ctx.filled);
    } } });
InputText.ctorParameters = () => [
    { type: ElementRef },
    { type: NgModel, decorators: [{ type: Optional }] }
];
InputText.propDecorators = {
    onInput: [{ type: HostListener, args: ['input', ['$event'],] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(InputText, [{
        type: Directive,
        args: [{
                selector: '[pInputText]',
                host: {
                    '[class.p-inputtext]': 'true',
                    '[class.p-component]': 'true',
                    '[class.p-filled]': 'filled'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.NgModel, decorators: [{
                type: Optional
            }] }]; }, { onInput: [{
            type: HostListener,
            args: ['input', ['$event']]
        }] }); })();
class InputTextModule {
}
InputTextModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: InputTextModule });
InputTextModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function InputTextModule_Factory(t) { return new (t || InputTextModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(InputTextModule, { declarations: function () { return [InputText]; }, imports: function () { return [CommonModule]; }, exports: function () { return [InputText]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(InputTextModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [InputText],
                declarations: [InputText]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { InputText, InputTextModule };

//# sourceMappingURL=primeng-lts-inputtext.js.map