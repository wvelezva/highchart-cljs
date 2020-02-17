["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/fx/transitionbase.js"],"~:js","goog.provide(\"goog.fx.TransitionBase\");\ngoog.provide(\"goog.fx.TransitionBase.State\");\ngoog.require(\"goog.events.EventTarget\");\ngoog.require(\"goog.fx.Transition\");\n/**\n * @struct\n * @constructor\n * @extends {goog.events.EventTarget}\n * @implements {goog.fx.Transition}\n */\ngoog.fx.TransitionBase = function() {\n  goog.fx.TransitionBase.base(this, \"constructor\");\n  /** @private @type {goog.fx.TransitionBase.State} */ this.state_ = goog.fx.TransitionBase.State.STOPPED;\n  /** @protected @type {?number} */ this.startTime = null;\n  /** @protected @type {?number} */ this.endTime = null;\n};\ngoog.inherits(goog.fx.TransitionBase, goog.events.EventTarget);\n/** @enum {number} */ goog.fx.TransitionBase.State = {STOPPED:0, PAUSED:-1, PLAYING:1};\n/**\n * @param {boolean=} opt_restart\n * @return {boolean}\n * @override\n */\ngoog.fx.TransitionBase.prototype.play = goog.abstractMethod;\n/**\n * @param {boolean=} opt_gotoEnd\n * @override\n */\ngoog.fx.TransitionBase.prototype.stop = goog.abstractMethod;\ngoog.fx.TransitionBase.prototype.pause = goog.abstractMethod;\n/**\n * @return {goog.fx.TransitionBase.State}\n */\ngoog.fx.TransitionBase.prototype.getStateInternal = function() {\n  return this.state_;\n};\n/** @protected */ goog.fx.TransitionBase.prototype.setStatePlaying = function() {\n  this.state_ = goog.fx.TransitionBase.State.PLAYING;\n};\n/** @protected */ goog.fx.TransitionBase.prototype.setStatePaused = function() {\n  this.state_ = goog.fx.TransitionBase.State.PAUSED;\n};\n/** @protected */ goog.fx.TransitionBase.prototype.setStateStopped = function() {\n  this.state_ = goog.fx.TransitionBase.State.STOPPED;\n};\n/**\n * @return {boolean}\n */\ngoog.fx.TransitionBase.prototype.isPlaying = function() {\n  return this.state_ == goog.fx.TransitionBase.State.PLAYING;\n};\n/**\n * @return {boolean}\n */\ngoog.fx.TransitionBase.prototype.isPaused = function() {\n  return this.state_ == goog.fx.TransitionBase.State.PAUSED;\n};\n/**\n * @return {boolean}\n */\ngoog.fx.TransitionBase.prototype.isStopped = function() {\n  return this.state_ == goog.fx.TransitionBase.State.STOPPED;\n};\n/** @protected */ goog.fx.TransitionBase.prototype.onBegin = function() {\n  this.dispatchAnimationEvent(goog.fx.Transition.EventType.BEGIN);\n};\n/** @protected */ goog.fx.TransitionBase.prototype.onEnd = function() {\n  this.dispatchAnimationEvent(goog.fx.Transition.EventType.END);\n};\n/** @protected */ goog.fx.TransitionBase.prototype.onFinish = function() {\n  this.dispatchAnimationEvent(goog.fx.Transition.EventType.FINISH);\n};\n/** @protected */ goog.fx.TransitionBase.prototype.onPause = function() {\n  this.dispatchAnimationEvent(goog.fx.Transition.EventType.PAUSE);\n};\n/** @protected */ goog.fx.TransitionBase.prototype.onPlay = function() {\n  this.dispatchAnimationEvent(goog.fx.Transition.EventType.PLAY);\n};\n/** @protected */ goog.fx.TransitionBase.prototype.onResume = function() {\n  this.dispatchAnimationEvent(goog.fx.Transition.EventType.RESUME);\n};\n/** @protected */ goog.fx.TransitionBase.prototype.onStop = function() {\n  this.dispatchAnimationEvent(goog.fx.Transition.EventType.STOP);\n};\n/**\n * @protected\n * @param {string} type\n */\ngoog.fx.TransitionBase.prototype.dispatchAnimationEvent = function(type) {\n  this.dispatchEvent(type);\n};\n","~:source","// Copyright 2011 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n/**\n * @fileoverview An abstract base class for transitions. This is a simple\n * interface that allows for playing, pausing and stopping an animation. It adds\n * a simple event model, and animation status.\n */\ngoog.provide('goog.fx.TransitionBase');\ngoog.provide('goog.fx.TransitionBase.State');\n\ngoog.require('goog.events.EventTarget');\ngoog.require('goog.fx.Transition');  // Unreferenced: interface\n\n\n\n/**\n * Constructor for a transition object.\n *\n * @constructor\n * @struct\n * @implements {goog.fx.Transition}\n * @extends {goog.events.EventTarget}\n */\ngoog.fx.TransitionBase = function() {\n  goog.fx.TransitionBase.base(this, 'constructor');\n\n  /**\n   * The internal state of the animation.\n   * @type {goog.fx.TransitionBase.State}\n   * @private\n   */\n  this.state_ = goog.fx.TransitionBase.State.STOPPED;\n\n  /**\n   * Timestamp for when the animation was started.\n   * @type {?number}\n   * @protected\n   */\n  this.startTime = null;\n\n  /**\n   * Timestamp for when the animation finished or was stopped.\n   * @type {?number}\n   * @protected\n   */\n  this.endTime = null;\n};\ngoog.inherits(goog.fx.TransitionBase, goog.events.EventTarget);\n\n\n/**\n * Enum for the possible states of an animation.\n * @enum {number}\n */\ngoog.fx.TransitionBase.State = {\n  STOPPED: 0,\n  PAUSED: -1,\n  PLAYING: 1\n};\n\n\n/**\n * Plays the animation.\n *\n * @param {boolean=} opt_restart Optional parameter to restart the animation.\n * @return {boolean} True iff the animation was started.\n * @override\n */\ngoog.fx.TransitionBase.prototype.play = goog.abstractMethod;\n\n\n/**\n * Stops the animation.\n *\n * @param {boolean=} opt_gotoEnd Optional boolean parameter to go the the end of\n *     the animation.\n * @override\n */\ngoog.fx.TransitionBase.prototype.stop = goog.abstractMethod;\n\n\n/**\n * Pauses the animation.\n */\ngoog.fx.TransitionBase.prototype.pause = goog.abstractMethod;\n\n\n/**\n * Returns the current state of the animation.\n * @return {goog.fx.TransitionBase.State} State of the animation.\n */\ngoog.fx.TransitionBase.prototype.getStateInternal = function() {\n  return this.state_;\n};\n\n\n/**\n * Sets the current state of the animation to playing.\n * @protected\n */\ngoog.fx.TransitionBase.prototype.setStatePlaying = function() {\n  this.state_ = goog.fx.TransitionBase.State.PLAYING;\n};\n\n\n/**\n * Sets the current state of the animation to paused.\n * @protected\n */\ngoog.fx.TransitionBase.prototype.setStatePaused = function() {\n  this.state_ = goog.fx.TransitionBase.State.PAUSED;\n};\n\n\n/**\n * Sets the current state of the animation to stopped.\n * @protected\n */\ngoog.fx.TransitionBase.prototype.setStateStopped = function() {\n  this.state_ = goog.fx.TransitionBase.State.STOPPED;\n};\n\n\n/**\n * @return {boolean} True iff the current state of the animation is playing.\n */\ngoog.fx.TransitionBase.prototype.isPlaying = function() {\n  return this.state_ == goog.fx.TransitionBase.State.PLAYING;\n};\n\n\n/**\n * @return {boolean} True iff the current state of the animation is paused.\n */\ngoog.fx.TransitionBase.prototype.isPaused = function() {\n  return this.state_ == goog.fx.TransitionBase.State.PAUSED;\n};\n\n\n/**\n * @return {boolean} True iff the current state of the animation is stopped.\n */\ngoog.fx.TransitionBase.prototype.isStopped = function() {\n  return this.state_ == goog.fx.TransitionBase.State.STOPPED;\n};\n\n\n/**\n * Dispatches the BEGIN event. Sub classes should override this instead\n * of listening to the event, and call this instead of dispatching the event.\n * @protected\n */\ngoog.fx.TransitionBase.prototype.onBegin = function() {\n  this.dispatchAnimationEvent(goog.fx.Transition.EventType.BEGIN);\n};\n\n\n/**\n * Dispatches the END event. Sub classes should override this instead\n * of listening to the event, and call this instead of dispatching the event.\n * @protected\n */\ngoog.fx.TransitionBase.prototype.onEnd = function() {\n  this.dispatchAnimationEvent(goog.fx.Transition.EventType.END);\n};\n\n\n/**\n * Dispatches the FINISH event. Sub classes should override this instead\n * of listening to the event, and call this instead of dispatching the event.\n * @protected\n */\ngoog.fx.TransitionBase.prototype.onFinish = function() {\n  this.dispatchAnimationEvent(goog.fx.Transition.EventType.FINISH);\n};\n\n\n/**\n * Dispatches the PAUSE event. Sub classes should override this instead\n * of listening to the event, and call this instead of dispatching the event.\n * @protected\n */\ngoog.fx.TransitionBase.prototype.onPause = function() {\n  this.dispatchAnimationEvent(goog.fx.Transition.EventType.PAUSE);\n};\n\n\n/**\n * Dispatches the PLAY event. Sub classes should override this instead\n * of listening to the event, and call this instead of dispatching the event.\n * @protected\n */\ngoog.fx.TransitionBase.prototype.onPlay = function() {\n  this.dispatchAnimationEvent(goog.fx.Transition.EventType.PLAY);\n};\n\n\n/**\n * Dispatches the RESUME event. Sub classes should override this instead\n * of listening to the event, and call this instead of dispatching the event.\n * @protected\n */\ngoog.fx.TransitionBase.prototype.onResume = function() {\n  this.dispatchAnimationEvent(goog.fx.Transition.EventType.RESUME);\n};\n\n\n/**\n * Dispatches the STOP event. Sub classes should override this instead\n * of listening to the event, and call this instead of dispatching the event.\n * @protected\n */\ngoog.fx.TransitionBase.prototype.onStop = function() {\n  this.dispatchAnimationEvent(goog.fx.Transition.EventType.STOP);\n};\n\n\n/**\n * Dispatches an event object for the current animation.\n * @param {string} type Event type that will be dispatched.\n * @protected\n */\ngoog.fx.TransitionBase.prototype.dispatchAnimationEvent = function(type) {\n  this.dispatchEvent(type);\n};\n","~:compiled-at",1581954172040,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.fx.transitionbase.js\",\n\"lineCount\":92,\n\"mappings\":\"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\",\n\"sources\":[\"goog/fx/transitionbase.js\"],\n\"sourcesContent\":[\"// Copyright 2011 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\n/**\\n * @fileoverview An abstract base class for transitions. This is a simple\\n * interface that allows for playing, pausing and stopping an animation. It adds\\n * a simple event model, and animation status.\\n */\\ngoog.provide('goog.fx.TransitionBase');\\ngoog.provide('goog.fx.TransitionBase.State');\\n\\ngoog.require('goog.events.EventTarget');\\ngoog.require('goog.fx.Transition');  // Unreferenced: interface\\n\\n\\n\\n/**\\n * Constructor for a transition object.\\n *\\n * @constructor\\n * @struct\\n * @implements {goog.fx.Transition}\\n * @extends {goog.events.EventTarget}\\n */\\ngoog.fx.TransitionBase = function() {\\n  goog.fx.TransitionBase.base(this, 'constructor');\\n\\n  /**\\n   * The internal state of the animation.\\n   * @type {goog.fx.TransitionBase.State}\\n   * @private\\n   */\\n  this.state_ = goog.fx.TransitionBase.State.STOPPED;\\n\\n  /**\\n   * Timestamp for when the animation was started.\\n   * @type {?number}\\n   * @protected\\n   */\\n  this.startTime = null;\\n\\n  /**\\n   * Timestamp for when the animation finished or was stopped.\\n   * @type {?number}\\n   * @protected\\n   */\\n  this.endTime = null;\\n};\\ngoog.inherits(goog.fx.TransitionBase, goog.events.EventTarget);\\n\\n\\n/**\\n * Enum for the possible states of an animation.\\n * @enum {number}\\n */\\ngoog.fx.TransitionBase.State = {\\n  STOPPED: 0,\\n  PAUSED: -1,\\n  PLAYING: 1\\n};\\n\\n\\n/**\\n * Plays the animation.\\n *\\n * @param {boolean=} opt_restart Optional parameter to restart the animation.\\n * @return {boolean} True iff the animation was started.\\n * @override\\n */\\ngoog.fx.TransitionBase.prototype.play = goog.abstractMethod;\\n\\n\\n/**\\n * Stops the animation.\\n *\\n * @param {boolean=} opt_gotoEnd Optional boolean parameter to go the the end of\\n *     the animation.\\n * @override\\n */\\ngoog.fx.TransitionBase.prototype.stop = goog.abstractMethod;\\n\\n\\n/**\\n * Pauses the animation.\\n */\\ngoog.fx.TransitionBase.prototype.pause = goog.abstractMethod;\\n\\n\\n/**\\n * Returns the current state of the animation.\\n * @return {goog.fx.TransitionBase.State} State of the animation.\\n */\\ngoog.fx.TransitionBase.prototype.getStateInternal = function() {\\n  return this.state_;\\n};\\n\\n\\n/**\\n * Sets the current state of the animation to playing.\\n * @protected\\n */\\ngoog.fx.TransitionBase.prototype.setStatePlaying = function() {\\n  this.state_ = goog.fx.TransitionBase.State.PLAYING;\\n};\\n\\n\\n/**\\n * Sets the current state of the animation to paused.\\n * @protected\\n */\\ngoog.fx.TransitionBase.prototype.setStatePaused = function() {\\n  this.state_ = goog.fx.TransitionBase.State.PAUSED;\\n};\\n\\n\\n/**\\n * Sets the current state of the animation to stopped.\\n * @protected\\n */\\ngoog.fx.TransitionBase.prototype.setStateStopped = function() {\\n  this.state_ = goog.fx.TransitionBase.State.STOPPED;\\n};\\n\\n\\n/**\\n * @return {boolean} True iff the current state of the animation is playing.\\n */\\ngoog.fx.TransitionBase.prototype.isPlaying = function() {\\n  return this.state_ == goog.fx.TransitionBase.State.PLAYING;\\n};\\n\\n\\n/**\\n * @return {boolean} True iff the current state of the animation is paused.\\n */\\ngoog.fx.TransitionBase.prototype.isPaused = function() {\\n  return this.state_ == goog.fx.TransitionBase.State.PAUSED;\\n};\\n\\n\\n/**\\n * @return {boolean} True iff the current state of the animation is stopped.\\n */\\ngoog.fx.TransitionBase.prototype.isStopped = function() {\\n  return this.state_ == goog.fx.TransitionBase.State.STOPPED;\\n};\\n\\n\\n/**\\n * Dispatches the BEGIN event. Sub classes should override this instead\\n * of listening to the event, and call this instead of dispatching the event.\\n * @protected\\n */\\ngoog.fx.TransitionBase.prototype.onBegin = function() {\\n  this.dispatchAnimationEvent(goog.fx.Transition.EventType.BEGIN);\\n};\\n\\n\\n/**\\n * Dispatches the END event. Sub classes should override this instead\\n * of listening to the event, and call this instead of dispatching the event.\\n * @protected\\n */\\ngoog.fx.TransitionBase.prototype.onEnd = function() {\\n  this.dispatchAnimationEvent(goog.fx.Transition.EventType.END);\\n};\\n\\n\\n/**\\n * Dispatches the FINISH event. Sub classes should override this instead\\n * of listening to the event, and call this instead of dispatching the event.\\n * @protected\\n */\\ngoog.fx.TransitionBase.prototype.onFinish = function() {\\n  this.dispatchAnimationEvent(goog.fx.Transition.EventType.FINISH);\\n};\\n\\n\\n/**\\n * Dispatches the PAUSE event. Sub classes should override this instead\\n * of listening to the event, and call this instead of dispatching the event.\\n * @protected\\n */\\ngoog.fx.TransitionBase.prototype.onPause = function() {\\n  this.dispatchAnimationEvent(goog.fx.Transition.EventType.PAUSE);\\n};\\n\\n\\n/**\\n * Dispatches the PLAY event. Sub classes should override this instead\\n * of listening to the event, and call this instead of dispatching the event.\\n * @protected\\n */\\ngoog.fx.TransitionBase.prototype.onPlay = function() {\\n  this.dispatchAnimationEvent(goog.fx.Transition.EventType.PLAY);\\n};\\n\\n\\n/**\\n * Dispatches the RESUME event. Sub classes should override this instead\\n * of listening to the event, and call this instead of dispatching the event.\\n * @protected\\n */\\ngoog.fx.TransitionBase.prototype.onResume = function() {\\n  this.dispatchAnimationEvent(goog.fx.Transition.EventType.RESUME);\\n};\\n\\n\\n/**\\n * Dispatches the STOP event. Sub classes should override this instead\\n * of listening to the event, and call this instead of dispatching the event.\\n * @protected\\n */\\ngoog.fx.TransitionBase.prototype.onStop = function() {\\n  this.dispatchAnimationEvent(goog.fx.Transition.EventType.STOP);\\n};\\n\\n\\n/**\\n * Dispatches an event object for the current animation.\\n * @param {string} type Event type that will be dispatched.\\n * @protected\\n */\\ngoog.fx.TransitionBase.prototype.dispatchAnimationEvent = function(type) {\\n  this.dispatchEvent(type);\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"fx\",\"TransitionBase\",\"goog.fx.TransitionBase\",\"base\",\"state_\",\"State\",\"STOPPED\",\"startTime\",\"endTime\",\"inherits\",\"events\",\"EventTarget\",\"PAUSED\",\"PLAYING\",\"prototype\",\"play\",\"abstractMethod\",\"stop\",\"pause\",\"getStateInternal\",\"goog.fx.TransitionBase.prototype.getStateInternal\",\"setStatePlaying\",\"goog.fx.TransitionBase.prototype.setStatePlaying\",\"setStatePaused\",\"goog.fx.TransitionBase.prototype.setStatePaused\",\"setStateStopped\",\"goog.fx.TransitionBase.prototype.setStateStopped\",\"isPlaying\",\"goog.fx.TransitionBase.prototype.isPlaying\",\"isPaused\",\"goog.fx.TransitionBase.prototype.isPaused\",\"isStopped\",\"goog.fx.TransitionBase.prototype.isStopped\",\"onBegin\",\"goog.fx.TransitionBase.prototype.onBegin\",\"dispatchAnimationEvent\",\"Transition\",\"EventType\",\"BEGIN\",\"onEnd\",\"goog.fx.TransitionBase.prototype.onEnd\",\"END\",\"onFinish\",\"goog.fx.TransitionBase.prototype.onFinish\",\"FINISH\",\"onPause\",\"goog.fx.TransitionBase.prototype.onPause\",\"PAUSE\",\"onPlay\",\"goog.fx.TransitionBase.prototype.onPlay\",\"PLAY\",\"onResume\",\"goog.fx.TransitionBase.prototype.onResume\",\"RESUME\",\"onStop\",\"goog.fx.TransitionBase.prototype.onStop\",\"STOP\",\"goog.fx.TransitionBase.prototype.dispatchAnimationEvent\",\"type\",\"dispatchEvent\"]\n}\n"]