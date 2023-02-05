import { NgModule, Component, Input, Output, EventEmitter, ViewChild, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng-lts/button';
import { MenuModule } from 'primeng-lts/menu';
export class SplitButton {
    constructor() {
        this.iconPos = 'left';
        this.onClick = new EventEmitter();
        this.onDropdownClick = new EventEmitter();
        this.showTransitionOptions = '.12s cubic-bezier(0, 0, 0.2, 1)';
        this.hideTransitionOptions = '.1s linear';
    }
    onDefaultButtonClick(event) {
        this.onClick.emit(event);
    }
    onDropdownButtonClick(event) {
        this.onDropdownClick.emit(event);
        this.menu.toggle({ currentTarget: this.containerViewChild.nativeElement, relativeAlign: this.appendTo == null });
    }
}
SplitButton.decorators = [
    { type: Component, args: [{
                selector: 'p-splitButton',
                template: `
        <div #container [ngClass]="'p-splitbutton p-component'" [ngStyle]="style" [class]="styleClass">
            <button #defaultbtn class="p-splitbutton-defaultbutton" type="button" pButton [icon]="icon" [iconPos]="iconPos" [label]="label" (click)="onDefaultButtonClick($event)" [disabled]="disabled" [attr.tabindex]="tabindex"></button>
            <button type="button" pButton class="p-splitbutton-menubutton" icon="pi pi-chevron-down" (click)="onDropdownButtonClick($event)" [disabled]="disabled"></button>
            <p-menu #menu [popup]="true" [model]="model" [style]="menuStyle" [styleClass]="menuStyleClass" [appendTo]="appendTo"
                    [showTransitionOptions]="showTransitionOptions" [hideTransitionOptions]="hideTransitionOptions"></p-menu>
        </div>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-splitbutton{display:-ms-inline-flexbox;display:inline-flex;position:relative}.p-splitbutton .p-splitbutton-defaultbutton{-ms-flex:1 1 auto;border-bottom-right-radius:0;border-right:0;border-top-right-radius:0;flex:1 1 auto}.p-splitbutton-menubutton{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;border-bottom-left-radius:0;border-top-left-radius:0;display:-ms-flexbox;display:flex;justify-content:center}.p-splitbutton .p-menu{min-width:100%}.p-fluid .p-splitbutton{display:-ms-flexbox;display:flex}"]
            },] }
];
SplitButton.propDecorators = {
    model: [{ type: Input }],
    icon: [{ type: Input }],
    iconPos: [{ type: Input }],
    label: [{ type: Input }],
    onClick: [{ type: Output }],
    onDropdownClick: [{ type: Output }],
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    menuStyle: [{ type: Input }],
    menuStyleClass: [{ type: Input }],
    disabled: [{ type: Input }],
    tabindex: [{ type: Input }],
    appendTo: [{ type: Input }],
    dir: [{ type: Input }],
    showTransitionOptions: [{ type: Input }],
    hideTransitionOptions: [{ type: Input }],
    containerViewChild: [{ type: ViewChild, args: ['container',] }],
    buttonViewChild: [{ type: ViewChild, args: ['defaultbtn',] }],
    menu: [{ type: ViewChild, args: ['menu',] }]
};
export class SplitButtonModule {
}
SplitButtonModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, ButtonModule, MenuModule],
                exports: [SplitButton, ButtonModule],
                declarations: [SplitButton]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsaXRidXR0b24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvc3BsaXRidXR0b24vc3BsaXRidXR0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxTQUFTLEVBQVksS0FBSyxFQUFDLE1BQU0sRUFBQyxZQUFZLEVBQUMsU0FBUyxFQUFDLHVCQUF1QixFQUFDLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzFJLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUU3QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDaEQsT0FBTyxFQUFDLFVBQVUsRUFBTyxNQUFNLGtCQUFrQixDQUFDO0FBZ0JsRCxNQUFNLE9BQU8sV0FBVztJQWR4QjtRQW9CYSxZQUFPLEdBQVcsTUFBTSxDQUFDO1FBSXhCLFlBQU8sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVoRCxvQkFBZSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBa0J6RCwwQkFBcUIsR0FBVyxpQ0FBaUMsQ0FBQztRQUVsRSwwQkFBcUIsR0FBVyxZQUFZLENBQUM7SUFpQjFELENBQUM7SUFURyxvQkFBb0IsQ0FBQyxLQUFZO1FBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxxQkFBcUIsQ0FBQyxLQUFZO1FBQzlCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLEVBQUUsYUFBYSxFQUFFLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFDLENBQUMsQ0FBQztJQUNuSCxDQUFDOzs7WUE3REosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUU7Ozs7Ozs7S0FPVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBRXhDOzs7b0JBR0ksS0FBSzttQkFFTCxLQUFLO3NCQUVMLEtBQUs7b0JBRUwsS0FBSztzQkFFTCxNQUFNOzhCQUVOLE1BQU07b0JBRU4sS0FBSzt5QkFFTCxLQUFLO3dCQUVMLEtBQUs7NkJBRUwsS0FBSzt1QkFFTCxLQUFLO3VCQUVMLEtBQUs7dUJBRUwsS0FBSztrQkFFTCxLQUFLO29DQUVMLEtBQUs7b0NBRUwsS0FBSztpQ0FFTCxTQUFTLFNBQUMsV0FBVzs4QkFFckIsU0FBUyxTQUFDLFlBQVk7bUJBRXRCLFNBQVMsU0FBQyxNQUFNOztBQWtCckIsTUFBTSxPQUFPLGlCQUFpQjs7O1lBTDdCLFFBQVEsU0FBQztnQkFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUMsWUFBWSxFQUFDLFVBQVUsQ0FBQztnQkFDL0MsT0FBTyxFQUFFLENBQUMsV0FBVyxFQUFDLFlBQVksQ0FBQztnQkFDbkMsWUFBWSxFQUFFLENBQUMsV0FBVyxDQUFDO2FBQzlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZSxDb21wb25lbnQsRWxlbWVudFJlZixJbnB1dCxPdXRwdXQsRXZlbnRFbWl0dGVyLFZpZXdDaGlsZCxDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TWVudUl0ZW19IGZyb20gJ3ByaW1lbmctbHRzL2FwaSc7XG5pbXBvcnQge0J1dHRvbk1vZHVsZX0gZnJvbSAncHJpbWVuZy1sdHMvYnV0dG9uJztcbmltcG9ydCB7TWVudU1vZHVsZSwgTWVudX0gZnJvbSAncHJpbWVuZy1sdHMvbWVudSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncC1zcGxpdEJ1dHRvbicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiAjY29udGFpbmVyIFtuZ0NsYXNzXT1cIidwLXNwbGl0YnV0dG9uIHAtY29tcG9uZW50J1wiIFtuZ1N0eWxlXT1cInN0eWxlXCIgW2NsYXNzXT1cInN0eWxlQ2xhc3NcIj5cbiAgICAgICAgICAgIDxidXR0b24gI2RlZmF1bHRidG4gY2xhc3M9XCJwLXNwbGl0YnV0dG9uLWRlZmF1bHRidXR0b25cIiB0eXBlPVwiYnV0dG9uXCIgcEJ1dHRvbiBbaWNvbl09XCJpY29uXCIgW2ljb25Qb3NdPVwiaWNvblBvc1wiIFtsYWJlbF09XCJsYWJlbFwiIChjbGljayk9XCJvbkRlZmF1bHRCdXR0b25DbGljaygkZXZlbnQpXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgW2F0dHIudGFiaW5kZXhdPVwidGFiaW5kZXhcIj48L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHBCdXR0b24gY2xhc3M9XCJwLXNwbGl0YnV0dG9uLW1lbnVidXR0b25cIiBpY29uPVwicGkgcGktY2hldnJvbi1kb3duXCIgKGNsaWNrKT1cIm9uRHJvcGRvd25CdXR0b25DbGljaygkZXZlbnQpXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCI+PC9idXR0b24+XG4gICAgICAgICAgICA8cC1tZW51ICNtZW51IFtwb3B1cF09XCJ0cnVlXCIgW21vZGVsXT1cIm1vZGVsXCIgW3N0eWxlXT1cIm1lbnVTdHlsZVwiIFtzdHlsZUNsYXNzXT1cIm1lbnVTdHlsZUNsYXNzXCIgW2FwcGVuZFRvXT1cImFwcGVuZFRvXCJcbiAgICAgICAgICAgICAgICAgICAgW3Nob3dUcmFuc2l0aW9uT3B0aW9uc109XCJzaG93VHJhbnNpdGlvbk9wdGlvbnNcIiBbaGlkZVRyYW5zaXRpb25PcHRpb25zXT1cImhpZGVUcmFuc2l0aW9uT3B0aW9uc1wiPjwvcC1tZW51PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgc3R5bGVVcmxzOiBbJy4vc3BsaXRidXR0b24uY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3BsaXRCdXR0b24ge1xuXG4gICAgQElucHV0KCkgbW9kZWw6IE1lbnVJdGVtW107XG5cbiAgICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBpY29uUG9zOiBzdHJpbmcgPSAnbGVmdCc7XG4gICAgICAgIFxuICAgIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG4gICAgXG4gICAgQE91dHB1dCgpIG9uQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIFxuICAgIEBPdXRwdXQoKSBvbkRyb3Bkb3duQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIFxuICAgIEBJbnB1dCgpIHN0eWxlOiBhbnk7XG4gICAgXG4gICAgQElucHV0KCkgc3R5bGVDbGFzczogc3RyaW5nO1xuICAgIFxuICAgIEBJbnB1dCgpIG1lbnVTdHlsZTogYW55O1xuICAgIFxuICAgIEBJbnB1dCgpIG1lbnVTdHlsZUNsYXNzOiBzdHJpbmc7XG4gICAgXG4gICAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSB0YWJpbmRleDogbnVtYmVyO1xuICAgIFxuICAgIEBJbnB1dCgpIGFwcGVuZFRvOiBhbnk7XG4gICAgXG4gICAgQElucHV0KCkgZGlyOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBzaG93VHJhbnNpdGlvbk9wdGlvbnM6IHN0cmluZyA9ICcuMTJzIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpJztcblxuICAgIEBJbnB1dCgpIGhpZGVUcmFuc2l0aW9uT3B0aW9uczogc3RyaW5nID0gJy4xcyBsaW5lYXInO1xuXG4gICAgQFZpZXdDaGlsZCgnY29udGFpbmVyJykgY29udGFpbmVyVmlld0NoaWxkOiBFbGVtZW50UmVmO1xuICAgIFxuICAgIEBWaWV3Q2hpbGQoJ2RlZmF1bHRidG4nKSBidXR0b25WaWV3Q2hpbGQ6IEVsZW1lbnRSZWY7XG5cbiAgICBAVmlld0NoaWxkKCdtZW51JykgbWVudTogTWVudTtcblxuICAgIG9uRGVmYXVsdEJ1dHRvbkNsaWNrKGV2ZW50OiBFdmVudCkge1xuICAgICAgICB0aGlzLm9uQ2xpY2suZW1pdChldmVudCk7XG4gICAgfVxuICAgICAgICAgIFxuICAgIG9uRHJvcGRvd25CdXR0b25DbGljayhldmVudDogRXZlbnQpIHtcbiAgICAgICAgdGhpcy5vbkRyb3Bkb3duQ2xpY2suZW1pdChldmVudCk7XG4gICAgICAgIHRoaXMubWVudS50b2dnbGUoe2N1cnJlbnRUYXJnZXQ6IHRoaXMuY29udGFpbmVyVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQsIHJlbGF0aXZlQWxpZ246IHRoaXMuYXBwZW5kVG8gPT0gbnVsbH0pO1xuICAgIH1cblxufVxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsQnV0dG9uTW9kdWxlLE1lbnVNb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtTcGxpdEJ1dHRvbixCdXR0b25Nb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogW1NwbGl0QnV0dG9uXVxufSlcbmV4cG9ydCBjbGFzcyBTcGxpdEJ1dHRvbk1vZHVsZSB7IH1cbiJdfQ==