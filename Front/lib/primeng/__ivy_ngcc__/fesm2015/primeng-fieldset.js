][CONFIG_MANAGER] ConfigurationManager::loadDefaultParams()
[ 13756 4924][17 Oct 20:20:39][FileManager] FileManager::openFile: file "trac.defaults" does not exist
[ 13756 4924][17 Oct 20:20:39][FileManager] FileManager::readFile: error occured while opening the file "trac.defaults"
[ 13756 4924][17 Oct 20:20:39][CONFIG_MANAGER] ConfigurationManager::loadDefaultParams() error reading trac.defaults file in ConfigurationManager::loadDefaultParams()
[ 13756 4924][17 Oct 20:20:39][RaisException] RaisException::BaseException::BaseException: error code = 11, error message = error reading file in ConfigurationManager::loadDefaultParams(), file name =ConfigurationManager.cpp, line number = 1369
[ 13756 4924][17 Oct 20:20:39][CONFIG_MANAGER] ConfigurationManager::load(): __end__ 20:20:39.185. Total time - 1 milliseconds
[ 13756 4924][17 Oct 20:20:39][CONFIG_MANAGER] ConfigurationManager::init(): __end__ 20:20:39.185. Total time - 1 milliseconds
[ 13756 4924][17 Oct 20:20:39][CONFIG_MANAGER] ConfigurationManager::ConfigurationManager: __end__ 20:20:39.185. Total time - 1 milliseconds
[ 13756 4924][17 Oct 20:20:39][CONFIG_MANAGER] ConfigurationManager::create: __end__ 20:20:39.185. Total time - 1 milliseconds
[ 13756 4924][17 Oct 20:20:39][DIAGNOSTIC] [COVERAGE] [Diagnostic_EventReporter::report_helpdesk_event_1(s)] __start__
[ 13756 4924][17 Oct 20:20:39][DIAGNOSTIC] [DEBUG] [Diagnostic_EventReporter::report_helpdesk_event_1(s)]  eventDisplayType: 4 severityLevel: 1 userName:  siteName:  gwName:  gwIP:  eventText: Error in client initialization
[ 13756 4924][17 Oct 20:20:39][DIAGNOSTIC] [COVERAGE] [Diagnostic_Id_Generator::generateId(s)] __start__
[ 13756 4924][17 Oct 20:20:39][DIAGNOSTIC] [INFO] [Diagnostic_Id_Generator::generateId(s)] new id is: timeStamp: 1666056039, serialNumWithinTheSecond: 1
[ 13756 4924][17 Oct 20:20:39][DIAGNOSTIC] [COVERAGE] [Diagnostic_Id_Generator::generateId(s)] __end__ Total: 0 milliseconds.
[ 13756 4924][17 Oct 20:20:39][DIAGNOSTIC] [COVERAGE] [Diagnostic_EventReporter::_report_event(s)] __start__
[ 13756 4924][17 Oct 20:20:39][XmlWrapper] XmlDocument::XmlDocument: inside
[ 13756 4924][17 Oct 20:20:39][XmlWrapper] XmlDocument::SaveString: inside
[ 13756 4924][17 Oct 20:20:39][DIAGNOSTIC] [DEBUG] [Diagnostic_EventReporter::_report_event(s)] new event after removing 0d0a: 

<OBJECT name="helpdesk event" type="DiagnosticHelpdeskEventData">

  <OBJECT name="idD" type="Diagnostic_RecordId">
    <Field name="timeStampD" value="1666056039"></Field>
    <Field name="serialD" value="1"></Field>
  </OBJECT>

  <Field name="dataTypeD" value="1"></Field>

  <Field name="dataDisplayTypeD" value="4"></Field>

  <Field name="userNameD" value=""></Field>

  <Field name="siteNameD" value=""></Field>

  <Field name="gwNameD" value=""></Field>

  <Field name="gwIPD" value=""></Field>

  <Field name="severityLevelD" value="1"></Field>

  <Field name="dataD" value="Error in client initialization"></Field>

  <Field name="helpdeskRecordTypeD" value="-1"></Field>

