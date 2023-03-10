import { Component, ViewEncapsulation, Inject, forwardRef, Input, EventEmitter, ChangeDetectionStrategy, ElementRef, Renderer2, ChangeDetectorRef, ViewChild, Output, NgModule } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { DomHandler, ConnectedOverlayScrollHandler } from 'primeng-lts/dom';
import { RouterModule } from '@angular/router';
import { RippleModule } from 'primeng-lts/ripple';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '@angular/router';
import * as ɵngcc3 from 'primeng-lts/ripple';

const _c0 = ["pMenuItemContent", ""];
function MenuItemContent_a_0_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 6);
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r2.item.icon);
} }
function MenuItemContent_a_0_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 7);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r3.item.label);
} }
function MenuItemContent_a_0_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 8);
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r5.item.label, ɵngcc0.ɵɵsanitizeHtml);
} }
const _c1 = function (a0) { return { "p-disabled": a0 }; };
function MenuItemContent_a_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 2);
    ɵngcc0.ɵɵlistener("click", function MenuItemContent_a_0_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r7); const ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.menu.itemClick($event, ctx_r6.item); });
    ɵngcc0.ɵɵtemplate(1, MenuItemContent_a_0_span_1_Template, 1, 1, "span", 3);
    ɵngcc0.ɵɵtemplate(2, MenuItemContent_a_0_span_2_Template, 2, 1, "span", 4);
    ɵngcc0.ɵɵtemplate(3, MenuItemContent_a_0_ng_template_3_Template, 1, 1, "ng-template", null, 5, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _r4 = ɵngcc0.ɵɵreference(4);
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(10, _c1, ctx_r0.item.disabled));
    ɵngcc0.ɵɵattribute("href", ctx_r0.item.url || null, ɵngcc0.ɵɵsanitizeUrl)("tabindex", ctx_r0.item.disabled ? null : "0")("data-automationid", ctx_r0.item.automationId)("target", ctx_r0.item.target)("title", ctx_r0.item.title)("id", ctx_r0.item.id);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.item.icon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.item.escape !== false)("ngIfElse", _r4);
} }
function MenuItemContent_a_1_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 6);
} if (rf & 2) {
    const ctx_r8 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r8.item.icon);
} }
function MenuItemContent_a_1_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 7);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r9.item.label);
} }
function MenuItemContent_a_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 8);
} if (rf & 2) {
    const ctx_r11 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r11.item.label, ɵngcc0.ɵɵsanitizeHtml);
} }
const _c2 = function () { return { exact: false }; };
function MenuItemContent_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 9);
    ɵngcc0.ɵɵlistener("click", function MenuItemContent_a_1_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); const ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.menu.itemClick($event, ctx_r12.item); });
    ɵngcc0.ɵɵtemplate(1, MenuItemContent_a_1_span_1_Template, 1, 1, "span", 3);
    ɵngcc0.ɵɵtemplate(2, MenuItemContent_a_1_span_2_Template, 2, 1, "span", 4);
    ɵngcc0.ɵɵtemplate(3, MenuItemContent_a_1_ng_template_3_Template, 1, 1, "ng-template", null, 10, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _r10 = ɵngcc0.ɵɵreference(4);
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("routerLink", ctx_r1.item.routerLink)("queryParams", ctx_r1.item.queryParams)("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", ctx_r1.item.routerLinkActiveOptions || ɵngcc0.ɵɵpureFunction0(19, _c2))("ngClass", ɵngcc0.ɵɵpureFunction1(20, _c1, ctx_r1.item.disabled))("fragment", ctx_r1.item.fragment)("queryParamsHandling", ctx_r1.item.queryParamsHandling)("preserveFragment", ctx_r1.item.preserveFragment)("skipLocationChange", ctx_r1.item.skipLocationChange)("replaceUrl", ctx_r1.item.replaceUrl)("state", ctx_r1.item.state);
    ɵngcc0.ɵɵattribute("data-automationid", ctx_r1.item.automationId)("target", ctx_r1.item.target)("id", ctx_r1.item.id)("tabindex", ctx_r1.item.disabled ? null : "0")("title", ctx_r1.item.title);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.item.icon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.item.escape !== false)("ngIfElse", _r10);
} }
const _c3 = ["container"];
const _c4 = function (a0) { return { "p-hidden": a0 }; };
function Menu_div_0_3_ng_template_0_li_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "li", 8);
} if (rf & 2) {
    const submenu_r5 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(1, _c4, submenu_r5.visible === false));
} }
function Menu_div_0_3_ng_template_0_li_1_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const submenu_r5 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(submenu_r5.label);
} }
function Menu_div_0_3_ng_template_0_li_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 12);
} if (rf & 2) {
    const submenu_r5 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵproperty("innerHTML", submenu_r5.label, ɵngcc0.ɵɵsanitizeHtml);
} }
function Menu_div_0_3_ng_template_0_li_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 9);
    ɵngcc0.ɵɵtemplate(1, Menu_div_0_3_ng_template_0_li_1_span_1_Template, 2, 1, "span", 10);
    ɵngcc0.ɵɵtemplate(2, Menu_div_0_3_ng_template_0_li_1_ng_template_2_Template, 1, 1, "ng-template", null, 11, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _r11 = ɵngcc0.ɵɵreference(3);
    const submenu_r5 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(4, _c4, submenu_r5.visible === false));
    ɵngcc0.ɵɵattribute("data-automationid", submenu_r5.automationId);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", submenu_r5.escape !== false)("ngIfElse", _r11);
} }
function Menu_div_0_3_ng_template_0_ng_template_2_li_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "li", 8);
} if (rf & 2) {
    const item_r16 = ɵngcc0.ɵɵnextContext().$implicit;
    const submenu_r5 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(1, _c4, item_r16.visible === false || submenu_r5.visible === false));
} }
function Menu_div_0_3_ng_template_0_ng_template_2_li_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "li", 14);
} if (rf & 2) {
    const item_r16 = ɵngcc0.ɵɵnextContext().$implicit;
    const submenu_r5 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵclassMap(item_r16.styleClass);
    ɵngcc0.ɵɵproperty("pMenuItemContent", item_r16)("ngClass", ɵngcc0.ɵɵpureFunction1(5, _c4, item_r16.visible === false || submenu_r5.visible === false))("ngStyle", item_r16.style);
} }
function Menu_div_0_3_ng_template_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, Menu_div_0_3_ng_template_0_ng_template_2_li_0_Template, 1, 3, "li", 6);
    ɵngcc0.ɵɵtemplate(1, Menu_div_0_3_ng_template_0_ng_template_2_li_1_Template, 1, 7, "li", 13);
} if (rf & 2) {
    const item_r16 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("ngIf", item_r16.separator);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !item_r16.separator);
} }
function Menu_div_0_3_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, Menu_div_0_3_ng_template_0_li_0_Template, 1, 3, "li", 6);
    ɵngcc0.ɵɵtemplate(1, Menu_div_0_3_ng_template_0_li_1_Template, 4, 6, "li", 7);
    ɵngcc0.ɵɵtemplate(2, Menu_div_0_3_ng_template_0_ng_template_2_Template, 2, 2, "ng-template", 5);
} if (rf & 2) {
    const submenu_r5 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("ngIf", submenu_r5.separator);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !submenu_r5.separator);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", submenu_r5.items);
} }
function Menu_div_0_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, Menu_div_0_3_ng_template_0_Template, 3, 3, "ng-template", 5);
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r2.model);
} }
function Menu_div_0_4_ng_template_0_li_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "li", 8);
} if (rf & 2) {
    const item_r24 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(1, _c4, item_r24.visible === false));
} }
function Menu_div_0_4_ng_template_0_li_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "li", 14);
} if (rf & 2) {
    const item_r24 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵclassMap(item_r24.styleClass);
    ɵngcc0.ɵɵproperty("pMenuItemContent", item_r24)("ngClass", ɵngcc0.ɵɵpureFunction1(5, _c4, item_r24.visible === false))("ngStyle", item_r24.style);
} }
function Menu_div_0_4_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, Menu_div_0_4_ng_template_0_li_0_Template, 1, 3, "li", 6);
    ɵngcc0.ɵɵtemplate(1, Menu_div_0_4_ng_template_0_li_1_Template, 1, 7, "li", 13);
} if (rf & 2) {
    const item_r24 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("ngIf", item_r24.separator);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !item_r24.separator);
} }
function Menu_div_0_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, Menu_div_0_4_ng_template_0_Template, 2, 2, "ng-template", 5);
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r3.model);
} }
const _c5 = function (a1) { return { "p-menu p-component": true, "p-menu-overlay": a1 }; };
const _c6 = function (a0, a1) { return { showTransitionParams: a0, hideTransitionParams: a1 }; };
const _c7 = function (a1) { return { value: "visible", params: a1 }; };
function Menu_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r30 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 1, 2);
    ɵngcc0.ɵɵlistener("click", function Menu_div_0_Template_div_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r30); const ctx_r29 = ɵngcc0.ɵɵnextContext(); return ctx_r29.preventDocumentDefault = true; })("@overlayAnimation.start", function Menu_div_0_Template_div_animation_overlayAnimation_start_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r30); const ctx_r31 = ɵngcc0.ɵɵnextContext(); return ctx_r31.onOverlayAnimationStart($event); });
    ɵngcc0.ɵɵelementStart(2, "ul", 3);
    ɵngcc0.ɵɵtemplate(3, Menu_div_0_3_Template, 1, 1, undefined, 4);
    ɵngcc0.ɵɵtemplate(4, Menu_div_0_4_Template, 1, 1, undefined, 4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r0.styleClass);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(8, _c5, ctx_r0.popup))("ngStyle", ctx_r0.style)("@overlayAnimation", ɵngcc0.ɵɵpureFunction1(13, _c7, ɵngcc0.ɵɵpureFunction2(10, _c6, ctx_r0.showTransitionOptions, ctx_r0.hideTransitionOptions)))("@.disabled", ctx_r0.popup !== true);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.hasSubMenu());
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r0.hasSubMenu());
} }
class MenuItemContent {
    constructor(menu) {
        this.menu = menu;
    }
}
MenuItemContent.ɵfac = function MenuItemContent_Factory(t) { return new (t || MenuItemContent)(ɵngcc0.ɵɵdirectiveInject(forwardRef(() => Menu))); };
MenuItemContent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MenuItemContent, selectors: [["", "pMenuItemContent", ""]], inputs: { item: ["pMenuItemContent", "item"] }, attrs: _c0, decls: 2, vars: 2, consts: [["class", "p-menuitem-link", "role", "menuitem", 3, "ngClass", "click", 4, "ngIf"], ["class", "p-menuitem-link", "role", "menuitem", "pRipple", "", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "ngClass", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click", 4, "ngIf"], ["role", "menuitem", 1, "p-menuitem-link", 3, "ngClass", "click"], ["class", "p-menuitem-icon", 3, "ngClass", 4, "ngIf"], ["class", "p-menuitem-text", 4, "ngIf", "ngIfElse"], ["htmlLabel", ""], [1, "p-menuitem-icon", 3, "ngClass"], [1, "p-menuitem-text"], [1, "p-menuitem-text", 3, "innerHTML"], ["role", "menuitem", "pRipple", "", 1, "p-menuitem-link", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "ngClass", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click"], ["htmlRouteLabel", ""]], template: function MenuItemContent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, MenuItemContent_a_0_Template, 5, 12, "a", 0);
        ɵngcc0.ɵɵtemplate(1, MenuItemContent_a_1_Template, 5, 22, "a", 1);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", !ctx.item.routerLink);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.item.routerLink);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgClass, ɵngcc2.RouterLinkWithHref, ɵngcc3.Ripple, ɵngcc2.RouterLinkActive], encapsulation: 2 });
