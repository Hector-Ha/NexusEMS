/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --primary: #4f46e5;
  --primary-dark: #4338ca;
  --primary-light: #818cf8;
  --secondary: #64748b;
  --success: #10b981;
  --success-light: #d1fae5;
  --danger: #ef4444;
  --danger-light: #fee2e2;
  --warning: #f59e0b;
  --warning-light: #fef3c7;
  --info: #0ea5e9;
  --info-light: #e0f2fe;
  
  --gray-50: #f8fafc;
  --gray-100: #f1f5f9;
  --gray-200: #e2e8f0;
  --gray-300: #cbd5e1;
  --gray-400: #94a3b8;
  --gray-500: #64748b;
  --gray-600: #475569;
  --gray-700: #334155;
  --gray-800: #1e293b;
  --gray-900: #0f172a;
  
  --sidebar-width: 260px;
  --navbar-height: 64px;
  --border-radius: 12px;
  --border-radius-sm: 8px;
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --transition: all 0.2s ease;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background-color: var(--gray-50);
  color: var(--gray-800);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: var(--gray-100);
}

::-webkit-scrollbar-thumb {
  background: var(--gray-300);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--gray-400);
}

/* Top Navbar */
.saas-navbar {
  height: var(--navbar-height);
  background: white;
  border-bottom: 1px solid var(--gray-200);
  display: flex;
  align-items: center;
  padding: 0 24px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

.saas-navbar .brand {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: var(--gray-900);
  font-weight: 700;
  font-size: 1.25rem;
}

.saas-navbar .brand-icon {
  width: 36px;
  height: 36px;
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  border-radius: var(--border-radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 1rem;
}

.saas-navbar .nav-actions {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 16px;
}

/* Layout */
.app-layout {
  display: flex;
  min-height: 100vh;
  padding-top: var(--navbar-height);
}

/* Sidebar */
.saas-sidebar {
  width: var(--sidebar-width);
  background: white;
  border-right: 1px solid var(--gray-200);
  position: fixed;
  top: var(--navbar-height);
  left: 0;
  bottom: 0;
  overflow-y: auto;
  padding: 24px 16px;
  z-index: 50;
}

.saas-sidebar .nav-section {
  margin-bottom: 24px;
}

.saas-sidebar .nav-section-title {
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--gray-400);
  padding: 0 12px;
  margin-bottom: 8px;
}

.saas-sidebar .nav-link {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border-radius: var(--border-radius-sm);
  color: var(--gray-600);
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: var(--transition);
  margin-bottom: 4px;
}

.saas-sidebar .nav-link:hover {
  background: var(--gray-100);
  color: var(--gray-900);
}

.saas-sidebar .nav-link.active {
  background: var(--primary);
  color: white;
}

.saas-sidebar .nav-link .icon {
  font-size: 1.25rem;
  opacity: 0.8;
}

/* Main Content */
.main-content {
  flex: 1;
  margin-left: var(--sidebar-width);
  padding: 32px;
  min-height: calc(100vh - var(--navbar-height));
}

/* Page Header */
.page-header {
  margin-bottom: 32px;
}

.page-header h1 {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--gray-900);
  margin-bottom: 4px;
}

.page-header .subtitle {
  color: var(--gray-500);
  font-size: 0.875rem;
}

/* Cards */
.card {
  background: white;
  border-radius: var(--border-radius);
  border: 1px solid var(--gray-200);
  box-shadow: var(--shadow-sm);
}

.card-header {
  padding: 20px 24px;
  border-bottom: 1px solid var(--gray-200);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-header h2 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--gray-900);
  margin: 0;
}

.card-body {
  padding: 24px;
}

/* Stats Cards */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  margin-bottom: 32px;
}

.stat-card {
  background: white;
  border-radius: var(--border-radius);
  border: 1px solid var(--gray-200);
  padding: 24px;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  transition: var(--transition);
}

.stat-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.stat-card .icon-wrapper {
  width: 48px;
  height: 48px;
  border-radius: var(--border-radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
}

.stat-card .icon-wrapper.primary {
  background: rgba(79, 70, 229, 0.1);
  color: var(--primary);
}

.stat-card .icon-wrapper.success {
  background: var(--success-light);
  color: var(--success);
}

.stat-card .icon-wrapper.warning {
  background: var(--warning-light);
  color: var(--warning);
}

.stat-card .icon-wrapper.info {
  background: var(--info-light);
  color: var(--info);
}

.stat-card .content h3 {
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--gray-500);
  margin-bottom: 4px;
}

.stat-card .content .value {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--gray-900);
}

/* Data Table */
.data-table-wrapper {
  background: white;
  border-radius: var(--border-radius);
  border: 1px solid var(--gray-200);
  overflow: hidden;
}

.data-table-header {
  padding: 20px 24px;
  border-bottom: 1px solid var(--gray-200);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
}

.data-table-header h2 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--gray-900);
  margin: 0;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
}

.data-table thead {
  background: var(--gray-50);
}

.data-table th {
  padding: 12px 16px;
  text-align: left;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--gray-500);
  border-bottom: 1px solid var(--gray-200);
}

.data-table td {
  padding: 16px;
  border-bottom: 1px solid var(--gray-100);
  font-size: 0.875rem;
  color: var(--gray-700);
}

.data-table tbody tr {
  transition: var(--transition);
  cursor: pointer;
}

.data-table tbody tr:hover {
  background: var(--gray-50);
}

.data-table tbody tr:last-child td {
  border-bottom: none;
}

/* Badges */
.badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
}

.badge-success {
  background: var(--success-light);
  color: #065f46;
}

.badge-danger {
  background: var(--danger-light);
  color: #991b1b;
}

.badge-warning {
  background: var(--warning-light);
  color: #92400e;
}

.badge-info {
  background: var(--info-light);
  color: #0369a1;
}

.badge-secondary {
  background: var(--gray-100);
  color: var(--gray-600);
}

.badge-primary {
  background: rgba(79, 70, 229, 0.1);
  color: var(--primary);
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: var(--border-radius-sm);
  font-size: 0.875rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: var(--transition);
  text-decoration: none;
}

.btn-primary {
  background: var(--primary);
  color: white;
}

.btn-primary:hover {
  background: var(--primary-dark);
}

.btn-secondary {
  background: var(--gray-100);
  color: var(--gray-700);
}

.btn-secondary:hover {
  background: var(--gray-200);
}

.btn-danger {
  background: var(--danger);
  color: white;
}

.btn-danger:hover {
  background: #dc2626;
}

.btn-ghost {
  background: transparent;
  color: var(--gray-600);
}

.btn-ghost:hover {
  background: var(--gray-100);
  color: var(--gray-900);
}

.btn-sm {
  padding: 6px 12px;
  font-size: 0.75rem;
}

.btn-icon {
  width: 36px;
  height: 36px;
  padding: 0;
  border-radius: var(--border-radius-sm);
}

/* Forms */
.form-group {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--gray-700);
  margin-bottom: 6px;
}

.form-input,
.form-select {
  width: 100%;
  padding: 10px 14px;
  border: 1px solid var(--gray-300);
  border-radius: var(--border-radius-sm);
  font-size: 0.875rem;
  transition: var(--transition);
  background: white;
}

.form-input:focus,
.form-select:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
}

.form-input.is-invalid,
.form-select.is-invalid {
  border-color: var(--danger);
}

.form-error {
  font-size: 0.75rem;
  color: var(--danger);
  margin-top: 4px;
}

/* Alerts */
.alert {
  padding: 16px 20px;
  border-radius: var(--border-radius-sm);
  font-size: 0.875rem;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.alert-success {
  background: var(--success-light);
  color: #065f46;
  border: 1px solid #a7f3d0;
}

.alert-danger {
  background: var(--danger-light);
  color: #991b1b;
  border: 1px solid #fecaca;
}

.alert-info {
  background: var(--info-light);
  color: #0369a1;
  border: 1px solid #bae6fd;
}

.alert-warning {
  background: var(--warning-light);
  color: #92400e;
  border: 1px solid #fde68a;
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: 48px 24px;
}

.empty-state .icon {
  font-size: 3rem;
  color: var(--gray-300);
  margin-bottom: 16px;
}

.empty-state h3 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--gray-900);
  margin-bottom: 8px;
}

.empty-state p {
  color: var(--gray-500);
  font-size: 0.875rem;
}

/* Spinner */
.spinner {
  width: 40px;
  height: 40px;
  border: 3px solid var(--gray-200);
  border-top-color: var(--primary);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.loading-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 48px;
}

/* Details Card */
.details-card {
  background: white;
  border-radius: var(--border-radius);
  border: 1px solid var(--gray-200);
  max-width: 600px;
  margin: 0 auto;
}

.details-card .header {
  padding: 24px;
  border-bottom: 1px solid var(--gray-200);
  text-align: center;
}

.details-card .avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  font-weight: 600;
  margin: 0 auto 16px;
}

.details-card .name {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--gray-900);
  margin-bottom: 4px;
}

.details-card .title {
  color: var(--gray-500);
  font-size: 0.875rem;
}

.details-card .body {
  padding: 24px;
}

.details-card .info-row {
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid var(--gray-100);
}

.details-card .info-row:last-child {
  border-bottom: none;
}

.details-card .info-label {
  color: var(--gray-500);
  font-size: 0.875rem;
}

.details-card .info-value {
  color: var(--gray-900);
  font-size: 0.875rem;
  font-weight: 500;
}

.details-card .retirement-section {
  background: var(--gray-50);
  border-radius: var(--border-radius-sm);
  padding: 20px;
  margin-top: 16px;
}

.details-card .retirement-section h3 {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--gray-900);
  margin-bottom: 12px;
}

.details-card .footer {
  padding: 24px;
  border-top: 1px solid var(--gray-200);
}

/* Form Card */
.form-card {
  background: white;
  border-radius: var(--border-radius);
  border: 1px solid var(--gray-200);
  max-width: 600px;
  margin: 0 auto;
}

.form-card .header {
  padding: 24px;
  border-bottom: 1px solid var(--gray-200);
}