</OBJECT>

[ 13756 4924][17 Oct 20:20:39][DIAGNOSTIC] [COVERAGE] [Diagnostic_eventLogHandler::Diagnostic_eventLogHandler::writeEventToLog(s)] __start__
[ 13756 4924][17 Oct 20:20:39][DIAGNOSTIC] [COVERAGE] [Diagnostic_eventLogHandler::Diagnostic_eventLogHandler::writeEventToLog(s)] __end__ Total: 0 milliseconds.
[ 13756 4924][17 Oct 20:20:39][TR_CONN_MANAGER] diagnostic_reporter: entering...
[ 13756 4924][17 Oct 20:20:39][TR_CONN_MANAGER] TR_CONN_MANAGER::CreateAndSendNotification: TrEventManager is not ready yet - ignore this notification - return
[ 13756 4924][17 Oct 20:20:39][DIAGNOSTIC] [COVERAGE] [Diagnostic_EventReporter::_report_event(s)] __end__ Total: 0 milliseconds.
[ 13756 4924][17 Oct 20:20:39][DIAGNOSTIC] [COVERAGE] [Diagnostic_EventReporter::report_helpdesk_event_1(s)] __end__ Total: 0 milliseconds.
[ 13756 4924][17 Oct 20:20:39][TR_OVERSITE] TR_OVERSITE::Create: EXCEPTION!
[ 13756 4924][17 Oct 20:20:39][TR_OVERSITE] TR_OVERSITE::Create: error reading file in ConfigurationManager::loadDefaultParams()
[ 13756 4924][17 Oct 20:20:39][TracService] ServiceMain: mainloop exited without stopping the service, calling exit
[ 13756 4924][17 Oct 20:20:39][] COM_Initializer::Dtor: nothing to do
[ 13756 4924][17 Oct 20:20:39][proxy_API] ~OS_API
[ 13756 4924][17 Oct 20:20:39][Multi-site] [COVERAGE] [MultiSiteAutoUpdateManager::~MultiSiteAutoUpdateManager] __start__
[ 13756 4924][17 Oct 20:20:39][Multi-site] [COVERAGE] [MultiSiteAutoUpdateManager::reset] __start__
[ 13756 4924][17 Oct 20:20:39][Multi-site] [COVERAGE] [MultiSiteAutoUpdateManager::setAutoUpdateState] __start__
[ 13756 4924][17 Oct 20:20:39][Multi-site] [INFO] [MultiSiteAutoUpdateManager::setAutoUpdateState]  moving form state eAutoUpdateState_preInit to state eAutoUpdateState_preInit
[ 13756 4924][17 Oct 20:20:39][Multi-site] [COVERAGE] [MultiSiteAutoUpdateManager::setAutoUpdateState] __end__ Total: 0 milliseconds.
[ 13756 4924][17 Oct 20:20:39][Multi-site] [COVERAGE] [MultiSiteAutoUpdateManager::reset] __end__ Total: 0 milliseconds.
[ 13756 4924][17 Oct 20:20:39][Multi-site] [COVERAGE] [MultiSiteAutoUpdateManager::~MultiSiteAutoUpdateManager] __end__ Total: 0 milliseconds.
[ 13756 4924][17 Oct 20:20:39][Multi-site] [COVERAGE] [MultiSiteEncDomainMapper::~MultiSiteEncDomainMapper] __start__
[ 13756 4924][17 Oct 20:20:39][Multi-site] [COVERAGE] [MultiSiteEncDomainMapper::~MultiSiteEncDomainMapper] __end__ Total: 0 milliseconds.
[ 3684 12844][17 Oct 20:20:39][TracService] ServiceMain: Entered service's main entry point (Check Point Endpoint Security)
[ 3684 12844][17 Oct 20:20:39][cpservice] service_report_status_to_scm: Reporting start pending
[ 3684 12844][17 Oct 20:20:39][TracService] IsDisabledInEps: failed to read mode from registry
[ 3684 12844][17 Oct 20:20:39][TracService] 