MenuItemContent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [forwardRef(() => Menu),] }] }
];
MenuItemContent.propDecorators = {
    item: [{ type: Input, args: ["pMenuItemContent",] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MenuItemContent, [{
        type: Component,
        args: [{
                selector: '[pMenuItemContent]',
                template: `
        <a *ngIf="!item.routerLink" [attr.href]="item.url||null" class="p-menuitem-link" [attr.tabindex]="item.disabled ? null : '0'" [attr.data-automationid]="item.automationId" [attr.target]="item.target" [attr.title]="item.title" [attr.id]="item.id"
            [ngClass]="{'p-disabled':item.disabled}" (click)="menu.itemClick($event, item)" role="menuitem">
            <span class="p-menuitem-icon" *ngIf="item.icon" [ngClass]="item.icon"></span>
            <span class="p-menuitem-text" *ngIf="item.escape !== false; else htmlLabel">{{item.label}}</span>
            <ng-template #htmlLabel><span class="p-menuitem-text" [innerHTML]="item.label"></span></ng-template>
        </a>
        <a *ngIf="item.routerLink" [routerLink]="item.routerLink" [attr.data-automationid]="item.automationId" [queryParams]="item.queryParams" [routerLinkActive]="'p-menuitem-link-active'"
            [routerLinkActiveOptions]="item.routerLinkActiveOptions||{exact:false}" class="p-menuitem-link" [attr.target]="item.target" [attr.id]="item.id" [attr.tabindex]="item.disabled ? null : '0'"
            [attr.title]="item.title" [ngClass]="{'p-disabled':item.disabled}" (click)="menu.itemClick($event, item)" role="menuitem" pRipple
            [fragment]="item.fragment" [queryParamsHandling]="item.queryParamsHandling" [preserveFragment]="item.preserveFragment" [skipLocationChange]="item.skipLocationChange" [replaceUrl]="item.replaceUrl" [state]="item.state">
            <span class="p-menuitem-icon" *ngIf="item.icon" [ngClass]="item.icon"></span>
            <span class="p-menuitem-text" *ngIf="item.escape !== false; else htmlRouteLabel">{{item.label}}</span>
            <ng-template #htmlRouteLabel><span class="p-menuitem-text" [innerHTML]="item.label"></span></ng-template>
        </a>
    `,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [forwardRef(() => Menu)]
            }] }]; }, { item: [{
            type: Input,
            args: ["pMenuItemContent"]
        }] }); })();
