(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('primeng-lts/dom')) :
    typeof define === 'function' && define.amd ? define('primeng-lts/dragdrop', ['exports', '@angular/core', '@angular/common', 'primeng-lts/dom'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['primeng-lts'] = global['primeng-lts'] || {}, global['primeng-lts'].dragdrop = {}), global.ng.core, global.ng.common, global['primeng-lts'].dom));
}(this, (function (exports, core, common, dom) { 'use strict';

    var Draggable = /** @class */ (function () {
        function Draggable(el, zone) {
            this.el = el;
            this.zone = zone;
            this.onDragStart = new core.EventEmitter();
            this.onDragEnd = new core.EventEmitter();
            this.onDrag = new core.EventEmitter();
        }
        Object.defineProperty(Draggable.prototype, "pDraggableDisabled", {
            get: function () {
                return this._pDraggableDisabled;
            },
            set: function (_pDraggableDisabled) {
                this._pDraggableDisabled = _pDraggableDisabled;
                if (this._pDraggableDisabled) {
                    this.unbindMouseListeners();
                }
                else {
                    this.el.nativeElement.draggable = true;
                    this.bindMouseListeners();
                }
            },
            enumerable: false,
            configurable: true
        });
        Draggable.prototype.ngAfterViewInit = function () {
            if (!this.pDraggableDisabled) {
                this.el.nativeElement.draggable = true;
                this.bindMouseListeners();
            }
        };
        Draggable.prototype.bindDragListener = function () {
            var _this = this;
            if (!this.dragListener) {
                this.zone.runOutsideAngular(function () {
                    _this.dragListener = _this.drag.bind(_this);
                    _this.el.nativeElement.addEventListener('drag', _this.dragListener);
                });
            }
        };
        Draggable.prototype.unbindDragListener = function () {
            var _this = this;
            if (this.dragListener) {
                this.zone.runOutsideAngular(function () {
                    _this.el.nativeElement.removeEventListener('drag', _this.dragListener);
                    _this.dragListener = null;
                });
            }
        };
        Draggable.prototype.bindMouseListeners = function () {
            var _this = this;
            if (!this.mouseDownListener && !this.mouseUpListener) {
                this.zone.runOutsideAngular(function () {
                    _this.mouseDownListener = _this.mousedown.bind(_this);
                    _this.mouseUpListener = _this.mouseup.bind(_this);
                    _this.el.nativeElement.addEventListener('mousedown', _this.mouseDownListener);
                    _this.el.nativeElement.addEventListener('mouseup', _this.mouseUpListener);
                });
            }
        };
        Draggable.prototype.unbindMouseListeners = function () {
            var _this = this;
            if (this.mouseDownListener && this.mouseUpListener) {
                this.zone.runOutsideAngular(function () {
                    _this.el.nativeElement.removeEventListener('mousedown', _this.mouseDownListener);
                    _this.el.nativeElement.removeEventListener('mouseup', _this.mouseUpListener);
                    _this.mouseDownListener = null;
                    _this.mouseUpListener = null;
                });
            }
        };
        Draggable.prototype.drag = function (event) {
            this.onDrag.emit(event);
        };
        Draggable.prototype.dragStart = function (event) {
            if (this.allowDrag() && !this.pDraggableDisabled) {
                if (this.dragEffect) {
                    event.dataTransfer.effectAllowed = this.dragEffect;
                }
                event.dataTransfer.setData('text', this.scope);
                this.onDragStart.emit(event);
                this.bindDragListener();
            }
            else {
                event.preventDefault();
            }
        };
        Draggable.prototype.dragEnd = function (event) {
            this.onDragEnd.emit(event);
            this.unbindDragListener();
        };
        Draggable.prototype.mousedown = function (event) {
            this.handle = event.target;
        };
        Draggable.prototype.mouseup = function (event) {
            this.handle = null;
        };
        Draggable.prototype.allowDrag = function () {
            if (this.dragHandle && this.handle)
                return dom.DomHandler.matches(this.handle, this.dragHandle);
            else
                return true;
        };
        Draggable.prototype.ngOnDestroy = function () {
            this.unbindDragListener();
            this.unbindMouseListeners();
        };
        return Draggable;
    }());
    Draggable.decorators = [
        { type: core.Directive, args: [{
                    selector: '[pDraggable]'
                },] }
    ];
    Draggable.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.NgZone }
    ]; };
    Draggable.propDecorators = {
        scope: [{ type: core.Input, args: ['pDraggable',] }],
        dragEffect: [{ type: core.Input }],
        dragHandle: [{ type: core.Input }],
        onDragStart: [{ type: core.Output }],
        onDragEnd: [{ type: core.Output }],
        onDrag: [{ type: core.Output }],
        pDraggableDisabled: [{ type: core.Input }],
        dragStart: [{ type: core.HostListener, args: ['dragstart', ['$event'],] }],
        dragEnd: [{ type: core.HostListener, args: ['dragend', ['$event'],] }]
    };
    var Droppable = /** @class */ (function () {
        function Droppable(el, zone) {
            this.el = el;
            this.zone = zone;
            this.onDragEnter = new core.EventEmitter();
            this.onDragLeave = new core.EventEmitter();
            this.onDrop = new core.EventEmitter();
        }
        Droppable.prototype.ngAfterViewInit = function () {
            if (!this.pDroppableDisabled) {
                this.bindDragOverListener();
            }
        };
        Droppable.prototype.bindDragOverListener = function () {
            var _this = this;
            if (!this.dragOverListener) {
                this.zone.runOutsideAngular(function () {
                    _this.dragOverListener = _this.dragOver.bind(_this);
                    _this.el.nativeElement.addEventListener('dragover', _this.dragOverListener);
                });
            }
        };
        Droppable.prototype.unbindDragOverListener = function () {
            var _this = this;
            if (this.dragOverListener) {
                this.zone.runOutsideAngular(function () {
                    _this.el.nativeElement.removeEventListener('dragover', _this.dragOverListener);
                    _this.dragOverListener = null;
                });
            }
        };
        Droppable.prototype.dragOver = function (event) {
            event.preventDefault();
        };
        Droppable.prototype.drop = function (event) {
            if (this.allowDrop(event)) {
                dom.DomHandler.removeClass(this.el.nativeElement, 'p-draggable-enter');
                event.preventDefault();
                this.onDrop.emit(event);
            }
        };
        Droppable.prototype.dragEnter = function (event) {
            event.preventDefault();
            if (this.dropEffect) {
                event.dataTransfer.dropEffect = this.dropEffect;
            }
            dom.DomHandler.addClass(this.el.nativeElement, 'p-draggable-enter');
            this.onDragEnter.emit(event);
        };
        Droppable.prototype.dragLeave = function (event) {
            event.preventDefault();
            dom.DomHandler.removeClass(this.el.nativeElement, 'p-draggable-enter');
            this.onDragLeŸ’˘ °c◊   Nﬂ√  t                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            ?    K ›∫ósP-
Áƒ°~Z6Õ™ádB  ¸ Ÿ ∂ í n K               {	!% 	®2022-10-1719:35:54.446! z	!% ¶2022-10-1719:35:54.063! y	!% ©2022-10-1719:35:53.254  x	!% 	±2022-10-1719:35:26.752  w	!% 	c2022-10-1719:35:26.265! v	!% b2022-10-1719:35:18.847 u	!% 	2022-10-1719:06:50.896 t	!% 	}2022-10-1718:29:16.166  s	!% 	 ê2022-10-1718:27:03.883  r	!% 	Õ2022-10-1718:26:49.897  q	!% 	a2022-10-1718:26:02.411  p	!% 	52022-10-1718:26:02.049  o	!% 	`2022-10-1718:26:01.999  n	!% 	42022-10-1718:26:01.830! m	!% û2022-10-1718:26:02.088! l	!% /2022-10-1718:28:59.817  k	!% 	Í2022-10-1718:14:30.643  j	!% 	G2022-10-1718:14:30.422  i	!% 	Ú2022-10-1718:14:30.246  h	!% 	(2022-10-1718:13:03.519  g	!% 	
2022-10-1718:13:03.446  f	!% 	f2022-10-1718:13:03.232  e	!% 	*2022-10-1718:13:03.125! d	!% 32022-10-1719:36:10.978  c	!% 	Ç2022-10-1717:22:35.225  b	!% 	ó2022-10-1716:09:35.331  a	!% 	˙2022-10-1716:09:31.530Nﬂ\   SQLite format 3   @   7  t                                                          7 -‚(   ˚    
˚à ˆ ˆ                                                                                                                            %9 indexsqlite_autoindex_URL_1URLÇhÖ'tableDomainsDomainsCREATE TABLE Domains(DomainID INTEGER NOT NULL, UserID INTEGER NOT NULL, Date DATE, LastTimeAllow DATETIME, LastTimeDeny DATETIME, NAllows INTEGER, NDenies INTEGER, PRIMARY KEY(DomainID, UserID, Date), FOREIGN KEY(UserID) REFERENCES User(UserID) ON DELETE CASCADE, FOREIGN KEY(DomainID) REFERENCES Domain(DomainID) ON DELETE CASCADE)-A indexsqlite_autoindex_Domains_1Domains   rÅ;tableRestURLRe