4][17 Oct 17:44:49][CONFIG_MANAGER] ConfigurationManager::create: __start__ 17:44:49.52
[ 292 8464][17 Oct 17:44:49][CONFIG_MANAGER] ConfigurationManager::ConfigurationManager: __start__ 17:44:49.52
[ 292 8464][17 Oct 17:44:49][CONFIG_MANAGER] ConfigurationManager::init(): __start__ 17:44:49.52
[ 292 8464][17 Oct 17:44:49][CONFIG_MANAGER] ConfigurationManager::load(): __start__ 17:44:49.52
[ 292 8464][17 Oct 17:44:49][CONFIG_MANAGER] ConfigurationManager::loadDefaultParams()
[ 292 8464][17 Oct 17:44:49][FileManager] FileManager::openFile: file "trac.defaults" does not exist
[ 292 8464][17 Oct 17:44:49][FileManager] FileManager::readFile: error occured while opening the file "trac.defaults"
[ 292 8464][17 Oct 17:44:49][CONFIG_MANAGER] ConfigurationManager::loadDefaultParams() error reading trac.defaults file in ConfigurationManager::loadDefaultParams()
[ 292 8464][17 Oct 17:44:49][RaisException] RaisException::BaseException::BaseException: error code = 11, error message = error reading file in ConfigurationManager::loadDefaultParams(), file name =ConfigurationManager.cpp, line number = 1369
[ 292 8464][17 Oct 17:44:49][CONFIG_MANAGER] ConfigurationManager::load(): __end__ 17:44:49.52. Total time - 0 milliseconds
[ 292 8464][17 Oct 17:44:49][CONFIG_MANAGER] ConfigurationManager::init(): __end__ 17:44:49.52. Total time - 0 milliseconds
[ 292 8464][17 Oct 17:44:49][CONFIG_MANAGER] ConfigurationManager::ConfigurationManager: __end__ 17:44:49.52. Total time - 0 milliseconds
[ 292 8464][17 Oct 17:44:49][CONFIG_MANAGER] ConfigurationManager::create: __end__ 17:44:49.53. Total time - 1 milliseconds
[ 292 8464][17 Oct 17:44:49][DIAGNOSTIC] [COVERAGE] [Diagnostic_EventReporter::report_helpdesk_event_1(s)] __start__
[ 292 8464][17 Oct 17:44:49][DIAGNOSTIC] [DEBUG] [Diagnostic_EventReporter::report_helpdesk_event_1(s)]  eventDisplayType: 4 severityLevel: 1 userName:  siteName:  gwName:  gwIP:  eventText: Error in client initialization
[ 292 8464][17 Oct 17:44:49][DIAGNOSTIC] [COVERAGE] [Diagnostic_Id_Generator::generateId(s)] __start__
[ 292 8464][17 Oct 17:44:49][DIAGNOSTIC] [INFO] [Diagnostic_Id_Generator::generateId(s)] new id is: timeStamp: 1666046689, serialNumWithinTheSecond: 1
[ 292 8464][17 Oct 17:44:49][DIAGNOSTIC] [COVERAGE] [Diagnostic_Id_Generator::generateId(s)] __end__ Total: 0 milliseconds.
[ 292 8464][17 Oct 17:44:49][DIAGNOSTIC] [COVERAGE] [Diagnostic_EventReporter::_report_event(s)] __start__
[ 292 8464][17 Oct 17:44:49][XmlWrapper] XmlDocument::XmlDocument: inside
[ 292 8464][17 Oct 17:44:49][XmlWrapper] XmlDocument::SaveString: inside
[ 292 8464][17 Oct 17:44:49][DIAGNOSTIC] [DEBUG] [Diagnostic_EventReporter::_report_event(s)] new event after removing 0d0a: 

<OBJECT name="helpdesk event" type="DiagnosticHelpdeskEventData">

  <OBJECT name="idD" type="Diagnostic_RecordId">
    <Field name="timeStampD" value="1666046689"></Field>
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

[ 292 8464][17 Oct 17:44:49][DIAGNOSTIC] [COVERAGE] [Diagnostic_eventLogHandler::Diagnostic_eventLogHandler::writeEventToLog(s)] __start__
[ 292 8464][17 Oct 17:44:49][DIAGNOSTIC] [COVERAGE] [Diagnostic_eventLogHandler::Diagnostic_eventLogHandler::writeEventToLog(s)] __end__ Total: 0 milliseconds.
[ 292 8464][17 Oct 17:44:49][TR_CONN_MANAGER] diagnostic_reporter: entering...
[ 292 8464][17 Oct 17:44:49][TR_CONN_MANAGER] TR_CONN_MANAGER::CreateAndSendNotification: TrEventManager is not ready yet - ignore this notification - return
[ 292 8464][17 Oct 17:44:49][DIAGNOSTIC] [COVERAGE] [Diagnostic_EventReporter::_report_event(s)] lue=""></Field>

  <Field name="gwNameD" value=""></Field>

  <Field name="gwIPD" value=""></Field>

  <Field name="severityLevelD" value="1"></Field>

  <Field name="dataD" value="Error in client initialization"></Field>

  <Field name="helpdeskRecordTypeD" value="-1"></Field>

</OBJECT>

[17 Oct 17:44:49]
<OBJECT name="helpdesk event" type="DiagnosticHelpdeskEventData">

  <OBJECT name="idD" type="Diagnostic_RecordId">
    <Field name="timeStampD" value="1666046689"></Field>
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

[17 Oct 17:44:49]
<OBJECT name="helpdesk event" type="DiagnosticHelpdeskEventData">

  <OBJECT name="idD" type="Diagnostic_RecordId">
    <Field name="timeStampD" value="1666046689"></Field>
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

[17 Oct 17:44:49]
<OBJECT name="helpdesk event" type="DiagnosticHelpdeskEventData">

  <OBJECT name="idD" type="Diagnostic_RecordId">
    <Field name="timeStampD" value="1666046689"></Field>
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

[17 Oc