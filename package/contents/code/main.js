// SPDX-License-Identifier: MIT

(function () {
"use strict";

function init() {
	for (const window of workspace.windowList()) {
		windowAdded(window);
	}
	workspace.windowAdded.connect(windowAdded);
}

function windowAdded(window) {
	if (window.specialWindow)
		return;
	window.quickTileModeChanged.connect(() => quickTileModeChanged(window));
}

function quickTileModeChanged(window) {
	if (!window.tile)
		return;
	const geometry = rectCopy(window.frameGeometry);
	window.tile = null;
	window.frameGeometry = geometry;
}

function rectCopy(rect) {
	return { x     : rect.x
	       , y     : rect.y
	       , width : rect.width
	       , height: rect.height };
}

init();

})();
