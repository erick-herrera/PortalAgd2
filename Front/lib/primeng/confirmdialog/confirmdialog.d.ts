import { ElementRef, OnDestroy, Renderer2, NgZone, ChangeDetectorRef, QueryList, TemplateRef, AfterContentInit } from '@angular/core';
import { AnimationEvent } from '@angular/animations';
import { Confirmation } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { Subscription } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'primeng/button';
import * as ɵngcc3 from 'primeng/api';
export declare class ConfirmDialog implements AfterContentInit, OnDestroy {
    el: ElementRef;
    renderer: Renderer2;
    private confirmationService;
    zone: NgZone;
    private cd;
    header: string;
    icon: string;
    message: string;
    style: any;
    styleClass: string;
    maskStyleClass: string;
    acceptIcon: string;
    acceptLabel: string;
    acceptVisible: boolean;
    rejectIcon: string;
    rejectLabel: string;
    rejectVisible: boolean;
    acceptButtonStyleClass: string;
    rejectButtonStyleClass: string;
    closeOnEscape: boolean;
    blockScroll: boolean;
    rtl: boolean;
    closable: boolean;
    appendTo: any;
    key: string;
    autoZIndex: boolean;
    baseZIndex: number;
    transitionOptions: string;
    focusTrap: boolean;
    defaultFocus: string;
    get visible(): any;
    set visible(value: any);
    get position(): string;
    set position(value: string);
    footer: any;
    contentViewChild: ElementRef;
    templates: QueryList<any>;
    ngAfterContentInit(): void;
    footerTemplate: TemplateRef<any>;
    confirmation: Confirmation;
    _visible: boolean;
    maskVisible: boolean;
    documentEscapeListener: any;
    container: HTMLDivElement;
    wrapper: HTMLElement;
    contentContainer: HTMLDivElement;
    subscription: Subscription;
    preWidth: number;
    _position: string;
    transformOptions: any;
    confirmationOptions: Confirmation;
    constructor(el: ElementRef, renderer: Renderer2, confirmationService: ConfirmationService, zone: NgZone, cd: ChangeDetectorRef);
    option(name: string): any;
    onAnimationStart(event: AnimationEvent): void;
    onAnimationEnd(event: AnimationEvent): void;
    getElementToFocus(): any;
    appendContainer(): void;
    restoreAppend(): void;
    enableModality(): void;
    disableModality(): void;
    close(event: Event): void;
    hide(): void;
    moveOnTop(): void;
    getMaskClass(): {
        'p-dialog-mask p-component-overlay': boolean;
        'p-dialog-mask-scrollblocker': boolean;
    };
    getPositionClass(): string;
    bindGlobalListeners(): void;
    unbindGlobalListeners(): void;
    onOverlayHide(): void;
    ngOnDestroy(): void;
    accept(): void;
    reject(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ConfirmDialog, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ConfirmDialog, "p-confirmDialog", never, { "acceptIcon": "acceptIcon"; "acceptLabel": "acceptLabel"; "acceptVisible": "acceptVisible"; "rejectIcon": "rejectIcon"; "rejectLabel": "rejectLabel"; "rejectVisible": "rejectVisible"; "closeOnEscape": "closeOnEscape"; "blockScroll": "blockScroll"; "closable": "closable"; "autoZIndex": "autoZIndex"; "baseZIndex": "baseZIndex"; "transitionOptions": "transitionOptions"; "focusTrap": "focusTrap"; "defaultFocus": "defaultFocus"; "visible": "visible"; "position": "position"; "header": "header"; "icon": "icon"; "message": "message"; "style": "style"; "styleClass": "styleClass"; "maskStyleClass": "maskStyleClass"; "acceptButtonStyleClass": "acceptButtonStyleClass"; "rejectButtonStyleClass": "rejectButtonStyleClass"; "rtl": "rtl"; "appendTo": "appendTo"; "key": "key"; }, {}, ["footer", "templates"], ["p-footer"]>;
}
export declare class ConfirmDialogModule {
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<ConfirmDialogModule, [typeof ConfirmDialog], [typeof ɵngcc1.CommonModule, typeof ɵngcc2.ButtonModule], [typeof ConfirmDialog, typeof ɵngcc2.ButtonModule, typeof ɵngcc3.SharedModule]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<ConfirmDialogModule>;
}

//# sourceMappingURL=confirmdialog.d.ts.map