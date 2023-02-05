import { ElementRef, Renderer2, OnDestroy, ChangeDetectorRef, EventEmitter } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AnimationEvent } from '@angular/animations';
export declare class TieredMenuSub implements OnDestroy {
    el: ElementRef;
    renderer: Renderer2;
    private cd;
    item: MenuItem;
    root: boolean;
    autoDisplay: boolean;
    autoZIndex: boolean;
    baseZIndex: number;
    mobileActive: boolean;
    get parentActive(): boolean;
    set parentActive(value: boolean);
    leafClick: EventEmitter<any>;
    _parentActive: boolean;
    documentClickListener: any;
    menuHoverActive: boolean;
    activeItem: any;
    constructor(el: ElementRef, renderer: Renderer2, cd: ChangeDetectorRef);
    onItemMouseEnter(event: any, item: any): void;
    onItemClick(event: any, item: any): void;
    onLeafClick(): void;
    bindDocumentClickListener(): void;
    unbindDocumentClickListener(): void;
    ngOnDestroy(): void;
}
export declare class TieredMenu implements OnDestroy {
    el: ElementRef;
    renderer: Renderer2;
    cd: ChangeDetectorRef;
    model: MenuItem[];
    popup: boolean;
    style: any;
    styleClass: string;
    appendTo: any;
    autoZIndex: boolean;
    baseZIndex: number;
    showTransitionOptions: string;
    hideTransitionOptions: string;
    parentActive: boolean;
    container: HTMLDivElement;
    documentClickListener: any;
    documentResizeListener: any;
    preventDocumentDefault: boolean;
    scrollHandler: any;
    target: any;
    visible: boolean;
    constructor(el: ElementRef, renderer: Renderer2, cd: ChangeDetectorRef);
    toggle(event: any): void;
    show(event: any): void;
    onOverlayAnimationStart(event: AnimationEvent): void;
    appendOverlay(): void;
    restoreOverlayAppend(): void;
    moveOnTop(): void;
    hide(): void;
    onWindowResize(): void;
    onLeafClick(): void;
    bindDocumentClickListener(): void;
    unbindDocumentClickListener(): void;
    bindDocumentResizeListener(): void;
    unbindDocumentResizeListener(): void;
    bindScrollListener(): void;
    unbindScrollListener(): void;
    onOverlayHide(): void;
    ngOnDestroy(): void;
}
export declare class TieredMenuModule {
}