[ 3684 12844][17 Oct 20:20:39][TracService] -------------------------------------------------------------
[ 3684 12844][17 Oct 20:20:39][TracService] 					SERVICE WAS STARTED 						
[ 3684 12844][17 Oct 20:20:39][TracService] -------------------------------------------------------------

[ 3684 12844][17 Oct 20:20:39][DIAGNOSTIC] [COVERAGE] [Diagnostic_EventReporter::report_helpdesk_event_1(s)] __start__
[ 3684 12844][17 Oct 20:20:39][DIAGNOSTIC] [DEBUG] [Diagnostic_EventReporter::report_helpdesk_event_1(s)]  eventDisplayType: 0 severityLevel: 1 userName:  siteName:  gwName:  gwIP:  eventText: Service was started
[ 3684 12844][17 Oct 20:20:39][DIAGNOSTIC] [COVERAGE] [Diagnostic_Id_Generator::generateId(s)] __start__
[ 3684 12844][17 Oct 20:20:39][DIAGNOSTIC] [INFO] [Diagnostic_Id_Generator::generateId(s)] new id is: timeStamp: 1666056039, serialNumWithinTheSecond: 0
[ 3684 12844][17 Oct 20:20:39][DIAGNOSTIC] [COVERAGE] [Diagnostic_Id_Generator::generateId(s)] __end__ Total: 0 milliseconds.
[ 3684 12844][17 Oct 20:20:39][DIAGNOSTIC] [COVERAGE] [Diagnostic_EventReporter::_report_event(s)] __start__
[ 3684 12844][17 Oct 20:20:39][XmlWrapper] XmlDocument::XmlDocument: inside
[ 3684 12844][17 Oct 20:20:39][XmlWrapper] XmlDocument::SaveString: inside
[ 3684 12844][17 Oct 20:20:39][DIAGNOSTIC] [DEBUG] [Diagnostic_EventReporter::_report_event(s)] new event after removing 0d0a: 

<OBJECT name="helpdesk event" type="DiagnosticHelpdeskEventData">

  <OBJECT name="idD" type="Diagnostic_RecordId">
    <Field name="timeStampD" value="1666056039"></Field>
    <Field name="serialD" value="0"></Field>
  </OBJECT>

  <Field name="dataTypeD" value="1"></Field>

  <Field name="dataDisplayTypeD" value="0"></Field>

  <Field name="userNameD" value=""></Field>

  <Field name="siteNameD" value=""></Field>

  <Field name="gwNameD" value=""></Field>

  <Field name="gwIPD" value=""></Field>

  <Field name="severityLevelD" value="1"></Field>

  <Field name="dataD" value="Service was started"></Field>

  <Field name="helpdeskRecordTypeD" value="-1"></Field>

</OBJECT>

[ 3684 12844][17 Oct 20:20:39][DIAGNOSTIC] [COVERAGE] [Diagnostic_eventLogHandler::Diagnostic_eventLogHandler::writeEventToLog(s)] __start__
[ 3684 12844][17 Oct 20:20:39][DIAGNOSTIC] [COVERAGgcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet, ɵngcc2.Ripple], styles: [".p-fieldset-legend>a,.p-fieldset-legend>span{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-flexbox;display:flex;justify-content:center}.p-fieldset-toggleable .p-fieldset-legend a{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;cursor:pointer;overflow:hidden;position:relative;user-select:none}.p-fieldset-legend-text{line-height:1}"], encapsulation: 2, data: { animation: [
            trigger('fieldsetContent', [
                state('hidden', style({
                    height: '0',
                    overflow: 'hidden'
                })),
                state('visible', style({
                    height: '*'
                })),
                transition('visible <=> hidden', [style({ overflow: 'hidden' }), animate('{{transitionParams}}')]),
                transition('void => *', animate(0))
            ])
        ] }, changeDetection: 0 });
