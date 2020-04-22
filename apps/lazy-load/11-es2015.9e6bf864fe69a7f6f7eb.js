(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{qMY6:function(e,t,n){"use strict";n.r(t),n.d(t,"FileExplorerModule",(function(){return F})),n.d(t,"FileElement",(function(){return Z})),n.d(t,"FileExplorerComponent",(function(){return K}));var i=n("2kYt"),o=n("LTOS"),r=n("nIj0"),c=n("EM62"),l=n("8lHc");const a=["fileSelector"];function s(e,t){if(1&e&&(c.ac(0,"div",8),c.Hc(1),c.Zb()),2&e){const e=c.mc(2);c.Ib(1),c.Ic(e.dropZoneLabel)}}function d(e,t){if(1&e){const e=c.bc();c.ac(0,"div"),c.ac(1,"input",9),c.ic("click",(function(t){return c.zc(e),c.mc(2).openFileSelector(t)})),c.Zb(),c.Zb()}if(2&e){const e=c.mc(2);c.Ib(1),c.sc("value",e.browseBtnLabel),c.rc("className",e.browseBtnClassName)}}function p(e,t){if(1&e&&(c.Fc(0,s,2,1,"div",6),c.Fc(1,d,2,2,"div",7)),2&e){const e=c.mc();c.rc("ngIf",e.dropZoneLabel),c.Ib(1),c.rc("ngIf",e.showBrowseBtn)}}function m(e,t){}const u=function(e){return{openFileSelector:e}};class f{constructor(e,t){this.relativePath=e,this.fileEntry=t}}let g=(()=>{let e=class{constructor(e){this.template=e}};return e.\u0275fac=function(t){return new(t||e)(c.Ub(c.Q))},e.\u0275dir=c.Pb({type:e,selectors:[["","ngx-file-drop-content-tmp",""]]}),e})();var b=function(e,t,n,i){var o,r=arguments.length,c=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(c=(r<3?o(c):r>3?o(t,n,c):o(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c},h=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let v=(()=>{let e=class{constructor(e,t){this.zone=e,this.renderer=t,this.accept="*",this.directory=!1,this.multiple=!0,this.dropZoneLabel="",this.dropZoneClassName="ngx-file-drop__drop-zone",this.contentClassName="ngx-file-drop__content",this.showBrowseBtn=!1,this.browseBtnClassName="btn btn-primary btn-xs ngx-file-drop__browse-btn",this.browseBtnLabel="Browse files",this.onFileDrop=new c.q,this.onFileOver=new c.q,this.onFileLeave=new c.q,this.isDraggingOverDropZone=!1,this.globalDraggingInProgress=!1,this.files=[],this.numOfActiveReadEntries=0,this.helperFormEl=null,this.fileInputPlaceholderEl=null,this.dropEventTimerSubscription=null,this._disabled=!1,this.openFileSelector=e=>{this.fileSelector&&this.fileSelector.nativeElement&&this.fileSelector.nativeElement.click()},this.globalDragStartListener=this.renderer.listen("document","dragstart",e=>{this.globalDraggingInProgress=!0}),this.globalDragEndListener=this.renderer.listen("document","dragend",e=>{this.globalDraggingInProgress=!1})}get disabled(){return this._disabled}set disabled(e){this._disabled=null!=e&&"false"!==`${e}`}ngOnDestroy(){this.dropEventTimerSubscription&&(this.dropEventTimerSubscription.unsubscribe(),this.dropEventTimerSubscription=null),this.globalDragStartListener(),this.globalDragEndListener(),this.files=[],this.helperFormEl=null,this.fileInputPlaceholderEl=null}onDragOver(e){this.isDropzoneDisabled()||(this.isDraggingOverDropZone||(this.isDraggingOverDropZone=!0,this.onFileOver.emit(e)),this.preventAndStop(e))}onDragLeave(e){this.isDropzoneDisabled()||(this.isDraggingOverDropZone&&(this.isDraggingOverDropZone=!1,this.onFileLeave.emit(e)),this.preventAndStop(e))}dropFiles(e){if(!this.isDropzoneDisabled()&&(this.isDraggingOverDropZone=!1,e.dataTransfer)){let t;e.dataTransfer.dropEffect="copy",t=e.dataTransfer.items?e.dataTransfer.items:e.dataTransfer.files,this.preventAndStop(e),this.checkFiles(t)}}uploadFiles(e){!this.isDropzoneDisabled()&&e.target&&(this.checkFiles(e.target.files||[]),this.resetFileInput())}checkFiles(e){for(let t=0;t<e.length;t++){const n=e[t];let i=null;if(this.canGetAsEntry(n)&&(i=n.webkitGetAsEntry()),i)if(i.isFile){const e=new f(i.name,i);this.addToQueue(e)}else i.isDirectory&&this.traverseFileTree(i,i.name);else if(n){const e={name:n.name,isDirectory:!1,isFile:!0,file:e=>{e(n)}},t=new f(e.name,e);this.addToQueue(t)}}this.dropEventTimerSubscription&&this.dropEventTimerSubscription.unsubscribe(),this.dropEventTimerSubscription=Object(l.a)(200,200).subscribe(()=>{if(this.files.length>0&&0===this.numOfActiveReadEntries){const e=this.files;this.files=[],this.onFileDrop.emit(e)}})}traverseFileTree(e,t){if(e.isFile){const n=new f(t,e);this.files.push(n)}else{t+="/";const n=e.createReader();let i=[];const o=()=>{this.numOfActiveReadEntries++,n.readEntries(n=>{if(n.length)i=i.concat(n),o();else if(0===i.length){const n=new f(t,e);this.zone.run(()=>{this.addToQueue(n)})}else for(let e=0;e<i.length;e++)this.zone.run(()=>{this.traverseFileTree(i[e],t+i[e].name)});this.numOfActiveReadEntries--})};o()}}resetFileInput(){if(this.fileSelector&&this.fileSelector.nativeElement){const e=this.fileSelector.nativeElement,t=e.parentElement,n=this.getHelperFormElement(),i=this.getFileInputPlaceholderElement();t!==n&&(this.renderer.insertBefore(t,i,e),this.renderer.appendChild(n,e),n.reset(),this.renderer.insertBefore(t,e,i),this.renderer.removeChild(t,i))}}getHelperFormElement(){return this.helperFormEl||(this.helperFormEl=this.renderer.createElement("form")),this.helperFormEl}getFileInputPlaceholderElement(){return this.fileInputPlaceholderEl||(this.fileInputPlaceholderEl=this.renderer.createElement("div")),this.fileInputPlaceholderEl}canGetAsEntry(e){return!!e.webkitGetAsEntry}isDropzoneDisabled(){return this.globalDraggingInProgress||this.disabled}addToQueue(e){this.files.push(e)}preventAndStop(e){e.stopPropagation(),e.preventDefault()}};return e.\u0275fac=function(t){return new(t||e)(c.Ub(c.D),c.Ub(c.J))},e.\u0275cmp=c.Ob({type:e,selectors:[["ngx-file-drop"]],contentQueries:function(e,t,n){var i;1&e&&c.Nb(n,g,!0,c.Q),2&e&&c.wc(i=c.jc())&&(t.contentTemplate=i.first)},viewQuery:function(e,t){var n;1&e&&c.Dc(a,!0),2&e&&c.wc(n=c.jc())&&(t.fileSelector=n.first)},inputs:{accept:"accept",directory:"directory",multiple:"multiple",dropZoneLabel:"dropZoneLabel",dropZoneClassName:"dropZoneClassName",contentClassName:"contentClassName",showBrowseBtn:"showBrowseBtn",browseBtnClassName:"browseBtnClassName",browseBtnLabel:"browseBtnLabel",disabled:"disabled"},outputs:{onFileDrop:"onFileDrop",onFileOver:"onFileOver",onFileLeave:"onFileLeave"},decls:7,vars:15,consts:[[3,"className","drop","dragover","dragleave"],[3,"className"],["type","file",1,"ngx-file-drop__file-input",3,"accept","multiple","change"],["fileSelector",""],["defaultContentTemplate",""],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["class","ngx-file-drop__drop-zone-label",4,"ngIf"],[4,"ngIf"],[1,"ngx-file-drop__drop-zone-label"],["type","button",3,"className","value","click"]],template:function(e,t){if(1&e&&(c.ac(0,"div",0),c.ic("drop",(function(e){return t.dropFiles(e)}))("dragover",(function(e){return t.onDragOver(e)}))("dragleave",(function(e){return t.onDragLeave(e)})),c.ac(1,"div",1),c.ac(2,"input",2,3),c.ic("change",(function(e){return t.uploadFiles(e)})),c.Zb(),c.Fc(4,p,2,2,"ng-template",null,4,c.Gc),c.Fc(6,m,0,0,"ng-template",5),c.Zb(),c.Zb()),2&e){const e=c.xc(5);c.Lb("ngx-file-drop__drop-zone--over",t.isDraggingOverDropZone),c.rc("className",t.dropZoneClassName),c.Ib(1),c.rc("className",t.contentClassName),c.Ib(1),c.rc("accept",t.accept)("multiple",t.multiple),c.Jb("directory",t.directory||void 0)("webkitdirectory",t.directory||void 0)("mozdirectory",t.directory||void 0)("msdirectory",t.directory||void 0)("odirectory",t.directory||void 0),c.Ib(4),c.rc("ngTemplateOutlet",t.contentTemplate||e)("ngTemplateOutletContext",c.uc(13,u,t.openFileSelector))}},directives:[i.p,i.k],styles:[".ngx-file-drop__drop-zone[_ngcontent-%COMP%]{height:100px;margin:auto;border:2px dotted #0782d0;border-radius:30px}.ngx-file-drop__drop-zone--over[_ngcontent-%COMP%]{background-color:rgba(147,147,147,.5)}.ngx-file-drop__content[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:100px;color:#0782d0}.ngx-file-drop__drop-zone-label[_ngcontent-%COMP%]{text-align:center}.ngx-file-drop__file-input[_ngcontent-%COMP%]{display:none}"]}),b([Object(c.v)(),h("design:type",String)],e.prototype,"accept",void 0),b([Object(c.v)(),h("design:type",Boolean)],e.prototype,"directory",void 0),b([Object(c.v)(),h("design:type",Boolean)],e.prototype,"multiple",void 0),b([Object(c.v)(),h("design:type",String)],e.prototype,"dropZoneLabel",void 0),b([Object(c.v)(),h("design:type",String)],e.prototype,"dropZoneClassName",void 0),b([Object(c.v)(),h("design:type",String)],e.prototype,"contentClassName",void 0),b([Object(c.v)(),h("design:type",Boolean),h("design:paramtypes",[Boolean])],e.prototype,"disabled",null),b([Object(c.v)(),h("design:type",Boolean)],e.prototype,"showBrowseBtn",void 0),b([Object(c.v)(),h("design:type",String)],e.prototype,"browseBtnClassName",void 0),b([Object(c.v)(),h("design:type",String)],e.prototype,"browseBtnLabel",void 0),b([Object(c.F)(),h("design:type",c.q)],e.prototype,"onFileDrop",void 0),b([Object(c.F)(),h("design:type",c.q)],e.prototype,"onFileOver",void 0),b([Object(c.F)(),h("design:type",c.q)],e.prototype,"onFileLeave",void 0),b([Object(c.l)(g,{read:c.Q}),h("design:type",c.Q)],e.prototype,"contentTemplate",void 0),b([Object(c.T)("fileSelector",{static:!0}),h("design:type",c.n)],e.prototype,"fileSelector",void 0),e=b([h("design:paramtypes",[c.D,c.J])],e),e})(),y=(()=>{let e=class{};return e.\u0275mod=c.Sb({type:e,bootstrap:function(){return[v]}}),e.\u0275inj=c.Rb({factory:function(t){return new(t||e)},providers:[],imports:[[i.c]]}),e})(),F=(()=>{class e{}return e.\u0275mod=c.Sb({type:e}),e.\u0275inj=c.Rb({factory:function(t){return new(t||e)},imports:[[i.c,o.c,r.d,r.k,y]]}),e})();class Z{}var w=n("OZ4H"),E=n("29Wa"),O=n("Cd2c"),D=n("PBFl");let I=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Ob({type:e,selectors:[["s3-new-folder-modal"]],decls:10,vars:2,consts:[["mat-dialog-title",""],[1,"example-full-width"],["matInput","","placeholder","Folder Name",3,"ngModel","ngModelChange"],["mat-raised-button","","mat-dialog-close",""],["mat-raised-button","","color","primary",3,"mat-dialog-close"]],template:function(e,t){1&e&&(c.ac(0,"h1",0),c.Hc(1,"Create a new folder"),c.Zb(),c.ac(2,"mat-dialog-content"),c.ac(3,"mat-form-field",1),c.ac(4,"input",2),c.ic("ngModelChange",(function(e){return t.folderName=e})),c.Zb(),c.Zb(),c.Zb(),c.ac(5,"mat-dialog-actions"),c.ac(6,"button",3),c.Hc(7,"Cancel"),c.Zb(),c.ac(8,"button",4),c.Hc(9," OK "),c.Zb(),c.Zb()),2&e&&(c.Ib(4),c.rc("ngModel",t.folderName),c.Ib(4),c.rc("mat-dialog-close",t.folderName))},directives:[w.f,w.d,E.b,O.b,r.b,r.h,r.j,w.b,D.a,w.c],styles:[""]}),e})(),x=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Ob({type:e,selectors:[["s3-rename-modal"]],decls:10,vars:2,consts:[["mat-dialog-title",""],[1,"example-full-width"],["matInput","","placeholder","Folder Name",3,"ngModel","ngModelChange"],["mat-raised-button","","mat-dialog-close",""],["mat-raised-button","","color","primary",3,"mat-dialog-close"]],template:function(e,t){1&e&&(c.ac(0,"h1",0),c.Hc(1,"Rename Element"),c.Zb(),c.ac(2,"mat-dialog-content"),c.ac(3,"mat-form-field",1),c.ac(4,"input",2),c.ic("ngModelChange",(function(e){return t.folderName=e})),c.Zb(),c.Zb(),c.Zb(),c.ac(5,"mat-dialog-actions"),c.ac(6,"button",3),c.Hc(7,"Cancel"),c.Zb(),c.ac(8,"button",4),c.Hc(9," OK "),c.Zb(),c.Zb()),2&e&&(c.Ib(4),c.rc("ngModel",t.folderName),c.Ib(4),c.rc("mat-dialog-close",t.folderName))},directives:[w.f,w.d,E.b,O.b,r.b,r.h,r.j,w.b,D.a,w.c],styles:[""]}),e})();var _=n("A7yd"),C=n("qFEQ"),T=n("bFHC"),M=n("Jb3d"),S=n("GAih");function k(e,t){if(1&e){const e=c.bc();c.ac(0,"button",4),c.ic("click",(function(){return c.zc(e),c.mc().navigateUp()})),c.ac(1,"mat-icon"),c.Hc(2," arrow_back "),c.Zb(),c.Zb()}}function N(e,t){if(1&e&&(c.ac(0,"span",15),c.Hc(1),c.Zb()),2&e){const e=c.mc();c.Ib(1),c.Jc("",e.selected.length," File(s) Selected")}}function L(e,t){if(1&e){const e=c.bc();c.ac(0,"button",4),c.ic("click",(function(){return c.zc(e),c.mc().selected=[]})),c.ac(1,"mat-icon"),c.Hc(2," clear "),c.Zb(),c.Zb()}}function z(e,t){1&e&&(c.ac(0,"mat-icon",21),c.Hc(1," folder "),c.Zb())}function H(e,t){1&e&&(c.ac(0,"mat-icon",21),c.Hc(1," insert_drive_file "),c.Zb())}const j=function(e){return{element:e}},B=function(e){return{"background-color":e}};function P(e,t){if(1&e){const e=c.bc();c.ac(0,"div",16),c.Vb(1,"span",17,18),c.ac(3,"div",19),c.ic("click",(function(n){c.zc(e);const i=t.$implicit;return c.mc().navigate(i,n)}))("contextmenu",(function(t){return c.zc(e),c.xc(2).openMenu(),t.preventDefault()})),c.Fc(4,z,2,0,"mat-icon",20),c.Fc(5,H,2,0,"mat-icon",20),c.ac(6,"span"),c.Hc(7),c.Zb(),c.Zb(),c.Zb()}if(2&e){const e=t.$implicit,n=c.mc(),i=c.xc(18);c.Ib(1),c.rc("matMenuTriggerFor",i)("matMenuTriggerData",c.uc(6,j,e)),c.Ib(2),c.rc("ngStyle",c.uc(8,B,n.selected.includes(e)?"grey":"")),c.Ib(1),c.rc("ngIf",e.isFolder),c.Ib(1),c.rc("ngIf",!e.isFolder),c.Ib(2),c.Ic(e.name)}}function R(e,t){if(1&e){const e=c.bc();c.ac(0,"button",24),c.ic("click",(function(){c.zc(e);const t=c.mc().element;return c.mc().encrypt(t)})),c.ac(1,"mat-icon"),c.Hc(2,"lock"),c.Zb(),c.ac(3,"span"),c.Hc(4,"Encrypt"),c.Zb(),c.Zb()}}function A(e,t){if(1&e){const e=c.bc();c.ac(0,"button",24),c.ic("click",(function(){c.zc(e);const t=c.mc().element;return c.mc().decrypt(t)})),c.ac(1,"mat-icon"),c.Hc(2,"lock_open"),c.Zb(),c.ac(3,"span"),c.Hc(4,"Decrypt"),c.Zb(),c.Zb()}}const q=function(e){return{self:e}};function U(e,t){if(1&e){const e=c.bc();c.ac(0,"button",22),c.ac(1,"mat-icon"),c.Hc(2,"open_with"),c.Zb(),c.ac(3,"span"),c.Hc(4,"Move To"),c.Zb(),c.Zb(),c.ac(5,"button",23),c.ic("click",(function(){c.zc(e);const n=t.element;return c.mc().openRenameDialog(n)})),c.ac(6,"mat-icon"),c.Hc(7,"edit"),c.Zb(),c.ac(8,"span"),c.Hc(9,"Rename"),c.Zb(),c.Zb(),c.ac(10,"button",24),c.ic("click",(function(){c.zc(e);const n=t.element;return c.mc().deleteElement(n)})),c.ac(11,"mat-icon"),c.Hc(12,"delete"),c.Zb(),c.ac(13,"span"),c.Hc(14,"Delete"),c.Zb(),c.Zb(),c.Fc(15,R,5,0,"button",25),c.Fc(16,A,5,0,"button",25)}if(2&e){const e=t.element,n=c.mc(),i=c.xc(21);c.rc("matMenuTriggerFor",i)("matMenuTriggerData",c.uc(5,q,e)),c.Ib(5),c.rc("disabled",n.selected.length>0),c.Ib(10),c.rc("ngIf",!e.isFolder),c.Ib(1),c.rc("ngIf",!e.isFolder)}}function Q(e,t){if(1&e){const e=c.bc();c.ac(0,"button",24),c.ic("click",(function(){c.zc(e);const t=c.mc().$implicit,n=c.mc().self;return c.mc().moveElement(n,t)})),c.Hc(1),c.Zb()}if(2&e){const e=c.mc().$implicit;c.Ib(1),c.Jc(" ",e.name," ")}}function J(e,t){if(1&e&&(c.Yb(0),c.Fc(1,Q,2,1,"button",25),c.Xb()),2&e){const e=t.$implicit,n=c.mc().self,i=c.mc();c.Ib(1),c.rc("ngIf",e.isFolder&&e.id!==n.id&&!i.selected.includes(e))}}function G(e,t){if(1&e&&c.Fc(0,J,2,1,"ng-container",26),2&e){const e=c.mc();c.rc("ngForOf",e._fileElements)}}function $(e,t){if(1&e){const e=c.bc();c.ac(0,"ngx-file-drop",27),c.ic("onFileDrop",(function(t){c.zc(e);const n=c.mc();return n.dropped(t),n.dragged=!1}))("onFileOver",(function(t){return c.zc(e),c.mc().fileOver(t)}))("onFileLeave",(function(t){c.zc(e);const n=c.mc();return n.fileLeave(t),n.dragged=!1})),c.Zb()}}let K=(()=>{class e{constructor(e){this.dialog=e,this.selected=[],this._fileElements=[],this.folderAdded=new c.q,this.filesUploaded=new c.q,this.elementRemoved=new c.q,this.elementRenamed=new c.q,this.elementMoved=new c.q,this.navigatedDown=new c.q,this.fileSelected=new c.q,this.navigatedUp=new c.q,this.encryptEmitter=new c.q,this.decryptEmitter=new c.q}set fileElements(e){this._fileElements=e,this.selected=[]}deleteElement(e){this.selected.length?(this.selected.includes(e)||this.selected.push(e),this.selected.forEach(e=>{this.elementRemoved.emit(e)})):this.elementRemoved.emit(e)}navigate(e,t){t.ctrlKey?this.selected=this.toggleInArray(this.selected,e):(this.selected=[],e.isFolder?this.navigatedDown.emit(e):this.fileSelected.emit(e))}navigateUp(){this.navigatedUp.emit()}moveElement(e,t){this.selected.length?(this.selected.includes(e)||this.selected.push(e),this.selected.forEach(e=>{this.elementMoved.emit({element:e,moveTo:t})})):this.elementMoved.emit({element:e,moveTo:t})}openNewFolderDialog(){this.dialog.open(I).afterClosed().subscribe(e=>{e&&this.folderAdded.emit({name:e})})}openRenameDialog(e){this.dialog.open(x).afterClosed().subscribe(t=>{t&&(e.name=t,this.elementRenamed.emit(e))})}openMenu(e,t,n){e.preventDefault(),n.openMenu()}uploadFile(e){const t=e.srcElement.files,n=[];for(let i=0;i<t.length;i++){const e=t[i],o=new Z;o.actualFile=e,o.isFolder=!1,o.name=e.name,n.push(o)}this.filesUploaded.emit(n)}dropped(e,t){const n=[],i=e.length;let o=0;for(const r of e)r.fileEntry.isFile&&r.fileEntry.file(e=>{let t=r.relativePath;const c=t.split("/");c.pop(),t=c.join("/"),o++;const l=new Z;l.actualFile=e,l.isFolder=!1,l.name=e.name,l.parent=t,n.push(l),o===i&&this.filesUploaded.emit(n)})}fileOver(e){}fileLeave(e){}encrypt(e){this.encryptEmitter.emit(e)}decrypt(e){this.decryptEmitter.emit(e)}toggleInArray(e,t){const n=e.indexOf(t);return-1===n?e.push(t):e.splice(n,1),e}}return e.\u0275fac=function(t){return new(t||e)(c.Ub(w.a))},e.\u0275cmp=c.Ob({type:e,selectors:[["rms-file-explorer"]],inputs:{fileElements:"fileElements",canNavigateUp:"canNavigateUp",path:"path"},outputs:{folderAdded:"folderAdded",filesUploaded:"filesUploaded",elementRemoved:"elementRemoved",elementRenamed:"elementRenamed",elementMoved:"elementMoved",navigatedDown:"navigatedDown",fileSelected:"fileSelected",navigatedUp:"navigatedUp",encryptEmitter:"encryptEmitter",decryptEmitter:"decryptEmitter"},decls:26,vars:7,consts:[[3,"dragover"],["mat-icon-button","",3,"click",4,"ngIf"],["fxFlex","1 1 auto"],["class","small-font",4,"ngIf"],["mat-icon-button","",3,"click"],[1,"container"],["fxFlex","","fxLayout","row wrap",1,"content"],["class","file-or-folder",4,"ngFor","ngForOf"],[3,"overlapTrigger"],["rootMenu","matMenu"],["matMenuContent",""],["moveToMenu","matMenu"],["dropZoneLabel","Drop files here","dropZoneClassName","drop-area","contentClassName","drop-content",3,"onFileDrop","onFileOver","onFileLeave",4,"ngIf"],["hidden","","multiple","","type","file",3,"change"],["uploader",""],[1,"small-font"],[1,"file-or-folder"],[3,"matMenuTriggerFor","matMenuTriggerData"],["menuTrigger","matMenuTrigger"],["fxFlex","","fxLayout","column space-between",1,"element-container",3,"ngStyle","click","contextmenu"],["color","primary","class","file-or-folder-icon pointer",4,"ngIf"],["color","primary",1,"file-or-folder-icon","pointer"],["mat-menu-item","",3,"matMenuTriggerFor","matMenuTriggerData"],["mat-menu-item","",3,"disabled","click"],["mat-menu-item","",3,"click"],["mat-menu-item","",3,"click",4,"ngIf"],[4,"ngFor","ngForOf"],["dropZoneLabel","Drop files here","dropZoneClassName","drop-area","contentClassName","drop-content",3,"onFileDrop","onFileOver","onFileLeave"]],template:function(e,t){if(1&e){const e=c.bc();c.ac(0,"div",0),c.ic("dragover",(function(){return t.dragged=!0})),c.ac(1,"mat-toolbar"),c.Fc(2,k,3,0,"button",1),c.ac(3,"span"),c.Hc(4),c.Zb(),c.Vb(5,"span",2),c.Fc(6,N,2,1,"span",3),c.Fc(7,L,3,0,"button",1),c.ac(8,"button",4),c.ic("click",(function(){return t.openNewFolderDialog()})),c.ac(9,"mat-icon"),c.Hc(10," create_new_folder "),c.Zb(),c.Zb(),c.ac(11,"button",4),c.ic("click",(function(){return c.zc(e),c.xc(25).click()})),c.ac(12,"mat-icon"),c.Hc(13," cloud_upload "),c.Zb(),c.Zb(),c.Zb(),c.ac(14,"div",5),c.ac(15,"div",6),c.Fc(16,P,8,10,"div",7),c.Zb(),c.Zb(),c.ac(17,"mat-menu",8,9),c.Fc(19,U,17,7,"ng-template",10),c.Zb(),c.ac(20,"mat-menu",null,11),c.Fc(22,G,1,1,"ng-template",10),c.Zb(),c.Zb(),c.Fc(23,$,1,0,"ngx-file-drop",12),c.ac(24,"input",13,14),c.ic("change",(function(e){return t.uploadFile(e)})),c.Zb()}2&e&&(c.Ib(2),c.rc("ngIf",t.canNavigateUp),c.Ib(2),c.Jc(" ",t.path||"Files"," "),c.Ib(2),c.rc("ngIf",t.selected.length),c.Ib(1),c.rc("ngIf",t.selected.length),c.Ib(9),c.rc("ngForOf",t._fileElements),c.Ib(1),c.rc("overlapTrigger",!1),c.Ib(6),c.rc("ngIf",t.dragged))},directives:[_.a,i.k,C.a,D.a,T.a,C.b,i.j,M.e,M.a,M.d,i.l,S.a,M.b,v],styles:[".file-or-folder[_ngcontent-%COMP%]{padding:8px;overflow:hidden}.file-or-folder-icon[_ngcontent-%COMP%]{width:50px;height:50px;font-size:50px}.pointer[_ngcontent-%COMP%]{cursor:pointer}.element-container[_ngcontent-%COMP%]{padding:15px;width:100px;word-break:break-all}.small-font[_ngcontent-%COMP%]{font-size:small}"],changeDetection:0}),e})()}}]);