! function(c, i, a) {
	a.un, a.uns;
	var e = a.static,
		r = a.class,
		s = a.getset,
		v = (a.__newvec, laya.utils.Browser),
		n = (laya.events.Event, laya.events.EventDispatcher),
		h = laya.resource.HTMLImage,
		d = laya.utils.Handler,
		l = laya.display.Input,
		f = laya.net.Loader,
		u = laya.net.LocalStorage,
		p = (laya.maths.Matrix, laya.renders.Render, laya.utils.RunDriver),
		o = laya.media.SoundChannel,
		g = laya.media.SoundManager,
		m = laya.display.Stage,
		_ = laya.net.URL,
		y = laya.utils.Utils,
		C = function() {
			function n() {}
			return r(n, "laya.quickgame.mini.MiniAdpter", null, "MiniAdpter$1"), n.getJson = function(i) {
				return JSON.parse(i)
			}, n.init = function(i, t) {
				if (void 0 === i && (i = !1), void 0 === t && (t = !1), n.canvas2DAdapter(), !n._inited) {
					n._inited = !0, n.window = c, n.isZiYu = t, n.isPosMsgYu = i, n.EnvConfig = {}, n.isZiYu || (x.setNativeFileDir("/layaairGame"), x.existDir(x.fileNativeDir, d.create(n, n.onMkdirCallBack))), n.systemInfo = {
						pixelRatio: n.window.devicePixelRatio
					}, n.window.focus = function() {}, a.getUrlPath = function() {}, a._getUrlPath = function() {}, n.window.logtime = function(i) {}, n.window.alertTimeLog = function(i) {}, n.window.resetShareInfo = function() {}, n.window.document.body.appendChild = function() {}, n.EnvConfig.pixelRatioInt = 0, p.getPixelRatio = n.pixelRatio, n._preCreateElement = v.createElement, v.createElement = n.createElement, p.createShaderCondition = n.createShaderCondition, y.parseXMLFromString = n.parseXMLFromString, l._createInputElement = b._createInputElement, n.EnvConfig.load = f.prototype.load, f.prototype.load = I.prototype.load, f.prototype._loadImage = w.prototype._loadImage, S.__init__(), u._baseClass = S;
					var g = laya,
						o = a;
					void 0 !== g.device && (L.__init__(), F.__init__());
					var _ = function(i, t, e, n) {};
					m.prototype.setScreenSize = function(i, t) {
						var e = !1;
						if ("none" !== this._screenMode && (e = (i / t < 1 ? "vertical" : "horizontal") !== this._screenMode)) {
							var n = t;
							t = i, i = n
						}
						this.canvasRotation = e;
						var o = g.renders.Render._mainCanvas,
							a = o.source.style,
							r = this._canvasTransform.identity(),
							s = this._scaleMode,
							l = i / this.designWidth,
							u = t / this.designHeight,
							c = this.designWidth,
							h = this.designHeight,
							d = i,
							f = t,
							p = v.pixelRatio;
						this._width = this.designWidth, this._height = this.designHeight;
						switch (s) {
							case "noscale":
								l = u = 1, d = this.designWidth, f = this.designHeight;
								break;
							case "showall":
								l = u = Math.min(l, u), c = d = Math.round(this.designWidth * l), h = f = Math.round(this.designHeight * u);
								break;
							case "noborder":
								l = u = Math.max(l, u), c = d = Math.round(this.designWidth * l), h = f = Math.round(this.designHeight * u);
								break;
							case "full":
								l = u = 1, this._width = c = i, this._height = h = t;
								break;
							case "exactfit":
								c = i, h = t;
								break;
							case "fixedwidth":
								u = l, c = i, h = Math.round(t * u / l), this._height = Math.round(t / l);
								break;
							case "fixedheight":
								l = u, c = Math.round(i * l / u), h = t, this._width = Math.round(i / u);
								break;
							case "fixedauto":
								i / t < this.designWidth / this.designHeight ? (u = l, c = i, h = Math.round(t * u / l), this._height = Math.round(t / l)) : (l = u, c = Math.round(i * l / u), h = t, this._width = Math.round(i / u))
						}
						this.conchModel && this.conchModel.size(this._width, this._height), l *= this.scaleX, u *= this.scaleY, 1 === l && 1 === u ? this.transform.identity() : (this.transform.a = this._formatData(l / (d / c)), this.transform.d = this._formatData(u / (f / h)), this.conchModel && this.conchModel.scale(this.transform.a, this.transform.d)), r.scale(d / c / p, f / h / p), "left" === this._alignH ? this.offset.x = 0 : "right" === this._alignH ? this.offset.x = (i - c) / p : this.offset.x = .5 * (i - c) / p, "top" === this._alignV ? this.offset.y = (t - h) / p : "bottom" === this._alignV ? this.offset.y = 0 : this.offset.y = .5 * (t - h) / p, this.offset.x = Math.round(this.offset.x), this.offset.y = Math.round(this.offset.y), r.translate(this.offset.x, this.offset.y), this.canvasDegree = 0, e && ("horizontal" === this._screenMode ? (r.rotate(Math.PI / 2), r.translate(t / p, 0), this.canvasDegree = 90) : (r.rotate(-Math.PI / 2), r.translate(0, i / p), this.canvasDegree = -90)), r.a = this._formatData(r.a), r.d = this._formatData(r.d), r.tx = this._formatData(r.tx), r.ty = this._formatData(r.ty), a.transformOrigin = a.webkitTransformOrigin = a.msTransformOrigin = a.mozTransformOrigin = a.oTransformOrigin = "0px 0px 0px", r.translate(parseInt(a.left) || 0, parseInt(a.top) || 0), _(c, h, r.tx, r.ty), o.size(i, t), this.visible = !0, this._repaint = 1, this.event("resize")
					}, void 0 !== o.WebGL && (_ = function(i, t, e, n) {
						g.webgl.WebGL.onStageResize(i, t, e, n)
					}, g.webgl.WebGL.onStageResize = function(i, t, e, n) {
						null != g.webgl.WebGL.mainContext && (e = null == e ? 0 : e, n = null == n ? 0 : n, g.webgl.WebGL.mainContext.viewport(e, n, i, t), g.webgl.utils.RenderState2D.width = i, g.webgl.utils.RenderState2D.height = t)
					}, g.webgl.resource.WebGLCharImage.prototype.recreateResource = function() {
						var i = g.renders.Render.isConchApp;
						if (this.onresize(this.cw + 2 * this.CborderSize, this.ch + 2 * this.CborderSize), this.canvas && (this.canvas.height = this._h, this.canvas.width = this._w), i) {
							var t = this.fontSize;
							1 == this.xs && 1 == this.ys || (t = parseInt(t * (this.xs > this.ys ? this.xs : this.ys) + ""));
							var e = "normal 100 " + t + "px Arial";
							this.borderColor && (e += " 1 " + this.borderColor), this._ctx.font = e, this._ctx.textBaseline = "top", this._ctx.fillStyle = this.fillColor, this._ctx.fillText(this.char, this.CborderSize, this.CborderSize, null, null, null)
						} else {
							if (this._ctx.save(), this._ctx.clearRect(0, 0, this.cw + 2 * this.CborderSize, this.ch + 2 * this.CborderSize), this._ctx.font = this.font, g.display.Text.RightToLeft && (this._ctx.textAlign = "end"), this._ctx.textBaseline = "top", this._ctx.translate(this.CborderSize, this.CborderSize), 1 != this.xs || 1 != this.ys) {
								var n = c;
								if (n.qg) {
									var o = n.CanvasRenderingContext2D.prototype;
									if (o.scale === o._scale) this._ctx.scale(this.xs, this.ys);
									else {
										var a = this.font + "",
											r = /\d+px/g.exec(a),
											s = "0";
										s = null != r ? r[0].replace(/px/g, "") : a;
										var l = parseInt(parseInt(s) * (this.xs > this.ys ? this.xs : this.ys) + "");
										this._ctx.font = a.replace(/\d+px/g, l + "px")
									}
								} else this._ctx.scale(this.xs, this.ys)
							}
							if (this.fillColor && this.borderColor ? (this._ctx.strokeStyle = this.borderColor, this._ctx.lineWidth = this.lineWidth, this._ctx.strokeText(this.char, 0, 0, null, null, 0, null), this._ctx.fillStyle = this.fillColor, this._ctx.fillText(this.char, 0, 0, null, null, null)) : -1 === this.lineWidth ? (this._ctx.fillStyle = this.fillColor ? this.fillColor : "white", this._ctx.fillText(this.char, 0, 0, null, null, null)) : (this._ctx.strokeStyle = this.borderColor ? this.borderColor : "white", this._ctx.lineWidth = this.lineWidth, this._ctx.strokeText(this.char, 0, 0, null, null, 0, null)), this.underLine) {
								this._ctx.lineWidth = 1, this._ctx.strokeStyle = this.fillColor, this._ctx.beginPath(), this._ctx.moveTo(0, this.fontSize + 1);
								var u = this._ctx.measureText(this.char).width + 1;
								this._ctx.lineTo(u, this.fontSize + 1), this._ctx.stroke()
							}
							this._ctx.restore()
						}
						this.borderSize = this.CborderSize, this.completeCreate()
					}, g.webgl.resource.WebGLCharImage.createOneChar = function(i, t) {
						var e = new g.webgl.resource.WebGLCharImage(i, t);
						return e.CborderSize = 0, e.onresize(e.cw, e.ch), e.texture = new g.resource.Texture(e), e
					}), void 0 !== c.Laya3D && (_ = function(i, t, e, n) {
						g.webgl.WebGL.onStageResize(i, t, e, n), g.d3.core.render.RenderState.clientWidth = i, g.d3.core.render.RenderState.clientHeight = t
					}, s(0, g.d3.core.Camera.prototype, "viewport", function() {
						if (this._viewportExpressedInClipSpace) {
							var i = this._normalizedViewport,
								t = this.renderTargetSize,
								e = t.width,
								n = t.height;
							this._viewport.x = i.x * e + o.stage.offset.x, this._viewport.y = i.y * n - o.stage.offset.y, this._viewport.width = i.width * e, this._viewport.height = i.height * n
						}
						return this._viewport
					}, function(i) {
						if (null != this.renderTarget && (i.x < 0 || i.y < 0 || 0 == i.width || 0 == i.height)) throw new Error("Camera: viewport size invalid.", "value");
						this._viewportExpressedInClipSpace = !1, this._viewport = i, this._calculateProjectionMatrix()
					}))
				}
			}, n.canvas2DAdapter = function() {
				var i = c;
				if (i.qg && i.CanvasRenderingContext2D) {
					var t = i.CanvasRenderingContext2D.prototype;
					t._scale && (t.scale = t._scale)
				}
			}, n.getUrlEncode = function(i, t) {
				return -1 != i.indexOf(".fnt") ? "utf8" : "arraybuffer" == t ? "" : "sound" == t ? "binary" : "ascii"
			}, n.downLoadFile = function(i, t, e, n) {
				void 0 === t && (t = ""), void 0 === n && (n = "ascii"), x.getFileInfo(i) ? null != e && e.runWith([0]) : x.downLoadFile(i, t, e, n)
			}, n.remove = function(i, t) {
				x.deleteFile("", i, t, "", 0)
			}, n.removeAll = function() {
				x.deleteAll()
			}, n.hasNativeFile = function(i) {
				return x.isLocalNativeFile(i)
			}, n.getFileInfo = function(i) {
				return x.getFileInfo(i)
			}, n.getFileList = function() {
				return x.filesListObj
			}, n.exitMiniProgram = function() {
				n.window.qg.exitApplication({})
			}, n.onMkdirCallBack = function(i, t) {
				i || (x.filesListObj = JSON.parse(t.data))
			}, n.pixelRatio = function() {
				if (!n.EnvConfig.pixelRatioInt) try {
					return n.EnvConfig.pixelRatioInt = n.systemInfo.pixelRatio, n.systemInfo.pixelRatio
				} catch (i) {}
				return n.EnvConfig.pixelRatioInt
			}, n.createElement = function(i) {
				var t;
				if ("canvas" == i) return 1 == n.idx ? n.isZiYu ? (t = c.document.createElement("canvas")).style = {} : t = c.__canvas : t = c.document.createElement("canvas"), n.idx++, t;
				if ("textarea" == i || "input" == i) return n.onCreateInput(i);
				if ("div" != i) return n._preCreateElement(i);
				var e = n._preCreateElement(i);
				return e.contains = function(i) {
					return null
				}, e.removeChild = function(i) {}, e
			}, n.onCreateInput = function(i) {
				var t = n._preCreateElement(i);
				return t.focus = b.wxinputFocus, t.blur = b.wxinputblur, t.style = {}, t.value = 0, t.parentElement = {}, t.placeholder = {}, t.type = {}, t.setColor = function(i) {}, t.setType = function(i) {}, t.setFontFace = function(i) {}, t.addEventListener = function(i) {}, t.contains = function(i) {
					return null
				}, t.removeChild = function(i) {}, t
			}, n.createShaderCondition = function(i) {
				var t = this;
				return function() {
					return t[i.replace("this.", "")]
				}
			}, n.version = "1.0.2", n.EnvConfig = null, n.window = null, n._preCreateElement = null, n._inited = !1, n.systemInfo = null, n.isZiYu = !1, n.isPosMsgYu = !1, n.autoCacheFile = !0, n.minClearSize = 5242880, n.parseXMLFromString = function(i) {
				var t;
				i = i.replace(/>\s+</g, "><");
				try {
					t = (new c.DOMParser).parseFromString(i, "text/xml")
				} catch (i) {
					throw "需要引入xml解析库文件"
				}
				return t
			}, n.idx = 1, e(n, ["nativefiles", function() {
				return this.nativefiles = ["layaNativeDir", "qgfile"]
			}]), n
		}(),
		x = function() {
			function u() {}
			return r(u, "laya.quickgame.mini.MiniFileMgr", null, "MiniFileMgr$1"), u.isLocalNativeFile = function(i) {
				for (var t = 0, e = C.nativefiles.length; t < e; t++)
					if (-1 != i.indexOf(C.nativefiles[t])) return !0;
				return !1
			}, u.getFileInfo = function(i) {
				var t = i.split("?")[0],
					e = u.filesListObj[t];
				return null == e ? null : e
			}, u.read = function(i, t, e, n, o, a) {
				var r;
				void 0 === t && (t = "ascii"), void 0 === n && (n = ""), void 0 === o && (o = !1), void 0 === a && (a = ""), r = "" == n || -1 == n.indexOf("http://") && -1 == n.indexOf("https://") ? i : u.getFileNativePath(i), u.fs.readFile({
					filePath: r,
					encoding: t,
					success: function(i) {
						null != e && e.runWith([0, i])
					},
					fail: function(i) {
						i && "" != n ? u.downFiles(n, t, e, n, o, a) : null != e && e.runWith([1])
					}
				})
			}, u.downFiles = function(i, t, e, n, o, a) {
				void 0 === t && (t = "ascii"), void 0 === n && (n = ""), void 0 === o && (o = !1), void 0 === a && (a = ""), u.wxdown({
					url: i,
					filePath: "",
					success: function(i) {
						200 === i.statusCode && u.readFile(i.tempFilePath, t, e, n, o, a)
					},
					fail: function(i) {
						null != e && e.runWith([1, i])
					},
					complete: function() {}
				}).onProgressUpdate(function(i) {
					null != e && e.runWith([2, i.progress])
				})
			}, u.readFile = function(t, e, n, o, a, i) {
				if (t && t.indexOf("data:image/png;base64") == 0) {
					null != n && n.runWith([1, i])
					return;
				}

				void 0 === e && (e = "ascii"), void 0 === o && (o = ""), void 0 === a && (a = !1), void 0 === i && (i = ""), e = "" === e || "binary" === e ? "binary" : "utf8", "" != (t = t.replace(/^\s+|\s+$/g, "")) && u.fs.readFile({
					filePath: t,
					encoding: e,
					success: function(i) {
						-1 != t.indexOf("http://") || -1 != t.indexOf("https://") ? (C.autoCacheFile || a) && u.copyFile(t, o, n, e) : null != n && n.runWith([0, i])
					},
					fail: function(i) {
						i && null != n && n.runWith([1, i])
					},
					complete: function() {}
				})
			}, u.downOtherFiles = function(i, t, e, n) {
				void 0 === e && (e = ""), void 0 === n && (n = !1), u.wxdown({
					url: i,
					filePath: "",
					success: function(i) {
						200 === i.statusCode && (C.autoCacheFile || n ? u.copyFile(i.tempFilePath, e, t) : null != t && t.runWith([0, i.tempFilePath]))
					},
					fail: function(i) {
						null != t && t.runWith([1, i])
					}
				})
			}, u.downLoadFile = function(i, t, e, n) {
				void 0 === t && (t = ""), void 0 === n && (n = "ascii"), "image" == t || "sound" == t ? u.downOtherFiles(i, e, i, !0) : u.downFiles(i, n, e, i, !0, t)
			}, u.copyFile = function(i, e, n, o) {
				void 0 === o && (o = "");
				var t = i.split("/"),
					a = t[t.length - 1],
					r = (e.split("?")[0], u.getFileInfo(e)),
					s = u.getFileNativePath(a),
					l = u.getCacheUseSize();
				r ? r.readyUrl != e ? u.fs.getFileInfo({
					filePath: i,
					success: function(i) {
						52428800 <= l + 4194304 + i.size && (i.size > C.minClearSize && (C.minClearSize = i.size), u.onClearCacheRes()), u.deleteFile(i, e, n, o, i.size)
					},
					fail: function(i) {
						null != n && n.runWith([1, i])
					}
				}) : null != n && n.runWith([0]) : u.fs.getFileInfo({
					filePath: i,
					success: function(t) {
						52428800 <= l + 4194304 + t.size && (t.size > C.minClearSize && (C.minClearSize = t.size), u.onClearCacheRes()), u.fs.copyFile({
							srcPath: i,
							destPath: s,
							success: function(i) {
								u.onSaveFile(e, a, !0, o, n, t.size)
							},
							fail: function(i) {
								null != n && n.runWith([1, i])
							}
						})
					},
					fail: function(i) {
						null != n && n.runWith([1, i])
					}
				})
			}, u.onClearCacheRes = function() {
				var i = C.minClearSize,
					t = [];
				for (var e in u.filesListObj) t.push(u.filesListObj[e]);
				u.sortOn(t, "time", 16);
				for (var n = 0, o = 1, a = t.length; o < a; o++) {
					var r = t[o];
					if (i <= n) break;
					n += r.size, u.deleteFile("", r.readyUrl)
				}
			}, u.sortOn = function(i, e, t) {
				return void 0 === t && (t = 0), 16 == t ? i.sort(function(i, t) {
					return i[e] - t[e]
				}) : 18 == t ? i.sort(function(i, t) {
					return t[e] - i[e]
				}) : i.sort(function(i, t) {
					return i[e] - t[e]
				})
			}, u.getFileNativePath = function(i) {
				return laya.quickgame.mini.MiniFileMgr.fileNativeDir + "/" + i
			}, u.deleteFile = function(f, o, a, r, s) {
				void 0 === o && (o = ""), void 0 === r && (r = ""), void 0 === s && (s = 0);
				var i = u.getFileInfo(o),
					t = u.getFileNativePath(i.md5),
					n =f;
				if(0<f.length){
					var l = f.split("/");
					n = l[l.length -1]
				}

				u.fs.unlink({
					filePath: t,
					success: function(i) {
						var t = "" != n;
						if ("" != n) {
							var e = u.getFileNativePath(n);
							u.fs.copyFile({
								srcPath: f,
								destPath: e,
								success: function(i) {
									u.onSaveFile(o, n, t, r, a, i.size)
								},
								fail: function(i) {
									null != a && a.runWith([1, i])
								}
							})
						} else u.onSaveFile(o, n, t, r, a, s)
					},
					fail: function(i) {
						var t = "" != n;
						if ("" != n) {
							var e = u.getFileNativePath(n);
							u.fs.copyFile({
								srcPath: f,
								destPath: e,
								success: function(i) {
									u.onSaveFile(o, n, t, r, a, i.size)
								},
								fail: function(i) {
									null != a && a.runWith([1, i])
								}
							})
						}
					}
				})
			}, u.deleteAll = function() {
				var i = [];
				for (var t in u.filesListObj) i.push(u.filesListObj[t]);
				for (var e = 1, n = i.length; e < n; e++) {
					var o = i[e];
					u.deleteFile("", o.readyUrl)
				}
			}, u.onSaveFile = function(i, t, e, n, o, a) {
				void 0 === e && (e = !0), void 0 === n && (n = ""), void 0 === a && (a = 0);
				var r = i.split("?")[0];
				if (null == u.filesListObj.fileUsedSize && (u.filesListObj.fileUsedSize = 0), e) {
					u.getFileNativePath(t);
					u.filesListObj[r] = {
						md5: t,
						readyUrl: i,
						size: a,
						times: v.now(),
						encoding: n
					}, u.filesListObj.fileUsedSize = parseInt(u.filesListObj.fileUsedSize) + a, u.writeFilesList(r, JSON.stringify(u.filesListObj), !0), null != o && o.runWith([0])
				} else if (u.filesListObj[r]) {
					var s = parseInt(u.filesListObj[r].size);
					u.filesListObj.fileUsedSize = parseInt(u.filesListObj.fileUsedSize) - s, delete u.filesListObj[r], u.writeFilesList(r, JSON.stringify(u.filesListObj), !1), null != o && o.runWith([0])
				}
			}, u.writeFilesList = function(i, t, e) {
				var n = u.fileNativeDir + "/" + u.fileListName;
				u.fs.writeFile({
					filePath: n,
					encoding: "utf8",
					data: t,
					success: function(i) {},
					fail: function(i) {}
				}), !C.isZiYu && C.isPosMsgYu
			}, u.getCacheUseSize = function() {
				return u.filesListObj && u.filesListObj.fileUsedSize ? u.filesListObj.fileUsedSize : 0
			}, u.existDir = function(i, t) {
				u.fs.mkdir({
					dirPath: i,
					success: function(i) {
						null != t && t.runWith([0, {
							data: JSON.stringify({})
						}])
					},
					fail: function(i) {
						-1 != i.errMsg.indexOf("file already exists") ? u.readSync(u.fileNativeDir + "/" + u.fileListName, "utf8", t) : null != t && t.runWith([1, i])
					}
				})
			}, u.readSync = function(i, t, e, n) {
				void 0 === t && (t = "ascii"), void 0 === n && (n = "");
				u.getFileNativePath(i);
				try {
					u.fs.readFile({
						filePath: i,
						encoding: t,
						success: function(i) {
							null != e && e.runWith([0, i])
						},
						fail: function(i) {
							i && null != e && e.runWith([1, i])
						},
						complete: function() {}
					})
				} catch (i) {
					null != e && e.runWith([1])
				}
			}, u.setNativeFileDir = function(i) {
				u.fileNativeDir = c.qg.env.USER_DATA_PATH + i
			}, u.filesListObj = {}, u.fileNativeDir = null, u.fileListName = "layaairfiles.txt", u.ziyuFileData = {}, u.loadPath = "", u.DESCENDING = 2, u.NUMERIC = 16, e(u, ["fs", function() {
				return this.fs = c.qg.getFileSystemManager()
			}, "wxdown", function() {
				return this.wxdown = c.qg.downloadFile
			}]), u
		}(),
		w = function() {
			function o() {}
			return r(o, "laya.quickgame.mini.MiniImage", null, "MiniImage$1"), o.prototype._loadImage = function(i) {
				var t = this;
				if (C.isZiYu) o.onCreateImage(i, t, !0);
				else {
					var e = !1;
					if (x.isLocalNativeFile(i)) {
						if (-1 != i.indexOf("http://") || -1 != i.indexOf("https://"))
							if ("" != x.loadPath) i = i.split(x.loadPath)[1];
							else {
								var n = "" != _.rootPath ? _.rootPath : _.basePath;
								"" != n && (i = i.split(n)[1])
							}
					} else e = !0, i = _.formatURL(i);
					x.getFileInfo(i) ? o.onCreateImage(i, t, !e) : -1 != i.indexOf("http://") || -1 != i.indexOf("https://") ? C.isZiYu ? o.onCreateImage(i, t, !0) : x.downOtherFiles(i, new d(o, o.onDownImgCallBack, [i, t]), i) : o.onCreateImage(i, t, !0)
				}
			}, o.onDownImgCallBack = function(i, t, e, n) {
				void 0 === n && (n = ""), e ? t.onError(null) : o.onCreateImage(i, t, !1, n)
			}, o.onCreateImage = function(t, e, i, n) {
				var o, a;
				if (void 0 === i && (i = !1), void 0 === n && (n = ""), C.autoCacheFile)
					if (i) o = t;
					else if ("" != n) o = n;
				else {
					var r = x.getFileInfo(t).md5;
					o = x.getFileNativePath(r)
				} else o = i ? t : n;

				function s() {
					a.onload = null, a.onerror = null, delete e.imgCache[t]
				}
				null == e.imgCache && (e.imgCache = {});
				var l = function() {
						s(), e._url = _.formatURL(e._url), e.onLoaded(a)
					},
					u = function() {
						s(), e.event("error", "Load image failed")
					};
				"nativeimage" == e._type ? ((a = new v.window.Image).crossOrigin = "", a.onload = l, a.onerror = u, a.src = o, e.imgCache[t] = a) : new h.create(o, {
					onload: l,
					onerror: u,
					onCreate: function(i) {
						a = i, e.imgCache[t] = i
					}
				})
			}, o
		}(),
		b = function() {
			function t() {}
			return r(t, "laya.quickgame.mini.MiniInput", null, "MiniInput$1"), t._createInputElement = function() {
				l._initInput(l.area = v.createElement("textarea")), l._initInput(l.input = v.createElement("input")), l.inputContainer = v.createElement("div"), l.inputContainer.style.position = "absolute", l.inputContainer.style.zIndex = 1e5, v.container.appendChild(l.inputContainer), a.stage.on("resize", null, t._onStageResize), g._soundClass = M, g._musicClass = M
			}, t._onStageResize = function() {}, t.wxinputFocus = function(i) {
				var e = l.inputElement.target;
				e && !e.editable || (t.rt.offKeyboardConfirm(), t.rt.offKeyboardInput(), t.rt.showKeyboard({
					defaultValue: e.text,
					maxLength: e.maxChars,
					multiple: e.multiline,
					confirmHold: !0,
					confirmType: "done"
				}), t.rt.onKeyboardConfirm(function(i) {
					var t = i ? i.value : "";
					e.text = t, e.event("input"), laya.quickgame.mini.MiniInput.inputEnter()
				}), t.rt.onKeyboardInput(function(i) {
					var t = i ? i.value : "";
					e.multiline || -1 == t.indexOf("\n") ? (e.text = t, e.event("input")) : laya.quickgame.mini.MiniInput.inputEnter()
				}))
			}, t.inputEnter = function() {
				l.inputElement.target.focus = !1
			}, t.wxinputblur = function() {
				t.hideKeyboard()
			}, t.hideKeyboard = function() {
				t.rt.offKeyboardConfirm(), t.rt.offKeyboardInput(), t.rt.hideKeyboard({})
			}, e(t, ["rt", function() {
				return this.rt = c.qg
			}]), t
		}(),
		S = function() {
			function e() {}
			return r(e, "laya.quickgame.mini.MiniLocalStorage", null, "MiniLocalStorage$1"), e.__init__ = function() {
				e.items = e
			}, e.setItem = function(i, t) {
				c.localStorage.setItem(i, t)
			}, e.getItem = function(i) {
				return c.localStorage.getItem(i)
			}, e.setJSON = function(i, t) {
				e.setItem(i, t)
			}, e.getJSON = function(i) {
				return e.getItem(i)
			}, e.removeItem = function(i) {
				c.localStorage.removeItem(i)
			}, e.clear = function() {
				c.localStorage.clear()
			}, e.getStorageInfoSync = function() {
				try {
					return null
				} catch (i) {}
				return null
			}, e.support = !0, e.items = null, e
		}(),
		F = function() {
			function o() {}
			return r(o, "laya.quickgame.mini.MiniLocation", null, "MiniLocation$1"), o.__init__ = function() {
				C.window.navigator.geolocation.getCurrentPosition = o.getCurrentPosition, C.window.navigator.geolocation.watchPosition = o.watchPosition, C.window.navigator.geolocation.clearWatch = o.clearWatch
			}, o.getCurrentPosition = function(t, i, e) {
				var n;
				(n = {
					success: function(i) {
						null != t && (i.coords = i, t(i))
					}
				}).fail = i, C.window.qg.getLocation(n)
			}, o.watchPosition = function(i, t, e) {
				var n;
				return o._curID++, (n = {}).success = i, n.error = t, o._watchDic[o._curID] = n, a.timer.loop(1e3, null, o._myLoop), o._curID
			}, o.clearWatch = function(i) {
				delete o._watchDic[i], o._hasWatch() || a.timer.clear(null, o._myLoop)
			}, o._hasWatch = function() {
				var i;
				for (i in o._watchDic)
					if (o._watchDic[i]) return !0;
				return !1
			}, o._myLoop = function() {
				o.getCurrentPosition(o._mySuccess, o._myError)
			}, o._mySuccess = function(i) {
				var t, e = {};
				for (t in e.coords = i, e.timestamp = v.now(), o._watchDic) o._watchDic[t].success && o._watchDic[t].success(e)
			}, o._myError = function(i) {
				var t;
				for (t in o._watchDic) o._watchDic[t].error && o._watchDic[t].error(i)
			}, o._watchDic = {}, o._curID = 0, o
		}(),
		L = function(o) {
			function a() {
				a.__super.call(this)
			}
			r(a, "laya.quickgame.mini.MiniAccelerator", o, "MiniAccelerator$1");
			var i = a.prototype;
			return i.on = function(i, t, e, n) {
				return o.prototype.on.call(this, i, t, e, n), a.startListen(this.onDeviceOrientationChange), this
			}, i.off = function(i, t, e, n) {
				return void 0 === n && (n = !1), this.hasListener(i) || a.stopListen(), o.prototype.off.call(this, i, t, e, n)
			}, a.__init__ = function() {
				try {
					var i;
					if (!(i = laya.device.motion.Accelerator)) return;
					i.prototype.on = a.prototype.on, i.prototype.off = a.prototype.off
				} catch (i) {}
			}, a.startListen = function(i) {
				if (a._callBack = i, !a._isListening) {
					a._isListening = !0;
					try {
						c.qg.onAccelerometerChange(a.onAccelerometerChange)
					} catch (i) {}
				}
			}, a.stopListen = function() {
				a._isListening = !1;
				try {
					c.qg.stopAccelerometer({})
				} catch (i) {}
			}, a.onAccelerometerChange = function(i) {
				var t;
				(t = {}).acceleration = i, t.accelerationIncludingGravity = i, t.rotationRate = {}, null != a._callBack && a._callBack(t)
			}, a._isListening = !1, a._callBack = null, a
		}(n),
		I = function(i) {
			function h() {
				h.__super.call(this)
			}
			return r(h, "laya.quickgame.mini.MiniLoader", n, "MiniLoader$1"), h.prototype.load = function(i, t, e, n, o) {
				void 0 === e && (e = !0), void 0 === o && (o = !1);
				var a = this;
				if (0 === (a._url = i).indexOf("data:image") ? a._type = t = "image" : a._type = t || (t = a.getTypeFromUrl(i)), a._cache = e, a._data = null, !o && f.loadedMap[_.formatURL(i)]) return a._data = f.loadedMap[_.formatURL(i)], this.event("progress", 1), void this.event("complete", a._data);
				if (null != f.parserMap[t]) return a._customParse = !0, void(f.parserMap[t] instanceof laya.utils.Handler ? f.parserMap[t].runWith(this) : f.parserMap[t].call(null, this));
				var r = C.getUrlEncode(i, t),
					s = y.getFileExtension(i);
				if (-1 != h._fileTypeArr.indexOf(s)) C.EnvConfig.load.call(this, i, t, e, n, o);
				else {
					if (C.isZiYu && x.ziyuFileData[i]) {
						var l = x.ziyuFileData[i];
						return void a.onLoaded(l)
					}
					if (x.getFileInfo(i)) {
						var u = x.getFileInfo(i);
						u.encoding = null == u.encoding ? "ascii" : u.encoding, x.readFile(i, u.encoding, new d(h, h.onReadNativeCallBack, [r, i, t, e, n, o, a]), i)
					} else {
						if (x.isLocalNativeFile(i)) return void x.read(i, r, new d(h, h.onReadNativeCallBack, [r, i, t, e, n, o, a]));
						var c = i; - 1 != (i = _.formatURL(i)).indexOf("http://") || -1 != i.indexOf("https://") ? C.EnvConfig.load.call(a, c, t, e, n, o) : x.readFile(i, r, new d(h, h.onReadNativeCallBack, [r, i, t, e, n, o, a]), i)
					}
				}
			}, h.onReadNativeCallBack = function(i, t, e, n, o, a, r, s, l) {
				var u;
				(void 0 === n && (n = !0), void 0 === a && (a = !1), void 0 === s && (s = 0), s) ? 1 == s && C.EnvConfig.load.call(r, t, e, n, o, a): (u = "json" == e || "atlas" == e ? C.getJson(l.data) : "xml" == e ? y.parseXMLFromString(l.data) : l.data, !C.isZiYu && C.isPosMsgYu, r.onLoaded(u))
			}, e(h, ["_fileTypeArr", function() {
				return this._fileTypeArr = ["png", "jpg", "bmp", "jpeg", "gif"]
			}]), h
		}(),
		M = function(i) {
			function a() {
				this._sound = null, this.url = null, this.loaded = !1, this.readyUrl = null, a.__super.call(this)
			}
			r(a, "laya.quickgame.mini.MiniSound", n, "MiniSound$1");
			var t = a.prototype;
			return t.load = function(i) {
				i = _.formatURL(i), this.url = i, this.readyUrl = i, a._audioCache[this.readyUrl] ? this.event("complete") : C.autoCacheFile && x.getFileInfo(i) ? this.onDownLoadCallBack(i, 0) : C.autoCacheFile ? -1 !== i.indexOf("http://") || -1 !== i.indexOf("https://") ? x.downOtherFiles(i, d.create(this, this.onDownLoadCallBack, [i]), i) : x.readFile(i, "", d.create(this, this.onDownLoadCallBack, [i]), i, !1, "") : this.onDownLoadCallBack(i, 0)
			}, t.onDownLoadCallBack = function(i, t) {
				if (t) this.event("error");
				else {
					var e;
					if (C.autoCacheFile)
						if (this._sound = a._createSound(), -1 !== i.indexOf("http://") || -1 !== i.indexOf("https://")) {
							var n = x.getFileInfo(i).md5;
							e = x.getFileNativePath(n), this._sound.src = this.url = e
						} else this._sound.src = i;
					else this._sound = a._createSound(), this._sound.src = i;
					this._sound.onCanplay(a.bindToThis(this.onCanPlay, this)), this._sound.onError(a.bindToThis(this.onError, this))
				}
			}, t.onError = function(i) {
				try {
					console.log("-----1---------------minisound-----id:" + a._id), console.log(i)
				} catch (i) {
					console.log("-----2---------------minisound-----id:" + a._id), console.log(i)
				}
				this.event("error"), this._sound.offError(a.bindToThis(this.onError, this))
			}, t.onCanPlay = function() {
				this.loaded = !0, this.event("complete"), (a._audioCache[this.readyUrl] = this)._sound.offCanplay(a.bindToThis(this.onCanPlay, this))
			}, t.play = function(i, t) {
				var e;
				if (void 0 === i && (i = 0), void 0 === t && (t = 0), e = this.url == g._tMusic ? (a._musicAudio || (a._musicAudio = a._createSound()), a._musicAudio) : a._audioCache[this.readyUrl] ? a._audioCache[this.readyUrl]._sound : a._createSound(), C.autoCacheFile && x.getFileInfo(this.url)) {
					var n = x.getFileInfo(this.url).md5;
					e.src = this.url = x.getFileNativePath(n)
				} else e.src = this.url;
				var o = new O(e, this);
				return o.url = this.url, o.loops = t, o.loop = 0 === t, o.startTime = i, o.play(), g.addChannel(o), o
			}, t.dispose = function() {
				var i = a._audioCache[this.readyUrl];
				i && (i.src = "", i._sound && (i._sound.destroy(), i._sound = null, i = null), delete a._audioCache[this.readyUrl])
			}, s(0, t, "duration", function() {
				return this._sound.duration
			}), a._createSound = function() {
				return a._id++, C.window.qg.createInnerAudioContext()
			}, a.bindToThis = function(i, t) {
				return i.bind(t)
			}, a._musicAudio = null, a._id = 0, a._audioCache = {}, a
		}(),
		O = function(i) {
			function e(i, t) {
				this._audio = null, this._onEnd = null, this._miniSound = null, e.__super.call(this), this._audio = i, this._miniSound = t, this._onEnd = e.bindToThis(this.__onEnd, this), i.onEnded(this._onEnd)
			}
			r(e, "laya.quickgame.mini.MiniSoundChannel", o, "MiniSoundChannel$1");
			var t = e.prototype;
			return t.__onEnd = function() {
				if (1 == this.loops) return this.completeHandler && (a.timer.once(10, this, this.__runComplete, [this.completeHandler], !1), this.completeHandler = null), this.stop(), void this.event("complete");
				0 < this.loops && this.loops--, this.startTime = 0, this.play()
			}, t.play = function() {
				this.isStopped = !1, g.addChannel(this), this._audio.play()
			}, t.stop = function() {
				this.isStopped = !0, g.removeChannel(this), this.completeHandler = null, this._audio && (this._audio.pause(), this._audio.offEnded(e.bindToThis(this.__onEnd, this)), this._audio = null, this._miniSound = null, this._onEnd = null)
			}, t.pause = function() {
				this.isStopped = !0, this._audio.pause()
			}, t.resume = function() {
				this._audio && (this.isStopped = !1, g.addChannel(this), this._audio.play())
			}, s(0, t, "autoplay", function() {
				return this._audio.autoplay
			}, function(i) {
				this._audio.autoplay = i
			}), s(0, t, "position", function() {
				return this._audio ? this._audio.currentTime : 0
			}), s(0, t, "duration", function() {
				return this._audio ? this._audio.duration : 0
			}), s(0, t, "loop", function() {
				return this._audio.loop
			}, function(i) {
				this._audio.loop = i
			}), s(0, t, "volume", function() {
				return this._audio ? this._audio.volume : 1
			}, function(i) {
				this._audio && (this._audio.volume = i)
			}), e.bindToThis = function(i, t) {
				return i.bind(t)
			}, e
		}()
}(window, document, Laya), "function" == typeof define && define.amd && define("laya.core", ["require", "exports"], function(i, t) {
	"use strict";
	for (var e in Object.defineProperty(t, "__esModule", {
			value: !0
		}), Laya) {
		var n = Laya[e];
		n && n.__isclass && (t[e] = n)
	}
});