Fieldset.ctorParameters = () => [
    { type: ElementRef }
];
Fieldset.propDecorators = {
    legend: [{ type: Input }],
    toggleable: [{ type: Input }],
    collapsed: [{ type: Input }],
    collapsedChange: [{ type: Output }],
    onBeforeToggle: [{ type: Output }],
    onAfterToggle: [{ type: Output }],
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    transitionOptions: [{ type: Input }],
    templates: [{ type: ContentChildren, args: [PrimeTemplate,] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Fieldset, [{
        type: Component,
        args: [{
                selector: 'p-fieldset',
                template: `
        <fieldset [attr.id]="id" [ngClass]="{'p-fieldset p-component': true, 'p-fieldset-toggleable': toggleable}" [ngStyle]="style" [class]="styleClass">
            <legend class="p-fieldset-legend">
                <ng-container *ngIf="toggleable; else legendContent">
                    <a tabindex="0" (click)="toggle($event)" (keydown.enter)="toggle($event)" [attr.aria-controls]="id + '-content'" [attr.aria-expanded]="!collapsed" pRipple>
                        <span class="p-fieldset-toggler pi" *ngIf="toggleable" [ngClass]="{'pi-minus': !collapsed,'pi-plus':collapsed}"></span>
                        <ng-container *ngTemplateOutlet="legendContent"></ng-container>
                    </a>
                </ng-container>
                <ng-template #legendContent>
                    <span class="p-fieldset-legend-text">{{legend}}</span>
                    <ng-content select="p-header"></ng-content>
                    <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
                </ng-template>
            </legend>
            <div [attr.id]="id + '-content'" class="p-toggleable-content" [@fieldsetContent]="collapsed ? {value: 'hidden', params: {transitionParams: transitionOptions, height: '0'}} : {value: 'visible', params: {transitionParams: animating ? transitionOptions : '0ms', height: '*'}}" 
                        [attr.aria-labelledby]="id" [attr.aria-hidden]="collapsed"
                         (@fieldsetContent.done)="onToggleDone($event)" role="region">
                <div class="p-fieldset-content">
                    <ng-content></ng-content>
                    <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
                </div>
            </div>
        </fieldset>
    `,
                animations: [
                    trigger('fieldsetContent', [
                        state('hidden', style({
                            height: '0',
                            overflow: 'hidden'
                        })),
                        state('visible', style({
                            height: '*'
                        })),
                        transition('visible <=> hidden', [style({ overflow: 'hidden' }), animate('{{transitionParams}}')]),
                        transition('void => *', animate(0))
                    ])
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-fieldset-legend>a,.p-fieldset-legend>span{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-flexbox;display:flex;justify-content:center}.p-fieldset-toggleable .p-fieldset-legend a{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;cursor:pointer;overflow:hidden;position:relative;user-select:none}.p-fieldset-legend-text{line-height:1}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { collapsed: [{
            type: Input
        }], collapsedChange: [{
            type: Output
        }], onBeforeToggle: [{
            type: Output
        }], onAfterToggle: [{
            type: Output
        }], transitionOptions: [{
            type: Input
        }], legend: [{
            type: Input
        }], toggleable: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], templates: [{
            type: ContentChildren,
            args: [PrimeTemplate]
        }] }); })();
class FieldsetModule {
}
FieldsetModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: FieldsetModule });
FieldsetModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function FieldsetModule_Factory(t) { return new (t || FieldsetModule)(); }, imports: [[CommonModule, RippleModule], SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(FieldsetModule, { declarations: function () { return [Fieldset]; }, imports: function () { return [CommonModule, RippleModule]; }, exports: function () { return [Fieldset, SharedModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(FieldsetModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, RippleModule],
                exports: [Fieldset, SharedModule],
                declarations: [Fieldset]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { Fieldset, FieldsetModule };

//# sourceMappingURL=primeng-fieldset.js.map