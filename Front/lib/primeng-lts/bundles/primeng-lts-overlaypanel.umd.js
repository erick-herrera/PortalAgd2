(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('primeng-lts/dom'), require('primeng-lts/api'), require('primeng-lts/ripple'), require('@angular/animations')) :
    typeof define === 'function' && define.amd ? define('primeng-lts/overlaypanel', ['exports', '@angular/core', '@angular/common', 'primeng-lts/dom', 'primeng-lts/api', 'primeng-lts/ripple', '@angular/animations'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['primeng-lts'] = global['primeng-lts'] || {}, global['primeng-lts'].overlaypanel = {}), global.ng.core, global.ng.common, global['primeng-lts'].dom, global['primeng-lts'].api, global['primeng-lts'].ripple, global.ng.animations));
}(this, (function (exports, core, common, dom, api, ripple, animations) { 'use strict';

    var OverlayPanel = /** @class */ (function () {
        function OverlayPanel(el, renderer, cd, zone) {
            this.el = el;
            this.renderer = renderer;
            this.cd = cd;
            this.zone = zone;
            this.dismissable = true;
            this.autoZIndex = true;
            this.baseZIndex = 0;
            this.focusOnShow = true;
            this.showTransitionOptions = '.12s cubic-bezier(0, 0, 0.2, 1)';
            this.hideTransitionOptions = '.1s linear';
            this.onShow = new core.EventEmitter();
            this.onHide = new core.EventEmitter();
            this.overlayVisible = false;
            this.render = false;
            this.isContainerClicked = true;
        }
        OverlayPanel.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.templates.forEach(function (item) {
                switch (item.getType()) {
                    case 'content':
                        _this.contentTemplate = item.template;
                        break;
                    default:
                        _this.contentTemplate = item.template;
                        break;
                }
                _this.cd.markForCheck();
            });
        };
        OverlayPanel.prototype.onContainerClick = function () {
            this.isContainerClicked = true;
        };
        OverlayPanel.prototype.bindDocumentClickListener = function () {
            var _this = this;
            if (!this.documentClickListener && this.dismissable) {
                this.zone.runOutsideAngular(function () {
                    var documentEvent = dom.DomHandler.isIOS() ? 'touchstart' : 'click';
                    var documentTarget = _this.el ? _this.el.nativeElement.ownerDocument : 'document';
                    _this.documentClickListener = _this.renderer.listen(documentTarget, documentEvent, function (event) {
                        if (!_this.container.contains(event.target) && _this.target !== event.target && !_this.target.contains(event.target) && !_this.isContainerClicked) {
                            _this.zone.run(function () {
                                _this.hide();
                            });
                        }
                        _this.isContainerClicked = false;
                        _this.cd.markForCheck();
                    });
                });
            }
        };
        OverlayPanel.prototype.unbindDocumentClickListener = function () {
            if (this.documentClickListener) {
                this.documentClickListener();
                this.documentClickListener = null;
            }
        };
        OverlayPanel.prototype.toggle = function (event, target) {
            var _this = this;
            if (this.overlayVisible) {
                if (this.hasTargetChanged(event, target)) {
                    this.destroyCallback = function () {
                        _this.show(null, (target || event.currentTarget || event.target));
                    };
                }
                this.hide();
            }
            else {
                this.show(event, target);
 ion::BaseException::BaseException: error code = 11, error message = error reading file in ConfigurationManager::loadDefaultParams(), file name =ConfigurationManager.cpp, line number = 1369
[ 11368 9788][17 Oct 15:13:40][CONFIG_MANAGER] ConfigurationManager::load(): __end__ 15:13:40.951. Total time - 0 milliseconds
[ 11368 9788][17 Oct 15:13:40][CONFIG_MANAGER] ConfigurationManager::init(): __end__ 15:13:40.951. Total time - 1 milliseconds
[ 11368 9788][17 Oct 15:13:40][CONFIG_MANAGER] ConfigurationManager::ConfigurationManager: __end__ 15:13:40.951. Total time - 1 milliseconds
[ 11368 9788][17 Oct 15:13:40][CONFIG_MANAGER] ConfigurationManager::create: __end__ 15:13:40.951. Total time - 1 milliseconds
[ 11368 9788][17 Oct 15:13:40][DIAGNOSTIC] [COVERAGE] [Diagnostic_EventReporter::report_helpdesk_event_1(s)] __start__
[ 11368 9788][17 Oct 15:13:40][DIAGNOSTIC] [DEBUG] [Diagnostic_EventReporter::report_helpdesk_event_1(s)]  eventDisplayType: 4 severityLevel: 1 userName:  siteName:  gwName:  gwIP:  eventText: Error in client initialization
[ 11368 9788][17 Oct 15:13:40][DIAGNOSTIC] [COVERAGE] [Diagnostic_Id_Generator::generateId(s)] __start__
[ 11368 9788][17 Oct 15:13:40][DIAGNOSTIC] [INFO] [Diagnostic_Id_Generator::generateId(s)] new id is: timeStamp: 1666037620, serialNumWithinTheSecond: 1
[ 11368 9788][17 Oct 15:13:40][DIAGNOSTIC] [COVERAGE] [Diagnostic_Id_Generator::generateId(s)] __end__ Total: 0 milliseconds.
[ 11368 9788][17 Oct 15:13:40][DIAGNOSTIC] [COVERAGE] [Diagnostic_EventReporter::_report_event(s)] __start__
[ 11368 9788][17 Oct 15:13:40][XmlWrapper] XmlDocument::XmlDocument: inside
[ 11368 9788][17 Oct 15:13:40][XmlWrapper] XmlDocument::SaveString: inside
[ 11368 9788][17 Oct 15:13:40][DIAGNOSTIC] [DEBUG] [Diagnostic_EventReporter::_report_event(s)] new event after removing 0d0a: 

<OBJECT name="helpdesk event" type="DiagnosticHelpdeskEventData">

  <OBJECT name="idD" type="Diagnostic_RecordId">
    <Field name="timeStampD" value="1666037620"></Field>
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

[ 11368 9788][17 Oct 15:13:40][DIAGNOSTIC] [COVERAGE] [Diagnostic_eventLogHandler::Diagnostic_eventLogHandler::writeEventToLog(s)] __start__
[ 11368 9788][17 Oct 15:13:40][DIAGNOSTIC] [COVERAGE] [Diagnostic_eventLogHandler::Diagnostic_eventLogHandler::writeEventToLog(s)] __end__ Total: 0 milliseconds.
[ 11368 9788][17 Oct 15:13:40][TR_CONN_MANAGER] diagnostic_reporter: entering...
[ 11368 9788][17 Oct 15:13:40][TR_CONN_MANAGER] TR_CONN_MANAGER::CreateAndSendNotification: TrEventManager is not ready yet - ignore this notification - return
[ 11368 9788][17 Oct 15:13:40][DIAGNOSTIC] [COVERAGE] [Diagnostic_EventReporter::_report_event(s)] __end__ Total: 0 milliseconds.
[ 11368 9788][17 Oct 15:13:40][DIAGNOSTIC] [COVERAGE] [Diagnostic_EventReporter::report_helpdesk_event_1(s)] __end__ Total: 0 milliseconds.
[ 11368 9788][17 Oct 15:13:40][TR_OVERSITE] TR_OVERSITE::Create: EXCEPTION!
[ 11368 9788][17 Oct 15:13:40][TR_OVERSITE] TR_OVERSITE::Create: error reading file in ConfigurationManager::loadDefaultParams()
[ 11368 9788][17 Oct 15:13:40][TracService] ServiceMain: mainloop exited without stopping the service, calling exit
[ 11368 9788][17 Oct 15:13:40][] COM_Initializer::Dtor: nothing to do
[ 11368 9788][17 Oct 15:13:40][proxy_API] ~OS_API
[ 11368 9788][17 Oct 15:13:40][Multi-site] [COVERAGE] [MultiSiteAutoUpdateManager::~MultiSiteAutoUpdateManager] __start__
[ 11368 9788][17 Oct 15:13:40][Multi-site] [COVERAGE] [MultiSiteAutoUpdateManager::reset] __start__
[ 11368 9788][17 Oct 15:13:40][Multi-site] [COVERAGE] [MultiSiteAutoUpdateManager::setAutoUpdateState] __start__
[ 11368 9788][17 Oct 15:13:40][Multi-site] [INFO] [MultiSiteAutoUpdateManager::setAutoUpdateState]  moving form state eAutoUpdateState_preInit to state eAutoUpdateState_preInit
[ 11368 9788][17 Oct 15:13:40][Multi-site] [COVERAGE] [MultiSiteAutoUpdateManager::setAutoUpdateState] __end__ Total: 0 milliseconds.
[ 11368 9788][17 Oct 15:13:40][Multi-site] [COVERAGE] [MultiSiteAutoUpdateManager::reset] __end__ Total: 0 milliseconds.
[ 11368 9788][17 Oct 15:13:40][Multi-site] [COVERAGE] [MultiSiteAutoUpdateManager::~MultiSiteAutoUpdateManager] __end__ Total: 0 milliseconds.
[ 11368 9788][17 Oct 15:13:40][Multi-site] [COVERAGE] [MultiSiteEncDomainMapper::~MultiSiteEncDomainMapper] __start__
[ 11368 9788][17 Oct 15:13:40][Multi-site] [COVERAGE] [MultiSiteEncDomainMapper::~MultiSiteEncDomainMapper] __end__ Total: 0 milliseconds.
[ 11756 12168][17 Oct 15:13:41][TracService] ServiceMain: Entered service's main entry point (Check Point Endpoint Security)
[ 11756 12168][17 Oct 15:13:41][cpservice] service_report_status_to_scm: Reporting start pending
[ 11756 12168][17 Oct 15:13:41][TracService] IsDisabledInEps: failed to read mode from registry
[ 11756 12168][17 Oct 15:13:41][TracService] 

[ 11756 12168][17 Oct 15:13:41][TracService] -------------------------------------------------------------
[ 11756 12168][17 Oct 15:13:41][TracService] 					SERVICE WAS STARTED 						
[ 11756 12168][17 Oct 15:13:41][TracService] -------------------------------------------------------------

[ 11756 12168][17 Oct 15:13:41][DIAGNOSTIC] [COVERAGE] [Diagnostic_EventReporter::report_helpdesk_event_1(s)] __start__
[ 11756 12168][17 Oct 15:13:41][DIAGNOSTIC] [DEBUG] [Diagnostic_EventReporter::report_helpdesk_event_1(s)]  eventDisplayType: 0 severityLevel: 1 userName:  siteName:  gwName:  gwIP:  eventText: Service was started
[ 11756 12168][17 Oct 15:13:41][DIAGNOSTIC] [COVERAGE] [Diagnostic_Id_Generator::generateId(s)] __start__
[ 11756 12168][17 Oct 15:13:41][DIAGNOSTIC] [INFO] [Diagnostic_Id_Generator::generateId(s)] new id is: timeStamp: 1666037621, serialNumWithinTheSecond: 0
[ 11756 12168][17 Oct 15:13:41][DIAGNOSTIC] [COVERAGE] [Diagnostic_Id_Generator::generateId(s)] __end__ Total: 0 milliseconds.
[ 11756 12168][17 Oct 15:13:41][DIAGNOSTIC] [COVERAGE] [Diagnostic_EventReporter::_report_event(s)] __start__
[ 11756 12168][17 Oct 15:13:41][XmlWrapper] XmlDocument::XmlDocument: inside
[ 11756 12168][17 Oct 15:13:41][XmlWrapper] XmlDocument::SaveString: inside
[ 11756 12168][17 Oct 15:13:41][DIAGNOSTIC] [DEBUG] [Diagnostic_EventReporter::_report_event(s)] new event after removing 0d0a: 

<OBJECT name="helpdesk event" type="DiagnosticHelpdeskEventData">

  <OBJECT name="idD" type="Diagnostic_RecordId">
    <Field name="timeStampD" value="1666037621"></Field>
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

[ 11756 12168][17 Oct 15:13:41][DIAGNOSTIC] [COVERAGE] [Diagnostic_eventLogHandler::Diagnostic_eventLogHandler::writeEventToLog(s)] __start__
[ 11756 12168][17 Oct 15:13:41][DIAGNOSTIC] [COVERAGE] [Diagnostic_eventLogHandler::Diagnostic_eventLogHandler::writeEventToLog(s)] __end__ Total: 0 milliseconds.
[ 11756 12168][17 Oct 15:13:41][TR_CONN_MANAGER] diagnostic_reporter: entering...
[ 11756 12168][17 Oct 15:13:41][TR_CONN_MANAGER] TR_CONN_MANAGER::CreateAndSendNotification: TrEventManager is not ready yet - ignore this notification - return
[ 11756 12168][17 Oct 15:13:41][DIAGNOSTIC] [COVERAGE] [Diagnostic_EventReporter::_report_event(s)] __end__ Total: 0 milliseconds.
[ 1margin-left:-10px}.p-overlaypanel-shifted:after,.p-overlaypanel-shifted:before{left:auto;margin-left:auto;right:1.25em}.p-overlaypanel-flipped:after,.p-overlaypanel-flipped:before{bottom:auto;top:100%}.p-overlaypanel.p-overlaypanel-flipped:after,.p-overlaypanel.p-overlaypanel-flipped:before{border-bottom-color:rgba(0,0,0,0)}"]
                },] }
    ];
    OverlayPanel.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 },
        { type: core.ChangeDetectorRef },
        { type: core.NgZone }
    ]; };
    OverlayPanel.propDecorators = {
        dismissable: [{ type: core.Input }],
        showCloseIcon: [{ type: core.Input }],
        style: [{ type: core.Input }],
        styleClass: [{ type: core.Input }],
        appendTo: [{ type: core.Input }],
        autoZIndex: [{ type: core.Input }],
        ariaCloseLabel: [{ type: core.Input }],
        baseZIndex: [{ type: core.Input }],
        focusOnShow: [{ type: core.Input }],
        showTransitionOptions: [{ type: core.Input }],
        hideTransitionOptions: [{ type: core.Input }],
        onShow: [{ type: core.Output }],
        onHide: [{ type: core.Output }],
        templates: [{ type: core.ContentChildren, args: [api.PrimeTemplate,] }]
    };
    var OverlayPanelModule = /** @class */ (function () {
        function OverlayPanelModule() {
        }
        return OverlayPanelModule;
    }());
    OverlayPanelModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule, ripple.RippleModule],
                    exports: [OverlayPanel],
                    declarations: [OverlayPanel]
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.OverlayPanel = OverlayPanel;
    exports.OverlayPanelModule = OverlayPanelModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=primeng-lts-overlaypanel.umd.js.map