class Menu {
    constructor(el, renderer, cd) {
        this.el = el;
        this.renderer = renderer;
        this.cd = cd;
        this.autoZIndex = true;
        this.baseZIndex = 0;
        this.showTransitionOptions = '.12s cubic-bezier(0, 0, 0.2, 1)';
        this.hideTransitionOptions = '.1s linear';
        this.onShow = new EventEmitter();
        this.onHide = new EventEmitter();
    }
    toggle(event) {
        if (this.visible)
            this.hide();
        else
            this.show(event);
        this.preventDocumentDefault = true;
    }
    show(event) {
        this.target = event.currentTarget;
        this.relativeAlign = event.relativeAlign;
        this.visible = true;
        this.preventDocumentDefault = true;
        this.cd.markForCheck();
    }
    onOverlayAnimationStart(event) {
        switch (event.toState) {
            case 'visible':
                if (this.popup) {
                    this.container = event.element;
                    this.moveOnTop();
                    this.onShow.emit({});
                    this.appendOverlay();
                    this.alignOverlay();
                    this.bindDocumentClickListener();
                    this.bindDocumentResizeListener();
                    this.bindScrollListener();
                }
                break;
            case 'void':
                this.onOverlayHide();
                this.onHide.emit({});
                break;
        }
    }
    alignOverlay() {
        if (this.relativeAlign)
            DomHandler.relativePosition(this.container, this.target);
        else
            DomHandler.absolutePosition(this.container, this.target);
    }
    appendOverlay() {
        if (this.appendTo) {
            if (this.appendTo === 'body')
                document.body.appendChild(this.container);
            else
                DomHandler.appendChild(this.container, this.appendTo);
        }
    }
    restoreOverlayAppend() {
        if (this.container && this.appendTo) {
            this.el.nativeElement.appendChild(this.container);
        }
    }
    moveOnTop() {
        if (this.autoZIndex) {
            this.container.style.zIndex = String(this.baseZIndex + (++DomHandler.zindex));
        }
    }
    hide() {
        this.visible = false;
        this.relativeAlign = false;
        this.cd.markForCheck();
    }
    onWindowResize() {
        this.hide();
    }
    itemClick(event, item) {
        if (item.disabled) {
            event.preventDefault();
            return;
        }
        if (!item.url) {
            event.preventDefault();
        }
        if (item.command) {
            item.command({
                originalEvent: event,
                item: item
            });
        }
        if (this.popup) {
            this.hide();
        }
    }
    bindDocumentClickListener() {
        if (!this.documentClickListener) {
            const documentTarget = this.el ? this.el.nativeElement.ownerDocument : 'document';
            this.documentClickListener = this.renderer.listen(documentTarget, 'click', () => {
                if (!this.preventDocumentDefault) {
                    this.hide();
                }
                this.preventDocumentDefault = false;
            });
        }
    }
    unbindDocumentClickListener() {
        if (this.documentClickListener) {
            this.documentClickListener();
            this.documentClickListener = null;
        }
    }
    bindDocumentResizeListener() {
        this.documentResizeListener = this.onWindowResize.bind(this);
        window.addEventListener('resize', this.documentResizeListener);
    }
    unbindDocumentResizeListener() {
        if (this.documentResizeListener) {
            window.removeEventListener('resize', this.documentResizeListener);
            this.documentResizeListener = null;
        }
    }
    bindScrollListener() {
        if (!this.scrollHandler) {
            this.scrollHandler = new ConnectedOverlayScrollHandler(this.target, () => {
                if (this.visible) {
                    this.hide();
                }
            });
        }
        this.scrollHandler.bindScrollListener();
    }
    unbindScrollListener() {
        if (this.scrollHandler) {
            this.scrollHandler.unbindScrollListener();
        }
    }
    onOverlayHide() {
        this.unbindDocumentClickListener();
        this.unbindDocumentResizeListener();
        this.unbindScrollListener();
        this.preventDocumentDefault = false;
        this.target = null;
    }
    ngOnDestroy() {
        if (this.popup) {
            if (this.scrollHandler) {
                this.scrollHandler.destroy();
                this.scrollHandler = null;
            }
            this.restoreOverlayAppend();
            this.onOverlayHide();
        }
    }
    hasSubMenu() {
        if (this.model) {
            for (var item of this.model) {
                if (item.items) {
                    return true;
                }
            }
        }
        return false;
    }
}
Menu.ɵfac = function Menu_Factory(t) { return new (t || Menu)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
Menu.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Menu, selectors: [["p-menu"]], viewQuery: function Menu_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c3, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.containerViewChild = _t.first);
    } }, inputs: { autoZIndex: "autoZIndex", baseZIndex: "baseZIndex", showTransitionOptions: "showTransitionOptions", hideTransitionOptions: "hideTransitionOptions", model: "model", popup: "popup", style: "style", styleClass: "styleClass", appendTo: "appendTo" }, outputs: { onShow: "onShow", onHide: "onHide" }, decls: 1, vars: 1, consts: [[3, "ngClass", "class", "ngStyle", "click", 4, "ngIf"], [3, "ngClass", "ngStyle", "click"], ["container", ""], [1, "p-menu-list", "p-reset"], [4, "ngIf"], ["ngFor", "", 3, "ngForOf"], ["class", "p-menu-separator", 3, "ngClass", 4, "ngIf"], ["class", "p-submenu-header", 3, "ngClass", 4, "ngIf"], [1, "p-menu-separator", 3, "ngClass"], [1, "p-submenu-header", 3, "ngClass"], [4, "ngIf", "ngIfElse"], ["htmlSubmenuLabel", ""], [3, "innerHTML"], ["class", "p-menuitem", 3, "pMenuItemContent", "ngClass", "ngStyle", "class", 4, "ngIf"], [1, "p-menuitem", 3, "pMenuItemContent", "ngClass", "ngStyle"]], template: function Menu_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, Menu_div_0_Template, 5, 15, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", !ctx.popup || ctx.visible);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgForOf, MenuItemContent], styles: [".p-menu-overlay{position:absolute}.p-menu ul{list-style:none;margin:0;padding:0}.p-menu .p-menuitem-link{-ms-flex-align:center;align-items:center;cursor:pointer;display:-ms-flexbox;display:flex;overflow:hidden;position:relative;text-decoration:none}.p-menu .p-menuitem-text{line-height:1}"], encapsulation: 2, data: { animation: [
            trigger('overlayAnimation', [
                transition(':enter', [
                    style({ opacity: 0, transform: 'scaleY(0.8)' }),
                    animate('{{showTransitionParams}}')
                ]),
                transition(':leave', [
                    animate('{{hideTransitionParams}}', style({ opacity: 0 }))
                ])
            ])
        ] }, changeDetection: 0 });