.form-card .header h2 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--gray-900);
  margin: 0;
}

.form-card .body {
  padding: 24px;
}

.form-card .footer {
  padding: 24px;
  border-top: 1px solid var(--gray-200);
}

/* About Page */
.about-page {
  max-width: 800px;
  margin: 0 auto;
}

.about-page .hero {
  text-align: center;
  margin-bottom: 48px;
}

.about-page .hero h1 {
  font-size: 2rem;
  font-weight: 700;
  color: var(--gray-900);
  margin-bottom: 12px;
}

.about-page .hero p {
  color: var(--gray-500);
  font-size: 1rem;
  max-width: 600px;
  margin: 0 auto;
}

.about-page .features {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-bottom: 48px;
}

.about-page .feature-card {
  background: white;
  border-radius: var(--border-radius);
  border: 1px solid var(--gray-200);
  padding: 24px;
  text-align: center;
}

.about-page .feature-card .icon {
  width: 48px;
  height: 48px;
  border-radius: var(--border-radius-sm);
  background: rgba(79, 70, 229, 0.1);
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  margin: 0 auto 16px;
}

.about-page .feature-card h3 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--gray-900);
  margin-bottom: 8px;
}

.about-page .feature-card p {
  color: var(--gray-500);
  font-size: 0.875rem;
}

/* Not Found */
.not-found-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  text-align: center;
}

.not-found-page .code {
  font-size: 6rem;
  font-weight: 700;
  color: var(--gray-200);
  line-height: 1;
  margin-bottom: 16px;
}

.not-found-page h1 {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--gray-900);
  margin-bottom: 8px;
}

.not-found-page p {
  color: var(--gray-500);
  margin-bottom: 24px;
}

/* Filter */
.filter-select {
  min-width: 180px;
  padding: 8px 12px;
  border: 1px solid var(--gray-300);
  border-radius: var(--border-radius-sm);
  font-size: 0.875rem;
  background: white;
}

.filter-select:focus {
  outline: none;
  border-color: var(--primary);
}

/* Responsive */
@media (max-width: 1024px) {
  .saas-sidebar {
    transform: translateX(-100%);
  }
  
  .main-content {
    margin-left: 0;
  }
}

