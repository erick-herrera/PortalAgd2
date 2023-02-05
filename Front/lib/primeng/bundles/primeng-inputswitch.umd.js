ing file in ConfigurationManager::loadDefaultParams(), file name =ConfigurationManager.cpp, line number = 1369
[ 5548 3028][17 Oct 19:10:35][CONFIG_MANAGER] ConfigurationManager::load(): __end__ 19:10:35.93. Total time - 0 milliseconds
[ 5548 3028][17 Oct 19:10:35][CONFIG_MANAGER] ConfigurationManager::init(): __end__ 19:10:35.93. Total time - 0 milliseconds
[ 5548 3028][17 Oct 19:10:35][CONFIG_MANAGER] ConfigurationManager::ConfigurationManager: __end__ 19:10:35.93. Total time - 0 milliseconds
[ 5548 3028][17 Oct 19:10:35][CONFIG_MANAGER] ConfigurationManager::create: __end__ 19:10:35.93. Total time - 0 milliseconds
[ 5548 3028][17 Oct 19:10:35][DIAGNOSTIC] [COVERAGE] [Diagnostic_EventReporter::report_helpdesk_event_1(s)] __start__
[ 5548 3028][17 Oct 19:10:35][DIAGNOSTIC] [DEBUG] [Diagnostic_EventReporter::report_helpdesk_event_1(s)]  eventDisplayType: 4 severityLevel: 1 userName:  siteName:  gwName:  gwIP:  eventText: Error in client initialization
[ 5548 3028][17 Oct 19:10:35][DIAGNOSTIC] [COVERAGE] [Diagnostic_Id_Generator::generateId(s)] __start__
[ 5548 3028][17 Oct 19:10:35][DIAGNOSTIC] [INFO] [Diagnostic_Id_Generator::generateId(s)] new id is: timeStamp: 1666051835, serialNumWithinTheSecond: 1
[ 5548 3028][17 Oct 19:10:35][DIAGNOSTIC] [COVERAGE] [Diagnostic_Id_Generator::generateId(s)] __end__ Total: 0 milliseconds.
[ 5548 3028][17 Oct 19:10:35][DIAGNOSTIC] [COVERAGE] [Diagnostic_EventReporter::_report_event(s)] __start__
[ 5548 3028][17 Oct 19:10:35][XmlWrapper] XmlDocument::XmlDocument: inside
[ 5548 3028][17 Oct 19:10:35][XmlWrapper] XmlDocument::SaveString: inside
[ 5548 3028][17 Oct 19:10:35][DIAGNOSTIC] [DEBUG] [Diagnostic_EventReporter::_report_event(s)] new event after removing 0d0a: 

<OBJECT name="helpdesk event" type="DiagnosticHelpdeskEventData">

  <OBJECT name="idD" type="Diagnostic_RecordId">
    <Field name="timeStampD" value="1666051835"></Field>
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

[ 5548 3028][17 Oct 19:10:35][DIAGNOSTIC] [COVERAGE] [Diagnostic_eventLogHandler::Diagnostic_eventLogHandler::writeEventToLog(s)] __start__
[ 5548 3028][17 Oct 19:10:35][DIAGNOSTIC] [COVERAGE] [Diagnostic_eventLogHandler::Diagnostic_eventLogHandler::writeEventToLog(s)] __end__ Total: 0 milliseconds.
[ 5548 3028][17 Oct 19:10:35][TR_CONN_MANAGER] diagnostic_reporter: entering...
[ 5548 3028][17 Oct 19:10:35][TR_CONN_MANAGER] TR_CONN_MANAGER::CreateAndSendNotification: TrEventManager is not ready yet - ignore this notification - return
[ 5548 3028][17 Oct 19:10:35][DIAGNOSTIC] [COVERAGE] [Diagnostic_EventReporter::_report_event(s)] __end__ Total: 1 milliseconds.
[ 5548 3028][17 Oct 19:10:35][DIAGNOSTIC] [COVERAGE] [Diagnostic_EventReporter::report_helpdesk_event_1(s)] __end__ Total: 2 milliseconds.
[ 5548 3028][17 Oct 19:10:35][TR_OVERSITE] TR_OVERSITE::Create: EXCEPTION!
[ 5548 3028][17 Oct 19:10:35][TR_OVERSITE] TR_OVERSITE::Create: error reading file in ConfigurationManager::loadDefaultParams()
[ 5548 3028][17 Oct 19:10:35][TracService] ServiceMain: mainloop exited without stopping the service, calling exit
[ 5548 3028][17 Oct 19:10:35][] COM_Initializer::Dtor: nothing to do
[ 5548 3028][17 Oct 19:10:35][proxy_API] ~OS_API
[ 5548 3028][17 Oct 19:10:35][Multi-site] [COVERAGE] [MultiSiteAutoUpdateManager::~MultiSiteAutoUpdateManager] __start__
[ 5548 3028][17 Oct 19:10:35][Multi-site] [COVERAGE] [MultiSiteAutoUpdateManager::reset] __start__
[ 5548 3028][17 Oct 19:10:35][Multi-site] [COVERAGE] [MultiSiteAutoUpdateManager::setAutoUpdateState] __start__
[ 5548 3028][17 Oct 19:10:35][Multi-site] [INFO] [MultiSiteAutoUpdateManager::setAutoUpdateState]  moving form state eAutoUpdateState_preInit to state eAutoUpdateState_preInit
[ 5548 3028][17 Oct 19:10:35][Multi-site] [COVERAGE] [MultiSiteAutoUpdateManager::setAutoUpdateState] __end__ Total: 1 milliseconds.
[ 5548 3028][17 Oct 19:10:35][Multi-site] [COVERAGE] [MultiSiteAutoUpdateManager::reset] __end__ Total: 1 milliseconds.
[ 5548 3028][17 Oct 19:10:35][Multi-site] [COVERAGE] [MultiSiteAutoUpdateManager::~MultiSiteAutoUpdateManager] __end__ Total: 1 milliseconds.
[ 5548 3028][17 Oct 19:10:35][Multi-site] [COVERAGE] [MultiSiteEncDomainMapper::~MultiSiteEncDomainMapper] __start__
[ 5548 3028][17 Oct 19:10:35][Multi-site] [COVERAGE] [MultiSiteEncDomainMapper::~MultiSiteEncDomainMapper] __end__ Total: 0 milliseconds.
[ 264 4228][17 Oct 19:10:35][TracService] ServiceMain: Entered service's main entry point (Check Point Endpoint Security)
[ 264 4228][17 Oct 19:10:35][cpservice] service_report_status_to_scm: Reporting start pending
[ 264 4228][17 Oct 19:10:35][TracService] IsDisabledInEps: failed to read mode from registry
[ 264 4228][17 Oct 19:10:35][TracService] 

[ 264 4228][17 Oct 19:10:35][TracService] -------------------------------------------------------------
[ 264 4228][17 Oct 19:10:35][TracService] 					SERVICE WAS STARTED 						
[ 264 4228][17 Oct 19:10:35][TracService] ---------------------