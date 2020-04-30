(function(e){function t(t){for(var r,a,o=t[0],u=t[1],c=t[2],l=0,p=[];l<o.length;l++)a=o[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&p.push(i[a][0]),i[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==i[u]&&(r=!1)}r&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},i={app:0},s=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var d=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),i=n.n(r);i.a},1:function(e,t){},"199c":function(e,t,n){"use strict";(function(e){n("99af"),n("4de4"),n("4160"),n("d81d"),n("a9e3"),n("d3b7"),n("25f0"),n("159b");var r=n("b85c"),i=(n("96cf"),n("1da1")),s=n("7da2"),a=n("bc3a");t["a"]={name:"App",data:function(){return{keypair:{publickey:"",privatekey:""},multisig:{address:"",redeemScript:""},publickeys:[],inputs:1,reqsig:1,unsignedTx:{myAddress:"",receiver:"",amount:0,message:"",hex:""},signedTx:{rawtx:"",privatekey:"",redeemScript:"",hex:""},finalisedTx:{rawtx:"",hex:""}}},methods:{generateKeypair:function(){var e=s.networks.zelcash,t=s.ECPair.makeRandom({network:e}),n=t.getPublicKeyBuffer().toString("hex");this.keypair.publickey=n,this.keypair.privatekey=t.toWIF()},generateMultisig:function(){try{var t=this.publickeys.filter((function(e){return null!=e&&""!=e})),n=t.map((function(t){return e.from(t,"hex")})),r=s.script.multisig.output.encode(Number(this.reqsig),n),i=r.toString("hex"),a=s.script.scriptHash.output.encode(s.crypto.hash160(r)),o=s.networks.zelcash,u=s.address.fromOutputScript(a,o);this.multisig.address=u,this.multisig.redeemScript=i}catch(c){console.log(c),this.multisig.address=c.message,this.multisig.redeemScript=c.message}},addPubKey:function(){this.inputs+=1},buildUnsignedRawTx:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var r,i,o,u,c,d,l,p,g,v,m,x,f,b;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,r=s.networks.zelcash,n.next=4,a.get("https://explorer.zel.cash/api/addr/".concat(t.unsignedTx.myAddress,"/utxo"));case 4:i=n.sent,o=i.data,u=0,c=[],d=Math.round(1e8*Number(t.unsignedTx.amount)),l=1e3,p=[{address:t.unsignedTx.receiver,satoshis:d}],g=0;case 12:if(!(g<o.length)){n.next=21;break}if(0===o[g].height){n.next=18;break}if(c=c.concat({txid:o[g].txid,vout:o[g].vout,scriptPubKey:o[g].scriptPubKey,satoshis:o[g].satoshis}),u+=o[g].satoshis,!(u>=d+l)){n.next=18;break}return n.abrupt("break",21);case 18:g+=1,n.next=12;break;case 21:if(v=u-d-l,v>0&&(p=p.concat({address:t.unsignedTx.myAddress,satoshis:v})),!(v<0)){n.next=26;break}return t.unsignedTx.hex="Insufficient amount",n.abrupt("return");case 26:m=new s.TransactionBuilder(r,l),m.setVersion(4),m.setVersionGroupId(2301567109),c.forEach((function(e){return m.addInput(e.txid,e.vout,e.satoshis)})),p.forEach((function(e){return m.addOutput(e.address,e.satoshis)})),""!==t.unsignedTx.message&&(x=e.from(t.unsignedTx.message,"utf8"),f=s.script.nullData.output.encode(x),m.addOutput(f,0)),b=m.buildIncomplete(),t.unsignedTx.hex=b.toHex(),n.next=40;break;case 36:n.prev=36,n.t0=n["catch"](0),console.log(n.t0),t.unsignedTx.hex=n.t0.message;case 40:case"end":return n.stop()}}),n,null,[[0,36]])})))()},signTransaction:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var i,o,u,c,d,l,p,g,v,m,x,f,b;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:n.prev=0,i=s.networks.zelcash,o=s.Transaction.SIGHASH_ALL,u=t.signedTx.rawtx,c=s.ECPair.fromWIF(t.signedTx.privatekey,i),d=s.TransactionBuilder.fromTransaction(s.Transaction.fromHex(u,i),i),console.log(d),l=0,p=Object(r["a"])(d.inputs),n.prev=9,p.s();case 11:if((g=p.n()).done){n.next=25;break}return g.value,v=t.getValueHexBuffer(d.tx.ins[l].hash.toString("hex")),m=d.tx.ins[l].index,console.log(d.tx),console.log(v),n.next=19,a.get("https://explorer.zel.cash/api/tx/".concat(v));case 19:x=n.sent,f=Math.round(1e8*Number(x.data.vout[m].value)),d.sign(l,c,e.from(t.signedTx.redeemScript,"hex"),o,f),l+=1;case 23:n.next=11;break;case 25:n.next=30;break;case 27:n.prev=27,n.t0=n["catch"](9),p.e(n.t0);case 30:return n.prev=30,p.f(),n.finish(30);case 33:b=d.buildIncomplete(),t.signedTx.hex=b.toHex(),n.next=41;break;case 37:n.prev=37,n.t1=n["catch"](0),console.log(n.t1),t.signedTx.hex=n.t1.message;case 41:case"end":return n.stop()}}),n,null,[[0,37],[9,27,30,33]])})))()},finaliseTransaction:function(){try{var e=s.networks.zelcash,t=this.finalisedTx.rawtx,n=s.TransactionBuilder.fromTransaction(s.Transaction.fromHex(t,e),e),r=n.build();this.finalisedTx.hex=r.toHex()}catch(i){console.log(i),this.signedTx.hex=i.message}},getValueHexBuffer:function(t){var n=e.from(t,"hex").reverse();return n.toString("hex")}}}}).call(this,n("b639").Buffer)},2:function(e,t){},3:function(e,t){},4:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",[e._v("Welcome to ZEL multisig")]),n("hr"),n("h3",[e._v(" Keypair generation tool ")]),n("p",[e._v(" This tool generates a Public Key and corresponding private key that can later be used for MultiSignature address. ")]),n("div",[n("button",{on:{click:e.generateKeypair}},[e._v(" Generate Keypair ")]),n("br"),e._v(" Public Key: "+e._s(e.keypair.publickey)+" "),n("br"),e._v(" Private Key: "+e._s(e.keypair.privatekey)+" ")]),n("hr"),n("h3",[e._v(" Multi Signature address generation tool ")]),n("p",[e._v(" This tool generates a Multisignature address from given set of Public Keys and required signatures needed. ")]),n("div",[e._l(e.inputs,(function(t){return n("div",{key:t},[e._v(" Public Key "+e._s(t)+": "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.publickeys[t-1],expression:"publickeys[n-1]"}],staticClass:"pubkey",domProps:{value:e.publickeys[t-1]},on:{input:function(n){n.target.composing||e.$set(e.publickeys,t-1,n.target.value)}}})])})),n("br"),n("button",{on:{click:e.addPubKey}},[e._v(" Add Public Key Input ")]),n("br"),n("br"),n("div",[e._v(" Signatures needed: "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.reqsig,expression:"reqsig"}],domProps:{value:e.reqsig},on:{input:function(t){t.target.composing||(e.reqsig=t.target.value)}}}),n("br"),n("br"),n("button",{on:{click:e.generateMultisig}},[e._v(" Generate Multisig Address ")]),n("br"),n("br"),e._v(" Address: "+e._s(e.multisig.address)+" "),n("br"),e._v(" Redeem Script: "+e._s(e.multisig.redeemScript)+" ")])],2),n("hr"),n("div",[n("h3",[e._v(" Build Unsigned Transaction ")]),n("p",[e._v(" This tool helps you build an unsigned transaction. ")]),e._v(" My Address: "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.unsignedTx.myAddress,expression:"unsignedTx.myAddress"}],staticClass:"pubkey",domProps:{value:e.unsignedTx.myAddress},on:{input:function(t){t.target.composing||e.$set(e.unsignedTx,"myAddress",t.target.value)}}}),n("br"),e._v(" Receiver Address: "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.unsignedTx.receiver,expression:"unsignedTx.receiver"}],staticClass:"pubkey",domProps:{value:e.unsignedTx.receiver},on:{input:function(t){t.target.composing||e.$set(e.unsignedTx,"receiver",t.target.value)}}}),n("br"),e._v(" Amount to Send: "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.unsignedTx.amount,expression:"unsignedTx.amount"}],staticClass:"pubkey",domProps:{value:e.unsignedTx.amount},on:{input:function(t){t.target.composing||e.$set(e.unsignedTx,"amount",t.target.value)}}}),n("br"),e._v(" Message to Send: "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.unsignedTx.message,expression:"unsignedTx.message"}],staticClass:"pubkey",domProps:{value:e.unsignedTx.message},on:{input:function(t){t.target.composing||e.$set(e.unsignedTx,"message",t.target.value)}}}),n("br"),n("br"),n("button",{on:{click:e.buildUnsignedRawTx}},[e._v(" Build! ")]),n("br"),n("br"),e._v(" Raw Transaction: "+e._s(e.unsignedTx.hex)+" ")]),n("hr"),n("div",[n("h3",[e._v(" Sign Transaction ")]),n("p",[e._v(" This tool signs a transaction that is being performed from a multisig address with your private key. Fee is 10000 satoshis. ")]),e._v(" My Private Key: "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.signedTx.privatekey,expression:"signedTx.privatekey"}],staticClass:"pubkey",domProps:{value:e.signedTx.privatekey},on:{input:function(t){t.target.composing||e.$set(e.signedTx,"privatekey",t.target.value)}}}),n("br"),e._v(" My Multisig address Redeem Script: "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.signedTx.redeemScript,expression:"signedTx.redeemScript"}],staticClass:"pubkey",domProps:{value:e.signedTx.redeemScript},on:{input:function(t){t.target.composing||e.$set(e.signedTx,"redeemScript",t.target.value)}}}),e._v(" "),n("br"),e._v(" Transaction to sign: "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.signedTx.rawtx,expression:"signedTx.rawtx"}],staticClass:"pubkey",domProps:{value:e.signedTx.rawtx},on:{input:function(t){t.target.composing||e.$set(e.signedTx,"rawtx",t.target.value)}}}),e._v(" "),n("br"),n("br"),n("button",{on:{click:e.signTransaction}},[e._v(" Sign! ")]),n("br"),n("br"),e._v(" Raw Transaction: "+e._s(e.signedTx.hex)+" ")]),n("hr"),n("div",[n("h3",[e._v(" Finalise Transaction ")]),n("p",[e._v(" This tool finalises a transaction that was previously signed. ")]),e._v(" Transaction to finalise: "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.finalisedTx.rawtx,expression:"finalisedTx.rawtx"}],staticClass:"pubkey",domProps:{value:e.finalisedTx.rawtx},on:{input:function(t){t.target.composing||e.$set(e.finalisedTx,"rawtx",t.target.value)}}}),e._v(" "),n("br"),n("br"),n("button",{on:{click:e.finaliseTransaction}},[e._v(" Finalise! ")]),n("br"),n("br"),e._v(" Finalised Transaction: "+e._s(e.finalisedTx.hex)+" ")])])},s=[],a=n("199c"),o=a["a"],u=(n("034f"),n("2877")),c=Object(u["a"])(o,i,s,!1,null,null,null),d=c.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(d)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.c195e881.js.map