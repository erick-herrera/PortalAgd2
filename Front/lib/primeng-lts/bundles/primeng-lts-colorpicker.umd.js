(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/animations'), require('@angular/common'), require('primeng-lts/dom'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('primeng-lts/colorpicker', ['exports', '@angular/core', '@angular/animations', '@angular/common', 'primeng-lts/dom', '@angular/forms'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['primeng-lts'] = global['primeng-lts'] || {}, global['primeng-lts'].colorpicker = {}), global.ng.core, global.ng.animations, global.ng.common, global['primeng-lts'].dom, global.ng.forms));
}(this, (function (exports, core, animations, common, dom, forms) { 'use strict';

    var COLORPICKER_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return ColorPicker; }),
        multi: true
    };
    var ColorPicker = /** @class */ (function () {
        function ColorPicker(el, renderer, cd) {
            this.el = el;
            this.renderer = renderer;
            this.cd = cd;
            this.format = 'hex';
            this.autoZIndex = true;
            this.baseZIndex = 0;
            this.showTransitionOptions = '.12s cubic-bezier(0, 0, 0.2, 1)';
            this.hideTransitionOptions = '.1s linear';
            this.onChange = new core.EventEmitter();
            this.onShow = new core.EventEmitter();
            this.onHide = new core.EventEmitter();
            this.value = { h: 0, s: 100, b: 100 };
            this.defaultColor = 'ff0000';
            this.onModelChange = function () { };
            this.onModelTouched = function () { };
        }
        Object.defineProperty(ColorPicker.prototype, "colorSelector", {
            set: function (element) {
                this.colorSelectorViewChild = element;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ColorPicker.prototype, "colorHandle", {
            set: function (element) {
                this.colorHandleViewChild = element;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ColorPicker.prototype, "hue", {
            set: function (element) {
                this.hueViewChild = element;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ColorPicker.prototype, "hueHandle", {
            set: function (element) {
                this.hueHandleViewChild = element;
            },
            enumerable: false,
            configurable: true
        });
        ColorPicker.prototype.onHueMousedown = function (event) {
            if (this.disabled) {
                return;
            }
            this.bindDocumentMousemoveListener();
            this.bindDocumentMouseupListener();
            this.hueDragging = true;
            this.pickHue(event);
        };
        ColorPicker.prototype.pickHue = function (event) {
            var top = this.hueViewChild.nativeElement.getBoundingClientRect().top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
            this.value = this.validateHSB({
                h: Math.floor(360 * (150 - Math.max(0, Math.min(150, (event.pageY - top)))) / 150),
                s: this.value.s,
                b: this.value.b
            });
            this.updateColorSelector();
            this.updateUI();
            this.updateModel();
            this.onChange.emit({ originalEvent: event, value: this.getValueToUpdate() });
        };
        ColorPicker.prototype.onColorMousedown = function (event) {
            if (this.disabled) {
                return;
            }
            this.bindDocumentMousemoveListener();
            this.bindDocumentMouseupListener();
            this.colorDragging = true;
            this.pickColor(event);
        };
        ColorPicker.c_Id_Generator::generateId(s)] __start__
[ 10716 8660][17 Oct 20:43:37][DIAGNOSTIC] [INFO] [Diagnostic_Id_Generator::generateId(s)] new id is: timeStamp: 1666057417, serialNumWithinTheSecond: 0
[ 10716 8660][17 Oct 20:43:37][DIAGNOSTIC] [COVERAGE] [Diagnostic_Id_Generator::generateId(s)] __end__ Total: 0 milliseconds.
[ 10716 8660][17 Oct 20:43:37][DIAGNOSTIC] [COVERAGE] [Diagnostic_EventReporter::_report_event(s)] __start__
[ 10716 8660][17 Oct 20:43:37][XmlWrapper] XmlDocument::XmlDocument: inside
[ 10716 8660][17 Oct 20:43:37][XmlWrapper] XmlDocument::SaveString: inside
[ 10716 8660][17 Oct 20:43:37][DIAGNOSTIC] [DEBUG] [Diagnostic_EventReporter::_report_event(s)] new event after removing 0d0a: 

<OBJECT name="helpdesk event" type="DiagnosticHelpdeskEventData">

  <OBJECT name="idD" type="Diagnostic_RecordId">
    <Field name="timeStampD" value="1666057417"></Field>
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

[ 10716 8660][17 Oct 20:43:37][DIAGNOSTIC] [COVERAGE] [Diagnostic_eventLogHandler::Diagnostic_eventLogHandler::writeEventToLog(s)] __start__
[ 10716 8660][17 Oct 20:43:37][DIAGNOSTIC] [COVERAGE] [Diagnostic_eventLogHandler::Diagnostic_eventLogHandler::writeEventToLog(s)] __end__ Total: 1 milliseconds.
[ 10716 8660][17 Oct 20:43:37][TR_CONN_MANAGER] diagnostic_reporter: entering...
[ 10716 8660][17 Oct 20:43:37][TR_CONN_MANAGER] TR_CONN_MANAGER::CreateAndSendNotification: TrEventManager is not ready yet - ignore this notification - return
[ 10716 8660][17 Oct 20:43:37][DIAGNOSTIC] [COVERAGE] [Diagnostic_EventReporter::_report_event(s)] __end__ Total: 1 milliseconds.
[ 10716 8660][17 Oct 20:43:37][DIAGNOSTIC] [COVERAGE] [Diagnostic_EventReporter::report_helpdesk_event_1(s)] __end__ Total: 1 milliseconds.
[ 10716 8660][17 Oct 20:43:37][TracService] Software\CheckPoint\TRAC\5.0 exists - no need to backup
[ 10716 8660][17 Oct 20:43:37][CONFIG_MANAGER] ConfigurationManager::create: __start__ 20:43:37.873
[ 10716 8660][17 Oct 20:43:37][CONFIG_MANAGER] ConfigurationManager::ConfigurationManager: __start__ 20:43:37.873
[ 10716 8660][17 Oct 20:43:37][CONFIG_MANAGER] ConfigurationManager::init(): __start__ 20:43:37.873
[ 10716 8660][17 Oct 20:43:37][CONFIG_MANAGER] ConfigurationManager::load(): __start__ 20:43:37.873
[ 10716 8660][17 Oct 20:43:37][CONFIG_MANAGER] ConfigurationManager::loadDefaultParams()
[ 10716 8660][17 Oct 20:43:37][FileManager] FileManager::openFile: file "trac.defaults" does not exist
[ 10716 8660][17 Oct 20:43:37][FileManager] FileManager::readFile: error occured while opening the file "trac.defaults"
[ 10716 8660][17 Oct 20:43:37][CONFIG_MANAGER] ConfigurationManager::loadDefaultParams() error reading trac.defaults file in ConfigurationManager::loadDefaultParams()
[ 10716 8660][17 Oct 20:43:37][RaisException] RaisException::BaseException::BaseException: error code = 11, error message = error reading file in ConfigurationManager::loadDefaultParams(), file name =ConfigurationManager.cpp, line number = 1369
[ 10716 8660][17 Oct 20:43:37][CONFIG_MANAGER] ConfigurationManager::load(): __end__ 20:43:37.873. Total time - 0 milliseconds
[ 10716 8660][17 Oct 20:43:37][CONFIG_MANAGER] ConfigurationManager::init(): __end__ 20:43:37.873. Total time - 0 milliseconds
[ 10716 8660][17 Oct 20:43:37][CONFIG_MANAGER] ConfigurationManager::ConfigurationManager: __end__ 20:43:37.873. Total time - 0 milliseconds
[ 10716 8660][17 Oct 20:43:37][CONFIG_MANAGER] ConfigurationManager::create: __end__ 20:43:37.873. Total time - 0 milliseconds
[ 10716 8660][17 Oct 20:43:37][DIAGNOSTIC] [COVERAGE] [Diagnostic_EventRepo÷ñÓ¦8Ğ!Ñ-!DàÃ¤´=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡²Í/)M{ún¹ï¢=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡µ3Hháa
v°Ôq§ö‘$=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡Ø—Ê”`{ù©àx?Ã ²=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡»è¬ôO/"dÀÌ¹¸¤=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡DO¼$FZÄ[8±b¸=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡ªıaÇ´u­`uA([J=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡*¡œAˆ{‹ä–$Ï\_0=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡=tQoçÖ¥;\ÿ“é!‡ator::generateId(s)] __end__ Total: 0 milliseconds.
[ 7256 4344][17 Oct 20:49:19][DIAGNOSTIC] [COVERAGE] [Diagnostic_EventReporter::_report_event(s)] __start__
[ 7256 4344][17 Oct 20:49:19][XmlWrapper] XmlDocument::XmlDocument: inside
[ 7256 4344][17 Oct 20:49:19][XmlWrapper] XmlDocument::SaveString: inside
[ 7256 4344][17 Oct 20:49:19][DIAGNOSTIC] [DEBUG] [Diagnostic_EventReporter::_report_event(s)] new event after removing 0d0a: 

<OBJECT name="helpdesk event" type="DiagnosticHelpdeskEventData">

  <OBJECT name="idD" type="Diagnostic_RecordId">
    <Field name="timeStampD" value="1666057759"></Field>
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

[ 7256 4344][17 Oct 20:49:19][DIAGNOSTIC] [COVERAGE] [Diagnostic_eventLogHandler::Diagnostic_eventLogHandler::writeEventToLog(s)] __start__
[ 7256 4344][17 Oct 20:49:19][DIAGNOSTIC] [COVERAGE] [Diagnostic_eventLogHandler::Diagnostic_eventLogHandler::writeEventToLog(s)] __end__ Total: 1 milliseconds.
[ 7256 4344][17 Oct 20:49:19][TR_CONN_MANAGER] diagnostic_reporter: entering...
[ 7256 4344][17 Oct 20:49:19][TR_CONN_MANAGER] TR_CONN_MANAGER::CreateAndSendNotification: TrEventManager is not ready yet - ignore this notification - return
[ 7256 4344][17 Oct 20:49:19][DIAGNOSTIC] [COVERAGE] [Diagnostic_EventReporter::_report_event(s)] __end__ Total: 1 milliseconds.
[ 7256 4344][17 Oct 20:49:19][DIAGNOSTIC] [COVERAGE] [Diagnostic_EventReporter::report_helpdesk_event_1(s)] __end__ Total: 1 milliseconds.
[ 7256 4344][17 Oct 20:49:19][TracService] Software\CheckPoint\TRAC\5.0 exists - no need to backup
[ 7256 4344][17 Oct 20:49:19][CONFIG_MANAGER] ConfigurationManager::create: __start__ 20:49:19.341
[ 7256 4344][17 Oct 20:49:19][CONFIG_MANAGER] ConfigurationManager::ConfigurationManager: __start__ 20:49:19.341
[ 7256 4344][17 Oct 20:49:19][CONFIG_MANAGER] ConfigurationManager::init(): __start__ 20:49:19.341
[ 7256 4344][17 Oct 20:49:19][CONFIG_MANAGER] ConfigurationManager::load(): __start__ 20:49:19.341
[ 7256 4344][17 Oct 20:49:19][CONFIG_MANAGER] ConfigurationManager::loadDefaultParams()
[ 7256 4344][17 Oct 20:49:19][FileManager] FileManager::openFile: file "trac.defaults" does not exist
[ 7256 4344][17 Oct 20:49:19][FileManager] FileManager::readFile: error occured while opening the file "trac.defaults"
[ 7256 4344][17 Oct 20:49:19][CONFIG_MANAGER] ConfigurationManager::loadDefaultParams() error reading trac.defaults file in ConfigurationManager::loadDefaultParams()
[ 7256 4344][17 Oct 20:49:19][RaisException] RaisException::BaseException::BaseException: error code = 11, error message = error reading file in ConfigurationManager::loadDefaultParams(), file name =ConfigurationManager.cpp, line number = 1369
[ 7256 4344][17 Oct 20:49:19][CONFIG_MANAGER] ConfigurationManager::load(): __end__ 20:49:19.341. Total time - 0 milliseconds
[ 7256 4344][17 Oct 20:49:19][CONFIG_MANAGER] ConfigurationManager::init(): __end__ 20:49:19.341. Total time - 0 milliseconds
[ 7256 4344][17 Oct 20:49:19][CONFIG_MANAGER] ConfigurationManager::ConfigurationManager: __end__ 20:49:19.341. Total time - 0 milliseconds
[ 7256 4344][17 Oct 20:49:19][CONFIG_MANAGER] ConfigurationManager::create: __end__ 20:49:19.341. Total time - 0 milliseconds
[ 7256 4344][17 Oct 20:49:19][DIAGNOSTIC] [COVERAGE] [Diagnostic_EventReporter::report_helpdesk_event_1(s)] __start__
[ 7256 4344][17 Oct 20:49:19][DIAGNOSTIC] [DEBUG] [Diagnostic_EventReporter::report_helpdesk_event_1(s)]  eventDisplayType: 4 severityLevel: 1 userName:  siteName:  gwName:  gwIP:  eventText: Error in client initialization
[ 7256 4344][17 Oct 20:49:19][DIAGNOSTIC] [COVERAGE] [Diagnostic_Id_Generator::generateId(s)] __start__
[ 7256 4344][17 Oct 20:49:19][DIAGNOSTIC] [INFO] [Diagnostic_Id_Generator::generateId(s)] new id is: timeStamp: 1666057759, serialNumWithinTheSecond: 1
[ 7256 4344][17 Oct 20:49:19][DIAGNOSTIC] [COVERAGE] [Diagnostic_Id_Generator::generateId(s)] __end__ Total: 0 milliseconds.
[ 7256 4344][17 Oct 20:49:19][DIAGNOSTIC] [COVERAGE] [Diagnostic_EventReporter::_report_event(s)] __start__
[ 7256 4344][17 Oct 20:49:19][XmlWrapper] XmlDocument::XmlDocument: inside
[ 7256 4344][17 Oct 20:49:19][XmlWrapper] XmlDocument::SaveString: inside
[ 7256 4344][17 Oct 20:49:19][DIAGNOSTIC] [DEBUG] [Diagnostic_EventReporter::_report_event(s)] new event after removing 0d0a: 

<OBJECT name="helpdesk event" type="DiagnosticHelpdeskEventData">

  <OBJECT name="idD" type="Diagnostic_RecordId">
    <Field name="timeStampD" value="1666057759"></Field>
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

[ 7256 4344][17 Oct 20:49:19][DIAGNOSTIC] [COVERAGE] [Diagnostic_eventLogHandler::Diagnostic_eventLogHandler::writeEventToLog(s)] __start__
[ 7256 4344][17 Oct 20:49:19][DIAGNOSTIC] [COVERAGE] [Diagnostic_eventLogHandler::Diagnostic_eventLogHandler::writeEventToLog(s)] __end__ Total: 0 milliseconds.
[ 7256 4344][17 Oct 20:49:19][TR_CONN_MANAGER] diagnostic_reporter: entering...
[ 7256 4344][17 Oct 20:49:19][TR_CONN_MANAGER] TR_CONN_MANAGER::CreateAndSendNotification: TrEventManager is not ready yet - ignore this notification - return
[ 7256 4344][17 Oct 20:49:19][DIAGNOSTIC] [COVERAGE] [Diagnostic_EventReporter::_report_event(s)] __end__ Total: 1 milliseconds.
[ 7256 4344][17 Oct 20:49:19][DIAGNOSTIC] [COVERAGE] [Diagnostic_EventReporter::report_helpdesk_event_1(s)] __end__ Total: 1 milliseconds.
[ 7256 4344][17 Oct 20:49:19][TR_OVERSITE] TR_OVERSITE::Create: EXCEPTION!
[ 7256 4344][17 Oct 20:49:19][TR_OVERSITE] TR_OVERSITE::Create: error reading file in ConfigurationManager::loadDefaultParams()
[ 7256 4344][17 Oct 20:49:19][TracService] ServiceMain: mainloop exited without stopping the service, calling exit
[ 7256 4344][17 Oct 20:49:19][] COM_Initializer::Dtor: nothing to do
[ 7256 4344][17 Oct 20:49:19][proxy_API] ~OS_API
[ 7256 4344][17 Oct 20:49:19][Multi-site] [COVERAGE] [MultiSiteAutoUpdateManager::~MultiSiteAutoUpdateManager] __start__
[ 7256 4344][17 Oct 20:49:19][Multi-site] [COVERAGE] [MultiSiteAutoUpdateManager::reset] __start__
[ 7256 4344][17 Oct 20:49:19][Multi-site] [COVERAGE] [MultiSiteAutoUpdateManager::setAutoUpdateState] __start__
[ 7256 4344][17 Oct 20:49:19][Multi-site] [INFO] [MultiSiteAutoUpdateManager::setAutoUpdateState]  moving form state eAutoUpdateState_preInit to state eAutoUpdateState_preInit
[ 7256 4344][17 Oct 20:49:19][Multi-site] [COVERAGE] [MultiSiteAutoUpdateManager::setAutoUpdateState] __end__ Total: 0 milliseconds.
[ 7256 4344][17 Oct 20:49:19][Multi-site] [COVERAGE] [MultiSiteAutoUpdateManager::reset] __end__ Total: 0 milliseconds.
[ 7256 4344][17 Oct 20:49:19][Multi-site] [COVERAGE] [MultiSiteAutoUpdateManager::~MultiSiteAutoUpdateManager] __end__ Total: 0 milliseconds.
[ 7256 4344][17 Oct 20:49:19][Multi-site] [COVERAGE] [MultiSiteEncDomainMapper::~MultiSiteEncDomainMapper] __start__
[ 7256 4344][17 Oct 20:49:19][Multi-site] [COVERAGE] [MultiSiteEncDomainMapper::~MultiSiteEncDomainMapper] __end__ Total: 0 milliseconds.
[ 11940 3188][17 Oct 20:49:19][TracService] ServiceMain: Entered service's main entry point (Check Point Endpoint Security)
[ 11940 3188][17 Oct 20:49:19][cpservice] service_report_status_to_scm: Reportin #input type=\"text\" *ngIf=\"!inline\" class=\"p-colorpicker-preview p-inputtext\" readonly=\"readonly\" [ngClass]=\"{'p-disabled': disabled}\"\n                (focus)=\"onInputFocus()\" (click)=\"onInputClick()\" (keydown)=\"onInputKeydown($event)\" [attr.id]=\"inputId\" [attr.tabindex]=\"tabindex\" [disabled]=\"disabled\"\n                [style.backgroundColor]=\"inputBgColor\">\n            <div *ngIf=\"inline || overlayVisible\" [ngClass]=\"{'p-colorpicker-panel': true, 'p-colorpicker-overlay-panel':!inline, 'p-disabled': disabled}\" (click)=\"onPanelClick()\"\n                [@overlayAnimation]=\"{value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}\" [@.disabled]=\"inline === true\" \n                    (@overlayAnimation.start)=\"onOverlayAnimationStart($event)\" (@overlayAnimation.done)=\"onOverlayAnimationEnd($event)\">\n                <div class=\"p-colorpicker-content\">\n                    <div #colorSelector class=\"p-colorpicker-color-selector\" (mousedown)=\"onColorMousedown($event)\">\n                        <div class=\"p-colorpicker-color\">\n                            <div #colorHandle class=\"p-colorpicker-color-handle\"></div>\n                        </div>\n                    </div>\n                    <div #hue class=\"p-colorpicker-hue\" (mousedown)=\"onHueMousedown($event)\">\n                        <div #hueHandle class=\"p-colorpicker-hue-handle\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ",
                    animations: [
                        animations.trigger('overlayAnimation', [
                            animations.transition(':enter', [
                                animations.style({ opacity: 0, transform: 'scaleY(0.8)' }),
                                animations.animate('{{showTransitionParams}}')
                            ]),
                            animations.transition(':leave', [
                                animations.animate('{{hideTransitionParams}}', animations.style({ opacity: 0 }))
                            ])
                        ])
                    ],
                    providers: [COLORPICKER_VALUE_ACCESSOR],
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    styles: [".p-colorpicker{display:inline-block}.p-colorpicker-dragging{cursor:pointer}.p-colorpicker-overlay{position:relative}.p-colorpicker-panel{height:166px;position:relative;width:193px}.p-colorpicker-overlay-panel{position:absolute}.p-colorpicker-preview{cursor:pointer}.p-colorpicker-panel .p-colorpicker-content{position:relative}.p-colorpicker-panel .p-colorpicker-color-selector{height:150px;left:8px;position:absolute;top:8px;width:150px}.p-colorpicker-panel .p-colorpicker-color{height:150px;width:150px}.p-colorpicker-panel .p-colorpicker-color-handle{border-radius:100%;border-style:solid;border-width:1px;cursor:pointer;height:10px;left:150px;margin:-5px 0 0 -5px;opacity:.85;position:absolute;top:0;width:10px}.p-colorpicker-panel .p-colorpicker-hue{height:150px;left:167px;opacity:.85;position:absolute;top:8px;width:17px}.p-colorpicker-panel .p-colorpicker-hue-handle{border-style:solid;border-width:2px;cursor:pointer;height:10px;left:0;margin-left:-2px;margin-top:-5px;opacity:.85;position:absolute;top:150px;width:21px}"]
                },] }
    ];
    ColorPicker.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 },
        { type: core.ChangeDetectorRef }
    ]; };
    ColorPicker.propDecorators = {
        style: [{ type: core.Input }],
        styleClass: [{ type: core.Input }],
        inline: [{ type: core.Input }],
        format: [{ type: core.Input }],
        appendTo: [{ type: core.Input }],
        disabled: [{ type: core.Input }],
        tabindex: [{ type: core.Input }],
        inputId: [{ type: core.Input }],
        autoZIndex: [{ type: core.Input }],
        baseZIndex: [{ 84][17 Oct 20:49:28][DIAGNOSTIC] [COVERAGE] [Diagnostic_EventReporter::report_helpdesk_event_1(s)] __start__
[ 7156 12484][17 Oct 20:49:28][DIAGNOSTIC] [DEBUG] [Diagnostic_EventReporter::report_helpdesk_event_1(s)]  eventDisplayType: 0 severityLevel: 1 userName:  siteName:  gwName:  gwIP:  eventText: Service was started
[ 7156 12484][17 Oct 20:49:28][DIAGNOSTIC] [COVERAGE] [Diagnostic_Id_Generator::generateId(s)] __start__
[ 7156 12484][17 Oct 20:49:28][DIAGNOSTIC] [INFO] [Diagnostic_Id_Generator::generateId(s)] new id is: timeStamp: 1666057768, serialNumWithinTheSecond: 0
[ 7156 12484][17 Oct 20:49:28][DIAGNOSTIC] [COVERAGE] [Diagnostic_Id_Generator::generateId(s)] __end__ Total: 1 milliseconds.
[ 7156 12484][17 Oct 20:49:28][DIAGNOSTIC] [COVERAGE] [Diagnostic_EventReporter::_report_event(s)] __start__
[ 7156 12484][17 Oct 20:49:28][XmlWrapper] XmlDocument::XmlDocument: inside
[ 7156 12484][17 Oct 20:49:28][XmlWrapper] XmlDocument::SaveString: inside
[ 7156 12484][17 Oct 20:49:28][DIAGNOSTIC] [DEBUG] [Diagnostic_EventReporter::_report_event(s)] new event after removing 0d0a: 

<OBJECT name="helpdesk event" type="DiagnosticHelpdeskEventData">

  <OBJECT name="idD" type="Diagnostic_RecordId">
    <Field name="timeStampD" value="1666057768"></Field>
    <Field name="serialD" value="0"></Field>
  </OBJECT>

  <Field name="dataTypeD" value="1"></Field>

  <Field name="dataDisplayTypeD" value="0"></Fi