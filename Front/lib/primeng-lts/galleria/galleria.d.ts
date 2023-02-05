import { ElementRef, OnDestroy, EventEmitter, QueryList, TemplateRef, OnInit, OnChanges, AfterContentChecked, SimpleChanges, ChangeDetectorRef } from '@angular/core';
export declare class Galleria implements OnChanges, OnDestroy {
    element: ElementRef;
    cd: ChangeDetectorRef;
    get activeIndex(): number;
    set activeIndex(activeIndex: number);
    fullScreen: boolean;
    id: string;
    value: any[];
    numVisible: number;
    responsiveOptions: any[];
    showItemNavigators: boolean;
    showThumbnailNavigators: boolean;
    showItemNavigatorsOnHover: boolean;
    changeItemOnIndicatorHover: boolean;
    circular: boolean;
    autoPlay: boolean;
    transitionInterval: number;
    showThumbnails: boolean;
    thumbnailsPosition: string;
    verticalThumbnailViewPortHeight: string;
    showIndicators: boolean;
    showIndicatorsOnItem: boolean;
    indicatorsPosition: string;
    baseZIndex: number;
    maskClass: string;
    containerClass: string;
    containerStyle: any;
    mask: ElementRef;
    get visible(): boolean;
    set visible(visible: boolean);
    activeIndexChange: EventEmitter<any>;
    visibleChange: EventEmitter<any>;
    templates: QueryList<any>;
    _visible: boolean;
    _activeIndex: number;
    headerFacet: any;
    footerFacet: any;
    indicatorFacet: any;
    captionFacet: any;
    zIndex: string;
    constructor(element: ElementRef, cd: ChangeDetectorRef);
    ngAfterContentInit(): void;
    ngOnChanges(simpleChanges: SimpleChanges): void;
    onMaskHide(): void;
    onActiveItemChange(index: any): void;
    ngOnDestroy(): void;
}
export declare class GalleriaContent {
    galleria: Galleria;
    cd: ChangeDetectorRef;
    get activeIndex(): number;
    set activeIndex(activeIndex: number);
    value: any[];
    maskHide: EventEmitter<any>;
    activeItemChange: EventEmitter<any>;
    id: string;
    slideShowActicve: boolean;
    _activeIndex: number;
    slideShowActive: boolean;
    interval: any;
    styleClass: string;
    constructor(galleria: Galleria, cd: ChangeDetectorRef);
    galleriaClass(): string;
    startSlideShow(): void;
    stopSlideShow(): void;
    getPositionClass(preClassName: any, position: any): string;
    isVertical(): boolean;
    onActiveIndexChange(index: any): void;
}
export declare class GalleriaItemSlot {
    templates: QueryList<any>;
    index: number;
    get item(): any;
    set item(item: any);
    type: string;
    contentTemplate: TemplateRef<any>;
    context: any;
    _item: any;
    ngAfterContentInit(): void;
}
export declare class GalleriaItem implements OnInit {
    circular: boolean;
    value: any[];
    showItemNavigators: boolean;
    showIndicators: boolean;
    slideShowActive: boolean;
    changeItemOnIndicatorHover: boolean;
    autoPlay: boolean;
    templates: QueryList<any>;
    indicatorFacet: any;
    captionFacet: any;
    startSlideShow: EventEmitter<any>;
    stopSlideShow: EventEmitter<any>;
    onActiveIndexChange: EventEmitter<any>;
    get activeIndex(): number;
    set activeIndex(activeIndex: number);
    _activeIndex: number;
    activeItem: any;
    ngOnInit(): void;
    next(): void;
    prev(): void;
    stopTheSlideShow(): void;
    navForward(e: any): void;
    navBackward(e: any): void;
    onIndicatorClick(index: any): void;
    onIndicatorMouseEnter(index: any): void;
    onIndicatorKeyDown(index: any): void;
    isNavForwardDisabled(): boolean;
    isNavBackwardDisabled(): boolean;
    isIndicatorItemActive(index: any): boolean;
}
export declare class GalleriaThumbnails implements OnInit, AfterContentChecked, OnDestroy {
    containerId: string;
    value: any[];
    isVertical: boolean;
    slideShowActive: boolean;
    circular: boolean;
    responsiveOptions: any[];
    contentHeight: string;
    showThumbnailNavigators: boolean;
    templates: QueryList<any>;
    onActiveIndexChange: EventEmitter<any>;
    stopSlideShow: EventEmitter<any>;
    itemsContainer: ElementRef;
    get numVisible(): number;
    set numVisible(numVisible: number);
    get activeIndex(): number;
    set activeIndex(activeIndex: number);
    index: number;
    startPos: any;
    thumbnailsStyle: any;
    sortedResponsiveOptions: any;
    totalShiftedItems: number;
    page: number;
    documentResizeListener: any;
    _numVisible: number;
    d_numVisible: number;
    _oldNumVisible: number;
    _activeIndex: number;
    _oldactiveIndex: number;
    ngOnInit(): void;
    ngAfterContentChecked(): void;
    createStyle(): void;
    calculatePosition(): void;
    getTabIndex(index: any): number;
    navForward(e: any): void;
    navBackward(e: any): void;
    onItemClick(index: any): void;
    step(dir: any): void;
    stopTheSlideShow(): void;
    changePageOnTouch(e: any, diff: any): void;
    getTotalPageNumber(): number;
    getMedianItemIndex(): number;
    onTransitionEnd(): void;
    onTouchEnd(e: any): void;
    onTouchMove(e: any): void;
    onTouchStart(e: any): void;
    isNavBackwardDisabled(): boolean;
    isNavForwardDisabled(): boolean;
    firstItemAciveIndex(): number;
    lastItemActiveIndex(): number;
    isItemActive(index: any): boolean;
    bindDocumentListeners(): void;
    unbindDocumentListeners(): void;
    ngOnDestroy(): void;
}
export declare class GalleriaModule {
}