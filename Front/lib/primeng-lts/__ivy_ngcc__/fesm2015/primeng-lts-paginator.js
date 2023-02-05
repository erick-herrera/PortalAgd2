import { EventEmitter, Component, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef, Input, Output, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng-lts/dropdown';
import { RippleModule } from 'primeng-lts/ripple';
import { SharedModule } from 'primeng-lts/api';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'primeng-lts/ripple';
import * as ɵngcc3 from 'primeng-lts/dropdown';
import * as ɵngcc4 from '@angular/forms';
import * as ɵngcc5 from 'primeng-lts/api';

function Paginator_div_0_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c0 = function (a0) { return { $implicit: a0 }; };
function Paginator_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 14);
    ɵngcc0.ɵɵtemplate(1, Paginator_div_0_div_1_ng_container_1_Template, 1, 0, "ng-container", 15);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r1.templateLeft)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c0, ctx_r1.paginatorState));
} }
function Paginator_div_0_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 16);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r2.currentPageReport);
} }
const _c1 = function (a0) { return { "p-disabled": a0 }; };
function Paginator_div_0_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 17);
    ɵngcc0.ɵɵlistener("click", function Paginator_div_0_button_3_Template_button_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); const ctx_r10 = ɵngcc0.ɵɵnextContext(2); return ctx_r10.changePageToFirst($event); });
    ɵngcc0.ɵɵelement(1, "span", 18);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("disabled", ctx_r3.isFirstPage())("ngClass", ɵngcc0.ɵɵpureFunction1(2, _c1, ctx_r3.isFirstPage()));
} }
const _c2 = function (a0) { return { "p-highlight": a0 }; };
function Paginator_div_0_span_6_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 21);
    ɵngcc0.ɵɵlistener("click", function Paginator_div_0_span_6_button_1_Template_button_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r15); const pageLink_r13 = ctx.$implicit; const ctx_r14 = ɵngcc0.ɵɵnextContext(3); return ctx_r14.onPageLinkClick($event, pageLink_r13 - 1); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const pageLink_r13 = ctx.$implicit;
    const ctx_r12 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(2, _c2, pageLink_r13 - 1 == ctx_r12.getPage()));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(pageLink_r13);
} }
function Paginator_div_0_span_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 19);
    ɵngcc0.ɵɵtemplate(1, Paginator_div_0_span_6_button_1_Template, 2, 4, "button", 20);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r4.pageLinks);
} }
function Paginator_div_0_p_dropdown_7_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r16 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵtextInterpolate(ctx_r16.currentPageReport);
} }
function Paginator_div_0_p_dropdown_7_Template(rf, ctx) { if (rf & 1) {
    const _r18 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "p-dropdown", 22);
    ɵngcc0.ɵɵlistener("onChange", function Paginator_div_0_p_dropdown_7_Template_p_dropdown_onChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r18); const ctx_r17 = ɵngcc0.ɵɵnextContext(2); return ctx_r17.onPageDropdownChange($event); });
    ɵngcc0.ɵɵtemplate(1, Paginator_div_0_p_dropdown_7_ng_template_1_Template, 1, 1, "ng-template", 23);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("options", ctx_r5.pageItems)("ngModel", ctx_r5.getPage())("appendTo", ctx_r5.dropdownAppendTo)("scrollHeight", ctx_r5.dropdownScrollHeight);
} }
function Paginator_div_0_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r20 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 24);
    ɵngcc0.ɵɵlistener("click", function Paginator_div_0_button_10_Template_button_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r20); const ctx_r19 = ɵngcc0.ɵɵnextContext(2); return ctx_r19.changePageToLast($event); });
    ɵngcc0.ɵɵelement(1, "span", 25);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("disabled", ctx_r6.isLastPage())("ngClass", ɵngcc0.ɵɵpureFunction1(2, _c1, ctx_r6.isLastPage()));
} }
function Paginator_div_0_p_dropdown_11_ng_container_1_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Paginator_div_0_p_dropdown_11_ng_container_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, Paginator_div_0_p_dropdown_11_ng_container_1_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 15);
} if (rf & 2) {
    const item_r23 = ctx.$implicit;
    const ctx_r22 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r22.dropdownItemTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c0, item_r23));
} }
function Paginator_div_0_p_dropdown_11_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, Paginator_div_0_p_dropdown_11_ng_container_1_ng_template_1_Template, 1, 4, "ng-template", 28);
    ɵngcc0.ɵɵelementContainerEnd();
} }
function Paginator_div_0_p_dropdown_11_Template(rf, ctx) { if (rf & 1) {
    const _r26 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "p-dropdown", 26);
    ɵngcc0.ɵɵlistener("ngModelChange", function Paginator_div_0_p_dropdown_11_Template_p_dropdown_ngModelChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r26); const ctx_r25 = ɵngcc0.ɵɵnextContext(2); return ctx_r25.rows = $event; })("onChange", function Paginator_div_0_p_dropdown_11_Template_p_dropdown_onChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r26); const ctx_r27 = ɵngcc0.ɵɵnextContext(2); return ctx_r27.onRppChange($event); });
    ɵngcc0.ɵɵtemplate(1, Paginator_div_0_p_dropdown_11_ng_container_1_Template, 2, 0, "ng-container", 27);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("options", ctx_r7.rowsPerPageItems)("ngModel", ctx_r7.rows)("appendTo", ctx_r7.dropdownAppendTo)("scrollHeight", ctx_r7.dropdownScrollHeight);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r7.dropdownItemTemplate);
} }
function Paginator_div_0_div_12_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Paginator_div_0_div_12_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 29);
    ɵngcc0.ɵɵtemplate(1, Paginator_div_0_div_12_ng_container_1_Template, 1, 0, "ng-container", 15);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r8.templateRight)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c0, ctx_r8.paginatorState));
} }
function Paginator_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r30 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵtemplate(1, Paginator_div_0_div_1_Template, 2, 4, "div", 2);
    ɵngcc0.ɵɵtemplate(2, Paginator_div_0_span_2_Template, 2, 1, "span", 3);
    ɵngcc0.ɵɵtemplate(3, Paginator_div_0_button_3_Template, 2, 4, "button", 4);
    ɵngcc0.ɵɵelementStart(4, "button", 5);
    ɵngcc0.ɵɵlistener("click", function Paginator_div_0_Template_button_click_4_listener($event) { ɵngcc0.ɵɵrestoreView(_r30); const ctx_r29 = ɵngcc0.ɵɵnextContext(); return ctx_r29.changePageToPrev($event); });
    ɵngcc0.ɵɵelement(5, "span", 6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(6, Paginator_div_0_span_6_Template, 2, 1, "span", 7);
    ɵngcc0.ɵɵtemplate(7, Paginator_div_0_p_dropdown_7_Template, 2, 4, "p-dropdown", 8);
    ɵngcc0.ɵɵelementStart(8, "button", 9);
    ɵngcc0.ɵɵlistener("click", function Paginator_div_0_Template_button_click_8_listener($event) { ɵngcc0.ɵɵrestoreView(_r30); const ctx_r31 = ɵngcc0.ɵɵnextContext(); return ctx_r31.changePageToNext($event); });
    ɵngcc0.ɵɵelement(9, "span", 10);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(10, Paginator_div_0_button_10_Template, 2, 4, "button", 11);
    ɵngcc0.ɵɵtemplate(11, Paginator_div_0_p_dropdown_11_Template, 2, 5, "p-dropdown", 12);
    ɵngcc0.ɵɵtemplate(12, Paginator_div_0_div_12_Template, 2, 4, "div", 13);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r0.styleClass);
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r0.style)("ngClass", "p-paginator p-component");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.templateLeft);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.showCurrentPageReport);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.showFirstLastIcon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("disabled", ctx_r0.isFirstPage())("ngClass", ɵngcc0.ɵɵpureFunction1(16, _c1, ctx_r0.isFirstPage()));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.showPageLinks);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.showJumpToPageDropdown);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("disabled", ctx_r0.isLastPage())("ngClass", ɵngcc0.ɵɵpureFunction1(18, _c1, ctx_r0.isLastPage()));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.showFirstLastIcon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.rowsPerPageOptions);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.templateRight);
} }
class Paginator {
    constructor(cd) {
        this.cd = cd;
        this.pageLinkSize = 5;
        this.onPageChange = new EventEmitter();
        this.alwaysShow = true;
        this.dropdownScrollHeight = '200px';
        this.currentPageReportTemplate = '{currentPage} of {totalPages}';
        this.showFirstLastIcon = true;
        this.totalRecords = 0;
        this.rows = 0;
        this.showPageLinks = true;
        this._first = 0;
        this._page = 0;
    }
    ngOnInit() {
        this.updatePaginatorState();
    }
    ngOnChanges(simpleChange) {
        if (simpleChange.totalRecords) {
            this.updatePageLinks();
            this.updatePaginatorState();
            this.updateFirst();
            this.updateRowsPerPageOptions();
        }
        if (simpleChange.first) {
            this._first = simpleChange.first.currentValue;
            this.updatePageLinks();
            this.updatePaginatorState();
        }
        if (simpleChange.rows) {
            this.updatePageLinks();
            this.updatePaginatorState();
        }
        if (simpleChange.rowsPerPageOptions) {
            this.updateRowsPerPageOptions();
        }
    }
    get first() {
        return this._first;
    }
    set first(val) {
        this._first = val;
    }
    updateRowsPerPageOptions() {
        if (this.rowsPerPageOptions) {
            this.rowsPerPageItems = [];
            for (let opt of this.rowsPerPageOptions) {
                if (typeof opt == 'object' && opt['showAll']) {
                    this.rowsPerPageItems.unshift({ label: opt['showAll'], value: this.totalRecords });
                }
                else {
                    this.rowsPerPageItems.push({ label: String(opt), value: opt });
                }
            }
        }
    }
    isFirstPage() {
        return this.getPage() === 0;
    }
    isLastPage() {
        return this.getPage() === this.getPageCount() - 1;
    }
    getPageCount() {
        return Math.ceil(this.totalRecords / this.rows) || 1;
    }
    calculatePageLinkBoundaries() {
        let numberOfPages = this.getPageCount(), visiblePages = Math.min(this.pageLinkSize, numberOfPages);
        //calculate range, keep current in middle if necessary
        let start = Math.max(0, Math.ceil(this.getPage() - ((visiblePages) / 2))), end = Math.min(numberOfPages - 1, start + visiblePages - 1);
        //check when approaching to last page
        var delta = this.pageLinkSize - (end - start + 1);
        start = Math.max(0, start - delta);
        return [start, end];
    }
    updatePageLinks() {
        this.pageLinks = [];
        let boundaries = this.calculatePageLinkBoundaries(), start = boundaries[0], end = boundaries[1];
        for (let i = start; i <= end; i++) {
            this.pageLinks.push(i + 1);
        }
        if (this.showJumpToPageDropdown) {
            this.pageItems = [];
            for (let i = 0; i < this.getPageCount(); i++) {
                this.pageItems.push({ label: String(i + 1), value: i });
            }
        }
    }
    changePage(p) {
        var pc = this.getPageCount();
        if (p >= 0 && p < pc) {
            this._first = this.rows * p;
            var state = {
                page: p,
                first: this.first,
                rows: this.rows,
                pageCount: pc
            };
            this.updatePageLinks();
            this.onPageChange.emit(state);
            this.updatePaginatorState();
        }
    }
    updateFirst() {
        const page = this.getPage();
        if (page > 0 && this.totalRecords && (this.first >= this.totalRecords)) {
            Promise.resolve(null).then(() => this.changePage(page - 1));
        }
    }
    getPage() {
        return Math.floor(this.first / this.rows);
    }
    changePageToFirst(event) {
        if (!this.isFirstPage()) {
            this.changePage(0);
        }
        event.preventDefault();
    }
    changePageToPrev(event) {
        this.changePage(this.getPage() - 1);
        event.preventDefault();
    }
    changePageToNext(event) {
        this.changePage(this.getPage() + 1);
        event.preventDefault();
    }
    changePageToLast(event) {
        if (!this.isLastPage()) {
            this.changePage(this.getPageCount() - 1);
        }
        event.preventDefault();
    }
    onPageLinkClick(event, page) {
        this.changePage(page);
        event.preventDefault();
    }
    onRppChange(event) {
        this.changePage(this.getPage());
    }
    onPageDropdownChange(event) {
        this.changePage(event.value);
    }
    updatePaginatorState() {
        this.paginatorState = {
            page: this.getPage(),
            pageCount: this.getPageCount(),
            rows: this.rows,
            first: this.first,
            totalRecords: this.totalRecords
        };
    }
    get currentPageReport() {
        return this.currentPageReportTemplate
            .replace("{currentPage}", String(this.getPage() + 1))
            .replace("{totalPages}", String(this.getPageCount()))
            .replace("{first}", String(this._first + 1))
            .replace("{last}", String(Math.min(this._first + this.rows, this.totalRecords)))
            .replace("{rows}", String(this.rows))
            .replace("{totalRecords}", String(this.totalRecords));
    }
}
Paginator.ɵfac = function Paginator_Factory(t) { return new (t || Paginator)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
Paginator.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Paginator, selectors: [["p-paginator"]], inputs: { pageLinkSize: "pageLinkSize", alwaysShow: "alwaysShow", dropdownScrollHeight: "dropdownScrollHeight", currentPageReportTemplate: "currentPageReportTemplate", showFirstLastIcon: "showFirstLastIcon", totalRecords: "totalRecords", rows: "rows", showPageLinks: "showPageLinks", first: "first", style: "style", styleClass: "styleClass", templateLeft: "templateLeft", templateRight: "templateRight", dropdownAppendTo: "dropdownAppendTo", showCurrentPageReport: "showCurrentPageReport", rowsPerPageOptions: "rowsPerPageOptions", showJumpToPageDropdown: "showJumpToPageDropdown", dropdownItemTemplate: "dropdownItemTemplate" }, outputs: { onPageChange: "onPageChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [[3, "class", "ngStyle", "ngClass", 4, "ngIf"], [3, "ngStyle", "ngClass"], ["class", "p-paginator-left-content", 4, "ngIf"], ["class", "p-paginator-current", 4, "ngIf"], ["type", "button", "pRipple", "", "class", "p-paginator-first p-paginator-element p-link", 3, "disabled", "ngClass", "click", 4, "ngIf"], ["type", "button", "pRipple", "", 1, "p-paginator-prev", "p-paginator-element", "p-link", 3, "disabled", "ngClass", "click"], [1, "p-paginator-icon", "pi", "pi-angle-left"], ["class", "p-paginator-pages", 4, "ngIf"], ["styleClass", "p-paginator-page-options", 3, "options", "ngModel", "appendTo", "scrollHeight", "onChange", 4, "ngIf"], ["type", "button", "pRipple", "", 1, "p-paginator-next", "p-paginator-element", "p-link", 3, "disabled", "ngClass", "click"], [1, "p-paginator-icon", "pi", "pi-angle-right"], ["type", "button", "pRipple", "", "class", "p-paginator-last p-paginator-element p-link", 3, "disabled", "ngClass", "click", 4, "ngIf"], ["styleClass", "p-paginator-rpp-options", 3, "options", "ngModel", "appendTo", "scrollHeight", "ngModelChange", "onChange", 4, "ngIf"], ["class", "p-paginator-right-content", 4, "ngIf"], [1, "p-paginator-left-content"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-paginator-current"], ["type", "button", "pRipple", "", 1, "p-paginator-first", "p-paginator-element", "p-link", 3, "disabled", "ngClass", "click"], [1, "p-paginator-icon", "pi", "pi-angle-double-left"], [1, "p-paginator-pages"], ["type", "button", "class", "p-paginator-page p-paginator-element p-link", "pRipple", "", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["type", "button", "pRipple", "", 1, "p-paginator-page", "p-paginator-element", "p-link", 3, "ngClass", "click"], ["styleClass", "p-paginator-page-options", 3, "options", "ngModel", "appendTo", "scrollHeight", "onChange"], ["pTemplate", "selectedItem"], ["type", "button", "pRipple", "", 1, "p-paginator-last", "p-paginator-element", "p-link", 3, "disabled", "ngClass", "click"], [1, "p-paginator-icon", "pi", "pi-angle-double-right"], ["styleClass", "p-paginator-rpp-options", 3, "options", "ngModel", "appendTo", "scrollHeight", "ngModelChange", "onChange"], [4, "ngIf"], ["pTemplate", "item"], [1, "p-paginator-right-content"]], template: function Paginator_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, Paginator_div_0_Template, 13, 20, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.alwaysShow ? true : ctx.pageLinks && ctx.pageLinks.length > 1);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgStyle, ɵngcc1.NgClass, ɵngcc2.Ripple, ɵngcc1.NgTemplateOutlet, ɵngcc1.NgForOf, ɵngcc3.Dropdown, ɵngcc4.NgControlStatus, ɵngcc4.NgModel, ɵngcc5.PrimeTemplate], styles: [".p-paginator{-ms-flex-align:center;-ms-flex-pack:center;-ms-flex-wrap:wrap;align-items:center;display:-ms-flexbox;display:flex;flex-wrap:wrap;justify-content:center}.p-paginator-left-content{margin-right:auto}.p-paginator-right-content{margin-left:auto}.p-paginator-current,.p-paginator-first,.p-paginator-last,.p-paginator-next,.p-paginator-page,.p-paginator-prev{-moz-user-select:none;-ms-flex-align:center;-ms-flex-pack:center;-ms-user-select:none;-webkit-user-select:none;align-items:center;cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;justify-content:center;line-height:1;overflow:hidden;position:relative;user-select:none}.p-paginator-element:focus{position:relative;z-index:1}"], encapsulation: 2, changeDetection: 0 });
Paginator.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
Paginator.propDecorators = {
    pageLinkSize: [{ type: Input }],
    onPageChange: [{ type: Output }],
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    alwaysShow: [{ type: Input }],
    templateLeft: [{ type: Input }],
    templateRight: [{ type: Input }],
    dropdownAppendTo: [{ type: Input }],
    dropdownScrollHeight: [{ type: Input }],
    currentPageReportTemplate: [{ type: Input }],
    showCurrentPageReport: [{ type: Input }],
    showFirstLastIcon: [{ type: Input }],
    totalRecords: [{ type: Input }],
    rows: [{ type: Input }],
    rowsPerPageOptions: [{ type: Input }],
    showJumpToPageDropdown: [{ type: Input }],
    showPageLinks: [{ type: Input }],
    dropdownItemTemplate: [{ type: Input }],
    first: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Paginator, [{
        type: Component,
        args: [{
                selector: 'p-paginator',
                template: `
        <div [class]="styleClass" [ngStyle]="style" [ngClass]="'p-paginator p-component'" *ngIf="alwaysShow ? true : (pageLinks && pageLinks.length > 1)">
            <div class="p-paginator-left-content" *ngIf="templateLeft">
                <ng-container *ngTemplateOutlet="templateLeft; context: {$implicit: paginatorState}"></ng-container>
            </div>
            <span class="p-paginator-current" *ngIf="showCurrentPageReport">{{currentPageReport}}</span>
            <button *ngIf="showFirstLastIcon" type="button" [disabled]="isFirstPage()" (click)="changePageToFirst($event)" pRipple
                    class="p-paginator-first p-paginator-element p-link" [ngClass]="{'p-disabled':isFirstPage()}">
                <span class="p-paginator-icon pi pi-angle-double-left"></span>
            </button>
            <button type="button" [disabled]="isFirstPage()" (click)="changePageToPrev($event)" pRipple
                    class="p-paginator-prev p-paginator-element p-link" [ngClass]="{'p-disabled':isFirstPage()}">
                <span class="p-paginator-icon pi pi-angle-left"></span>
            </button>
            <span class="p-paginator-pages" *ngIf="showPageLinks">
                <button type="button" *ngFor="let pageLink of pageLinks" class="p-paginator-page p-paginator-element p-link" [ngClass]="{'p-highlight': (pageLink-1 == getPage())}"
                    (click)="onPageLinkClick($event, pageLink - 1)" pRipple>{{pageLink}}</button>
            </span>
            <p-dropdown [options]="pageItems" [ngModel]="getPage()" *ngIf="showJumpToPageDropdown"  styleClass="p-paginator-page-options"
                (onChange)="onPageDropdownChange($event)" [appendTo]="dropdownAppendTo" [scrollHeight]="dropdownScrollHeight">
                <ng-template pTemplate="selectedItem">{{currentPageReport}}</ng-template>
            </p-dropdown>
            <button type="button" [disabled]="isLastPage()" (click)="changePageToNext($event)" pRipple
                    class="p-paginator-next p-paginator-element p-link" [ngClass]="{'p-disabled':isLastPage()}">
                <span class="p-paginator-icon pi pi-angle-right"></span>
            </button>
            <button *ngIf="showFirstLastIcon" type="button" [disabled]="isLastPage()" (click)="changePageToLast($event)" pRipple
                    class="p-paginator-last p-paginator-element p-link" [ngClass]="{'p-disabled':isLastPage()}">
                <span class="p-paginator-icon pi pi-angle-double-right"></span>
            </button>
            <p-dropdown [options]="rowsPerPageItems" [(ngModel)]="rows" *ngIf="rowsPerPageOptions" styleClass="p-paginator-rpp-options"
                (onChange)="onRppChange($event)" [appendTo]="dropdownAppendTo" [scrollHeight]="dropdownScrollHeight">
                <ng-container *ngIf="dropdownItemTemplate">
                    <ng-template let-item pTemplate="item">
                        <ng-container *ngTemplateOutlet="dropdownItemTemplate; context: {$implicit: item}">
                        </ng-container>
                    </ng-template>
                </ng-container>
            </p-dropdown>
            <div class="p-paginator-right-content" *ngIf="templateRight">
                <ng-container *ngTemplateOutlet="templateRight; context: {$implicit: paginatorState}"></ng-container>
            </div>
        </div>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-paginator{-ms-flex-align:center;-ms-flex-pack:center;-ms-flex-wrap:wrap;align-items:center;display:-ms-flexbox;display:flex;flex-wrap:wrap;justify-content:center}.p-paginator-left-content{margin-right:auto}.p-paginator-right-content{margin-left:auto}.p-paginator-current,.p-paginator-first,.p-paginator-last,.p-paginator-next,.p-paginator-page,.p-paginator-prev{-moz-user-select:none;-ms-flex-align:center;-ms-flex-pack:center;-ms-user-select:none;-webkit-user-select:none;align-items:center;cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;justify-content:center;line-height:1;overflow:hidden;position:relative;user-select:none}.p-paginator-element:focus{position:relative;z-index:1}"]
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }]; }, { pageLinkSize: [{
            type: Input
        }], onPageChange: [{
            type: Output
        }], alwaysShow: [{
            type: Input
        }], dropdownScrollHeight: [{
            type: Input
        }], currentPageReportTemplate: [{
            type: Input
        }], showFirstLastIcon: [{
            type: Input
        }], totalRecords: [{
            type: Input
        }], rows: [{
            type: Input
        }], showPageLinks: [{
            type: Input
        }], first: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], templateLeft: [{
            type: Input
        }], templateRight: [{
            type: Input
        }], dropdownAppendTo: [{
            type: Input
        }], showCurrentPageReport: [{
            type: Input
        }], rowsPerPageOptions: [{
            type: Input
        }], showJumpToPageDropdown: [{
            type: Input
        }], dropdownItemTemplate: [{
            type: Input
        }] }); })();
class PaginatorModule {
}
PaginatorModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: PaginatorModule });
PaginatorModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function PaginatorModule_Factory(t) { return new (t || PaginatorModule)(); }, imports: [[CommonModule, DropdownModule, FormsModule, SharedModule, RippleModule], DropdownModule, FormsModule, SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(PaginatorModule, { declarations: function () { return [Paginator]; }, imports: function () { return [CommonModule, DropdownModule, FormsModule, SharedModule, RippleModule]; }, exports: function () { return [Paginator, DropdownModule, FormsModule, SharedModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PaginatorModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, DropdownModule, FormsModule, SharedModule, RippleModule],
                exports: [Paginator, DropdownModule, FormsModule, SharedModule],
                declarations: [Paginator]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { Paginator, PaginatorModule };

//# sourceMappingURL=primeng-lts-paginator.js.map