OSTIC] [COVERAGE] [Diagnostic_EventReporter::_report_event(s)] __end__ Total: 0 milliseconds.
[ 12620 5828][17 Oct 17:44:21][DIAGNOSTIC] [COVERAGE] [Diagnostic_EventReporter::report_helpdesk_event_1(s)] __end__ Total: 0 milliseconds.
[ 12620 5828][17 Oct 17:44:21][TracService] Software\CheckPoint\TRAC\5.0 exists - no need to backup
[ 12620 5828][17 Oct 17:44:21][CONFIG_MANAGER] ConfigurationManager::create: __start__ 17:44:21.265
[ 12620 5828][17 Oct 17:44:21][CONFIG_MANAGER] ConfigurationManager::ConfigurationManager: __start__ 17:44:21.265
[ 12620 5828][17 Oct 17:44:21][CONFIG_MANAGER] ConfigurationManager::init(): __start__ 17:44:21.265
[ 12620 5828][17 Oct 17:44:21][CONFIG_MANAGER] ConfigurationManager::load(): __start__ 17:44:21.265
[ 12620 5828][17 Oct 17:44:21][CONFIG_MANAGER] ConfigurationManager::loadDefaultParams()
[ 12620 5828][17 Oct 17:44:21][FileManager] FileManager::openFile: file "trac.defaults" does not exist
[ 12620 5828][17 Oct 17:44:21][FileManager] FileManager::readFile: error occured while opening the file "trac.defaults"
[ 12620 5828][17 Oct 17:44:21][CONFIG_MANAGER] ConfigurationManager::loadDefaultParams() error reading trac.defaults file in ConfigurationManager::loadDefaultParams()
[ 12620 5828][17 Oct 17:44:21][RaisException] RaisException::BaseException::BaseException: error code = 11, error message = error reading file in ConfigurationManager::loadDefaultParams(), file name =ConfigurationManager.cpp, line number = 1369
[ 12620 5828][17 Oct 17:44:21][CONFIG_MANAGER] ConfigurationManager::load(): __end__ 17:44:21.266. Total time - 1 milliseconds
[ 12620 5828][17 Oct 17:44:21][CONFIG_MANAGER] ConfigurationManager::init(): __end__ 17:44:21.266. Total time - 1 milliseconds
[ 12620 5828][17 Oct 17:44:21][CONFIG_MANAGER] ConfigurationManager::ConfigurationManager: __end__ 17:44:21.266. Total time - 1 milliseconds
[ 12620 5828][17 Oct 17:44:21][CONFIG_MANAGER] ConfigurationManager::create: __end__ 17:44:21.266. Total time - 1 milliseconds
[ 12620 5828][17 Oct 17:44:21][DIAGNOSTIC] [COVERAGE] [Diagnostic_EventReporter::report_helpdesk_event_1(s)] __start__
[ 12620 5828][17 Oct 17:44:21][DIAGNOSTIC] [DEBUG] [Diagnostic_EventReporter::report_helpdesk_event_1(s)]  eventDisplayType: 4 severityLevel: 1 userName:  siteName:  gwName:  gwIP:  eventText: Error in client initialization
[ 12620 5828][17 Oct 17:44:21][DIAGNOSTIC] [COVERAGE] [Diagnostic_Id_Generator::generateId(s)] __start__
[ 12620 5828][17 Oct 17:44:21][DIAGNOSTIC] [INFO] [Diagnostic_Id_Generator::generateId(s)] new id is: timeStamp: 1666046661, serialNumWithinTheSecond: 1
[ 12620 5828][17 Oct 17:44:21][DIAGNOSTIC] [COVERAGE] [Diagnostic_Id_Generator::generateId(s)] __end__ Total: 0 milliseconds.
[ 12620 5828][17 Oct 17:44:21][DIAGNOSTIC] [COVERAGE] [Diagnostic_EventReporter::_report_event(s)] __start__
[ 12620 5828][17 Oct 17:44:21][XmlWrapper] XmlDocument::XmlDocument: inside
[ 12620 5828][17 Oct 17:44:21][XmlWrapper] XmlDocument::SaveString: inside
[ 12620 5828][17 Oct 17:44:21][DIAGNOSTIC] [DEBUG] [Diagnostic_EventReporter::_report_event(s)] new event after removing 0d0a: 

<OBJECT name="helpdesk event" type="DiagnosticHelpdeskEventData">

  <OBJECT name="idD" type="Diagnostic_RecordId">
    <Field name="timeStampD" value="1666046661"></Field>
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