@media (max-width: 768px) {
  .main-content {
    padding: 20px;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .data-table-header {
    flex-direction: column;
    align-items: stretch;
  }
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,wBAAwB;EACxB,oBAAoB;EACpB,kBAAkB;EAClB,wBAAwB;EACxB,iBAAiB;EACjB,uBAAuB;EACvB,kBAAkB;EAClB,wBAAwB;EACxB,eAAe;EACf,qBAAqB;;EAErB,kBAAkB;EAClB,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;;EAEnB,sBAAsB;EACtB,qBAAqB;EACrB,qBAAqB;EACrB,uBAAuB;EACvB,0CAA0C;EAC1C,uEAAuE;EACvE,6EAA6E;EAC7E,+EAA+E;EAC/E,2BAA2B;AAC7B;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,uFAAuF;EACvF,gCAAgC;EAChC,sBAAsB;EACtB,gBAAgB;EAChB,mCAAmC;AACrC;;AAEA,qBAAqB;AACrB;EACE,UAAU;EACV,WAAW;AACb;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,2BAA2B;EAC3B,kBAAkB;AACpB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA,eAAe;AACf;EACE,4BAA4B;EAC5B,iBAAiB;EACjB,wCAAwC;EACxC,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,eAAe;EACf,MAAM;EACN,OAAO;EACP,QAAQ;EACR,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,qBAAqB;EACrB,sBAAsB;EACtB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,wEAAwE;EACxE,sCAAsC;EACtC,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA,WAAW;AACX;EACE,aAAa;EACb,iBAAiB;EACjB,iCAAiC;AACnC;;AAEA,YAAY;AACZ;EACE,2BAA2B;EAC3B,iBAAiB;EACjB,uCAAuC;EACvC,eAAe;EACf,yBAAyB;EACzB,OAAO;EACP,SAAS;EACT,gBAAgB;EAChB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,yBAAyB;EACzB,sBAAsB;EACtB,sBAAsB;EACtB,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,kBAAkB;EAClB,sCAAsC;EACtC,sBAAsB;EACtB,qBAAqB;EACrB,mBAAmB;EACnB,gBAAgB;EAChB,6BAA6B;EAC7B,kBAAkB;AACpB;;AAEA;EACE,2BAA2B;EAC3B,sBAAsB;AACxB;;AAEA;EACE,0BAA0B;EAC1B,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,YAAY;AACd;;AAEA,iBAAiB;AACjB;EACE,OAAO;EACP,iCAAiC;EACjC,aAAa;EACb,8CAA8C;AAChD;;AAEA,gBAAgB;AAChB;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA,UAAU;AACV;EACE,iBAAiB;EACjB,mCAAmC;EACnC,iCAAiC;EACjC,4BAA4B;AAC9B;;AAEA;EACE,kBAAkB;EAClB,wCAAwC;EACxC,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;AACf;;AAEA,gBAAgB;AAChB;EACE,aAAa;EACb,2DAA2D;EAC3D,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,mCAAmC;EACnC,iCAAiC;EACjC,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,SAAS;EACT,6BAA6B;AAC/B;;AAEA;EACE,4BAA4B;EAC5B,2BAA2B;AAC7B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,sCAAsC;EACtC,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,kCAAkC;EAClC,qBAAqB;AACvB;;AAEA;EACE,gCAAgC;EAChC,qBAAqB;AACvB;;AAEA;EACE,gCAAgC;EAChC,qBAAqB;AACvB;;AAEA;EACE,6BAA6B;EAC7B,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,yBAAyB;EACzB,sBAAsB;EACtB,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,sBAAsB;AACxB;;AAEA,eAAe;AACf;EACE,iBAAiB;EACjB,mCAAmC;EACnC,iCAAiC;EACjC,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,wCAAwC;EACxC,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,eAAe;EACf,SAAS;AACX;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,WAAW;EACX,yBAAyB;AAC3B;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;EAClB,gBAAgB;EAChB,yBAAyB;EACzB,sBAAsB;EACtB,sBAAsB;EACtB,wCAAwC;AAC1C;;AAEA;EACE,aAAa;EACb,wCAAwC;EACxC,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,6BAA6B;EAC7B,eAAe;AACjB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,mBAAmB;AACrB;;AAEA,WAAW;AACX;EACE,oBAAoB;EACpB,mBAAmB;EACnB,iBAAiB;EACjB,qBAAqB;EACrB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,gCAAgC;EAChC,cAAc;AAChB;;AAEA;EACE,+BAA+B;EAC/B,cAAc;AAChB;;AAEA;EACE,gCAAgC;EAChC,cAAc;AAChB;;AAEA;EACE,6BAA6B;EAC7B,cAAc;AAChB;;AAEA;EACE,2BAA2B;EAC3B,sBAAsB;AACxB;;AAEA;EACE,kCAAkC;EAClC,qBAAqB;AACvB;;AAEA,YAAY;AACZ;EACE,oBAAoB;EACpB,mBAAmB;EACnB,uBAAuB;EACvB,QAAQ;EACR,kBAAkB;EAClB,sCAAsC;EACtC,mBAAmB;EACnB,gBAAgB;EAChB,YAAY;EACZ,eAAe;EACf,6BAA6B;EAC7B,qBAAqB;AACvB;;AAEA;EACE,0BAA0B;EAC1B,YAAY;AACd;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,2BAA2B;EAC3B,sBAAsB;AACxB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,sBAAsB;AACxB;;AAEA;EACE,2BAA2B;EAC3B,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,UAAU;EACV,sCAAsC;AACxC;;AAEA,UAAU;AACV;EACE,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,mBAAmB;EACnB,gBAAgB;EAChB,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;;EAEE,WAAW;EACX,kBAAkB;EAClB,iCAAiC;EACjC,sCAAsC;EACtC,mBAAmB;EACnB,6BAA6B;EAC7B,iBAAiB;AACnB;;AAEA;;EAEE,aAAa;EACb,4BAA4B;EAC5B,4CAA4C;AAC9C;;AAEA;;EAEE,2BAA2B;AAC7B;;AAEA;EACE,kBAAkB;EAClB,oBAAoB;EACpB,eAAe;AACjB;;AAEA,WAAW;AACX;EACE,kBAAkB;EAClB,sCAAsC;EACtC,mBAAmB;EACnB,mBAAmB;EACnB,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,gCAAgC;EAChC,cAAc;EACd,yBAAyB;AAC3B;;AAEA;EACE,+BAA+B;EAC/B,cAAc;EACd,yBAAyB;AAC3B;;AAEA;EACE,6BAA6B;EAC7B,cAAc;EACd,yBAAyB;AAC3B;;AAEA;EACE,gCAAgC;EAChC,cAAc;EACd,yBAAyB;AAC3B;;AAEA,gBAAgB;AAChB;EACE,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA,YAAY;AACZ;EACE,WAAW;EACX,YAAY;EACZ,iCAAiC;EACjC,gCAAgC;EAChC,kBAAkB;EAClB,oCAAoC;AACtC;;AAEA;EACE,KAAK,yBAAyB,EAAE;AAClC;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;AACf;;AAEA,iBAAiB;AACjB;EACE,iBAAiB;EACjB,mCAAmC;EACnC,iCAAiC;EACjC,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,wCAAwC;EACxC,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,wEAAwE;EACxE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,eAAe;EACf,wCAAwC;AAC1C;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;EACtB,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,0BAA0B;EAC1B,sCAAsC;EACtC,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;EAChB,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,qCAAqC;AACvC;;AAEA,cAAc;AACd;EACE,iBAAiB;EACjB,mCAAmC;EACnC,iCAAiC;EACjC,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,wCAAwC;AAC1C;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,qCAAqC;AACvC;;AAEA,eAAe;AACf;EACE,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;EACtB,eAAe;EACf,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,mCAAmC;EACnC,iCAAiC;EACjC,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,sCAAsC;EACtC,kCAAkC;EAClC,qBAAqB;EACrB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA,cAAc;AACd;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,sBAAsB;EACtB,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA,WAAW;AACX;EACE,gBAAgB;EAChB,iBAAiB;EACjB,iCAAiC;EACjC,sCAAsC;EACtC,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,4BAA4B;AAC9B;;AAEA,eAAe;AACf;EACE;IACE,4BAA4B;EAC9B;;EAEA;IACE,cAAc;EAChB;AACF;;AAEA;EACE;IACE,aAAa;EACf;;EAEA;IACE,0BAA0B;EAC5B;;EAEA;IACE,sBAAsB;IACtB,oBAAoB;EACtB;AACF","sourcesContent":[":root {\n  --primary: #4f46e5;\n  --primary-dark: #4338ca;\n  --primary-light: #818cf8;\n  --secondary: #64748b;\n  --success: #10b981;\n  --success-light: #d1fae5;\n  --danger: #ef4444;\n  --danger-light: #fee2e2;\n  --warning: #f59e0b;\n  --warning-light: #fef3c7;\n  --info: #0ea5e9;\n  --info-light: #e0f2fe;\n  \n  --gray-50: #f8fafc;\n  --gray-100: #f1f5f9;\n  --gray-200: #e2e8f0;\n  --gray-300: #cbd5e1;\n  --gray-400: #94a3b8;\n  --gray-500: #64748b;\n  --gray-600: #475569;\n  --gray-700: #334155;\n  --gray-800: #1e293b;\n  --gray-900: #0f172a;\n  \n  --sidebar-width: 260px;\n  --navbar-height: 64px;\n  --border-radius: 12px;\n  --border-radius-sm: 8px;\n  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --transition: all 0.2s ease;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\n  background-color: var(--gray-50);\n  color: var(--gray-800);\n  line-height: 1.6;\n  -webkit-font-smoothing: antialiased;\n}\n\n/* Custom Scrollbar */\n::-webkit-scrollbar {\n  width: 6px;\n  height: 6px;\n}\n\n::-webkit-scrollbar-track {\n  background: var(--gray-100);\n}\n\n::-webkit-scrollbar-thumb {\n  background: var(--gray-300);\n  border-radius: 3px;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background: var(--gray-400);\n}\n\n/* Top Navbar */\n.saas-navbar {\n  height: var(--navbar-height);\n  background: white;\n  border-bottom: 1px solid var(--gray-200);\n  display: flex;\n  align-items: center;\n  padding: 0 24px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 100;\n}\n\n.saas-navbar .brand {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  text-decoration: none;\n  color: var(--gray-900);\n  font-weight: 700;\n  font-size: 1.25rem;\n}\n\n.saas-navbar .brand-icon {\n  width: 36px;\n  height: 36px;\n  background: linear-gradient(135deg, var(--primary), var(--primary-dark));\n  border-radius: var(--border-radius-sm);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: 700;\n  font-size: 1rem;\n}\n\n.saas-navbar .nav-actions {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n\n/* Layout */\n.app-layout {\n  display: flex;\n  min-height: 100vh;\n  padding-top: var(--navbar-height);\n}\n\n/* Sidebar */\n.saas-sidebar {\n  width: var(--sidebar-width);\n  background: white;\n  border-right: 1px solid var(--gray-200);\n  position: fixed;\n  top: var(--navbar-height);\n  left: 0;\n  bottom: 0;\n  overflow-y: auto;\n  padding: 24px 16px;\n  z-index: 50;\n}\n\n.saas-sidebar .nav-section {\n  margin-bottom: 24px;\n}\n\n.saas-sidebar .nav-section-title {\n  font-size: 0.7rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--gray-400);\n  padding: 0 12px;\n  margin-bottom: 8px;\n}\n\n.saas-sidebar .nav-link {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 12px;\n  border-radius: var(--border-radius-sm);\n  color: var(--gray-600);\n  text-decoration: none;\n  font-size: 0.875rem;\n  font-weight: 500;\n  transition: var(--transition);\n  margin-bottom: 4px;\n}\n\n.saas-sidebar .nav-link:hover {\n  background: var(--gray-100);\n  color: var(--gray-900);\n}\n\n.saas-sidebar .nav-link.active {\n  background: var(--primary);\n  color: white;\n}\n\n.saas-sidebar .nav-link .icon {\n  font-size: 1.25rem;\n  opacity: 0.8;\n}\n\n/* Main Content */\n.main-content {\n  flex: 1;\n  margin-left: var(--sidebar-width);\n  padding: 32px;\n  min-height: calc(100vh - var(--navbar-height));\n}\n\n/* Page Header */\n.page-header {\n  margin-bottom: 32px;\n}\n\n.page-header h1 {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: var(--gray-900);\n  margin-bottom: 4px;\n}\n\n.page-header .subtitle {\n  color: var(--gray-500);\n  font-size: 0.875rem;\n}\n\n/* Cards */\n.card {\n  background: white;\n  border-radius: var(--border-radius);\n  border: 1px solid var(--gray-200);\n  box-shadow: var(--shadow-sm);\n}\n\n.card-header {\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--gray-200);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.card-header h2 {\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--gray-900);\n  margin: 0;\n}\n\n.card-body {\n  padding: 24px;\n}\n\n/* Stats Cards */\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 20px;\n  margin-bottom: 32px;\n}\n\n.stat-card {\n  background: white;\n  border-radius: var(--border-radius);\n  border: 1px solid var(--gray-200);\n  padding: 24px;\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  transition: var(--transition);\n}\n\n.stat-card:hover {\n  box-shadow: var(--shadow-md);\n  transform: translateY(-2px);\n}\n\n.stat-card .icon-wrapper {\n  width: 48px;\n  height: 48px;\n  border-radius: var(--border-radius-sm);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.25rem;\n}\n\n.stat-card .icon-wrapper.primary {\n  background: rgba(79, 70, 229, 0.1);\n  color: var(--primary);\n}\n\n.stat-card .icon-wrapper.success {\n  background: var(--success-light);\n  color: var(--success);\n}\n\n.stat-card .icon-wrapper.warning {\n  background: var(--warning-light);\n  color: var(--warning);\n}\n\n.stat-card .icon-wrapper.info {\n  background: var(--info-light);\n  color: var(--info);\n}\n\n.stat-card .content h3 {\n  font-size: 0.75rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--gray-500);\n  margin-bottom: 4px;\n}\n\n.stat-card .content .value {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: var(--gray-900);\n}\n\n/* Data Table */\n.data-table-wrapper {\n  background: white;\n  border-radius: var(--border-radius);\n  border: 1px solid var(--gray-200);\n  overflow: hidden;\n}\n\n.data-table-header {\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--gray-200);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n\n.data-table-header h2 {\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--gray-900);\n  margin: 0;\n}\n\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n\n.data-table thead {\n  background: var(--gray-50);\n}\n\n.data-table th {\n  padding: 12px 16px;\n  text-align: left;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--gray-500);\n  border-bottom: 1px solid var(--gray-200);\n}\n\n.data-table td {\n  padding: 16px;\n  border-bottom: 1px solid var(--gray-100);\n  font-size: 0.875rem;\n  color: var(--gray-700);\n}\n\n.data-table tbody tr {\n  transition: var(--transition);\n  cursor: pointer;\n}\n\n.data-table tbody tr:hover {\n  background: var(--gray-50);\n}\n\n.data-table tbody tr:last-child td {\n  border-bottom: none;\n}\n\n/* Badges */\n.badge {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 10px;\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n\n.badge-success {\n  background: var(--success-light);\n  color: #065f46;\n}\n\n.badge-danger {\n  background: var(--danger-light);\n  color: #991b1b;\n}\n\n.badge-warning {\n  background: var(--warning-light);\n  color: #92400e;\n}\n\n.badge-info {\n  background: var(--info-light);\n  color: #0369a1;\n}\n\n.badge-secondary {\n  background: var(--gray-100);\n  color: var(--gray-600);\n}\n\n.badge-primary {\n  background: rgba(79, 70, 229, 0.1);\n  color: var(--primary);\n}\n\n/* Buttons */\n.btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border-radius: var(--border-radius-sm);\n  font-size: 0.875rem;\n  font-weight: 500;\n  border: none;\n  cursor: pointer;\n  transition: var(--transition);\n  text-decoration: none;\n}\n\n.btn-primary {\n  background: var(--primary);\n  color: white;\n}\n\n.btn-primary:hover {\n  background: var(--primary-dark);\n}\n\n.btn-secondary {\n  background: var(--gray-100);\n  color: var(--gray-700);\n}\n\n.btn-secondary:hover {\n  background: var(--gray-200);\n}\n\n.btn-danger {\n  background: var(--danger);\n  color: white;\n}\n\n.btn-danger:hover {\n  background: #dc2626;\n}\n\n.btn-ghost {\n  background: transparent;\n  color: var(--gray-600);\n}\n\n.btn-ghost:hover {\n  background: var(--gray-100);\n  color: var(--gray-900);\n}\n\n.btn-sm {\n  padding: 6px 12px;\n  font-size: 0.75rem;\n}\n\n.btn-icon {\n  width: 36px;\n  height: 36px;\n  padding: 0;\n  border-radius: var(--border-radius-sm);\n}\n\n/* Forms */\n.form-group {\n  margin-bottom: 20px;\n}\n\n.form-label {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--gray-700);\n  margin-bottom: 6px;\n}\n\n.form-input,\n.form-select {\n  width: 100%;\n  padding: 10px 14px;\n  border: 1px solid var(--gray-300);\n  border-radius: var(--border-radius-sm);\n  font-size: 0.875rem;\n  transition: var(--transition);\n  background: white;\n}\n\n.form-input:focus,\n.form-select:focus {\n  outline: none;\n  border-color: var(--primary);\n  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);\n}\n\n.form-input.is-invalid,\n.form-select.is-invalid {\n  border-color: var(--danger);\n}\n\n.form-error {\n  font-size: 0.75rem;\n  color: var(--danger);\n  margin-top: 4px;\n}\n\n/* Alerts */\n.alert {\n  padding: 16px 20px;\n  border-radius: var(--border-radius-sm);\n  font-size: 0.875rem;\n  margin-bottom: 20px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.alert-success {\n  background: var(--success-light);\n  color: #065f46;\n  border: 1px solid #a7f3d0;\n}\n\n.alert-danger {\n  background: var(--danger-light);\n  color: #991b1b;\n  border: 1px solid #fecaca;\n}\n\n.alert-info {\n  background: var(--info-light);\n  color: #0369a1;\n  border: 1px solid #bae6fd;\n}\n\n.alert-warning {\n  background: var(--warning-light);\n  color: #92400e;\n  border: 1px solid #fde68a;\n}\n\n/* Empty State */\n.empty-state {\n  text-align: center;\n  padding: 48px 24px;\n}\n\n.empty-state .icon {\n  font-size: 3rem;\n  color: var(--gray-300);\n  margin-bottom: 16px;\n}\n\n.empty-state h3 {\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--gray-900);\n  margin-bottom: 8px;\n}\n\n.empty-state p {\n  color: var(--gray-500);\n  font-size: 0.875rem;\n}\n\n/* Spinner */\n.spinner {\n  width: 40px;\n  height: 40px;\n  border: 3px solid var(--gray-200);\n  border-top-color: var(--primary);\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n\n@keyframes spin {\n  to { transform: rotate(360deg); }\n}\n\n.loading-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 48px;\n}\n\n/* Details Card */\n.details-card {\n  background: white;\n  border-radius: var(--border-radius);\n  border: 1px solid var(--gray-200);\n  max-width: 600px;\n  margin: 0 auto;\n}\n\n.details-card .header {\n  padding: 24px;\n  border-bottom: 1px solid var(--gray-200);\n  text-align: center;\n}\n\n.details-card .avatar {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, var(--primary), var(--primary-dark));\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.75rem;\n  font-weight: 600;\n  margin: 0 auto 16px;\n}\n\n.details-card .name {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: var(--gray-900);\n  margin-bottom: 4px;\n}\n\n.details-card .title {\n  color: var(--gray-500);\n  font-size: 0.875rem;\n}\n\n.details-card .body {\n  padding: 24px;\n}\n\n.details-card .info-row {\n  display: flex;\n  justify-content: space-between;\n  padding: 12px 0;\n  border-bottom: 1px solid var(--gray-100);\n}\n\n.details-card .info-row:last-child {\n  border-bottom: none;\n}\n\n.details-card .info-label {\n  color: var(--gray-500);\n  font-size: 0.875rem;\n}\n\n.details-card .info-value {\n  color: var(--gray-900);\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n\n.details-card .retirement-section {\n  background: var(--gray-50);\n  border-radius: var(--border-radius-sm);\n  padding: 20px;\n  margin-top: 16px;\n}\n\n.details-card .retirement-section h3 {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--gray-900);\n  margin-bottom: 12px;\n}\n\n.details-card .footer {\n  padding: 24px;\n  border-top: 1px solid var(--gray-200);\n}\n\n/* Form Card */\n.form-card {\n  background: white;\n  border-radius: var(--border-radius);\n  border: 1px solid var(--gray-200);\n  max-width: 600px;\n  margin: 0 auto;\n}\n\n.form-card .header {\n  padding: 24px;\n  border-bottom: 1px solid var(--gray-200);\n}\n\n.form-card .header h2 {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: var(--gray-900);\n  margin: 0;\n}\n\n.form-card .body {\n  padding: 24px;\n}\n\n.form-card .footer {\n  padding: 24px;\n  border-top: 1px solid var(--gray-200);\n}\n\n/* About Page */\n.about-page {\n  max-width: 800px;\n  margin: 0 auto;\n}\n\n.about-page .hero {\n  text-align: center;\n  margin-bottom: 48px;\n}\n\n.about-page .hero h1 {\n  font-size: 2rem;\n  font-weight: 700;\n  color: var(--gray-900);\n  margin-bottom: 12px;\n}\n\n.about-page .hero p {\n  color: var(--gray-500);\n  font-size: 1rem;\n  max-width: 600px;\n  margin: 0 auto;\n}\n\n.about-page .features {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 24px;\n  margin-bottom: 48px;\n}\n\n.about-page .feature-card {\n  background: white;\n  border-radius: var(--border-radius);\n  border: 1px solid var(--gray-200);\n  padding: 24px;\n  text-align: center;\n}\n\n.about-page .feature-card .icon {\n  width: 48px;\n  height: 48px;\n  border-radius: var(--border-radius-sm);\n  background: rgba(79, 70, 229, 0.1);\n  color: var(--primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.25rem;\n  margin: 0 auto 16px;\n}\n\n.about-page .feature-card h3 {\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--gray-900);\n  margin-bottom: 8px;\n}\n\n.about-page .feature-card p {\n  color: var(--gray-500);\n  font-size: 0.875rem;\n}\n\n/* Not Found */\n.not-found-page {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n  text-align: center;\n}\n\n.not-found-page .code {\n  font-size: 6rem;\n  font-weight: 700;\n  color: var(--gray-200);\n  line-height: 1;\n  margin-bottom: 16px;\n}\n\n.not-found-page h1 {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: var(--gray-900);\n  margin-bottom: 8px;\n}\n\n.not-found-page p {\n  color: var(--gray-500);\n  margin-bottom: 24px;\n}\n\n/* Filter */\n.filter-select {\n  min-width: 180px;\n  padding: 8px 12px;\n  border: 1px solid var(--gray-300);\n  border-radius: var(--border-radius-sm);\n  font-size: 0.875rem;\n  background: white;\n}\n\n.filter-select:focus {\n  outline: none;\n  border-color: var(--primary);\n}\n\n/* Responsive */\n@media (max-width: 1024px) {\n  .saas-sidebar {\n    transform: translateX(-100%);\n  }\n  \n  .main-content {\n    margin-left: 0;\n  }\n}\n\n@media (max-width: 768px) {\n  .main-content {\n    padding: 20px;\n  }\n  \n  .stats-grid {\n    grid-template-columns: 1fr;\n  }\n  \n  .data-table-header {\n    flex-direction: column;\n    align-items: stretch;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/About.jsx":
/*!***********************!*\
  !*** ./src/About.jsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.mjs");


var About = function About() {
  var features = [{
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_1__.BsPeople, null),
    title: "Employee Management",
    description: "Easily manage employee data including personal details, job titles, departments, and employment status."
  }, {
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_1__.BsCalendarCheck, null),
    title: "Retirement Planning",
    description: "Track upcoming retirements with precise time-to-retirement calculations and advanced filtering."
  }, {
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_1__.BsGraphUp, null),
    title: "Analytics Dashboard",
    description: "Get real-time insights into your workforce with intuitive stats and visual dashboards."
  }, {
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_1__.BsShieldCheck, null),
    title: "Secure & Reliable",
    description: "Built with modern security practices using GraphQL APIs and MongoDB for data integrity."
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "about-page"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "hero"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "About NexusEMS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "A robust employee management solution designed to streamline HR processes for businesses of all sizes. Built with modern technologies for a seamless experience.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "features"
  }, features.map(function (feature, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: index,
      className: "feature-card"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "icon"
    }, feature.icon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, feature.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, feature.description));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-body",
    style: {
      textAlign: "center",
      padding: 40
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    style: {
      marginBottom: 16,
      color: "var(--gray-900)"
    }
  }, "Built with Modern Technologies"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      color: "var(--gray-500)",
      marginBottom: 24
    }
  }, "React, GraphQL, Node.js, Express, and MongoDB power NexusEMS to deliver a fast, reliable, and scalable employee management experience."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      gap: 32,
      flexWrap: "wrap",
      color: "var(--gray-400)",
      fontSize: "0.875rem",
      fontWeight: 500
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "React"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "GraphQL"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Node.js"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "MongoDB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Express")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      textAlign: "center",
      marginTop: 48,
      color: "var(--gray-500)",
      fontSize: "0.875rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Questions or feedback? Contact us at", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "mailto:support@nexusems.com",
    style: {
      color: "var(--primary)"
    }
  }, "support@nexusems.com"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);

/***/ }),

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.mjs");
/* harmony import */ var _Home_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.jsx */ "./src/Home.jsx");
/* harmony import */ var _EmployeeList_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EmployeeList.jsx */ "./src/EmployeeList.jsx");
/* harmony import */ var _EmployeeCreate_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EmployeeCreate.jsx */ "./src/EmployeeCreate.jsx");
/* harmony import */ var _EmployeeDetails_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EmployeeDetails.jsx */ "./src/EmployeeDetails.jsx");
/* harmony import */ var _EmployeeUpdate_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EmployeeUpdate.jsx */ "./src/EmployeeUpdate.jsx");
/* harmony import */ var _About_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./About.jsx */ "./src/About.jsx");
/* harmony import */ var _UpcomingRetirement_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./UpcomingRetirement.jsx */ "./src/UpcomingRetirement.jsx");
/* harmony import */ var _NotFound_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./NotFound.jsx */ "./src/NotFound.jsx");












