(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./src/app/groceries-service.service.ts":
/*!**********************************************!*\
  !*** ./src/app/groceries-service.service.ts ***!
  \**********************************************/
/*! exports provided: GroceriesServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroceriesServiceService", function() { return GroceriesServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GroceriesServiceService = /** @class */ (function () {
    function GroceriesServiceService() {
        this.items = [];
    }
    GroceriesServiceService.prototype.getItems = function () {
        return this.items;
    };
    GroceriesServiceService.prototype.removeItem = function (index) {
        this.items.splice(index, 1);
    };
    GroceriesServiceService.prototype.addItem = function (item) {
        this.items.push(item);
    };
    GroceriesServiceService.prototype.editItem = function (item, index) {
        this.items[index] = item;
    };
    GroceriesServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GroceriesServiceService);
    return GroceriesServiceService;
}());



/***/ }),

/***/ "./src/app/input-dialog.service.ts":
/*!*****************************************!*\
  !*** ./src/app/input-dialog.service.ts ***!
  \*****************************************/
/*! exports provided: InputDialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputDialogService", function() { return InputDialogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _groceries_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./groceries-service.service */ "./src/app/groceries-service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var InputDialogService = /** @class */ (function () {
    function InputDialogService(dataService, alertController) {
        this.dataService = dataService;
        this.alertController = alertController;
    }
    InputDialogService.prototype.showPrompt = function (item, index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: item ? 'Edit Item' : 'Add Item',
                            message: item ? 'Please edit this item...' : 'Please enter an item...',
                            inputs: [
                                {
                                    name: 'name',
                                    type: 'text',
                                    placeholder: 'Name',
                                    value: item ? item.name : null,
                                },
                                {
                                    name: 'quantity',
                                    type: 'text',
                                    placeholder: 'Quantity',
                                    value: item ? item.quantity : null,
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Cancel',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                    }
                                },
                                {
                                    text: 'Save',
                                    handler: function (item) {
                                        console.log('Confirm Save', item);
                                        if (index !== undefined) {
                                            _this.dataService.editItem(item, index);
                                        }
                                        else {
                                            _this.dataService.addItem(item);
                                        }
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    InputDialogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_groceries_service_service__WEBPACK_IMPORTED_MODULE_2__["GroceriesServiceService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
    ], InputDialogService);
    return InputDialogService;
}());



/***/ }),

/***/ "./src/app/tab3/tab3.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");







var Tab3PageModule = /** @class */ (function () {
    function Tab3PageModule() {
    }
    Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }])
            ],
            declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
        })
    ], Tab3PageModule);
    return Tab3PageModule;
}());



/***/ }),

/***/ "./src/app/tab3/tab3.page.html":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      {{title}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"outer-content\">\n\n  <h3 class=\"no-item\" text-center *ngIf = \"loadItems().length == 0\">\n    No Items Here! Add Some!\n  </h3>\n\n\n  <ion-list>\n    <ion-item-sliding *ngFor = \"let item of loadItems(); let i = index\">\n      <ion-item>\n        <ion-label>\n          <h2>{{item.name}}</h2>\n          <p>{{item.quantity}}</p>\n        </ion-label>\n      </ion-item>\n      <ion-item-options>\n        <ion-buttons>\n          <ion-button (click)=\"editItem(item, i)\" color=\"secondary\">\n            <ion-icon name=\"create\"></ion-icon>\n          </ion-button>\n          <ion-button (click)=\"shareItem(item, i)\" color=\"tertiary\">\n            <ion-icon name=\"share-alt\"></ion-icon>\n          </ion-button>\n          <ion-button (click)=\"removeItem(item, i)\" color=\"danger\">\n            <ion-icon name=\"trash\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon (click)=\"addItem(item)\" name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab3/tab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3.no-item {\n  color: var(--ion-color-myPurple); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZGJlY2svRGVza3RvcC9HaXRIdWJNVS9TV0RWNjY1LUFkdmFuY2VkIFRvcGljcyBpbiBTVyBEVi9ncm9jZXJpZXMvc3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0NBQWdDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDMubm8taXRlbSB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1teVB1cnBsZSk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/tab3/tab3.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _groceries_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../groceries-service.service */ "./src/app/groceries-service.service.ts");
/* harmony import */ var _input_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../input-dialog.service */ "./src/app/input-dialog.service.ts");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");







var Tab3Page = /** @class */ (function () {
    function Tab3Page(toastController, socialSharing, inputDialogService, dataService, alertController) {
        this.toastController = toastController;
        this.socialSharing = socialSharing;
        this.inputDialogService = inputDialogService;
        this.dataService = dataService;
        this.alertController = alertController;
        this.title = "Grocery List";
    }
    Tab3Page.prototype.loadItems = function () {
        return this.dataService.getItems();
    };
    Tab3Page.prototype.removeItem = function (item, index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Removing item - ' + index + ' ... ',
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        this.dataService.removeItem(index);
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab3Page.prototype.shareItem = function (item, index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast, message, subject;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Sharing item - ' + index + ' ... ',
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        message = "Grocery Item - Name: " + item.name + " - Quantity: " + item.quantity;
                        subject = "Shared via Groceries App";
                        this.socialSharing.share(message, subject).then(function () {
                            // Sharing via email is possible
                            console.log("Shared Successfully!");
                        }).catch(function (error) {
                            // Sharing via email is not possible
                            console.log("Error while sharing", error);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab3Page.prototype.editItem = function (item, index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Editing item - ' + index + ' ... ',
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        this.inputDialogService.showPrompt(item, index);
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab3Page.prototype.addItem = function (item) {
        this.inputDialogService.showPrompt();
    };
    Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab3',
            template: __webpack_require__(/*! ./tab3.page.html */ "./src/app/tab3/tab3.page.html"),
            styles: [__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tab3/tab3.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__["SocialSharing"], _input_dialog_service__WEBPACK_IMPORTED_MODULE_4__["InputDialogService"], _groceries_service_service__WEBPACK_IMPORTED_MODULE_3__["GroceriesServiceService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], Tab3Page);
    return Tab3Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module.js.map