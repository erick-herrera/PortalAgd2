import { NgModule, Directive, ElementRef, HostListener, Input, Output, EventEmitter, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomHandler } from 'primeng-lts/dom';
export class Draggable {
    constructor(el, zone) {
        this.el = el;
        this.zone = zone;
        this.onDragStart = new EventEmitter();
        this.onDragEnd = new EventEmitter();
        this.onDrag = new EventEmitter();
    }
    get pDraggableDisabled() {
        return this._pDraggableDisabled;
    }
    set pDraggableDisabled(_pDraggableDisabled) {
        this._pDraggableDisabled = _pDraggableDisabled;
        if (this._pDraggableDisabled) {
            this.unbindMouseListeners();
        }
        else {
            this.el.nativeElement.draggable = true;
            this.bindMouseListeners();
        }
    }
    ngAfterViewInit() {
        if (!this.pDraggableDisabled) {
            this.el.nativeElement.draggable = true;
            this.bindMouseListeners();
        }
    }
    bindDragListener() {
        if (!this.dragListener) {
            this.zone.runOutsideAngular(() => {
                this.dragListener = this.drag.bind(this);
                this.el.nativeElement.addEventListener('drag', this.dragListener);
            });
        }
    }
    unbindDragListener() {
        if (this.dragListener) {
            this.zone.runOutsideAngular(() => {
                this.el.nativeElement.removeEventListener('drag', this.dragListener);
                this.dragListener = null;
            });
        }
    }
    bindMouseListeners() {
        if (!this.mouseDownListener && !this.mouseUpListener) {
            this.zone.runOutsideAngular(() => {
                this.mouseDownListener = this.mousedown.bind(this);
                this.mouseUpListener = this.mouseup.bind(this);
                this.el.nativeElement.addEventListener('mousedown', this.mouseDownListener);
                this.el.nativeElement.addEventListener('mouseup', this.mouseUpListener);
            });
        }
    }
    unbindMouseListeners() {
        if (this.mouseDownListener && this.mouseUpListener) {
            this.zone.runOutsideAngular(() => {
                this.el.nativeElement.removeEventListener('mousedown', this.mouseDownListener);
                this.el.nativeElement.removeEventListener('mouseup', this.mouseUpListener);
                this.mouseDownListener = null;
                this.mouseUpListener = null;
            });
        }
    }
    drag(event) {
        this.onDrag.emit(event);
    }
    dragStart(event) {
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
    }
    dragEnd(event) {
        this.onDragEnd.emit(event);
        this.unbindDragListener();
    }
    mousedown(event) {
        this.handle = event.target;
    }
    mouseup(event) {
        this.handle = null;
    }
    allowDrag() {
        if (this.dragHandle && this.handle)
            return DomHandler.matches(this.handle, this.dragHandle);
        else
            return true;
    }
    ngOnDestroy() {
        this.unbindDragListener();
        this.unbindMouseListeners();
    }
}
Draggable.decorators = [
    { type: Directive, args: [{
                selector: '[pDraggable]'
            },] }
];
Draggable.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone }
];
Draggable.propDecorators = {
    scope: [{ type: Input, args: ['pDraggable',] }],
    dragEffect: [{ type: Input }],
    dragHandle: [{ type: Input }],
    onDragStart: [{ type: Output }],
    onDragEnd: [{ type: Output }],
    onDrag: [{ type: Output }],
    pDraggableDisabled: [{ type: Input }],
    dragStart: [{ type: HostListener, args: ['dragstart', ['$event'],] }],
    dragEnd: [{ type: HostListener, args: ['dragend', ['$event'],] }]
};
export class Droppable {
    constructor(el, zone) {
        this.el = el;
        this.zone = zone;
        this.onDragEnter = new EventEmitter();
        this.onDragLeave = new EventEmitter();
        this.onDrop = new EventEmitter();
    }
    ngAfterViewInit() {
        if (!this.pDroppableDisabled) {
            this.bindDragOverListener();
        }
    }
    bindDragOverListener() {
        if (!this.dragOverListener) {
            this.zone.runOutsideAngular(() => {
                this.dragOverListener = this.dragOver.bind(this);
                this.el.nativeElement.addEventListener('dragover', this.dragOverListener);
            });
        }
    }
    unbindDragOverListener() {
        if (this.dragOverListener) {
            this.zone.runOutsideAngular(() => {
                this.el.nativeElement.removeEventListener('dragover', this.dragOverListener);
                this.dragOverListener = null;
            });
        }
    }
    dragOver(event) {
        event.preventDefault();
    }
    drop(event) {
        if (this.allowDrop(event)) {
            DomHandler.removeClass(this.el.nativeElement, 'p-draggable-enter');
            event.preventDefault();
            this.onDrop.emit(event);
        }
    }
    dragEnter(event) {
        event.preventDefault();
        if (this.dropEffect) {
            event.dataTransfer.dropEffect = this.dropEffect;
        }
        DomHandler.addClass(this.el.nativeElement, 'p-draggable-enter');
        this.onDragEnter.emit(event);
    }
    dragLeave(event) {
        event.preventDefault();
        DomHandler.removeClass(this.el.nativeElement, 'p-draggable-enter');
        this.onDragLeave.emit(event);
    }
    allowDrop(event) {
        let dragScope = event.dataTransfer.getData('text');
        if (typeof (this.scope) == "string" && dragScope == this.scope) {
            return true;
        }
        else if (this.scope instanceof Array) {
            for (let j = 0; j < this.scope.length; j++) {
                if (dragScope == this.scope[j]) {
                    return true;
                }
            }
        }
        return false;
    }
    ngOnDestroy() {
        this.unbindDragOverListener();
    }
}
Droppable.decorators = [
    { type: Directive, args: [{
                selector: '[pDroppable]'
            },] }
];
Droppable.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone }
];
Droppable.propDecorators = {
    scope: [{ type: Input, args: ['pDroppable',] }],
    pDroppableDisabled: [{ type: Input }],
    dropEffect: [{ type: Input }],
    onDragEnter: [{ type: Output }],
    onDragLeave: [{ type: Output }],
    onDrop: [{ type: Output }],
    drop: [{ type: HostListener, args: ['drop', ['$event'],] }],
    dragEnter: [{ type: HostListener, args: ['dragenter', ['$event'],] }],
    dragLeave: [{ type: HostListener, args: ['dragleave', ['$event'],] }]
};
export class DragDropModule {
}
DragDropModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                exports: [Draggable, Droppable],
                declarations: [Draggable, Droppable]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2Ryb3AuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvZHJhZ2Ryb3AvZHJhZ2Ryb3AudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxTQUFTLEVBQXlCLFVBQVUsRUFBQyxZQUFZLEVBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxZQUFZLEVBQUMsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2xJLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFLM0MsTUFBTSxPQUFPLFNBQVM7SUF3QmxCLFlBQW1CLEVBQWMsRUFBUyxJQUFZO1FBQW5DLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBUyxTQUFJLEdBQUosSUFBSSxDQUFRO1FBaEI1QyxnQkFBVyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXBELGNBQVMsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVsRCxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUFZQSxDQUFDO0lBRTFELElBQWEsa0JBQWtCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDO0lBQ3BDLENBQUM7SUFDRCxJQUFJLGtCQUFrQixDQUFDLG1CQUEyQjtRQUM5QyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsbUJBQW1CLENBQUM7UUFFL0MsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUU7WUFDMUIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7U0FDL0I7YUFDSTtZQUNELElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDdkMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDN0I7SUFDTCxDQUFDO0lBRUQsZUFBZTtRQUNYLElBQUksQ0FBQyxJQUFJLENB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LFFBQVEsSUFBSSxTQUFTLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUM1RCxPQUFPLElBQUksQ0FBQztTQUNmO2FBQ0ksSUFBSSxJQUFJLENBQUMsS0FBSyxZQUFZLEtBQUssRUFBRTtZQUNsQyxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3ZDLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQzVCLE9BQU8sSUFBSSxDQUFDO2lCQUNmO2FBQ0o7U0FDSjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFDbEMsQ0FBQzs7O1lBL0ZKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsY0FBYzthQUMzQjs7O1lBbEprRCxVQUFVO1lBQXdDLE1BQU07OztvQkFxSnRHLEtBQUssU0FBQyxZQUFZO2lDQUVsQixLQUFLO3lCQUVMLEtBQUs7MEJBRUwsTUFBTTswQkFFTixNQUFNO3FCQUVOLE1BQU07bUJBa0NOLFlBQVksU0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUM7d0JBUy9CLFlBQVksU0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7d0JBWXBDLFlBQVksU0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0FBaUN6QyxNQUFNLE9BQU8sY0FBYzs7O1lBTDFCLFFBQVEsU0FBQztnQkFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQ3ZCLE9BQU8sRUFBRSxDQUFDLFNBQVMsRUFBQyxTQUFTLENBQUM7Z0JBQzlCLFlBQVksRUFBRSxDQUFDLFNBQVMsRUFBQyxTQUFTLENBQUM7YUFDdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlLERpcmVjdGl2ZSxPbkRlc3Ryb3ksQWZ0ZXJWaWV3SW5pdCxFbGVtZW50UmVmLEhvc3RMaXN0ZW5lcixJbnB1dCxPdXRwdXQsRXZlbnRFbWl0dGVyLE5nWm9uZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7RG9tSGFuZGxlcn0gZnJvbSAncHJpbWVuZy1sdHMvZG9tJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbcERyYWdnYWJsZV0nXG59KVxuZXhwb3J0IGNsYXNzIERyYWdnYWJsZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gICAgXG4gICAgQElucHV0KCdwRHJhZ2dhYmxlJykgc2NvcGU6IHN0cmluZztcbiAgICAgICAgXG4gICAgQElucHV0KCkgZHJhZ0VmZmVjdDogc3RyaW5nO1xuICAgIFxuICAgIEBJbnB1dCgpIGRyYWdIYW5kbGU6IHN0cmluZztcbiAgICBcbiAgICBAT3V0cHV0KCkgb25EcmFnU3RhcnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIFxuICAgIEBPdXRwdXQoKSBvbkRyYWdFbmQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIFxuICAgIEBPdXRwdXQoKSBvbkRyYWc6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIFxuICAgIGhhbmRsZTogYW55O1xuXG4gICAgZHJhZ0xpc3RlbmVyOiBhbnk7XG5cbiAgICBtb3VzZURvd25MaXN0ZW5lcjogYW55O1xuXG4gICAgbW91c2VVcExpc3RlbmVyOiBhbnk7XG5cbiAgICBfcERyYWdnYWJsZURpc2FibGVkOiBib29sZWFuO1xuICAgICAgICBcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZWw6IEVsZW1lbnRSZWYsIHB1YmxpYyB6b25lOiBOZ1pvbmUpIHt9XG5cbiAgICBASW5wdXQoKSBnZXQgcERyYWdnYWJsZURpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcERyYWdnYWJsZURpc2FibGVkO1xuICAgIH1cbiAgICBzZXQgcERyYWdnYWJsZURpc2FibGVkKF9wRHJhZ2dhYmxlRGlzYWJsZWQ6Ym9vbGVhbikge1xuICAgICAgICB0aGlzLl9wRHJhZ2dhYmxlRGlzYWJsZWQgPSBfcERyYWdnYWJsZURpc2FibGVkO1xuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuX3BEcmFnZ2FibGVEaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy51bmJpbmRNb3VzZUxpc3RlbmVycygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmRyYWdnYWJsZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmJpbmRNb3VzZUxpc3RlbmVycygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnBEcmFnZ2FibGVEaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmRyYWdnYWJsZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmJpbmRNb3VzZUxpc3RlbmVycygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYmluZERyYWdMaXN0ZW5lcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmRyYWdMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYWdMaXN0ZW5lciA9IHRoaXMuZHJhZy5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnJywgdGhpcy5kcmFnTGlzdGVuZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1bmJpbmREcmFnTGlzdGVuZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmRyYWdMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZycsIHRoaXMuZHJhZ0xpc3RlbmVyKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYWdMaXN0ZW5lciA9IG51bGw7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJpbmRNb3VzZUxpc3RlbmVycygpIHtcbiAgICAgICAgaWYgKCF0aGlzLm1vdXNlRG93bkxpc3RlbmVyICYmICF0aGlzLm1vdXNlVXBMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdXNlRG93bkxpc3RlbmVyID0gdGhpcy5tb3VzZWRvd24uYmluZCh0aGlzKTtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdXNlVXBMaXN0ZW5lciA9IHRoaXMubW91c2V1cC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm1vdXNlRG93bkxpc3RlbmVyKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMubW91c2VVcExpc3RlbmVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdW5iaW5kTW91c2VMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGlmICh0aGlzLm1vdXNlRG93bkxpc3RlbmVyICYmIHRoaXMubW91c2VVcExpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm1vdXNlRG93bkxpc3RlbmVyKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMubW91c2VVcExpc3RlbmVyKTtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdXNlRG93bkxpc3RlbmVyID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdXNlVXBMaXN0ZW5lciA9IG51bGw7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYWcoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5vbkRyYWcuZW1pdChldmVudCk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignZHJhZ3N0YXJ0JywgWyckZXZlbnQnXSkgXG4gICAgZHJhZ1N0YXJ0KGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmFsbG93RHJhZygpICYmICF0aGlzLnBEcmFnZ2FibGVEaXNhYmxlZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZHJhZ0VmZmVjdCkge1xuICAgICAgICAgICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gdGhpcy5kcmFnRWZmZWN0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQnLCB0aGlzLnNjb3BlKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5vbkRyYWdTdGFydC5lbWl0KGV2ZW50KTtcblxuICAgICAgICAgICAgdGhpcy5iaW5kRHJhZ0xpc3RlbmVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignZHJhZ2VuZCcsIFsnJGV2ZW50J10pIFxuICAgIGRyYWdFbmQoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5vbkRyYWdFbmQuZW1pdChldmVudCk7XG4gICAgICAgIHRoaXMudW5iaW5kRHJhZ0xpc3RlbmVyKCk7XG4gICAgfVxuICAgIFxuICAgIG1vdXNlZG93bihldmVudCkge1xuICAgICAgICB0aGlzLmhhbmRsZSA9IGV2ZW50LnRhcmdldDtcbiAgICB9XG5cbiAgICBtb3VzZXVwKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuaGFuZGxlID0gbnVsbDtcbiAgICB9XG4gICAgXG4gICAgYWxsb3dEcmFnKCkgOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuZHJhZ0hhbmRsZSAmJiB0aGlzLmhhbmRsZSlcbiAgICAgICAgICAgIHJldHVybiBEb21IYW5kbGVyLm1hdGNoZXModGhpcy5oYW5kbGUsIHRoaXMuZHJhZ0hhbmRsZSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnVuYmluZERyYWdMaXN0ZW5lcigpO1xuICAgICAgICB0aGlzLnVuYmluZE1vdXNlTGlzdGVuZXJzKCk7XG4gICAgfVxuICAgIFxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1twRHJvcHBhYmxlXSdcbn0pXG5leHBvcnQgY2xhc3MgRHJvcHBhYmxlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgICBcbiAgICBASW5wdXQoJ3BEcm9wcGFibGUnKSBzY29wZTogc3RyaW5nfHN0cmluZ1tdO1xuXG4gICAgQElucHV0KCkgcERyb3BwYWJsZURpc2FibGVkOiBib29sZWFuO1xuICAgICAgICBcbiAgICBASW5wdXQoKSBkcm9wRWZmZWN0OiBzdHJpbmc7XG4gICAgICAgIFxuICAgIEBPdXRwdXQoKSBvbkRyYWdFbnRlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgXG4gICAgQE91dHB1dCgpIG9uRHJhZ0xlYXZlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBcbiAgICBAT3V0cHV0KCkgb25Ecm9wOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZWw6IEVsZW1lbnRSZWYsIHB1YmxpYyB6b25lOiBOZ1pvbmUpIHt9XG5cbiAgICBkcmFnT3Zlckxpc3RlbmVyOiBhbnk7XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIGlmICghdGhpcy5wRHJvcHBhYmxlRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYmluZERyYWdPdmVyTGlzdGVuZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJpbmREcmFnT3Zlckxpc3RlbmVyKCkge1xuICAgICAgICBpZiAoIXRoaXMuZHJhZ092ZXJMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYWdPdmVyTGlzdGVuZXIgPSB0aGlzLmRyYWdPdmVyLmJpbmQodGhpcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpcy5kcmFnT3Zlckxpc3RlbmVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdW5iaW5kRHJhZ092ZXJMaXN0ZW5lcigpIHtcbiAgICAgICAgaWYgKHRoaXMuZHJhZ092ZXJMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLmRyYWdPdmVyTGlzdGVuZXIpO1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ092ZXJMaXN0ZW5lciA9IG51bGw7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYWdPdmVyKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgICAgICAgICAgXG4gICAgQEhvc3RMaXN0ZW5lcignZHJvcCcsIFsnJGV2ZW50J10pXG4gICAgZHJvcChldmVudCkge1xuICAgICAgICBpZiAodGhpcy5hbGxvd0Ryb3AoZXZlbnQpKSB7XG4gICAgICAgICAgICBEb21IYW5kbGVyLnJlbW92ZUNsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3AtZHJhZ2dhYmxlLWVudGVyJyk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5vbkRyb3AuZW1pdChldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgQEhvc3RMaXN0ZW5lcignZHJhZ2VudGVyJywgWyckZXZlbnQnXSkgXG4gICAgZHJhZ0VudGVyKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5kcm9wRWZmZWN0KSB7XG4gICAgICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IHRoaXMuZHJvcEVmZmVjdDtcbiAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIERvbUhhbmRsZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAncC1kcmFnZ2FibGUtZW50ZXInKTtcbiAgICAgICAgdGhpcy5vbkRyYWdFbnRlci5lbWl0KGV2ZW50KTtcbiAgICB9XG4gICAgXG4gICAgQEhvc3RMaXN0ZW5lcignZHJhZ2xlYXZlJywgWyckZXZlbnQnXSkgXG4gICAgZHJhZ0xlYXZlKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgIERvbUhhbmRsZXIucmVtb3ZlQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAncC1kcmFnZ2FibGUtZW50ZXInKTtcbiAgICAgICAgdGhpcy5vbkRyYWdMZWF2ZS5lbWl0KGV2ZW50KTtcbiAgICB9XG4gICAgICAgIFxuICAgIGFsbG93RHJvcChldmVudCk6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgZHJhZ1Njb3BlID0gZXZlbnQuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQnKTtcbiAgICAgICAgaWYgKHR5cGVvZiAodGhpcy5zY29wZSkgPT0gXCJzdHJpbmdcIiAmJiBkcmFnU2NvcGUgPT0gdGhpcy5zY29wZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5zY29wZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgdGhpcy5zY29wZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChkcmFnU2NvcGUgPT0gdGhpcy5zY29wZVtqXSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnVuYmluZERyYWdPdmVyTGlzdGVuZXIoKTtcbiAgICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gICAgZXhwb3J0czogW0RyYWdnYWJsZSxEcm9wcGFibGVdLFxuICAgIGRlY2xhcmF0aW9uczogW0RyYWdnYWJsZSxEcm9wcGFibGVdXG59KVxuZXhwb3J0IGNsYXNzIERyYWdEcm9wTW9kdWxlIHsgfSJdfQ==