var Navbar = function Navbar() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    className: "saas-navbar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link, {
    to: "/",
    className: "brand"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "brand-icon"
  }, "N"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "NexusEMS")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "nav-actions"
  }));
};
var Sidebar = function Sidebar() {
  var mainLinks = [{
    to: "/",
    label: "Dashboard",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_11__.BsHouseDoor, null)
  }, {
    to: "/employees",
    label: "Employees",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_11__.BsPeople, null)
  }, {
    to: "/employees/create",
    label: "Add Employee",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_11__.BsPersonPlus, null)
  }];
  var otherLinks = [{
    to: "/retirement",
    label: "Retirement",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_11__.BsCalendarEvent, null)
  }, {
    to: "/about",
    label: "About",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_11__.BsInfoCircle, null)
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("aside", {
    className: "saas-sidebar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "nav-section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "nav-section-title"
  }, "Main Menu"), mainLinks.map(function (link) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.NavLink, {
      key: link.to,
      to: link.to,
      end: link.to === "/",
      className: function className(_ref) {
        var isActive = _ref.isActive;
        return "nav-link ".concat(isActive ? "active" : "");
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "icon"
    }, link.icon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, link.label));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "nav-section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "nav-section-title"
  }, "Reports"), otherLinks.map(function (link) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.NavLink, {
      key: link.to,
      to: link.to,
      className: function className(_ref2) {
        var isActive = _ref2.isActive;
        return "nav-link ".concat(isActive ? "active" : "");
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "icon"
    }, link.icon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, link.label));
  })));
};
var AppLayout = function AppLayout() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Navbar, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "app-layout"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Sidebar, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", {
    className: "main-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Home_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
    path: "/employees",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_EmployeeList_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
    path: "/employees/create",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_EmployeeCreate_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
    path: "/employees/:id",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_EmployeeDetails_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
    path: "/employees/:id/update",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_EmployeeUpdate_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
    path: "/about",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_About_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
    path: "/retirement",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_UpcomingRetirement_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
    path: "*",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NotFound_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], null)
  })))));
};
var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AppLayout, null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/EmployeeCreate.jsx":
/*!********************************!*\
  !*** ./src/EmployeeCreate.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.mjs");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



var EmployeeCreate = function EmployeeCreate(_ref) {
  var refresh = _ref.refresh;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      FirstName: "",
      LastName: "",
      Age: "",
      DateOfJoining: "",
      Title: "",
      Department: "",
      EmployeeType: "",
      error: "",
      success: "",
      loading: false
    }),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    touched = _useState4[0],
    setTouched = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState6 = _slicedToArray(_useState5, 2),
    fieldErrors = _useState6[0],
    setFieldErrors = _useState6[1];
  var isEmpty = function isEmpty(s) {
    return !s || !String(s).trim();
  };
  var clampInt = function clampInt(v) {
    var n = parseInt(v, 10);
    return Number.isFinite(n) ? n : NaN;
  };
  var isValidDate = function isValidDate(v) {
    var d = new Date(v);
    return !Number.isNaN(d.getTime());
  };
  var validateAll = function validateAll(vals) {
    var errs = {};
    var ageNum = clampInt(vals.Age);
    if (isEmpty(vals.FirstName)) errs.FirstName = "First name is required";
    if (isEmpty(vals.LastName)) errs.LastName = "Last name is required";
    if (Number.isNaN(ageNum)) errs.Age = "Age is required";else if (ageNum < 20 || ageNum > 70) errs.Age = "Age must be between 20 and 70";
    if (isEmpty(vals.DateOfJoining)) {
      errs.DateOfJoining = "Join date is required";
    } else if (!isValidDate(vals.DateOfJoining)) {
      errs.DateOfJoining = "Enter a valid date";
    } else {
      var d = new Date(vals.DateOfJoining);
      var today = new Date();
      today.setHours(0, 0, 0, 0);
      if (d > today) errs.DateOfJoining = "Join date cannot be in the future";
    }
    if (isEmpty(vals.Title)) errs.Title = "Title is required";
    if (isEmpty(vals.Department)) errs.Department = "Department is required";
    if (isEmpty(vals.EmployeeType)) errs.EmployeeType = "Employee type is required";
    return errs;
  };
  var updateField = function updateField(e) {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value;
    setState(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, name, value));
    });
    if (touched[name]) {
      var nextVals = _objectSpread(_objectSpread({}, state), {}, _defineProperty({}, name, value));
      var errs = validateAll(nextVals);
      setFieldErrors(errs);
    }
  };
  var handleBlur = function handleBlur(e) {
    var name = e.target.name;
    setTouched(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, name, true));
    });
    var errs = validateAll(state);
    setFieldErrors(errs);
  };
  var submitForm = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(e) {
      var errs, firstKey, el, FirstName, LastName, Age, DateOfJoining, Title, Department, EmployeeType, ageNum, isoDate, query, response, result, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            e.preventDefault();
            if (!state.loading) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            errs = validateAll(state);
            setFieldErrors(errs);
            setTouched({
              FirstName: true,
              LastName: true,
              Age: true,
              DateOfJoining: true,
              Title: true,
              Department: true,
              EmployeeType: true
            });
            if (!(Object.keys(errs).length > 0)) {
              _context.n = 2;
              break;
            }
            setState(function (prev) {
              return _objectSpread(_objectSpread({}, prev), {}, {
                error: "Please fill in all required fields correctly.",
                success: ""
              });
            });
            firstKey = Object.keys(errs)[0];
            el = document.querySelector("[name=\"".concat(firstKey, "\"]"));
            if (el) el.focus();
            return _context.a(2);
          case 2:
            FirstName = state.FirstName, LastName = state.LastName, Age = state.Age, DateOfJoining = state.DateOfJoining, Title = state.Title, Department = state.Department, EmployeeType = state.EmployeeType;
            ageNum = clampInt(Age);
            setState(function (prev) {
              return _objectSpread(_objectSpread({}, prev), {}, {
                loading: true,
                error: "",
                success: ""
              });
            });
            isoDate = new Date(DateOfJoining).toISOString();
            query = "\n      mutation AddEmployee($FirstName: String!, $LastName: String!, $Age: Int!, $DateOfJoining: DateTime!, $Title: String!, $Department: String!, $EmployeeType: String!) {\n        createStaff(FirstName: $FirstName, LastName: $LastName, Age: $Age, DateOfJoining: $DateOfJoining, Title: $Title, Department: $Department, EmployeeType: $EmployeeType) {\n          _id\n        }\n      }\n    ";
            _context.p = 3;
            _context.n = 4;
            return fetch("/graphql", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                query: query,
                variables: {
                  FirstName: FirstName.trim(),
                  LastName: LastName.trim(),
                  Age: ageNum,
                  DateOfJoining: isoDate,
                  Title: Title,
                  Department: Department,
                  EmployeeType: EmployeeType
                }
              })
            });
          case 4:
            response = _context.v;
            if (response.ok) {
              _context.n = 5;
              break;
            }
            throw new Error("Request failed with status ".concat(response.status));
          case 5:
            _context.n = 6;
            return response.json();
          case 6:
            result = _context.v;
            if (!result.errors) {
              _context.n = 7;
              break;
            }
            throw new Error(result.errors[0].message || "Server error");
          case 7:
            setState({
              FirstName: "",
              LastName: "",
              Age: "",
              DateOfJoining: "",
              Title: "",
              Department: "",
              EmployeeType: "",
              error: "",
              success: "Employee added successfully!",
              loading: false
            });
            setTouched({});
            setFieldErrors({});
            if (refresh) refresh();
            setTimeout(function () {
              setState(function (prev) {
                return _objectSpread(_objectSpread({}, prev), {}, {
                  success: ""
                });
              });
              navigate("/employees");
            }, 1500);
            _context.n = 9;
            break;
          case 8:
            _context.p = 8;
            _t = _context.v;
            setState(function (prev) {
              return _objectSpread(_objectSpread({}, prev), {}, {
                error: _t.message || "Failed to create employee.",
                loading: false
              });
            });
          case 9:
            return _context.a(2);
        }
      }, _callee, null, [[3, 8]]);
    }));
    return function submitForm(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  var error = state.error,
    success = state.success,
    FirstName = state.FirstName,
    LastName = state.LastName,
    Age = state.Age,
    DateOfJoining = state.DateOfJoining,
    Title = state.Title,
    Department = state.Department,
    EmployeeType = state.EmployeeType,
    loading = state.loading;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "page-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/employees",
    className: "btn btn-ghost btn-sm",
    style: {
      marginBottom: 16,
      display: "inline-flex"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__.BsArrowLeft, null), " Back to Employees"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Add Employee"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "subtitle"
  }, "Create a new employee record")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Employee Information")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "body"
  }, error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "alert alert-danger"
  }, error), success && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "alert alert-success"
  }, success), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: submitForm,
    noValidate: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "form-label"
  }, "First Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "FirstName",
    className: "form-input ".concat(touched.FirstName && fieldErrors.FirstName ? "is-invalid" : ""),
    value: FirstName,
    onChange: updateField,
    onBlur: handleBlur
  }), touched.FirstName && fieldErrors.FirstName && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-error"
  }, fieldErrors.FirstName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "form-label"
  }, "Last Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "LastName",
    className: "form-input ".concat(touched.LastName && fieldErrors.LastName ? "is-invalid" : ""),
    value: LastName,
    onChange: updateField,
    onBlur: handleBlur
  }), touched.LastName && fieldErrors.LastName && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-error"
  }, fieldErrors.LastName))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "form-label"
  }, "Age"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "number",
    name: "Age",
    className: "form-input ".concat(touched.Age && fieldErrors.Age ? "is-invalid" : ""),
    value: Age,
    onChange: updateField,
    onBlur: handleBlur,
    min: "20",
    max: "70"
  }), touched.Age && fieldErrors.Age && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-error"
  }, fieldErrors.Age)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "form-label"
  }, "Join Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "date",
    name: "DateOfJoining",
    className: "form-input ".concat(touched.DateOfJoining && fieldErrors.DateOfJoining ? "is-invalid" : ""),
    value: DateOfJoining,
    onChange: updateField,
    onBlur: handleBlur
  }), touched.DateOfJoining && fieldErrors.DateOfJoining && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-error"
  }, fieldErrors.DateOfJoining))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "form-label"
  }, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    name: "Title",
    className: "form-select ".concat(touched.Title && fieldErrors.Title ? "is-invalid" : ""),
    value: Title,
    onChange: updateField,
    onBlur: handleBlur
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: ""
  }, "Select title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "Employee"
  }, "Employee"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "Manager"
  }, "Manager"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "Director"
  }, "Director"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "VP"
  }, "VP")), touched.Title && fieldErrors.Title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-error"
  }, fieldErrors.Title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "form-label"
  }, "Department"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    name: "Department",
    className: "form-select ".concat(touched.Department && fieldErrors.Department ? "is-invalid" : ""),
    value: Department,
    onChange: updateField,
    onBlur: handleBlur
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: ""
  }, "Select department"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "IT"
  }, "IT"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "Marketing"
  }, "Marketing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "HR"
  }, "HR"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "Engineering"
  }, "Engineering")), touched.Department && fieldErrors.Department && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-error"
  }, fieldErrors.Department))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "form-label"
  }, "Employee Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    name: "EmployeeType",
    className: "form-select ".concat(touched.EmployeeType && fieldErrors.EmployeeType ? "is-invalid" : ""),
    value: EmployeeType,
    onChange: updateField,
    onBlur: handleBlur
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: ""
  }, "Select type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "FullTime"
  }, "Full Time"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "PartTime"
  }, "Part Time"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "Contract"
  }, "Contract"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "Seasonal"
  }, "Seasonal")), touched.EmployeeType && fieldErrors.EmployeeType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-error"
  }, fieldErrors.EmployeeType)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "btn btn-primary",
    style: {
      width: "100%"
    },
    disabled: loading
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "spinner",
    style: {
      width: 16,
      height: 16,
      borderWidth: 2
    }
  }), "Saving...") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__.BsPersonPlus, null), " Add Employee"))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmployeeCreate);

/***/ }),

