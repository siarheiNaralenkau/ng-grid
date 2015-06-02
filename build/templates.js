angular.module('ngGrid').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('aggregateTemplate.html',
    "<div ng-click=\"row.toggleExpand()\" ng-style=\"rowStyle(row)\" class=\"ngAggregate\">\n" +
    "    <span class=\"ngAggregateText\">{{row.label CUSTOM_FILTERS}} ({{row.totalChildren()}}{{AggItemsLabel}})</span>\n" +
    "    <div class=\"{{row.aggClass()}}\"></div>\n" +
    "</div>\n"
  );


  $templateCache.put('cellEditTemplate.html',
    "<div ng-cell-has-focus ng-dblclick=\"CELL_EDITABLE_CONDITION && editCell()\">\n" +
    "\t<div ng-edit-cell-if=\"!(isFocused && CELL_EDITABLE_CONDITION)\">\t\n" +
    "\t\tDISPLAY_CELL_TEMPLATE\n" +
    "\t</div>\n" +
    "\t<div ng-edit-cell-if=\"isFocused && CELL_EDITABLE_CONDITION\">\n" +
    "\t\tEDITABLE_CELL_TEMPLATE\n" +
    "\t</div>\n" +
    "</div>\n"
  );


  $templateCache.put('cellTemplate.html',
    "<div class=\"ngCellText\" ng-class=\"col.colIndex()\"><span ng-cell-text>{{COL_FIELD CUSTOM_FILTERS}}</span></div>"
  );


  $templateCache.put('checkboxCellTemplate.html',
    "<div class=\"ngSelectionCell\"><input tabindex=\"-1\" class=\"ngSelectionCheckbox\" type=\"checkbox\" ng-checked=\"row.selected\" /></div>"
  );


  $templateCache.put('checkboxHeaderTemplate.html',
    "<input class=\"ngSelectionHeader\" type=\"checkbox\" ng-show=\"multiSelect\" ng-model=\"allSelected\" ng-change=\"toggleSelectAll(allSelected, true)\"/>"
  );


  $templateCache.put('editableCellTemplate.html',
    "<input ng-class=\"'colt' + col.index\" ng-input=\"COL_FIELD\" ng-model=\"COL_FIELD\" />"
  );


  $templateCache.put('footerTemplate.html',
    "<div ng-show=\"showFooter\" class=\"ngFooterPanel\" ng-class=\"{'ui-widget-content': jqueryUITheme, 'ui-corner-bottom': jqueryUITheme}\" ng-style=\"footerStyle()\">\n" +
    "    <div class=\"ngTotalSelectContainer\" >\n" +
    "        <div class=\"ngFooterTotalItems\" ng-class=\"{'ngNoMultiSelect': !multiSelect}\" >\n" +
    "            <span class=\"ngLabel\">{{i18n.ngTotalItemsLabel}} {{maxRows()}}</span><span ng-show=\"filterText.length > 0\" class=\"ngLabel\">({{i18n.ngShowingItemsLabel}} {{totalFilteredItemsLength()}})</span>\n" +
    "        </div>\n" +
    "        <div class=\"ngFooterSelectedItems\" ng-show=\"multiSelect\">\n" +
    "            <span class=\"ngLabel\">{{i18n.ngSelectedItemsLabel}} {{selectedItems.length}}</span>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"ngPagerContainer\" style=\"float: right; margin-top: 10px;\" ng-show=\"enablePaging\" ng-class=\"{'ngNoMultiSelect': !multiSelect}\">\n" +
    "        <div style=\"float:left; margin-right: 10px;\" class=\"ngRowCountPicker\">\n" +
    "            <span style=\"float: left; margin-top: 3px;\" class=\"ngLabel\">{{i18n.ngPageSizeLabel}}</span>\n" +
    "            <select style=\"float: left;height: 27px; width: 100px\" ng-model=\"pagingOptions.pageSize\" >\n" +
    "                <option ng-repeat=\"size in pagingOptions.pageSizes\">{{size}}</option>\n" +
    "            </select>\n" +
    "        </div>\n" +
    "        <div style=\"float:left; margin-right: 10px; line-height:25px;\" class=\"ngPagerControl\" style=\"float: left; min-width: 135px;\">\n" +
    "            <button type=\"button\" class=\"ngPagerButton\" ng-click=\"pageToFirst()\" ng-disabled=\"cantPageBackward()\" title=\"{{i18n.ngPagerFirstTitle}}\"><div class=\"ngPagerFirstTriangle\"><div class=\"ngPagerFirstBar\"></div></div></button>\n" +
    "            <button type=\"button\" class=\"ngPagerButton\" ng-click=\"pageBackward()\" ng-disabled=\"cantPageBackward()\" title=\"{{i18n.ngPagerPrevTitle}}\"><div class=\"ngPagerFirstTriangle ngPagerPrevTriangle\"></div></button>\n" +
    "            <input class=\"ngPagerCurrent\" min=\"1\" max=\"{{currentMaxPages}}\" type=\"number\" style=\"width:50px; height: 24px; margin-top: 1px; padding: 0 4px;\" ng-model=\"pagingOptions.currentPage\"/>\n" +
    "            <span class=\"ngGridMaxPagesNumber\" ng-show=\"maxPages() > 0\">/ {{maxPages()}}</span>\n" +
    "            <button type=\"button\" class=\"ngPagerButton\" ng-click=\"pageForward()\" ng-disabled=\"cantPageForward()\" title=\"{{i18n.ngPagerNextTitle}}\"><div class=\"ngPagerLastTriangle ngPagerNextTriangle\"></div></button>\n" +
    "            <button type=\"button\" class=\"ngPagerButton\" ng-click=\"pageToLast()\" ng-disabled=\"cantPageToLast()\" title=\"{{i18n.ngPagerLastTitle}}\"><div class=\"ngPagerLastTriangle\"><div class=\"ngPagerLastBar\"></div></div></button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('gridTemplate.html',
    "<div class=\"ngTopPanel\" ng-class=\"{'ui-widget-header':jqueryUITheme, 'ui-corner-top': jqueryUITheme}\" ng-style=\"topPanelStyle()\">\n" +
    "    <div class=\"ngGroupPanel\" ng-show=\"showGroupPanel()\" ng-style=\"groupPanelStyle()\">\n" +
    "        <div class=\"ngGroupPanelDescription\" ng-show=\"configGroups.length == 0\">{{i18n.ngGroupPanelDescription}}</div>\n" +
    "        <ul ng-show=\"configGroups.length > 0\" class=\"ngGroupList\">\n" +
    "            <li class=\"ngGroupItem\" ng-repeat=\"group in configGroups\">\n" +
    "                <span class=\"ngGroupElement\">\n" +
    "                    <span class=\"ngGroupName\">{{group.displayName}}\n" +
    "                        <span ng-click=\"removeGroup($index)\" class=\"ngRemoveGroup\">x</span>\n" +
    "                    </span>\n" +
    "                    <span ng-hide=\"$last\" class=\"ngGroupArrow\"></span>\n" +
    "                </span>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div class=\"ngHeaderContainer\" ng-style=\"headerStyle()\">\n" +
    "        <div ng-header-row class=\"ngHeaderScroller\" ng-style=\"headerScrollerStyle()\"></div>\n" +
    "    </div>\n" +
    "    <div ng-grid-menu></div>\n" +
    "</div>\n" +
    "<div class=\"ngViewport\" unselectable=\"on\" ng-viewport ng-class=\"{'ui-widget-content': jqueryUITheme}\" ng-style=\"viewportStyle()\">\n" +
    "    <div class=\"ngCanvas\" ng-style=\"canvasStyle()\">\n" +
    "        <div ng-style=\"rowStyle(row)\" ng-repeat=\"row in renderedRows\" ng-click=\"row.toggleSelected($event)\" ng-class=\"row.alternatingRowClass()\" ng-row></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div ng-grid-footer></div>\n"
  );


  $templateCache.put('headerCellTemplate.html',
    "<div class=\"ngHeaderSortColumn {{col.headerClass}}\" ng-style=\"{'cursor': col.cursor}\" ng-class=\"{ 'ngSorted': !col.noSortVisible() }\">\n" +
    "    <div ng-click=\"col.sort($event)\" ng-class=\"'colt' + col.index\" class=\"ngHeaderText\">{{col.displayName}}</div>\n" +
    "    <div class=\"ngSortButtonDown\" ng-click=\"col.sort($event)\" ng-show=\"col.showSortButtonDown()\"></div>\n" +
    "    <div class=\"ngSortButtonUp\" ng-click=\"col.sort($event)\" ng-show=\"col.showSortButtonUp()\"></div>\n" +
    "    <div class=\"ngSortPriority\">{{col.sortPriority}}</div>\n" +
    "    <div ng-class=\"{ ngPinnedIcon: col.pinned, ngUnPinnedIcon: !col.pinned }\" ng-click=\"togglePin(col)\" ng-show=\"col.pinnable\"></div>\n" +
    "</div>\n" +
    "<div ng-show=\"col.resizable\" class=\"ngHeaderGrip\" ng-click=\"col.gripClick($event)\" ng-mousedown=\"col.gripOnMouseDown($event)\"></div>\n"
  );


  $templateCache.put('headerRowTemplate.html',
    "<div ng-style=\"{ height: col.headerRowHeight }\" ng-repeat=\"col in renderedColumns\" ng-class=\"col.colIndex()\" class=\"ngHeaderCell\">\n" +
    "\t<div class=\"ngVerticalBar\" ng-style=\"{height: col.headerRowHeight}\" ng-class=\"{ ngVerticalBarVisible: !$last }\">&nbsp;</div>\n" +
    "\t<div ng-header-cell></div>\n" +
    "</div>"
  );


  $templateCache.put('menuTemplate.html',
    "<div ng-show=\"showColumnMenu || showFilter\"  class=\"ngHeaderButton\" ng-click=\"toggleShowMenu()\">\n" +
    "    <div class=\"ngHeaderButtonArrow\"></div>\n" +
    "</div>\n" +
    "<div ng-show=\"showMenu\" class=\"ngColMenu\">\n" +
    "    <div ng-show=\"showFilter\">\n" +
    "        <input placeholder=\"{{i18n.ngSearchPlaceHolder}}\" type=\"text\" ng-model=\"filterText\"/>\n" +
    "    </div>\n" +
    "    <div ng-show=\"showColumnMenu\">\n" +
    "        <span class=\"ngMenuText\">{{i18n.ngMenuText}}</span>\n" +
    "        <ul class=\"ngColList\">\n" +
    "            <li class=\"ngColListItem\" ng-repeat=\"col in columns | ngColumns\">\n" +
    "                <label><input ng-disabled=\"col.pinned\" type=\"checkbox\" class=\"ngColListCheckbox\" ng-model=\"col.visible\"/>{{col.displayName}}</label>\n" +
    "\t\t\t\t<a title=\"Group By\" ng-class=\"col.groupedByClass()\" ng-show=\"col.groupable && col.visible\" ng-click=\"groupBy(col)\"></a>\n" +
    "\t\t\t\t<span class=\"ngGroupingNumber\" ng-show=\"col.groupIndex > 0\">{{col.groupIndex}}</span>          \n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('rowTemplate.html',
    "<div ng-style=\"{ 'cursor': row.cursor }\" ng-repeat=\"col in renderedColumns\" ng-class=\"col.colIndex()\" class=\"ngCell {{col.cellClass}}\">\n" +
    "\t<div class=\"ngVerticalBar\" ng-style=\"{height: rowHeight}\" ng-class=\"{ ngVerticalBarVisible: !$last }\">&nbsp;</div>\n" +
    "\t<div ng-cell></div>\n" +
    "</div>"
  );

}]);