Menu.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
Menu.propDecorators = {
    model: [{ type: Input }],
    popup: [{ type: Input }],
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    appendTo: [{ type: Input }],
    autoZIndex: [{ type: Input }],
    baseZIndex: [{ type: Input }],
    showTransitionOptions: [{ type: Input }],
    hideTransitionOptions: [{ type: Input }],
    containerViewChild: [{ type: ViewChild, args: ['container',] }],
    onShow: [{ type: Output }],
    onHide: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Menu, [{
        type: Component,
        args: [{
                selector: 'p-menu',
                template: `
        <div #container [ngClass]="{'p-menu p-component': true, 'p-menu-overlay': popup}"
            [class]="styleClass" [ngStyle]="style" (click)="preventDocumentDefault=true" *ngIf="!popup || visible"
            [@overlayAnimation]="{value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}" [@.disabled]="popup !== true" (@overlayAnimation.start)="onOverlayAnimationStart($event)">
            <ul class="p-menu-list p-reset">
                <ng-template ngFor let-submenu [ngForOf]="model" *ngIf="hasSubMenu()">
                    <li class="p-menu-separator" *ngIf="submenu.separator" [ngClass]="{'p-hidden': submenu.visible === false}"></li>
                    <li class="p-submenu-header" [attr.data-automationid]="submenu.automationId" *ngIf="!submenu.separator" [ngClass]="{'p-hidden': submenu.visible === false}">
                        <span *ngIf="submenu.escape !== false; else htmlSubmenuLabel">{{submenu.label}}</span>
                        <ng-template #htmlSubmenuLabel><span [innerHTML]="submenu.label"></span></ng-template>
                    </li>
                    <ng-template ngFor let-item [ngForOf]="submenu.items">
                        <li class="p-menu-separator" *ngIf="item.separator" [ngClass]="{'p-hidden': (item.visible === false || submenu.visible === false)}"></li>
                        <li class="p-menuitem" *ngIf="!item.separator" [pMenuItemContent]="item" [ngClass]="{'p-hidden': (item.visible === false || submenu.visible === false)}" [ngStyle]="item.style" [class]="item.styleClass"></li>
                    </ng-template>
                </ng-template>
                <ng-template ngFor let-item [ngForOf]="model" *ngIf="!hasSubMenu()">
                    <li class="p-menu-separator" *ngIf="item.separator" [ngClass]="{'p-hidden': item.visible === false}"></li>
                    <li class="p-menuitem" *ngIf="!item.separator" [pMenuItemContent]="item" [ngClass]="{'p-hidden': item.visible === false}" [ngStyle]="item.style" [class]="item.styleClass"></li>
                </ng-template>
            </ul>
        </div>
    `,
                animations: [
                    trigger('overlayAnimation', [
                        transition(':enter', [
                            style({ opacity: 0, transform: 'scaleY(0.8)' }),
                            animate('{{showTransitionParams}}')
                        ]),
                        transition(':leave', [
                            animate('{{hideTransitionParams}}', style({ opacity: 0 }))
                        ])
                    ])
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-menu-overlay{position:absolute}.p-menu ul{list-style:none;margin:0;padding:0}.p-menu .p-menuitem-link{-ms-flex-align:center;align-items:center;cursor:pointer;display:-ms-flexbox;display:flex;overflow:hidden;position:relative;text-decoration:none}.p-menu .p-menuitem-text{line-height:1}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ChangeDetectorRef }]; }, { autoZIndex: [{
            type: Input
        }], baseZIndex: [{
            type: Input
        }], showTransitionOptions: [{
            type: Input
        }], hideTransitionOptions: [{
            type: Input
        }], onShow: [{
            type: Output
        }], onHide: [{
            type: Output
        }], model: [{
            type: Input
        }], popup: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], appendTo: [{
            type: Input
        }], containerViewChild: [{
            type: ViewChild,
            args: ['container']
        }] }); })();
class MenuModule {
}
MenuModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MenuModule });
MenuModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MenuModule_Factory(t) { return new (t || MenuModule)(); }, imports: [[CommonModule, RouterModule, RippleModule], RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MenuModule, { declarations: function () { return [Menu, MenuItemContent]; }, imports: function () { return [CommonModule, RouterModule, RippleModule]; }, exports: function () { return [Menu, RouterModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MenuModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, RouterModule, RippleModule],
                exports: [Menu, RouterModule],
                declarations: [Menu, MenuItemContent]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { Menu, MenuItemContent, MenuModule };

//# sourceMappingURL=primeng-lts-menu.js.map