/***/ "./src/EmployeeDetails.jsx":
/*!*********************************!*\
  !*** ./src/EmployeeDetails.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.mjs");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



var EmployeeDetails = function EmployeeDetails() {
  var _employee$FirstName, _employee$LastName;
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useParams)(),
    id = _useParams.id;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    employee = _useState2[0],
    setEmployee = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    error = _useState6[0],
    setError = _useState6[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var fetchEmployee = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var query, response, result, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              setLoading(true);
              query = "\n        query {\n          staffById(id: \"".concat(id, "\") {\n            _id\n            FirstName\n            LastName\n            Age\n            DateOfJoining\n            Title\n            Department\n            EmployeeType\n            CurrentStatus\n            retirementInfo {\n              retirementDate\n              daysUntilRetirement\n              monthsUntilRetirement\n              yearsUntilRetirement\n              isRetired\n            }\n          }\n        }\n      ");
              _context.p = 1;
              _context.n = 2;
              return fetch("/graphql", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  query: query
                })
              });
            case 2:
              response = _context.v;
              _context.n = 3;
              return response.json();
            case 3:
              result = _context.v;
              if (!result.errors) {
                _context.n = 4;
                break;
              }
              throw new Error(result.errors[0].message);
            case 4:
              if (result.data.staffById) {
                _context.n = 5;
                break;
              }
              throw new Error("Employee not found");
            case 5:
              setEmployee(result.data.staffById);
              _context.n = 7;
              break;
            case 6:
              _context.p = 6;
              _t = _context.v;
              setError(_t.message);
            case 7:
              _context.p = 7;
              setLoading(false);
              return _context.f(7);
            case 8:
              return _context.a(2);
          }
        }, _callee, null, [[1, 6, 7, 8]]);
      }));
      return function fetchEmployee() {
        return _ref.apply(this, arguments);
      };
    }();
    fetchEmployee();
  }, [id]);
  var formatRetirementCountdown = function formatRetirementCountdown(retirementInfo) {
    if (retirementInfo.isRetired) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "badge badge-danger"
      }, "Retired");
    }
    var yearsUntilRetirement = retirementInfo.yearsUntilRetirement,
      monthsUntilRetirement = retirementInfo.monthsUntilRetirement,
      daysUntilRetirement = retirementInfo.daysUntilRetirement;
    var parts = [];
    if (yearsUntilRetirement > 0) parts.push("".concat(yearsUntilRetirement, " year").concat(yearsUntilRetirement !== 1 ? "s" : ""));
    if (monthsUntilRetirement > 0) parts.push("".concat(monthsUntilRetirement, " month").concat(monthsUntilRetirement !== 1 ? "s" : ""));
    if (daysUntilRetirement > 0) parts.push("".concat(daysUntilRetirement, " day").concat(daysUntilRetirement !== 1 ? "s" : ""));
    if (parts.length === 0) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "badge badge-warning"
    }, "Retiring very soon");
    return parts.join(", ");
  };
  if (loading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "loading-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "spinner"
    }));
  }
  if (error) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "alert alert-danger"
    }, "Error: ", error);
  }
  if (!employee) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "alert alert-danger"
    }, "Employee not found");
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "page-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/employees",
    className: "btn btn-ghost btn-sm",
    style: {
      marginBottom: 16,
      display: "inline-flex"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__.BsArrowLeft, null), " Back to Employees"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Employee Details"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "subtitle"
  }, "View and manage employee information")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "details-card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "avatar"
  }, (_employee$FirstName = employee.FirstName) === null || _employee$FirstName === void 0 ? void 0 : _employee$FirstName[0], (_employee$LastName = employee.LastName) === null || _employee$LastName === void 0 ? void 0 : _employee$LastName[0]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "name"
  }, employee.FirstName, " ", employee.LastName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "title"
  }, employee.Title, " \u2022 ", employee.Department)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "info-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "info-label"
  }, "Age"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "info-value"
  }, employee.Age)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "info-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "info-label"
  }, "Join Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "info-value"
  }, new Date(employee.DateOfJoining).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "info-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "info-label"
  }, "Employee Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "info-value"
  }, employee.EmployeeType)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "info-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "info-label"
  }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "info-value"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "badge ".concat(employee.CurrentStatus ? "badge-success" : "badge-secondary")
  }, employee.CurrentStatus ? "Active" : "Inactive"))), employee.retirementInfo && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "retirement-section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Retirement Information"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "info-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "info-label"
  }, "Retirement Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "info-value"
  }, new Date(employee.retirementInfo.retirementDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "info-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "info-label"
  }, "Time Remaining"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "info-value"
  }, formatRetirementCountdown(employee.retirementInfo))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/employees/".concat(id, "/update"),
    className: "btn btn-primary",
    style: {
      width: "100%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__.BsPencil, null), " Edit Employee"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmployeeDetails);

/***/ }),