[ 12620 5828][17 Oct 17:44:21][DIAGNOSTIC] [COVERAGE] [Diagnostic_eventLogHandler::Diagnostic_eventLogHandler::writeEventToLog(s)] __start__
[ 12620 5828][17 Oct 17:44:21][DIAGNOSTIC] [COVERAGE] [Diagnostic_eventLogHandler::Diagnostic_eventLogHandler::writeEventToLog(s)] __end__ Total: 0 milliseconds.
[ 12620 5828][17 Oct 17:44:21][TR_CONN_MANAGER] diagnostic_reporter: entering...
[ 12620 5828][17 Oct 17:44:21][TR_CONN_MANAGER] TR_CONN_MANAGER::CreateAndSendNotification: TrEventManager is not ready yet - ignore this notification - return
[ 12620 5828][17 Oct 17:44:21][DIAGNOSTIC] [COVERAGE] [Diagnostic_EventReporter::_report_event(s)] __end__ Total: 0 milliseconds.
[ 12620 5828][17 Oct 17:44:21][DIAGNOSTIC] [COVERAGE] [Diagnostic_EventReporter::report_helpdesk_event_1(s)] __end__ Total: 0 milliseconds.
[ 12620 5828][17 Oct 17:44:21][TR_OVERSITE] TR_OVERSITE::Create: EXCEPTION!
[ 12620 5828][17 Oct 17:44:21][TR_OVERSITE] TR_OVERSITE::Create: error reading file in ConfigurationManager::loadDefaultParams()
[ 12620 5828][17 Oct 17:44:21][TracService] ServiceMain: mainloop exited without stopping the service, calling exit
[ 12620 5828][17 Oct 17:44:21][] COM_Initializer::Dtor: nothing to do
[ 12620 5828][17 Oct 17:44:21][proxy_API] ~OS_API
[ 12620 5828][17 Oct 17:44:21][Multi-site] [COVERAGE] [MultiSiteAutoUpdateManager::~MultiSiteAutoUpdateManager] __start__
[ 12620 5828][17 Oct 17:44:21][Multi-site] [COVERAGE] [MultiSiteAutoUpdateManager::reset] __start__
[ 12620 5828][17 Oct 17:44:21][Multi-site] [COVERAGE] [MultiSiteAutoUpdateManager::setAutoUpdateState] __start__
[ 12620 5828][17 Oct 17:44:21][Multi-site] [INFO] [MultiSiteAutoUpdateManager::setAutoUpdateState]  moving form state eAutoUpdateState_preInit to state eAutoUpdateState_preInit
[ 12620 5828][17 Oct 17:44:21][Multi-site] [COVERAGE] [MultiSiteAutoUpdateManager::setAutoUpdateState] __end__ Total: 0 milliseconds.
[ 12620 5828][17 Oct 17:44:21][Multi-site] [COVERAGE] [MultiSiteAutoUpdateManager::reset] __end__ Total: 0 milliseconds.
[ 12620 5828][17 Oct 17:44:21][Multi-site] [COVERAGE] [MultiSiteAutoUpdateManager::~MultiSiteAutoUpdateManager] __end__ Total: 0 milliseconds.
[ 12620 5828][17 Oct 17:44:21][Multi-site] [COVERAGE] [MultiSiteEncDomainMapper::~MultiSiteEncDomainMapper] __start__
[ 12620 5828][17 Oct 17:44:21][Multi-site] [COVERAGE] [MultiSiteEncDomainMapper::~MultiSiteEncDomainMapper] __end__ Total: 0 milliseconds.
[ 5388 10632][17 Oct 17:44:21][TracService] ServiceMain: Entered service's main entry point (Check Point Endpoint Security)
[ 5388 10632][17 Oct 17:44:21][cpservice] service_report_status_to_scm: Reporting start pending
[ 5388 10632][17 Oct 17:44:21][TracService] IsDisabledInEps: failed to read mode from registry
[ 5388 10632][17 Oct 17:44:21][TracService] 

[ 5388 10632][17 Oct 17:44:21][TracService] -------------------------------------------------------------
[ 5388 10632][17 Oct 17:44:21][TracService] 					SERVICE WAS STARTED 						
[ 5388 10632][17 Oct 17:44:21][TracService] -------------------------------------------------------------

[ 5388 10632][17 Oct 17:44:21][DIAGNOSTIC] [COVERAGE] [Diagnostic_EventReporter::report_helpdesk_event_1(s)] __start__
[ 5388 10632][17 Oct 17:44:21][DIAGNOSTIC] [DEBUG] [Diagnostic_EventReporter::report_helpdesk_event_1(s)]  eventDisplayType: 0 severityLevel: 1 userName:  siteName:  gwName:  gwIP:  eventText: Service was started
[ 5388 10632][17 Oct 17:44:21][DIAGNOSTIC] [COVERAGE] [Diagnostic_Id_Generator::generateId(s)] __start__
[ 5388 10632][17 Oct 17:44:21][DIAGNOSTIC] [INFO] [Diagnostic_Id_Generator::generateId(s)] new id is: timeStamp: 1666046661, serialNumWithinTheSecond: 0
[ 5388 10632][17 Oct 17:44:21][DIAGNOSTIC] [COVERAGE] [Diagnostic_Id_Generator::generateId(s)] __end__ Total: 0 milliseconds.
[ 5388 10632][17 Oct 17:44:21][DIAGNOSTIC] [COVERAGE] [Diagnostic_EventReporter::_report_event(s)] __start__
[ 5388 10632][17 Oct 17:44:21][XmlWrapper] XmlDocument::XmlDocument: inside
[ 5388 10632][17 Oct 17:44:21][XmlWrapper] XmlDocument::SaveString: inside
[ 5388 10632][17 Oct 17:44:21][DIAGNOSTIC] [DEBUG] [Diagnostic_EventReporter::_report_event(s)] new event after removing 0d0a: 

<OBJECT name="helpdesk event" type="DiagnosticHelpdeskEventData">

  <OBJECT name="idD" type="Diagnostic_RecordId">
  showHeader: [{ type: core.Input }],
        toggler: [{ type: core.Input }],
        collapsedChange: [{ type: core.Output }],
        onBeforeToggle: [{ type: core.Output }],
        onAfterToggle: [{ type: core.Output }],
        transitionOptions: [{ type: core.Input }],
        footerFacet: [{ type: core.ContentChild, args: [api.Footer,] }],
        templates: [{ type: core.ContentChildren, args: [api.PrimeTemplate,] }]
    };
    var PanelModule = /** @class */ (function () {
        function PanelModule() {
        }
        return PanelModule;
    }());
    PanelModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule, api.SharedModule, ripple.RippleModule],
                    exports: [Panel, api.SharedModule],
                    declarations: [Panel]
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.Panel = Panel;
    exports.PanelModule = PanelModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=primeng-panel.umd.js.map
