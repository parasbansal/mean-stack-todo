webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-block{\n\tmargin-top: 50px;\n\tmin-height: 500px;\n\tbackground: #fff;\n\tbox-shadow: 0 1px 10px 1px #bbb;\n}\n.main-block h1{\n\ttext-align: center;\n\tpadding: 20px 0;\n\tborder-bottom: 1px solid #ccc;\n\tcolor: #aaa;\n\tmargin: 0;\n}\n\n.new-item-input{\n\twidth: 100%;\n\tpadding: 10px 15px;\n\tborder: none;\n\toutline: none;\n\tborder-bottom: 1px solid #ccc;\n}\n\n.incomplete-item-list{\n\tcolor: #555;\n}\n\n.item-block{\n\tdisplay: block;\n\tpadding: 5px 15px;\n\tborder-bottom: 1px solid #ddd;\n\tline-height: 30px;\n}\n.right-btns button{\n\tmargin-left: 5px;\n\tbackground: #f3f3f3;\n\tcolor: #666;\n\toutline: none;\n\ttransition: all .5s;\n}\n.right-btns button:hover{\n\tbackground: #eee;\n\tbox-shadow: 0 1px 3px #ddd inset;\n}\n.completed-item-list{\n\tmargin-top: 20px;\n}\n.done{\n\tcolor: #aaa;\n\ttext-decoration: line-through;\n}\n.sub-heading{\n\tpadding-left: 15px;\n\tpadding-bottom: 5px;\n\tcolor: #555;\n\tborder-bottom: 1px solid #ccc;\n\tfont-size: 16px;\n}\n\n.task-input{\n\tborder: none;\n\twidth: 100%;\n\toutline: none;\n}\n\n\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-offset-3 col-md-6\">\n      <div class=\"main-block\">\n        <h1>Todo List</h1>\n\n        <div class=\"content-block\">\n\n          <div class=\"new-item-block\">\n            <form (submit)=\"addNewItem()\">\n              <input type=\"text\" class=\"new-item-input\" name=\"newItem\" [(ngModel)]=\"newItem\" placeholder=\"New Task...\" autocomplete=\"off\"\n                autofocus>\n            </form>\n          </div>\n\n          <div class=\"items-block incomplete-item-list\" *ngIf=\"incompleteItems\">\n            <div class=\"item-block\" *ngFor=\"let item of incompleteItems\">\n              <div class=\"row\">\n                <div class=\"col-sm-10 col-md-9\">\n                  <div>\n                    <input type=\"text\" [(ngModel)]=\"item.item\" class=\"task-input\" (blur)=\"editItem(item)\">\n                  </div>\n                </div>\n                <div class=\"col-sm-2 col-md-3\">\n                  <span class=\"right-btns\">\n                    <button class=\"btn btn-sm\" (click)=\"setItemCompleted(item)\">\n                      <i class=\"fa fa-check\"></i>\n                    </button>\n                    <button class=\"btn btn-sm\" (click)=\"deleteItem(item, false)\">\n                      <i class=\"fa fa-times\"></i>\n                    </button>\n                  </span>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"items-block completed-item-list\" *ngIf=\"completedItems\">\n            <div class=\"sub-heading\">Completed Tasks</div>\n            <div class=\"item-block\" *ngFor=\"let item of completedItems\">\n              <div class=\"row\">\n                <div class=\"col-sm-10 col-md-10 done\">\n                  <span>{{ item.item }}</span>\n                </div>\n                <div class=\"col-sm-2 col-md-2\">\n                  <span class=\"right-btns\">\n                    <button class=\"btn btn-sm\" (click)=\"deleteItem(item, true)\">\n                      <i class=\"fa fa-times\"></i>\n                    </button>\n                  </span>\n                </div>\n              </div>\n            </div>\n          </div>\n\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo_service__ = __webpack_require__("../../../../../src/app/todo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_izitoast__ = __webpack_require__("../../../../izitoast/dist/js/iziToast.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_izitoast___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_izitoast__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(todoService) {
        this.todoService = todoService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getAllTasks();
    };
    AppComponent.prototype.getAllTasks = function () {
        var _this = this;
        this.todoService.getAll().subscribe(function (data) {
            if (data.status) {
                _this.incompleteItems = data.data.filter(function (el) {
                    return el.completed === false;
                });
                _this.completedItems = data.data.filter(function (el) {
                    return el.completed === true;
                });
            }
            else {
                _this.showErrorMsg();
            }
        });
    };
    AppComponent.prototype.addNewItem = function () {
        var _this = this;
        var newItem = {
            item: this.newItem
        };
        this.todoService.add(newItem).subscribe(function (data) {
            if (data.status) {
                _this.showSuccessMsg('Saved!', 'Your new task is saved!');
                _this.newItem = '';
                _this.getAllTasks();
            }
            else {
                _this.showErrorMsg();
            }
        });
    };
    AppComponent.prototype.setItemCompleted = function (item) {
        var _this = this;
        this.todoService.setCompleted(item._id).subscribe(function (data) {
            if (data.status) {
                _this.showSuccessMsg('Done!', 'Your task is marked as done!');
                _this.getAllTasks();
            }
            else {
                _this.showErrorMsg();
            }
        });
    };
    AppComponent.prototype.editItem = function (item) {
        var _this = this;
        this.todoService.edit(item._id, { newItem: item }).subscribe(function (data) {
            console.log(data);
            if (data.status) {
                _this.showSuccessMsg('Editied!', 'Task edited!');
            }
            else {
                _this.showErrorMsg();
            }
        });
    };
    AppComponent.prototype.deleteItem = function (item, completed) {
        var _this = this;
        this.todoService.delete(item._id).subscribe(function (data) {
            if (data.status) {
                _this.showSuccessMsg('Removed!', 'Your task is removed!');
                var index = -1;
                if (completed) {
                    index = _this.completedItems.indexOf(item);
                }
                else {
                    index = _this.incompleteItems.indexOf(item);
                }
                if (index > -1) {
                    if (completed) {
                        _this.completedItems.splice(index, 1);
                    }
                    else {
                        _this.incompleteItems.splice(index, 1);
                    }
                }
            }
            else {
                _this.showErrorMsg();
            }
        });
    };
    AppComponent.prototype.showErrorMsg = function () {
        __WEBPACK_IMPORTED_MODULE_2_izitoast___default.a.error({
            title: 'Error',
            message: 'Something went wrong!',
            position: 'topCenter'
        });
    };
    AppComponent.prototype.showSuccessMsg = function (title, msg) {
        __WEBPACK_IMPORTED_MODULE_2_izitoast___default.a.success({
            title: title,
            message: msg,
            position: 'topCenter'
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__todo_service__["a" /* TodoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__todo_service__["a" /* TodoService */]) === "function" && _a || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__todo_service__ = __webpack_require__("../../../../../src/app/todo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__todo_service__["a" /* TodoService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/todo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoService = /** @class */ (function () {
    function TodoService(http) {
        this.http = http;
        this.rootUrl = 'http://localhost:3000';
    }
    TodoService.prototype.getAll = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.rootUrl + '/todos', { headers: headers }).map(function (res) { return res.json(); });
    };
    TodoService.prototype.add = function (newItem) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.rootUrl + '/todos', newItem, { headers: headers }).map(function (res) { return res.json(); });
    };
    TodoService.prototype.edit = function (id, newItem) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.rootUrl + '/todos/' + id, newItem, { headers: headers }).map(function (res) { return res.json(); });
    };
    TodoService.prototype.setCompleted = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.rootUrl + '/todos/complete/' + id, { headers: headers }).map(function (res) { return res.json(); });
    };
    TodoService.prototype.delete = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(this.rootUrl + '/todos/' + id, { headers: headers }).map(function (res) { return res.json(); });
    };
    TodoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], TodoService);
    return TodoService;
    var _a;
}());

//# sourceMappingURL=todo.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map