/***/ "./src/EmployeeList.jsx":
/*!******************************!*\
  !*** ./src/EmployeeList.jsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _StaffGrid_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StaffGrid.jsx */ "./src/StaffGrid.jsx");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



var EmployeeList = function EmployeeList() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    employees = _useState2[0],
    setEmployees = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    error = _useState6[0],
    setError = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState8 = _slicedToArray(_useState7, 2),
    success = _useState8[0],
    setSuccess = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState0 = _slicedToArray(_useState9, 2),
    deleteError = _useState0[0],
    setDeleteError = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("All"),
    _useState10 = _slicedToArray(_useState1, 2),
    filter = _useState10[0],
    setFilter = _useState10[1];
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchEmployees();
  }, [filter]);
  var fetchEmployees = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var query, response, result, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            setLoading(true);
            query = "\n      query {\n        staffList(filter: \"".concat(filter, "\") {\n          _id\n          FirstName\n          LastName\n          Age\n          DateOfJoining\n          Title\n          Department\n          EmployeeType\n          CurrentStatus\n        }\n      }\n    ");
            _context.p = 1;
            _context.n = 2;
            return fetch("/graphql", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                query: query
              })
            });
          case 2:
            response = _context.v;
            _context.n = 3;
            return response.json();
          case 3:
            result = _context.v;
            if (!result.errors) {
              _context.n = 4;
              break;
            }
            throw new Error(result.errors[0].message);
          case 4:
            setEmployees(result.data.staffList || []);
            setError(null);
            _context.n = 6;
            break;
          case 5:
            _context.p = 5;
            _t = _context.v;
            setError(_t.message || "Failed to load employees.");
          case 6:
            _context.p = 6;
            setLoading(false);
            return _context.f(6);
          case 7:
            return _context.a(2);
        }
      }, _callee, null, [[1, 5, 6, 7]]);
    }));
    return function fetchEmployees() {
      return _ref.apply(this, arguments);
    };
  }();
  var isActive = function isActive(status) {
    return status === true || status === "Active" || status === 1 || status === "1";
  };
  var handleDelete = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(id, status) {
      var mutation, response, result, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            if (!isActive(status)) {
              _context2.n = 1;
              break;
            }
            setDeleteError("Cannot delete an active employee. Please deactivate first.");
            setTimeout(function () {
              return setDeleteError("");
            }, 5000);
            return _context2.a(2);
          case 1:
            setLoading(true);
            mutation = "\n      mutation {\n        deleteStaff(id: \"".concat(id, "\")\n      }\n    ");
            _context2.p = 2;
            _context2.n = 3;
            return fetch("/graphql", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                query: mutation
              })
            });
          case 3:
            response = _context2.v;
            _context2.n = 4;
            return response.json();
          case 4:
            result = _context2.v;
            if (!result.errors) {
              _context2.n = 5;
              break;
            }
            throw new Error(result.errors[0].message);
          case 5:
            if (!result.data.deleteStaff) {
              _context2.n = 7;
              break;
            }
            _context2.n = 6;
            return fetchEmployees();
          case 6:
            setSuccess("Employee deleted successfully");
            setTimeout(function () {
              return setSuccess("");
            }, 3000);
            _context2.n = 8;
            break;
          case 7:
            throw new Error("Delete operation failed");
          case 8:
            _context2.n = 10;
            break;
          case 9:
            _context2.p = 9;
            _t2 = _context2.v;
            setError(_t2.message || "Delete failed.");
          case 10:
            _context2.p = 10;
            setLoading(false);
            return _context2.f(10);
          case 11:
            return _context2.a(2);
        }
      }, _callee2, null, [[2, 9, 10, 11]]);
    }));
    return function handleDelete(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  var handleRowClick = function handleRowClick(id) {
    return navigate("/employees/".concat(id));
  };
  var filterControl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    className: "filter-select",
    value: filter,
    onChange: function onChange(e) {
      return setFilter(e.target.value);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "All"
  }, "All Types"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "FullTime"
  }, "Full Time"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "PartTime"
  }, "Part Time"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "Contract"
  }, "Contract"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "Seasonal"
  }, "Seasonal"));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "page-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Employees"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "subtitle"
  }, "Manage your organization's workforce")), deleteError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "alert alert-danger"
  }, deleteError), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "alert alert-danger"
  }, error), success && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "alert alert-success"
  }, success), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_StaffGrid_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
    employees: employees,
    loading: loading,
    error: null,
    onRowClick: handleRowClick,
    onDelete: handleDelete,
    title: "Employee Directory",
    filterControl: filterControl
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmployeeList);

