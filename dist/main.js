/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/generate-webpage.js":
/*!*********************************!*\
  !*** ./src/generate-webpage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateWebpage)
/* harmony export */ });
async function generateWebpage() {
    async function generateGameBoard() {
        let gameboard = await document.querySelector('.gameboard');
        async function generateGridSquares() {
            for(let i = 1; i < 101; i++) {
                let gridSquare = await document.createElement('div');
                await gridSquare.setAttribute('id', i);
                await gridSquare.setAttribute('class', 'not-hit');
                await gameboard.appendChild(gridSquare);
            }
            return;
        }
        await generateGridSquares();

        return;
    }
    async function generatePlayerShips() {
        let container = await document.querySelector('.container');
        let tugBoat = await document.createElement('div');
        await tugBoat.setAttribute('class', 'tugboat');
        await container.appendChild(tugBoat);
        return;
    }

    await generateGameBoard();
    await generatePlayerShips();

    return;
}

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _generate_webpage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generate-webpage.js */ "./src/generate-webpage.js");


async function main() {
  /*  async function abc() {
        const ShipFactory = (shipLength) => {
            let tilesStatus = [];
            let tilesLocation = [];
            tilesStatus.length = shipLength;
            tilesLocation.length = shipLength;
            tilesStatus.fill('Good');
            tilesLocation.fill('');
            
            const hit = (value) => tilesStatus[value] = 'Hit';
            const getTilesStatus = () => {
                return tilesStatus;
            }
            const getTilesLocation = () => {
                return tilesLocation;
            }
            const setTilesLocation = (location) => {
                tilesLocation = location;
            }
            const isSunk = () => {
                if(tilesStatus.includes('Good')) {
                    return false;
                } else {
                    return true;
                }
            };
            return {hit, getTilesStatus, getTilesLocation, setTilesLocation, isSunk};
        }
        
        const Gameboard = (() => {
            let missedAttacks = [];
            const receiveAttack = (grid) => {
                // if coordinate was already hit, prompt for another attack
                if(grid.classList.includes('hit')) {
                    return;
                } else if(grid.classList.includes('ship') && grid.classList.includes('not-hit')) {
                    missedAttacks.push(grid.id);
                    grid.classList[0] = 'hit';
                    return;
                    // else if ship tile is on coordinate, send hit function
                } else if(grid.classList.includes('not-hit')) {
                    missedAttacks.push(grid.id);
                    return;
                    // else if ship tile NOT on coordinate, record missed shot
                };
            };
            const setShipCoordinates = (ship, coordinates) => {
                // set ship location tiles to coordinates
                ship.setTilesLocation(coordinates);
            };
            const getMissedAttacks = () => {
                return missedAttacks;
            };
            const areShipsSunk = () => {};
            return {receiveAttack, setShipCoordinates, getMissedAttacks, areShipsSunk};
        })();
        
        let carrier = ShipFactory(5);
        return;
    } */
    await (0,_generate_webpage_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    //await abc();
    return;
}
main();

// generate gameboard
// place ships on board
// when user presses ready
// assign grid values to ship grid
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLFNBQVM7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7VUM1QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05vRDs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLFVBQVUsZ0VBQWU7QUFDekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvZ2VuZXJhdGUtd2VicGFnZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVXZWJwYWdlKCkge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlR2FtZUJvYXJkKCkge1xuICAgICAgICBsZXQgZ2FtZWJvYXJkID0gYXdhaXQgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVib2FyZCcpO1xuICAgICAgICBhc3luYyBmdW5jdGlvbiBnZW5lcmF0ZUdyaWRTcXVhcmVzKCkge1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMTsgaSA8IDEwMTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGdyaWRTcXVhcmUgPSBhd2FpdCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBhd2FpdCBncmlkU3F1YXJlLnNldEF0dHJpYnV0ZSgnaWQnLCBpKTtcbiAgICAgICAgICAgICAgICBhd2FpdCBncmlkU3F1YXJlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbm90LWhpdCcpO1xuICAgICAgICAgICAgICAgIGF3YWl0IGdhbWVib2FyZC5hcHBlbmRDaGlsZChncmlkU3F1YXJlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBnZW5lcmF0ZUdyaWRTcXVhcmVzKCk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhc3luYyBmdW5jdGlvbiBnZW5lcmF0ZVBsYXllclNoaXBzKCkge1xuICAgICAgICBsZXQgY29udGFpbmVyID0gYXdhaXQgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuICAgICAgICBsZXQgdHVnQm9hdCA9IGF3YWl0IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBhd2FpdCB0dWdCb2F0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndHVnYm9hdCcpO1xuICAgICAgICBhd2FpdCBjb250YWluZXIuYXBwZW5kQ2hpbGQodHVnQm9hdCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBhd2FpdCBnZW5lcmF0ZUdhbWVCb2FyZCgpO1xuICAgIGF3YWl0IGdlbmVyYXRlUGxheWVyU2hpcHMoKTtcblxuICAgIHJldHVybjtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBnZW5lcmF0ZVdlYnBhZ2UgZnJvbSAnLi9nZW5lcmF0ZS13ZWJwYWdlLmpzJztcblxuYXN5bmMgZnVuY3Rpb24gbWFpbigpIHtcbiAgLyogIGFzeW5jIGZ1bmN0aW9uIGFiYygpIHtcbiAgICAgICAgY29uc3QgU2hpcEZhY3RvcnkgPSAoc2hpcExlbmd0aCkgPT4ge1xuICAgICAgICAgICAgbGV0IHRpbGVzU3RhdHVzID0gW107XG4gICAgICAgICAgICBsZXQgdGlsZXNMb2NhdGlvbiA9IFtdO1xuICAgICAgICAgICAgdGlsZXNTdGF0dXMubGVuZ3RoID0gc2hpcExlbmd0aDtcbiAgICAgICAgICAgIHRpbGVzTG9jYXRpb24ubGVuZ3RoID0gc2hpcExlbmd0aDtcbiAgICAgICAgICAgIHRpbGVzU3RhdHVzLmZpbGwoJ0dvb2QnKTtcbiAgICAgICAgICAgIHRpbGVzTG9jYXRpb24uZmlsbCgnJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGhpdCA9ICh2YWx1ZSkgPT4gdGlsZXNTdGF0dXNbdmFsdWVdID0gJ0hpdCc7XG4gICAgICAgICAgICBjb25zdCBnZXRUaWxlc1N0YXR1cyA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGlsZXNTdGF0dXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBnZXRUaWxlc0xvY2F0aW9uID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aWxlc0xvY2F0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc2V0VGlsZXNMb2NhdGlvbiA9IChsb2NhdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIHRpbGVzTG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZih0aWxlc1N0YXR1cy5pbmNsdWRlcygnR29vZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIHtoaXQsIGdldFRpbGVzU3RhdHVzLCBnZXRUaWxlc0xvY2F0aW9uLCBzZXRUaWxlc0xvY2F0aW9uLCBpc1N1bmt9O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCBHYW1lYm9hcmQgPSAoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IG1pc3NlZEF0dGFja3MgPSBbXTtcbiAgICAgICAgICAgIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoZ3JpZCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGlmIGNvb3JkaW5hdGUgd2FzIGFscmVhZHkgaGl0LCBwcm9tcHQgZm9yIGFub3RoZXIgYXR0YWNrXG4gICAgICAgICAgICAgICAgaWYoZ3JpZC5jbGFzc0xpc3QuaW5jbHVkZXMoJ2hpdCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoZ3JpZC5jbGFzc0xpc3QuaW5jbHVkZXMoJ3NoaXAnKSAmJiBncmlkLmNsYXNzTGlzdC5pbmNsdWRlcygnbm90LWhpdCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIG1pc3NlZEF0dGFja3MucHVzaChncmlkLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC5jbGFzc0xpc3RbMF0gPSAnaGl0JztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAvLyBlbHNlIGlmIHNoaXAgdGlsZSBpcyBvbiBjb29yZGluYXRlLCBzZW5kIGhpdCBmdW5jdGlvblxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihncmlkLmNsYXNzTGlzdC5pbmNsdWRlcygnbm90LWhpdCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIG1pc3NlZEF0dGFja3MucHVzaChncmlkLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAvLyBlbHNlIGlmIHNoaXAgdGlsZSBOT1Qgb24gY29vcmRpbmF0ZSwgcmVjb3JkIG1pc3NlZCBzaG90XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBzZXRTaGlwQ29vcmRpbmF0ZXMgPSAoc2hpcCwgY29vcmRpbmF0ZXMpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBzZXQgc2hpcCBsb2NhdGlvbiB0aWxlcyB0byBjb29yZGluYXRlc1xuICAgICAgICAgICAgICAgIHNoaXAuc2V0VGlsZXNMb2NhdGlvbihjb29yZGluYXRlcyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgZ2V0TWlzc2VkQXR0YWNrcyA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWlzc2VkQXR0YWNrcztcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBhcmVTaGlwc1N1bmsgPSAoKSA9PiB7fTtcbiAgICAgICAgICAgIHJldHVybiB7cmVjZWl2ZUF0dGFjaywgc2V0U2hpcENvb3JkaW5hdGVzLCBnZXRNaXNzZWRBdHRhY2tzLCBhcmVTaGlwc1N1bmt9O1xuICAgICAgICB9KSgpO1xuICAgICAgICBcbiAgICAgICAgbGV0IGNhcnJpZXIgPSBTaGlwRmFjdG9yeSg1KTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH0gKi9cbiAgICBhd2FpdCBnZW5lcmF0ZVdlYnBhZ2UoKTtcbiAgICAvL2F3YWl0IGFiYygpO1xuICAgIHJldHVybjtcbn1cbm1haW4oKTtcblxuLy8gZ2VuZXJhdGUgZ2FtZWJvYXJkXG4vLyBwbGFjZSBzaGlwcyBvbiBib2FyZFxuLy8gd2hlbiB1c2VyIHByZXNzZXMgcmVhZHlcbi8vIGFzc2lnbiBncmlkIHZhbHVlcyB0byBzaGlwIGdyaWQiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=