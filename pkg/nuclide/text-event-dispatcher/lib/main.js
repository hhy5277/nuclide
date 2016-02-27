Object.defineProperty(exports, '__esModule', {
  value: true
});

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

var _TextEventDispatcher = require('./TextEventDispatcher');

exports.TextEventDispatcher = _TextEventDispatcher.TextEventDispatcher;

var dispatcher = null;
module.exports = {
  getInstance: function getInstance() {
    if (!dispatcher) {
      dispatcher = new _TextEventDispatcher.TextEventDispatcher();
    }
    return dispatcher;
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O21DQVdrQyx1QkFBdUI7O1FBQzVDLG1CQUFtQjs7QUFFaEMsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDO0FBQ3RCLE1BQU0sQ0FBQyxPQUFPLEdBQUc7QUFDZixhQUFXLEVBQUEsdUJBQXdCO0FBQ2pDLFFBQUksQ0FBQyxVQUFVLEVBQUU7QUFDZixnQkFBVSxHQUFHLDhDQUF5QixDQUFDO0tBQ3hDO0FBQ0QsV0FBTyxVQUFVLENBQUM7R0FDbkI7Q0FDRixDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGJhYmVsJztcbi8qIEBmbG93ICovXG5cbi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgbGljZW5zZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGluXG4gKiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQge1RleHRFdmVudERpc3BhdGNoZXJ9IGZyb20gJy4vVGV4dEV2ZW50RGlzcGF0Y2hlcic7XG5leHBvcnQgdHlwZSB7VGV4dEV2ZW50RGlzcGF0Y2hlcn07XG5cbmxldCBkaXNwYXRjaGVyID0gbnVsbDtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXRJbnN0YW5jZSgpOiBUZXh0RXZlbnREaXNwYXRjaGVyIHtcbiAgICBpZiAoIWRpc3BhdGNoZXIpIHtcbiAgICAgIGRpc3BhdGNoZXIgPSBuZXcgVGV4dEV2ZW50RGlzcGF0Y2hlcigpO1xuICAgIH1cbiAgICByZXR1cm4gZGlzcGF0Y2hlcjtcbiAgfSxcbn07XG4iXX0=