/***/ }),

/***/ "./src/EmployeeUpdate.jsx":
/*!********************************!*\
  !*** ./src/EmployeeUpdate.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.mjs");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



var EmployeeUpdate = function EmployeeUpdate() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useParams)(),
    id = _useParams.id;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      Title: "",
      Department: "",
      CurrentStatus: "",
      error: "",
      success: "",
      loading: false
    }),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var fetchEmployee = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var query, response, result, data, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              setState(function (prev) {
                return _objectSpread(_objectSpread({}, prev), {}, {
                  loading: true
                });
              });
              query = "\n        query {\n          staffById(id: \"".concat(id, "\") {\n            _id\n            Title\n            Department\n            CurrentStatus\n          }\n        }\n      ");
              _context.p = 1;
              _context.n = 2;
              return fetch("/graphql", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  query: query
                })
              });
            case 2:
              response = _context.v;
              _context.n = 3;
              return response.json();
            case 3:
              result = _context.v;
              if (!result.errors) {
                _context.n = 4;
                break;
              }
              throw new Error(result.errors[0].message);
            case 4:
              if (result.data.staffById) {
                _context.n = 5;
                break;
              }
              throw new Error("Employee not found");
            case 5:
              data = result.data.staffById;
              setState({
                Title: data.Title || "",
                Department: data.Department || "",
                CurrentStatus: data.CurrentStatus.toString(),
                error: "",
                success: "",
                loading: false
              });
              _context.n = 7;
              break;
            case 6:
              _context.p = 6;
              _t = _context.v;
              setState(function (prev) {
                return _objectSpread(_objectSpread({}, prev), {}, {
                  error: _t.message,
                  loading: false
                });
              });
            case 7:
              return _context.a(2);
          }
        }, _callee, null, [[1, 6]]);
      }));
      return function fetchEmployee() {
        return _ref.apply(this, arguments);
      };
    }();
    fetchEmployee();
  }, [id]);
  var updateField = function updateField(e) {
    setState(_objectSpread(_objectSpread({}, state), {}, _defineProperty({}, e.target.name, e.target.value)));
  };
  var submitForm = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(e) {
      var Title, Department, CurrentStatus, mutation, response, result, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            e.preventDefault();
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: true,
              error: "",
              success: ""
            }));
            Title = state.Title, Department = state.Department, CurrentStatus = state.CurrentStatus;
            if (!(!Title || !Department || !CurrentStatus)) {
              _context2.n = 1;
              break;
            }
            setState(_objectSpread(_objectSpread({}, state), {}, {
              error: "All fields are required",
              loading: false
            }));
            return _context2.a(2);
          case 1:
            mutation = "\n      mutation UpdateEmployee($id: ID!, $Title: String, $Department: String, $CurrentStatus: Boolean) {\n        updateStaff(id: $id, Title: $Title, Department: $Department, CurrentStatus: $CurrentStatus) {\n          _id\n        }\n      }\n    ";
            _context2.p = 2;
            _context2.n = 3;
            return fetch("/graphql", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                query: mutation,
                variables: {
                  id: id,
                  Title: Title,
                  Department: Department,
                  CurrentStatus: CurrentStatus === "true"
                }
              })
            });
          case 3:
            response = _context2.v;
            _context2.n = 4;
            return response.json();
          case 4:
            result = _context2.v;
            if (!result.errors) {
              _context2.n = 5;
              break;
            }
            throw new Error(result.errors[0].message);
          case 5:
            setState(_objectSpread(_objectSpread({}, state), {}, {
              error: "",
              success: "Employee updated successfully!",
              loading: false
            }));
            setTimeout(function () {
              return navigate("/employees/".concat(id));
            }, 1500);
            _context2.n = 7;
            break;
          case 6:
            _context2.p = 6;
            _t2 = _context2.v;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              error: _t2.message,
              loading: false
            }));
          case 7:
            return _context2.a(2);
        }
      }, _callee2, null, [[2, 6]]);
    }));
    return function submitForm(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  if (state.loading && !state.Title) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "loading-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "spinner"
    }));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "page-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/employees/".concat(id),
    className: "btn btn-ghost btn-sm",
    style: {
      marginBottom: 16,
      display: "inline-flex"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__.BsArrowLeft, null), " Back to Details"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Edit Employee"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "subtitle"
  }, "Update employee information")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Edit Information")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "body"
  }, state.error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "alert alert-danger"
  }, state.error), state.success && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "alert alert-success"
  }, state.success), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: submitForm
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "form-label"
  }, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    name: "Title",
    className: "form-select",
    value: state.Title,
    onChange: updateField,
    required: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: ""
  }, "Select title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "Employee"
  }, "Employee"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "Manager"
  }, "Manager"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "Director"
  }, "Director"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "VP"
  }, "VP"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "form-label"
  }, "Department"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    name: "Department",
    className: "form-select",
    value: state.Department,
    onChange: updateField,
    required: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: ""
  }, "Select department"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "IT"
  }, "IT"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "Marketing"
  }, "Marketing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "HR"
  }, "HR"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "Engineering"
  }, "Engineering")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "form-label"
  }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    name: "CurrentStatus",
    className: "form-select",
    value: state.CurrentStatus,
    onChange: updateField,
    required: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: ""
  }, "Select status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "true"
  }, "Active"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "false"
  }, "Inactive"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "btn btn-primary",
    style: {
      width: "100%"
    },
    disabled: state.loading
  }, state.loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "spinner",
    style: {
      width: 16,
      height: 16,
      borderWidth: 2
    }
  }), "Saving...") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__.BsCheck, null), " Update Employee"))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmployeeUpdate);

/***/ }),

/***/ "./src/Home.jsx":
/*!**********************!*\
  !*** ./src/Home.jsx ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.mjs");
/* harmony import */ var _StaffGrid_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StaffGrid.jsx */ "./src/StaffGrid.jsx");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




var Home = function Home() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    employees = _useState2[0],
    setEmployees = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      total: 0,
      active: 0,
      retiring: 0,
      departments: 0
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    stats = _useState4[0],
    setStats = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState6 = _slicedToArray(_useState5, 2),
    loading = _useState6[0],
    setLoading = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    error = _useState8[0],
    setError = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState0 = _slicedToArray(_useState9, 2),
    success = _useState0[0],
    setSuccess = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState10 = _slicedToArray(_useState1, 2),
    deleteError = _useState10[0],
    setDeleteError = _useState10[1];
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchEmployees();
  }, []);
  var fetchEmployees = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var query, response, result, data, active, departments, retiring, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            setLoading(true);
            query = "\n      query {\n        staffList(filter: \"All\") {\n          _id\n          FirstName\n          LastName\n          Age\n          DateOfJoining\n          Title\n          Department\n          EmployeeType\n          CurrentStatus\n        }\n      }\n    ";
            _context.p = 1;
            _context.n = 2;
            return fetch("/graphql", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                query: query
              })
            });
          case 2:
            response = _context.v;
            _context.n = 3;
            return response.json();
          case 3:
            result = _context.v;
            if (!result.errors) {
              _context.n = 4;
              break;
            }
            throw new Error(result.errors[0].message);
          case 4:
            data = result.data.staffList || [];
            setEmployees(data);
            active = data.filter(function (e) {
              return e.CurrentStatus === true || e.CurrentStatus === "Active";
            }).length;
            departments = _toConsumableArray(new Set(data.map(function (e) {
              return e.Department;
            }))).length;
            retiring = data.filter(function (e) {
              return e.Age >= 64;
            }).length;
            setStats({
              total: data.length,
              active: active,
              retiring: retiring,
              departments: departments
            });
            setError(null);
            _context.n = 6;
            break;
          case 5:
            _context.p = 5;
            _t = _context.v;
            setError(_t.message || "Failed to load employees.");
          case 6:
            _context.p = 6;
            setLoading(false);
            return _context.f(6);
          case 7:
            return _context.a(2);
        }
      }, _callee, null, [[1, 5, 6, 7]]);
    }));
    return function fetchEmployees() {
      return _ref.apply(this, arguments);
    };
  }();
  var isActive = function isActive(status) {
    return status === true || status === "Active" || status === 1 || status === "1";
  };
  var handleDelete = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(id, status) {
      var mutation, response, result, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            if (!isActive(status)) {
              _context2.n = 1;
              break;
            }
            setDeleteError("Cannot delete an active employee. Please deactivate first.");
            setTimeout(function () {
              return setDeleteError("");
            }, 5000);
            return _context2.a(2);
          case 1:
            setLoading(true);
            mutation = "\n      mutation {\n        deleteStaff(id: \"".concat(id, "\")\n      }\n    ");
            _context2.p = 2;
            _context2.n = 3;
            return fetch("/graphql", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                query: mutation
              })
            });
          case 3:
            response = _context2.v;
            _context2.n = 4;
            return response.json();
          case 4:
            result = _context2.v;
            if (!result.errors) {
              _context2.n = 5;
              break;
            }
            throw new Error(result.errors[0].message);
          case 5:
            if (!result.data.deleteStaff) {
              _context2.n = 7;
              break;
            }
            _context2.n = 6;
            return fetchEmployees();
          case 6:
            setSuccess("Employee deleted successfully");
            setTimeout(function () {
              return setSuccess("");
            }, 3000);
            _context2.n = 8;
            break;
          case 7:
            throw new Error("Delete operation failed");
          case 8:
            _context2.n = 10;
            break;
          case 9:
            _context2.p = 9;
            _t2 = _context2.v;
            setError(_t2.message || "Delete failed.");
          case 10:
            _context2.p = 10;
            setLoading(false);
            return _context2.f(10);
          case 11:
            return _context2.a(2);
        }
      }, _callee2, null, [[2, 9, 10, 11]]);
    }));
    return function handleDelete(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  var handleRowClick = function handleRowClick(id) {
    return navigate("/employees/".concat(id));
  };
  var statCards = [{
    label: "Total Employees",
    value: stats.total,
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__.BsPeople, null),
    color: "primary"
  }, {
    label: "Active Employees",
    value: stats.active,
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__.BsPersonCheck, null),
    color: "success"
  }, {
    label: "Retiring Soon",
    value: stats.retiring,
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__.BsCalendarEvent, null),
    color: "warning"
  }, {
    label: "Departments",
    value: stats.departments,
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__.BsBriefcase, null),
    color: "info"
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "page-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Dashboard"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "subtitle"
  }, "Overview of your employee management system")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "stats-grid"
  }, statCards.map(function (stat) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: stat.label,
      className: "stat-card"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "icon-wrapper ".concat(stat.color)
    }, stat.icon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "content"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, stat.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "value"
    }, loading ? "-" : stat.value)));
  })), deleteError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "alert alert-danger"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, deleteError)), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "alert alert-danger"
  }, error), success && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "alert alert-success"
  }, success), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_StaffGrid_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
    employees: employees,
    loading: loading,
    error: null,
    onRowClick: handleRowClick,
    onDelete: handleDelete,
    title: "Recent Employees"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./src/NotFound.jsx":
