import { OnInit, ChangeDetectorRef, EventEmitter, TemplateRef, OnChanges, SimpleChanges } from '@angular/core';
import { SelectItem } from 'primeng-lts/api';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'primeng-lts/dropdown';
import * as ɵngcc3 from '@angular/forms';
import * as ɵngcc4 from 'primeng-lts/api';
import * as ɵngcc5 from 'primeng-lts/ripple';
export declare class Paginator implements OnInit, OnChanges {
    private cd;
    pageLinkSize: number;
    onPageChange: EventEmitter<any>;
    style: any;
    styleClass: string;
    alwaysShow: boolean;
    templateLeft: TemplateRef<any>;
    templateRight: TemplateRef<any>;
    dropdownAppendTo: any;
    dropdownScrollHeight: string;
    currentPageReportTemplate: string;
    showCurrentPageReport: boolean;
    showFirstLastIcon: boolean;
    totalRecords: number;
    rows: number;
    rowsPerPageOptions: any[];
    showJumpToPageDropdown: boolean;
    showPageLinks: boolean;
    dropdownItemTemplate: TemplateRef<any>;
    pageLinks: number[];
    pageItems: SelectItem[];
    rowsPerPageItems: SelectItem[];
    paginatorState: any;
    _first: number;
    _page: number;
    constructor(cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(simpleChange: SimpleChanges): void;
    get first(): number;
    set first(val: number);
    updateRowsPerPageOptions(): void;
    isFirstPage(): boolean;
    isLastPage(): boolean;
    getPageCount(): number;
    calculatePageLinkBoundaries(): number[];
    updatePageLinks(): void;
    changePage(p: number): void;
    updateFirst(): void;
    getPage(): number;
    changePageToFirst(event: any): void;
    changePageToPrev(event: any): void;
    changePageToNext(event: any): void;
    changePageToLast(event: any): void;
    onPageLinkClick(event: any, page: any): void;
    onRppChange(event: any): void;
    onPageDropdownChange(event: any): void;
    updatePaginatorState(): void;
    get currentPageReport(): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<Paginator, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<Paginator, "p-paginator", never, { "pageLinkSize": "pageLinkSize"; "alwaysShow": "alwaysShow"; "dropdownScrollHeight": "dropdownScrollHeight"; "currentPageReportTemplate": "currentPageReportTemplate"; "showFirstLastIcon": "showFirstLastIcon"; "totalRecords": "totalRecords"; "rows": "rows"; "showPageLinks": "showPageLinks"; "first": "first"; "style": "style"; "styleClass": "styleClass"; "templateLeft": "templateLeft"; "templateRight": "templateRight"; "dropdownAppendTo": "dropdownAppendTo"; "showCurrentPageReport": "showCurrentPageReport"; "rowsPerPageOptions": "rowsPerPageOptions"; "showJumpToPageDropdown": "showJumpToPageDropdown"; "dropdownItemTemplate": "dropdownItemTemplate"; }, { "onPageChange": "onPageChange"; }, never, never>;
}
export declare class PaginatorModule {
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<PaginatorModule, [typeof Paginator], [typeof ɵngcc1.CommonModule, typeof ɵngcc2.DropdownModule, typeof ɵngcc3.FormsModule, typeof ɵngcc4.SharedModule, typeof ɵngcc5.RippleModule], [typeof Paginator, typeof ɵngcc2.DropdownModule, typeof ɵngcc3.FormsModule, typeof ɵngcc4.SharedModule]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<PaginatorModule>;
}

//# sourceMappingURL=paginator.d.ts.map