ŮŐů Ąc×   ˝9ŚJ  j                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            ¤   * k ęÓź§|fP;%úĺĎš¤ydN8#řáĘ´ kq\E/ í Ö Ŕ Ť                 =!	2022-10-17 K	!b2022-10-17J	!	2022-10-17I	!J2022-10-17H	! 2022-10-17G!'2022-10-17F	! Ë2022-10-17E	!l2022-10-17D! 2022-10-17C!	2022-10-17
B! Ţ2022-10-17	A	!L2022-10-17[@	!	2022-10-17j?	! Ţ2022-10-17%>!L2022-10-17<!	2022-10-17;! 2022-10-16:!'2022-10-169	! 2022-10-168	!l2022-10-167	!	 Ë2022-10-166!	2022-10-165	! 2022-10-16	4	!L2022-10-163!	L2022-10-162	! Ţ2022-10-16<1	!	2022-10-16%0!	2022-10-16/!	2022-10-16.!	2022-10-15-	! ă2022-10-15,	!	 Ä2022-10-15+!L2022-10-15*	!a2022-10-15)	! 2022-10-15(	!'2022-10-15'!	'2022-10-15&	!	 Ă2022-10-15%	!l2022-10-15$! Ţ2022-10-15	#! 2022-10-15"!	2022-10-15˝9§#   SQLite format 3   @   C  j                                                          C -â(   ű    
ű ö ö                                                                                                                            %9 indexsqlite_autoindex_URL_1URLh'tableDomainsDomainsCREATE TABLE Domains(DomainID INTEGER NOT NULL, UserID INTEGER NOT NULL, Date DATE, LastTimeAllow DATETIME, LastTimeDeny DATETIME, NAllows INTEGER, NDenies INTEGER, PRIMARY KEY(DomainID, UserID, Date), FOREIGN KEY(UserID) REFERENCES User(UserID) ON DELETE CASCADE, FOREIGN KEY(DomainID) REFERENCES Domain(DomainID) ON DELETE CASCADE)-A indexsqlite_autoindex_Domains_1Domains   r;tableRestURLRestURLCREATE TABLE RestURL(RestUrlID INTEGER NOT NULL PRIMARY KEY ASC, RestUrl VARCHAR(2048))m5tableDomainDomainCREATE TABLE Domain(DomainID INTEGER NOT NULL PRIMARY KEY ASC, Domain VARCHAR(2048))`#tableUserUserCREATE TABLE User(UserID INTEGER NOT NULL PRIMARY KEY ASC, SID VARCHAR   	˝9§                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                lue : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var ObjectUtils = /** @class */ (function () {
        function ObjectUtils() {
        }
        ObjectUtils.equals = function (obj1, obj2, field) {
            if (field)
                return (this.resolveFieldData(obj1, field) === this.resolveFieldData(obj2, field));
            else
                return this.equalsByValue(obj1, obj2);
        };
        ObjectUtils.equalsByValue = function (obj1, obj2) {
            if (obj1 === obj2)
                return true;
            if (obj1 && obj2 && typeof obj1 == 'object' && typeof obj2 == 'object') {
                var arrA = Array.isArray(obj1), arrB = Array.isArray(obj2), i, length, key;
                if (arrA && arrB) {
                    length = obj1.length;
                    if (length != obj2.length)
                        return false;
                    for (i = length; i-- !== 0;)
                        if (!this.equalsByValue(obj1[i], obj2[i]))
                            return false;
                    return true;
                }
                if (arrA != arrB)
                    return false;
                var dateA = obj1 instanceof Date, dateB = obj2 instanceof Date;
                if (dateA != dateB)
                    return false;
                if (dateA && dateB)
                    return obj1.getTime() == obj2.getTime();
                var regexpA = obj1 instanceof RegExp, regexpB = obj2 instanceof RegExp;
                if (regexpA != regexpB)
                    return false;
                if (regexpA && regexpB)
                    return obj1.toString() == obj2.toString();
                var keys = Object.keys(obj1);
                length = keys.length;
                if (length !== Object.keys(obj2).length)
                    return false;
                for (i = length; i-- !== 0;)
                    if (!Object.prototype.hasOwnProperty.call(obj2, keys[i]))
                        return false;
                for (i = length; i-- !== 0;) {
                    key = keys[i];
                    if (!this.equalsByValue(obj1[key], obj2[key]))
                        return false;
                }
                return true;
            }
            return obj1 !== obj1 && obj2 !== obj2;
        };
        ObjectUtils.resolveFieldData = function (data, field) {
            if (data && field) {
                if (this.isFunction(field)) {
                    return field(data);
                }
                else if (field.indexOf('.') == -1) {
                    return data[field];
                }
                else {
                    var fields = field.split('.');
                    var value = data;
                    for (var i = 0, len = fields.length; i < len; ++i) {
                        if (value == null) {
                            return null;
                        }
                        value = value[fields[i]];
                    }
                    return value;
                }
            }
            else {
                return null;
            }
        };
        ObjectUtils.isFunction = function (obj) {
            return !!(obj && obj.constructor && obj.call && obj.apply);
        };
        ObjectUtils.reorderArray = function (value, from, to) {
            var target;
            if (value && from !== to) {
                if (to >= value.length) {
                    to %= value.length;
                    from %= value.length;
                }
                value.splice(to, 0, value.splice(from, 1)[0]);
            }
        };
        ObjectUtils.generateSelectItems = function (val, field) {
            var e_1, _a;
            var selectItems;
            if (val && val.length) {
                selectItems = [];
                try {
                    for (var val_1 = __values(val), val_1_1 = val_1.next(); !val_1_1.done; val_1_1 = val_1.next()) {
                        var item = val_1_1.value;
                        selectItems.push({ label: this.resolveFieldData(item, field), value: item });
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (val_1_1 && !val_1_1.done && (_a = val_1.return)) _a.call(val_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            return selectItems;
        };
        ObjectUtils.insertIntoOrderedArray = function (item, index, arr, sourceArr) {
            if (arr.length > 0) {
                var injected = false;
                for (var i = 0; i < arr.length; i++) {
                    var currentItemIndex = this.findIndexInList(arr[i], sourceArr);
                    if (currentItemIndex > index) {
                        arr.splice(i, 0, item);
                        injected = true;
                        break;
                    }
                }
                if (!injected) {
                    arr.push(item);
                }
            }
            else {
                arr.push(item);
            }
        };
        ObjectUtils.findIndexInList = function (item, list) {
            var index = -1;
            if (list) {
                for (var i = 0; i < list.length; i++) {
                    if (list[i] == item) {
                        index = i;
                        break;
                    }
                }
            }
            return index;
        };
        ObjectUtils.removeAccents = function (str) {
            if (str && str.search(/[\xC0-\xFF]/g) > -1) {
                str = str
                    .replace(/[\xC0-\xC5]/g, "A")
                    .replace(/[\xC6]/g, "AE")
                    .replace(/[\xC7]/g, "C")
                    .replace(/[\xC8-\xCB]/g, "E")
                    .replace(/[\xCC-\xCF]/g, "I")
                    .replace(/[\xD0]/g, "D")
                    .replace(/[\xD1]/g, "N")
                    .replace(/[\xD2-\xD6\xD8]/g, "O")
                    .replace(/[\xD9-\xDC]/g, "U")
                    .replace(/[\xDD]/g, "Y")
                    .replace(/[\xDE]/g, "P")
                    .replace(/[\xE0-\xE5]/g, "a")
                    .replace(/[\xE6]/g, "ae")
                    .replace(/[\xE7]/g, "c")
                    .replace(/[\xE8-\xEB]/g, "e")
                    .replace(/[\xEC-\xEF]/g, "i")
                    .replace(/[\xF1]/g, "n")
                    .replace(/[\xF2-\xF6\xF8]/g, "o")
                    .replace(/[\xF9-\xFC]/g, "u")
                    .replace(/[\xFE]/g, "p")
                    .replace(/[\xFD\xFF]/g, "y");
            }
            return str;
        };
        return ObjectUtils;
    }());

    var FilterUtils = /** @class */ (function () {
        function FilterUtils() {
        }
        FilterUtils.filter = function (value, fields, filterValue, filterMatchMode, filterLocale) {
            var e_1, _a, e_2, _b;
            var filteredItems = [];
            var filterText = ObjectUtils.removeAccents(filterValue).toLocaleLowerCase(filterLocale);
            if (value) {
                try {
                    for (var value_1 = __values(value), value_1_1 = value_1.next(); !value_1_1.done; value_1_1 = value_1.next()) {
                        var item = value_1_1.value;
                        try {
                            for (var fields_1 = (e_2 = void 0, __values(fields)), fields_1_1 = fields_1.next(); !fields_1_1.done; fields_1_1 = fields_1.next()) {
                                var field = fields_1_1.value;
                                var fieldValue = ObjectUtils.removeAccents(String(ObjectUtils.resolveFieldData(item, field))).toLocaleLowerCase(filterLocale);
                                if (FilterUtils[filterMatchMode](fieldValue, filterText, filterLocale)) {
                                    filteredItems.push(item);
                                    break;
                                }
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (fields_1_1 && !fields_1_1.done && (_b = fields_1.return)) _b.call(fields_1);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (value_1_1 && !value_1_1.done && (_a = value_1.return)) _a.call(value_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            return filteredItems;
        };
        FilterUtils.startsWith = function (value, filter, filterLocale) {
            if (filter === undefined || filter === null || filter.trim() === '') {
                return true;
            }
            if (value === undefined || value === null) {
                return false;
            }
            var filterValue = ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
            var stringValue = ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
            return stringValue.slice(0, filterValue.length) === filterValue;
        };
        FilterUtils.contains = function (value, filter, filterLocale) {
            if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
                return true;
            }
            if (value === undefined || value === null) {
                return false;
            }
            var filterValue = ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
            var stringValue = ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
            return stringValue.indexOf(filterValue) !== -1;
        };
        FilterUtils.endsWith = function (value, filter, filterLocale) {
            if (filter === undefined || filter === null || filter.trim() === '') {
                return true;
            }
            if (value === undefined || value === null) {
                return false;
            }
            var filterValue = ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
            var stringValue = ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
            return stringValue.indexOf(filterValue, stringValue.length - filterValue.length) !== -1;
        };
        FilterUtils.equals = function (value, filter, filterLocale) {
            if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
                return true;
            }
            if (value === undefined || value === null) {
                return false;
            }
            if (value.getTime && filter.getTime)
                return value.getTime() === filter.getTime();
            else
                return ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale) == ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
        };
        FilterUtils.notEquals = function (value, filter, filterLocale) {
            if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
                return false;
            }
            if (value === undefined || value === null) {
                return true;
            }
            if (value.getTime && filter.getTime)
                return value.getTime() !== filter.getTime();
            else
                return ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale) != ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
        };
        FilterUtils.in = function (value, filter, filterLocale) {
            if (filter === undefined || filter === null || filter.length === 0) {
                return true;
            }
            if (value === undefined || value === null) {
                return false;
            }
            for (var i = 0; i < filter.length; i++) {
                if (ObjectUtils.equals(value, filter[i])) {
                    return true;
                }
            }
            return false;
        };
        FilterUtils.lt = function (value, filter, filterLocale) {
            if (filter === undefined || filter === null) {
                return true;
            }
            if (value === undefined || value === null) {
                return false;
            }
            if (value.getTime && filter.getTime)
                return value.getTime() < filter.getTime();
            else
                return value < filter;
        };
        FilterUtils.lte = function (value, filter, filterLocale) {
            if (filter === undefined || filter === null) {
                return true;
            }
            if (value === undefined || value === null) {
                return false;
            }
            if (value.getTime && filter.getTime)
                return value.getTime() <= filter.getTime();
            else
                return value <= filter;
        };
        FilterUtils.gt = function (value, filter, filterLocale) {
            if (filter === undefined || filter === null) {
                return true;
            }
            if (value === undefined || value === null) {
                return false;
            }
            if (value.getTime && filter.getTime)
                return value.getTime() > filter.getTime();
            else
                return value > filter;
        };
        FilterUtils.gte = function (value, filter, filterLocale) {
            if (filter === undefined || filter === null) {
                return true;
            }
            if (value === undefined || value === null) {
                return false;
            }
            if (value.getTime && filter.getTime)
                return value.getTime() >= filter.getTime();
            else
                return value >= filter;
        };
        return FilterUtils;
    }());

    exports.lastId = 0;
    function UniqueComponentId() {
        var prefix = 'pr_id_';
        exports.lastId++;
        return "" + prefix + exports.lastId;
    }

    /**
     * Generated bundle index. Do not edit.
     */

    exports.FilterUtils = FilterUtils;
    exports.ObjectUtils = ObjectUtils;
    exports.UniqueComponentId = UniqueComponentId;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=primeng-lts-utils.umd.js.map