/*!**************************!*\
  !*** ./src/NotFound.jsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.mjs");



var NotFound = function NotFound() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "not-found-page"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "code"
  }, "404"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Page Not Found"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "The page you are looking for does not exist or has been moved."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/",
    className: "btn btn-primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsHouseDoor, null), " Back to Dashboard"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFound);

/***/ }),

/***/ "./src/StaffGrid.jsx":
/*!***************************!*\
  !*** ./src/StaffGrid.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.mjs");


var isActive = function isActive(status) {
  return status === true || status === "Active" || status === 1 || status === "1";
};
var typeVariant = function typeVariant(type) {
  switch (type) {
    case "FullTime":
      return "badge-success";
    case "PartTime":
      return "badge-info";
    case "Contract":
      return "badge-warning";
    case "Seasonal":
      return "badge-secondary";
    default:
      return "badge-secondary";
  }
};
var formatDate = function formatDate(v) {
  if (!v) return "";
  var d = new Date(v);
  return Number.isNaN(d.getTime()) ? v : d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
};
var StaffGrid = function StaffGrid(_ref) {
  var employees = _ref.employees,
    loading = _ref.loading,
    error = _ref.error,
    onRowClick = _ref.onRowClick,
    onDelete = _ref.onDelete,
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? "Employees" : _ref$title,
    filterControl = _ref.filterControl;
  if (loading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "loading-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "spinner"
    }));
  }
  if (error) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "alert alert-danger"
    }, "Error: ", error);
  }
  if (!employees || employees.length === 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "data-table-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "data-table-header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, title), filterControl), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "empty-state"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_1__.BsPersonX, {
      className: "icon"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "No employees found"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Get started by adding your first employee.")));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "data-table-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "data-table-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, title), filterControl), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      overflowX: "auto"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "data-table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Age"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Join Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Department"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      width: 120
    }
  }, "Actions"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, employees.map(function (emp) {
    var _emp$FirstName, _emp$LastName;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      key: emp._id,
      onClick: function onClick() {
        return onRowClick(emp._id);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        width: 36,
        height: 36,
        borderRadius: "50%",
        background: "linear-gradient(135deg, var(--primary), var(--primary-dark))",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "0.75rem",
        fontWeight: 600,
        flexShrink: 0
      }
    }, (_emp$FirstName = emp.FirstName) === null || _emp$FirstName === void 0 ? void 0 : _emp$FirstName[0], (_emp$LastName = emp.LastName) === null || _emp$LastName === void 0 ? void 0 : _emp$LastName[0]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        fontWeight: 500,
        color: "var(--gray-900)"
      }
    }, emp.FirstName, " ", emp.LastName)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, emp.Age), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, formatDate(emp.DateOfJoining)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, emp.Title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, emp.Department), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "badge ".concat(typeVariant(emp.EmployeeType))
    }, emp.EmployeeType)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "badge ".concat(isActive(emp.CurrentStatus) ? "badge-success" : "badge-secondary")
    }, isActive(emp.CurrentStatus) ? "Active" : "Inactive")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        display: "flex",
        gap: 8
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "btn btn-ghost btn-sm btn-icon",
      onClick: function onClick(e) {
        e.stopPropagation();
        onRowClick(emp._id);
      },
      title: "View Details"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_1__.BsEye, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "btn btn-ghost btn-sm btn-icon",
      style: {
        color: "var(--danger)"
      },
      onClick: function onClick(e) {
        e.stopPropagation();
        onDelete(emp._id, emp.CurrentStatus);
      },
      title: "Delete"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_1__.BsTrash, null)))));
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StaffGrid);

/***/ }),

/***/ "./src/UpcomingRetirement.jsx":
/*!************************************!*\
  !*** ./src/UpcomingRetirement.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _StaffGrid_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StaffGrid.jsx */ "./src/StaffGrid.jsx");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



var UpcomingRetirement = function UpcomingRetirement() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    employees = _useState2[0],
    setEmployees = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    error = _useState6[0],
    setError = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState8 = _slicedToArray(_useState7, 2),
    success = _useState8[0],
    setSuccess = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState0 = _slicedToArray(_useState9, 2),
    deleteError = _useState0[0],
    setDeleteError = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("All"),
    _useState10 = _slicedToArray(_useState1, 2),
    filter = _useState10[0],
    setFilter = _useState10[1];
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchEmployees();
  }, [filter]);
  var fetchEmployees = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var query, response, result, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            setLoading(true);
            query = "\n      query {\n        upcomingRetirementList(filter: \"".concat(filter, "\") {\n          _id\n          FirstName\n          LastName\n          Age\n          DateOfJoining\n          Title\n          Department\n          EmployeeType\n          CurrentStatus\n          retirementInfo {\n            retirementDate\n            daysUntilRetirement\n            monthsUntilRetirement\n            yearsUntilRetirement\n            isRetired\n          }\n        }\n      }\n    ");
            _context.p = 1;
            _context.n = 2;
            return fetch("/graphql", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                query: query
              })
            });
          case 2:
            response = _context.v;
            _context.n = 3;
            return response.json();
          case 3:
            result = _context.v;
            if (!result.errors) {
              _context.n = 4;
              break;
            }
            throw new Error(result.errors[0].message);
          case 4:
            setEmployees(result.data.upcomingRetirementList || []);
            setError(null);
            _context.n = 6;
            break;
          case 5:
            _context.p = 5;
            _t = _context.v;
            setError(_t.message || "Failed to load upcoming retirements.");
          case 6:
            _context.p = 6;
            setLoading(false);
            return _context.f(6);
          case 7:
            return _context.a(2);
        }
      }, _callee, null, [[1, 5, 6, 7]]);
    }));
    return function fetchEmployees() {
      return _ref.apply(this, arguments);
    };
  }();
  var isActive = function isActive(status) {
    return status === true || status === "Active" || status === 1 || status === "1";
  };
  var handleDelete = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(id, status) {
      var mutation, response, result, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            if (!isActive(status)) {
              _context2.n = 1;
              break;
            }
            setDeleteError("Cannot delete an active employee. Please deactivate first.");
            setTimeout(function () {
              return setDeleteError("");
            }, 5000);
            return _context2.a(2);
          case 1:
            setLoading(true);
            mutation = "\n      mutation {\n        deleteStaff(id: \"".concat(id, "\")\n      }\n    ");
            _context2.p = 2;
            _context2.n = 3;
            return fetch("/graphql", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                query: mutation
              })
            });
          case 3:
            response = _context2.v;
            _context2.n = 4;
            return response.json();
          case 4:
            result = _context2.v;
            if (!result.errors) {
              _context2.n = 5;
              break;
            }
            throw new Error(result.errors[0].message);
          case 5:
            if (!result.data.deleteStaff) {
              _context2.n = 7;
              break;
            }
            _context2.n = 6;
            return fetchEmployees();
          case 6:
            setSuccess("Employee deleted successfully");
            setTimeout(function () {
              return setSuccess("");
            }, 3000);
            _context2.n = 8;
            break;
          case 7:
            throw new Error("Delete operation failed");
          case 8:
            _context2.n = 10;
            break;
          case 9:
            _context2.p = 9;
            _t2 = _context2.v;
            setError(_t2.message || "Delete failed.");
          case 10:
            _context2.p = 10;
            setLoading(false);
            return _context2.f(10);
          case 11:
            return _context2.a(2);
        }
      }, _callee2, null, [[2, 9, 10, 11]]);
    }));
    return function handleDelete(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  var handleRowClick = function handleRowClick(id) {
    return navigate("/employees/".concat(id));
  };
  var filterControl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    className: "filter-select",
    value: filter,
    onChange: function onChange(e) {
      return setFilter(e.target.value);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "All"
  }, "All Types"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "FullTime"
  }, "Full Time"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "PartTime"
  }, "Part Time"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "Contract"
  }, "Contract"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "Seasonal"
  }, "Seasonal"));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "page-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Upcoming Retirement"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "subtitle"
  }, "Employees retiring within the next 6 months")), deleteError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "alert alert-danger"
  }, deleteError), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "alert alert-danger"
  }, error), success && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "alert alert-success"
  }, success), !loading && employees.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "alert alert-info"
  }, "No employees have upcoming retirement in the next 6 months", filter !== "All" && " for ".concat(filter, " employees"), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_StaffGrid_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
    employees: employees,
    loading: loading,
    error: null,
    onRowClick: handleRowClick,
    onDelete: handleDelete,
    title: "Retirement Schedule",
    filterControl: filterControl
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UpcomingRetirement);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _App_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.jsx */ "./src/App.jsx");



var root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById('app'));
root.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_App_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null));

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; (typeof current == 'object' || typeof current == 'function') && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkems"] = self["webpackChunkems"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=app.bundle.js.map