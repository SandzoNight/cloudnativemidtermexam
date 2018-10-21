webpackHotUpdate(5,{

/***/ "./tools/api/request.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_env__ = __webpack_require__("./config/env.js");



function createApiInstance(headers) {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.create({
    baseURL: __WEBPACK_IMPORTED_MODULE_1__config_env__["a" /* default */].STUDENT_SERVICE,
    headers: headers
  });
}

function handleResponse(response) {
  if (response.data) {
    return {
      status: response.status,
      data: response.data,
      headers: response.headers
    };
  }

  return {
    staus: response.status,
    headers: response.headers
  };
}

function catchError(e) {
  if (e.response) {
    return {
      status: e.response.status,
      data: e.response.data,
      headers: e.response.headers
    };
  } else if (e.request) {
    console.log(e);
    throw new Error(e.request);
  } else {
    throw new Error(e.message);
  }
}

/* harmony default export */ __webpack_exports__["a"] = ({
  get: function get(path) {
    var headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return createApiInstance(headers).get(path).then(handleResponse).catch(catchError);
  },
  post: function post(path) {
    var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return createApiInstance().request({
      url: path,
      method: 'POST',
      headers: headers,
      data: body
    }).then(handleResponse).catch(catchError);
  },
  put: function put(path) {
    var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return createApiInstance().request({
      url: path,
      method: 'PUT',
      data: body
    }).then(handleResponse).catch(catchError);
  },
  delete: function _delete(path) {
    var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return createApiInstance().request({
      url: path,
      method: 'DELETE',
      data: body
    }).then(handleResponse).catch(catchError);
  },
  patch: function patch(path) {
    var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return createApiInstance().request({
      url: path,
      method: 'PATCH',
      data: body
    }).then(handleResponse).catch(catchError);
  }
});

/***/ })

})
//# sourceMappingURL=5.743bf340a741158e8734.hot-update.js.map