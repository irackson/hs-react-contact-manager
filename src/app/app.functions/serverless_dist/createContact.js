/******/(()=>{// webpackBootstrap
/******/var e={
/***/1873:
/***/(e,a,i)=>{e.exports={parallel:i(8798),serial:i(2081),serialOrdered:i(28)};
/***/},
/***/4555:
/***/e=>{
/**
 * Cleans up leftover job by invoking abort function for the provided job id
 *
 * @this  state
 * @param {string|number} key - job id to abort
 */
function a(e){"function"==typeof this.jobs[e]&&this.jobs[e]()}
/***/
// API
e.exports=
/**
 * Aborts leftover active jobs
 *
 * @param {object} state - current state object
 */
function(e){Object.keys(e.jobs).forEach(a.bind(e)),
// reset leftover jobs
e.jobs={}}},
/***/2313:
/***/(e,a,i)=>{var n=i(405);
// API
e.exports=
/**
 * Runs provided callback asynchronously
 * even if callback itself is not
 *
 * @param   {function} callback - callback to invoke
 * @returns {function} - augmented callback
 */
function(e){var a=!1;
// check if async happened
return n((function(){a=!0})),function(i,t){a?e(i,t):n((function(){e(i,t)}))}}
/***/},
/***/405:
/***/e=>{e.exports=
/**
 * Runs provided function on next iteration of the event loop
 *
 * @param {function} fn - function to run
 */
function(e){var a="function"==typeof setImmediate?setImmediate:"object"==typeof process&&"function"==typeof process.nextTick?process.nextTick:null;a?a(e):setTimeout(e,0)}
/***/},
/***/8051:
/***/(e,a,i)=>{var n=i(2313),t=i(4555);
// API
e.exports=
/**
 * Iterates over each job object
 *
 * @param {array|object} list - array or object (named list) to iterate over
 * @param {function} iterator - iterator to run
 * @param {object} state - current job status
 * @param {function} callback - invoked when all elements processed
 */
function(e,a,i,s){
// store current index
var o=i.keyedList?i.keyedList[i.index]:i.index;i.jobs[o]=
/**
 * Runs iterator over provided job element
 *
 * @param   {function} iterator - iterator to invoke
 * @param   {string|number} key - key/index of the element in the list of jobs
 * @param   {mixed} item - job description
 * @param   {function} callback - invoked after iterator is done with the job
 * @returns {function|mixed} - job abort function or something else
 */
function(e,a,i,t){var s;
// allow shortcut if iterator expects only two arguments
s=2==e.length?e(i,n(t)):e(i,a,n(t));return s}
/***/(a,o,e[o],(function(e,a){
// don't repeat yourself
// skip secondary callbacks
o in i.jobs&&(
// clean up jobs
delete i.jobs[o],e?
// don't process rest of the results
// stop still active jobs
// and reset the list
t(i):i.results[o]=a,
// return salvaged results
s(e,i.results))}))}},
/***/9500:
/***/e=>{
// API
e.exports=
/**
 * Creates initial state object
 * for iteration over list
 *
 * @param   {array|object} list - list to iterate over
 * @param   {function|null} sortMethod - function to use for keys sort,
 *                                     or `null` to keep them as is
 * @returns {object} - initial state object
 */
function(e,a){var i=!Array.isArray(e),n={index:0,keyedList:i||a?Object.keys(e):null,jobs:{},results:i?{}:[],size:i?Object.keys(e).length:e.length};a&&
// sort array keys based on it's values
// sort object's keys just on own merit
n.keyedList.sort(i?a:function(i,n){return a(e[i],e[n])});return n}
/***/},
/***/6276:
/***/(e,a,i)=>{var n=i(4555),t=i(2313);
// API
e.exports=
/**
 * Terminates jobs in the attached state context
 *
 * @this  AsyncKitState#
 * @param {function} callback - final callback to invoke after termination
 */
function(e){if(!Object.keys(this.jobs).length)return;
// fast forward iteration index
this.index=this.size,
// abort jobs
n(this),
// send back results we have so far
t(e)(null,this.results)}
/***/},
/***/8798:
/***/(e,a,i)=>{var n=i(8051),t=i(9500),s=i(6276);
// Public API
e.exports=
/**
 * Runs iterator over provided array elements in parallel
 *
 * @param   {array|object} list - array or object (named list) to iterate over
 * @param   {function} iterator - iterator to run
 * @param   {function} callback - invoked when all elements processed
 * @returns {function} - jobs terminator
 */
function(e,a,i){var o=t(e);for(;o.index<(o.keyedList||e).length;)n(e,a,o,(function(e,a){e?i(e,a):
// looks like it's the last one
0!==Object.keys(o.jobs).length||i(null,o.results)})),o.index++;return s.bind(o,i)}
/***/},
/***/2081:
/***/(e,a,i)=>{var n=i(28);
// Public API
e.exports=
/**
 * Runs iterator over provided array elements in series
 *
 * @param   {array|object} list - array or object (named list) to iterate over
 * @param   {function} iterator - iterator to run
 * @param   {function} callback - invoked when all elements processed
 * @returns {function} - jobs terminator
 */
function(e,a,i){return n(e,a,null,i)}
/***/},
/***/28:
/***/(e,a,i)=>{var n=i(8051),t=i(9500),s=i(6276);
// Public API
/*
 * -- Sort methods
 */
/**
 * sort helper to sort array elements in ascending order
 *
 * @param   {mixed} a - an item to compare
 * @param   {mixed} b - an item to compare
 * @returns {number} - comparison result
 */
function o(e,a){return e<a?-1:e>a?1:0}
/**
 * sort helper to sort array elements in descending order
 *
 * @param   {mixed} a - an item to compare
 * @param   {mixed} b - an item to compare
 * @returns {number} - comparison result
 */e.exports=
/**
 * Runs iterator over provided sorted array elements in series
 *
 * @param   {array|object} list - array or object (named list) to iterate over
 * @param   {function} iterator - iterator to run
 * @param   {function} sortMethod - custom sort function
 * @param   {function} callback - invoked when all elements processed
 * @returns {function} - jobs terminator
 */
function(e,a,i,o){var r=t(e,i);return n(e,a,r,(function i(t,s){t?o(t,s):(r.index++,
// are we there yet?
r.index<(r.keyedList||e).length?n(e,a,r,i):
// done here
o(null,r.results))})),s.bind(r,o)},
// sorting helpers
e.exports.ascending=o,e.exports.descending=function(e,a){return-1*o(e,a)}
/***/},
/***/2505:
/***/(e,a,i)=>{e.exports=i(8015);
/***/},
/***/7960:
/***/(e,a,i)=>{"use strict";var n=i(9516),t=i(7522),s=i(9615),o=i(9106),r=i(8611),c=i(5692),p=i(3164).http,l=i(3164).https,u=i(7016),d=i(3106),m=i(9641).version,h=i(4896),f=i(5845),x=i(8563),v=/https:?/,b=["http:","https:","file:"];
/**
 *
 * @param {http.ClientRequestArgs} options
 * @param {AxiosProxyConfig} proxy
 * @param {string} location
 */
function g(e,a,i){
// Basic proxy authorization
if(e.hostname=a.host,e.host=a.host,e.port=a.port,e.path=i,a.auth){var n=Buffer.from(a.auth.username+":"+a.auth.password,"utf8").toString("base64");e.headers["Proxy-Authorization"]="Basic "+n}
// If a proxy is used, any redirects must also pass through the proxy
e.beforeRedirect=function(e){e.headers.host=e.host,g(e,a,e.href)}}
/*eslint consistent-return:0*/e.exports=function(e){return new Promise((function(a,i){var y;function _(){e.cancelToken&&e.cancelToken.unsubscribe(y),e.signal&&e.signal.removeEventListener("abort",y)}var k=function(e){_(),a(e)},w=!1,E=function(e){_(),w=!0,i(e)},T=e.data,j=e.headers,N={};
// support for https://www.npmjs.com/package/form-data api
if(Object.keys(j).forEach((function(e){N[e.toLowerCase()]=e})),
// Set User-Agent (required by some servers)
// See https://github.com/axios/axios/issues/69
"user-agent"in N?
// User-Agent is specified; handle case where no UA header is desired
j[N["user-agent"]]||delete j[N["user-agent"]]:
// Only set header if it hasn't been set in config
j["User-Agent"]="axios/"+m,n.isFormData(T)&&n.isFunction(T.getHeaders))Object.assign(j,T.getHeaders());else if(T&&!n.isStream(T)){if(Buffer.isBuffer(T));else if(n.isArrayBuffer(T))T=Buffer.from(new Uint8Array(T));else{if(!n.isString(T))return E(new f("Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream",f.ERR_BAD_REQUEST,e));T=Buffer.from(T,"utf-8")}if(e.maxBodyLength>-1&&T.length>e.maxBodyLength)return E(new f("Request body larger than maxBodyLength limit",f.ERR_BAD_REQUEST,e));
// Add Content-Length header if data exists
N["content-length"]||(j["Content-Length"]=T.length)}
// HTTP basic authentication
var O=void 0;e.auth&&(O=(e.auth.username||"")+":"+(e.auth.password||""));
// Parse url
var A=s(e.baseURL,e.url),S=u.parse(A),I=S.protocol||b[0];if(-1===b.indexOf(I))return E(new f("Unsupported protocol "+I,f.ERR_BAD_REQUEST,e));if(!O&&S.auth){var R=S.auth.split(":");O=(R[0]||"")+":"+(R[1]||"")}O&&N.authorization&&delete j[N.authorization];var C=v.test(I),D=C?e.httpsAgent:e.httpAgent;try{o(S.path,e.params,e.paramsSerializer).replace(/^\?/,"")}catch(a){var L=new Error(a.message);L.config=e,L.url=e.url,L.exists=!0,E(L)}var z={path:o(S.path,e.params,e.paramsSerializer).replace(/^\?/,""),method:e.method.toUpperCase(),headers:j,agent:D,agents:{http:e.httpAgent,https:e.httpsAgent},auth:O};e.socketPath?z.socketPath=e.socketPath:(z.hostname=S.hostname,z.port=S.port);var P,F=e.proxy;if(!F&&!1!==F){var B=I.slice(0,-1)+"_proxy",U=process.env[B]||process.env[B.toUpperCase()];if(U){var q=u.parse(U),M=process.env.no_proxy||process.env.NO_PROXY,Z=!0;if(M)Z=!M.split(",").map((function(e){return e.trim()})).some((function(e){return!!e&&("*"===e||("."===e[0]&&S.hostname.substr(S.hostname.length-e.length)===e||S.hostname===e))}));if(Z&&(F={host:q.hostname,port:q.port,protocol:q.protocol},q.auth)){var $=q.auth.split(":");F.auth={username:$[0],password:$[1]}}}}F&&(z.headers.host=S.hostname+(S.port?":"+S.port:""),g(z,F,I+"//"+S.hostname+(S.port?":"+S.port:"")+z.path));var V=C&&(!F||v.test(F.protocol));e.transport?P=e.transport:0===e.maxRedirects?P=V?c:r:(e.maxRedirects&&(z.maxRedirects=e.maxRedirects),e.beforeRedirect&&(z.beforeRedirect=e.beforeRedirect),P=V?l:p),e.maxBodyLength>-1&&(z.maxBodyLength=e.maxBodyLength),e.insecureHTTPParser&&(z.insecureHTTPParser=e.insecureHTTPParser);
// Create the request
var K=P.request(z,(function(a){if(!K.aborted){
// uncompress the response body transparently if required
var i=a,s=a.req||K;
// return the last request in case of redirects
// if no content, is HEAD request or decompress disabled we should not decompress
if(204!==a.statusCode&&"HEAD"!==s.method&&!1!==e.decompress)switch(a.headers["content-encoding"]){
/*eslint default-case:0*/
case"gzip":case"compress":case"deflate":
// add the unzipper to the body stream processing pipeline
i=i.pipe(d.createUnzip()),
// remove the content-encoding in order to not confuse downstream operations
delete a.headers["content-encoding"]}var o={status:a.statusCode,statusText:a.statusMessage,headers:a.headers,config:e,request:s};if("stream"===e.responseType)o.data=i,t(k,E,o);else{var r=[],c=0;i.on("data",(function(a){r.push(a),c+=a.length,
// make sure the content length is not over the maxContentLength if specified
e.maxContentLength>-1&&c>e.maxContentLength&&(
// stream.destoy() emit aborted event before calling reject() on Node.js v16
w=!0,i.destroy(),E(new f("maxContentLength size of "+e.maxContentLength+" exceeded",f.ERR_BAD_RESPONSE,e,s)))})),i.on("aborted",(function(){w||(i.destroy(),E(new f("maxContentLength size of "+e.maxContentLength+" exceeded",f.ERR_BAD_RESPONSE,e,s)))})),i.on("error",(function(a){K.aborted||E(f.from(a,null,e,s))})),i.on("end",(function(){try{var a=1===r.length?r[0]:Buffer.concat(r);"arraybuffer"!==e.responseType&&(a=a.toString(e.responseEncoding),e.responseEncoding&&"utf8"!==e.responseEncoding||(a=n.stripBOM(a))),o.data=a}catch(a){E(f.from(a,null,e,o.request,o))}t(k,E,o)}))}}}));
// Handle errors
// Handle request timeout
if(K.on("error",(function(a){
// @todo remove
// if (req.aborted && err.code !== AxiosError.ERR_FR_TOO_MANY_REDIRECTS) return;
E(f.from(a,null,e,K))})),
// set tcp keep alive to prevent drop connection by peer
K.on("socket",(function(e){
// default interval of sending ack packet is 1 minute
e.setKeepAlive(!0,6e4)})),e.timeout){
// This is forcing a int timeout to avoid problems if the `req` interface doesn't handle other types.
var Y=parseInt(e.timeout,10);if(isNaN(Y))return void E(new f("error trying to parse `config.timeout` to int",f.ERR_BAD_OPTION_VALUE,e,K));
// Sometime, the response will be very slow, and does not respond, the connect event will be block by event loop system.
// And timer callback will be fired, and abort() will be invoked before connection, then get "socket hang up" and code ECONNRESET.
// At this time, if we have a large number of request, nodejs will hang up some socket on background. and the number will up and up.
// And then these socket which be hang up will devoring CPU little by little.
// ClientRequest.setTimeout will be fired on the specify milliseconds, and can make sure that abort() will be fired after connect.
K.setTimeout(Y,(function(){K.abort();var a=e.transitional||h;E(new f("timeout of "+Y+"ms exceeded",a.clarifyTimeoutError?f.ETIMEDOUT:f.ECONNABORTED,e,K))}))}(e.cancelToken||e.signal)&&(
// Handle cancellation
// eslint-disable-next-line func-names
y=function(e){K.aborted||(K.abort(),E(!e||e&&e.type?new x:e))},e.cancelToken&&e.cancelToken.subscribe(y),e.signal&&(e.signal.aborted?y():e.signal.addEventListener("abort",y))),
// Send the request
n.isStream(T)?T.on("error",(function(a){E(f.from(a,e,null,K))})).pipe(K):K.end(T)}))}}
/***/,
/***/5592:
/***/(e,a,i)=>{"use strict";var n=i(9516),t=i(7522),s=i(3948),o=i(9106),r=i(9615),c=i(2012),p=i(4202),l=i(4896),u=i(5845),d=i(8563),m=i(5656);e.exports=function(e){return new Promise((function(a,i){var h,f=e.data,x=e.headers,v=e.responseType;function b(){e.cancelToken&&e.cancelToken.unsubscribe(h),e.signal&&e.signal.removeEventListener("abort",h)}n.isFormData(f)&&n.isStandardBrowserEnv()&&delete x["Content-Type"];var g=new XMLHttpRequest;
// HTTP basic authentication
if(e.auth){var y=e.auth.username||"",_=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";x.Authorization="Basic "+btoa(y+":"+_)}var k=r(e.baseURL,e.url);function w(){if(g){
// Prepare the response
var n="getAllResponseHeaders"in g?c(g.getAllResponseHeaders()):null,s={data:v&&"text"!==v&&"json"!==v?g.response:g.responseText,status:g.status,statusText:g.statusText,headers:n,config:e,request:g};t((function(e){a(e),b()}),(function(e){i(e),b()}),s),
// Clean up request
g=null}}
// Add xsrf header
// This is only done if running in a standard browser environment.
// Specifically not if we're in a web worker, or react-native.
if(g.open(e.method.toUpperCase(),o(k,e.params,e.paramsSerializer),!0),
// Set the request timeout in MS
g.timeout=e.timeout,"onloadend"in g?
// Use onloadend if available
g.onloadend=w:
// Listen for ready state to emulate onloadend
g.onreadystatechange=function(){g&&4===g.readyState&&(0!==g.status||g.responseURL&&0===g.responseURL.indexOf("file:"))&&
// readystate handler is calling before onerror or ontimeout handlers,
// so we should call onloadend on the next 'tick'
setTimeout(w);
// The request errored out and we didn't get a response, this will be
// handled by onerror instead
// With one exception: request that using file: protocol, most browsers
// will return status as 0 even though it's a successful request
},
// Handle browser request cancellation (as opposed to a manual cancellation)
g.onabort=function(){g&&(i(new u("Request aborted",u.ECONNABORTED,e,g)),
// Clean up request
g=null)},
// Handle low level network errors
g.onerror=function(){
// Real errors are hidden from us by the browser
// onerror should only fire if it's a network error
i(new u("Network Error",u.ERR_NETWORK,e,g,g)),
// Clean up request
g=null},
// Handle timeout
g.ontimeout=function(){var a=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",n=e.transitional||l;e.timeoutErrorMessage&&(a=e.timeoutErrorMessage),i(new u(a,n.clarifyTimeoutError?u.ETIMEDOUT:u.ECONNABORTED,e,g)),
// Clean up request
g=null},n.isStandardBrowserEnv()){
// Add xsrf header
var E=(e.withCredentials||p(k))&&e.xsrfCookieName?s.read(e.xsrfCookieName):void 0;E&&(x[e.xsrfHeaderName]=E)}
// Add headers to the request
"setRequestHeader"in g&&n.forEach(x,(function(e,a){void 0===f&&"content-type"===a.toLowerCase()?
// Remove Content-Type if data is undefined
delete x[a]:
// Otherwise add header to the request
g.setRequestHeader(a,e)})),
// Add withCredentials to request if needed
n.isUndefined(e.withCredentials)||(g.withCredentials=!!e.withCredentials),
// Add responseType to request if needed
v&&"json"!==v&&(g.responseType=e.responseType),
// Handle progress if needed
"function"==typeof e.onDownloadProgress&&g.addEventListener("progress",e.onDownloadProgress),
// Not all browsers support upload events
"function"==typeof e.onUploadProgress&&g.upload&&g.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(
// Handle cancellation
// eslint-disable-next-line func-names
h=function(e){g&&(i(!e||e&&e.type?new d:e),g.abort(),g=null)},e.cancelToken&&e.cancelToken.subscribe(h),e.signal&&(e.signal.aborted?h():e.signal.addEventListener("abort",h))),f||(f=null);var T=m(k);T&&-1===["http","https","file"].indexOf(T)?i(new u("Unsupported protocol "+T+":",u.ERR_BAD_REQUEST,e)):
// Send the request
g.send(f)}))}}
/***/,
/***/8015:
/***/(e,a,i)=>{"use strict";var n=i(9516),t=i(9012),s=i(5155),o=i(5343);
// Create the default instance to be exported
var r=
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function e(a){var i=new s(a),r=t(s.prototype.request,i);
// Copy axios.prototype to instance
return n.extend(r,s.prototype,i),
// Copy context to instance
n.extend(r,i),
// Factory for creating new instances
r.create=function(i){return e(o(a,i))},r}(i(7412));
// Expose Axios class to allow class inheritance
r.Axios=s,
// Expose Cancel & CancelToken
r.CanceledError=i(8563),r.CancelToken=i(3191),r.isCancel=i(3864),r.VERSION=i(9641).version,r.toFormData=i(6440),
// Expose AxiosError class
r.AxiosError=i(5845),
// alias for CanceledError for backward compatibility
r.Cancel=r.CanceledError,
// Expose all/spread
r.all=function(e){return Promise.all(e)},r.spread=i(7980),
// Expose isAxiosError
r.isAxiosError=i(5019),e.exports=r,
// Allow use of default import syntax in TypeScript
e.exports.default=r}
/***/,
/***/3191:
/***/(e,a,i)=>{"use strict";var n=i(8563);
/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */function t(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var a;this.promise=new Promise((function(e){a=e}));var i=this;
// eslint-disable-next-line func-names
this.promise.then((function(e){if(i._listeners){var a,n=i._listeners.length;for(a=0;a<n;a++)i._listeners[a](e);i._listeners=null}})),
// eslint-disable-next-line func-names
this.promise.then=function(e){var a,n=new Promise((function(e){i.subscribe(e),a=e})).then(e);
// eslint-disable-next-line func-names
return n.cancel=function(){i.unsubscribe(a)},n},e((function(e){i.reason||(i.reason=new n(e),a(i.reason))}))}
/**
 * Throws a `CanceledError` if cancellation has been requested.
 */t.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},
/**
 * Subscribe to the cancel signal
 */
t.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},
/**
 * Unsubscribe from the cancel signal
 */
t.prototype.unsubscribe=function(e){if(this._listeners){var a=this._listeners.indexOf(e);-1!==a&&this._listeners.splice(a,1)}},
/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
t.source=function(){var e;return{token:new t((function(a){e=a})),cancel:e}},e.exports=t}
/***/,
/***/8563:
/***/(e,a,i)=>{"use strict";var n=i(5845);
/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function t(e){
// eslint-disable-next-line no-eq-null,eqeqeq
n.call(this,null==e?"canceled":e,n.ERR_CANCELED),this.name="CanceledError"}i(9516).inherits(t,n,{__CANCEL__:!0}),e.exports=t}
/***/,
/***/3864:
/***/e=>{"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}}
/***/,
/***/5155:
/***/(e,a,i)=>{"use strict";var n=i(9516),t=i(9106),s=i(3471),o=i(4490),r=i(5343),c=i(9615),p=i(4841),l=p.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function u(e){this.defaults=e,this.interceptors={request:new s,response:new s}}
/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */u.prototype.request=function(e,a){
/*eslint no-param-reassign:0*/
// Allow for axios('example/url'[, config]) a la fetch API
"string"==typeof e?(a=a||{}).url=e:a=e||{},
// Set config.method
(a=r(this.defaults,a)).method?a.method=a.method.toLowerCase():this.defaults.method?a.method=this.defaults.method.toLowerCase():a.method="get";var i=a.transitional;void 0!==i&&p.assertOptions(i,{silentJSONParsing:l.transitional(l.boolean),forcedJSONParsing:l.transitional(l.boolean),clarifyTimeoutError:l.transitional(l.boolean)},!1);
// filter out skipped interceptors
var n=[],t=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(a)||(t=t&&e.synchronous,n.unshift(e.fulfilled,e.rejected))}));var s,c=[];if(this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)})),!t){var u=[o,void 0];for(Array.prototype.unshift.apply(u,n),u=u.concat(c),s=Promise.resolve(a);u.length;)s=s.then(u.shift(),u.shift());return s}for(var d=a;n.length;){var m=n.shift(),h=n.shift();try{d=m(d)}catch(e){h(e);break}}try{s=o(d)}catch(e){return Promise.reject(e)}for(;c.length;)s=s.then(c.shift(),c.shift());return s},u.prototype.getUri=function(e){e=r(this.defaults,e);var a=c(e.baseURL,e.url);return t(a,e.params,e.paramsSerializer)},
// Provide aliases for supported request methods
n.forEach(["delete","get","head","options"],(function(e){
/*eslint func-names:0*/
u.prototype[e]=function(a,i){return this.request(r(i||{},{method:e,url:a,data:(i||{}).data}))}})),n.forEach(["post","put","patch"],(function(e){
/*eslint func-names:0*/
function a(a){return function(i,n,t){return this.request(r(t||{},{method:e,headers:a?{"Content-Type":"multipart/form-data"}:{},url:i,data:n}))}}u.prototype[e]=a(),u.prototype[e+"Form"]=a(!0)})),e.exports=u}
/***/,
/***/5845:
/***/(e,a,i)=>{"use strict";var n=i(9516);
/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */function t(e,a,i,n,t){Error.call(this),this.message=e,this.name="AxiosError",a&&(this.code=a),i&&(this.config=i),n&&(this.request=n),t&&(this.response=t)}n.inherits(t,Error,{toJSON:function(){return{
// Standard
message:this.message,name:this.name,
// Microsoft
description:this.description,number:this.number,
// Mozilla
fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,
// Axios
config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var s=t.prototype,o={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach((function(e){o[e]={value:e}})),Object.defineProperties(t,o),Object.defineProperty(s,"isAxiosError",{value:!0}),
// eslint-disable-next-line func-names
t.from=function(e,a,i,o,r,c){var p=Object.create(s);return n.toFlatObject(e,p,(function(e){return e!==Error.prototype})),t.call(p,e.message,a,i,o,r),p.name=e.name,c&&Object.assign(p,c),p},e.exports=t}
/***/,
/***/3471:
/***/(e,a,i)=>{"use strict";var n=i(9516);function t(){this.handlers=[]}
/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */t.prototype.use=function(e,a,i){return this.handlers.push({fulfilled:e,rejected:a,synchronous:!!i&&i.synchronous,runWhen:i?i.runWhen:null}),this.handlers.length-1},
/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
t.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},
/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
t.prototype.forEach=function(e){n.forEach(this.handlers,(function(a){null!==a&&e(a)}))},e.exports=t}
/***/,
/***/9615:
/***/(e,a,i)=>{"use strict";var n=i(9137),t=i(4680);
/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
e.exports=function(e,a){return e&&!n(a)?t(e,a):a}}
/***/,
/***/4490:
/***/(e,a,i)=>{"use strict";var n=i(9516),t=i(2881),s=i(3864),o=i(7412),r=i(8563);
/**
 * Throws a `CanceledError` if cancellation has been requested.
 */
function c(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new r}
/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */e.exports=function(e){return c(e),
// Ensure headers exist
e.headers=e.headers||{},
// Transform request data
e.data=t.call(e,e.data,e.headers,e.transformRequest),
// Flatten headers
e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(a){delete e.headers[a]})),(e.adapter||o.adapter)(e).then((function(a){return c(e),
// Transform response data
a.data=t.call(e,a.data,a.headers,e.transformResponse),a}),(function(a){return s(a)||(c(e),
// Transform response data
a&&a.response&&(a.response.data=t.call(e,a.response.data,a.response.headers,e.transformResponse))),Promise.reject(a)}))}}
/***/,
/***/5343:
/***/(e,a,i)=>{"use strict";var n=i(9516);
/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */e.exports=function(e,a){
// eslint-disable-next-line no-param-reassign
a=a||{};var i={};function t(e,a){return n.isPlainObject(e)&&n.isPlainObject(a)?n.merge(e,a):n.isPlainObject(a)?n.merge({},a):n.isArray(a)?a.slice():a}
// eslint-disable-next-line consistent-return
function s(i){return n.isUndefined(a[i])?n.isUndefined(e[i])?void 0:t(void 0,e[i]):t(e[i],a[i])}
// eslint-disable-next-line consistent-return
function o(e){if(!n.isUndefined(a[e]))return t(void 0,a[e])}
// eslint-disable-next-line consistent-return
function r(i){return n.isUndefined(a[i])?n.isUndefined(e[i])?void 0:t(void 0,e[i]):t(void 0,a[i])}
// eslint-disable-next-line consistent-return
function c(i){return i in a?t(e[i],a[i]):i in e?t(void 0,e[i]):void 0}var p={url:o,method:o,data:o,baseURL:r,transformRequest:r,transformResponse:r,paramsSerializer:r,timeout:r,timeoutMessage:r,withCredentials:r,adapter:r,responseType:r,xsrfCookieName:r,xsrfHeaderName:r,onUploadProgress:r,onDownloadProgress:r,decompress:r,maxContentLength:r,maxBodyLength:r,beforeRedirect:r,transport:r,httpAgent:r,httpsAgent:r,cancelToken:r,socketPath:r,responseEncoding:r,validateStatus:c};return n.forEach(Object.keys(e).concat(Object.keys(a)),(function(e){var a=p[e]||s,t=a(e);n.isUndefined(t)&&a!==c||(i[e]=t)})),i}}
/***/,
/***/7522:
/***/(e,a,i)=>{"use strict";var n=i(5845);
/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */e.exports=function(e,a,i){var t=i.config.validateStatus;i.status&&t&&!t(i.status)?a(new n("Request failed with status code "+i.status,[n.ERR_BAD_REQUEST,n.ERR_BAD_RESPONSE][Math.floor(i.status/100)-4],i.config,i.request,i)):e(i)}}
/***/,
/***/2881:
/***/(e,a,i)=>{"use strict";var n=i(9516),t=i(7412);
/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
e.exports=function(e,a,i){var s=this||t;
/*eslint no-param-reassign:0*/return n.forEach(i,(function(i){e=i.call(s,e,a)})),e}}
/***/,
/***/2188:
/***/(e,a,i)=>{
// eslint-disable-next-line strict
e.exports=i(5293);
/***/},
/***/7412:
/***/(e,a,i)=>{"use strict";var n=i(9516),t=i(7018),s=i(5845),o=i(4896),r=i(6440),c={"Content-Type":"application/x-www-form-urlencoded"};function p(e,a){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=a)}var l,u={transitional:o,adapter:("undefined"!=typeof XMLHttpRequest?
// For browsers use XHR adapter
l=i(5592):"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process)&&(
// For node use HTTP adapter
l=i(7960)),l),transformRequest:[function(e,a){if(t(a,"Accept"),t(a,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e))return e;if(n.isArrayBufferView(e))return e.buffer;if(n.isURLSearchParams(e))return p(a,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var i,s=n.isObject(e),o=a&&a["Content-Type"];if((i=n.isFileList(e))||s&&"multipart/form-data"===o){var c=this.env&&this.env.FormData;return r(i?{"files[]":e}:e,c&&new c)}return s||"application/json"===o?(p(a,"application/json"),function(e,a,i){if(n.isString(e))try{return(a||JSON.parse)(e),n.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(i||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var a=this.transitional||u.transitional,i=a&&a.silentJSONParsing,t=a&&a.forcedJSONParsing,o=!i&&"json"===this.responseType;if(o||t&&n.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(o){if("SyntaxError"===e.name)throw s.from(e,s.ERR_BAD_RESPONSE,this,null,this.response);throw e}}return e}],
/**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:i(2188)},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};n.forEach(["delete","get","head"],(function(e){u.headers[e]={}})),n.forEach(["post","put","patch"],(function(e){u.headers[e]=n.merge(c)})),e.exports=u}
/***/,
/***/4896:
/***/e=>{"use strict";e.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}}
/***/,
/***/9641:
/***/e=>{e.exports={version:"0.27.2"};
/***/},
/***/9012:
/***/e=>{"use strict";e.exports=function(e,a){return function(){for(var i=new Array(arguments.length),n=0;n<i.length;n++)i[n]=arguments[n];return e.apply(a,i)}}}
/***/,
/***/9106:
/***/(e,a,i)=>{"use strict";var n=i(9516);function t(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}
/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */e.exports=function(e,a,i){
/*eslint no-param-reassign:0*/
if(!a)return e;var s;if(i)s=i(a);else if(n.isURLSearchParams(a))s=a.toString();else{var o=[];n.forEach(a,(function(e,a){null!=e&&(n.isArray(e)?a+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),o.push(t(a)+"="+t(e))})))})),s=o.join("&")}if(s){var r=e.indexOf("#");-1!==r&&(e=e.slice(0,r)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}}
/***/,
/***/4680:
/***/e=>{"use strict";
/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */e.exports=function(e,a){return a?e.replace(/\/+$/,"")+"/"+a.replace(/^\/+/,""):e}}
/***/,
/***/3948:
/***/(e,a,i)=>{"use strict";var n=i(9516);e.exports=n.isStandardBrowserEnv()?{write:function(e,a,i,t,s,o){var r=[];r.push(e+"="+encodeURIComponent(a)),n.isNumber(i)&&r.push("expires="+new Date(i).toGMTString()),n.isString(t)&&r.push("path="+t),n.isString(s)&&r.push("domain="+s),!0===o&&r.push("secure"),document.cookie=r.join("; ")},read:function(e){var a=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return a?decodeURIComponent(a[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}}
/***/,
/***/9137:
/***/e=>{"use strict";
/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */e.exports=function(e){
// A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
// RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
// by any combination of letters, digits, plus, period, or hyphen.
return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}}
/***/,
/***/5019:
/***/(e,a,i)=>{"use strict";var n=i(9516);
/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */e.exports=function(e){return n.isObject(e)&&!0===e.isAxiosError}}
/***/,
/***/4202:
/***/(e,a,i)=>{"use strict";var n=i(9516);e.exports=n.isStandardBrowserEnv()?
// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function(){var e,a=/(msie|trident)/i.test(navigator.userAgent),i=document.createElement("a");
/**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
function t(e){var n=e;
// urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
return a&&(
// IE needs attribute set twice to normalize properties
i.setAttribute("href",n),n=i.href),i.setAttribute("href",n),{href:i.href,protocol:i.protocol?i.protocol.replace(/:$/,""):"",host:i.host,search:i.search?i.search.replace(/^\?/,""):"",hash:i.hash?i.hash.replace(/^#/,""):"",hostname:i.hostname,port:i.port,pathname:"/"===i.pathname.charAt(0)?i.pathname:"/"+i.pathname}}
/**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
return e=t(window.location.href),function(a){var i=n.isString(a)?t(a):a;return i.protocol===e.protocol&&i.host===e.host}}():function(){return!0}}
/***/,
/***/7018:
/***/(e,a,i)=>{"use strict";var n=i(9516);e.exports=function(e,a){n.forEach(e,(function(i,n){n!==a&&n.toUpperCase()===a.toUpperCase()&&(e[a]=i,delete e[n])}))}}
/***/,
/***/2012:
/***/(e,a,i)=>{"use strict";var n=i(9516),t=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];
// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
e.exports=function(e){var a,i,s,o={};return e?(n.forEach(e.split("\n"),(function(e){if(s=e.indexOf(":"),a=n.trim(e.substr(0,s)).toLowerCase(),i=n.trim(e.substr(s+1)),a){if(o[a]&&t.indexOf(a)>=0)return;o[a]="set-cookie"===a?(o[a]?o[a]:[]).concat([i]):o[a]?o[a]+", "+i:i}})),o):o}}
/***/,
/***/5656:
/***/e=>{"use strict";e.exports=function(e){var a=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return a&&a[1]||""}}
/***/,
/***/7980:
/***/e=>{"use strict";
/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */e.exports=function(e){return function(a){return e.apply(null,a)}}}
/***/,
/***/6440:
/***/(e,a,i)=>{"use strict";var n=i(9516);
/**
 * Convert a data object to FormData
 * @param {Object} obj
 * @param {?Object} [formData]
 * @returns {Object}
 **/e.exports=function(e,a){
// eslint-disable-next-line no-param-reassign
a=a||new FormData;var i=[];function t(e){return null===e?"":n.isDate(e)?e.toISOString():n.isArrayBuffer(e)||n.isTypedArray(e)?"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}return function e(s,o){if(n.isPlainObject(s)||n.isArray(s)){if(-1!==i.indexOf(s))throw Error("Circular reference detected in "+o);i.push(s),n.forEach(s,(function(i,s){if(!n.isUndefined(i)){var r,c=o?o+"."+s:s;if(i&&!o&&"object"==typeof i)if(n.endsWith(s,"{}"))
// eslint-disable-next-line no-param-reassign
i=JSON.stringify(i);else if(n.endsWith(s,"[]")&&(r=n.toArray(i)))
// eslint-disable-next-line func-names
return void r.forEach((function(e){!n.isUndefined(e)&&a.append(c,t(e))}));e(i,c)}})),i.pop()}else a.append(o,t(s))}(e),a}}
/***/,
/***/4841:
/***/(e,a,i)=>{"use strict";var n=i(9641).version,t=i(5845),s={};
// eslint-disable-next-line func-names
["object","boolean","number","function","string","symbol"].forEach((function(e,a){s[e]=function(i){return typeof i===e||"a"+(a<1?"n ":" ")+e}}));var o={};
/**
 * Transitional option validator
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 * @returns {function}
 */s.transitional=function(e,a,i){function s(e,a){return"[Axios v"+n+"] Transitional option '"+e+"'"+a+(i?". "+i:"")}
// eslint-disable-next-line func-names
return function(i,n,r){if(!1===e)throw new t(s(n," has been removed"+(a?" in "+a:"")),t.ERR_DEPRECATED);return a&&!o[n]&&(o[n]=!0,
// eslint-disable-next-line no-console
console.warn(s(n," has been deprecated since v"+a+" and will be removed in the near future"))),!e||e(i,n,r)}},e.exports={assertOptions:
/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */
function(e,a,i){if("object"!=typeof e)throw new t("options must be an object",t.ERR_BAD_OPTION_VALUE);for(var n=Object.keys(e),s=n.length;s-- >0;){var o=n[s],r=a[o];if(r){var c=e[o],p=void 0===c||r(c,o,e);if(!0!==p)throw new t("option "+o+" must be "+p,t.ERR_BAD_OPTION_VALUE)}else if(!0!==i)throw new t("Unknown option "+o,t.ERR_BAD_OPTION)}},validators:s}}
/***/,
/***/9516:
/***/(e,a,i)=>{"use strict";var n,t=i(9012),s=Object.prototype.toString,o=(n=Object.create(null),function(e){var a=s.call(e);return n[a]||(n[a]=a.slice(8,-1).toLowerCase())});
// utils is a library of generic helper functions non-specific to axios
function r(e){return e=e.toLowerCase(),function(a){return o(a)===e}}
/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */function c(e){return Array.isArray(e)}
/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */function p(e){return void 0===e}
/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
/**
 * Determine if a value is an ArrayBuffer
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
var l=r("ArrayBuffer");
/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function u(e){return null!==e&&"object"==typeof e}
/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */function d(e){if("object"!==o(e))return!1;var a=Object.getPrototypeOf(e);return null===a||a===Object.prototype}
/**
 * Determine if a value is a Date
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */var m=r("Date"),h=r("File"),f=r("Blob"),x=r("FileList");
/**
 * Determine if a value is a File
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function v(e){return"[object Function]"===s.call(e)}
/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
/**
 * Determine if a value is a URLSearchParams object
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
var b=r("URLSearchParams");
/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function g(e,a){
// Don't bother if no value provided
if(null!=e)if(
// Force an array if not already something iterable
"object"!=typeof e&&(
/*eslint no-param-reassign:0*/
e=[e]),c(e))
// Iterate over array values
for(var i=0,n=e.length;i<n;i++)a.call(null,e[i],i,e);else
// Iterate over object keys
for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.call(null,e[t],t,e)}
/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
// eslint-disable-next-line func-names
var y,_=(y="undefined"!=typeof Uint8Array&&Object.getPrototypeOf(Uint8Array),function(e){return y&&e instanceof y});e.exports={isArray:c,isArrayBuffer:l,isBuffer:function(e){return null!==e&&!p(e)&&null!==e.constructor&&!p(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:
/**
 * Determine if a value is a FormData
 *
 * @param {Object} thing The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function(e){var a="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||s.call(e)===a||v(e.toString)&&e.toString()===a)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&l(e.buffer)}
/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */,isString:function(e){return"string"==typeof e}
/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */,isNumber:function(e){return"number"==typeof e},isObject:u,isPlainObject:d,isUndefined:p,isDate:m,isFile:h,isBlob:f,isFunction:v,isStream:function(e){return u(e)&&v(e.pipe)},isURLSearchParams:b,isStandardBrowserEnv:
/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:g,merge:function e(){var a={};function i(i,n){d(a[n])&&d(i)?a[n]=e(a[n],i):d(i)?a[n]=e({},i):c(i)?a[n]=i.slice():a[n]=i}for(var n=0,t=arguments.length;n<t;n++)g(arguments[n],i);return a}
/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */,extend:function(e,a,i){return g(a,(function(a,n){e[n]=i&&"function"==typeof a?t(a,i):a})),e}
/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */,trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}
/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 */,inherits:function(e,a,i,n){e.prototype=Object.create(a.prototype,n),e.prototype.constructor=e,i&&Object.assign(e.prototype,i)}
/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function} [filter]
 * @returns {Object}
 */,toFlatObject:function(e,a,i){var n,t,s,o={};a=a||{};do{for(t=(n=Object.getOwnPropertyNames(e)).length;t-- >0;)o[s=n[t]]||(a[s]=e[s],o[s]=!0);e=Object.getPrototypeOf(e)}while(e&&(!i||i(e,a))&&e!==Object.prototype);return a}
/*
 * determines whether a string ends with the characters of a specified string
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 * @returns {boolean}
 */,kindOf:o,kindOfTest:r,endsWith:function(e,a,i){e=String(e),(void 0===i||i>e.length)&&(i=e.length),i-=a.length;var n=e.indexOf(a,i);return-1!==n&&n===i}
/**
 * Returns new array from array like object
 * @param {*} [thing]
 * @returns {Array}
 */,toArray:function(e){if(!e)return null;var a=e.length;if(p(a))return null;for(var i=new Array(a);a-- >0;)i[a]=e[a];return i},isTypedArray:_,isFileList:x}}
/***/,
/***/5293:
/***/(e,a,i)=>{var n=i(801),t=i(9023),s=i(6928),o=i(8611),r=i(5692),c=i(7016).parse,p=i(9896),l=i(2203).Stream,u=i(6049),d=i(1873),m=i(6750);
/**
 * Create readable "multipart/form-data" streams.
 * Can be used to submit forms
 * and file uploads to other web applications.
 *
 * @constructor
 * @param {Object} options - Properties to be added/overriden for FormData and CombinedStream
 */
function h(e){if(!(this instanceof h))return new h(e);for(var a in this._overheadLength=0,this._valueLength=0,this._valuesToMeasure=[],n.call(this),e=e||{})this[a]=e[a]}
// Public API
e.exports=h,
// make it a Stream
t.inherits(h,n),h.LINE_BREAK="\r\n",h.DEFAULT_CONTENT_TYPE="application/octet-stream",h.prototype.append=function(e,a,i){
// allow filename as single option
"string"==typeof(i=i||{})&&(i={filename:i});var t=n.prototype.append.bind(this);
// all that streamy business can't handle numbers
// https://github.com/felixge/node-form-data/issues/38
if("number"==typeof a&&(a=""+a),Array.isArray(a))
// Please convert your array into string
// the way web server expects it
this._error(new Error("Arrays are not supported."));else{var s=this._multiPartHeader(e,a,i),o=this._multiPartFooter();t(s),t(a),t(o),
// pass along options.knownLength
this._trackLength(s,a,i)}},h.prototype._trackLength=function(e,a,i){var n=0;
// used w/ getLengthSync(), when length is known.
// e.g. for streaming directly from a remote server,
// w/ a known file a size, and not wanting to wait for
// incoming file to finish to get its size.
null!=i.knownLength?n+=+i.knownLength:Buffer.isBuffer(a)?n=a.length:"string"==typeof a&&(n=Buffer.byteLength(a)),this._valueLength+=n,
// @check why add CRLF? does this account for custom/multiple CRLFs?
this._overheadLength+=Buffer.byteLength(e)+h.LINE_BREAK.length,
// empty or either doesn't have path or not an http response or not a stream
a&&(a.path||a.readable&&a.hasOwnProperty("httpVersion")||a instanceof l)&&(
// no need to bother with the length
i.knownLength||this._valuesToMeasure.push(a))},h.prototype._lengthRetriever=function(e,a){e.hasOwnProperty("fd")?
// take read range into a account
// `end` = Infinity –> read file till the end
// TODO: Looks like there is bug in Node fs.createReadStream
// it doesn't respect `end` options without `start` options
// Fix it when node fixes it.
// https://github.com/joyent/node/issues/7819
null!=e.end&&e.end!=1/0&&null!=e.start?
// when end specified
// no need to calculate range
// inclusive, starts with 0
a(null,e.end+1-(e.start?e.start:0)):
// still need to fetch file size from fs
p.stat(e.path,(function(i,n){var t;i?a(i):(
// update final size based on the range options
t=n.size-(e.start?e.start:0),a(null,t))})):e.hasOwnProperty("httpVersion")?a(null,+e.headers["content-length"]):e.hasOwnProperty("httpModule")?(
// wait till response come back
e.on("response",(function(i){e.pause(),a(null,+i.headers["content-length"])})),e.resume()):a("Unknown stream")},h.prototype._multiPartHeader=function(e,a,i){
// custom header specified (as string)?
// it becomes responsible for boundary
// (e.g. to handle extra CRLFs on .NET servers)
if("string"==typeof i.header)return i.header;var n,t=this._getContentDisposition(a,i),s=this._getContentType(a,i),o="",r={
// add custom disposition as third element or keep it two elements if not
"Content-Disposition":["form-data",'name="'+e+'"'].concat(t||[]),
// if no content type. allow it to be empty array
"Content-Type":[].concat(s||[])};for(var c in
// allow custom headers.
"object"==typeof i.header&&m(r,i.header),r)r.hasOwnProperty(c)&&null!=(n=r[c])&&(
// convert all headers to arrays.
Array.isArray(n)||(n=[n]),
// add non-empty headers.
n.length&&(o+=c+": "+n.join("; ")+h.LINE_BREAK));return"--"+this.getBoundary()+h.LINE_BREAK+o+h.LINE_BREAK},h.prototype._getContentDisposition=function(e,a){var i,n;return"string"==typeof a.filepath?
// custom filepath for relative paths
i=s.normalize(a.filepath).replace(/\\/g,"/"):a.filename||e.name||e.path?
// custom filename take precedence
// formidable and the browser add a name property
// fs- and request- streams have path property
i=s.basename(a.filename||e.name||e.path):e.readable&&e.hasOwnProperty("httpVersion")&&(
// or try http response
i=s.basename(e.client._httpMessage.path||"")),i&&(n='filename="'+i+'"'),n},h.prototype._getContentType=function(e,a){
// use custom content-type above all
var i=a.contentType;
// or try `name` from formidable, browser
return!i&&e.name&&(i=u.lookup(e.name)),
// or try `path` from fs-, request- streams
!i&&e.path&&(i=u.lookup(e.path)),
// or if it's http-reponse
!i&&e.readable&&e.hasOwnProperty("httpVersion")&&(i=e.headers["content-type"]),
// or guess it from the filepath or filename
i||!a.filepath&&!a.filename||(i=u.lookup(a.filepath||a.filename)),
// fallback to the default content type if `value` is not simple value
i||"object"!=typeof e||(i=h.DEFAULT_CONTENT_TYPE),i},h.prototype._multiPartFooter=function(){return function(e){var a=h.LINE_BREAK;0===this._streams.length&&(a+=this._lastBoundary()),e(a)}.bind(this)},h.prototype._lastBoundary=function(){return"--"+this.getBoundary()+"--"+h.LINE_BREAK},h.prototype.getHeaders=function(e){var a,i={"content-type":"multipart/form-data; boundary="+this.getBoundary()};for(a in e)e.hasOwnProperty(a)&&(i[a.toLowerCase()]=e[a]);return i},h.prototype.setBoundary=function(e){this._boundary=e},h.prototype.getBoundary=function(){return this._boundary||this._generateBoundary(),this._boundary},h.prototype.getBuffer=function(){
// Create the form content. Add Line breaks to the end of data.
for(var e=new Buffer.alloc(0),a=this.getBoundary(),i=0,n=this._streams.length;i<n;i++)"function"!=typeof this._streams[i]&&(
// Add content to the buffer.
e=Buffer.isBuffer(this._streams[i])?Buffer.concat([e,this._streams[i]]):Buffer.concat([e,Buffer.from(this._streams[i])]),
// Add break after content.
"string"==typeof this._streams[i]&&this._streams[i].substring(2,a.length+2)===a||(e=Buffer.concat([e,Buffer.from(h.LINE_BREAK)])));
// Add the footer and return the Buffer object.
return Buffer.concat([e,Buffer.from(this._lastBoundary())])},h.prototype._generateBoundary=function(){for(
// This generates a 50 character boundary similar to those used by Firefox.
// They are optimized for boyer-moore parsing.
var e="--------------------------",a=0;a<24;a++)e+=Math.floor(10*Math.random()).toString(16);this._boundary=e},
// Note: getLengthSync DOESN'T calculate streams length
// As workaround one can calculate file size manually
// and add it as knownLength option
h.prototype.getLengthSync=function(){var e=this._overheadLength+this._valueLength;
// Don't get confused, there are 3 "internal" streams for each keyval pair
// so it basically checks if there is any value added to the form
return this._streams.length&&(e+=this._lastBoundary().length),
// https://github.com/form-data/form-data/issues/40
this.hasKnownLength()||
// Some async length retrievers are present
// therefore synchronous length calculation is false.
// Please use getLength(callback) to get proper length
this._error(new Error("Cannot calculate proper length in synchronous way.")),e},
// Public API to check if length of added values is known
// https://github.com/form-data/form-data/issues/196
// https://github.com/form-data/form-data/issues/262
h.prototype.hasKnownLength=function(){var e=!0;return this._valuesToMeasure.length&&(e=!1),e},h.prototype.getLength=function(e){var a=this._overheadLength+this._valueLength;this._streams.length&&(a+=this._lastBoundary().length),this._valuesToMeasure.length?d.parallel(this._valuesToMeasure,this._lengthRetriever,(function(i,n){i?e(i):(n.forEach((function(e){a+=e})),e(null,a))})):process.nextTick(e.bind(this,null,a))},h.prototype.submit=function(e,a){var i,n,t={method:"post"};
// parse provided url if it's string
// or treat it as options object
return"string"==typeof e?(e=c(e),n=m({port:e.port,path:e.pathname,host:e.hostname,protocol:e.protocol},t)):
// if no port provided use default one
(n=m(e,t)).port||(n.port="https:"==n.protocol?443:80),
// put that good code in getHeaders to some use
n.headers=this.getHeaders(e.headers),
// https if specified, fallback to http in any other case
i="https:"==n.protocol?r.request(n):o.request(n),
// get content length and fire away
this.getLength(function(e,n){if(e&&"Unknown stream"!==e)this._error(e);else if(
// add content length
n&&i.setHeader("Content-Length",n),this.pipe(i),a){var t,s=function(e,n){return i.removeListener("error",s),i.removeListener("response",t),a.call(this,e,n)};t=s.bind(this,null),i.on("error",s),i.on("response",t)}}.bind(this)),i},h.prototype._error=function(e){this.error||(this.error=e,this.pause(),this.emit("error",e))},h.prototype.toString=function(){return"[object FormData]"}}
/***/,
/***/6750:
/***/e=>{
// populates missing values
e.exports=function(e,a){return Object.keys(a).forEach((function(i){e[i]=e[i]||a[i]})),e};
/***/},
/***/801:
/***/(e,a,i)=>{var n=i(9023),t=i(2203).Stream,s=i(8069);function o(){this.writable=!1,this.readable=!0,this.dataSize=0,this.maxDataSize=2097152,this.pauseStreams=!0,this._released=!1,this._streams=[],this._currentStream=null,this._insideLoop=!1,this._pendingNext=!1}e.exports=o,n.inherits(o,t),o.create=function(e){var a=new this;for(var i in e=e||{})a[i]=e[i];return a},o.isStreamLike=function(e){return"function"!=typeof e&&"string"!=typeof e&&"boolean"!=typeof e&&"number"!=typeof e&&!Buffer.isBuffer(e)},o.prototype.append=function(e){if(o.isStreamLike(e)){if(!(e instanceof s)){var a=s.create(e,{maxDataSize:1/0,pauseStream:this.pauseStreams});e.on("data",this._checkDataSize.bind(this)),e=a}this._handleErrors(e),this.pauseStreams&&e.pause()}return this._streams.push(e),this},o.prototype.pipe=function(e,a){return t.prototype.pipe.call(this,e,a),this.resume(),e},o.prototype._getNext=function(){if(this._currentStream=null,this._insideLoop)this._pendingNext=!0;else{this._insideLoop=!0;try{do{this._pendingNext=!1,this._realGetNext()}while(this._pendingNext)}finally{this._insideLoop=!1}}},o.prototype._realGetNext=function(){var e=this._streams.shift();void 0!==e?"function"==typeof e?e(function(e){o.isStreamLike(e)&&(e.on("data",this._checkDataSize.bind(this)),this._handleErrors(e)),this._pipeNext(e)}.bind(this)):this._pipeNext(e):this.end()},o.prototype._pipeNext=function(e){if(this._currentStream=e,o.isStreamLike(e))return e.on("end",this._getNext.bind(this)),void e.pipe(this,{end:!1});var a=e;this.write(a),this._getNext()},o.prototype._handleErrors=function(e){var a=this;e.on("error",(function(e){a._emitError(e)}))},o.prototype.write=function(e){this.emit("data",e)},o.prototype.pause=function(){this.pauseStreams&&(this.pauseStreams&&this._currentStream&&"function"==typeof this._currentStream.pause&&this._currentStream.pause(),this.emit("pause"))},o.prototype.resume=function(){this._released||(this._released=!0,this.writable=!0,this._getNext()),this.pauseStreams&&this._currentStream&&"function"==typeof this._currentStream.resume&&this._currentStream.resume(),this.emit("resume")},o.prototype.end=function(){this._reset(),this.emit("end")},o.prototype.destroy=function(){this._reset(),this.emit("close")},o.prototype._reset=function(){this.writable=!1,this._streams=[],this._currentStream=null},o.prototype._checkDataSize=function(){if(this._updateDataSize(),!(this.dataSize<=this.maxDataSize)){var e="DelayedStream#maxDataSize of "+this.maxDataSize+" bytes exceeded.";this._emitError(new Error(e))}},o.prototype._updateDataSize=function(){this.dataSize=0;var e=this;this._streams.forEach((function(a){a.dataSize&&(e.dataSize+=a.dataSize)})),this._currentStream&&this._currentStream.dataSize&&(this.dataSize+=this._currentStream.dataSize)},o.prototype._emitError=function(e){this._reset(),this.emit("error",e)}}
/***/,
/***/8069:
/***/(e,a,i)=>{var n=i(2203).Stream,t=i(9023);function s(){this.source=null,this.dataSize=0,this.maxDataSize=1048576,this.pauseStream=!0,this._maxDataSizeExceeded=!1,this._released=!1,this._bufferedEvents=[]}e.exports=s,t.inherits(s,n),s.create=function(e,a){var i=new this;for(var n in a=a||{})i[n]=a[n];i.source=e;var t=e.emit;return e.emit=function(){return i._handleEmit(arguments),t.apply(e,arguments)},e.on("error",(function(){})),i.pauseStream&&e.pause(),i},Object.defineProperty(s.prototype,"readable",{configurable:!0,enumerable:!0,get:function(){return this.source.readable}}),s.prototype.setEncoding=function(){return this.source.setEncoding.apply(this.source,arguments)},s.prototype.resume=function(){this._released||this.release(),this.source.resume()},s.prototype.pause=function(){this.source.pause()},s.prototype.release=function(){this._released=!0,this._bufferedEvents.forEach(function(e){this.emit.apply(this,e)}.bind(this)),this._bufferedEvents=[]},s.prototype.pipe=function(){var e=n.prototype.pipe.apply(this,arguments);return this.resume(),e},s.prototype._handleEmit=function(e){this._released?this.emit.apply(this,e):("data"===e[0]&&(this.dataSize+=e[1].length,this._checkIfMaxDataSizeExceeded()),this._bufferedEvents.push(e))},s.prototype._checkIfMaxDataSizeExceeded=function(){if(!(this._maxDataSizeExceeded||this.dataSize<=this.maxDataSize)){this._maxDataSizeExceeded=!0;var e="DelayedStream#maxDataSize of "+this.maxDataSize+" bytes exceeded.";this.emit("error",new Error(e))}}}
/***/,
/***/7507:
/***/(e,a,i)=>{var n;e.exports=function(){if(!n){try{
/* eslint global-require: off */
n=i(Object(function(){var e=new Error("Cannot find module 'debug'");throw e.code="MODULE_NOT_FOUND",e}()))("follow-redirects")}catch(e){}"function"!=typeof n&&(n=function(){})}n.apply(null,arguments)}}
/***/,
/***/3164:
/***/(e,a,i)=>{var n,t,s,o=i(7016),r=o.URL,c=i(8611),p=i(5692),l=i(2203).Writable,u=i(2613),d=i(7507);
// Preventive platform detection
// istanbul ignore next
n="undefined"!=typeof process,t="undefined"!=typeof window&&"undefined"!=typeof document,s=C(Error.captureStackTrace),n||!t&&s||console.warn("The follow-redirects package should be excluded from browser builds.");
// Whether to use the native URL object or the legacy url module
var m=!1;try{u(new r(""))}catch(e){m="ERR_INVALID_URL"===e.code}
// URL fields to preserve in copy operations
var h=["auth","host","hostname","href","path","pathname","port","protocol","query","search","hash"],f=["abort","aborted","connect","error","socket","timeout"],x=Object.create(null);
// Create handlers that pass events from native requests
f.forEach((function(e){x[e]=function(a,i,n){this._redirectable.emit(e,a,i,n)}}));
// Error types with codes
var v=S("ERR_INVALID_URL","Invalid URL",TypeError),b=S("ERR_FR_REDIRECTION_FAILURE","Redirected request failed"),g=S("ERR_FR_TOO_MANY_REDIRECTS","Maximum number of redirects exceeded",b),y=S("ERR_FR_MAX_BODY_LENGTH_EXCEEDED","Request body larger than maxBodyLength limit"),_=S("ERR_STREAM_WRITE_AFTER_END","write after end"),k=l.prototype.destroy||T;
// An HTTP(S) request that can be redirected
function w(e,a){
// Initialize the request
l.call(this),this._sanitizeOptions(e),this._options=e,this._ended=!1,this._ending=!1,this._redirectCount=0,this._redirects=[],this._requestBodyLength=0,this._requestBodyBuffers=[],
// Attach a callback if passed
a&&this.on("response",a);
// React to responses of native requests
var i=this;this._onNativeResponse=function(e){try{i._processResponse(e)}catch(e){i.emit("error",e instanceof b?e:new b({cause:e}))}},
// Perform the first request
this._performRequest()}
// Wraps the key/value object of protocols with redirect functionality
function E(e){
// Default settings
var a={maxRedirects:21,maxBodyLength:10485760},i={};
// Wrap each protocol
return Object.keys(e).forEach((function(n){var t=n+":",s=i[t]=e[n],o=a[n]=Object.create(s);
// Expose the properties on the wrapped protocol
Object.defineProperties(o,{request:{value:
// Executes a request, following redirects
function(e,n,s){var o;
// Exports
return o=e,
// Parse parameters, ensuring that input is an object
r&&o instanceof r?e=O(e):R(e)?e=O(j(e)):(s=n,n=N(e),e={protocol:t}),C(n)&&(s=n,n=null),(
// Set defaults
n=Object.assign({maxRedirects:a.maxRedirects,maxBodyLength:a.maxBodyLength},e,n)).nativeProtocols=i,R(n.host)||R(n.hostname)||(n.hostname="::1"),u.equal(n.protocol,t,"protocol mismatch"),d("options",n),new w(n,s)}
// Executes a GET request, following redirects
,configurable:!0,enumerable:!0,writable:!0},get:{value:function(e,a,i){var n=o.request(e,a,i);return n.end(),n},configurable:!0,enumerable:!0,writable:!0}})})),a}function T(){/* empty */}function j(e){var a;
// istanbul ignore else
if(m)a=new r(e);else if(!R((
// Ensure the URL is valid and absolute
a=N(o.parse(e))).protocol))throw new v({input:e});return a}function N(e){if(/^\[/.test(e.hostname)&&!/^\[[:0-9a-f]+\]$/i.test(e.hostname))throw new v({input:e.href||e});if(/^\[/.test(e.host)&&!/^\[[:0-9a-f]+\](:\d+)?$/i.test(e.host))throw new v({input:e.href||e});return e}function O(e,a){var i=a||{};for(var n of h)i[n]=e[n];
// Fix IPv6 hostname
return i.hostname.startsWith("[")&&(i.hostname=i.hostname.slice(1,-1)),
// Ensure port is a number
""!==i.port&&(i.port=Number(i.port)),
// Concatenate path
i.path=i.search?i.pathname+i.search:i.pathname,i}function A(e,a){var i;for(var n in a)e.test(n)&&(i=a[n],delete a[n]);return null==i?void 0:String(i).trim()}function S(e,a,i){
// Create constructor
function n(i){
// istanbul ignore else
C(Error.captureStackTrace)&&Error.captureStackTrace(this,this.constructor),Object.assign(this,i||{}),this.code=e,this.message=this.cause?a+": "+this.cause.message:a}
// Attach constructor and set default properties
return n.prototype=new(i||Error),Object.defineProperties(n.prototype,{constructor:{value:n,enumerable:!1},name:{value:"Error ["+e+"]",enumerable:!1}}),n}function I(e,a){for(var i of f)e.removeListener(i,x[i]);e.on("error",T),e.destroy(a)}function R(e){return"string"==typeof e||e instanceof String}function C(e){return"function"==typeof e}w.prototype=Object.create(l.prototype),w.prototype.abort=function(){I(this._currentRequest),this._currentRequest.abort(),this.emit("abort")},w.prototype.destroy=function(e){return I(this._currentRequest,e),k.call(this,e),this},
// Writes buffered data to the current native request
w.prototype.write=function(e,a,i){
// Writing is not allowed if end has been called
if(this._ending)throw new _;
// Validate input and shift parameters if necessary
if(!R(e)&&("object"!=typeof(n=e)||!("length"in n)))throw new TypeError("data should be a string, Buffer or Uint8Array");var n;C(a)&&(i=a,a=null),
// Ignore empty buffers, since writing them doesn't invoke the callback
// https://github.com/nodejs/node/issues/22066
0!==e.length?
// Only write when we don't exceed the maximum body length
this._requestBodyLength+e.length<=this._options.maxBodyLength?(this._requestBodyLength+=e.length,this._requestBodyBuffers.push({data:e,encoding:a}),this._currentRequest.write(e,a,i)):(this.emit("error",new y),this.abort()):i&&i()},
// Ends the current native request
w.prototype.end=function(e,a,i){
// Write data if needed and end
if(
// Shift parameters if necessary
C(e)?(i=e,e=a=null):C(a)&&(i=a,a=null),e){var n=this,t=this._currentRequest;this.write(e,a,(function(){n._ended=!0,t.end(null,null,i)})),this._ending=!0}else this._ended=this._ending=!0,this._currentRequest.end(null,null,i)},
// Sets a header value on the current native request
w.prototype.setHeader=function(e,a){this._options.headers[e]=a,this._currentRequest.setHeader(e,a)},
// Clears a header value on the current native request
w.prototype.removeHeader=function(e){delete this._options.headers[e],this._currentRequest.removeHeader(e)},
// Global timeout for all underlying requests
w.prototype.setTimeout=function(e,a){var i=this;
// Destroys the socket on timeout
function n(a){a.setTimeout(e),a.removeListener("timeout",a.destroy),a.addListener("timeout",a.destroy)}
// Sets up a timer to trigger a timeout event
function t(a){i._timeout&&clearTimeout(i._timeout),i._timeout=setTimeout((function(){i.emit("timeout"),s()}),e),n(a)}
// Stops a timeout from triggering
function s(){
// Clear the timeout
i._timeout&&(clearTimeout(i._timeout),i._timeout=null),
// Clean up all attached listeners
i.removeListener("abort",s),i.removeListener("error",s),i.removeListener("response",s),i.removeListener("close",s),a&&i.removeListener("timeout",a),i.socket||i._currentRequest.removeListener("socket",t)}
// Attach callback if passed
return a&&this.on("timeout",a),
// Start the timer if or when the socket is opened
this.socket?t(this.socket):this._currentRequest.once("socket",t),
// Clean up on events
this.on("socket",n),this.on("abort",s),this.on("error",s),this.on("response",s),this.on("close",s),this},
// Proxy all other public ClientRequest methods
["flushHeaders","getHeader","setNoDelay","setSocketKeepAlive"].forEach((function(e){w.prototype[e]=function(a,i){return this._currentRequest[e](a,i)}})),
// Proxy all public ClientRequest properties
["aborted","connection","socket"].forEach((function(e){Object.defineProperty(w.prototype,e,{get:function(){return this._currentRequest[e]}})})),w.prototype._sanitizeOptions=function(e){
// Complete the URL object when necessary
if(
// Ensure headers are always present
e.headers||(e.headers={}),
// Since http.request treats host as an alias of hostname,
// but the url module interprets host as hostname plus port,
// eliminate the host property to avoid confusion.
e.host&&(
// Use hostname if set, because it has precedence
e.hostname||(e.hostname=e.host),delete e.host),!e.pathname&&e.path){var a=e.path.indexOf("?");a<0?e.pathname=e.path:(e.pathname=e.path.substring(0,a),e.search=e.path.substring(a))}},
// Executes the next native request (initial or redirect)
w.prototype._performRequest=function(){
// Load the native protocol
var e=this._options.protocol,a=this._options.nativeProtocols[e];if(!a)throw new TypeError("Unsupported protocol "+e);
// If specified, use the agent corresponding to the protocol
// (HTTP and HTTPS use different types of agents)
if(this._options.agents){var i=e.slice(0,-1);this._options.agent=this._options.agents[i]}
// Create the native request and set up its event handlers
var n=this._currentRequest=a.request(this._options,this._onNativeResponse);for(var t of(n._redirectable=this,f))n.on(t,x[t]);
// RFC7230§5.3.1: When making a request directly to an origin server, […]
// a client MUST send only the absolute path […] as the request-target.
// End a redirected request
// (The first request must be ended explicitly with RedirectableRequest#end)
if(this._currentUrl=/^\//.test(this._options.path)?o.format(this._options):
// When making a request to a proxy, […]
// a client MUST send the target URI in absolute-form […].
this._options.path,this._isRedirect){
// Write the request entity and end
var s=0,r=this,c=this._requestBodyBuffers;!function e(a){
// Only write if this request has not been redirected yet
// istanbul ignore else
if(n===r._currentRequest)
// Report any write errors
// istanbul ignore if
if(a)r.emit("error",a);else if(s<c.length){var i=c[s++];
// istanbul ignore else
n.finished||n.write(i.data,i.encoding,e)}
// End the request if `end` has been called on us
else r._ended&&n.end()}()}},
// Processes a response from the current native request
w.prototype._processResponse=function(e){
// Store the redirected response
var a=e.statusCode;this._options.trackRedirects&&this._redirects.push({url:this._currentUrl,headers:e.headers,statusCode:a});
// RFC7231§6.4: The 3xx (Redirection) class of status code indicates
// that further action needs to be taken by the user agent in order to
// fulfill the request. If a Location header field is provided,
// the user agent MAY automatically redirect its request to the URI
// referenced by the Location field value,
// even if the specific status code is not understood.
// If the response is not a redirect; return it as-is
var i,n=e.headers.location;if(!n||!1===this._options.followRedirects||a<300||a>=400)return e.responseUrl=this._currentUrl,e.redirects=this._redirects,this.emit("response",e),void(
// Clean up
this._requestBodyBuffers=[]);
// The response is a redirect, so abort the current request
// RFC7231§6.4: A client SHOULD detect and intervene
// in cyclical redirections (i.e., "infinite" redirection loops).
if(I(this._currentRequest),
// Discard the remainder of the response to avoid waiting for data
e.destroy(),++this._redirectCount>this._options.maxRedirects)throw new g;
// Store the request headers if applicable
var t=this._options.beforeRedirect;t&&(i=Object.assign({
// The Host header was set by nativeProtocol.request
Host:e.req.getHeader("host")},this._options.headers));
// RFC7231§6.4: Automatic redirection needs to done with
// care for methods not known to be safe, […]
// RFC7231§6.4.2–3: For historical reasons, a user agent MAY change
// the request method from POST to GET for the subsequent request.
var s=this._options.method;((301===a||302===a)&&"POST"===this._options.method||
// RFC7231§6.4.4: The 303 (See Other) status code indicates that
// the server is redirecting the user agent to a different resource […]
// A user agent can perform a retrieval request targeting that URI
// (a GET or HEAD request if using HTTP) […]
303===a&&!/^(?:GET|HEAD)$/.test(this._options.method))&&(this._options.method="GET",
// Drop a possible entity and headers related to it
this._requestBodyBuffers=[],A(/^content-/i,this._options.headers));
// Drop the Host header, as the redirect might lead to a different host
var c,p,l=A(/^host$/i,this._options.headers),h=j(this._currentUrl),f=l||h.host,x=/^\w+:/.test(n)?this._currentUrl:o.format(Object.assign(h,{host:f})),v=(c=n,p=x,m?new r(c,p):j(o.resolve(p,c)));
// If the redirect is relative, carry over the host of the last request
// Evaluate the beforeRedirect callback
if(d("redirecting to",v.href),this._isRedirect=!0,O(v,this._options),
// Drop confidential headers when redirecting to a less secure protocol
// or to a different domain that is not a superdomain
(v.protocol!==h.protocol&&"https:"!==v.protocol||v.host!==f&&!function(e,a){u(R(e)&&R(a));var i=e.length-a.length-1;return i>0&&"."===e[i]&&e.endsWith(a)}(v.host,f))&&A(/^(?:(?:proxy-)?authorization|cookie)$/i,this._options.headers),C(t)){var b={headers:e.headers,statusCode:a},y={url:x,method:s,headers:i};t(this._options,b,y),this._sanitizeOptions(this._options)}
// Perform the redirected request
this._performRequest()},e.exports=E({http:c,https:p}),e.exports.wrap=E}
/***/,
/***/7598:
/***/(e,a,i)=>{
/*!
 * mime-db
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015-2022 Douglas Christopher Wilson
 * MIT Licensed
 */
/**
 * Module exports.
 */
e.exports=i(1813)
/***/},
/***/6049:
/***/(e,a,i)=>{"use strict";
/*!
 * mime-types
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
/**
 * Module dependencies.
 * @private
 */var n,t,s,o=i(7598),r=i(6928).extname
/**
 * Module variables.
 * @private
 */,c=/^\s*([^;\s]*)(?:;|\s|$)/,p=/^text\//i
/**
 * Module exports.
 * @public
 */;
/**
 * Get the default charset for a MIME type.
 *
 * @param {string} type
 * @return {boolean|string}
 */
function l(e){if(!e||"string"!=typeof e)return!1;
// TODO: use media-typer
var a=c.exec(e),i=a&&o[a[1].toLowerCase()];return i&&i.charset?i.charset:
// default text/* to utf-8
!(!a||!p.test(a[1]))&&"UTF-8"}
/**
 * Create a full Content-Type header given a MIME type or extension.
 *
 * @param {string} str
 * @return {boolean|string}
 */a.charset=l,a.charsets={lookup:l},a.contentType=function(e){
// TODO: should this even be in this module?
if(!e||"string"!=typeof e)return!1;var i=-1===e.indexOf("/")?a.lookup(e):e;if(!i)return!1;
// TODO: use content-type or other module
if(-1===i.indexOf("charset")){var n=a.charset(i);n&&(i+="; charset="+n.toLowerCase())}return i}
/**
 * Get the default extension for a MIME type.
 *
 * @param {string} type
 * @return {boolean|string}
 */,a.extension=function(e){if(!e||"string"!=typeof e)return!1;
// TODO: use media-typer
var i=c.exec(e),n=i&&a.extensions[i[1].toLowerCase()];
// get extensions
if(!n||!n.length)return!1;return n[0]}
/**
 * Lookup the MIME type for a file path/extension.
 *
 * @param {string} path
 * @return {boolean|string}
 */,a.extensions=Object.create(null),a.lookup=function(e){if(!e||"string"!=typeof e)return!1;
// get the extension ("ext" or ".ext" or full path)
var i=r("x."+e).toLowerCase().substr(1);if(!i)return!1;return a.types[i]||!1}
/**
 * Populate the extensions and types maps.
 * @private
 */,a.types=Object.create(null),
// Populate the extensions/types maps
n=a.extensions,t=a.types,s=["nginx","apache",void 0,"iana"],Object.keys(o).forEach((function(e){var a=o[e],i=a.extensions;if(i&&i.length){
// mime -> extensions
n[e]=i;
// extension -> mime
for(var r=0;r<i.length;r++){var c=i[r];if(t[c]){var p=s.indexOf(o[t[c]].source),l=s.indexOf(a.source);if("application/octet-stream"!==t[c]&&(p>l||p===l&&"application/"===t[c].substr(0,12)))
// skip the remapping
continue}
// set the extension -> mime
t[c]=e}}}))}
/***/,
/***/5498:
/***/(e,a,i)=>{"use strict";
// EXPORTS
i.d(a,{main:()=>/* binding */fe});
// UNUSED EXPORTS: createQueryAndSuccessSchema
// EXTERNAL MODULE: ./node_modules/axios/index.js
var n=i(2505),t=i.n(n),s=i(4476);var o=function(){return o=Object.assign||function(e){for(var a,i=1,n=arguments.length;i<n;i++)for(var t in a=arguments[i])Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t]);return e},o.apply(this,arguments)};Object.create;Object.create;"function"==typeof SuppressedError&&SuppressedError;// ./node_modules/graphql/jsutils/invariant.mjs
function r(e,a){if(!Boolean(e))throw new Error(null!=a?a:"Unexpected invariant triggered.")}// ./node_modules/graphql/language/location.mjs
const c=/\r\n|[\n\r]/g;
/**
 * Represents a location in a Source.
 */
/**
 * Takes a Source and a UTF-8 character offset, and returns the corresponding
 * line and column as a SourceLocation.
 */function p(e,a){let i=0,n=1;for(const t of e.body.matchAll(c)){if("number"==typeof t.index||r(!1),t.index>=a)break;i=t.index+t[0].length,n+=1}return{line:n,column:a+1-i}}
/**
 * Render a helpful description of the location in the GraphQL Source document.
 */
function l(e,a){const i=e.locationOffset.column-1,n="".padStart(i)+e.body,t=a.line-1,s=e.locationOffset.line-1,o=a.line+s,r=1===a.line?i:0,c=a.column+r,p=`${e.name}:${o}:${c}\n`,l=n.split(/\r\n|[\n\r]/g),d=l[t];// Special case for minified documents
if(d.length>120){const e=Math.floor(c/80),a=c%80,i=[];for(let e=0;e<d.length;e+=80)i.push(d.slice(e,e+80));return p+u([[`${o} |`,i[0]],...i.slice(1,e+1).map((e=>["|",e])),["|","^".padStart(a)],["|",i[e+1]]])}return p+u([
// Lines specified like this: ["prefix", "string"],
[o-1+" |",l[t-1]],[`${o} |`,d],["|","^".padStart(c)],[`${o+1} |`,l[t+1]]])}function u(e){const a=e.filter((([e,a])=>void 0!==a)),i=Math.max(...a.map((([e])=>e.length)));return a.map((([e,a])=>e.padStart(i)+(a?" "+a:""))).join("\n")}
/**
 * A GraphQLError describes an Error found during the parse, validate, or
 * execute phases of performing a GraphQL operation. In addition to a message
 * and stack trace, it also includes information about the locations in a
 * GraphQL document and/or execution result that correspond to the Error.
 */
class d extends Error{
/**
   * An array of `{ line, column }` locations within the source GraphQL document
   * which correspond to this error.
   *
   * Errors during validation often contain multiple locations, for example to
   * point out two things with the same name. Errors during execution include a
   * single location, the field which produced the error.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */
/**
   * An array describing the JSON-path into the execution response which
   * corresponds to this error. Only included for errors during execution.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */
/**
   * An array of GraphQL AST Nodes corresponding to this error.
   */
/**
   * The source GraphQL document for the first location of this error.
   *
   * Note that if this Error represents more than one node, the source may not
   * represent nodes after the first node.
   */
/**
   * An array of character offsets within the source GraphQL document
   * which correspond to this error.
   */
/**
   * The original error thrown from a field resolver during execution.
   */
/**
   * Extension fields to add to the formatted error.
   */
/**
   * @deprecated Please use the `GraphQLErrorOptions` constructor overload instead.
   */
constructor(e,...a){var i,n,t;const{nodes:s,source:o,positions:r,path:c,originalError:l,extensions:u}=// ./node_modules/graphql/error/GraphQLError.mjs
function(e){const a=e[0];return null==a||"kind"in a||"length"in a?{nodes:a,source:e[1],positions:e[2],path:e[3],originalError:e[4],extensions:e[5]}:a}(a);super(e),this.name="GraphQLError",this.path=null!=c?c:void 0,this.originalError=null!=l?l:void 0,// Compute list of blame nodes.
this.nodes=m(Array.isArray(s)?s:s?[s]:void 0);const h=m(null===(i=this.nodes)||void 0===i?void 0:i.map((e=>e.loc)).filter((e=>null!=e)));// Compute locations in the source for the given nodes/positions.
this.source=null!=o?o:null==h||null===(n=h[0])||void 0===n?void 0:n.source,this.positions=null!=r?r:null==h?void 0:h.map((e=>e.start)),this.locations=r&&o?r.map((e=>p(o,e))):null==h?void 0:h.map((e=>p(e.source,e.start)));const f="object"==typeof(x=null==l?void 0:l.extensions)&&null!==x?null==l?void 0:l.extensions:void 0;// ./node_modules/graphql/jsutils/isObjectLike.mjs
/**
 * Return true if `value` is object-like. A value is object-like if it's not
 * `null` and has a `typeof` result of "object".
 */
var x;this.extensions=null!==(t=null!=u?u:f)&&void 0!==t?t:Object.create(null),// Only properties prescribed by the spec should be enumerable.
// Keep the rest as non-enumerable.
Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),// Include (non-enumerable) stack trace.
/* c8 ignore start */
// FIXME: https://github.com/graphql/graphql-js/issues/2317
null!=l&&l.stack?Object.defineProperty(this,"stack",{value:l.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,d):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})
/* c8 ignore stop */}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let e=this.message;if(this.nodes)for(const i of this.nodes)i.loc&&(e+="\n\n"+l((a=i.loc).source,p(a.source,a.start)));else if(this.source&&this.locations)for(const a of this.locations)e+="\n\n"+l(this.source,a);// ./node_modules/graphql/language/printLocation.mjs
/**
 * Render a helpful description of the location in the GraphQL Source document.
 */
var a;return e}toJSON(){const e={message:this.message};return null!=this.locations&&(e.locations=this.locations),null!=this.path&&(e.path=this.path),null!=this.extensions&&Object.keys(this.extensions).length>0&&(e.extensions=this.extensions),e}}function m(e){return void 0===e||0===e.length?void 0:e}
/**
 * See: https://spec.graphql.org/draft/#sec-Errors
 */
/**
 * Prints a GraphQLError to a string, representing useful location information
 * about the error's position in the source.
 *
 * @deprecated Please use `error.toString` instead. Will be removed in v17
 */ // ./node_modules/graphql/error/syntaxError.mjs
/**
 * Produces a GraphQLError representing a syntax error, containing useful
 * descriptive information about the syntax error's position in the source.
 */
function h(e,a,i){return new d(`Syntax Error: ${i}`,{source:e,positions:[a]})}// ./node_modules/graphql/language/ast.mjs
/**
 * Contains a range of UTF-8 character offsets and token references that
 * identify the region of the source from which the AST derived.
 */
class f{
/**
   * The character offset at which this Node begins.
   */
/**
   * The character offset at which this Node ends.
   */
/**
   * The Token at which this Node begins.
   */
/**
   * The Token at which this Node ends.
   */
/**
   * The Source document the AST represents.
   */
constructor(e,a,i){this.start=e.start,this.end=a.end,this.startToken=e,this.endToken=a,this.source=i}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}}
/**
 * Represents a range of characters represented by a lexical token
 * within a Source.
 */class x{
/**
   * The kind of Token.
   */
/**
   * The character offset at which this Node begins.
   */
/**
   * The character offset at which this Node ends.
   */
/**
   * The 1-indexed line number on which this Token appears.
   */
/**
   * The 1-indexed column number at which this Token begins.
   */
/**
   * For non-punctuation tokens, represents the interpreted value of the token.
   *
   * Note: is undefined for punctuation tokens, but typed as string for
   * convenience in the parser.
   */
/**
   * Tokens exist as nodes in a double-linked-list amongst all tokens
   * including ignored tokens. <SOF> is always the first node and <EOF>
   * the last.
   */
constructor(e,a,i,n,t,s){this.kind=e,this.start=a,this.end=i,this.line=n,this.column=t,// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
this.value=s,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}}
/**
 * The list of all possible AST node types.
 */
/**
 * @internal
 */new Set(Object.keys({Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name",// Note: fragment variable definitions are deprecated and will removed in v17.0.0
"variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]}));
/** Name */
var v,b,g,y;
/**
 * ```
 * Digit :: one of
 *   - `0` `1` `2` `3` `4` `5` `6` `7` `8` `9`
 * ```
 * @internal
 */
function _(e){return e>=48&&e<=57}
/**
 * ```
 * Letter :: one of
 *   - `A` `B` `C` `D` `E` `F` `G` `H` `I` `J` `K` `L` `M`
 *   - `N` `O` `P` `Q` `R` `S` `T` `U` `V` `W` `X` `Y` `Z`
 *   - `a` `b` `c` `d` `e` `f` `g` `h` `i` `j` `k` `l` `m`
 *   - `n` `o` `p` `q` `r` `s` `t` `u` `v` `w` `x` `y` `z`
 * ```
 * @internal
 */function k(e){return e>=97&&e<=122||// A-Z
e>=65&&e<=90}
/**
 * ```
 * NameStart ::
 *   - Letter
 *   - `_`
 * ```
 * @internal
 */function w(e){return k(e)||95===e}
/**
 * ```
 * NameContinue ::
 *   - Letter
 *   - Digit
 *   - `_`
 * ```
 * @internal
 */function E(e){return k(e)||_(e)||95===e}// ./node_modules/graphql/language/blockString.mjs
/**
 * Produces the value of a block string from its parsed raw value, similar to
 * CoffeeScript's block string, Python's docstring trim or Ruby's strip_heredoc.
 *
 * This implements the GraphQL spec's BlockStringValue() static algorithm.
 *
 * @internal
 */
function T(e){var a;let i=Number.MAX_SAFE_INTEGER,n=null,t=-1;for(let a=0;a<e.length;++a){var s;const o=e[a],r=j(o);r!==o.length&&(n=null!==(s=n)&&void 0!==s?s:a,t=a,0!==a&&r<i&&(i=r))}return e.map(((e,a)=>0===a?e:e.slice(i)// Remove leading and trailing blank lines.
)).slice(null!==(a=n)&&void 0!==a?a:0,t+1)}function j(e){let a=0;for(;a<e.length&&(9===(i=e.charCodeAt(a))||32===i);)++a;// ./node_modules/graphql/language/characterClasses.mjs
/**
 * ```
 * WhiteSpace ::
 *   - "Horizontal Tab (U+0009)"
 *   - "Space (U+0020)"
 * ```
 * @internal
 */
var i;return a}
/**
 * @internal
 */!function(e){e.QUERY="query",e.MUTATION="mutation",e.SUBSCRIPTION="subscription"}(v||(v={})),function(e){e.QUERY="QUERY",e.MUTATION="MUTATION",e.SUBSCRIPTION="SUBSCRIPTION",e.FIELD="FIELD",e.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",e.FRAGMENT_SPREAD="FRAGMENT_SPREAD",e.INLINE_FRAGMENT="INLINE_FRAGMENT",e.VARIABLE_DEFINITION="VARIABLE_DEFINITION",e.SCHEMA="SCHEMA",e.SCALAR="SCALAR",e.OBJECT="OBJECT",e.FIELD_DEFINITION="FIELD_DEFINITION",e.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",e.INTERFACE="INTERFACE",e.UNION="UNION",e.ENUM="ENUM",e.ENUM_VALUE="ENUM_VALUE",e.INPUT_OBJECT="INPUT_OBJECT",e.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"}(b||(b={})),function(e){e.NAME="Name",e.DOCUMENT="Document",e.OPERATION_DEFINITION="OperationDefinition",e.VARIABLE_DEFINITION="VariableDefinition",e.SELECTION_SET="SelectionSet",e.FIELD="Field",e.ARGUMENT="Argument",e.FRAGMENT_SPREAD="FragmentSpread",e.INLINE_FRAGMENT="InlineFragment",e.FRAGMENT_DEFINITION="FragmentDefinition",e.VARIABLE="Variable",e.INT="IntValue",e.FLOAT="FloatValue",e.STRING="StringValue",e.BOOLEAN="BooleanValue",e.NULL="NullValue",e.ENUM="EnumValue",e.LIST="ListValue",e.OBJECT="ObjectValue",e.OBJECT_FIELD="ObjectField",e.DIRECTIVE="Directive",e.NAMED_TYPE="NamedType",e.LIST_TYPE="ListType",e.NON_NULL_TYPE="NonNullType",e.SCHEMA_DEFINITION="SchemaDefinition",e.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",e.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",e.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",e.FIELD_DEFINITION="FieldDefinition",e.INPUT_VALUE_DEFINITION="InputValueDefinition",e.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",e.UNION_TYPE_DEFINITION="UnionTypeDefinition",e.ENUM_TYPE_DEFINITION="EnumTypeDefinition",e.ENUM_VALUE_DEFINITION="EnumValueDefinition",e.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",e.DIRECTIVE_DEFINITION="DirectiveDefinition",e.SCHEMA_EXTENSION="SchemaExtension",e.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",e.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",e.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",e.UNION_TYPE_EXTENSION="UnionTypeExtension",e.ENUM_TYPE_EXTENSION="EnumTypeExtension",e.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension"}(g||(g={})),function(e){e.SOF="<SOF>",e.EOF="<EOF>",e.BANG="!",e.DOLLAR="$",e.AMP="&",e.PAREN_L="(",e.PAREN_R=")",e.SPREAD="...",e.COLON=":",e.EQUALS="=",e.AT="@",e.BRACKET_L="[",e.BRACKET_R="]",e.BRACE_L="{",e.PIPE="|",e.BRACE_R="}",e.NAME="Name",e.INT="Int",e.FLOAT="Float",e.STRING="String",e.BLOCK_STRING="BlockString",e.COMMENT="Comment"}(y||(y={}));// ./node_modules/graphql/language/lexer.mjs
/**
 * Given a Source object, creates a Lexer for that source.
 * A Lexer is a stateful stream generator in that every time
 * it is advanced, it returns the next token in the Source. Assuming the
 * source lexes, the final Token emitted by the lexer will be of kind
 * EOF, after which the lexer will repeatedly return the same EOF token
 * whenever called.
 */
class N{
/**
   * The previously focused non-ignored token.
   */
/**
   * The currently focused non-ignored token.
   */
/**
   * The (1-indexed) line containing the current token.
   */
/**
   * The character offset at which the current line begins.
   */
constructor(e){const a=new x(y.SOF,0,0,0,0);this.source=e,this.lastToken=a,this.token=a,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}
/**
   * Advances the token stream to the next non-ignored token.
   */advance(){this.lastToken=this.token;return this.token=this.lookahead()}
/**
   * Looks ahead and returns the next non-ignored token, but does not change
   * the state of Lexer.
   */lookahead(){let e=this.token;if(e.kind!==y.EOF)do{if(e.next)e=e.next;else{
// Read the next token and form a link in the token linked-list.
const a=D(this,e.end);// @ts-expect-error next is only mutable during parsing.
e.next=a,// @ts-expect-error prev is only mutable during parsing.
a.prev=e,e=a}}while(e.kind===y.COMMENT);return e}}
/**
 * @internal
 */
/**
 * A Unicode scalar value is any Unicode code point except surrogate code
 * points. In other words, the inclusive ranges of values 0x0000 to 0xD7FF and
 * 0xE000 to 0x10FFFF.
 *
 * SourceCharacter ::
 *   - "Any Unicode scalar value"
 */
function O(e){return e>=0&&e<=55295||e>=57344&&e<=1114111}
/**
 * The GraphQL specification defines source text as a sequence of unicode scalar
 * values (which Unicode defines to exclude surrogate code points). However
 * JavaScript defines strings as a sequence of UTF-16 code units which may
 * include surrogates. A surrogate pair is a valid source character as it
 * encodes a supplementary code point (above U+FFFF), but unpaired surrogate
 * code points are not valid source characters.
 */function A(e,a){return S(e.charCodeAt(a))&&I(e.charCodeAt(a+1))}function S(e){return e>=55296&&e<=56319}function I(e){return e>=56320&&e<=57343}
/**
 * Prints the code point (or end of file reference) at a given location in a
 * source for use in error messages.
 *
 * Printable ASCII is printed quoted, while other points are printed in Unicode
 * code point form (ie. U+1234).
 */function R(e,a){const i=e.source.body.codePointAt(a);if(void 0===i)return y.EOF;// Unicode code point
if(i>=32&&i<=126){
// Printable ASCII
const e=String.fromCodePoint(i);return'"'===e?"'\"'":`"${e}"`}return"U+"+i.toString(16).toUpperCase().padStart(4,"0")}
/**
 * Create a token with line and column location information.
 */function C(e,a,i,n,t){const s=e.line,o=1+i-e.lineStart;return new x(a,i,n,s,o,t)}
/**
 * Gets the next token from the source starting at the given position.
 *
 * This skips over whitespace until it finds the next lexable token, then lexes
 * punctuators immediately or calls the appropriate helper function for more
 * complicated tokens.
 */function D(e,a){const i=e.source.body,n=i.length;let t=a;for(;t<n;){const a=i.charCodeAt(t);// SourceCharacter
switch(a){
// Ignored ::
//   - UnicodeBOM
//   - WhiteSpace
//   - LineTerminator
//   - Comment
//   - Comma
// UnicodeBOM :: "Byte Order Mark (U+FEFF)"
// WhiteSpace ::
//   - "Horizontal Tab (U+0009)"
//   - "Space (U+0020)"
// Comma :: ,
case 65279:// <BOM>
case 9:// \t
case 32:// <space>
case 44:
// ,
++t;continue;
// LineTerminator ::
//   - "New Line (U+000A)"
//   - "Carriage Return (U+000D)" [lookahead != "New Line (U+000A)"]
//   - "Carriage Return (U+000D)" "New Line (U+000A)"
case 10:
// \n
++t,++e.line,e.lineStart=t;continue;case 13:
// \r
10===i.charCodeAt(t+1)?t+=2:++t,++e.line,e.lineStart=t;continue;
// Comment
case 35:
// #
return L(e,t);
// Token ::
//   - Punctuator
//   - Name
//   - IntValue
//   - FloatValue
//   - StringValue

// Punctuator :: one of ! $ & ( ) ... : = @ [ ] { | }
case 33:
// !
return C(e,y.BANG,t,t+1);case 36:
// $
return C(e,y.DOLLAR,t,t+1);case 38:
// &
return C(e,y.AMP,t,t+1);case 40:
// (
return C(e,y.PAREN_L,t,t+1);case 41:
// )
return C(e,y.PAREN_R,t,t+1);case 46:
// .
if(46===i.charCodeAt(t+1)&&46===i.charCodeAt(t+2))return C(e,y.SPREAD,t,t+3);break;case 58:
// :
return C(e,y.COLON,t,t+1);case 61:
// =
return C(e,y.EQUALS,t,t+1);case 64:
// @
return C(e,y.AT,t,t+1);case 91:
// [
return C(e,y.BRACKET_L,t,t+1);case 93:
// ]
return C(e,y.BRACKET_R,t,t+1);case 123:
// {
return C(e,y.BRACE_L,t,t+1);case 124:
// |
return C(e,y.PIPE,t,t+1);case 125:
// }
return C(e,y.BRACE_R,t,t+1);
// StringValue
case 34:
// "
return 34===i.charCodeAt(t+1)&&34===i.charCodeAt(t+2)?$(e,t):F(e,t)}// IntValue | FloatValue (Digit | -)
if(_(a)||45===a)return z(e,t,a);// Name
if(w(a))return V(e,t);throw h(e.source,t,39===a?"Unexpected single quote character ('), did you mean to use a double quote (\")?":O(a)||A(i,t)?`Unexpected character: ${R(e,t)}.`:`Invalid character: ${R(e,t)}.`)}return C(e,y.EOF,n,n)}
/**
 * Reads a comment token from the source file.
 *
 * ```
 * Comment :: # CommentChar* [lookahead != CommentChar]
 *
 * CommentChar :: SourceCharacter but not LineTerminator
 * ```
 */function L(e,a){const i=e.source.body,n=i.length;let t=a+1;for(;t<n;){const e=i.charCodeAt(t);// LineTerminator (\n | \r)
if(10===e||13===e)break;// SourceCharacter
if(O(e))++t;else{if(!A(i,t))break;t+=2}}return C(e,y.COMMENT,a,t,i.slice(a+1,t))}
/**
 * Reads a number token from the source file, either a FloatValue or an IntValue
 * depending on whether a FractionalPart or ExponentPart is encountered.
 *
 * ```
 * IntValue :: IntegerPart [lookahead != {Digit, `.`, NameStart}]
 *
 * IntegerPart ::
 *   - NegativeSign? 0
 *   - NegativeSign? NonZeroDigit Digit*
 *
 * NegativeSign :: -
 *
 * NonZeroDigit :: Digit but not `0`
 *
 * FloatValue ::
 *   - IntegerPart FractionalPart ExponentPart [lookahead != {Digit, `.`, NameStart}]
 *   - IntegerPart FractionalPart [lookahead != {Digit, `.`, NameStart}]
 *   - IntegerPart ExponentPart [lookahead != {Digit, `.`, NameStart}]
 *
 * FractionalPart :: . Digit+
 *
 * ExponentPart :: ExponentIndicator Sign? Digit+
 *
 * ExponentIndicator :: one of `e` `E`
 *
 * Sign :: one of + -
 * ```
 */function z(e,a,i){const n=e.source.body;let t=a,s=i,o=!1;// Zero (0)
if(// NegativeSign (-)
45===s&&(s=n.charCodeAt(++t)),48===s){if(s=n.charCodeAt(++t),_(s))throw h(e.source,t,`Invalid number, unexpected digit after 0: ${R(e,t)}.`)}else t=P(e,t,s),s=n.charCodeAt(t);// Full stop (.)
// Numbers cannot be followed by . or NameStart
if(46===s&&(o=!0,s=n.charCodeAt(++t),t=P(e,t,s),s=n.charCodeAt(t)),// E e
69!==s&&101!==s||(o=!0,s=n.charCodeAt(++t),// + -
43!==s&&45!==s||(s=n.charCodeAt(++t)),t=P(e,t,s),s=n.charCodeAt(t)),46===s||w(s))throw h(e.source,t,`Invalid number, expected digit but got: ${R(e,t)}.`);return C(e,o?y.FLOAT:y.INT,a,t,n.slice(a,t))}
/**
 * Returns the new position in the source after reading one or more digits.
 */function P(e,a,i){if(!_(i))throw h(e.source,a,`Invalid number, expected digit but got: ${R(e,a)}.`);const n=e.source.body;let t=a+1;// +1 to skip first firstCode
for(;_(n.charCodeAt(t));)++t;return t}
/**
 * Reads a single-quote string token from the source file.
 *
 * ```
 * StringValue ::
 *   - `""` [lookahead != `"`]
 *   - `"` StringCharacter+ `"`
 *
 * StringCharacter ::
 *   - SourceCharacter but not `"` or `\` or LineTerminator
 *   - `\u` EscapedUnicode
 *   - `\` EscapedCharacter
 *
 * EscapedUnicode ::
 *   - `{` HexDigit+ `}`
 *   - HexDigit HexDigit HexDigit HexDigit
 *
 * EscapedCharacter :: one of `"` `\` `/` `b` `f` `n` `r` `t`
 * ```
 */function F(e,a){const i=e.source.body,n=i.length;let t=a+1,s=t,o="";for(;t<n;){const n=i.charCodeAt(t);// Closing Quote (")
if(34===n)return o+=i.slice(s,t),C(e,y.STRING,a,t+1,o);// Escape Sequence (\)
if(92!==n){// LineTerminator (\n | \r)
if(10===n||13===n)break;// SourceCharacter
if(O(n))++t;else{if(!A(i,t))throw h(e.source,t,`Invalid character within String: ${R(e,t)}.`);t+=2}}else{o+=i.slice(s,t);const a=117===i.charCodeAt(t+1)?123===i.charCodeAt(t+2)?B(e,t):U(e,t):Z(e,t);o+=a.value,t+=a.size,s=t}}throw h(e.source,t,"Unterminated string.")}// The string value and lexed size of an escape sequence.
function B(e,a){const i=e.source.body;let n=0,t=3;// Cannot be larger than 12 chars (\u{00000000}).
for(;t<12;){const e=i.charCodeAt(a+t++);// Closing Brace (})
if(125===e){
// Must be at least 5 chars (\u{0}) and encode a Unicode scalar value.
if(t<5||!O(n))break;return{value:String.fromCodePoint(n),size:t}}// Append this hex digit to the code point.
if(n=n<<4|M(e),n<0)break}throw h(e.source,a,`Invalid Unicode escape sequence: "${i.slice(a,a+t)}".`)}function U(e,a){const i=e.source.body,n=q(i,a+2);if(O(n))return{value:String.fromCodePoint(n),size:6};// GraphQL allows JSON-style surrogate pair escape sequences, but only when
// a valid pair is formed.
if(S(n)&&92===i.charCodeAt(a+6)&&117===i.charCodeAt(a+7)){const e=q(i,a+8);if(I(e))
// JavaScript defines strings as a sequence of UTF-16 code units and
// encodes Unicode code points above U+FFFF using a surrogate pair of
// code units. Since this is a surrogate pair escape sequence, just
// include both codes into the JavaScript string value. Had JavaScript
// not been internally based on UTF-16, then this surrogate pair would
// be decoded to retrieve the supplementary code point.
return{value:String.fromCodePoint(n,e),size:12}}throw h(e.source,a,`Invalid Unicode escape sequence: "${i.slice(a,a+6)}".`)}
/**
 * Reads four hexadecimal characters and returns the positive integer that 16bit
 * hexadecimal string represents. For example, "000f" will return 15, and "dead"
 * will return 57005.
 *
 * Returns a negative number if any char was not a valid hexadecimal digit.
 */function q(e,a){
// readHexDigit() returns -1 on error. ORing a negative value with any other
// value always produces a negative value.
return M(e.charCodeAt(a))<<12|M(e.charCodeAt(a+1))<<8|M(e.charCodeAt(a+2))<<4|M(e.charCodeAt(a+3))}
/**
 * Reads a hexadecimal character and returns its positive integer value (0-15).
 *
 * '0' becomes 0, '9' becomes 9
 * 'A' becomes 10, 'F' becomes 15
 * 'a' becomes 10, 'f' becomes 15
 *
 * Returns -1 if the provided character code was not a valid hexadecimal digit.
 *
 * HexDigit :: one of
 *   - `0` `1` `2` `3` `4` `5` `6` `7` `8` `9`
 *   - `A` `B` `C` `D` `E` `F`
 *   - `a` `b` `c` `d` `e` `f`
 */function M(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}
/**
 * | Escaped Character | Code Point | Character Name               |
 * | ----------------- | ---------- | ---------------------------- |
 * | `"`               | U+0022     | double quote                 |
 * | `\`               | U+005C     | reverse solidus (back slash) |
 * | `/`               | U+002F     | solidus (forward slash)      |
 * | `b`               | U+0008     | backspace                    |
 * | `f`               | U+000C     | form feed                    |
 * | `n`               | U+000A     | line feed (new line)         |
 * | `r`               | U+000D     | carriage return              |
 * | `t`               | U+0009     | horizontal tab               |
 */function Z(e,a){const i=e.source.body;switch(i.charCodeAt(a+1)){case 34:
// "
return{value:'"',size:2};case 92:
// \
return{value:"\\",size:2};case 47:
// /
return{value:"/",size:2};case 98:
// b
return{value:"\b",size:2};case 102:
// f
return{value:"\f",size:2};case 110:
// n
return{value:"\n",size:2};case 114:
// r
return{value:"\r",size:2};case 116:
// t
return{value:"\t",size:2}}throw h(e.source,a,`Invalid character escape sequence: "${i.slice(a,a+2)}".`)}
/**
 * Reads a block string token from the source file.
 *
 * ```
 * StringValue ::
 *   - `"""` BlockStringCharacter* `"""`
 *
 * BlockStringCharacter ::
 *   - SourceCharacter but not `"""` or `\"""`
 *   - `\"""`
 * ```
 */function $(e,a){const i=e.source.body,n=i.length;let t=e.lineStart,s=a+3,o=s,r="";const c=[];for(;s<n;){const n=i.charCodeAt(s);// Closing Triple-Quote (""")
if(34===n&&34===i.charCodeAt(s+1)&&34===i.charCodeAt(s+2)){r+=i.slice(o,s),c.push(r);const n=C(e,y.BLOCK_STRING,a,s+3,// Return a string of the lines joined with U+000A.
T(c).join("\n"));return e.line+=c.length-1,e.lineStart=t,n}// Escaped Triple-Quote (\""")
if(92!==n||34!==i.charCodeAt(s+1)||34!==i.charCodeAt(s+2)||34!==i.charCodeAt(s+3))// LineTerminator
if(10!==n&&13!==n)// SourceCharacter
if(O(n))++s;else{if(!A(i,s))throw h(e.source,s,`Invalid character within String: ${R(e,s)}.`);s+=2}else r+=i.slice(o,s),c.push(r),13===n&&10===i.charCodeAt(s+1)?s+=2:++s,r="",o=s,t=s;else r+=i.slice(o,s),o=s+1,// skip only slash
s+=4}throw h(e.source,s,"Unterminated string.")}
/**
 * Reads an alphanumeric + underscore name from the source.
 *
 * ```
 * Name ::
 *   - NameStart NameContinue* [lookahead != NameContinue]
 * ```
 */function V(e,a){const i=e.source.body,n=i.length;let t=a+1;for(;t<n;){if(!E(i.charCodeAt(t)))break;++t}return C(e,y.NAME,a,t,i.slice(a,t))}// ./node_modules/graphql/jsutils/devAssert.mjs
function K(e,a){if(!Boolean(e))throw new Error(a)}
/**
 * Used to print values in error messages.
 */
function Y(e){return G(e,[])}function G(e,a){switch(typeof e){case"string":return JSON.stringify(e);case"function":return e.name?`[function ${e.name}]`:"[function]";case"object":return function(e,a){if(null===e)return"null";if(a.includes(e))return"[Circular]";const i=[...a,e];if(function(e){return"function"==typeof e.toJSON}(e)){const a=e.toJSON();// check for infinite recursion
if(a!==e)return"string"==typeof a?a:G(a,i)}else if(Array.isArray(e))return function(e,a){if(0===e.length)return"[]";if(a.length>2)return"[Array]";const i=Math.min(10,e.length),n=e.length-i,t=[];for(let n=0;n<i;++n)t.push(G(e[n],a));1===n?t.push("... 1 more item"):n>1&&t.push(`... ${n} more items`);return"["+t.join(", ")+"]"}(e,i);return function(e,a){const i=Object.entries(e);if(0===i.length)return"{}";if(a.length>2)return"["+function(e){const a=Object.prototype.toString.call(e).replace(/^\[object /,"").replace(/]$/,"");if("Object"===a&&"function"==typeof e.constructor){const a=e.constructor.name;if("string"==typeof a&&""!==a)return a}return a}(e)+"]";const n=i.map((([e,i])=>e+": "+G(i,a)));return"{ "+n.join(", ")+" }"}(e,i)}(e,a);default:return String(e)}}// ./node_modules/graphql/jsutils/instanceOf.mjs
/* c8 ignore next 3 */
const J=
/* c8 ignore next 6 */
// FIXME: https://github.com/graphql/graphql-js/issues/2317
globalThis.process&&// eslint-disable-next-line no-undef
!0?function(e,a){return e instanceof a}:function(e,a){if(e instanceof a)return!0;if("object"==typeof e&&null!==e){var i;
// Prefer Symbol.toStringTag since it is immune to minification.
const n=a.prototype[Symbol.toStringTag];if(n===(// We still need to support constructor's name to detect conflicts with older versions of this library.
Symbol.toStringTag in e?e[Symbol.toStringTag]:null===(i=e.constructor)||void 0===i?void 0:i.name)){const a=Y(e);throw new Error(`Cannot use ${n} "${a}" from another module or realm.\n\nEnsure that there is only one instance of "graphql" in the node_modules\ndirectory. If different versions of "graphql" are the dependencies of other\nrelied on modules, use "resolutions" to ensure only one version is installed.\n\nhttps://yarnpkg.com/en/docs/selective-version-resolutions\n\nDuplicate "graphql" modules cannot be used at the same time since different\nversions may have different capabilities and behavior. The data from one\nversion used in the function from another could produce confusing and\nspurious results.`)}}return!1};
/**
 * A replacement for instanceof which includes an error warning when multi-realm
 * constructors are detected.
 * See: https://expressjs.com/en/advanced/best-practice-performance.html#set-node_env-to-production
 * See: https://webpack.js.org/guides/production/
 */ // ./node_modules/graphql/language/source.mjs
/**
 * A representation of source input to GraphQL. The `name` and `locationOffset` parameters are
 * optional, but they are useful for clients who store GraphQL documents in source files.
 * For example, if the GraphQL input starts at line 40 in a file named `Foo.graphql`, it might
 * be useful for `name` to be `"Foo.graphql"` and location to be `{ line: 40, column: 1 }`.
 * The `line` and `column` properties in `locationOffset` are 1-indexed.
 */
class H{constructor(e,a="GraphQL request",i={line:1,column:1}){"string"==typeof e||K(!1,`Body must be a string. Received: ${Y(e)}.`),this.body=e,this.name=a,this.locationOffset=i,this.locationOffset.line>0||K(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||K(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}}
/**
 * Test if the given value is a Source object.
 *
 * @internal
 */
/**
 * This class is exported only to assist people in implementing their own parsers
 * without duplicating too much code and should be used only as last resort for cases
 * such as experimental syntax or if certain features could not be contributed upstream.
 *
 * It is still part of the internal API and is versioned, so any changes to it are never
 * considered breaking changes. If you still need to support multiple versions of the
 * library, please use the `versionInfo` variable for version detection.
 *
 * @internal
 */
class W{constructor(e,a={}){const i=function(e){return J(e,H)}(e)?e:new H(e);this._lexer=new N(i),this._options=a,this._tokenCounter=0}get tokenCount(){return this._tokenCounter}
/**
   * Converts a name lex token into a name parse node.
   */parseName(){const e=this.expectToken(y.NAME);return this.node(e,{kind:g.NAME,value:e.value})}// Implements the parsing rules in the Document section.
/**
   * Document : Definition+
   */
parseDocument(){return this.node(this._lexer.token,{kind:g.DOCUMENT,definitions:this.many(y.SOF,this.parseDefinition,y.EOF)})}
/**
   * Definition :
   *   - ExecutableDefinition
   *   - TypeSystemDefinition
   *   - TypeSystemExtension
   *
   * ExecutableDefinition :
   *   - OperationDefinition
   *   - FragmentDefinition
   *
   * TypeSystemDefinition :
   *   - SchemaDefinition
   *   - TypeDefinition
   *   - DirectiveDefinition
   *
   * TypeDefinition :
   *   - ScalarTypeDefinition
   *   - ObjectTypeDefinition
   *   - InterfaceTypeDefinition
   *   - UnionTypeDefinition
   *   - EnumTypeDefinition
   *   - InputObjectTypeDefinition
   */parseDefinition(){if(this.peek(y.BRACE_L))return this.parseOperationDefinition();// Many definitions begin with a description and require a lookahead.
const e=this.peekDescription(),a=e?this._lexer.lookahead():this._lexer.token;if(a.kind===y.NAME){switch(a.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(e)throw h(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(a.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(a)}// Implements the parsing rules in the Operations section.
/**
   * OperationDefinition :
   *  - SelectionSet
   *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
   */
parseOperationDefinition(){const e=this._lexer.token;if(this.peek(y.BRACE_L))return this.node(e,{kind:g.OPERATION_DEFINITION,operation:v.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const a=this.parseOperationType();let i;return this.peek(y.NAME)&&(i=this.parseName()),this.node(e,{kind:g.OPERATION_DEFINITION,operation:a,name:i,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}
/**
   * OperationType : one of query mutation subscription
   */parseOperationType(){const e=this.expectToken(y.NAME);switch(e.value){case"query":return v.QUERY;case"mutation":return v.MUTATION;case"subscription":return v.SUBSCRIPTION}throw this.unexpected(e)}
/**
   * VariableDefinitions : ( VariableDefinition+ )
   */parseVariableDefinitions(){return this.optionalMany(y.PAREN_L,this.parseVariableDefinition,y.PAREN_R)}
/**
   * VariableDefinition : Variable : Type DefaultValue? Directives[Const]?
   */parseVariableDefinition(){return this.node(this._lexer.token,{kind:g.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(y.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(y.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}
/**
   * Variable : $ Name
   */parseVariable(){const e=this._lexer.token;return this.expectToken(y.DOLLAR),this.node(e,{kind:g.VARIABLE,name:this.parseName()})}
/**
   * ```
   * SelectionSet : { Selection+ }
   * ```
   */parseSelectionSet(){return this.node(this._lexer.token,{kind:g.SELECTION_SET,selections:this.many(y.BRACE_L,this.parseSelection,y.BRACE_R)})}
/**
   * Selection :
   *   - Field
   *   - FragmentSpread
   *   - InlineFragment
   */parseSelection(){return this.peek(y.SPREAD)?this.parseFragment():this.parseField()}
/**
   * Field : Alias? Name Arguments? Directives? SelectionSet?
   *
   * Alias : Name :
   */parseField(){const e=this._lexer.token,a=this.parseName();let i,n;return this.expectOptionalToken(y.COLON)?(i=a,n=this.parseName()):n=a,this.node(e,{kind:g.FIELD,alias:i,name:n,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(y.BRACE_L)?this.parseSelectionSet():void 0})}
/**
   * Arguments[Const] : ( Argument[?Const]+ )
   */parseArguments(e){const a=e?this.parseConstArgument:this.parseArgument;return this.optionalMany(y.PAREN_L,a,y.PAREN_R)}
/**
   * Argument[Const] : Name : Value[?Const]
   */parseArgument(e=!1){const a=this._lexer.token,i=this.parseName();return this.expectToken(y.COLON),this.node(a,{kind:g.ARGUMENT,name:i,value:this.parseValueLiteral(e)})}parseConstArgument(){return this.parseArgument(!0)}// Implements the parsing rules in the Fragments section.
/**
   * Corresponds to both FragmentSpread and InlineFragment in the spec.
   *
   * FragmentSpread : ... FragmentName Directives?
   *
   * InlineFragment : ... TypeCondition? Directives? SelectionSet
   */
parseFragment(){const e=this._lexer.token;this.expectToken(y.SPREAD);const a=this.expectOptionalKeyword("on");return!a&&this.peek(y.NAME)?this.node(e,{kind:g.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(e,{kind:g.INLINE_FRAGMENT,typeCondition:a?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}
/**
   * FragmentDefinition :
   *   - fragment FragmentName on TypeCondition Directives? SelectionSet
   *
   * TypeCondition : NamedType
   */parseFragmentDefinition(){const e=this._lexer.token;// Legacy support for defining variables within fragments changes
// the grammar of FragmentDefinition:
//   - fragment FragmentName VariableDefinitions? on TypeCondition Directives? SelectionSet
return this.expectKeyword("fragment"),!0===this._options.allowLegacyFragmentVariables?this.node(e,{kind:g.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(e,{kind:g.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}
/**
   * FragmentName : Name but not `on`
   */parseFragmentName(){if("on"===this._lexer.token.value)throw this.unexpected();return this.parseName()}// Implements the parsing rules in the Values section.
/**
   * Value[Const] :
   *   - [~Const] Variable
   *   - IntValue
   *   - FloatValue
   *   - StringValue
   *   - BooleanValue
   *   - NullValue
   *   - EnumValue
   *   - ListValue[?Const]
   *   - ObjectValue[?Const]
   *
   * BooleanValue : one of `true` `false`
   *
   * NullValue : `null`
   *
   * EnumValue : Name but not `true`, `false` or `null`
   */
parseValueLiteral(e){const a=this._lexer.token;switch(a.kind){case y.BRACKET_L:return this.parseList(e);case y.BRACE_L:return this.parseObject(e);case y.INT:return this.advanceLexer(),this.node(a,{kind:g.INT,value:a.value});case y.FLOAT:return this.advanceLexer(),this.node(a,{kind:g.FLOAT,value:a.value});case y.STRING:case y.BLOCK_STRING:return this.parseStringLiteral();case y.NAME:switch(this.advanceLexer(),a.value){case"true":return this.node(a,{kind:g.BOOLEAN,value:!0});case"false":return this.node(a,{kind:g.BOOLEAN,value:!1});case"null":return this.node(a,{kind:g.NULL});default:return this.node(a,{kind:g.ENUM,value:a.value})}case y.DOLLAR:if(e){if(this.expectToken(y.DOLLAR),this._lexer.token.kind===y.NAME){const e=this._lexer.token.value;throw h(this._lexer.source,a.start,`Unexpected variable "$${e}" in constant value.`)}throw this.unexpected(a)}return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const e=this._lexer.token;return this.advanceLexer(),this.node(e,{kind:g.STRING,value:e.value,block:e.kind===y.BLOCK_STRING})}
/**
   * ListValue[Const] :
   *   - [ ]
   *   - [ Value[?Const]+ ]
   */parseList(e){return this.node(this._lexer.token,{kind:g.LIST,values:this.any(y.BRACKET_L,(()=>this.parseValueLiteral(e)),y.BRACKET_R)})}
/**
   * ```
   * ObjectValue[Const] :
   *   - { }
   *   - { ObjectField[?Const]+ }
   * ```
   */parseObject(e){return this.node(this._lexer.token,{kind:g.OBJECT,fields:this.any(y.BRACE_L,(()=>this.parseObjectField(e)),y.BRACE_R)})}
/**
   * ObjectField[Const] : Name : Value[?Const]
   */parseObjectField(e){const a=this._lexer.token,i=this.parseName();return this.expectToken(y.COLON),this.node(a,{kind:g.OBJECT_FIELD,name:i,value:this.parseValueLiteral(e)})}// Implements the parsing rules in the Directives section.
/**
   * Directives[Const] : Directive[?Const]+
   */
parseDirectives(e){const a=[];for(;this.peek(y.AT);)a.push(this.parseDirective(e));return a}parseConstDirectives(){return this.parseDirectives(!0)}
/**
   * ```
   * Directive[Const] : @ Name Arguments[?Const]?
   * ```
   */parseDirective(e){const a=this._lexer.token;return this.expectToken(y.AT),this.node(a,{kind:g.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(e)})}// Implements the parsing rules in the Types section.
/**
   * Type :
   *   - NamedType
   *   - ListType
   *   - NonNullType
   */
parseTypeReference(){const e=this._lexer.token;let a;if(this.expectOptionalToken(y.BRACKET_L)){const i=this.parseTypeReference();this.expectToken(y.BRACKET_R),a=this.node(e,{kind:g.LIST_TYPE,type:i})}else a=this.parseNamedType();return this.expectOptionalToken(y.BANG)?this.node(e,{kind:g.NON_NULL_TYPE,type:a}):a}
/**
   * NamedType : Name
   */parseNamedType(){return this.node(this._lexer.token,{kind:g.NAMED_TYPE,name:this.parseName()})}// Implements the parsing rules in the Type Definition section.
peekDescription(){return this.peek(y.STRING)||this.peek(y.BLOCK_STRING)}
/**
   * Description : StringValue
   */parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}
/**
   * ```
   * SchemaDefinition : Description? schema Directives[Const]? { OperationTypeDefinition+ }
   * ```
   */parseSchemaDefinition(){const e=this._lexer.token,a=this.parseDescription();this.expectKeyword("schema");const i=this.parseConstDirectives(),n=this.many(y.BRACE_L,this.parseOperationTypeDefinition,y.BRACE_R);return this.node(e,{kind:g.SCHEMA_DEFINITION,description:a,directives:i,operationTypes:n})}
/**
   * OperationTypeDefinition : OperationType : NamedType
   */parseOperationTypeDefinition(){const e=this._lexer.token,a=this.parseOperationType();this.expectToken(y.COLON);const i=this.parseNamedType();return this.node(e,{kind:g.OPERATION_TYPE_DEFINITION,operation:a,type:i})}
/**
   * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
   */parseScalarTypeDefinition(){const e=this._lexer.token,a=this.parseDescription();this.expectKeyword("scalar");const i=this.parseName(),n=this.parseConstDirectives();return this.node(e,{kind:g.SCALAR_TYPE_DEFINITION,description:a,name:i,directives:n})}
/**
   * ObjectTypeDefinition :
   *   Description?
   *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
   */parseObjectTypeDefinition(){const e=this._lexer.token,a=this.parseDescription();this.expectKeyword("type");const i=this.parseName(),n=this.parseImplementsInterfaces(),t=this.parseConstDirectives(),s=this.parseFieldsDefinition();return this.node(e,{kind:g.OBJECT_TYPE_DEFINITION,description:a,name:i,interfaces:n,directives:t,fields:s})}
/**
   * ImplementsInterfaces :
   *   - implements `&`? NamedType
   *   - ImplementsInterfaces & NamedType
   */parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(y.AMP,this.parseNamedType):[]}
/**
   * ```
   * FieldsDefinition : { FieldDefinition+ }
   * ```
   */parseFieldsDefinition(){return this.optionalMany(y.BRACE_L,this.parseFieldDefinition,y.BRACE_R)}
/**
   * FieldDefinition :
   *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
   */parseFieldDefinition(){const e=this._lexer.token,a=this.parseDescription(),i=this.parseName(),n=this.parseArgumentDefs();this.expectToken(y.COLON);const t=this.parseTypeReference(),s=this.parseConstDirectives();return this.node(e,{kind:g.FIELD_DEFINITION,description:a,name:i,arguments:n,type:t,directives:s})}
/**
   * ArgumentsDefinition : ( InputValueDefinition+ )
   */parseArgumentDefs(){return this.optionalMany(y.PAREN_L,this.parseInputValueDef,y.PAREN_R)}
/**
   * InputValueDefinition :
   *   - Description? Name : Type DefaultValue? Directives[Const]?
   */parseInputValueDef(){const e=this._lexer.token,a=this.parseDescription(),i=this.parseName();this.expectToken(y.COLON);const n=this.parseTypeReference();let t;this.expectOptionalToken(y.EQUALS)&&(t=this.parseConstValueLiteral());const s=this.parseConstDirectives();return this.node(e,{kind:g.INPUT_VALUE_DEFINITION,description:a,name:i,type:n,defaultValue:t,directives:s})}
/**
   * InterfaceTypeDefinition :
   *   - Description? interface Name Directives[Const]? FieldsDefinition?
   */parseInterfaceTypeDefinition(){const e=this._lexer.token,a=this.parseDescription();this.expectKeyword("interface");const i=this.parseName(),n=this.parseImplementsInterfaces(),t=this.parseConstDirectives(),s=this.parseFieldsDefinition();return this.node(e,{kind:g.INTERFACE_TYPE_DEFINITION,description:a,name:i,interfaces:n,directives:t,fields:s})}
/**
   * UnionTypeDefinition :
   *   - Description? union Name Directives[Const]? UnionMemberTypes?
   */parseUnionTypeDefinition(){const e=this._lexer.token,a=this.parseDescription();this.expectKeyword("union");const i=this.parseName(),n=this.parseConstDirectives(),t=this.parseUnionMemberTypes();return this.node(e,{kind:g.UNION_TYPE_DEFINITION,description:a,name:i,directives:n,types:t})}
/**
   * UnionMemberTypes :
   *   - = `|`? NamedType
   *   - UnionMemberTypes | NamedType
   */parseUnionMemberTypes(){return this.expectOptionalToken(y.EQUALS)?this.delimitedMany(y.PIPE,this.parseNamedType):[]}
/**
   * EnumTypeDefinition :
   *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
   */parseEnumTypeDefinition(){const e=this._lexer.token,a=this.parseDescription();this.expectKeyword("enum");const i=this.parseName(),n=this.parseConstDirectives(),t=this.parseEnumValuesDefinition();return this.node(e,{kind:g.ENUM_TYPE_DEFINITION,description:a,name:i,directives:n,values:t})}
/**
   * ```
   * EnumValuesDefinition : { EnumValueDefinition+ }
   * ```
   */parseEnumValuesDefinition(){return this.optionalMany(y.BRACE_L,this.parseEnumValueDefinition,y.BRACE_R)}
/**
   * EnumValueDefinition : Description? EnumValue Directives[Const]?
   */parseEnumValueDefinition(){const e=this._lexer.token,a=this.parseDescription(),i=this.parseEnumValueName(),n=this.parseConstDirectives();return this.node(e,{kind:g.ENUM_VALUE_DEFINITION,description:a,name:i,directives:n})}
/**
   * EnumValue : Name but not `true`, `false` or `null`
   */parseEnumValueName(){if("true"===this._lexer.token.value||"false"===this._lexer.token.value||"null"===this._lexer.token.value)throw h(this._lexer.source,this._lexer.token.start,`${X(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}
/**
   * InputObjectTypeDefinition :
   *   - Description? input Name Directives[Const]? InputFieldsDefinition?
   */parseInputObjectTypeDefinition(){const e=this._lexer.token,a=this.parseDescription();this.expectKeyword("input");const i=this.parseName(),n=this.parseConstDirectives(),t=this.parseInputFieldsDefinition();return this.node(e,{kind:g.INPUT_OBJECT_TYPE_DEFINITION,description:a,name:i,directives:n,fields:t})}
/**
   * ```
   * InputFieldsDefinition : { InputValueDefinition+ }
   * ```
   */parseInputFieldsDefinition(){return this.optionalMany(y.BRACE_L,this.parseInputValueDef,y.BRACE_R)}
/**
   * TypeSystemExtension :
   *   - SchemaExtension
   *   - TypeExtension
   *
   * TypeExtension :
   *   - ScalarTypeExtension
   *   - ObjectTypeExtension
   *   - InterfaceTypeExtension
   *   - UnionTypeExtension
   *   - EnumTypeExtension
   *   - InputObjectTypeDefinition
   */parseTypeSystemExtension(){const e=this._lexer.lookahead();if(e.kind===y.NAME)switch(e.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(e)}
/**
   * ```
   * SchemaExtension :
   *  - extend schema Directives[Const]? { OperationTypeDefinition+ }
   *  - extend schema Directives[Const]
   * ```
   */parseSchemaExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const a=this.parseConstDirectives(),i=this.optionalMany(y.BRACE_L,this.parseOperationTypeDefinition,y.BRACE_R);if(0===a.length&&0===i.length)throw this.unexpected();return this.node(e,{kind:g.SCHEMA_EXTENSION,directives:a,operationTypes:i})}
/**
   * ScalarTypeExtension :
   *   - extend scalar Name Directives[Const]
   */parseScalarTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const a=this.parseName(),i=this.parseConstDirectives();if(0===i.length)throw this.unexpected();return this.node(e,{kind:g.SCALAR_TYPE_EXTENSION,name:a,directives:i})}
/**
   * ObjectTypeExtension :
   *  - extend type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend type Name ImplementsInterfaces? Directives[Const]
   *  - extend type Name ImplementsInterfaces
   */parseObjectTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const a=this.parseName(),i=this.parseImplementsInterfaces(),n=this.parseConstDirectives(),t=this.parseFieldsDefinition();if(0===i.length&&0===n.length&&0===t.length)throw this.unexpected();return this.node(e,{kind:g.OBJECT_TYPE_EXTENSION,name:a,interfaces:i,directives:n,fields:t})}
/**
   * InterfaceTypeExtension :
   *  - extend interface Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend interface Name ImplementsInterfaces? Directives[Const]
   *  - extend interface Name ImplementsInterfaces
   */parseInterfaceTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const a=this.parseName(),i=this.parseImplementsInterfaces(),n=this.parseConstDirectives(),t=this.parseFieldsDefinition();if(0===i.length&&0===n.length&&0===t.length)throw this.unexpected();return this.node(e,{kind:g.INTERFACE_TYPE_EXTENSION,name:a,interfaces:i,directives:n,fields:t})}
/**
   * UnionTypeExtension :
   *   - extend union Name Directives[Const]? UnionMemberTypes
   *   - extend union Name Directives[Const]
   */parseUnionTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const a=this.parseName(),i=this.parseConstDirectives(),n=this.parseUnionMemberTypes();if(0===i.length&&0===n.length)throw this.unexpected();return this.node(e,{kind:g.UNION_TYPE_EXTENSION,name:a,directives:i,types:n})}
/**
   * EnumTypeExtension :
   *   - extend enum Name Directives[Const]? EnumValuesDefinition
   *   - extend enum Name Directives[Const]
   */parseEnumTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const a=this.parseName(),i=this.parseConstDirectives(),n=this.parseEnumValuesDefinition();if(0===i.length&&0===n.length)throw this.unexpected();return this.node(e,{kind:g.ENUM_TYPE_EXTENSION,name:a,directives:i,values:n})}
/**
   * InputObjectTypeExtension :
   *   - extend input Name Directives[Const]? InputFieldsDefinition
   *   - extend input Name Directives[Const]
   */parseInputObjectTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const a=this.parseName(),i=this.parseConstDirectives(),n=this.parseInputFieldsDefinition();if(0===i.length&&0===n.length)throw this.unexpected();return this.node(e,{kind:g.INPUT_OBJECT_TYPE_EXTENSION,name:a,directives:i,fields:n})}
/**
   * ```
   * DirectiveDefinition :
   *   - Description? directive @ Name ArgumentsDefinition? `repeatable`? on DirectiveLocations
   * ```
   */parseDirectiveDefinition(){const e=this._lexer.token,a=this.parseDescription();this.expectKeyword("directive"),this.expectToken(y.AT);const i=this.parseName(),n=this.parseArgumentDefs(),t=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const s=this.parseDirectiveLocations();return this.node(e,{kind:g.DIRECTIVE_DEFINITION,description:a,name:i,arguments:n,repeatable:t,locations:s})}
/**
   * DirectiveLocations :
   *   - `|`? DirectiveLocation
   *   - DirectiveLocations | DirectiveLocation
   */parseDirectiveLocations(){return this.delimitedMany(y.PIPE,this.parseDirectiveLocation)}
/*
   * DirectiveLocation :
   *   - ExecutableDirectiveLocation
   *   - TypeSystemDirectiveLocation
   *
   * ExecutableDirectiveLocation : one of
   *   `QUERY`
   *   `MUTATION`
   *   `SUBSCRIPTION`
   *   `FIELD`
   *   `FRAGMENT_DEFINITION`
   *   `FRAGMENT_SPREAD`
   *   `INLINE_FRAGMENT`
   *
   * TypeSystemDirectiveLocation : one of
   *   `SCHEMA`
   *   `SCALAR`
   *   `OBJECT`
   *   `FIELD_DEFINITION`
   *   `ARGUMENT_DEFINITION`
   *   `INTERFACE`
   *   `UNION`
   *   `ENUM`
   *   `ENUM_VALUE`
   *   `INPUT_OBJECT`
   *   `INPUT_FIELD_DEFINITION`
   */parseDirectiveLocation(){const e=this._lexer.token,a=this.parseName();if(Object.prototype.hasOwnProperty.call(b,a.value))return a;throw this.unexpected(e)}// Core parsing utility functions
/**
   * Returns a node that, if configured to do so, sets a "loc" field as a
   * location object, used to identify the place in the source that created a
   * given parsed object.
   */
node(e,a){return!0!==this._options.noLocation&&(a.loc=new f(e,this._lexer.lastToken,this._lexer.source)),a}
/**
   * Determines if the next token is of a given kind
   */peek(e){return this._lexer.token.kind===e}
/**
   * If the next token is of the given kind, return that token after advancing the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */expectToken(e){const a=this._lexer.token;if(a.kind===e)return this.advanceLexer(),a;throw h(this._lexer.source,a.start,`Expected ${Q(e)}, found ${X(a)}.`)}
/**
   * If the next token is of the given kind, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */expectOptionalToken(e){return this._lexer.token.kind===e&&(this.advanceLexer(),!0)}
/**
   * If the next token is a given keyword, advance the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */expectKeyword(e){const a=this._lexer.token;if(a.kind!==y.NAME||a.value!==e)throw h(this._lexer.source,a.start,`Expected "${e}", found ${X(a)}.`);this.advanceLexer()}
/**
   * If the next token is a given keyword, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */expectOptionalKeyword(e){const a=this._lexer.token;return a.kind===y.NAME&&a.value===e&&(this.advanceLexer(),!0)}
/**
   * Helper function for creating an error when an unexpected lexed token is encountered.
   */unexpected(e){const a=null!=e?e:this._lexer.token;return h(this._lexer.source,a.start,`Unexpected ${X(a)}.`)}
/**
   * Returns a possibly empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */any(e,a,i){this.expectToken(e);const n=[];for(;!this.expectOptionalToken(i);)n.push(a.call(this));return n}
/**
   * Returns a list of parse nodes, determined by the parseFn.
   * It can be empty only if open token is missing otherwise it will always return non-empty list
   * that begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */optionalMany(e,a,i){if(this.expectOptionalToken(e)){const e=[];do{e.push(a.call(this))}while(!this.expectOptionalToken(i));return e}return[]}
/**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */many(e,a,i){this.expectToken(e);const n=[];do{n.push(a.call(this))}while(!this.expectOptionalToken(i));return n}
/**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list may begin with a lex token of delimiterKind followed by items separated by lex tokens of tokenKind.
   * Advances the parser to the next lex token after last item in the list.
   */delimitedMany(e,a){this.expectOptionalToken(e);const i=[];do{i.push(a.call(this))}while(this.expectOptionalToken(e));return i}advanceLexer(){const{maxTokens:e}=this._options,a=this._lexer.advance();if(a.kind!==y.EOF&&(++this._tokenCounter,void 0!==e&&this._tokenCounter>e))throw h(this._lexer.source,a.start,`Document contains more that ${e} tokens. Parsing aborted.`)}}
/**
 * A helper function to describe a token as a string for debugging.
 */function X(e){const a=e.value;return Q(e.kind)+(null!=a?` "${a}"`:"")}
/**
 * A helper function to describe a token kind as a string for debugging.
 */function Q(e){return function(e){return e===y.BANG||e===y.DOLLAR||e===y.AMP||e===y.PAREN_L||e===y.PAREN_R||e===y.SPREAD||e===y.COLON||e===y.EQUALS||e===y.AT||e===y.BRACKET_L||e===y.BRACKET_R||e===y.BRACE_L||e===y.PIPE||e===y.BRACE_R}(e)?`"${e}"`:e}// ./node_modules/graphql-tag/lib/index.js
var ee=new Map,ae=new Map,ie=!0,ne=!1;function te(e){return e.replace(/[\s,]+/g," ").trim()}function se(e){var a=new Set,i=[];return e.definitions.forEach((function(e){if("FragmentDefinition"===e.kind){var n=e.name.value,t=te((o=e.loc).source.body.substring(o.start,o.end)),s=ae.get(n);s&&!s.has(t)?ie&&console.warn("Warning: fragment with name "+n+" already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names"):s||ae.set(n,s=new Set),s.add(t),a.has(t)||(a.add(t),i.push(e))}else i.push(e);var o})),o(o({},e),{definitions:i})}function oe(e){var a=te(e);if(!ee.has(a)){var i=// ./node_modules/graphql/language/parser.mjs
/**
 * Configuration options to control parser behavior
 */
/**
 * Given a GraphQL source, parses it into a Document.
 * Throws GraphQLError if a syntax error is encountered.
 */
function(e,a){const i=new W(e,a),n=i.parseDocument();return Object.defineProperty(n,"tokenCount",{enumerable:!1,value:i.tokenCount}),n}
/**
 * Given a string containing a GraphQL value (ex. `[42]`), parse the AST for
 * that value.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Values directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: valueFromAST().
 */(e,{experimentalFragmentVariables:ne,allowLegacyFragmentVariables:ne});if(!i||"Document"!==i.kind)throw new Error("Not a valid GraphQL document.");ee.set(a,function(e){var a=new Set(e.definitions);a.forEach((function(e){e.loc&&delete e.loc,Object.keys(e).forEach((function(i){var n=e[i];n&&"object"==typeof n&&a.add(n)}))}));var i=e.loc;return i&&(delete i.startToken,delete i.endToken),e}(se(i)))}return ee.get(a)}function re(e){for(var a=[],i=1;i<arguments.length;i++)a[i-1]=arguments[i];"string"==typeof e&&(e=[e]);var n=e[0];return a.forEach((function(a,i){a&&"Document"===a.kind?n+=a.loc.source.body:n+=a,n+=e[i+1]})),oe(n)}var ce,pe=re,le=function(){ee.clear(),ae.clear()},ue=function(){ie=!1},de=function(){ne=!0},me=function(){ne=!1};(ce=re||(re={})).gql=pe,ce.resetCaches=le,ce.disableFragmentWarnings=ue,ce.enableExperimentalFragmentVariables=de,ce.disableExperimentalFragmentVariables=me,re.default=re;
/* harmony default export */const he=re,fe=async({parameters:{pageInfo:{offset:e,limit:a},orderBy:i,statusFilterOptions:n={includeActive:!0,includeInactive:!0,includeEmpty:!0}}})=>{const o="pat-na1-4dd316d2-5666-4a2c-af82-a1d77cecd1e4";if(0===o.trim().length)throw Error("Missing PRIVATE_APP_ACCESS_TOKEN");const r=(()=>{if(n.includeActive&&n.includeInactive&&n.includeEmpty)return"{}";if(!n.includeActive&&!n.includeInactive&&n.includeEmpty)return"{ hs_content_membership_status__null: true }";if(n.includeActive&&!n.includeInactive&&n.includeEmpty)return'{ hs_content_membership_status__neq: "inactive" }';if(!n.includeActive&&n.includeInactive&&n.includeEmpty)return'{ hs_content_membership_status__neq: "active" }';const e=[];return n.includeActive&&e.push("active"),n.includeInactive&&e.push("inactive"),` { hs_content_membership_status__in: ${JSON.stringify(e)} }`})(),{query:c,SuccessSchema:p}=((e,a)=>{const i=Object.keys(e).join("\n            "),n=he`
    query GetContacts($limit: Int, $offset: Int, $orderBy: [crm_contact_order_by!]) {
      CRM {
        contact_collection(limit: $limit, offset: $offset, orderBy: $orderBy, filter: ${a}) {
          items {
            ${i}
            _metadata {
              id
            }
          }
          hasMore
          offset
          total
        }
      }
    }
  `.loc?.source?.body;if(!n)throw Error("Failed to generate GraphQL query string");return{query:n,SuccessSchema:s.z.object({data:s.z.object({CRM:s.z.object({contact_collection:s.z.object({items:s.z.array(s.z.object({_metadata:s.z.object({id:s.z.string()})}).extend(e)),hasMore:s.z.boolean(),offset:s.z.number(),total:s.z.number()})})}),extensions:s.z.unknown().optional()})}})({email:s.z.string().nullable().optional(),firstname:s.z.string().nullable().optional(),lastname:s.z.string().nullable().optional(),lastmodifieddate:s.z.number().nullable().optional(),hs_content_membership_status:s.z.object({label:s.z.string(),value:s.z.string()}).nullable().optional()},r);console.info(`Searching for contacts with filter: ${r}`);const l=await t().post("https://api.hubapi.com/collector/graphql",{query:c,variables:{limit:a,offset:e,orderBy:i.map((({propertyName:e,ascending:a})=>`${e}__${a?"asc":"desc"}`))}},{headers:{"Content-Type":"application/json",Authorization:`Bearer ${o}`}}).catch((e=>{throw console.error("Error:",e),Error(`Failed to fetch contacts: ${e.message}`)})),u=p.safeParse(l.data);if(!u.success)throw console.error(`Unexpected response: ${JSON.stringify(l.data)}`),console.log("Zod Error:",u.error),Error("Failed to fetch contacts");const{items:d,hasMore:m,offset:h,total:f}=u.data.data.CRM.contact_collection;return console.table(d),{contacts:d,hasMore:m,offset:h,total:f}};
//# sourceMappingURL=index.js.map
}
/***/,
/***/2613:
/***/e=>{"use strict";e.exports=require("assert")}
/***/,
/***/9896:
/***/e=>{"use strict";e.exports=require("fs")}
/***/,
/***/8611:
/***/e=>{"use strict";e.exports=require("http")}
/***/,
/***/5692:
/***/e=>{"use strict";e.exports=require("https")}
/***/,
/***/6928:
/***/e=>{"use strict";e.exports=require("path")}
/***/,
/***/2203:
/***/e=>{"use strict";e.exports=require("stream")}
/***/,
/***/7016:
/***/e=>{"use strict";e.exports=require("url")}
/***/,
/***/9023:
/***/e=>{"use strict";e.exports=require("util")}
/***/,
/***/3106:
/***/e=>{"use strict";e.exports=require("zlib")}
/***/,
/***/4476:
/***/(e,a,i)=>{"use strict";
/* harmony export */
/* unused harmony exports BRAND, DIRTY, EMPTY_PATH, INVALID, NEVER, OK, ParseStatus, Schema, ZodAny, ZodArray, ZodBigInt, ZodBoolean, ZodBranded, ZodCatch, ZodDate, ZodDefault, ZodDiscriminatedUnion, ZodEffects, ZodEnum, ZodError, ZodFirstPartyTypeKind, ZodFunction, ZodIntersection, ZodIssueCode, ZodLazy, ZodLiteral, ZodMap, ZodNaN, ZodNativeEnum, ZodNever, ZodNull, ZodNullable, ZodNumber, ZodObject, ZodOptional, ZodParsedType, ZodPipeline, ZodPromise, ZodReadonly, ZodRecord, ZodSchema, ZodSet, ZodString, ZodSymbol, ZodTransformer, ZodTuple, ZodType, ZodUndefined, ZodUnion, ZodUnknown, ZodVoid, addIssueToContext, any, array, bigint, boolean, coerce, custom, date, datetimeRegex, default, defaultErrorMap, discriminatedUnion, effect, enum, function, getErrorMap, getParsedType, instanceof, intersection, isAborted, isAsync, isDirty, isValid, late, lazy, literal, makeIssue, map, nan, nativeEnum, never, null, nullable, number, object, objectUtil, oboolean, onumber, optional, ostring, pipeline, preprocess, promise, quotelessJson, record, set, setErrorMap, strictObject, string, symbol, transformer, tuple, undefined, union, unknown, util, void */
var n,t;i.d(a,{
/* harmony export */z:()=>/* binding */Ta
/* harmony export */}),function(e){e.assertEqual=e=>e,e.assertIs=function(e){},e.assertNever=function(e){throw new Error},e.arrayToEnum=e=>{const a={};for(const i of e)a[i]=i;return a},e.getValidEnumValues=a=>{const i=e.objectKeys(a).filter((e=>"number"!=typeof a[a[e]])),n={};for(const e of i)n[e]=a[e];return e.objectValues(n)},e.objectValues=a=>e.objectKeys(a).map((function(e){return a[e]})),e.objectKeys="function"==typeof Object.keys?e=>Object.keys(e):e=>{const a=[];for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&a.push(i);return a},e.find=(e,a)=>{for(const i of e)if(a(i))return i},e.isInteger="function"==typeof Number.isInteger?e=>Number.isInteger(e):e=>"number"==typeof e&&isFinite(e)&&Math.floor(e)===e,e.joinValues=function(e,a=" | "){return e.map((e=>"string"==typeof e?`'${e}'`:e)).join(a)},e.jsonStringifyReplacer=(e,a)=>"bigint"==typeof a?a.toString():a}(n||(n={})),function(e){e.mergeShapes=(e,a)=>({...e,...a})}(t||(t={}));const s=n.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),o=e=>{switch(typeof e){case"undefined":return s.undefined;case"string":return s.string;case"number":return isNaN(e)?s.nan:s.number;case"boolean":return s.boolean;case"function":return s.function;case"bigint":return s.bigint;case"symbol":return s.symbol;case"object":return Array.isArray(e)?s.array:null===e?s.null:e.then&&"function"==typeof e.then&&e.catch&&"function"==typeof e.catch?s.promise:"undefined"!=typeof Map&&e instanceof Map?s.map:"undefined"!=typeof Set&&e instanceof Set?s.set:"undefined"!=typeof Date&&e instanceof Date?s.date:s.object;default:return s.unknown}},r=n.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]);class c extends Error{get errors(){return this.issues}constructor(e){super(),this.issues=[],this.addIssue=e=>{this.issues=[...this.issues,e]},this.addIssues=(e=[])=>{this.issues=[...this.issues,...e]};const a=new.target.prototype;Object.setPrototypeOf?
// eslint-disable-next-line ban/ban
Object.setPrototypeOf(this,a):this.__proto__=a,this.name="ZodError",this.issues=e}format(e){const a=e||function(e){return e.message},i={_errors:[]},n=e=>{for(const t of e.issues)if("invalid_union"===t.code)t.unionErrors.map(n);else if("invalid_return_type"===t.code)n(t.returnTypeError);else if("invalid_arguments"===t.code)n(t.argumentsError);else if(0===t.path.length)i._errors.push(a(t));else{let e=i,n=0;for(;n<t.path.length;){const i=t.path[n];n===t.path.length-1?(e[i]=e[i]||{_errors:[]},e[i]._errors.push(a(t))):e[i]=e[i]||{_errors:[]},e=e[i],n++}}};return n(this),i}static assert(e){if(!(e instanceof c))throw new Error(`Not a ZodError: ${e}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,n.jsonStringifyReplacer,2)}get isEmpty(){return 0===this.issues.length}flatten(e=e=>e.message){const a={},i=[];for(const n of this.issues)n.path.length>0?(a[n.path[0]]=a[n.path[0]]||[],a[n.path[0]].push(e(n))):i.push(e(n));return{formErrors:i,fieldErrors:a}}get formErrors(){return this.flatten()}}c.create=e=>new c(e);const p=(e,a)=>{let i;switch(e.code){case r.invalid_type:i=e.received===s.undefined?"Required":`Expected ${e.expected}, received ${e.received}`;break;case r.invalid_literal:i=`Invalid literal value, expected ${JSON.stringify(e.expected,n.jsonStringifyReplacer)}`;break;case r.unrecognized_keys:i=`Unrecognized key(s) in object: ${n.joinValues(e.keys,", ")}`;break;case r.invalid_union:i="Invalid input";break;case r.invalid_union_discriminator:i=`Invalid discriminator value. Expected ${n.joinValues(e.options)}`;break;case r.invalid_enum_value:i=`Invalid enum value. Expected ${n.joinValues(e.options)}, received '${e.received}'`;break;case r.invalid_arguments:i="Invalid function arguments";break;case r.invalid_return_type:i="Invalid function return type";break;case r.invalid_date:i="Invalid date";break;case r.invalid_string:"object"==typeof e.validation?"includes"in e.validation?(i=`Invalid input: must include "${e.validation.includes}"`,"number"==typeof e.validation.position&&(i=`${i} at one or more positions greater than or equal to ${e.validation.position}`)):"startsWith"in e.validation?i=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?i=`Invalid input: must end with "${e.validation.endsWith}"`:n.assertNever(e.validation):i="regex"!==e.validation?`Invalid ${e.validation}`:"Invalid";break;case r.too_small:i="array"===e.type?`Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)`:"string"===e.type?`String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)`:"number"===e.type?`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:"date"===e.type?`Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}`:"Invalid input";break;case r.too_big:i="array"===e.type?`Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)`:"string"===e.type?`String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)`:"number"===e.type?`Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:"bigint"===e.type?`BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:"date"===e.type?`Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}`:"Invalid input";break;case r.custom:i="Invalid input";break;case r.invalid_intersection_types:i="Intersection results could not be merged";break;case r.not_multiple_of:i=`Number must be a multiple of ${e.multipleOf}`;break;case r.not_finite:i="Number must be finite";break;default:i=a.defaultError,n.assertNever(e)}return{message:i}};let l=p;function u(){return l}const d=e=>{const{data:a,path:i,errorMaps:n,issueData:t}=e,s=[...i,...t.path||[]],o={...t,path:s};if(void 0!==t.message)return{...t,path:s,message:t.message};let r="";const c=n.filter((e=>!!e)).slice().reverse();for(const e of c)r=e(o,{data:a,defaultError:r}).message;return{...t,path:s,message:r}};function m(e,a){const i=u(),n=d({issueData:a,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,// contextual error map is first priority
e.schemaErrorMap,// then schema-bound map if available
i,// then global override map
i===p?void 0:p].filter((e=>!!e))});e.common.issues.push(n)}class h{constructor(){this.value="valid"}dirty(){"valid"===this.value&&(this.value="dirty")}abort(){"aborted"!==this.value&&(this.value="aborted")}static mergeArray(e,a){const i=[];for(const n of a){if("aborted"===n.status)return f;"dirty"===n.status&&e.dirty(),i.push(n.value)}return{status:e.value,value:i}}static async mergeObjectAsync(e,a){const i=[];for(const e of a){const a=await e.key,n=await e.value;i.push({key:a,value:n})}return h.mergeObjectSync(e,i)}static mergeObjectSync(e,a){const i={};for(const n of a){const{key:a,value:t}=n;if("aborted"===a.status)return f;if("aborted"===t.status)return f;"dirty"===a.status&&e.dirty(),"dirty"===t.status&&e.dirty(),"__proto__"===a.value||void 0===t.value&&!n.alwaysSet||(i[a.value]=t.value)}return{status:e.value,value:i}}}const f=Object.freeze({status:"aborted"}),x=e=>({status:"dirty",value:e}),v=e=>({status:"valid",value:e}),b=e=>"aborted"===e.status,g=e=>"dirty"===e.status,y=e=>"valid"===e.status,_=e=>"undefined"!=typeof Promise&&e instanceof Promise
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */;function k(e,a,i,n){if("a"===i&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof a?e!==a||!n:!a.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?n:"a"===i?n.call(e):n?n.value:a.get(e)}function w(e,a,i,n,t){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!t)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof a?e!==a||!t:!a.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?t.call(e,i):t?t.value=i:a.set(e,i),i}var E,T,j;"function"==typeof SuppressedError&&SuppressedError,function(e){e.errToObj=e=>"string"==typeof e?{message:e}:e||{},e.toString=e=>"string"==typeof e?e:null==e?void 0:e.message}(E||(E={}));class N{constructor(e,a,i,n){this._cachedPath=[],this.parent=e,this.data=a,this._path=i,this._key=n}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const O=(e,a)=>{if(y(a))return{success:!0,data:a.value};if(!e.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const a=new c(e.common.issues);return this._error=a,this._error}}};function A(e){if(!e)return{};const{errorMap:a,invalid_type_error:i,required_error:n,description:t}=e;if(a&&(i||n))throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');if(a)return{errorMap:a,description:t};return{errorMap:(a,t)=>{var s,o;const{message:r}=e;return"invalid_enum_value"===a.code?{message:null!=r?r:t.defaultError}:void 0===t.data?{message:null!==(s=null!=r?r:n)&&void 0!==s?s:t.defaultError}:"invalid_type"!==a.code?{message:t.defaultError}:{message:null!==(o=null!=r?r:i)&&void 0!==o?o:t.defaultError}},description:t}}class S{get description(){return this._def.description}_getType(e){return o(e.data)}_getOrReturnCtx(e,a){return a||{common:e.parent.common,data:e.data,parsedType:o(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new h,ctx:{common:e.parent.common,data:e.data,parsedType:o(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const a=this._parse(e);if(_(a))throw new Error("Synchronous parse encountered promise.");return a}_parseAsync(e){const a=this._parse(e);return Promise.resolve(a)}parse(e,a){const i=this.safeParse(e,a);if(i.success)return i.data;throw i.error}safeParse(e,a){var i;const n={common:{issues:[],async:null!==(i=null==a?void 0:a.async)&&void 0!==i&&i,contextualErrorMap:null==a?void 0:a.errorMap},path:(null==a?void 0:a.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:o(e)},t=this._parseSync({data:e,path:n.path,parent:n});return O(n,t)}"~validate"(e){var a,i;const n={common:{issues:[],async:!!this["~standard"].async},path:[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:o(e)};if(!this["~standard"].async)try{const a=this._parseSync({data:e,path:[],parent:n});return y(a)?{value:a.value}:{issues:n.common.issues}}catch(e){(null===(i=null===(a=null==e?void 0:e.message)||void 0===a?void 0:a.toLowerCase())||void 0===i?void 0:i.includes("encountered"))&&(this["~standard"].async=!0),n.common={issues:[],async:!0}}return this._parseAsync({data:e,path:[],parent:n}).then((e=>y(e)?{value:e.value}:{issues:n.common.issues}))}async parseAsync(e,a){const i=await this.safeParseAsync(e,a);if(i.success)return i.data;throw i.error}async safeParseAsync(e,a){const i={common:{issues:[],contextualErrorMap:null==a?void 0:a.errorMap,async:!0},path:(null==a?void 0:a.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:o(e)},n=this._parse({data:e,path:i.path,parent:i}),t=await(_(n)?n:Promise.resolve(n));return O(i,t)}refine(e,a){const i=e=>"string"==typeof a||void 0===a?{message:a}:"function"==typeof a?a(e):a;return this._refinement(((a,n)=>{const t=e(a),s=()=>n.addIssue({code:r.custom,...i(a)});return"undefined"!=typeof Promise&&t instanceof Promise?t.then((e=>!!e||(s(),!1))):!!t||(s(),!1)}))}refinement(e,a){return this._refinement(((i,n)=>!!e(i)||(n.addIssue("function"==typeof a?a(i,n):a),!1)))}_refinement(e){return new Se({schema:this,typeName:Me.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}constructor(e){
/** Alias of safeParseAsync */
this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this["~standard"]={version:1,vendor:"zod",validate:e=>this["~validate"](e)}}optional(){return Ie.create(this,this._def)}nullable(){return Re.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return ue.create(this)}promise(){return Ae.create(this,this._def)}or(e){return he.create([this,e],this._def)}and(e){return be.create(this,e,this._def)}transform(e){return new Se({...A(this._def),schema:this,typeName:Me.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const a="function"==typeof e?e:()=>e;return new Ce({...A(this._def),innerType:this,defaultValue:a,typeName:Me.ZodDefault})}brand(){return new Pe({typeName:Me.ZodBranded,type:this,...A(this._def)})}catch(e){const a="function"==typeof e?e:()=>e;return new De({...A(this._def),innerType:this,catchValue:a,typeName:Me.ZodCatch})}describe(e){return new(0,this.constructor)({...this._def,description:e})}pipe(e){return Fe.create(this,e)}readonly(){return Be.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const I=/^c[^\s-]{8,}$/i,R=/^[0-9a-z]+$/,C=/^[0-9A-HJKMNP-TV-Z]{26}$/i,D=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,L=/^[a-z0-9_-]{21}$/i,z=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,P=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,F=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;let B;
// faster, simpler, safer
const U=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,q=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,M=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,Z=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,$=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,V=/^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,K="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",Y=new RegExp(`^${K}$`);function G(e){
// let regex = `\\d{2}:\\d{2}:\\d{2}`;
let a="([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";return e.precision?a=`${a}\\.\\d{${e.precision}}`:null==e.precision&&(a=`${a}(\\.\\d+)?`),a}
// Adapted from https://stackoverflow.com/a/3143231
function J(e){let a=`${K}T${G(e)}`;const i=[];return i.push(e.local?"Z?":"Z"),e.offset&&i.push("([+-]\\d{2}:?\\d{2})"),a=`${a}(${i.join("|")})`,new RegExp(`^${a}$`)}function H(e,a){if(!z.test(e))return!1;try{const[i]=e.split("."),n=i.replace(/-/g,"+").replace(/_/g,"/").padEnd(i.length+(4-i.length%4)%4,"="),t=JSON.parse(atob(n));
// Convert base64url to base64
return"object"==typeof t&&null!==t&&(!(!t.typ||!t.alg)&&(!a||t.alg===a))}catch(e){return!1}}function W(e,a){return!("v4"!==a&&a||!q.test(e))||!("v6"!==a&&a||!Z.test(e))}class X extends S{_parse(e){this._def.coerce&&(e.data=String(e.data));if(this._getType(e)!==s.string){const a=this._getOrReturnCtx(e);return m(a,{code:r.invalid_type,expected:s.string,received:a.parsedType}),f}const a=new h;let i;for(const s of this._def.checks)if("min"===s.kind)e.data.length<s.value&&(i=this._getOrReturnCtx(e,i),m(i,{code:r.too_small,minimum:s.value,type:"string",inclusive:!0,exact:!1,message:s.message}),a.dirty());else if("max"===s.kind)e.data.length>s.value&&(i=this._getOrReturnCtx(e,i),m(i,{code:r.too_big,maximum:s.value,type:"string",inclusive:!0,exact:!1,message:s.message}),a.dirty());else if("length"===s.kind){const n=e.data.length>s.value,t=e.data.length<s.value;(n||t)&&(i=this._getOrReturnCtx(e,i),n?m(i,{code:r.too_big,maximum:s.value,type:"string",inclusive:!0,exact:!0,message:s.message}):t&&m(i,{code:r.too_small,minimum:s.value,type:"string",inclusive:!0,exact:!0,message:s.message}),a.dirty())}else if("email"===s.kind)F.test(e.data)||(i=this._getOrReturnCtx(e,i),m(i,{validation:"email",code:r.invalid_string,message:s.message}),a.dirty());else if("emoji"===s.kind)B||(B=new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$","u")),B.test(e.data)||(i=this._getOrReturnCtx(e,i),m(i,{validation:"emoji",code:r.invalid_string,message:s.message}),a.dirty());else if("uuid"===s.kind)D.test(e.data)||(i=this._getOrReturnCtx(e,i),m(i,{validation:"uuid",code:r.invalid_string,message:s.message}),a.dirty());else if("nanoid"===s.kind)L.test(e.data)||(i=this._getOrReturnCtx(e,i),m(i,{validation:"nanoid",code:r.invalid_string,message:s.message}),a.dirty());else if("cuid"===s.kind)I.test(e.data)||(i=this._getOrReturnCtx(e,i),m(i,{validation:"cuid",code:r.invalid_string,message:s.message}),a.dirty());else if("cuid2"===s.kind)R.test(e.data)||(i=this._getOrReturnCtx(e,i),m(i,{validation:"cuid2",code:r.invalid_string,message:s.message}),a.dirty());else if("ulid"===s.kind)C.test(e.data)||(i=this._getOrReturnCtx(e,i),m(i,{validation:"ulid",code:r.invalid_string,message:s.message}),a.dirty());else if("url"===s.kind)try{new URL(e.data)}catch(n){i=this._getOrReturnCtx(e,i),m(i,{validation:"url",code:r.invalid_string,message:s.message}),a.dirty()}else if("regex"===s.kind){s.regex.lastIndex=0;s.regex.test(e.data)||(i=this._getOrReturnCtx(e,i),m(i,{validation:"regex",code:r.invalid_string,message:s.message}),a.dirty())}else if("trim"===s.kind)e.data=e.data.trim();else if("includes"===s.kind)e.data.includes(s.value,s.position)||(i=this._getOrReturnCtx(e,i),m(i,{code:r.invalid_string,validation:{includes:s.value,position:s.position},message:s.message}),a.dirty());else if("toLowerCase"===s.kind)e.data=e.data.toLowerCase();else if("toUpperCase"===s.kind)e.data=e.data.toUpperCase();else if("startsWith"===s.kind)e.data.startsWith(s.value)||(i=this._getOrReturnCtx(e,i),m(i,{code:r.invalid_string,validation:{startsWith:s.value},message:s.message}),a.dirty());else if("endsWith"===s.kind)e.data.endsWith(s.value)||(i=this._getOrReturnCtx(e,i),m(i,{code:r.invalid_string,validation:{endsWith:s.value},message:s.message}),a.dirty());else if("datetime"===s.kind){J(s).test(e.data)||(i=this._getOrReturnCtx(e,i),m(i,{code:r.invalid_string,validation:"datetime",message:s.message}),a.dirty())}else if("date"===s.kind){Y.test(e.data)||(i=this._getOrReturnCtx(e,i),m(i,{code:r.invalid_string,validation:"date",message:s.message}),a.dirty())}else if("time"===s.kind){new RegExp(`^${G(s)}$`).test(e.data)||(i=this._getOrReturnCtx(e,i),m(i,{code:r.invalid_string,validation:"time",message:s.message}),a.dirty())}else"duration"===s.kind?P.test(e.data)||(i=this._getOrReturnCtx(e,i),m(i,{validation:"duration",code:r.invalid_string,message:s.message}),a.dirty()):"ip"===s.kind?(t=e.data,("v4"!==(o=s.version)&&o||!U.test(t))&&("v6"!==o&&o||!M.test(t))&&(i=this._getOrReturnCtx(e,i),m(i,{validation:"ip",code:r.invalid_string,message:s.message}),a.dirty())):"jwt"===s.kind?H(e.data,s.alg)||(i=this._getOrReturnCtx(e,i),m(i,{validation:"jwt",code:r.invalid_string,message:s.message}),a.dirty()):"cidr"===s.kind?W(e.data,s.version)||(i=this._getOrReturnCtx(e,i),m(i,{validation:"cidr",code:r.invalid_string,message:s.message}),a.dirty()):"base64"===s.kind?$.test(e.data)||(i=this._getOrReturnCtx(e,i),m(i,{validation:"base64",code:r.invalid_string,message:s.message}),a.dirty()):"base64url"===s.kind?V.test(e.data)||(i=this._getOrReturnCtx(e,i),m(i,{validation:"base64url",code:r.invalid_string,message:s.message}),a.dirty()):n.assertNever(s);var t,o;return{status:a.value,value:e.data}}_regex(e,a,i){return this.refinement((a=>e.test(a)),{validation:a,code:r.invalid_string,...E.errToObj(i)})}_addCheck(e){return new X({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...E.errToObj(e)})}url(e){return this._addCheck({kind:"url",...E.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...E.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...E.errToObj(e)})}nanoid(e){return this._addCheck({kind:"nanoid",...E.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...E.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...E.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...E.errToObj(e)})}base64(e){return this._addCheck({kind:"base64",...E.errToObj(e)})}base64url(e){
// base64url encoding is a modification of base64 that can safely be used in URLs and filenames
return this._addCheck({kind:"base64url",...E.errToObj(e)})}jwt(e){return this._addCheck({kind:"jwt",...E.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...E.errToObj(e)})}cidr(e){return this._addCheck({kind:"cidr",...E.errToObj(e)})}datetime(e){var a,i;return"string"==typeof e?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:e}):this._addCheck({kind:"datetime",precision:void 0===(null==e?void 0:e.precision)?null:null==e?void 0:e.precision,offset:null!==(a=null==e?void 0:e.offset)&&void 0!==a&&a,local:null!==(i=null==e?void 0:e.local)&&void 0!==i&&i,...E.errToObj(null==e?void 0:e.message)})}date(e){return this._addCheck({kind:"date",message:e})}time(e){return"string"==typeof e?this._addCheck({kind:"time",precision:null,message:e}):this._addCheck({kind:"time",precision:void 0===(null==e?void 0:e.precision)?null:null==e?void 0:e.precision,...E.errToObj(null==e?void 0:e.message)})}duration(e){return this._addCheck({kind:"duration",...E.errToObj(e)})}regex(e,a){return this._addCheck({kind:"regex",regex:e,...E.errToObj(a)})}includes(e,a){return this._addCheck({kind:"includes",value:e,position:null==a?void 0:a.position,...E.errToObj(null==a?void 0:a.message)})}startsWith(e,a){return this._addCheck({kind:"startsWith",value:e,...E.errToObj(a)})}endsWith(e,a){return this._addCheck({kind:"endsWith",value:e,...E.errToObj(a)})}min(e,a){return this._addCheck({kind:"min",value:e,...E.errToObj(a)})}max(e,a){return this._addCheck({kind:"max",value:e,...E.errToObj(a)})}length(e,a){return this._addCheck({kind:"length",value:e,...E.errToObj(a)})}
/**
     * Equivalent to `.min(1)`
     */nonempty(e){return this.min(1,E.errToObj(e))}trim(){return new X({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new X({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new X({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find((e=>"datetime"===e.kind))}get isDate(){return!!this._def.checks.find((e=>"date"===e.kind))}get isTime(){return!!this._def.checks.find((e=>"time"===e.kind))}get isDuration(){return!!this._def.checks.find((e=>"duration"===e.kind))}get isEmail(){return!!this._def.checks.find((e=>"email"===e.kind))}get isURL(){return!!this._def.checks.find((e=>"url"===e.kind))}get isEmoji(){return!!this._def.checks.find((e=>"emoji"===e.kind))}get isUUID(){return!!this._def.checks.find((e=>"uuid"===e.kind))}get isNANOID(){return!!this._def.checks.find((e=>"nanoid"===e.kind))}get isCUID(){return!!this._def.checks.find((e=>"cuid"===e.kind))}get isCUID2(){return!!this._def.checks.find((e=>"cuid2"===e.kind))}get isULID(){return!!this._def.checks.find((e=>"ulid"===e.kind))}get isIP(){return!!this._def.checks.find((e=>"ip"===e.kind))}get isCIDR(){return!!this._def.checks.find((e=>"cidr"===e.kind))}get isBase64(){return!!this._def.checks.find((e=>"base64"===e.kind))}get isBase64url(){
// base64url encoding is a modification of base64 that can safely be used in URLs and filenames
return!!this._def.checks.find((e=>"base64url"===e.kind))}get minLength(){let e=null;for(const a of this._def.checks)"min"===a.kind&&(null===e||a.value>e)&&(e=a.value);return e}get maxLength(){let e=null;for(const a of this._def.checks)"max"===a.kind&&(null===e||a.value<e)&&(e=a.value);return e}}
// https://stackoverflow.com/questions/3966484/why-does-modulus-operator-return-fractional-number-in-javascript/31711034#31711034
function Q(e,a){const i=(e.toString().split(".")[1]||"").length,n=(a.toString().split(".")[1]||"").length,t=i>n?i:n;return parseInt(e.toFixed(t).replace(".",""))%parseInt(a.toFixed(t).replace(".",""))/Math.pow(10,t)}X.create=e=>{var a;return new X({checks:[],typeName:Me.ZodString,coerce:null!==(a=null==e?void 0:e.coerce)&&void 0!==a&&a,...A(e)})};class ee extends S{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){this._def.coerce&&(e.data=Number(e.data));if(this._getType(e)!==s.number){const a=this._getOrReturnCtx(e);return m(a,{code:r.invalid_type,expected:s.number,received:a.parsedType}),f}let a;const i=new h;for(const t of this._def.checks)if("int"===t.kind)n.isInteger(e.data)||(a=this._getOrReturnCtx(e,a),m(a,{code:r.invalid_type,expected:"integer",received:"float",message:t.message}),i.dirty());else if("min"===t.kind){(t.inclusive?e.data<t.value:e.data<=t.value)&&(a=this._getOrReturnCtx(e,a),m(a,{code:r.too_small,minimum:t.value,type:"number",inclusive:t.inclusive,exact:!1,message:t.message}),i.dirty())}else if("max"===t.kind){(t.inclusive?e.data>t.value:e.data>=t.value)&&(a=this._getOrReturnCtx(e,a),m(a,{code:r.too_big,maximum:t.value,type:"number",inclusive:t.inclusive,exact:!1,message:t.message}),i.dirty())}else"multipleOf"===t.kind?0!==Q(e.data,t.value)&&(a=this._getOrReturnCtx(e,a),m(a,{code:r.not_multiple_of,multipleOf:t.value,message:t.message}),i.dirty()):"finite"===t.kind?Number.isFinite(e.data)||(a=this._getOrReturnCtx(e,a),m(a,{code:r.not_finite,message:t.message}),i.dirty()):n.assertNever(t);return{status:i.value,value:e.data}}gte(e,a){return this.setLimit("min",e,!0,E.toString(a))}gt(e,a){return this.setLimit("min",e,!1,E.toString(a))}lte(e,a){return this.setLimit("max",e,!0,E.toString(a))}lt(e,a){return this.setLimit("max",e,!1,E.toString(a))}setLimit(e,a,i,n){return new ee({...this._def,checks:[...this._def.checks,{kind:e,value:a,inclusive:i,message:E.toString(n)}]})}_addCheck(e){return new ee({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:E.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:E.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:E.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:E.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:E.toString(e)})}multipleOf(e,a){return this._addCheck({kind:"multipleOf",value:e,message:E.toString(a)})}finite(e){return this._addCheck({kind:"finite",message:E.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:E.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:E.toString(e)})}get minValue(){let e=null;for(const a of this._def.checks)"min"===a.kind&&(null===e||a.value>e)&&(e=a.value);return e}get maxValue(){let e=null;for(const a of this._def.checks)"max"===a.kind&&(null===e||a.value<e)&&(e=a.value);return e}get isInt(){return!!this._def.checks.find((e=>"int"===e.kind||"multipleOf"===e.kind&&n.isInteger(e.value)))}get isFinite(){let e=null,a=null;for(const i of this._def.checks){if("finite"===i.kind||"int"===i.kind||"multipleOf"===i.kind)return!0;"min"===i.kind?(null===a||i.value>a)&&(a=i.value):"max"===i.kind&&(null===e||i.value<e)&&(e=i.value)}return Number.isFinite(a)&&Number.isFinite(e)}}ee.create=e=>new ee({checks:[],typeName:Me.ZodNumber,coerce:(null==e?void 0:e.coerce)||!1,...A(e)});class ae extends S{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce)try{e.data=BigInt(e.data)}catch(a){return this._getInvalidInput(e)}if(this._getType(e)!==s.bigint)return this._getInvalidInput(e);let a;const i=new h;for(const t of this._def.checks)if("min"===t.kind){(t.inclusive?e.data<t.value:e.data<=t.value)&&(a=this._getOrReturnCtx(e,a),m(a,{code:r.too_small,type:"bigint",minimum:t.value,inclusive:t.inclusive,message:t.message}),i.dirty())}else if("max"===t.kind){(t.inclusive?e.data>t.value:e.data>=t.value)&&(a=this._getOrReturnCtx(e,a),m(a,{code:r.too_big,type:"bigint",maximum:t.value,inclusive:t.inclusive,message:t.message}),i.dirty())}else"multipleOf"===t.kind?e.data%t.value!==BigInt(0)&&(a=this._getOrReturnCtx(e,a),m(a,{code:r.not_multiple_of,multipleOf:t.value,message:t.message}),i.dirty()):n.assertNever(t);return{status:i.value,value:e.data}}_getInvalidInput(e){const a=this._getOrReturnCtx(e);return m(a,{code:r.invalid_type,expected:s.bigint,received:a.parsedType}),f}gte(e,a){return this.setLimit("min",e,!0,E.toString(a))}gt(e,a){return this.setLimit("min",e,!1,E.toString(a))}lte(e,a){return this.setLimit("max",e,!0,E.toString(a))}lt(e,a){return this.setLimit("max",e,!1,E.toString(a))}setLimit(e,a,i,n){return new ae({...this._def,checks:[...this._def.checks,{kind:e,value:a,inclusive:i,message:E.toString(n)}]})}_addCheck(e){return new ae({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:E.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:E.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:E.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:E.toString(e)})}multipleOf(e,a){return this._addCheck({kind:"multipleOf",value:e,message:E.toString(a)})}get minValue(){let e=null;for(const a of this._def.checks)"min"===a.kind&&(null===e||a.value>e)&&(e=a.value);return e}get maxValue(){let e=null;for(const a of this._def.checks)"max"===a.kind&&(null===e||a.value<e)&&(e=a.value);return e}}ae.create=e=>{var a;return new ae({checks:[],typeName:Me.ZodBigInt,coerce:null!==(a=null==e?void 0:e.coerce)&&void 0!==a&&a,...A(e)})};class ie extends S{_parse(e){this._def.coerce&&(e.data=Boolean(e.data));if(this._getType(e)!==s.boolean){const a=this._getOrReturnCtx(e);return m(a,{code:r.invalid_type,expected:s.boolean,received:a.parsedType}),f}return v(e.data)}}ie.create=e=>new ie({typeName:Me.ZodBoolean,coerce:(null==e?void 0:e.coerce)||!1,...A(e)});class ne extends S{_parse(e){this._def.coerce&&(e.data=new Date(e.data));if(this._getType(e)!==s.date){const a=this._getOrReturnCtx(e);return m(a,{code:r.invalid_type,expected:s.date,received:a.parsedType}),f}if(isNaN(e.data.getTime())){return m(this._getOrReturnCtx(e),{code:r.invalid_date}),f}const a=new h;let i;for(const t of this._def.checks)"min"===t.kind?e.data.getTime()<t.value&&(i=this._getOrReturnCtx(e,i),m(i,{code:r.too_small,message:t.message,inclusive:!0,exact:!1,minimum:t.value,type:"date"}),a.dirty()):"max"===t.kind?e.data.getTime()>t.value&&(i=this._getOrReturnCtx(e,i),m(i,{code:r.too_big,message:t.message,inclusive:!0,exact:!1,maximum:t.value,type:"date"}),a.dirty()):n.assertNever(t);return{status:a.value,value:new Date(e.data.getTime())}}_addCheck(e){return new ne({...this._def,checks:[...this._def.checks,e]})}min(e,a){return this._addCheck({kind:"min",value:e.getTime(),message:E.toString(a)})}max(e,a){return this._addCheck({kind:"max",value:e.getTime(),message:E.toString(a)})}get minDate(){let e=null;for(const a of this._def.checks)"min"===a.kind&&(null===e||a.value>e)&&(e=a.value);return null!=e?new Date(e):null}get maxDate(){let e=null;for(const a of this._def.checks)"max"===a.kind&&(null===e||a.value<e)&&(e=a.value);return null!=e?new Date(e):null}}ne.create=e=>new ne({checks:[],coerce:(null==e?void 0:e.coerce)||!1,typeName:Me.ZodDate,...A(e)});class te extends S{_parse(e){if(this._getType(e)!==s.symbol){const a=this._getOrReturnCtx(e);return m(a,{code:r.invalid_type,expected:s.symbol,received:a.parsedType}),f}return v(e.data)}}te.create=e=>new te({typeName:Me.ZodSymbol,...A(e)});class se extends S{_parse(e){if(this._getType(e)!==s.undefined){const a=this._getOrReturnCtx(e);return m(a,{code:r.invalid_type,expected:s.undefined,received:a.parsedType}),f}return v(e.data)}}se.create=e=>new se({typeName:Me.ZodUndefined,...A(e)});class oe extends S{_parse(e){if(this._getType(e)!==s.null){const a=this._getOrReturnCtx(e);return m(a,{code:r.invalid_type,expected:s.null,received:a.parsedType}),f}return v(e.data)}}oe.create=e=>new oe({typeName:Me.ZodNull,...A(e)});class re extends S{constructor(){super(...arguments),
// to prevent instances of other classes from extending ZodAny. this causes issues with catchall in ZodObject.
this._any=!0}_parse(e){return v(e.data)}}re.create=e=>new re({typeName:Me.ZodAny,...A(e)});class ce extends S{constructor(){super(...arguments),
// required
this._unknown=!0}_parse(e){return v(e.data)}}ce.create=e=>new ce({typeName:Me.ZodUnknown,...A(e)});class pe extends S{_parse(e){const a=this._getOrReturnCtx(e);return m(a,{code:r.invalid_type,expected:s.never,received:a.parsedType}),f}}pe.create=e=>new pe({typeName:Me.ZodNever,...A(e)});class le extends S{_parse(e){if(this._getType(e)!==s.undefined){const a=this._getOrReturnCtx(e);return m(a,{code:r.invalid_type,expected:s.void,received:a.parsedType}),f}return v(e.data)}}le.create=e=>new le({typeName:Me.ZodVoid,...A(e)});class ue extends S{_parse(e){const{ctx:a,status:i}=this._processInputParams(e),n=this._def;if(a.parsedType!==s.array)return m(a,{code:r.invalid_type,expected:s.array,received:a.parsedType}),f;if(null!==n.exactLength){const e=a.data.length>n.exactLength.value,t=a.data.length<n.exactLength.value;(e||t)&&(m(a,{code:e?r.too_big:r.too_small,minimum:t?n.exactLength.value:void 0,maximum:e?n.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:n.exactLength.message}),i.dirty())}if(null!==n.minLength&&a.data.length<n.minLength.value&&(m(a,{code:r.too_small,minimum:n.minLength.value,type:"array",inclusive:!0,exact:!1,message:n.minLength.message}),i.dirty()),null!==n.maxLength&&a.data.length>n.maxLength.value&&(m(a,{code:r.too_big,maximum:n.maxLength.value,type:"array",inclusive:!0,exact:!1,message:n.maxLength.message}),i.dirty()),a.common.async)return Promise.all([...a.data].map(((e,i)=>n.type._parseAsync(new N(a,e,a.path,i))))).then((e=>h.mergeArray(i,e)));const t=[...a.data].map(((e,i)=>n.type._parseSync(new N(a,e,a.path,i))));return h.mergeArray(i,t)}get element(){return this._def.type}min(e,a){return new ue({...this._def,minLength:{value:e,message:E.toString(a)}})}max(e,a){return new ue({...this._def,maxLength:{value:e,message:E.toString(a)}})}length(e,a){return new ue({...this._def,exactLength:{value:e,message:E.toString(a)}})}nonempty(e){return this.min(1,e)}}function de(e){if(e instanceof me){const a={};for(const i in e.shape){const n=e.shape[i];a[i]=Ie.create(de(n))}return new me({...e._def,shape:()=>a})}return e instanceof ue?new ue({...e._def,type:de(e.element)}):e instanceof Ie?Ie.create(de(e.unwrap())):e instanceof Re?Re.create(de(e.unwrap())):e instanceof ge?ge.create(e.items.map((e=>de(e)))):e}ue.create=(e,a)=>new ue({type:e,minLength:null,maxLength:null,exactLength:null,typeName:Me.ZodArray,...A(a)});class me extends S{constructor(){super(...arguments),this._cached=null,
/**
         * @deprecated In most cases, this is no longer needed - unknown properties are now silently stripped.
         * If you want to pass through unknown properties, use `.passthrough()` instead.
         */
this.nonstrict=this.passthrough,
// extend<
//   Augmentation extends ZodRawShape,
//   NewOutput extends util.flatten<{
//     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
//       ? Augmentation[k]["_output"]
//       : k extends keyof Output
//       ? Output[k]
//       : never;
//   }>,
//   NewInput extends util.flatten<{
//     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
//       ? Augmentation[k]["_input"]
//       : k extends keyof Input
//       ? Input[k]
//       : never;
//   }>
// >(
//   augmentation: Augmentation
// ): ZodObject<
//   extendShape<T, Augmentation>,
//   UnknownKeys,
//   Catchall,
//   NewOutput,
//   NewInput
// > {
//   return new ZodObject({
//     ...this._def,
//     shape: () => ({
//       ...this._def.shape(),
//       ...augmentation,
//     }),
//   }) as any;
// }
/**
         * @deprecated Use `.extend` instead
         *  */
this.augment=this.extend}_getCached(){if(null!==this._cached)return this._cached;const e=this._def.shape(),a=n.objectKeys(e);return this._cached={shape:e,keys:a}}_parse(e){if(this._getType(e)!==s.object){const a=this._getOrReturnCtx(e);return m(a,{code:r.invalid_type,expected:s.object,received:a.parsedType}),f}const{status:a,ctx:i}=this._processInputParams(e),{shape:n,keys:t}=this._getCached(),o=[];if(!(this._def.catchall instanceof pe&&"strip"===this._def.unknownKeys))for(const e in i.data)t.includes(e)||o.push(e);const c=[];for(const e of t){const a=n[e],t=i.data[e];c.push({key:{status:"valid",value:e},value:a._parse(new N(i,t,i.path,e)),alwaysSet:e in i.data})}if(this._def.catchall instanceof pe){const e=this._def.unknownKeys;if("passthrough"===e)for(const e of o)c.push({key:{status:"valid",value:e},value:{status:"valid",value:i.data[e]}});else if("strict"===e)o.length>0&&(m(i,{code:r.unrecognized_keys,keys:o}),a.dirty());else if("strip"!==e)throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{
// run catchall validation
const e=this._def.catchall;for(const a of o){const n=i.data[a];c.push({key:{status:"valid",value:a},value:e._parse(new N(i,n,i.path,a)),alwaysSet:a in i.data})}}return i.common.async?Promise.resolve().then((async()=>{const e=[];for(const a of c){const i=await a.key,n=await a.value;e.push({key:i,value:n,alwaysSet:a.alwaysSet})}return e})).then((e=>h.mergeObjectSync(a,e))):h.mergeObjectSync(a,c)}get shape(){return this._def.shape()}strict(e){return E.errToObj,new me({...this._def,unknownKeys:"strict",...void 0!==e?{errorMap:(a,i)=>{var n,t,s,o;const r=null!==(s=null===(t=(n=this._def).errorMap)||void 0===t?void 0:t.call(n,a,i).message)&&void 0!==s?s:i.defaultError;return"unrecognized_keys"===a.code?{message:null!==(o=E.errToObj(e).message)&&void 0!==o?o:r}:{message:r}}}:{}})}strip(){return new me({...this._def,unknownKeys:"strip"})}passthrough(){return new me({...this._def,unknownKeys:"passthrough"})}
// const AugmentFactory =
//   <Def extends ZodObjectDef>(def: Def) =>
//   <Augmentation extends ZodRawShape>(
//     augmentation: Augmentation
//   ): ZodObject<
//     extendShape<ReturnType<Def["shape"]>, Augmentation>,
//     Def["unknownKeys"],
//     Def["catchall"]
//   > => {
//     return new ZodObject({
//       ...def,
//       shape: () => ({
//         ...def.shape(),
//         ...augmentation,
//       }),
//     }) as any;
//   };
extend(e){return new me({...this._def,shape:()=>({...this._def.shape(),...e})})}
/**
     * Prior to zod@1.0.12 there was a bug in the
     * inferred type of merged objects. Please
     * upgrade if you are experiencing issues.
     */merge(e){return new me({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:Me.ZodObject})}
// merge<
//   Incoming extends AnyZodObject,
//   Augmentation extends Incoming["shape"],
//   NewOutput extends {
//     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
//       ? Augmentation[k]["_output"]
//       : k extends keyof Output
//       ? Output[k]
//       : never;
//   },
//   NewInput extends {
//     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
//       ? Augmentation[k]["_input"]
//       : k extends keyof Input
//       ? Input[k]
//       : never;
//   }
// >(
//   merging: Incoming
// ): ZodObject<
//   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
//   Incoming["_def"]["unknownKeys"],
//   Incoming["_def"]["catchall"],
//   NewOutput,
//   NewInput
// > {
//   const merged: any = new ZodObject({
//     unknownKeys: merging._def.unknownKeys,
//     catchall: merging._def.catchall,
//     shape: () =>
//       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
//     typeName: ZodFirstPartyTypeKind.ZodObject,
//   }) as any;
//   return merged;
// }
setKey(e,a){return this.augment({[e]:a})}
// merge<Incoming extends AnyZodObject>(
//   merging: Incoming
// ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
// ZodObject<
//   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
//   Incoming["_def"]["unknownKeys"],
//   Incoming["_def"]["catchall"]
// > {
//   // const mergedShape = objectUtil.mergeShapes(
//   //   this._def.shape(),
//   //   merging._def.shape()
//   // );
//   const merged: any = new ZodObject({
//     unknownKeys: merging._def.unknownKeys,
//     catchall: merging._def.catchall,
//     shape: () =>
//       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
//     typeName: ZodFirstPartyTypeKind.ZodObject,
//   }) as any;
//   return merged;
// }
catchall(e){return new me({...this._def,catchall:e})}pick(e){const a={};return n.objectKeys(e).forEach((i=>{e[i]&&this.shape[i]&&(a[i]=this.shape[i])})),new me({...this._def,shape:()=>a})}omit(e){const a={};return n.objectKeys(this.shape).forEach((i=>{e[i]||(a[i]=this.shape[i])})),new me({...this._def,shape:()=>a})}
/**
     * @deprecated
     */deepPartial(){return de(this)}partial(e){const a={};return n.objectKeys(this.shape).forEach((i=>{const n=this.shape[i];e&&!e[i]?a[i]=n:a[i]=n.optional()})),new me({...this._def,shape:()=>a})}required(e){const a={};return n.objectKeys(this.shape).forEach((i=>{if(e&&!e[i])a[i]=this.shape[i];else{let e=this.shape[i];for(;e instanceof Ie;)e=e._def.innerType;a[i]=e}})),new me({...this._def,shape:()=>a})}keyof(){return je(n.objectKeys(this.shape))}}me.create=(e,a)=>new me({shape:()=>e,unknownKeys:"strip",catchall:pe.create(),typeName:Me.ZodObject,...A(a)}),me.strictCreate=(e,a)=>new me({shape:()=>e,unknownKeys:"strict",catchall:pe.create(),typeName:Me.ZodObject,...A(a)}),me.lazycreate=(e,a)=>new me({shape:e,unknownKeys:"strip",catchall:pe.create(),typeName:Me.ZodObject,...A(a)});class he extends S{_parse(e){const{ctx:a}=this._processInputParams(e),i=this._def.options;if(a.common.async)return Promise.all(i.map((async e=>{const i={...a,common:{...a.common,issues:[]},parent:null};return{result:await e._parseAsync({data:a.data,path:a.path,parent:i}),ctx:i}}))).then((function(e){
// return first issue-free validation if it exists
for(const a of e)if("valid"===a.result.status)return a.result;for(const i of e)if("dirty"===i.result.status)
// add issues from dirty option
return a.common.issues.push(...i.ctx.common.issues),i.result;
// return invalid
const i=e.map((e=>new c(e.ctx.common.issues)));return m(a,{code:r.invalid_union,unionErrors:i}),f}));{let e;const n=[];for(const t of i){const i={...a,common:{...a.common,issues:[]},parent:null},s=t._parseSync({data:a.data,path:a.path,parent:i});if("valid"===s.status)return s;"dirty"!==s.status||e||(e={result:s,ctx:i}),i.common.issues.length&&n.push(i.common.issues)}if(e)return a.common.issues.push(...e.ctx.common.issues),e.result;const t=n.map((e=>new c(e)));return m(a,{code:r.invalid_union,unionErrors:t}),f}}get options(){return this._def.options}}he.create=(e,a)=>new he({options:e,typeName:Me.ZodUnion,...A(a)});
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//////////                                 //////////
//////////      ZodDiscriminatedUnion      //////////
//////////                                 //////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
const fe=e=>e instanceof Ee?fe(e.schema):e instanceof Se?fe(e.innerType()):e instanceof Te?[e.value]:e instanceof Ne?e.options:e instanceof Oe?n.objectValues(e.enum):e instanceof Ce?fe(e._def.innerType):e instanceof se?[void 0]:e instanceof oe?[null]:e instanceof Ie?[void 0,...fe(e.unwrap())]:e instanceof Re?[null,...fe(e.unwrap())]:e instanceof Pe||e instanceof Be?fe(e.unwrap()):e instanceof De?fe(e._def.innerType):[];class xe extends S{_parse(e){const{ctx:a}=this._processInputParams(e);if(a.parsedType!==s.object)return m(a,{code:r.invalid_type,expected:s.object,received:a.parsedType}),f;const i=this.discriminator,n=a.data[i],t=this.optionsMap.get(n);return t?a.common.async?t._parseAsync({data:a.data,path:a.path,parent:a}):t._parseSync({data:a.data,path:a.path,parent:a}):(m(a,{code:r.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[i]}),f)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}
/**
     * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
     * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
     * have a different value for each object in the union.
     * @param discriminator the name of the discriminator property
     * @param types an array of object schemas
     * @param params
     */static create(e,a,i){
// Get all the valid discriminator values
const n=new Map;
// try {
for(const i of a){const a=fe(i.shape[e]);if(!a.length)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const t of a){if(n.has(t))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(t)}`);n.set(t,i)}}return new xe({typeName:Me.ZodDiscriminatedUnion,discriminator:e,options:a,optionsMap:n,...A(i)})}}function ve(e,a){const i=o(e),t=o(a);if(e===a)return{valid:!0,data:e};if(i===s.object&&t===s.object){const i=n.objectKeys(a),t=n.objectKeys(e).filter((e=>-1!==i.indexOf(e))),s={...e,...a};for(const i of t){const n=ve(e[i],a[i]);if(!n.valid)return{valid:!1};s[i]=n.data}return{valid:!0,data:s}}if(i===s.array&&t===s.array){if(e.length!==a.length)return{valid:!1};const i=[];for(let n=0;n<e.length;n++){const t=ve(e[n],a[n]);if(!t.valid)return{valid:!1};i.push(t.data)}return{valid:!0,data:i}}return i===s.date&&t===s.date&&+e==+a?{valid:!0,data:e}:{valid:!1}}class be extends S{_parse(e){const{status:a,ctx:i}=this._processInputParams(e),n=(e,n)=>{if(b(e)||b(n))return f;const t=ve(e.value,n.value);return t.valid?((g(e)||g(n))&&a.dirty(),{status:a.value,value:t.data}):(m(i,{code:r.invalid_intersection_types}),f)};return i.common.async?Promise.all([this._def.left._parseAsync({data:i.data,path:i.path,parent:i}),this._def.right._parseAsync({data:i.data,path:i.path,parent:i})]).then((([e,a])=>n(e,a))):n(this._def.left._parseSync({data:i.data,path:i.path,parent:i}),this._def.right._parseSync({data:i.data,path:i.path,parent:i}))}}be.create=(e,a,i)=>new be({left:e,right:a,typeName:Me.ZodIntersection,...A(i)});class ge extends S{_parse(e){const{status:a,ctx:i}=this._processInputParams(e);if(i.parsedType!==s.array)return m(i,{code:r.invalid_type,expected:s.array,received:i.parsedType}),f;if(i.data.length<this._def.items.length)return m(i,{code:r.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),f;!this._def.rest&&i.data.length>this._def.items.length&&(m(i,{code:r.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),a.dirty());const n=[...i.data].map(((e,a)=>{const n=this._def.items[a]||this._def.rest;return n?n._parse(new N(i,e,i.path,a)):null})).filter((e=>!!e));// filter nulls
return i.common.async?Promise.all(n).then((e=>h.mergeArray(a,e))):h.mergeArray(a,n)}get items(){return this._def.items}rest(e){return new ge({...this._def,rest:e})}}ge.create=(e,a)=>{if(!Array.isArray(e))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new ge({items:e,typeName:Me.ZodTuple,rest:null,...A(a)})};class ye extends S{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:a,ctx:i}=this._processInputParams(e);if(i.parsedType!==s.object)return m(i,{code:r.invalid_type,expected:s.object,received:i.parsedType}),f;const n=[],t=this._def.keyType,o=this._def.valueType;for(const e in i.data)n.push({key:t._parse(new N(i,e,i.path,e)),value:o._parse(new N(i,i.data[e],i.path,e)),alwaysSet:e in i.data});return i.common.async?h.mergeObjectAsync(a,n):h.mergeObjectSync(a,n)}get element(){return this._def.valueType}static create(e,a,i){return new ye(a instanceof S?{keyType:e,valueType:a,typeName:Me.ZodRecord,...A(i)}:{keyType:X.create(),valueType:e,typeName:Me.ZodRecord,...A(a)})}}class _e extends S{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:a,ctx:i}=this._processInputParams(e);if(i.parsedType!==s.map)return m(i,{code:r.invalid_type,expected:s.map,received:i.parsedType}),f;const n=this._def.keyType,t=this._def.valueType,o=[...i.data.entries()].map((([e,a],s)=>({key:n._parse(new N(i,e,i.path,[s,"key"])),value:t._parse(new N(i,a,i.path,[s,"value"]))})));if(i.common.async){const e=new Map;return Promise.resolve().then((async()=>{for(const i of o){const n=await i.key,t=await i.value;if("aborted"===n.status||"aborted"===t.status)return f;"dirty"!==n.status&&"dirty"!==t.status||a.dirty(),e.set(n.value,t.value)}return{status:a.value,value:e}}))}{const e=new Map;for(const i of o){const n=i.key,t=i.value;if("aborted"===n.status||"aborted"===t.status)return f;"dirty"!==n.status&&"dirty"!==t.status||a.dirty(),e.set(n.value,t.value)}return{status:a.value,value:e}}}}_e.create=(e,a,i)=>new _e({valueType:a,keyType:e,typeName:Me.ZodMap,...A(i)});class ke extends S{_parse(e){const{status:a,ctx:i}=this._processInputParams(e);if(i.parsedType!==s.set)return m(i,{code:r.invalid_type,expected:s.set,received:i.parsedType}),f;const n=this._def;null!==n.minSize&&i.data.size<n.minSize.value&&(m(i,{code:r.too_small,minimum:n.minSize.value,type:"set",inclusive:!0,exact:!1,message:n.minSize.message}),a.dirty()),null!==n.maxSize&&i.data.size>n.maxSize.value&&(m(i,{code:r.too_big,maximum:n.maxSize.value,type:"set",inclusive:!0,exact:!1,message:n.maxSize.message}),a.dirty());const t=this._def.valueType;function o(e){const i=new Set;for(const n of e){if("aborted"===n.status)return f;"dirty"===n.status&&a.dirty(),i.add(n.value)}return{status:a.value,value:i}}const c=[...i.data.values()].map(((e,a)=>t._parse(new N(i,e,i.path,a))));return i.common.async?Promise.all(c).then((e=>o(e))):o(c)}min(e,a){return new ke({...this._def,minSize:{value:e,message:E.toString(a)}})}max(e,a){return new ke({...this._def,maxSize:{value:e,message:E.toString(a)}})}size(e,a){return this.min(e,a).max(e,a)}nonempty(e){return this.min(1,e)}}ke.create=(e,a)=>new ke({valueType:e,minSize:null,maxSize:null,typeName:Me.ZodSet,...A(a)});class we extends S{constructor(){super(...arguments),this.validate=this.implement}_parse(e){const{ctx:a}=this._processInputParams(e);if(a.parsedType!==s.function)return m(a,{code:r.invalid_type,expected:s.function,received:a.parsedType}),f;function i(e,i){return d({data:e,path:a.path,errorMaps:[a.common.contextualErrorMap,a.schemaErrorMap,u(),p].filter((e=>!!e)),issueData:{code:r.invalid_arguments,argumentsError:i}})}function n(e,i){return d({data:e,path:a.path,errorMaps:[a.common.contextualErrorMap,a.schemaErrorMap,u(),p].filter((e=>!!e)),issueData:{code:r.invalid_return_type,returnTypeError:i}})}const t={errorMap:a.common.contextualErrorMap},o=a.data;if(this._def.returns instanceof Ae){
// Would love a way to avoid disabling this rule, but we need
// an alias (using an arrow function was what caused 2651).
// eslint-disable-next-line @typescript-eslint/no-this-alias
const e=this;return v((async function(...a){const s=new c([]),r=await e._def.args.parseAsync(a,t).catch((e=>{throw s.addIssue(i(a,e)),s})),p=await Reflect.apply(o,this,r);return await e._def.returns._def.type.parseAsync(p,t).catch((e=>{throw s.addIssue(n(p,e)),s}))}))}{
// Would love a way to avoid disabling this rule, but we need
// an alias (using an arrow function was what caused 2651).
// eslint-disable-next-line @typescript-eslint/no-this-alias
const e=this;return v((function(...a){const s=e._def.args.safeParse(a,t);if(!s.success)throw new c([i(a,s.error)]);const r=Reflect.apply(o,this,s.data),p=e._def.returns.safeParse(r,t);if(!p.success)throw new c([n(r,p.error)]);return p.data}))}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new we({...this._def,args:ge.create(e).rest(ce.create())})}returns(e){return new we({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,a,i){return new we({args:e||ge.create([]).rest(ce.create()),returns:a||ce.create(),typeName:Me.ZodFunction,...A(i)})}}class Ee extends S{get schema(){return this._def.getter()}_parse(e){const{ctx:a}=this._processInputParams(e);return this._def.getter()._parse({data:a.data,path:a.path,parent:a})}}Ee.create=(e,a)=>new Ee({getter:e,typeName:Me.ZodLazy,...A(a)});class Te extends S{_parse(e){if(e.data!==this._def.value){const a=this._getOrReturnCtx(e);return m(a,{received:a.data,code:r.invalid_literal,expected:this._def.value}),f}return{status:"valid",value:e.data}}get value(){return this._def.value}}function je(e,a){return new Ne({values:e,typeName:Me.ZodEnum,...A(a)})}Te.create=(e,a)=>new Te({value:e,typeName:Me.ZodLiteral,...A(a)});class Ne extends S{constructor(){super(...arguments),T.set(this,void 0)}_parse(e){if("string"!=typeof e.data){const a=this._getOrReturnCtx(e),i=this._def.values;return m(a,{expected:n.joinValues(i),received:a.parsedType,code:r.invalid_type}),f}if(k(this,T,"f")||w(this,T,new Set(this._def.values),"f"),!k(this,T,"f").has(e.data)){const a=this._getOrReturnCtx(e),i=this._def.values;return m(a,{received:a.data,code:r.invalid_enum_value,options:i}),f}return v(e.data)}get options(){return this._def.values}get enum(){const e={};for(const a of this._def.values)e[a]=a;return e}get Values(){const e={};for(const a of this._def.values)e[a]=a;return e}get Enum(){const e={};for(const a of this._def.values)e[a]=a;return e}extract(e,a=this._def){return Ne.create(e,{...this._def,...a})}exclude(e,a=this._def){return Ne.create(this.options.filter((a=>!e.includes(a))),{...this._def,...a})}}T=new WeakMap,Ne.create=je;class Oe extends S{constructor(){super(...arguments),j.set(this,void 0)}_parse(e){const a=n.getValidEnumValues(this._def.values),i=this._getOrReturnCtx(e);if(i.parsedType!==s.string&&i.parsedType!==s.number){const e=n.objectValues(a);return m(i,{expected:n.joinValues(e),received:i.parsedType,code:r.invalid_type}),f}if(k(this,j,"f")||w(this,j,new Set(n.getValidEnumValues(this._def.values)),"f"),!k(this,j,"f").has(e.data)){const e=n.objectValues(a);return m(i,{received:i.data,code:r.invalid_enum_value,options:e}),f}return v(e.data)}get enum(){return this._def.values}}j=new WeakMap,Oe.create=(e,a)=>new Oe({values:e,typeName:Me.ZodNativeEnum,...A(a)});class Ae extends S{unwrap(){return this._def.type}_parse(e){const{ctx:a}=this._processInputParams(e);if(a.parsedType!==s.promise&&!1===a.common.async)return m(a,{code:r.invalid_type,expected:s.promise,received:a.parsedType}),f;const i=a.parsedType===s.promise?a.data:Promise.resolve(a.data);return v(i.then((e=>this._def.type.parseAsync(e,{path:a.path,errorMap:a.common.contextualErrorMap}))))}}Ae.create=(e,a)=>new Ae({type:e,typeName:Me.ZodPromise,...A(a)});class Se extends S{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===Me.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:a,ctx:i}=this._processInputParams(e),t=this._def.effect||null,s={addIssue:e=>{m(i,e),e.fatal?a.abort():a.dirty()},get path(){return i.path}};if(s.addIssue=s.addIssue.bind(s),"preprocess"===t.type){const e=t.transform(i.data,s);if(i.common.async)return Promise.resolve(e).then((async e=>{if("aborted"===a.value)return f;const n=await this._def.schema._parseAsync({data:e,path:i.path,parent:i});return"aborted"===n.status?f:"dirty"===n.status||"dirty"===a.value?x(n.value):n}));{if("aborted"===a.value)return f;const n=this._def.schema._parseSync({data:e,path:i.path,parent:i});return"aborted"===n.status?f:"dirty"===n.status||"dirty"===a.value?x(n.value):n}}if("refinement"===t.type){const e=e=>{const a=t.refinement(e,s);if(i.common.async)return Promise.resolve(a);if(a instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return e};if(!1===i.common.async){const n=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});return"aborted"===n.status?f:("dirty"===n.status&&a.dirty(),
// return value is ignored
e(n.value),{status:a.value,value:n.value})}return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then((i=>"aborted"===i.status?f:("dirty"===i.status&&a.dirty(),e(i.value).then((()=>({status:a.value,value:i.value}))))))}if("transform"===t.type){if(!1===i.common.async){const e=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});if(!y(e))return e;const n=t.transform(e.value,s);if(n instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:a.value,value:n}}return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then((e=>y(e)?Promise.resolve(t.transform(e.value,s)).then((e=>({status:a.value,value:e}))):e))}n.assertNever(t)}}Se.create=(e,a,i)=>new Se({schema:e,typeName:Me.ZodEffects,effect:a,...A(i)}),Se.createWithPreprocess=(e,a,i)=>new Se({schema:a,effect:{type:"preprocess",transform:e},typeName:Me.ZodEffects,...A(i)});class Ie extends S{_parse(e){return this._getType(e)===s.undefined?v(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}Ie.create=(e,a)=>new Ie({innerType:e,typeName:Me.ZodOptional,...A(a)});class Re extends S{_parse(e){return this._getType(e)===s.null?v(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}Re.create=(e,a)=>new Re({innerType:e,typeName:Me.ZodNullable,...A(a)});class Ce extends S{_parse(e){const{ctx:a}=this._processInputParams(e);let i=a.data;return a.parsedType===s.undefined&&(i=this._def.defaultValue()),this._def.innerType._parse({data:i,path:a.path,parent:a})}removeDefault(){return this._def.innerType}}Ce.create=(e,a)=>new Ce({innerType:e,typeName:Me.ZodDefault,defaultValue:"function"==typeof a.default?a.default:()=>a.default,...A(a)});class De extends S{_parse(e){const{ctx:a}=this._processInputParams(e),i={...a,common:{...a.common,issues:[]}},n=this._def.innerType._parse({data:i.data,path:i.path,parent:{...i}});
// newCtx is used to not collect issues from inner types in ctx
return _(n)?n.then((e=>({status:"valid",value:"valid"===e.status?e.value:this._def.catchValue({get error(){return new c(i.common.issues)},input:i.data})}))):{status:"valid",value:"valid"===n.status?n.value:this._def.catchValue({get error(){return new c(i.common.issues)},input:i.data})}}removeCatch(){return this._def.innerType}}De.create=(e,a)=>new De({innerType:e,typeName:Me.ZodCatch,catchValue:"function"==typeof a.catch?a.catch:()=>a.catch,...A(a)});class Le extends S{_parse(e){if(this._getType(e)!==s.nan){const a=this._getOrReturnCtx(e);return m(a,{code:r.invalid_type,expected:s.nan,received:a.parsedType}),f}return{status:"valid",value:e.data}}}Le.create=e=>new Le({typeName:Me.ZodNaN,...A(e)});const ze=Symbol("zod_brand");class Pe extends S{_parse(e){const{ctx:a}=this._processInputParams(e),i=a.data;return this._def.type._parse({data:i,path:a.path,parent:a})}unwrap(){return this._def.type}}class Fe extends S{_parse(e){const{status:a,ctx:i}=this._processInputParams(e);if(i.common.async){return(async()=>{const e=await this._def.in._parseAsync({data:i.data,path:i.path,parent:i});return"aborted"===e.status?f:"dirty"===e.status?(a.dirty(),x(e.value)):this._def.out._parseAsync({data:e.value,path:i.path,parent:i})})()}{const e=this._def.in._parseSync({data:i.data,path:i.path,parent:i});return"aborted"===e.status?f:"dirty"===e.status?(a.dirty(),{status:"dirty",value:e.value}):this._def.out._parseSync({data:e.value,path:i.path,parent:i})}}static create(e,a){return new Fe({in:e,out:a,typeName:Me.ZodPipeline})}}class Be extends S{_parse(e){const a=this._def.innerType._parse(e),i=e=>(y(e)&&(e.value=Object.freeze(e.value)),e);return _(a)?a.then((e=>i(e))):i(a)}unwrap(){return this._def.innerType}}function Ue(e,a={}
/**
 * @deprecated
 *
 * Pass `fatal` into the params object instead:
 *
 * ```ts
 * z.string().custom((val) => val.length > 5, { fatal: false })
 * ```
 *
 */,i){return e?re.create().superRefine(((n,t)=>{var s,o;if(!e(n)){const e="function"==typeof a?a(n):"string"==typeof a?{message:a}:a,r=null===(o=null!==(s=e.fatal)&&void 0!==s?s:i)||void 0===o||o,c="string"==typeof e?{message:e}:e;t.addIssue({code:"custom",...c,fatal:r})}})):re.create()}Be.create=(e,a)=>new Be({innerType:e,typeName:Me.ZodReadonly,...A(a)});const qe={object:me.lazycreate};var Me;!function(e){e.ZodString="ZodString",e.ZodNumber="ZodNumber",e.ZodNaN="ZodNaN",e.ZodBigInt="ZodBigInt",e.ZodBoolean="ZodBoolean",e.ZodDate="ZodDate",e.ZodSymbol="ZodSymbol",e.ZodUndefined="ZodUndefined",e.ZodNull="ZodNull",e.ZodAny="ZodAny",e.ZodUnknown="ZodUnknown",e.ZodNever="ZodNever",e.ZodVoid="ZodVoid",e.ZodArray="ZodArray",e.ZodObject="ZodObject",e.ZodUnion="ZodUnion",e.ZodDiscriminatedUnion="ZodDiscriminatedUnion",e.ZodIntersection="ZodIntersection",e.ZodTuple="ZodTuple",e.ZodRecord="ZodRecord",e.ZodMap="ZodMap",e.ZodSet="ZodSet",e.ZodFunction="ZodFunction",e.ZodLazy="ZodLazy",e.ZodLiteral="ZodLiteral",e.ZodEnum="ZodEnum",e.ZodEffects="ZodEffects",e.ZodNativeEnum="ZodNativeEnum",e.ZodOptional="ZodOptional",e.ZodNullable="ZodNullable",e.ZodDefault="ZodDefault",e.ZodCatch="ZodCatch",e.ZodPromise="ZodPromise",e.ZodBranded="ZodBranded",e.ZodPipeline="ZodPipeline",e.ZodReadonly="ZodReadonly"}(Me||(Me={}));const Ze=X.create,$e=ee.create,Ve=Le.create,Ke=ae.create,Ye=ie.create,Ge=ne.create,Je=te.create,He=se.create,We=oe.create,Xe=re.create,Qe=ce.create,ea=pe.create,aa=le.create,ia=ue.create,na=me.create,ta=me.strictCreate,sa=he.create,oa=xe.create,ra=be.create,ca=ge.create,pa=ye.create,la=_e.create,ua=ke.create,da=we.create,ma=Ee.create,ha=Te.create,fa=Ne.create,xa=Oe.create,va=Ae.create,ba=Se.create,ga=Ie.create,ya=Re.create,_a=Se.createWithPreprocess,ka=Fe.create,wa={string:e=>X.create({...e,coerce:!0}),number:e=>ee.create({...e,coerce:!0}),boolean:e=>ie.create({...e,coerce:!0}),bigint:e=>ae.create({...e,coerce:!0}),date:e=>ne.create({...e,coerce:!0})},Ea=f;var Ta=Object.freeze({__proto__:null,defaultErrorMap:p,setErrorMap:function(e){l=e},getErrorMap:u,makeIssue:d,EMPTY_PATH:[],addIssueToContext:m,ParseStatus:h,INVALID:f,DIRTY:x,OK:v,isAborted:b,isDirty:g,isValid:y,isAsync:_,get util(){return n},get objectUtil(){return t},ZodParsedType:s,getParsedType:o,ZodType:S,datetimeRegex:J,ZodString:X,ZodNumber:ee,ZodBigInt:ae,ZodBoolean:ie,ZodDate:ne,ZodSymbol:te,ZodUndefined:se,ZodNull:oe,ZodAny:re,ZodUnknown:ce,ZodNever:pe,ZodVoid:le,ZodArray:ue,ZodObject:me,ZodUnion:he,ZodDiscriminatedUnion:xe,ZodIntersection:be,ZodTuple:ge,ZodRecord:ye,ZodMap:_e,ZodSet:ke,ZodFunction:we,ZodLazy:Ee,ZodLiteral:Te,ZodEnum:Ne,ZodNativeEnum:Oe,ZodPromise:Ae,ZodEffects:Se,ZodTransformer:Se,ZodOptional:Ie,ZodNullable:Re,ZodDefault:Ce,ZodCatch:De,ZodNaN:Le,BRAND:ze,ZodBranded:Pe,ZodPipeline:Fe,ZodReadonly:Be,custom:Ue,Schema:S,ZodSchema:S,late:qe,get ZodFirstPartyTypeKind(){return Me},coerce:wa,any:Xe,array:ia,bigint:Ke,boolean:Ye,date:Ge,discriminatedUnion:oa,effect:ba,enum:fa,function:da,instanceof:(
// const instanceOfType = <T extends new (...args: any[]) => any>(
e,a={message:`Input not instance of ${e.name}`})=>Ue((a=>a instanceof e),a),intersection:ra,lazy:ma,literal:ha,map:la,nan:Ve,nativeEnum:xa,never:ea,null:We,nullable:ya,number:$e,object:na,oboolean:()=>Ye().optional(),onumber:()=>$e().optional(),optional:ga,ostring:()=>Ze().optional(),pipeline:ka,preprocess:_a,promise:va,record:pa,set:ua,strictObject:ta,string:Ze,symbol:Je,transformer:ba,tuple:ca,undefined:He,union:sa,unknown:Qe,void:aa,NEVER:Ea,ZodIssueCode:r,quotelessJson:e=>JSON.stringify(e,null,2).replace(/"([^"]+)":/g,"$1:"),ZodError:c});
/***/},
/***/1813:
/***/e=>{"use strict";e.exports=JSON.parse('{"application/1d-interleaved-parityfec":{"source":"iana"},"application/3gpdash-qoe-report+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/3gpp-ims+xml":{"source":"iana","compressible":true},"application/3gpphal+json":{"source":"iana","compressible":true},"application/3gpphalforms+json":{"source":"iana","compressible":true},"application/a2l":{"source":"iana"},"application/ace+cbor":{"source":"iana"},"application/activemessage":{"source":"iana"},"application/activity+json":{"source":"iana","compressible":true},"application/alto-costmap+json":{"source":"iana","compressible":true},"application/alto-costmapfilter+json":{"source":"iana","compressible":true},"application/alto-directory+json":{"source":"iana","compressible":true},"application/alto-endpointcost+json":{"source":"iana","compressible":true},"application/alto-endpointcostparams+json":{"source":"iana","compressible":true},"application/alto-endpointprop+json":{"source":"iana","compressible":true},"application/alto-endpointpropparams+json":{"source":"iana","compressible":true},"application/alto-error+json":{"source":"iana","compressible":true},"application/alto-networkmap+json":{"source":"iana","compressible":true},"application/alto-networkmapfilter+json":{"source":"iana","compressible":true},"application/alto-updatestreamcontrol+json":{"source":"iana","compressible":true},"application/alto-updatestreamparams+json":{"source":"iana","compressible":true},"application/aml":{"source":"iana"},"application/andrew-inset":{"source":"iana","extensions":["ez"]},"application/applefile":{"source":"iana"},"application/applixware":{"source":"apache","extensions":["aw"]},"application/at+jwt":{"source":"iana"},"application/atf":{"source":"iana"},"application/atfx":{"source":"iana"},"application/atom+xml":{"source":"iana","compressible":true,"extensions":["atom"]},"application/atomcat+xml":{"source":"iana","compressible":true,"extensions":["atomcat"]},"application/atomdeleted+xml":{"source":"iana","compressible":true,"extensions":["atomdeleted"]},"application/atomicmail":{"source":"iana"},"application/atomsvc+xml":{"source":"iana","compressible":true,"extensions":["atomsvc"]},"application/atsc-dwd+xml":{"source":"iana","compressible":true,"extensions":["dwd"]},"application/atsc-dynamic-event-message":{"source":"iana"},"application/atsc-held+xml":{"source":"iana","compressible":true,"extensions":["held"]},"application/atsc-rdt+json":{"source":"iana","compressible":true},"application/atsc-rsat+xml":{"source":"iana","compressible":true,"extensions":["rsat"]},"application/atxml":{"source":"iana"},"application/auth-policy+xml":{"source":"iana","compressible":true},"application/bacnet-xdd+zip":{"source":"iana","compressible":false},"application/batch-smtp":{"source":"iana"},"application/bdoc":{"compressible":false,"extensions":["bdoc"]},"application/beep+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/calendar+json":{"source":"iana","compressible":true},"application/calendar+xml":{"source":"iana","compressible":true,"extensions":["xcs"]},"application/call-completion":{"source":"iana"},"application/cals-1840":{"source":"iana"},"application/captive+json":{"source":"iana","compressible":true},"application/cbor":{"source":"iana"},"application/cbor-seq":{"source":"iana"},"application/cccex":{"source":"iana"},"application/ccmp+xml":{"source":"iana","compressible":true},"application/ccxml+xml":{"source":"iana","compressible":true,"extensions":["ccxml"]},"application/cdfx+xml":{"source":"iana","compressible":true,"extensions":["cdfx"]},"application/cdmi-capability":{"source":"iana","extensions":["cdmia"]},"application/cdmi-container":{"source":"iana","extensions":["cdmic"]},"application/cdmi-domain":{"source":"iana","extensions":["cdmid"]},"application/cdmi-object":{"source":"iana","extensions":["cdmio"]},"application/cdmi-queue":{"source":"iana","extensions":["cdmiq"]},"application/cdni":{"source":"iana"},"application/cea":{"source":"iana"},"application/cea-2018+xml":{"source":"iana","compressible":true},"application/cellml+xml":{"source":"iana","compressible":true},"application/cfw":{"source":"iana"},"application/city+json":{"source":"iana","compressible":true},"application/clr":{"source":"iana"},"application/clue+xml":{"source":"iana","compressible":true},"application/clue_info+xml":{"source":"iana","compressible":true},"application/cms":{"source":"iana"},"application/cnrp+xml":{"source":"iana","compressible":true},"application/coap-group+json":{"source":"iana","compressible":true},"application/coap-payload":{"source":"iana"},"application/commonground":{"source":"iana"},"application/conference-info+xml":{"source":"iana","compressible":true},"application/cose":{"source":"iana"},"application/cose-key":{"source":"iana"},"application/cose-key-set":{"source":"iana"},"application/cpl+xml":{"source":"iana","compressible":true,"extensions":["cpl"]},"application/csrattrs":{"source":"iana"},"application/csta+xml":{"source":"iana","compressible":true},"application/cstadata+xml":{"source":"iana","compressible":true},"application/csvm+json":{"source":"iana","compressible":true},"application/cu-seeme":{"source":"apache","extensions":["cu"]},"application/cwt":{"source":"iana"},"application/cybercash":{"source":"iana"},"application/dart":{"compressible":true},"application/dash+xml":{"source":"iana","compressible":true,"extensions":["mpd"]},"application/dash-patch+xml":{"source":"iana","compressible":true,"extensions":["mpp"]},"application/dashdelta":{"source":"iana"},"application/davmount+xml":{"source":"iana","compressible":true,"extensions":["davmount"]},"application/dca-rft":{"source":"iana"},"application/dcd":{"source":"iana"},"application/dec-dx":{"source":"iana"},"application/dialog-info+xml":{"source":"iana","compressible":true},"application/dicom":{"source":"iana"},"application/dicom+json":{"source":"iana","compressible":true},"application/dicom+xml":{"source":"iana","compressible":true},"application/dii":{"source":"iana"},"application/dit":{"source":"iana"},"application/dns":{"source":"iana"},"application/dns+json":{"source":"iana","compressible":true},"application/dns-message":{"source":"iana"},"application/docbook+xml":{"source":"apache","compressible":true,"extensions":["dbk"]},"application/dots+cbor":{"source":"iana"},"application/dskpp+xml":{"source":"iana","compressible":true},"application/dssc+der":{"source":"iana","extensions":["dssc"]},"application/dssc+xml":{"source":"iana","compressible":true,"extensions":["xdssc"]},"application/dvcs":{"source":"iana"},"application/ecmascript":{"source":"iana","compressible":true,"extensions":["es","ecma"]},"application/edi-consent":{"source":"iana"},"application/edi-x12":{"source":"iana","compressible":false},"application/edifact":{"source":"iana","compressible":false},"application/efi":{"source":"iana"},"application/elm+json":{"source":"iana","charset":"UTF-8","compressible":true},"application/elm+xml":{"source":"iana","compressible":true},"application/emergencycalldata.cap+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/emergencycalldata.comment+xml":{"source":"iana","compressible":true},"application/emergencycalldata.control+xml":{"source":"iana","compressible":true},"application/emergencycalldata.deviceinfo+xml":{"source":"iana","compressible":true},"application/emergencycalldata.ecall.msd":{"source":"iana"},"application/emergencycalldata.providerinfo+xml":{"source":"iana","compressible":true},"application/emergencycalldata.serviceinfo+xml":{"source":"iana","compressible":true},"application/emergencycalldata.subscriberinfo+xml":{"source":"iana","compressible":true},"application/emergencycalldata.veds+xml":{"source":"iana","compressible":true},"application/emma+xml":{"source":"iana","compressible":true,"extensions":["emma"]},"application/emotionml+xml":{"source":"iana","compressible":true,"extensions":["emotionml"]},"application/encaprtp":{"source":"iana"},"application/epp+xml":{"source":"iana","compressible":true},"application/epub+zip":{"source":"iana","compressible":false,"extensions":["epub"]},"application/eshop":{"source":"iana"},"application/exi":{"source":"iana","extensions":["exi"]},"application/expect-ct-report+json":{"source":"iana","compressible":true},"application/express":{"source":"iana","extensions":["exp"]},"application/fastinfoset":{"source":"iana"},"application/fastsoap":{"source":"iana"},"application/fdt+xml":{"source":"iana","compressible":true,"extensions":["fdt"]},"application/fhir+json":{"source":"iana","charset":"UTF-8","compressible":true},"application/fhir+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/fido.trusted-apps+json":{"compressible":true},"application/fits":{"source":"iana"},"application/flexfec":{"source":"iana"},"application/font-sfnt":{"source":"iana"},"application/font-tdpfr":{"source":"iana","extensions":["pfr"]},"application/font-woff":{"source":"iana","compressible":false},"application/framework-attributes+xml":{"source":"iana","compressible":true},"application/geo+json":{"source":"iana","compressible":true,"extensions":["geojson"]},"application/geo+json-seq":{"source":"iana"},"application/geopackage+sqlite3":{"source":"iana"},"application/geoxacml+xml":{"source":"iana","compressible":true},"application/gltf-buffer":{"source":"iana"},"application/gml+xml":{"source":"iana","compressible":true,"extensions":["gml"]},"application/gpx+xml":{"source":"apache","compressible":true,"extensions":["gpx"]},"application/gxf":{"source":"apache","extensions":["gxf"]},"application/gzip":{"source":"iana","compressible":false,"extensions":["gz"]},"application/h224":{"source":"iana"},"application/held+xml":{"source":"iana","compressible":true},"application/hjson":{"extensions":["hjson"]},"application/http":{"source":"iana"},"application/hyperstudio":{"source":"iana","extensions":["stk"]},"application/ibe-key-request+xml":{"source":"iana","compressible":true},"application/ibe-pkg-reply+xml":{"source":"iana","compressible":true},"application/ibe-pp-data":{"source":"iana"},"application/iges":{"source":"iana"},"application/im-iscomposing+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/index":{"source":"iana"},"application/index.cmd":{"source":"iana"},"application/index.obj":{"source":"iana"},"application/index.response":{"source":"iana"},"application/index.vnd":{"source":"iana"},"application/inkml+xml":{"source":"iana","compressible":true,"extensions":["ink","inkml"]},"application/iotp":{"source":"iana"},"application/ipfix":{"source":"iana","extensions":["ipfix"]},"application/ipp":{"source":"iana"},"application/isup":{"source":"iana"},"application/its+xml":{"source":"iana","compressible":true,"extensions":["its"]},"application/java-archive":{"source":"apache","compressible":false,"extensions":["jar","war","ear"]},"application/java-serialized-object":{"source":"apache","compressible":false,"extensions":["ser"]},"application/java-vm":{"source":"apache","compressible":false,"extensions":["class"]},"application/javascript":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["js","mjs"]},"application/jf2feed+json":{"source":"iana","compressible":true},"application/jose":{"source":"iana"},"application/jose+json":{"source":"iana","compressible":true},"application/jrd+json":{"source":"iana","compressible":true},"application/jscalendar+json":{"source":"iana","compressible":true},"application/json":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["json","map"]},"application/json-patch+json":{"source":"iana","compressible":true},"application/json-seq":{"source":"iana"},"application/json5":{"extensions":["json5"]},"application/jsonml+json":{"source":"apache","compressible":true,"extensions":["jsonml"]},"application/jwk+json":{"source":"iana","compressible":true},"application/jwk-set+json":{"source":"iana","compressible":true},"application/jwt":{"source":"iana"},"application/kpml-request+xml":{"source":"iana","compressible":true},"application/kpml-response+xml":{"source":"iana","compressible":true},"application/ld+json":{"source":"iana","compressible":true,"extensions":["jsonld"]},"application/lgr+xml":{"source":"iana","compressible":true,"extensions":["lgr"]},"application/link-format":{"source":"iana"},"application/load-control+xml":{"source":"iana","compressible":true},"application/lost+xml":{"source":"iana","compressible":true,"extensions":["lostxml"]},"application/lostsync+xml":{"source":"iana","compressible":true},"application/lpf+zip":{"source":"iana","compressible":false},"application/lxf":{"source":"iana"},"application/mac-binhex40":{"source":"iana","extensions":["hqx"]},"application/mac-compactpro":{"source":"apache","extensions":["cpt"]},"application/macwriteii":{"source":"iana"},"application/mads+xml":{"source":"iana","compressible":true,"extensions":["mads"]},"application/manifest+json":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["webmanifest"]},"application/marc":{"source":"iana","extensions":["mrc"]},"application/marcxml+xml":{"source":"iana","compressible":true,"extensions":["mrcx"]},"application/mathematica":{"source":"iana","extensions":["ma","nb","mb"]},"application/mathml+xml":{"source":"iana","compressible":true,"extensions":["mathml"]},"application/mathml-content+xml":{"source":"iana","compressible":true},"application/mathml-presentation+xml":{"source":"iana","compressible":true},"application/mbms-associated-procedure-description+xml":{"source":"iana","compressible":true},"application/mbms-deregister+xml":{"source":"iana","compressible":true},"application/mbms-envelope+xml":{"source":"iana","compressible":true},"application/mbms-msk+xml":{"source":"iana","compressible":true},"application/mbms-msk-response+xml":{"source":"iana","compressible":true},"application/mbms-protection-description+xml":{"source":"iana","compressible":true},"application/mbms-reception-report+xml":{"source":"iana","compressible":true},"application/mbms-register+xml":{"source":"iana","compressible":true},"application/mbms-register-response+xml":{"source":"iana","compressible":true},"application/mbms-schedule+xml":{"source":"iana","compressible":true},"application/mbms-user-service-description+xml":{"source":"iana","compressible":true},"application/mbox":{"source":"iana","extensions":["mbox"]},"application/media-policy-dataset+xml":{"source":"iana","compressible":true,"extensions":["mpf"]},"application/media_control+xml":{"source":"iana","compressible":true},"application/mediaservercontrol+xml":{"source":"iana","compressible":true,"extensions":["mscml"]},"application/merge-patch+json":{"source":"iana","compressible":true},"application/metalink+xml":{"source":"apache","compressible":true,"extensions":["metalink"]},"application/metalink4+xml":{"source":"iana","compressible":true,"extensions":["meta4"]},"application/mets+xml":{"source":"iana","compressible":true,"extensions":["mets"]},"application/mf4":{"source":"iana"},"application/mikey":{"source":"iana"},"application/mipc":{"source":"iana"},"application/missing-blocks+cbor-seq":{"source":"iana"},"application/mmt-aei+xml":{"source":"iana","compressible":true,"extensions":["maei"]},"application/mmt-usd+xml":{"source":"iana","compressible":true,"extensions":["musd"]},"application/mods+xml":{"source":"iana","compressible":true,"extensions":["mods"]},"application/moss-keys":{"source":"iana"},"application/moss-signature":{"source":"iana"},"application/mosskey-data":{"source":"iana"},"application/mosskey-request":{"source":"iana"},"application/mp21":{"source":"iana","extensions":["m21","mp21"]},"application/mp4":{"source":"iana","extensions":["mp4s","m4p"]},"application/mpeg4-generic":{"source":"iana"},"application/mpeg4-iod":{"source":"iana"},"application/mpeg4-iod-xmt":{"source":"iana"},"application/mrb-consumer+xml":{"source":"iana","compressible":true},"application/mrb-publish+xml":{"source":"iana","compressible":true},"application/msc-ivr+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/msc-mixer+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/msword":{"source":"iana","compressible":false,"extensions":["doc","dot"]},"application/mud+json":{"source":"iana","compressible":true},"application/multipart-core":{"source":"iana"},"application/mxf":{"source":"iana","extensions":["mxf"]},"application/n-quads":{"source":"iana","extensions":["nq"]},"application/n-triples":{"source":"iana","extensions":["nt"]},"application/nasdata":{"source":"iana"},"application/news-checkgroups":{"source":"iana","charset":"US-ASCII"},"application/news-groupinfo":{"source":"iana","charset":"US-ASCII"},"application/news-transmission":{"source":"iana"},"application/nlsml+xml":{"source":"iana","compressible":true},"application/node":{"source":"iana","extensions":["cjs"]},"application/nss":{"source":"iana"},"application/oauth-authz-req+jwt":{"source":"iana"},"application/oblivious-dns-message":{"source":"iana"},"application/ocsp-request":{"source":"iana"},"application/ocsp-response":{"source":"iana"},"application/octet-stream":{"source":"iana","compressible":false,"extensions":["bin","dms","lrf","mar","so","dist","distz","pkg","bpk","dump","elc","deploy","exe","dll","deb","dmg","iso","img","msi","msp","msm","buffer"]},"application/oda":{"source":"iana","extensions":["oda"]},"application/odm+xml":{"source":"iana","compressible":true},"application/odx":{"source":"iana"},"application/oebps-package+xml":{"source":"iana","compressible":true,"extensions":["opf"]},"application/ogg":{"source":"iana","compressible":false,"extensions":["ogx"]},"application/omdoc+xml":{"source":"apache","compressible":true,"extensions":["omdoc"]},"application/onenote":{"source":"apache","extensions":["onetoc","onetoc2","onetmp","onepkg"]},"application/opc-nodeset+xml":{"source":"iana","compressible":true},"application/oscore":{"source":"iana"},"application/oxps":{"source":"iana","extensions":["oxps"]},"application/p21":{"source":"iana"},"application/p21+zip":{"source":"iana","compressible":false},"application/p2p-overlay+xml":{"source":"iana","compressible":true,"extensions":["relo"]},"application/parityfec":{"source":"iana"},"application/passport":{"source":"iana"},"application/patch-ops-error+xml":{"source":"iana","compressible":true,"extensions":["xer"]},"application/pdf":{"source":"iana","compressible":false,"extensions":["pdf"]},"application/pdx":{"source":"iana"},"application/pem-certificate-chain":{"source":"iana"},"application/pgp-encrypted":{"source":"iana","compressible":false,"extensions":["pgp"]},"application/pgp-keys":{"source":"iana","extensions":["asc"]},"application/pgp-signature":{"source":"iana","extensions":["asc","sig"]},"application/pics-rules":{"source":"apache","extensions":["prf"]},"application/pidf+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/pidf-diff+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/pkcs10":{"source":"iana","extensions":["p10"]},"application/pkcs12":{"source":"iana"},"application/pkcs7-mime":{"source":"iana","extensions":["p7m","p7c"]},"application/pkcs7-signature":{"source":"iana","extensions":["p7s"]},"application/pkcs8":{"source":"iana","extensions":["p8"]},"application/pkcs8-encrypted":{"source":"iana"},"application/pkix-attr-cert":{"source":"iana","extensions":["ac"]},"application/pkix-cert":{"source":"iana","extensions":["cer"]},"application/pkix-crl":{"source":"iana","extensions":["crl"]},"application/pkix-pkipath":{"source":"iana","extensions":["pkipath"]},"application/pkixcmp":{"source":"iana","extensions":["pki"]},"application/pls+xml":{"source":"iana","compressible":true,"extensions":["pls"]},"application/poc-settings+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/postscript":{"source":"iana","compressible":true,"extensions":["ai","eps","ps"]},"application/ppsp-tracker+json":{"source":"iana","compressible":true},"application/problem+json":{"source":"iana","compressible":true},"application/problem+xml":{"source":"iana","compressible":true},"application/provenance+xml":{"source":"iana","compressible":true,"extensions":["provx"]},"application/prs.alvestrand.titrax-sheet":{"source":"iana"},"application/prs.cww":{"source":"iana","extensions":["cww"]},"application/prs.cyn":{"source":"iana","charset":"7-BIT"},"application/prs.hpub+zip":{"source":"iana","compressible":false},"application/prs.nprend":{"source":"iana"},"application/prs.plucker":{"source":"iana"},"application/prs.rdf-xml-crypt":{"source":"iana"},"application/prs.xsf+xml":{"source":"iana","compressible":true},"application/pskc+xml":{"source":"iana","compressible":true,"extensions":["pskcxml"]},"application/pvd+json":{"source":"iana","compressible":true},"application/qsig":{"source":"iana"},"application/raml+yaml":{"compressible":true,"extensions":["raml"]},"application/raptorfec":{"source":"iana"},"application/rdap+json":{"source":"iana","compressible":true},"application/rdf+xml":{"source":"iana","compressible":true,"extensions":["rdf","owl"]},"application/reginfo+xml":{"source":"iana","compressible":true,"extensions":["rif"]},"application/relax-ng-compact-syntax":{"source":"iana","extensions":["rnc"]},"application/remote-printing":{"source":"iana"},"application/reputon+json":{"source":"iana","compressible":true},"application/resource-lists+xml":{"source":"iana","compressible":true,"extensions":["rl"]},"application/resource-lists-diff+xml":{"source":"iana","compressible":true,"extensions":["rld"]},"application/rfc+xml":{"source":"iana","compressible":true},"application/riscos":{"source":"iana"},"application/rlmi+xml":{"source":"iana","compressible":true},"application/rls-services+xml":{"source":"iana","compressible":true,"extensions":["rs"]},"application/route-apd+xml":{"source":"iana","compressible":true,"extensions":["rapd"]},"application/route-s-tsid+xml":{"source":"iana","compressible":true,"extensions":["sls"]},"application/route-usd+xml":{"source":"iana","compressible":true,"extensions":["rusd"]},"application/rpki-ghostbusters":{"source":"iana","extensions":["gbr"]},"application/rpki-manifest":{"source":"iana","extensions":["mft"]},"application/rpki-publication":{"source":"iana"},"application/rpki-roa":{"source":"iana","extensions":["roa"]},"application/rpki-updown":{"source":"iana"},"application/rsd+xml":{"source":"apache","compressible":true,"extensions":["rsd"]},"application/rss+xml":{"source":"apache","compressible":true,"extensions":["rss"]},"application/rtf":{"source":"iana","compressible":true,"extensions":["rtf"]},"application/rtploopback":{"source":"iana"},"application/rtx":{"source":"iana"},"application/samlassertion+xml":{"source":"iana","compressible":true},"application/samlmetadata+xml":{"source":"iana","compressible":true},"application/sarif+json":{"source":"iana","compressible":true},"application/sarif-external-properties+json":{"source":"iana","compressible":true},"application/sbe":{"source":"iana"},"application/sbml+xml":{"source":"iana","compressible":true,"extensions":["sbml"]},"application/scaip+xml":{"source":"iana","compressible":true},"application/scim+json":{"source":"iana","compressible":true},"application/scvp-cv-request":{"source":"iana","extensions":["scq"]},"application/scvp-cv-response":{"source":"iana","extensions":["scs"]},"application/scvp-vp-request":{"source":"iana","extensions":["spq"]},"application/scvp-vp-response":{"source":"iana","extensions":["spp"]},"application/sdp":{"source":"iana","extensions":["sdp"]},"application/secevent+jwt":{"source":"iana"},"application/senml+cbor":{"source":"iana"},"application/senml+json":{"source":"iana","compressible":true},"application/senml+xml":{"source":"iana","compressible":true,"extensions":["senmlx"]},"application/senml-etch+cbor":{"source":"iana"},"application/senml-etch+json":{"source":"iana","compressible":true},"application/senml-exi":{"source":"iana"},"application/sensml+cbor":{"source":"iana"},"application/sensml+json":{"source":"iana","compressible":true},"application/sensml+xml":{"source":"iana","compressible":true,"extensions":["sensmlx"]},"application/sensml-exi":{"source":"iana"},"application/sep+xml":{"source":"iana","compressible":true},"application/sep-exi":{"source":"iana"},"application/session-info":{"source":"iana"},"application/set-payment":{"source":"iana"},"application/set-payment-initiation":{"source":"iana","extensions":["setpay"]},"application/set-registration":{"source":"iana"},"application/set-registration-initiation":{"source":"iana","extensions":["setreg"]},"application/sgml":{"source":"iana"},"application/sgml-open-catalog":{"source":"iana"},"application/shf+xml":{"source":"iana","compressible":true,"extensions":["shf"]},"application/sieve":{"source":"iana","extensions":["siv","sieve"]},"application/simple-filter+xml":{"source":"iana","compressible":true},"application/simple-message-summary":{"source":"iana"},"application/simplesymbolcontainer":{"source":"iana"},"application/sipc":{"source":"iana"},"application/slate":{"source":"iana"},"application/smil":{"source":"iana"},"application/smil+xml":{"source":"iana","compressible":true,"extensions":["smi","smil"]},"application/smpte336m":{"source":"iana"},"application/soap+fastinfoset":{"source":"iana"},"application/soap+xml":{"source":"iana","compressible":true},"application/sparql-query":{"source":"iana","extensions":["rq"]},"application/sparql-results+xml":{"source":"iana","compressible":true,"extensions":["srx"]},"application/spdx+json":{"source":"iana","compressible":true},"application/spirits-event+xml":{"source":"iana","compressible":true},"application/sql":{"source":"iana"},"application/srgs":{"source":"iana","extensions":["gram"]},"application/srgs+xml":{"source":"iana","compressible":true,"extensions":["grxml"]},"application/sru+xml":{"source":"iana","compressible":true,"extensions":["sru"]},"application/ssdl+xml":{"source":"apache","compressible":true,"extensions":["ssdl"]},"application/ssml+xml":{"source":"iana","compressible":true,"extensions":["ssml"]},"application/stix+json":{"source":"iana","compressible":true},"application/swid+xml":{"source":"iana","compressible":true,"extensions":["swidtag"]},"application/tamp-apex-update":{"source":"iana"},"application/tamp-apex-update-confirm":{"source":"iana"},"application/tamp-community-update":{"source":"iana"},"application/tamp-community-update-confirm":{"source":"iana"},"application/tamp-error":{"source":"iana"},"application/tamp-sequence-adjust":{"source":"iana"},"application/tamp-sequence-adjust-confirm":{"source":"iana"},"application/tamp-status-query":{"source":"iana"},"application/tamp-status-response":{"source":"iana"},"application/tamp-update":{"source":"iana"},"application/tamp-update-confirm":{"source":"iana"},"application/tar":{"compressible":true},"application/taxii+json":{"source":"iana","compressible":true},"application/td+json":{"source":"iana","compressible":true},"application/tei+xml":{"source":"iana","compressible":true,"extensions":["tei","teicorpus"]},"application/tetra_isi":{"source":"iana"},"application/thraud+xml":{"source":"iana","compressible":true,"extensions":["tfi"]},"application/timestamp-query":{"source":"iana"},"application/timestamp-reply":{"source":"iana"},"application/timestamped-data":{"source":"iana","extensions":["tsd"]},"application/tlsrpt+gzip":{"source":"iana"},"application/tlsrpt+json":{"source":"iana","compressible":true},"application/tnauthlist":{"source":"iana"},"application/token-introspection+jwt":{"source":"iana"},"application/toml":{"compressible":true,"extensions":["toml"]},"application/trickle-ice-sdpfrag":{"source":"iana"},"application/trig":{"source":"iana","extensions":["trig"]},"application/ttml+xml":{"source":"iana","compressible":true,"extensions":["ttml"]},"application/tve-trigger":{"source":"iana"},"application/tzif":{"source":"iana"},"application/tzif-leap":{"source":"iana"},"application/ubjson":{"compressible":false,"extensions":["ubj"]},"application/ulpfec":{"source":"iana"},"application/urc-grpsheet+xml":{"source":"iana","compressible":true},"application/urc-ressheet+xml":{"source":"iana","compressible":true,"extensions":["rsheet"]},"application/urc-targetdesc+xml":{"source":"iana","compressible":true,"extensions":["td"]},"application/urc-uisocketdesc+xml":{"source":"iana","compressible":true},"application/vcard+json":{"source":"iana","compressible":true},"application/vcard+xml":{"source":"iana","compressible":true},"application/vemmi":{"source":"iana"},"application/vividence.scriptfile":{"source":"apache"},"application/vnd.1000minds.decision-model+xml":{"source":"iana","compressible":true,"extensions":["1km"]},"application/vnd.3gpp-prose+xml":{"source":"iana","compressible":true},"application/vnd.3gpp-prose-pc3ch+xml":{"source":"iana","compressible":true},"application/vnd.3gpp-v2x-local-service-information":{"source":"iana"},"application/vnd.3gpp.5gnas":{"source":"iana"},"application/vnd.3gpp.access-transfer-events+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.bsf+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.gmop+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.gtpc":{"source":"iana"},"application/vnd.3gpp.interworking-data":{"source":"iana"},"application/vnd.3gpp.lpp":{"source":"iana"},"application/vnd.3gpp.mc-signalling-ear":{"source":"iana"},"application/vnd.3gpp.mcdata-affiliation-command+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcdata-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcdata-payload":{"source":"iana"},"application/vnd.3gpp.mcdata-service-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcdata-signalling":{"source":"iana"},"application/vnd.3gpp.mcdata-ue-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcdata-user-profile+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-affiliation-command+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-floor-request+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-location-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-mbms-usage-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-service-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-signed+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-ue-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-ue-init-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-user-profile+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-affiliation-command+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-affiliation-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-location-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-mbms-usage-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-service-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-transmission-request+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-ue-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-user-profile+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mid-call+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.ngap":{"source":"iana"},"application/vnd.3gpp.pfcp":{"source":"iana"},"application/vnd.3gpp.pic-bw-large":{"source":"iana","extensions":["plb"]},"application/vnd.3gpp.pic-bw-small":{"source":"iana","extensions":["psb"]},"application/vnd.3gpp.pic-bw-var":{"source":"iana","extensions":["pvb"]},"application/vnd.3gpp.s1ap":{"source":"iana"},"application/vnd.3gpp.sms":{"source":"iana"},"application/vnd.3gpp.sms+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.srvcc-ext+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.srvcc-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.state-and-event-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.ussd+xml":{"source":"iana","compressible":true},"application/vnd.3gpp2.bcmcsinfo+xml":{"source":"iana","compressible":true},"application/vnd.3gpp2.sms":{"source":"iana"},"application/vnd.3gpp2.tcap":{"source":"iana","extensions":["tcap"]},"application/vnd.3lightssoftware.imagescal":{"source":"iana"},"application/vnd.3m.post-it-notes":{"source":"iana","extensions":["pwn"]},"application/vnd.accpac.simply.aso":{"source":"iana","extensions":["aso"]},"application/vnd.accpac.simply.imp":{"source":"iana","extensions":["imp"]},"application/vnd.acucobol":{"source":"iana","extensions":["acu"]},"application/vnd.acucorp":{"source":"iana","extensions":["atc","acutc"]},"application/vnd.adobe.air-application-installer-package+zip":{"source":"apache","compressible":false,"extensions":["air"]},"application/vnd.adobe.flash.movie":{"source":"iana"},"application/vnd.adobe.formscentral.fcdt":{"source":"iana","extensions":["fcdt"]},"application/vnd.adobe.fxp":{"source":"iana","extensions":["fxp","fxpl"]},"application/vnd.adobe.partial-upload":{"source":"iana"},"application/vnd.adobe.xdp+xml":{"source":"iana","compressible":true,"extensions":["xdp"]},"application/vnd.adobe.xfdf":{"source":"iana","extensions":["xfdf"]},"application/vnd.aether.imp":{"source":"iana"},"application/vnd.afpc.afplinedata":{"source":"iana"},"application/vnd.afpc.afplinedata-pagedef":{"source":"iana"},"application/vnd.afpc.cmoca-cmresource":{"source":"iana"},"application/vnd.afpc.foca-charset":{"source":"iana"},"application/vnd.afpc.foca-codedfont":{"source":"iana"},"application/vnd.afpc.foca-codepage":{"source":"iana"},"application/vnd.afpc.modca":{"source":"iana"},"application/vnd.afpc.modca-cmtable":{"source":"iana"},"application/vnd.afpc.modca-formdef":{"source":"iana"},"application/vnd.afpc.modca-mediummap":{"source":"iana"},"application/vnd.afpc.modca-objectcontainer":{"source":"iana"},"application/vnd.afpc.modca-overlay":{"source":"iana"},"application/vnd.afpc.modca-pagesegment":{"source":"iana"},"application/vnd.age":{"source":"iana","extensions":["age"]},"application/vnd.ah-barcode":{"source":"iana"},"application/vnd.ahead.space":{"source":"iana","extensions":["ahead"]},"application/vnd.airzip.filesecure.azf":{"source":"iana","extensions":["azf"]},"application/vnd.airzip.filesecure.azs":{"source":"iana","extensions":["azs"]},"application/vnd.amadeus+json":{"source":"iana","compressible":true},"application/vnd.amazon.ebook":{"source":"apache","extensions":["azw"]},"application/vnd.amazon.mobi8-ebook":{"source":"iana"},"application/vnd.americandynamics.acc":{"source":"iana","extensions":["acc"]},"application/vnd.amiga.ami":{"source":"iana","extensions":["ami"]},"application/vnd.amundsen.maze+xml":{"source":"iana","compressible":true},"application/vnd.android.ota":{"source":"iana"},"application/vnd.android.package-archive":{"source":"apache","compressible":false,"extensions":["apk"]},"application/vnd.anki":{"source":"iana"},"application/vnd.anser-web-certificate-issue-initiation":{"source":"iana","extensions":["cii"]},"application/vnd.anser-web-funds-transfer-initiation":{"source":"apache","extensions":["fti"]},"application/vnd.antix.game-component":{"source":"iana","extensions":["atx"]},"application/vnd.apache.arrow.file":{"source":"iana"},"application/vnd.apache.arrow.stream":{"source":"iana"},"application/vnd.apache.thrift.binary":{"source":"iana"},"application/vnd.apache.thrift.compact":{"source":"iana"},"application/vnd.apache.thrift.json":{"source":"iana"},"application/vnd.api+json":{"source":"iana","compressible":true},"application/vnd.aplextor.warrp+json":{"source":"iana","compressible":true},"application/vnd.apothekende.reservation+json":{"source":"iana","compressible":true},"application/vnd.apple.installer+xml":{"source":"iana","compressible":true,"extensions":["mpkg"]},"application/vnd.apple.keynote":{"source":"iana","extensions":["key"]},"application/vnd.apple.mpegurl":{"source":"iana","extensions":["m3u8"]},"application/vnd.apple.numbers":{"source":"iana","extensions":["numbers"]},"application/vnd.apple.pages":{"source":"iana","extensions":["pages"]},"application/vnd.apple.pkpass":{"compressible":false,"extensions":["pkpass"]},"application/vnd.arastra.swi":{"source":"iana"},"application/vnd.aristanetworks.swi":{"source":"iana","extensions":["swi"]},"application/vnd.artisan+json":{"source":"iana","compressible":true},"application/vnd.artsquare":{"source":"iana"},"application/vnd.astraea-software.iota":{"source":"iana","extensions":["iota"]},"application/vnd.audiograph":{"source":"iana","extensions":["aep"]},"application/vnd.autopackage":{"source":"iana"},"application/vnd.avalon+json":{"source":"iana","compressible":true},"application/vnd.avistar+xml":{"source":"iana","compressible":true},"application/vnd.balsamiq.bmml+xml":{"source":"iana","compressible":true,"extensions":["bmml"]},"application/vnd.balsamiq.bmpr":{"source":"iana"},"application/vnd.banana-accounting":{"source":"iana"},"application/vnd.bbf.usp.error":{"source":"iana"},"application/vnd.bbf.usp.msg":{"source":"iana"},"application/vnd.bbf.usp.msg+json":{"source":"iana","compressible":true},"application/vnd.bekitzur-stech+json":{"source":"iana","compressible":true},"application/vnd.bint.med-content":{"source":"iana"},"application/vnd.biopax.rdf+xml":{"source":"iana","compressible":true},"application/vnd.blink-idb-value-wrapper":{"source":"iana"},"application/vnd.blueice.multipass":{"source":"iana","extensions":["mpm"]},"application/vnd.bluetooth.ep.oob":{"source":"iana"},"application/vnd.bluetooth.le.oob":{"source":"iana"},"application/vnd.bmi":{"source":"iana","extensions":["bmi"]},"application/vnd.bpf":{"source":"iana"},"application/vnd.bpf3":{"source":"iana"},"application/vnd.businessobjects":{"source":"iana","extensions":["rep"]},"application/vnd.byu.uapi+json":{"source":"iana","compressible":true},"application/vnd.cab-jscript":{"source":"iana"},"application/vnd.canon-cpdl":{"source":"iana"},"application/vnd.canon-lips":{"source":"iana"},"application/vnd.capasystems-pg+json":{"source":"iana","compressible":true},"application/vnd.cendio.thinlinc.clientconf":{"source":"iana"},"application/vnd.century-systems.tcp_stream":{"source":"iana"},"application/vnd.chemdraw+xml":{"source":"iana","compressible":true,"extensions":["cdxml"]},"application/vnd.chess-pgn":{"source":"iana"},"application/vnd.chipnuts.karaoke-mmd":{"source":"iana","extensions":["mmd"]},"application/vnd.ciedi":{"source":"iana"},"application/vnd.cinderella":{"source":"iana","extensions":["cdy"]},"application/vnd.cirpack.isdn-ext":{"source":"iana"},"application/vnd.citationstyles.style+xml":{"source":"iana","compressible":true,"extensions":["csl"]},"application/vnd.claymore":{"source":"iana","extensions":["cla"]},"application/vnd.cloanto.rp9":{"source":"iana","extensions":["rp9"]},"application/vnd.clonk.c4group":{"source":"iana","extensions":["c4g","c4d","c4f","c4p","c4u"]},"application/vnd.cluetrust.cartomobile-config":{"source":"iana","extensions":["c11amc"]},"application/vnd.cluetrust.cartomobile-config-pkg":{"source":"iana","extensions":["c11amz"]},"application/vnd.coffeescript":{"source":"iana"},"application/vnd.collabio.xodocuments.document":{"source":"iana"},"application/vnd.collabio.xodocuments.document-template":{"source":"iana"},"application/vnd.collabio.xodocuments.presentation":{"source":"iana"},"application/vnd.collabio.xodocuments.presentation-template":{"source":"iana"},"application/vnd.collabio.xodocuments.spreadsheet":{"source":"iana"},"application/vnd.collabio.xodocuments.spreadsheet-template":{"source":"iana"},"application/vnd.collection+json":{"source":"iana","compressible":true},"application/vnd.collection.doc+json":{"source":"iana","compressible":true},"application/vnd.collection.next+json":{"source":"iana","compressible":true},"application/vnd.comicbook+zip":{"source":"iana","compressible":false},"application/vnd.comicbook-rar":{"source":"iana"},"application/vnd.commerce-battelle":{"source":"iana"},"application/vnd.commonspace":{"source":"iana","extensions":["csp"]},"application/vnd.contact.cmsg":{"source":"iana","extensions":["cdbcmsg"]},"application/vnd.coreos.ignition+json":{"source":"iana","compressible":true},"application/vnd.cosmocaller":{"source":"iana","extensions":["cmc"]},"application/vnd.crick.clicker":{"source":"iana","extensions":["clkx"]},"application/vnd.crick.clicker.keyboard":{"source":"iana","extensions":["clkk"]},"application/vnd.crick.clicker.palette":{"source":"iana","extensions":["clkp"]},"application/vnd.crick.clicker.template":{"source":"iana","extensions":["clkt"]},"application/vnd.crick.clicker.wordbank":{"source":"iana","extensions":["clkw"]},"application/vnd.criticaltools.wbs+xml":{"source":"iana","compressible":true,"extensions":["wbs"]},"application/vnd.cryptii.pipe+json":{"source":"iana","compressible":true},"application/vnd.crypto-shade-file":{"source":"iana"},"application/vnd.cryptomator.encrypted":{"source":"iana"},"application/vnd.cryptomator.vault":{"source":"iana"},"application/vnd.ctc-posml":{"source":"iana","extensions":["pml"]},"application/vnd.ctct.ws+xml":{"source":"iana","compressible":true},"application/vnd.cups-pdf":{"source":"iana"},"application/vnd.cups-postscript":{"source":"iana"},"application/vnd.cups-ppd":{"source":"iana","extensions":["ppd"]},"application/vnd.cups-raster":{"source":"iana"},"application/vnd.cups-raw":{"source":"iana"},"application/vnd.curl":{"source":"iana"},"application/vnd.curl.car":{"source":"apache","extensions":["car"]},"application/vnd.curl.pcurl":{"source":"apache","extensions":["pcurl"]},"application/vnd.cyan.dean.root+xml":{"source":"iana","compressible":true},"application/vnd.cybank":{"source":"iana"},"application/vnd.cyclonedx+json":{"source":"iana","compressible":true},"application/vnd.cyclonedx+xml":{"source":"iana","compressible":true},"application/vnd.d2l.coursepackage1p0+zip":{"source":"iana","compressible":false},"application/vnd.d3m-dataset":{"source":"iana"},"application/vnd.d3m-problem":{"source":"iana"},"application/vnd.dart":{"source":"iana","compressible":true,"extensions":["dart"]},"application/vnd.data-vision.rdz":{"source":"iana","extensions":["rdz"]},"application/vnd.datapackage+json":{"source":"iana","compressible":true},"application/vnd.dataresource+json":{"source":"iana","compressible":true},"application/vnd.dbf":{"source":"iana","extensions":["dbf"]},"application/vnd.debian.binary-package":{"source":"iana"},"application/vnd.dece.data":{"source":"iana","extensions":["uvf","uvvf","uvd","uvvd"]},"application/vnd.dece.ttml+xml":{"source":"iana","compressible":true,"extensions":["uvt","uvvt"]},"application/vnd.dece.unspecified":{"source":"iana","extensions":["uvx","uvvx"]},"application/vnd.dece.zip":{"source":"iana","extensions":["uvz","uvvz"]},"application/vnd.denovo.fcselayout-link":{"source":"iana","extensions":["fe_launch"]},"application/vnd.desmume.movie":{"source":"iana"},"application/vnd.dir-bi.plate-dl-nosuffix":{"source":"iana"},"application/vnd.dm.delegation+xml":{"source":"iana","compressible":true},"application/vnd.dna":{"source":"iana","extensions":["dna"]},"application/vnd.document+json":{"source":"iana","compressible":true},"application/vnd.dolby.mlp":{"source":"apache","extensions":["mlp"]},"application/vnd.dolby.mobile.1":{"source":"iana"},"application/vnd.dolby.mobile.2":{"source":"iana"},"application/vnd.doremir.scorecloud-binary-document":{"source":"iana"},"application/vnd.dpgraph":{"source":"iana","extensions":["dpg"]},"application/vnd.dreamfactory":{"source":"iana","extensions":["dfac"]},"application/vnd.drive+json":{"source":"iana","compressible":true},"application/vnd.ds-keypoint":{"source":"apache","extensions":["kpxx"]},"application/vnd.dtg.local":{"source":"iana"},"application/vnd.dtg.local.flash":{"source":"iana"},"application/vnd.dtg.local.html":{"source":"iana"},"application/vnd.dvb.ait":{"source":"iana","extensions":["ait"]},"application/vnd.dvb.dvbisl+xml":{"source":"iana","compressible":true},"application/vnd.dvb.dvbj":{"source":"iana"},"application/vnd.dvb.esgcontainer":{"source":"iana"},"application/vnd.dvb.ipdcdftnotifaccess":{"source":"iana"},"application/vnd.dvb.ipdcesgaccess":{"source":"iana"},"application/vnd.dvb.ipdcesgaccess2":{"source":"iana"},"application/vnd.dvb.ipdcesgpdd":{"source":"iana"},"application/vnd.dvb.ipdcroaming":{"source":"iana"},"application/vnd.dvb.iptv.alfec-base":{"source":"iana"},"application/vnd.dvb.iptv.alfec-enhancement":{"source":"iana"},"application/vnd.dvb.notif-aggregate-root+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-container+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-generic+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-ia-msglist+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-ia-registration-request+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-ia-registration-response+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-init+xml":{"source":"iana","compressible":true},"application/vnd.dvb.pfr":{"source":"iana"},"application/vnd.dvb.service":{"source":"iana","extensions":["svc"]},"application/vnd.dxr":{"source":"iana"},"application/vnd.dynageo":{"source":"iana","extensions":["geo"]},"application/vnd.dzr":{"source":"iana"},"application/vnd.easykaraoke.cdgdownload":{"source":"iana"},"application/vnd.ecdis-update":{"source":"iana"},"application/vnd.ecip.rlp":{"source":"iana"},"application/vnd.eclipse.ditto+json":{"source":"iana","compressible":true},"application/vnd.ecowin.chart":{"source":"iana","extensions":["mag"]},"application/vnd.ecowin.filerequest":{"source":"iana"},"application/vnd.ecowin.fileupdate":{"source":"iana"},"application/vnd.ecowin.series":{"source":"iana"},"application/vnd.ecowin.seriesrequest":{"source":"iana"},"application/vnd.ecowin.seriesupdate":{"source":"iana"},"application/vnd.efi.img":{"source":"iana"},"application/vnd.efi.iso":{"source":"iana"},"application/vnd.emclient.accessrequest+xml":{"source":"iana","compressible":true},"application/vnd.enliven":{"source":"iana","extensions":["nml"]},"application/vnd.enphase.envoy":{"source":"iana"},"application/vnd.eprints.data+xml":{"source":"iana","compressible":true},"application/vnd.epson.esf":{"source":"iana","extensions":["esf"]},"application/vnd.epson.msf":{"source":"iana","extensions":["msf"]},"application/vnd.epson.quickanime":{"source":"iana","extensions":["qam"]},"application/vnd.epson.salt":{"source":"iana","extensions":["slt"]},"application/vnd.epson.ssf":{"source":"iana","extensions":["ssf"]},"application/vnd.ericsson.quickcall":{"source":"iana"},"application/vnd.espass-espass+zip":{"source":"iana","compressible":false},"application/vnd.eszigno3+xml":{"source":"iana","compressible":true,"extensions":["es3","et3"]},"application/vnd.etsi.aoc+xml":{"source":"iana","compressible":true},"application/vnd.etsi.asic-e+zip":{"source":"iana","compressible":false},"application/vnd.etsi.asic-s+zip":{"source":"iana","compressible":false},"application/vnd.etsi.cug+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvcommand+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvdiscovery+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvprofile+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvsad-bc+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvsad-cod+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvsad-npvr+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvservice+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvsync+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvueprofile+xml":{"source":"iana","compressible":true},"application/vnd.etsi.mcid+xml":{"source":"iana","compressible":true},"application/vnd.etsi.mheg5":{"source":"iana"},"application/vnd.etsi.overload-control-policy-dataset+xml":{"source":"iana","compressible":true},"application/vnd.etsi.pstn+xml":{"source":"iana","compressible":true},"application/vnd.etsi.sci+xml":{"source":"iana","compressible":true},"application/vnd.etsi.simservs+xml":{"source":"iana","compressible":true},"application/vnd.etsi.timestamp-token":{"source":"iana"},"application/vnd.etsi.tsl+xml":{"source":"iana","compressible":true},"application/vnd.etsi.tsl.der":{"source":"iana"},"application/vnd.eu.kasparian.car+json":{"source":"iana","compressible":true},"application/vnd.eudora.data":{"source":"iana"},"application/vnd.evolv.ecig.profile":{"source":"iana"},"application/vnd.evolv.ecig.settings":{"source":"iana"},"application/vnd.evolv.ecig.theme":{"source":"iana"},"application/vnd.exstream-empower+zip":{"source":"iana","compressible":false},"application/vnd.exstream-package":{"source":"iana"},"application/vnd.ezpix-album":{"source":"iana","extensions":["ez2"]},"application/vnd.ezpix-package":{"source":"iana","extensions":["ez3"]},"application/vnd.f-secure.mobile":{"source":"iana"},"application/vnd.familysearch.gedcom+zip":{"source":"iana","compressible":false},"application/vnd.fastcopy-disk-image":{"source":"iana"},"application/vnd.fdf":{"source":"iana","extensions":["fdf"]},"application/vnd.fdsn.mseed":{"source":"iana","extensions":["mseed"]},"application/vnd.fdsn.seed":{"source":"iana","extensions":["seed","dataless"]},"application/vnd.ffsns":{"source":"iana"},"application/vnd.ficlab.flb+zip":{"source":"iana","compressible":false},"application/vnd.filmit.zfc":{"source":"iana"},"application/vnd.fints":{"source":"iana"},"application/vnd.firemonkeys.cloudcell":{"source":"iana"},"application/vnd.flographit":{"source":"iana","extensions":["gph"]},"application/vnd.fluxtime.clip":{"source":"iana","extensions":["ftc"]},"application/vnd.font-fontforge-sfd":{"source":"iana"},"application/vnd.framemaker":{"source":"iana","extensions":["fm","frame","maker","book"]},"application/vnd.frogans.fnc":{"source":"iana","extensions":["fnc"]},"application/vnd.frogans.ltf":{"source":"iana","extensions":["ltf"]},"application/vnd.fsc.weblaunch":{"source":"iana","extensions":["fsc"]},"application/vnd.fujifilm.fb.docuworks":{"source":"iana"},"application/vnd.fujifilm.fb.docuworks.binder":{"source":"iana"},"application/vnd.fujifilm.fb.docuworks.container":{"source":"iana"},"application/vnd.fujifilm.fb.jfi+xml":{"source":"iana","compressible":true},"application/vnd.fujitsu.oasys":{"source":"iana","extensions":["oas"]},"application/vnd.fujitsu.oasys2":{"source":"iana","extensions":["oa2"]},"application/vnd.fujitsu.oasys3":{"source":"iana","extensions":["oa3"]},"application/vnd.fujitsu.oasysgp":{"source":"iana","extensions":["fg5"]},"application/vnd.fujitsu.oasysprs":{"source":"iana","extensions":["bh2"]},"application/vnd.fujixerox.art-ex":{"source":"iana"},"application/vnd.fujixerox.art4":{"source":"iana"},"application/vnd.fujixerox.ddd":{"source":"iana","extensions":["ddd"]},"application/vnd.fujixerox.docuworks":{"source":"iana","extensions":["xdw"]},"application/vnd.fujixerox.docuworks.binder":{"source":"iana","extensions":["xbd"]},"application/vnd.fujixerox.docuworks.container":{"source":"iana"},"application/vnd.fujixerox.hbpl":{"source":"iana"},"application/vnd.fut-misnet":{"source":"iana"},"application/vnd.futoin+cbor":{"source":"iana"},"application/vnd.futoin+json":{"source":"iana","compressible":true},"application/vnd.fuzzysheet":{"source":"iana","extensions":["fzs"]},"application/vnd.genomatix.tuxedo":{"source":"iana","extensions":["txd"]},"application/vnd.gentics.grd+json":{"source":"iana","compressible":true},"application/vnd.geo+json":{"source":"iana","compressible":true},"application/vnd.geocube+xml":{"source":"iana","compressible":true},"application/vnd.geogebra.file":{"source":"iana","extensions":["ggb"]},"application/vnd.geogebra.slides":{"source":"iana"},"application/vnd.geogebra.tool":{"source":"iana","extensions":["ggt"]},"application/vnd.geometry-explorer":{"source":"iana","extensions":["gex","gre"]},"application/vnd.geonext":{"source":"iana","extensions":["gxt"]},"application/vnd.geoplan":{"source":"iana","extensions":["g2w"]},"application/vnd.geospace":{"source":"iana","extensions":["g3w"]},"application/vnd.gerber":{"source":"iana"},"application/vnd.globalplatform.card-content-mgt":{"source":"iana"},"application/vnd.globalplatform.card-content-mgt-response":{"source":"iana"},"application/vnd.gmx":{"source":"iana","extensions":["gmx"]},"application/vnd.google-apps.document":{"compressible":false,"extensions":["gdoc"]},"application/vnd.google-apps.presentation":{"compressible":false,"extensions":["gslides"]},"application/vnd.google-apps.spreadsheet":{"compressible":false,"extensions":["gsheet"]},"application/vnd.google-earth.kml+xml":{"source":"iana","compressible":true,"extensions":["kml"]},"application/vnd.google-earth.kmz":{"source":"iana","compressible":false,"extensions":["kmz"]},"application/vnd.gov.sk.e-form+xml":{"source":"iana","compressible":true},"application/vnd.gov.sk.e-form+zip":{"source":"iana","compressible":false},"application/vnd.gov.sk.xmldatacontainer+xml":{"source":"iana","compressible":true},"application/vnd.grafeq":{"source":"iana","extensions":["gqf","gqs"]},"application/vnd.gridmp":{"source":"iana"},"application/vnd.groove-account":{"source":"iana","extensions":["gac"]},"application/vnd.groove-help":{"source":"iana","extensions":["ghf"]},"application/vnd.groove-identity-message":{"source":"iana","extensions":["gim"]},"application/vnd.groove-injector":{"source":"iana","extensions":["grv"]},"application/vnd.groove-tool-message":{"source":"iana","extensions":["gtm"]},"application/vnd.groove-tool-template":{"source":"iana","extensions":["tpl"]},"application/vnd.groove-vcard":{"source":"iana","extensions":["vcg"]},"application/vnd.hal+json":{"source":"iana","compressible":true},"application/vnd.hal+xml":{"source":"iana","compressible":true,"extensions":["hal"]},"application/vnd.handheld-entertainment+xml":{"source":"iana","compressible":true,"extensions":["zmm"]},"application/vnd.hbci":{"source":"iana","extensions":["hbci"]},"application/vnd.hc+json":{"source":"iana","compressible":true},"application/vnd.hcl-bireports":{"source":"iana"},"application/vnd.hdt":{"source":"iana"},"application/vnd.heroku+json":{"source":"iana","compressible":true},"application/vnd.hhe.lesson-player":{"source":"iana","extensions":["les"]},"application/vnd.hl7cda+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.hl7v2+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.hp-hpgl":{"source":"iana","extensions":["hpgl"]},"application/vnd.hp-hpid":{"source":"iana","extensions":["hpid"]},"application/vnd.hp-hps":{"source":"iana","extensions":["hps"]},"application/vnd.hp-jlyt":{"source":"iana","extensions":["jlt"]},"application/vnd.hp-pcl":{"source":"iana","extensions":["pcl"]},"application/vnd.hp-pclxl":{"source":"iana","extensions":["pclxl"]},"application/vnd.httphone":{"source":"iana"},"application/vnd.hydrostatix.sof-data":{"source":"iana","extensions":["sfd-hdstx"]},"application/vnd.hyper+json":{"source":"iana","compressible":true},"application/vnd.hyper-item+json":{"source":"iana","compressible":true},"application/vnd.hyperdrive+json":{"source":"iana","compressible":true},"application/vnd.hzn-3d-crossword":{"source":"iana"},"application/vnd.ibm.afplinedata":{"source":"iana"},"application/vnd.ibm.electronic-media":{"source":"iana"},"application/vnd.ibm.minipay":{"source":"iana","extensions":["mpy"]},"application/vnd.ibm.modcap":{"source":"iana","extensions":["afp","listafp","list3820"]},"application/vnd.ibm.rights-management":{"source":"iana","extensions":["irm"]},"application/vnd.ibm.secure-container":{"source":"iana","extensions":["sc"]},"application/vnd.iccprofile":{"source":"iana","extensions":["icc","icm"]},"application/vnd.ieee.1905":{"source":"iana"},"application/vnd.igloader":{"source":"iana","extensions":["igl"]},"application/vnd.imagemeter.folder+zip":{"source":"iana","compressible":false},"application/vnd.imagemeter.image+zip":{"source":"iana","compressible":false},"application/vnd.immervision-ivp":{"source":"iana","extensions":["ivp"]},"application/vnd.immervision-ivu":{"source":"iana","extensions":["ivu"]},"application/vnd.ims.imsccv1p1":{"source":"iana"},"application/vnd.ims.imsccv1p2":{"source":"iana"},"application/vnd.ims.imsccv1p3":{"source":"iana"},"application/vnd.ims.lis.v2.result+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolconsumerprofile+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolproxy+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolproxy.id+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolsettings+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolsettings.simple+json":{"source":"iana","compressible":true},"application/vnd.informedcontrol.rms+xml":{"source":"iana","compressible":true},"application/vnd.informix-visionary":{"source":"iana"},"application/vnd.infotech.project":{"source":"iana"},"application/vnd.infotech.project+xml":{"source":"iana","compressible":true},"application/vnd.innopath.wamp.notification":{"source":"iana"},"application/vnd.insors.igm":{"source":"iana","extensions":["igm"]},"application/vnd.intercon.formnet":{"source":"iana","extensions":["xpw","xpx"]},"application/vnd.intergeo":{"source":"iana","extensions":["i2g"]},"application/vnd.intertrust.digibox":{"source":"iana"},"application/vnd.intertrust.nncp":{"source":"iana"},"application/vnd.intu.qbo":{"source":"iana","extensions":["qbo"]},"application/vnd.intu.qfx":{"source":"iana","extensions":["qfx"]},"application/vnd.iptc.g2.catalogitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.conceptitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.knowledgeitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.newsitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.newsmessage+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.packageitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.planningitem+xml":{"source":"iana","compressible":true},"application/vnd.ipunplugged.rcprofile":{"source":"iana","extensions":["rcprofile"]},"application/vnd.irepository.package+xml":{"source":"iana","compressible":true,"extensions":["irp"]},"application/vnd.is-xpr":{"source":"iana","extensions":["xpr"]},"application/vnd.isac.fcs":{"source":"iana","extensions":["fcs"]},"application/vnd.iso11783-10+zip":{"source":"iana","compressible":false},"application/vnd.jam":{"source":"iana","extensions":["jam"]},"application/vnd.japannet-directory-service":{"source":"iana"},"application/vnd.japannet-jpnstore-wakeup":{"source":"iana"},"application/vnd.japannet-payment-wakeup":{"source":"iana"},"application/vnd.japannet-registration":{"source":"iana"},"application/vnd.japannet-registration-wakeup":{"source":"iana"},"application/vnd.japannet-setstore-wakeup":{"source":"iana"},"application/vnd.japannet-verification":{"source":"iana"},"application/vnd.japannet-verification-wakeup":{"source":"iana"},"application/vnd.jcp.javame.midlet-rms":{"source":"iana","extensions":["rms"]},"application/vnd.jisp":{"source":"iana","extensions":["jisp"]},"application/vnd.joost.joda-archive":{"source":"iana","extensions":["joda"]},"application/vnd.jsk.isdn-ngn":{"source":"iana"},"application/vnd.kahootz":{"source":"iana","extensions":["ktz","ktr"]},"application/vnd.kde.karbon":{"source":"iana","extensions":["karbon"]},"application/vnd.kde.kchart":{"source":"iana","extensions":["chrt"]},"application/vnd.kde.kformula":{"source":"iana","extensions":["kfo"]},"application/vnd.kde.kivio":{"source":"iana","extensions":["flw"]},"application/vnd.kde.kontour":{"source":"iana","extensions":["kon"]},"application/vnd.kde.kpresenter":{"source":"iana","extensions":["kpr","kpt"]},"application/vnd.kde.kspread":{"source":"iana","extensions":["ksp"]},"application/vnd.kde.kword":{"source":"iana","extensions":["kwd","kwt"]},"application/vnd.kenameaapp":{"source":"iana","extensions":["htke"]},"application/vnd.kidspiration":{"source":"iana","extensions":["kia"]},"application/vnd.kinar":{"source":"iana","extensions":["kne","knp"]},"application/vnd.koan":{"source":"iana","extensions":["skp","skd","skt","skm"]},"application/vnd.kodak-descriptor":{"source":"iana","extensions":["sse"]},"application/vnd.las":{"source":"iana"},"application/vnd.las.las+json":{"source":"iana","compressible":true},"application/vnd.las.las+xml":{"source":"iana","compressible":true,"extensions":["lasxml"]},"application/vnd.laszip":{"source":"iana"},"application/vnd.leap+json":{"source":"iana","compressible":true},"application/vnd.liberty-request+xml":{"source":"iana","compressible":true},"application/vnd.llamagraphics.life-balance.desktop":{"source":"iana","extensions":["lbd"]},"application/vnd.llamagraphics.life-balance.exchange+xml":{"source":"iana","compressible":true,"extensions":["lbe"]},"application/vnd.logipipe.circuit+zip":{"source":"iana","compressible":false},"application/vnd.loom":{"source":"iana"},"application/vnd.lotus-1-2-3":{"source":"iana","extensions":["123"]},"application/vnd.lotus-approach":{"source":"iana","extensions":["apr"]},"application/vnd.lotus-freelance":{"source":"iana","extensions":["pre"]},"application/vnd.lotus-notes":{"source":"iana","extensions":["nsf"]},"application/vnd.lotus-organizer":{"source":"iana","extensions":["org"]},"application/vnd.lotus-screencam":{"source":"iana","extensions":["scm"]},"application/vnd.lotus-wordpro":{"source":"iana","extensions":["lwp"]},"application/vnd.macports.portpkg":{"source":"iana","extensions":["portpkg"]},"application/vnd.mapbox-vector-tile":{"source":"iana","extensions":["mvt"]},"application/vnd.marlin.drm.actiontoken+xml":{"source":"iana","compressible":true},"application/vnd.marlin.drm.conftoken+xml":{"source":"iana","compressible":true},"application/vnd.marlin.drm.license+xml":{"source":"iana","compressible":true},"application/vnd.marlin.drm.mdcf":{"source":"iana"},"application/vnd.mason+json":{"source":"iana","compressible":true},"application/vnd.maxar.archive.3tz+zip":{"source":"iana","compressible":false},"application/vnd.maxmind.maxmind-db":{"source":"iana"},"application/vnd.mcd":{"source":"iana","extensions":["mcd"]},"application/vnd.medcalcdata":{"source":"iana","extensions":["mc1"]},"application/vnd.mediastation.cdkey":{"source":"iana","extensions":["cdkey"]},"application/vnd.meridian-slingshot":{"source":"iana"},"application/vnd.mfer":{"source":"iana","extensions":["mwf"]},"application/vnd.mfmp":{"source":"iana","extensions":["mfm"]},"application/vnd.micro+json":{"source":"iana","compressible":true},"application/vnd.micrografx.flo":{"source":"iana","extensions":["flo"]},"application/vnd.micrografx.igx":{"source":"iana","extensions":["igx"]},"application/vnd.microsoft.portable-executable":{"source":"iana"},"application/vnd.microsoft.windows.thumbnail-cache":{"source":"iana"},"application/vnd.miele+json":{"source":"iana","compressible":true},"application/vnd.mif":{"source":"iana","extensions":["mif"]},"application/vnd.minisoft-hp3000-save":{"source":"iana"},"application/vnd.mitsubishi.misty-guard.trustweb":{"source":"iana"},"application/vnd.mobius.daf":{"source":"iana","extensions":["daf"]},"application/vnd.mobius.dis":{"source":"iana","extensions":["dis"]},"application/vnd.mobius.mbk":{"source":"iana","extensions":["mbk"]},"application/vnd.mobius.mqy":{"source":"iana","extensions":["mqy"]},"application/vnd.mobius.msl":{"source":"iana","extensions":["msl"]},"application/vnd.mobius.plc":{"source":"iana","extensions":["plc"]},"application/vnd.mobius.txf":{"source":"iana","extensions":["txf"]},"application/vnd.mophun.application":{"source":"iana","extensions":["mpn"]},"application/vnd.mophun.certificate":{"source":"iana","extensions":["mpc"]},"application/vnd.motorola.flexsuite":{"source":"iana"},"application/vnd.motorola.flexsuite.adsi":{"source":"iana"},"application/vnd.motorola.flexsuite.fis":{"source":"iana"},"application/vnd.motorola.flexsuite.gotap":{"source":"iana"},"application/vnd.motorola.flexsuite.kmr":{"source":"iana"},"application/vnd.motorola.flexsuite.ttc":{"source":"iana"},"application/vnd.motorola.flexsuite.wem":{"source":"iana"},"application/vnd.motorola.iprm":{"source":"iana"},"application/vnd.mozilla.xul+xml":{"source":"iana","compressible":true,"extensions":["xul"]},"application/vnd.ms-3mfdocument":{"source":"iana"},"application/vnd.ms-artgalry":{"source":"iana","extensions":["cil"]},"application/vnd.ms-asf":{"source":"iana"},"application/vnd.ms-cab-compressed":{"source":"iana","extensions":["cab"]},"application/vnd.ms-color.iccprofile":{"source":"apache"},"application/vnd.ms-excel":{"source":"iana","compressible":false,"extensions":["xls","xlm","xla","xlc","xlt","xlw"]},"application/vnd.ms-excel.addin.macroenabled.12":{"source":"iana","extensions":["xlam"]},"application/vnd.ms-excel.sheet.binary.macroenabled.12":{"source":"iana","extensions":["xlsb"]},"application/vnd.ms-excel.sheet.macroenabled.12":{"source":"iana","extensions":["xlsm"]},"application/vnd.ms-excel.template.macroenabled.12":{"source":"iana","extensions":["xltm"]},"application/vnd.ms-fontobject":{"source":"iana","compressible":true,"extensions":["eot"]},"application/vnd.ms-htmlhelp":{"source":"iana","extensions":["chm"]},"application/vnd.ms-ims":{"source":"iana","extensions":["ims"]},"application/vnd.ms-lrm":{"source":"iana","extensions":["lrm"]},"application/vnd.ms-office.activex+xml":{"source":"iana","compressible":true},"application/vnd.ms-officetheme":{"source":"iana","extensions":["thmx"]},"application/vnd.ms-opentype":{"source":"apache","compressible":true},"application/vnd.ms-outlook":{"compressible":false,"extensions":["msg"]},"application/vnd.ms-package.obfuscated-opentype":{"source":"apache"},"application/vnd.ms-pki.seccat":{"source":"apache","extensions":["cat"]},"application/vnd.ms-pki.stl":{"source":"apache","extensions":["stl"]},"application/vnd.ms-playready.initiator+xml":{"source":"iana","compressible":true},"application/vnd.ms-powerpoint":{"source":"iana","compressible":false,"extensions":["ppt","pps","pot"]},"application/vnd.ms-powerpoint.addin.macroenabled.12":{"source":"iana","extensions":["ppam"]},"application/vnd.ms-powerpoint.presentation.macroenabled.12":{"source":"iana","extensions":["pptm"]},"application/vnd.ms-powerpoint.slide.macroenabled.12":{"source":"iana","extensions":["sldm"]},"application/vnd.ms-powerpoint.slideshow.macroenabled.12":{"source":"iana","extensions":["ppsm"]},"application/vnd.ms-powerpoint.template.macroenabled.12":{"source":"iana","extensions":["potm"]},"application/vnd.ms-printdevicecapabilities+xml":{"source":"iana","compressible":true},"application/vnd.ms-printing.printticket+xml":{"source":"apache","compressible":true},"application/vnd.ms-printschematicket+xml":{"source":"iana","compressible":true},"application/vnd.ms-project":{"source":"iana","extensions":["mpp","mpt"]},"application/vnd.ms-tnef":{"source":"iana"},"application/vnd.ms-windows.devicepairing":{"source":"iana"},"application/vnd.ms-windows.nwprinting.oob":{"source":"iana"},"application/vnd.ms-windows.printerpairing":{"source":"iana"},"application/vnd.ms-windows.wsd.oob":{"source":"iana"},"application/vnd.ms-wmdrm.lic-chlg-req":{"source":"iana"},"application/vnd.ms-wmdrm.lic-resp":{"source":"iana"},"application/vnd.ms-wmdrm.meter-chlg-req":{"source":"iana"},"application/vnd.ms-wmdrm.meter-resp":{"source":"iana"},"application/vnd.ms-word.document.macroenabled.12":{"source":"iana","extensions":["docm"]},"application/vnd.ms-word.template.macroenabled.12":{"source":"iana","extensions":["dotm"]},"application/vnd.ms-works":{"source":"iana","extensions":["wps","wks","wcm","wdb"]},"application/vnd.ms-wpl":{"source":"iana","extensions":["wpl"]},"application/vnd.ms-xpsdocument":{"source":"iana","compressible":false,"extensions":["xps"]},"application/vnd.msa-disk-image":{"source":"iana"},"application/vnd.mseq":{"source":"iana","extensions":["mseq"]},"application/vnd.msign":{"source":"iana"},"application/vnd.multiad.creator":{"source":"iana"},"application/vnd.multiad.creator.cif":{"source":"iana"},"application/vnd.music-niff":{"source":"iana"},"application/vnd.musician":{"source":"iana","extensions":["mus"]},"application/vnd.muvee.style":{"source":"iana","extensions":["msty"]},"application/vnd.mynfc":{"source":"iana","extensions":["taglet"]},"application/vnd.nacamar.ybrid+json":{"source":"iana","compressible":true},"application/vnd.ncd.control":{"source":"iana"},"application/vnd.ncd.reference":{"source":"iana"},"application/vnd.nearst.inv+json":{"source":"iana","compressible":true},"application/vnd.nebumind.line":{"source":"iana"},"application/vnd.nervana":{"source":"iana"},"application/vnd.netfpx":{"source":"iana"},"application/vnd.neurolanguage.nlu":{"source":"iana","extensions":["nlu"]},"application/vnd.nimn":{"source":"iana"},"application/vnd.nintendo.nitro.rom":{"source":"iana"},"application/vnd.nintendo.snes.rom":{"source":"iana"},"application/vnd.nitf":{"source":"iana","extensions":["ntf","nitf"]},"application/vnd.noblenet-directory":{"source":"iana","extensions":["nnd"]},"application/vnd.noblenet-sealer":{"source":"iana","extensions":["nns"]},"application/vnd.noblenet-web":{"source":"iana","extensions":["nnw"]},"application/vnd.nokia.catalogs":{"source":"iana"},"application/vnd.nokia.conml+wbxml":{"source":"iana"},"application/vnd.nokia.conml+xml":{"source":"iana","compressible":true},"application/vnd.nokia.iptv.config+xml":{"source":"iana","compressible":true},"application/vnd.nokia.isds-radio-presets":{"source":"iana"},"application/vnd.nokia.landmark+wbxml":{"source":"iana"},"application/vnd.nokia.landmark+xml":{"source":"iana","compressible":true},"application/vnd.nokia.landmarkcollection+xml":{"source":"iana","compressible":true},"application/vnd.nokia.n-gage.ac+xml":{"source":"iana","compressible":true,"extensions":["ac"]},"application/vnd.nokia.n-gage.data":{"source":"iana","extensions":["ngdat"]},"application/vnd.nokia.n-gage.symbian.install":{"source":"iana","extensions":["n-gage"]},"application/vnd.nokia.ncd":{"source":"iana"},"application/vnd.nokia.pcd+wbxml":{"source":"iana"},"application/vnd.nokia.pcd+xml":{"source":"iana","compressible":true},"application/vnd.nokia.radio-preset":{"source":"iana","extensions":["rpst"]},"application/vnd.nokia.radio-presets":{"source":"iana","extensions":["rpss"]},"application/vnd.novadigm.edm":{"source":"iana","extensions":["edm"]},"application/vnd.novadigm.edx":{"source":"iana","extensions":["edx"]},"application/vnd.novadigm.ext":{"source":"iana","extensions":["ext"]},"application/vnd.ntt-local.content-share":{"source":"iana"},"application/vnd.ntt-local.file-transfer":{"source":"iana"},"application/vnd.ntt-local.ogw_remote-access":{"source":"iana"},"application/vnd.ntt-local.sip-ta_remote":{"source":"iana"},"application/vnd.ntt-local.sip-ta_tcp_stream":{"source":"iana"},"application/vnd.oasis.opendocument.chart":{"source":"iana","extensions":["odc"]},"application/vnd.oasis.opendocument.chart-template":{"source":"iana","extensions":["otc"]},"application/vnd.oasis.opendocument.database":{"source":"iana","extensions":["odb"]},"application/vnd.oasis.opendocument.formula":{"source":"iana","extensions":["odf"]},"application/vnd.oasis.opendocument.formula-template":{"source":"iana","extensions":["odft"]},"application/vnd.oasis.opendocument.graphics":{"source":"iana","compressible":false,"extensions":["odg"]},"application/vnd.oasis.opendocument.graphics-template":{"source":"iana","extensions":["otg"]},"application/vnd.oasis.opendocument.image":{"source":"iana","extensions":["odi"]},"application/vnd.oasis.opendocument.image-template":{"source":"iana","extensions":["oti"]},"application/vnd.oasis.opendocument.presentation":{"source":"iana","compressible":false,"extensions":["odp"]},"application/vnd.oasis.opendocument.presentation-template":{"source":"iana","extensions":["otp"]},"application/vnd.oasis.opendocument.spreadsheet":{"source":"iana","compressible":false,"extensions":["ods"]},"application/vnd.oasis.opendocument.spreadsheet-template":{"source":"iana","extensions":["ots"]},"application/vnd.oasis.opendocument.text":{"source":"iana","compressible":false,"extensions":["odt"]},"application/vnd.oasis.opendocument.text-master":{"source":"iana","extensions":["odm"]},"application/vnd.oasis.opendocument.text-template":{"source":"iana","extensions":["ott"]},"application/vnd.oasis.opendocument.text-web":{"source":"iana","extensions":["oth"]},"application/vnd.obn":{"source":"iana"},"application/vnd.ocf+cbor":{"source":"iana"},"application/vnd.oci.image.manifest.v1+json":{"source":"iana","compressible":true},"application/vnd.oftn.l10n+json":{"source":"iana","compressible":true},"application/vnd.oipf.contentaccessdownload+xml":{"source":"iana","compressible":true},"application/vnd.oipf.contentaccessstreaming+xml":{"source":"iana","compressible":true},"application/vnd.oipf.cspg-hexbinary":{"source":"iana"},"application/vnd.oipf.dae.svg+xml":{"source":"iana","compressible":true},"application/vnd.oipf.dae.xhtml+xml":{"source":"iana","compressible":true},"application/vnd.oipf.mippvcontrolmessage+xml":{"source":"iana","compressible":true},"application/vnd.oipf.pae.gem":{"source":"iana"},"application/vnd.oipf.spdiscovery+xml":{"source":"iana","compressible":true},"application/vnd.oipf.spdlist+xml":{"source":"iana","compressible":true},"application/vnd.oipf.ueprofile+xml":{"source":"iana","compressible":true},"application/vnd.oipf.userprofile+xml":{"source":"iana","compressible":true},"application/vnd.olpc-sugar":{"source":"iana","extensions":["xo"]},"application/vnd.oma-scws-config":{"source":"iana"},"application/vnd.oma-scws-http-request":{"source":"iana"},"application/vnd.oma-scws-http-response":{"source":"iana"},"application/vnd.oma.bcast.associated-procedure-parameter+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.drm-trigger+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.imd+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.ltkm":{"source":"iana"},"application/vnd.oma.bcast.notification+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.provisioningtrigger":{"source":"iana"},"application/vnd.oma.bcast.sgboot":{"source":"iana"},"application/vnd.oma.bcast.sgdd+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.sgdu":{"source":"iana"},"application/vnd.oma.bcast.simple-symbol-container":{"source":"iana"},"application/vnd.oma.bcast.smartcard-trigger+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.sprov+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.stkm":{"source":"iana"},"application/vnd.oma.cab-address-book+xml":{"source":"iana","compressible":true},"application/vnd.oma.cab-feature-handler+xml":{"source":"iana","compressible":true},"application/vnd.oma.cab-pcc+xml":{"source":"iana","compressible":true},"application/vnd.oma.cab-subs-invite+xml":{"source":"iana","compressible":true},"application/vnd.oma.cab-user-prefs+xml":{"source":"iana","compressible":true},"application/vnd.oma.dcd":{"source":"iana"},"application/vnd.oma.dcdc":{"source":"iana"},"application/vnd.oma.dd2+xml":{"source":"iana","compressible":true,"extensions":["dd2"]},"application/vnd.oma.drm.risd+xml":{"source":"iana","compressible":true},"application/vnd.oma.group-usage-list+xml":{"source":"iana","compressible":true},"application/vnd.oma.lwm2m+cbor":{"source":"iana"},"application/vnd.oma.lwm2m+json":{"source":"iana","compressible":true},"application/vnd.oma.lwm2m+tlv":{"source":"iana"},"application/vnd.oma.pal+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.detailed-progress-report+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.final-report+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.groups+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.invocation-descriptor+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.optimized-progress-report+xml":{"source":"iana","compressible":true},"application/vnd.oma.push":{"source":"iana"},"application/vnd.oma.scidm.messages+xml":{"source":"iana","compressible":true},"application/vnd.oma.xcap-directory+xml":{"source":"iana","compressible":true},"application/vnd.omads-email+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.omads-file+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.omads-folder+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.omaloc-supl-init":{"source":"iana"},"application/vnd.onepager":{"source":"iana"},"application/vnd.onepagertamp":{"source":"iana"},"application/vnd.onepagertamx":{"source":"iana"},"application/vnd.onepagertat":{"source":"iana"},"application/vnd.onepagertatp":{"source":"iana"},"application/vnd.onepagertatx":{"source":"iana"},"application/vnd.openblox.game+xml":{"source":"iana","compressible":true,"extensions":["obgx"]},"application/vnd.openblox.game-binary":{"source":"iana"},"application/vnd.openeye.oeb":{"source":"iana"},"application/vnd.openofficeorg.extension":{"source":"apache","extensions":["oxt"]},"application/vnd.openstreetmap.data+xml":{"source":"iana","compressible":true,"extensions":["osm"]},"application/vnd.opentimestamps.ots":{"source":"iana"},"application/vnd.openxmlformats-officedocument.custom-properties+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.customxmlproperties+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawing+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.chart+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.extended-properties+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.comments+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.presentation":{"source":"iana","compressible":false,"extensions":["pptx"]},"application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.presprops+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slide":{"source":"iana","extensions":["sldx"]},"application/vnd.openxmlformats-officedocument.presentationml.slide+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slideshow":{"source":"iana","extensions":["ppsx"]},"application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.tags+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.template":{"source":"iana","extensions":["potx"]},"application/vnd.openxmlformats-officedocument.presentationml.template.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":{"source":"iana","compressible":false,"extensions":["xlsx"]},"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.template":{"source":"iana","extensions":["xltx"]},"application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.theme+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.themeoverride+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.vmldrawing":{"source":"iana"},"application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.document":{"source":"iana","compressible":false,"extensions":["docx"]},"application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.template":{"source":"iana","extensions":["dotx"]},"application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-package.core-properties+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-package.relationships+xml":{"source":"iana","compressible":true},"application/vnd.oracle.resource+json":{"source":"iana","compressible":true},"application/vnd.orange.indata":{"source":"iana"},"application/vnd.osa.netdeploy":{"source":"iana"},"application/vnd.osgeo.mapguide.package":{"source":"iana","extensions":["mgp"]},"application/vnd.osgi.bundle":{"source":"iana"},"application/vnd.osgi.dp":{"source":"iana","extensions":["dp"]},"application/vnd.osgi.subsystem":{"source":"iana","extensions":["esa"]},"application/vnd.otps.ct-kip+xml":{"source":"iana","compressible":true},"application/vnd.oxli.countgraph":{"source":"iana"},"application/vnd.pagerduty+json":{"source":"iana","compressible":true},"application/vnd.palm":{"source":"iana","extensions":["pdb","pqa","oprc"]},"application/vnd.panoply":{"source":"iana"},"application/vnd.paos.xml":{"source":"iana"},"application/vnd.patentdive":{"source":"iana"},"application/vnd.patientecommsdoc":{"source":"iana"},"application/vnd.pawaafile":{"source":"iana","extensions":["paw"]},"application/vnd.pcos":{"source":"iana"},"application/vnd.pg.format":{"source":"iana","extensions":["str"]},"application/vnd.pg.osasli":{"source":"iana","extensions":["ei6"]},"application/vnd.piaccess.application-licence":{"source":"iana"},"application/vnd.picsel":{"source":"iana","extensions":["efif"]},"application/vnd.pmi.widget":{"source":"iana","extensions":["wg"]},"application/vnd.poc.group-advertisement+xml":{"source":"iana","compressible":true},"application/vnd.pocketlearn":{"source":"iana","extensions":["plf"]},"application/vnd.powerbuilder6":{"source":"iana","extensions":["pbd"]},"application/vnd.powerbuilder6-s":{"source":"iana"},"application/vnd.powerbuilder7":{"source":"iana"},"application/vnd.powerbuilder7-s":{"source":"iana"},"application/vnd.powerbuilder75":{"source":"iana"},"application/vnd.powerbuilder75-s":{"source":"iana"},"application/vnd.preminet":{"source":"iana"},"application/vnd.previewsystems.box":{"source":"iana","extensions":["box"]},"application/vnd.proteus.magazine":{"source":"iana","extensions":["mgz"]},"application/vnd.psfs":{"source":"iana"},"application/vnd.publishare-delta-tree":{"source":"iana","extensions":["qps"]},"application/vnd.pvi.ptid1":{"source":"iana","extensions":["ptid"]},"application/vnd.pwg-multiplexed":{"source":"iana"},"application/vnd.pwg-xhtml-print+xml":{"source":"iana","compressible":true},"application/vnd.qualcomm.brew-app-res":{"source":"iana"},"application/vnd.quarantainenet":{"source":"iana"},"application/vnd.quark.quarkxpress":{"source":"iana","extensions":["qxd","qxt","qwd","qwt","qxl","qxb"]},"application/vnd.quobject-quoxdocument":{"source":"iana"},"application/vnd.radisys.moml+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit-conf+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit-conn+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit-dialog+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit-stream+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-conf+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-base+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-fax-detect+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-fax-sendrecv+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-group+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-speech+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-transform+xml":{"source":"iana","compressible":true},"application/vnd.rainstor.data":{"source":"iana"},"application/vnd.rapid":{"source":"iana"},"application/vnd.rar":{"source":"iana","extensions":["rar"]},"application/vnd.realvnc.bed":{"source":"iana","extensions":["bed"]},"application/vnd.recordare.musicxml":{"source":"iana","extensions":["mxl"]},"application/vnd.recordare.musicxml+xml":{"source":"iana","compressible":true,"extensions":["musicxml"]},"application/vnd.renlearn.rlprint":{"source":"iana"},"application/vnd.resilient.logic":{"source":"iana"},"application/vnd.restful+json":{"source":"iana","compressible":true},"application/vnd.rig.cryptonote":{"source":"iana","extensions":["cryptonote"]},"application/vnd.rim.cod":{"source":"apache","extensions":["cod"]},"application/vnd.rn-realmedia":{"source":"apache","extensions":["rm"]},"application/vnd.rn-realmedia-vbr":{"source":"apache","extensions":["rmvb"]},"application/vnd.route66.link66+xml":{"source":"iana","compressible":true,"extensions":["link66"]},"application/vnd.rs-274x":{"source":"iana"},"application/vnd.ruckus.download":{"source":"iana"},"application/vnd.s3sms":{"source":"iana"},"application/vnd.sailingtracker.track":{"source":"iana","extensions":["st"]},"application/vnd.sar":{"source":"iana"},"application/vnd.sbm.cid":{"source":"iana"},"application/vnd.sbm.mid2":{"source":"iana"},"application/vnd.scribus":{"source":"iana"},"application/vnd.sealed.3df":{"source":"iana"},"application/vnd.sealed.csf":{"source":"iana"},"application/vnd.sealed.doc":{"source":"iana"},"application/vnd.sealed.eml":{"source":"iana"},"application/vnd.sealed.mht":{"source":"iana"},"application/vnd.sealed.net":{"source":"iana"},"application/vnd.sealed.ppt":{"source":"iana"},"application/vnd.sealed.tiff":{"source":"iana"},"application/vnd.sealed.xls":{"source":"iana"},"application/vnd.sealedmedia.softseal.html":{"source":"iana"},"application/vnd.sealedmedia.softseal.pdf":{"source":"iana"},"application/vnd.seemail":{"source":"iana","extensions":["see"]},"application/vnd.seis+json":{"source":"iana","compressible":true},"application/vnd.sema":{"source":"iana","extensions":["sema"]},"application/vnd.semd":{"source":"iana","extensions":["semd"]},"application/vnd.semf":{"source":"iana","extensions":["semf"]},"application/vnd.shade-save-file":{"source":"iana"},"application/vnd.shana.informed.formdata":{"source":"iana","extensions":["ifm"]},"application/vnd.shana.informed.formtemplate":{"source":"iana","extensions":["itp"]},"application/vnd.shana.informed.interchange":{"source":"iana","extensions":["iif"]},"application/vnd.shana.informed.package":{"source":"iana","extensions":["ipk"]},"application/vnd.shootproof+json":{"source":"iana","compressible":true},"application/vnd.shopkick+json":{"source":"iana","compressible":true},"application/vnd.shp":{"source":"iana"},"application/vnd.shx":{"source":"iana"},"application/vnd.sigrok.session":{"source":"iana"},"application/vnd.simtech-mindmapper":{"source":"iana","extensions":["twd","twds"]},"application/vnd.siren+json":{"source":"iana","compressible":true},"application/vnd.smaf":{"source":"iana","extensions":["mmf"]},"application/vnd.smart.notebook":{"source":"iana"},"application/vnd.smart.teacher":{"source":"iana","extensions":["teacher"]},"application/vnd.snesdev-page-table":{"source":"iana"},"application/vnd.software602.filler.form+xml":{"source":"iana","compressible":true,"extensions":["fo"]},"application/vnd.software602.filler.form-xml-zip":{"source":"iana"},"application/vnd.solent.sdkm+xml":{"source":"iana","compressible":true,"extensions":["sdkm","sdkd"]},"application/vnd.spotfire.dxp":{"source":"iana","extensions":["dxp"]},"application/vnd.spotfire.sfs":{"source":"iana","extensions":["sfs"]},"application/vnd.sqlite3":{"source":"iana"},"application/vnd.sss-cod":{"source":"iana"},"application/vnd.sss-dtf":{"source":"iana"},"application/vnd.sss-ntf":{"source":"iana"},"application/vnd.stardivision.calc":{"source":"apache","extensions":["sdc"]},"application/vnd.stardivision.draw":{"source":"apache","extensions":["sda"]},"application/vnd.stardivision.impress":{"source":"apache","extensions":["sdd"]},"application/vnd.stardivision.math":{"source":"apache","extensions":["smf"]},"application/vnd.stardivision.writer":{"source":"apache","extensions":["sdw","vor"]},"application/vnd.stardivision.writer-global":{"source":"apache","extensions":["sgl"]},"application/vnd.stepmania.package":{"source":"iana","extensions":["smzip"]},"application/vnd.stepmania.stepchart":{"source":"iana","extensions":["sm"]},"application/vnd.street-stream":{"source":"iana"},"application/vnd.sun.wadl+xml":{"source":"iana","compressible":true,"extensions":["wadl"]},"application/vnd.sun.xml.calc":{"source":"apache","extensions":["sxc"]},"application/vnd.sun.xml.calc.template":{"source":"apache","extensions":["stc"]},"application/vnd.sun.xml.draw":{"source":"apache","extensions":["sxd"]},"application/vnd.sun.xml.draw.template":{"source":"apache","extensions":["std"]},"application/vnd.sun.xml.impress":{"source":"apache","extensions":["sxi"]},"application/vnd.sun.xml.impress.template":{"source":"apache","extensions":["sti"]},"application/vnd.sun.xml.math":{"source":"apache","extensions":["sxm"]},"application/vnd.sun.xml.writer":{"source":"apache","extensions":["sxw"]},"application/vnd.sun.xml.writer.global":{"source":"apache","extensions":["sxg"]},"application/vnd.sun.xml.writer.template":{"source":"apache","extensions":["stw"]},"application/vnd.sus-calendar":{"source":"iana","extensions":["sus","susp"]},"application/vnd.svd":{"source":"iana","extensions":["svd"]},"application/vnd.swiftview-ics":{"source":"iana"},"application/vnd.sycle+xml":{"source":"iana","compressible":true},"application/vnd.syft+json":{"source":"iana","compressible":true},"application/vnd.symbian.install":{"source":"apache","extensions":["sis","sisx"]},"application/vnd.syncml+xml":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["xsm"]},"application/vnd.syncml.dm+wbxml":{"source":"iana","charset":"UTF-8","extensions":["bdm"]},"application/vnd.syncml.dm+xml":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["xdm"]},"application/vnd.syncml.dm.notification":{"source":"iana"},"application/vnd.syncml.dmddf+wbxml":{"source":"iana"},"application/vnd.syncml.dmddf+xml":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["ddf"]},"application/vnd.syncml.dmtnds+wbxml":{"source":"iana"},"application/vnd.syncml.dmtnds+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.syncml.ds.notification":{"source":"iana"},"application/vnd.tableschema+json":{"source":"iana","compressible":true},"application/vnd.tao.intent-module-archive":{"source":"iana","extensions":["tao"]},"application/vnd.tcpdump.pcap":{"source":"iana","extensions":["pcap","cap","dmp"]},"application/vnd.think-cell.ppttc+json":{"source":"iana","compressible":true},"application/vnd.tmd.mediaflex.api+xml":{"source":"iana","compressible":true},"application/vnd.tml":{"source":"iana"},"application/vnd.tmobile-livetv":{"source":"iana","extensions":["tmo"]},"application/vnd.tri.onesource":{"source":"iana"},"application/vnd.trid.tpt":{"source":"iana","extensions":["tpt"]},"application/vnd.triscape.mxs":{"source":"iana","extensions":["mxs"]},"application/vnd.trueapp":{"source":"iana","extensions":["tra"]},"application/vnd.truedoc":{"source":"iana"},"application/vnd.ubisoft.webplayer":{"source":"iana"},"application/vnd.ufdl":{"source":"iana","extensions":["ufd","ufdl"]},"application/vnd.uiq.theme":{"source":"iana","extensions":["utz"]},"application/vnd.umajin":{"source":"iana","extensions":["umj"]},"application/vnd.unity":{"source":"iana","extensions":["unityweb"]},"application/vnd.uoml+xml":{"source":"iana","compressible":true,"extensions":["uoml"]},"application/vnd.uplanet.alert":{"source":"iana"},"application/vnd.uplanet.alert-wbxml":{"source":"iana"},"application/vnd.uplanet.bearer-choice":{"source":"iana"},"application/vnd.uplanet.bearer-choice-wbxml":{"source":"iana"},"application/vnd.uplanet.cacheop":{"source":"iana"},"application/vnd.uplanet.cacheop-wbxml":{"source":"iana"},"application/vnd.uplanet.channel":{"source":"iana"},"application/vnd.uplanet.channel-wbxml":{"source":"iana"},"application/vnd.uplanet.list":{"source":"iana"},"application/vnd.uplanet.list-wbxml":{"source":"iana"},"application/vnd.uplanet.listcmd":{"source":"iana"},"application/vnd.uplanet.listcmd-wbxml":{"source":"iana"},"application/vnd.uplanet.signal":{"source":"iana"},"application/vnd.uri-map":{"source":"iana"},"application/vnd.valve.source.material":{"source":"iana"},"application/vnd.vcx":{"source":"iana","extensions":["vcx"]},"application/vnd.vd-study":{"source":"iana"},"application/vnd.vectorworks":{"source":"iana"},"application/vnd.vel+json":{"source":"iana","compressible":true},"application/vnd.verimatrix.vcas":{"source":"iana"},"application/vnd.veritone.aion+json":{"source":"iana","compressible":true},"application/vnd.veryant.thin":{"source":"iana"},"application/vnd.ves.encrypted":{"source":"iana"},"application/vnd.vidsoft.vidconference":{"source":"iana"},"application/vnd.visio":{"source":"iana","extensions":["vsd","vst","vss","vsw"]},"application/vnd.visionary":{"source":"iana","extensions":["vis"]},"application/vnd.vividence.scriptfile":{"source":"iana"},"application/vnd.vsf":{"source":"iana","extensions":["vsf"]},"application/vnd.wap.sic":{"source":"iana"},"application/vnd.wap.slc":{"source":"iana"},"application/vnd.wap.wbxml":{"source":"iana","charset":"UTF-8","extensions":["wbxml"]},"application/vnd.wap.wmlc":{"source":"iana","extensions":["wmlc"]},"application/vnd.wap.wmlscriptc":{"source":"iana","extensions":["wmlsc"]},"application/vnd.webturbo":{"source":"iana","extensions":["wtb"]},"application/vnd.wfa.dpp":{"source":"iana"},"application/vnd.wfa.p2p":{"source":"iana"},"application/vnd.wfa.wsc":{"source":"iana"},"application/vnd.windows.devicepairing":{"source":"iana"},"application/vnd.wmc":{"source":"iana"},"application/vnd.wmf.bootstrap":{"source":"iana"},"application/vnd.wolfram.mathematica":{"source":"iana"},"application/vnd.wolfram.mathematica.package":{"source":"iana"},"application/vnd.wolfram.player":{"source":"iana","extensions":["nbp"]},"application/vnd.wordperfect":{"source":"iana","extensions":["wpd"]},"application/vnd.wqd":{"source":"iana","extensions":["wqd"]},"application/vnd.wrq-hp3000-labelled":{"source":"iana"},"application/vnd.wt.stf":{"source":"iana","extensions":["stf"]},"application/vnd.wv.csp+wbxml":{"source":"iana"},"application/vnd.wv.csp+xml":{"source":"iana","compressible":true},"application/vnd.wv.ssp+xml":{"source":"iana","compressible":true},"application/vnd.xacml+json":{"source":"iana","compressible":true},"application/vnd.xara":{"source":"iana","extensions":["xar"]},"application/vnd.xfdl":{"source":"iana","extensions":["xfdl"]},"application/vnd.xfdl.webform":{"source":"iana"},"application/vnd.xmi+xml":{"source":"iana","compressible":true},"application/vnd.xmpie.cpkg":{"source":"iana"},"application/vnd.xmpie.dpkg":{"source":"iana"},"application/vnd.xmpie.plan":{"source":"iana"},"application/vnd.xmpie.ppkg":{"source":"iana"},"application/vnd.xmpie.xlim":{"source":"iana"},"application/vnd.yamaha.hv-dic":{"source":"iana","extensions":["hvd"]},"application/vnd.yamaha.hv-script":{"source":"iana","extensions":["hvs"]},"application/vnd.yamaha.hv-voice":{"source":"iana","extensions":["hvp"]},"application/vnd.yamaha.openscoreformat":{"source":"iana","extensions":["osf"]},"application/vnd.yamaha.openscoreformat.osfpvg+xml":{"source":"iana","compressible":true,"extensions":["osfpvg"]},"application/vnd.yamaha.remote-setup":{"source":"iana"},"application/vnd.yamaha.smaf-audio":{"source":"iana","extensions":["saf"]},"application/vnd.yamaha.smaf-phrase":{"source":"iana","extensions":["spf"]},"application/vnd.yamaha.through-ngn":{"source":"iana"},"application/vnd.yamaha.tunnel-udpencap":{"source":"iana"},"application/vnd.yaoweme":{"source":"iana"},"application/vnd.yellowriver-custom-menu":{"source":"iana","extensions":["cmp"]},"application/vnd.youtube.yt":{"source":"iana"},"application/vnd.zul":{"source":"iana","extensions":["zir","zirz"]},"application/vnd.zzazz.deck+xml":{"source":"iana","compressible":true,"extensions":["zaz"]},"application/voicexml+xml":{"source":"iana","compressible":true,"extensions":["vxml"]},"application/voucher-cms+json":{"source":"iana","compressible":true},"application/vq-rtcpxr":{"source":"iana"},"application/wasm":{"source":"iana","compressible":true,"extensions":["wasm"]},"application/watcherinfo+xml":{"source":"iana","compressible":true,"extensions":["wif"]},"application/webpush-options+json":{"source":"iana","compressible":true},"application/whoispp-query":{"source":"iana"},"application/whoispp-response":{"source":"iana"},"application/widget":{"source":"iana","extensions":["wgt"]},"application/winhlp":{"source":"apache","extensions":["hlp"]},"application/wita":{"source":"iana"},"application/wordperfect5.1":{"source":"iana"},"application/wsdl+xml":{"source":"iana","compressible":true,"extensions":["wsdl"]},"application/wspolicy+xml":{"source":"iana","compressible":true,"extensions":["wspolicy"]},"application/x-7z-compressed":{"source":"apache","compressible":false,"extensions":["7z"]},"application/x-abiword":{"source":"apache","extensions":["abw"]},"application/x-ace-compressed":{"source":"apache","extensions":["ace"]},"application/x-amf":{"source":"apache"},"application/x-apple-diskimage":{"source":"apache","extensions":["dmg"]},"application/x-arj":{"compressible":false,"extensions":["arj"]},"application/x-authorware-bin":{"source":"apache","extensions":["aab","x32","u32","vox"]},"application/x-authorware-map":{"source":"apache","extensions":["aam"]},"application/x-authorware-seg":{"source":"apache","extensions":["aas"]},"application/x-bcpio":{"source":"apache","extensions":["bcpio"]},"application/x-bdoc":{"compressible":false,"extensions":["bdoc"]},"application/x-bittorrent":{"source":"apache","extensions":["torrent"]},"application/x-blorb":{"source":"apache","extensions":["blb","blorb"]},"application/x-bzip":{"source":"apache","compressible":false,"extensions":["bz"]},"application/x-bzip2":{"source":"apache","compressible":false,"extensions":["bz2","boz"]},"application/x-cbr":{"source":"apache","extensions":["cbr","cba","cbt","cbz","cb7"]},"application/x-cdlink":{"source":"apache","extensions":["vcd"]},"application/x-cfs-compressed":{"source":"apache","extensions":["cfs"]},"application/x-chat":{"source":"apache","extensions":["chat"]},"application/x-chess-pgn":{"source":"apache","extensions":["pgn"]},"application/x-chrome-extension":{"extensions":["crx"]},"application/x-cocoa":{"source":"nginx","extensions":["cco"]},"application/x-compress":{"source":"apache"},"application/x-conference":{"source":"apache","extensions":["nsc"]},"application/x-cpio":{"source":"apache","extensions":["cpio"]},"application/x-csh":{"source":"apache","extensions":["csh"]},"application/x-deb":{"compressible":false},"application/x-debian-package":{"source":"apache","extensions":["deb","udeb"]},"application/x-dgc-compressed":{"source":"apache","extensions":["dgc"]},"application/x-director":{"source":"apache","extensions":["dir","dcr","dxr","cst","cct","cxt","w3d","fgd","swa"]},"application/x-doom":{"source":"apache","extensions":["wad"]},"application/x-dtbncx+xml":{"source":"apache","compressible":true,"extensions":["ncx"]},"application/x-dtbook+xml":{"source":"apache","compressible":true,"extensions":["dtb"]},"application/x-dtbresource+xml":{"source":"apache","compressible":true,"extensions":["res"]},"application/x-dvi":{"source":"apache","compressible":false,"extensions":["dvi"]},"application/x-envoy":{"source":"apache","extensions":["evy"]},"application/x-eva":{"source":"apache","extensions":["eva"]},"application/x-font-bdf":{"source":"apache","extensions":["bdf"]},"application/x-font-dos":{"source":"apache"},"application/x-font-framemaker":{"source":"apache"},"application/x-font-ghostscript":{"source":"apache","extensions":["gsf"]},"application/x-font-libgrx":{"source":"apache"},"application/x-font-linux-psf":{"source":"apache","extensions":["psf"]},"application/x-font-pcf":{"source":"apache","extensions":["pcf"]},"application/x-font-snf":{"source":"apache","extensions":["snf"]},"application/x-font-speedo":{"source":"apache"},"application/x-font-sunos-news":{"source":"apache"},"application/x-font-type1":{"source":"apache","extensions":["pfa","pfb","pfm","afm"]},"application/x-font-vfont":{"source":"apache"},"application/x-freearc":{"source":"apache","extensions":["arc"]},"application/x-futuresplash":{"source":"apache","extensions":["spl"]},"application/x-gca-compressed":{"source":"apache","extensions":["gca"]},"application/x-glulx":{"source":"apache","extensions":["ulx"]},"application/x-gnumeric":{"source":"apache","extensions":["gnumeric"]},"application/x-gramps-xml":{"source":"apache","extensions":["gramps"]},"application/x-gtar":{"source":"apache","extensions":["gtar"]},"application/x-gzip":{"source":"apache"},"application/x-hdf":{"source":"apache","extensions":["hdf"]},"application/x-httpd-php":{"compressible":true,"extensions":["php"]},"application/x-install-instructions":{"source":"apache","extensions":["install"]},"application/x-iso9660-image":{"source":"apache","extensions":["iso"]},"application/x-iwork-keynote-sffkey":{"extensions":["key"]},"application/x-iwork-numbers-sffnumbers":{"extensions":["numbers"]},"application/x-iwork-pages-sffpages":{"extensions":["pages"]},"application/x-java-archive-diff":{"source":"nginx","extensions":["jardiff"]},"application/x-java-jnlp-file":{"source":"apache","compressible":false,"extensions":["jnlp"]},"application/x-javascript":{"compressible":true},"application/x-keepass2":{"extensions":["kdbx"]},"application/x-latex":{"source":"apache","compressible":false,"extensions":["latex"]},"application/x-lua-bytecode":{"extensions":["luac"]},"application/x-lzh-compressed":{"source":"apache","extensions":["lzh","lha"]},"application/x-makeself":{"source":"nginx","extensions":["run"]},"application/x-mie":{"source":"apache","extensions":["mie"]},"application/x-mobipocket-ebook":{"source":"apache","extensions":["prc","mobi"]},"application/x-mpegurl":{"compressible":false},"application/x-ms-application":{"source":"apache","extensions":["application"]},"application/x-ms-shortcut":{"source":"apache","extensions":["lnk"]},"application/x-ms-wmd":{"source":"apache","extensions":["wmd"]},"application/x-ms-wmz":{"source":"apache","extensions":["wmz"]},"application/x-ms-xbap":{"source":"apache","extensions":["xbap"]},"application/x-msaccess":{"source":"apache","extensions":["mdb"]},"application/x-msbinder":{"source":"apache","extensions":["obd"]},"application/x-mscardfile":{"source":"apache","extensions":["crd"]},"application/x-msclip":{"source":"apache","extensions":["clp"]},"application/x-msdos-program":{"extensions":["exe"]},"application/x-msdownload":{"source":"apache","extensions":["exe","dll","com","bat","msi"]},"application/x-msmediaview":{"source":"apache","extensions":["mvb","m13","m14"]},"application/x-msmetafile":{"source":"apache","extensions":["wmf","wmz","emf","emz"]},"application/x-msmoney":{"source":"apache","extensions":["mny"]},"application/x-mspublisher":{"source":"apache","extensions":["pub"]},"application/x-msschedule":{"source":"apache","extensions":["scd"]},"application/x-msterminal":{"source":"apache","extensions":["trm"]},"application/x-mswrite":{"source":"apache","extensions":["wri"]},"application/x-netcdf":{"source":"apache","extensions":["nc","cdf"]},"application/x-ns-proxy-autoconfig":{"compressible":true,"extensions":["pac"]},"application/x-nzb":{"source":"apache","extensions":["nzb"]},"application/x-perl":{"source":"nginx","extensions":["pl","pm"]},"application/x-pilot":{"source":"nginx","extensions":["prc","pdb"]},"application/x-pkcs12":{"source":"apache","compressible":false,"extensions":["p12","pfx"]},"application/x-pkcs7-certificates":{"source":"apache","extensions":["p7b","spc"]},"application/x-pkcs7-certreqresp":{"source":"apache","extensions":["p7r"]},"application/x-pki-message":{"source":"iana"},"application/x-rar-compressed":{"source":"apache","compressible":false,"extensions":["rar"]},"application/x-redhat-package-manager":{"source":"nginx","extensions":["rpm"]},"application/x-research-info-systems":{"source":"apache","extensions":["ris"]},"application/x-sea":{"source":"nginx","extensions":["sea"]},"application/x-sh":{"source":"apache","compressible":true,"extensions":["sh"]},"application/x-shar":{"source":"apache","extensions":["shar"]},"application/x-shockwave-flash":{"source":"apache","compressible":false,"extensions":["swf"]},"application/x-silverlight-app":{"source":"apache","extensions":["xap"]},"application/x-sql":{"source":"apache","extensions":["sql"]},"application/x-stuffit":{"source":"apache","compressible":false,"extensions":["sit"]},"application/x-stuffitx":{"source":"apache","extensions":["sitx"]},"application/x-subrip":{"source":"apache","extensions":["srt"]},"application/x-sv4cpio":{"source":"apache","extensions":["sv4cpio"]},"application/x-sv4crc":{"source":"apache","extensions":["sv4crc"]},"application/x-t3vm-image":{"source":"apache","extensions":["t3"]},"application/x-tads":{"source":"apache","extensions":["gam"]},"application/x-tar":{"source":"apache","compressible":true,"extensions":["tar"]},"application/x-tcl":{"source":"apache","extensions":["tcl","tk"]},"application/x-tex":{"source":"apache","extensions":["tex"]},"application/x-tex-tfm":{"source":"apache","extensions":["tfm"]},"application/x-texinfo":{"source":"apache","extensions":["texinfo","texi"]},"application/x-tgif":{"source":"apache","extensions":["obj"]},"application/x-ustar":{"source":"apache","extensions":["ustar"]},"application/x-virtualbox-hdd":{"compressible":true,"extensions":["hdd"]},"application/x-virtualbox-ova":{"compressible":true,"extensions":["ova"]},"application/x-virtualbox-ovf":{"compressible":true,"extensions":["ovf"]},"application/x-virtualbox-vbox":{"compressible":true,"extensions":["vbox"]},"application/x-virtualbox-vbox-extpack":{"compressible":false,"extensions":["vbox-extpack"]},"application/x-virtualbox-vdi":{"compressible":true,"extensions":["vdi"]},"application/x-virtualbox-vhd":{"compressible":true,"extensions":["vhd"]},"application/x-virtualbox-vmdk":{"compressible":true,"extensions":["vmdk"]},"application/x-wais-source":{"source":"apache","extensions":["src"]},"application/x-web-app-manifest+json":{"compressible":true,"extensions":["webapp"]},"application/x-www-form-urlencoded":{"source":"iana","compressible":true},"application/x-x509-ca-cert":{"source":"iana","extensions":["der","crt","pem"]},"application/x-x509-ca-ra-cert":{"source":"iana"},"application/x-x509-next-ca-cert":{"source":"iana"},"application/x-xfig":{"source":"apache","extensions":["fig"]},"application/x-xliff+xml":{"source":"apache","compressible":true,"extensions":["xlf"]},"application/x-xpinstall":{"source":"apache","compressible":false,"extensions":["xpi"]},"application/x-xz":{"source":"apache","extensions":["xz"]},"application/x-zmachine":{"source":"apache","extensions":["z1","z2","z3","z4","z5","z6","z7","z8"]},"application/x400-bp":{"source":"iana"},"application/xacml+xml":{"source":"iana","compressible":true},"application/xaml+xml":{"source":"apache","compressible":true,"extensions":["xaml"]},"application/xcap-att+xml":{"source":"iana","compressible":true,"extensions":["xav"]},"application/xcap-caps+xml":{"source":"iana","compressible":true,"extensions":["xca"]},"application/xcap-diff+xml":{"source":"iana","compressible":true,"extensions":["xdf"]},"application/xcap-el+xml":{"source":"iana","compressible":true,"extensions":["xel"]},"application/xcap-error+xml":{"source":"iana","compressible":true},"application/xcap-ns+xml":{"source":"iana","compressible":true,"extensions":["xns"]},"application/xcon-conference-info+xml":{"source":"iana","compressible":true},"application/xcon-conference-info-diff+xml":{"source":"iana","compressible":true},"application/xenc+xml":{"source":"iana","compressible":true,"extensions":["xenc"]},"application/xhtml+xml":{"source":"iana","compressible":true,"extensions":["xhtml","xht"]},"application/xhtml-voice+xml":{"source":"apache","compressible":true},"application/xliff+xml":{"source":"iana","compressible":true,"extensions":["xlf"]},"application/xml":{"source":"iana","compressible":true,"extensions":["xml","xsl","xsd","rng"]},"application/xml-dtd":{"source":"iana","compressible":true,"extensions":["dtd"]},"application/xml-external-parsed-entity":{"source":"iana"},"application/xml-patch+xml":{"source":"iana","compressible":true},"application/xmpp+xml":{"source":"iana","compressible":true},"application/xop+xml":{"source":"iana","compressible":true,"extensions":["xop"]},"application/xproc+xml":{"source":"apache","compressible":true,"extensions":["xpl"]},"application/xslt+xml":{"source":"iana","compressible":true,"extensions":["xsl","xslt"]},"application/xspf+xml":{"source":"apache","compressible":true,"extensions":["xspf"]},"application/xv+xml":{"source":"iana","compressible":true,"extensions":["mxml","xhvml","xvml","xvm"]},"application/yang":{"source":"iana","extensions":["yang"]},"application/yang-data+json":{"source":"iana","compressible":true},"application/yang-data+xml":{"source":"iana","compressible":true},"application/yang-patch+json":{"source":"iana","compressible":true},"application/yang-patch+xml":{"source":"iana","compressible":true},"application/yin+xml":{"source":"iana","compressible":true,"extensions":["yin"]},"application/zip":{"source":"iana","compressible":false,"extensions":["zip"]},"application/zlib":{"source":"iana"},"application/zstd":{"source":"iana"},"audio/1d-interleaved-parityfec":{"source":"iana"},"audio/32kadpcm":{"source":"iana"},"audio/3gpp":{"source":"iana","compressible":false,"extensions":["3gpp"]},"audio/3gpp2":{"source":"iana"},"audio/aac":{"source":"iana"},"audio/ac3":{"source":"iana"},"audio/adpcm":{"source":"apache","extensions":["adp"]},"audio/amr":{"source":"iana","extensions":["amr"]},"audio/amr-wb":{"source":"iana"},"audio/amr-wb+":{"source":"iana"},"audio/aptx":{"source":"iana"},"audio/asc":{"source":"iana"},"audio/atrac-advanced-lossless":{"source":"iana"},"audio/atrac-x":{"source":"iana"},"audio/atrac3":{"source":"iana"},"audio/basic":{"source":"iana","compressible":false,"extensions":["au","snd"]},"audio/bv16":{"source":"iana"},"audio/bv32":{"source":"iana"},"audio/clearmode":{"source":"iana"},"audio/cn":{"source":"iana"},"audio/dat12":{"source":"iana"},"audio/dls":{"source":"iana"},"audio/dsr-es201108":{"source":"iana"},"audio/dsr-es202050":{"source":"iana"},"audio/dsr-es202211":{"source":"iana"},"audio/dsr-es202212":{"source":"iana"},"audio/dv":{"source":"iana"},"audio/dvi4":{"source":"iana"},"audio/eac3":{"source":"iana"},"audio/encaprtp":{"source":"iana"},"audio/evrc":{"source":"iana"},"audio/evrc-qcp":{"source":"iana"},"audio/evrc0":{"source":"iana"},"audio/evrc1":{"source":"iana"},"audio/evrcb":{"source":"iana"},"audio/evrcb0":{"source":"iana"},"audio/evrcb1":{"source":"iana"},"audio/evrcnw":{"source":"iana"},"audio/evrcnw0":{"source":"iana"},"audio/evrcnw1":{"source":"iana"},"audio/evrcwb":{"source":"iana"},"audio/evrcwb0":{"source":"iana"},"audio/evrcwb1":{"source":"iana"},"audio/evs":{"source":"iana"},"audio/flexfec":{"source":"iana"},"audio/fwdred":{"source":"iana"},"audio/g711-0":{"source":"iana"},"audio/g719":{"source":"iana"},"audio/g722":{"source":"iana"},"audio/g7221":{"source":"iana"},"audio/g723":{"source":"iana"},"audio/g726-16":{"source":"iana"},"audio/g726-24":{"source":"iana"},"audio/g726-32":{"source":"iana"},"audio/g726-40":{"source":"iana"},"audio/g728":{"source":"iana"},"audio/g729":{"source":"iana"},"audio/g7291":{"source":"iana"},"audio/g729d":{"source":"iana"},"audio/g729e":{"source":"iana"},"audio/gsm":{"source":"iana"},"audio/gsm-efr":{"source":"iana"},"audio/gsm-hr-08":{"source":"iana"},"audio/ilbc":{"source":"iana"},"audio/ip-mr_v2.5":{"source":"iana"},"audio/isac":{"source":"apache"},"audio/l16":{"source":"iana"},"audio/l20":{"source":"iana"},"audio/l24":{"source":"iana","compressible":false},"audio/l8":{"source":"iana"},"audio/lpc":{"source":"iana"},"audio/melp":{"source":"iana"},"audio/melp1200":{"source":"iana"},"audio/melp2400":{"source":"iana"},"audio/melp600":{"source":"iana"},"audio/mhas":{"source":"iana"},"audio/midi":{"source":"apache","extensions":["mid","midi","kar","rmi"]},"audio/mobile-xmf":{"source":"iana","extensions":["mxmf"]},"audio/mp3":{"compressible":false,"extensions":["mp3"]},"audio/mp4":{"source":"iana","compressible":false,"extensions":["m4a","mp4a"]},"audio/mp4a-latm":{"source":"iana"},"audio/mpa":{"source":"iana"},"audio/mpa-robust":{"source":"iana"},"audio/mpeg":{"source":"iana","compressible":false,"extensions":["mpga","mp2","mp2a","mp3","m2a","m3a"]},"audio/mpeg4-generic":{"source":"iana"},"audio/musepack":{"source":"apache"},"audio/ogg":{"source":"iana","compressible":false,"extensions":["oga","ogg","spx","opus"]},"audio/opus":{"source":"iana"},"audio/parityfec":{"source":"iana"},"audio/pcma":{"source":"iana"},"audio/pcma-wb":{"source":"iana"},"audio/pcmu":{"source":"iana"},"audio/pcmu-wb":{"source":"iana"},"audio/prs.sid":{"source":"iana"},"audio/qcelp":{"source":"iana"},"audio/raptorfec":{"source":"iana"},"audio/red":{"source":"iana"},"audio/rtp-enc-aescm128":{"source":"iana"},"audio/rtp-midi":{"source":"iana"},"audio/rtploopback":{"source":"iana"},"audio/rtx":{"source":"iana"},"audio/s3m":{"source":"apache","extensions":["s3m"]},"audio/scip":{"source":"iana"},"audio/silk":{"source":"apache","extensions":["sil"]},"audio/smv":{"source":"iana"},"audio/smv-qcp":{"source":"iana"},"audio/smv0":{"source":"iana"},"audio/sofa":{"source":"iana"},"audio/sp-midi":{"source":"iana"},"audio/speex":{"source":"iana"},"audio/t140c":{"source":"iana"},"audio/t38":{"source":"iana"},"audio/telephone-event":{"source":"iana"},"audio/tetra_acelp":{"source":"iana"},"audio/tetra_acelp_bb":{"source":"iana"},"audio/tone":{"source":"iana"},"audio/tsvcis":{"source":"iana"},"audio/uemclip":{"source":"iana"},"audio/ulpfec":{"source":"iana"},"audio/usac":{"source":"iana"},"audio/vdvi":{"source":"iana"},"audio/vmr-wb":{"source":"iana"},"audio/vnd.3gpp.iufp":{"source":"iana"},"audio/vnd.4sb":{"source":"iana"},"audio/vnd.audiokoz":{"source":"iana"},"audio/vnd.celp":{"source":"iana"},"audio/vnd.cisco.nse":{"source":"iana"},"audio/vnd.cmles.radio-events":{"source":"iana"},"audio/vnd.cns.anp1":{"source":"iana"},"audio/vnd.cns.inf1":{"source":"iana"},"audio/vnd.dece.audio":{"source":"iana","extensions":["uva","uvva"]},"audio/vnd.digital-winds":{"source":"iana","extensions":["eol"]},"audio/vnd.dlna.adts":{"source":"iana"},"audio/vnd.dolby.heaac.1":{"source":"iana"},"audio/vnd.dolby.heaac.2":{"source":"iana"},"audio/vnd.dolby.mlp":{"source":"iana"},"audio/vnd.dolby.mps":{"source":"iana"},"audio/vnd.dolby.pl2":{"source":"iana"},"audio/vnd.dolby.pl2x":{"source":"iana"},"audio/vnd.dolby.pl2z":{"source":"iana"},"audio/vnd.dolby.pulse.1":{"source":"iana"},"audio/vnd.dra":{"source":"iana","extensions":["dra"]},"audio/vnd.dts":{"source":"iana","extensions":["dts"]},"audio/vnd.dts.hd":{"source":"iana","extensions":["dtshd"]},"audio/vnd.dts.uhd":{"source":"iana"},"audio/vnd.dvb.file":{"source":"iana"},"audio/vnd.everad.plj":{"source":"iana"},"audio/vnd.hns.audio":{"source":"iana"},"audio/vnd.lucent.voice":{"source":"iana","extensions":["lvp"]},"audio/vnd.ms-playready.media.pya":{"source":"iana","extensions":["pya"]},"audio/vnd.nokia.mobile-xmf":{"source":"iana"},"audio/vnd.nortel.vbk":{"source":"iana"},"audio/vnd.nuera.ecelp4800":{"source":"iana","extensions":["ecelp4800"]},"audio/vnd.nuera.ecelp7470":{"source":"iana","extensions":["ecelp7470"]},"audio/vnd.nuera.ecelp9600":{"source":"iana","extensions":["ecelp9600"]},"audio/vnd.octel.sbc":{"source":"iana"},"audio/vnd.presonus.multitrack":{"source":"iana"},"audio/vnd.qcelp":{"source":"iana"},"audio/vnd.rhetorex.32kadpcm":{"source":"iana"},"audio/vnd.rip":{"source":"iana","extensions":["rip"]},"audio/vnd.rn-realaudio":{"compressible":false},"audio/vnd.sealedmedia.softseal.mpeg":{"source":"iana"},"audio/vnd.vmx.cvsd":{"source":"iana"},"audio/vnd.wave":{"compressible":false},"audio/vorbis":{"source":"iana","compressible":false},"audio/vorbis-config":{"source":"iana"},"audio/wav":{"compressible":false,"extensions":["wav"]},"audio/wave":{"compressible":false,"extensions":["wav"]},"audio/webm":{"source":"apache","compressible":false,"extensions":["weba"]},"audio/x-aac":{"source":"apache","compressible":false,"extensions":["aac"]},"audio/x-aiff":{"source":"apache","extensions":["aif","aiff","aifc"]},"audio/x-caf":{"source":"apache","compressible":false,"extensions":["caf"]},"audio/x-flac":{"source":"apache","extensions":["flac"]},"audio/x-m4a":{"source":"nginx","extensions":["m4a"]},"audio/x-matroska":{"source":"apache","extensions":["mka"]},"audio/x-mpegurl":{"source":"apache","extensions":["m3u"]},"audio/x-ms-wax":{"source":"apache","extensions":["wax"]},"audio/x-ms-wma":{"source":"apache","extensions":["wma"]},"audio/x-pn-realaudio":{"source":"apache","extensions":["ram","ra"]},"audio/x-pn-realaudio-plugin":{"source":"apache","extensions":["rmp"]},"audio/x-realaudio":{"source":"nginx","extensions":["ra"]},"audio/x-tta":{"source":"apache"},"audio/x-wav":{"source":"apache","extensions":["wav"]},"audio/xm":{"source":"apache","extensions":["xm"]},"chemical/x-cdx":{"source":"apache","extensions":["cdx"]},"chemical/x-cif":{"source":"apache","extensions":["cif"]},"chemical/x-cmdf":{"source":"apache","extensions":["cmdf"]},"chemical/x-cml":{"source":"apache","extensions":["cml"]},"chemical/x-csml":{"source":"apache","extensions":["csml"]},"chemical/x-pdb":{"source":"apache"},"chemical/x-xyz":{"source":"apache","extensions":["xyz"]},"font/collection":{"source":"iana","extensions":["ttc"]},"font/otf":{"source":"iana","compressible":true,"extensions":["otf"]},"font/sfnt":{"source":"iana"},"font/ttf":{"source":"iana","compressible":true,"extensions":["ttf"]},"font/woff":{"source":"iana","extensions":["woff"]},"font/woff2":{"source":"iana","extensions":["woff2"]},"image/aces":{"source":"iana","extensions":["exr"]},"image/apng":{"compressible":false,"extensions":["apng"]},"image/avci":{"source":"iana","extensions":["avci"]},"image/avcs":{"source":"iana","extensions":["avcs"]},"image/avif":{"source":"iana","compressible":false,"extensions":["avif"]},"image/bmp":{"source":"iana","compressible":true,"extensions":["bmp"]},"image/cgm":{"source":"iana","extensions":["cgm"]},"image/dicom-rle":{"source":"iana","extensions":["drle"]},"image/emf":{"source":"iana","extensions":["emf"]},"image/fits":{"source":"iana","extensions":["fits"]},"image/g3fax":{"source":"iana","extensions":["g3"]},"image/gif":{"source":"iana","compressible":false,"extensions":["gif"]},"image/heic":{"source":"iana","extensions":["heic"]},"image/heic-sequence":{"source":"iana","extensions":["heics"]},"image/heif":{"source":"iana","extensions":["heif"]},"image/heif-sequence":{"source":"iana","extensions":["heifs"]},"image/hej2k":{"source":"iana","extensions":["hej2"]},"image/hsj2":{"source":"iana","extensions":["hsj2"]},"image/ief":{"source":"iana","extensions":["ief"]},"image/jls":{"source":"iana","extensions":["jls"]},"image/jp2":{"source":"iana","compressible":false,"extensions":["jp2","jpg2"]},"image/jpeg":{"source":"iana","compressible":false,"extensions":["jpeg","jpg","jpe"]},"image/jph":{"source":"iana","extensions":["jph"]},"image/jphc":{"source":"iana","extensions":["jhc"]},"image/jpm":{"source":"iana","compressible":false,"extensions":["jpm"]},"image/jpx":{"source":"iana","compressible":false,"extensions":["jpx","jpf"]},"image/jxr":{"source":"iana","extensions":["jxr"]},"image/jxra":{"source":"iana","extensions":["jxra"]},"image/jxrs":{"source":"iana","extensions":["jxrs"]},"image/jxs":{"source":"iana","extensions":["jxs"]},"image/jxsc":{"source":"iana","extensions":["jxsc"]},"image/jxsi":{"source":"iana","extensions":["jxsi"]},"image/jxss":{"source":"iana","extensions":["jxss"]},"image/ktx":{"source":"iana","extensions":["ktx"]},"image/ktx2":{"source":"iana","extensions":["ktx2"]},"image/naplps":{"source":"iana"},"image/pjpeg":{"compressible":false},"image/png":{"source":"iana","compressible":false,"extensions":["png"]},"image/prs.btif":{"source":"iana","extensions":["btif"]},"image/prs.pti":{"source":"iana","extensions":["pti"]},"image/pwg-raster":{"source":"iana"},"image/sgi":{"source":"apache","extensions":["sgi"]},"image/svg+xml":{"source":"iana","compressible":true,"extensions":["svg","svgz"]},"image/t38":{"source":"iana","extensions":["t38"]},"image/tiff":{"source":"iana","compressible":false,"extensions":["tif","tiff"]},"image/tiff-fx":{"source":"iana","extensions":["tfx"]},"image/vnd.adobe.photoshop":{"source":"iana","compressible":true,"extensions":["psd"]},"image/vnd.airzip.accelerator.azv":{"source":"iana","extensions":["azv"]},"image/vnd.cns.inf2":{"source":"iana"},"image/vnd.dece.graphic":{"source":"iana","extensions":["uvi","uvvi","uvg","uvvg"]},"image/vnd.djvu":{"source":"iana","extensions":["djvu","djv"]},"image/vnd.dvb.subtitle":{"source":"iana","extensions":["sub"]},"image/vnd.dwg":{"source":"iana","extensions":["dwg"]},"image/vnd.dxf":{"source":"iana","extensions":["dxf"]},"image/vnd.fastbidsheet":{"source":"iana","extensions":["fbs"]},"image/vnd.fpx":{"source":"iana","extensions":["fpx"]},"image/vnd.fst":{"source":"iana","extensions":["fst"]},"image/vnd.fujixerox.edmics-mmr":{"source":"iana","extensions":["mmr"]},"image/vnd.fujixerox.edmics-rlc":{"source":"iana","extensions":["rlc"]},"image/vnd.globalgraphics.pgb":{"source":"iana"},"image/vnd.microsoft.icon":{"source":"iana","compressible":true,"extensions":["ico"]},"image/vnd.mix":{"source":"iana"},"image/vnd.mozilla.apng":{"source":"iana"},"image/vnd.ms-dds":{"compressible":true,"extensions":["dds"]},"image/vnd.ms-modi":{"source":"iana","extensions":["mdi"]},"image/vnd.ms-photo":{"source":"apache","extensions":["wdp"]},"image/vnd.net-fpx":{"source":"iana","extensions":["npx"]},"image/vnd.pco.b16":{"source":"iana","extensions":["b16"]},"image/vnd.radiance":{"source":"iana"},"image/vnd.sealed.png":{"source":"iana"},"image/vnd.sealedmedia.softseal.gif":{"source":"iana"},"image/vnd.sealedmedia.softseal.jpg":{"source":"iana"},"image/vnd.svf":{"source":"iana"},"image/vnd.tencent.tap":{"source":"iana","extensions":["tap"]},"image/vnd.valve.source.texture":{"source":"iana","extensions":["vtf"]},"image/vnd.wap.wbmp":{"source":"iana","extensions":["wbmp"]},"image/vnd.xiff":{"source":"iana","extensions":["xif"]},"image/vnd.zbrush.pcx":{"source":"iana","extensions":["pcx"]},"image/webp":{"source":"apache","extensions":["webp"]},"image/wmf":{"source":"iana","extensions":["wmf"]},"image/x-3ds":{"source":"apache","extensions":["3ds"]},"image/x-cmu-raster":{"source":"apache","extensions":["ras"]},"image/x-cmx":{"source":"apache","extensions":["cmx"]},"image/x-freehand":{"source":"apache","extensions":["fh","fhc","fh4","fh5","fh7"]},"image/x-icon":{"source":"apache","compressible":true,"extensions":["ico"]},"image/x-jng":{"source":"nginx","extensions":["jng"]},"image/x-mrsid-image":{"source":"apache","extensions":["sid"]},"image/x-ms-bmp":{"source":"nginx","compressible":true,"extensions":["bmp"]},"image/x-pcx":{"source":"apache","extensions":["pcx"]},"image/x-pict":{"source":"apache","extensions":["pic","pct"]},"image/x-portable-anymap":{"source":"apache","extensions":["pnm"]},"image/x-portable-bitmap":{"source":"apache","extensions":["pbm"]},"image/x-portable-graymap":{"source":"apache","extensions":["pgm"]},"image/x-portable-pixmap":{"source":"apache","extensions":["ppm"]},"image/x-rgb":{"source":"apache","extensions":["rgb"]},"image/x-tga":{"source":"apache","extensions":["tga"]},"image/x-xbitmap":{"source":"apache","extensions":["xbm"]},"image/x-xcf":{"compressible":false},"image/x-xpixmap":{"source":"apache","extensions":["xpm"]},"image/x-xwindowdump":{"source":"apache","extensions":["xwd"]},"message/cpim":{"source":"iana"},"message/delivery-status":{"source":"iana"},"message/disposition-notification":{"source":"iana","extensions":["disposition-notification"]},"message/external-body":{"source":"iana"},"message/feedback-report":{"source":"iana"},"message/global":{"source":"iana","extensions":["u8msg"]},"message/global-delivery-status":{"source":"iana","extensions":["u8dsn"]},"message/global-disposition-notification":{"source":"iana","extensions":["u8mdn"]},"message/global-headers":{"source":"iana","extensions":["u8hdr"]},"message/http":{"source":"iana","compressible":false},"message/imdn+xml":{"source":"iana","compressible":true},"message/news":{"source":"iana"},"message/partial":{"source":"iana","compressible":false},"message/rfc822":{"source":"iana","compressible":true,"extensions":["eml","mime"]},"message/s-http":{"source":"iana"},"message/sip":{"source":"iana"},"message/sipfrag":{"source":"iana"},"message/tracking-status":{"source":"iana"},"message/vnd.si.simp":{"source":"iana"},"message/vnd.wfa.wsc":{"source":"iana","extensions":["wsc"]},"model/3mf":{"source":"iana","extensions":["3mf"]},"model/e57":{"source":"iana"},"model/gltf+json":{"source":"iana","compressible":true,"extensions":["gltf"]},"model/gltf-binary":{"source":"iana","compressible":true,"extensions":["glb"]},"model/iges":{"source":"iana","compressible":false,"extensions":["igs","iges"]},"model/mesh":{"source":"iana","compressible":false,"extensions":["msh","mesh","silo"]},"model/mtl":{"source":"iana","extensions":["mtl"]},"model/obj":{"source":"iana","extensions":["obj"]},"model/step":{"source":"iana"},"model/step+xml":{"source":"iana","compressible":true,"extensions":["stpx"]},"model/step+zip":{"source":"iana","compressible":false,"extensions":["stpz"]},"model/step-xml+zip":{"source":"iana","compressible":false,"extensions":["stpxz"]},"model/stl":{"source":"iana","extensions":["stl"]},"model/vnd.collada+xml":{"source":"iana","compressible":true,"extensions":["dae"]},"model/vnd.dwf":{"source":"iana","extensions":["dwf"]},"model/vnd.flatland.3dml":{"source":"iana"},"model/vnd.gdl":{"source":"iana","extensions":["gdl"]},"model/vnd.gs-gdl":{"source":"apache"},"model/vnd.gs.gdl":{"source":"iana"},"model/vnd.gtw":{"source":"iana","extensions":["gtw"]},"model/vnd.moml+xml":{"source":"iana","compressible":true},"model/vnd.mts":{"source":"iana","extensions":["mts"]},"model/vnd.opengex":{"source":"iana","extensions":["ogex"]},"model/vnd.parasolid.transmit.binary":{"source":"iana","extensions":["x_b"]},"model/vnd.parasolid.transmit.text":{"source":"iana","extensions":["x_t"]},"model/vnd.pytha.pyox":{"source":"iana"},"model/vnd.rosette.annotated-data-model":{"source":"iana"},"model/vnd.sap.vds":{"source":"iana","extensions":["vds"]},"model/vnd.usdz+zip":{"source":"iana","compressible":false,"extensions":["usdz"]},"model/vnd.valve.source.compiled-map":{"source":"iana","extensions":["bsp"]},"model/vnd.vtu":{"source":"iana","extensions":["vtu"]},"model/vrml":{"source":"iana","compressible":false,"extensions":["wrl","vrml"]},"model/x3d+binary":{"source":"apache","compressible":false,"extensions":["x3db","x3dbz"]},"model/x3d+fastinfoset":{"source":"iana","extensions":["x3db"]},"model/x3d+vrml":{"source":"apache","compressible":false,"extensions":["x3dv","x3dvz"]},"model/x3d+xml":{"source":"iana","compressible":true,"extensions":["x3d","x3dz"]},"model/x3d-vrml":{"source":"iana","extensions":["x3dv"]},"multipart/alternative":{"source":"iana","compressible":false},"multipart/appledouble":{"source":"iana"},"multipart/byteranges":{"source":"iana"},"multipart/digest":{"source":"iana"},"multipart/encrypted":{"source":"iana","compressible":false},"multipart/form-data":{"source":"iana","compressible":false},"multipart/header-set":{"source":"iana"},"multipart/mixed":{"source":"iana"},"multipart/multilingual":{"source":"iana"},"multipart/parallel":{"source":"iana"},"multipart/related":{"source":"iana","compressible":false},"multipart/report":{"source":"iana"},"multipart/signed":{"source":"iana","compressible":false},"multipart/vnd.bint.med-plus":{"source":"iana"},"multipart/voice-message":{"source":"iana"},"multipart/x-mixed-replace":{"source":"iana"},"text/1d-interleaved-parityfec":{"source":"iana"},"text/cache-manifest":{"source":"iana","compressible":true,"extensions":["appcache","manifest"]},"text/calendar":{"source":"iana","extensions":["ics","ifb"]},"text/calender":{"compressible":true},"text/cmd":{"compressible":true},"text/coffeescript":{"extensions":["coffee","litcoffee"]},"text/cql":{"source":"iana"},"text/cql-expression":{"source":"iana"},"text/cql-identifier":{"source":"iana"},"text/css":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["css"]},"text/csv":{"source":"iana","compressible":true,"extensions":["csv"]},"text/csv-schema":{"source":"iana"},"text/directory":{"source":"iana"},"text/dns":{"source":"iana"},"text/ecmascript":{"source":"iana"},"text/encaprtp":{"source":"iana"},"text/enriched":{"source":"iana"},"text/fhirpath":{"source":"iana"},"text/flexfec":{"source":"iana"},"text/fwdred":{"source":"iana"},"text/gff3":{"source":"iana"},"text/grammar-ref-list":{"source":"iana"},"text/html":{"source":"iana","compressible":true,"extensions":["html","htm","shtml"]},"text/jade":{"extensions":["jade"]},"text/javascript":{"source":"iana","compressible":true},"text/jcr-cnd":{"source":"iana"},"text/jsx":{"compressible":true,"extensions":["jsx"]},"text/less":{"compressible":true,"extensions":["less"]},"text/markdown":{"source":"iana","compressible":true,"extensions":["markdown","md"]},"text/mathml":{"source":"nginx","extensions":["mml"]},"text/mdx":{"compressible":true,"extensions":["mdx"]},"text/mizar":{"source":"iana"},"text/n3":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["n3"]},"text/parameters":{"source":"iana","charset":"UTF-8"},"text/parityfec":{"source":"iana"},"text/plain":{"source":"iana","compressible":true,"extensions":["txt","text","conf","def","list","log","in","ini"]},"text/provenance-notation":{"source":"iana","charset":"UTF-8"},"text/prs.fallenstein.rst":{"source":"iana"},"text/prs.lines.tag":{"source":"iana","extensions":["dsc"]},"text/prs.prop.logic":{"source":"iana"},"text/raptorfec":{"source":"iana"},"text/red":{"source":"iana"},"text/rfc822-headers":{"source":"iana"},"text/richtext":{"source":"iana","compressible":true,"extensions":["rtx"]},"text/rtf":{"source":"iana","compressible":true,"extensions":["rtf"]},"text/rtp-enc-aescm128":{"source":"iana"},"text/rtploopback":{"source":"iana"},"text/rtx":{"source":"iana"},"text/sgml":{"source":"iana","extensions":["sgml","sgm"]},"text/shaclc":{"source":"iana"},"text/shex":{"source":"iana","extensions":["shex"]},"text/slim":{"extensions":["slim","slm"]},"text/spdx":{"source":"iana","extensions":["spdx"]},"text/strings":{"source":"iana"},"text/stylus":{"extensions":["stylus","styl"]},"text/t140":{"source":"iana"},"text/tab-separated-values":{"source":"iana","compressible":true,"extensions":["tsv"]},"text/troff":{"source":"iana","extensions":["t","tr","roff","man","me","ms"]},"text/turtle":{"source":"iana","charset":"UTF-8","extensions":["ttl"]},"text/ulpfec":{"source":"iana"},"text/uri-list":{"source":"iana","compressible":true,"extensions":["uri","uris","urls"]},"text/vcard":{"source":"iana","compressible":true,"extensions":["vcard"]},"text/vnd.a":{"source":"iana"},"text/vnd.abc":{"source":"iana"},"text/vnd.ascii-art":{"source":"iana"},"text/vnd.curl":{"source":"iana","extensions":["curl"]},"text/vnd.curl.dcurl":{"source":"apache","extensions":["dcurl"]},"text/vnd.curl.mcurl":{"source":"apache","extensions":["mcurl"]},"text/vnd.curl.scurl":{"source":"apache","extensions":["scurl"]},"text/vnd.debian.copyright":{"source":"iana","charset":"UTF-8"},"text/vnd.dmclientscript":{"source":"iana"},"text/vnd.dvb.subtitle":{"source":"iana","extensions":["sub"]},"text/vnd.esmertec.theme-descriptor":{"source":"iana","charset":"UTF-8"},"text/vnd.familysearch.gedcom":{"source":"iana","extensions":["ged"]},"text/vnd.ficlab.flt":{"source":"iana"},"text/vnd.fly":{"source":"iana","extensions":["fly"]},"text/vnd.fmi.flexstor":{"source":"iana","extensions":["flx"]},"text/vnd.gml":{"source":"iana"},"text/vnd.graphviz":{"source":"iana","extensions":["gv"]},"text/vnd.hans":{"source":"iana"},"text/vnd.hgl":{"source":"iana"},"text/vnd.in3d.3dml":{"source":"iana","extensions":["3dml"]},"text/vnd.in3d.spot":{"source":"iana","extensions":["spot"]},"text/vnd.iptc.newsml":{"source":"iana"},"text/vnd.iptc.nitf":{"source":"iana"},"text/vnd.latex-z":{"source":"iana"},"text/vnd.motorola.reflex":{"source":"iana"},"text/vnd.ms-mediapackage":{"source":"iana"},"text/vnd.net2phone.commcenter.command":{"source":"iana"},"text/vnd.radisys.msml-basic-layout":{"source":"iana"},"text/vnd.senx.warpscript":{"source":"iana"},"text/vnd.si.uricatalogue":{"source":"iana"},"text/vnd.sosi":{"source":"iana"},"text/vnd.sun.j2me.app-descriptor":{"source":"iana","charset":"UTF-8","extensions":["jad"]},"text/vnd.trolltech.linguist":{"source":"iana","charset":"UTF-8"},"text/vnd.wap.si":{"source":"iana"},"text/vnd.wap.sl":{"source":"iana"},"text/vnd.wap.wml":{"source":"iana","extensions":["wml"]},"text/vnd.wap.wmlscript":{"source":"iana","extensions":["wmls"]},"text/vtt":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["vtt"]},"text/x-asm":{"source":"apache","extensions":["s","asm"]},"text/x-c":{"source":"apache","extensions":["c","cc","cxx","cpp","h","hh","dic"]},"text/x-component":{"source":"nginx","extensions":["htc"]},"text/x-fortran":{"source":"apache","extensions":["f","for","f77","f90"]},"text/x-gwt-rpc":{"compressible":true},"text/x-handlebars-template":{"extensions":["hbs"]},"text/x-java-source":{"source":"apache","extensions":["java"]},"text/x-jquery-tmpl":{"compressible":true},"text/x-lua":{"extensions":["lua"]},"text/x-markdown":{"compressible":true,"extensions":["mkd"]},"text/x-nfo":{"source":"apache","extensions":["nfo"]},"text/x-opml":{"source":"apache","extensions":["opml"]},"text/x-org":{"compressible":true,"extensions":["org"]},"text/x-pascal":{"source":"apache","extensions":["p","pas"]},"text/x-processing":{"compressible":true,"extensions":["pde"]},"text/x-sass":{"extensions":["sass"]},"text/x-scss":{"extensions":["scss"]},"text/x-setext":{"source":"apache","extensions":["etx"]},"text/x-sfv":{"source":"apache","extensions":["sfv"]},"text/x-suse-ymp":{"compressible":true,"extensions":["ymp"]},"text/x-uuencode":{"source":"apache","extensions":["uu"]},"text/x-vcalendar":{"source":"apache","extensions":["vcs"]},"text/x-vcard":{"source":"apache","extensions":["vcf"]},"text/xml":{"source":"iana","compressible":true,"extensions":["xml"]},"text/xml-external-parsed-entity":{"source":"iana"},"text/yaml":{"compressible":true,"extensions":["yaml","yml"]},"video/1d-interleaved-parityfec":{"source":"iana"},"video/3gpp":{"source":"iana","extensions":["3gp","3gpp"]},"video/3gpp-tt":{"source":"iana"},"video/3gpp2":{"source":"iana","extensions":["3g2"]},"video/av1":{"source":"iana"},"video/bmpeg":{"source":"iana"},"video/bt656":{"source":"iana"},"video/celb":{"source":"iana"},"video/dv":{"source":"iana"},"video/encaprtp":{"source":"iana"},"video/ffv1":{"source":"iana"},"video/flexfec":{"source":"iana"},"video/h261":{"source":"iana","extensions":["h261"]},"video/h263":{"source":"iana","extensions":["h263"]},"video/h263-1998":{"source":"iana"},"video/h263-2000":{"source":"iana"},"video/h264":{"source":"iana","extensions":["h264"]},"video/h264-rcdo":{"source":"iana"},"video/h264-svc":{"source":"iana"},"video/h265":{"source":"iana"},"video/iso.segment":{"source":"iana","extensions":["m4s"]},"video/jpeg":{"source":"iana","extensions":["jpgv"]},"video/jpeg2000":{"source":"iana"},"video/jpm":{"source":"apache","extensions":["jpm","jpgm"]},"video/jxsv":{"source":"iana"},"video/mj2":{"source":"iana","extensions":["mj2","mjp2"]},"video/mp1s":{"source":"iana"},"video/mp2p":{"source":"iana"},"video/mp2t":{"source":"iana","extensions":["ts"]},"video/mp4":{"source":"iana","compressible":false,"extensions":["mp4","mp4v","mpg4"]},"video/mp4v-es":{"source":"iana"},"video/mpeg":{"source":"iana","compressible":false,"extensions":["mpeg","mpg","mpe","m1v","m2v"]},"video/mpeg4-generic":{"source":"iana"},"video/mpv":{"source":"iana"},"video/nv":{"source":"iana"},"video/ogg":{"source":"iana","compressible":false,"extensions":["ogv"]},"video/parityfec":{"source":"iana"},"video/pointer":{"source":"iana"},"video/quicktime":{"source":"iana","compressible":false,"extensions":["qt","mov"]},"video/raptorfec":{"source":"iana"},"video/raw":{"source":"iana"},"video/rtp-enc-aescm128":{"source":"iana"},"video/rtploopback":{"source":"iana"},"video/rtx":{"source":"iana"},"video/scip":{"source":"iana"},"video/smpte291":{"source":"iana"},"video/smpte292m":{"source":"iana"},"video/ulpfec":{"source":"iana"},"video/vc1":{"source":"iana"},"video/vc2":{"source":"iana"},"video/vnd.cctv":{"source":"iana"},"video/vnd.dece.hd":{"source":"iana","extensions":["uvh","uvvh"]},"video/vnd.dece.mobile":{"source":"iana","extensions":["uvm","uvvm"]},"video/vnd.dece.mp4":{"source":"iana"},"video/vnd.dece.pd":{"source":"iana","extensions":["uvp","uvvp"]},"video/vnd.dece.sd":{"source":"iana","extensions":["uvs","uvvs"]},"video/vnd.dece.video":{"source":"iana","extensions":["uvv","uvvv"]},"video/vnd.directv.mpeg":{"source":"iana"},"video/vnd.directv.mpeg-tts":{"source":"iana"},"video/vnd.dlna.mpeg-tts":{"source":"iana"},"video/vnd.dvb.file":{"source":"iana","extensions":["dvb"]},"video/vnd.fvt":{"source":"iana","extensions":["fvt"]},"video/vnd.hns.video":{"source":"iana"},"video/vnd.iptvforum.1dparityfec-1010":{"source":"iana"},"video/vnd.iptvforum.1dparityfec-2005":{"source":"iana"},"video/vnd.iptvforum.2dparityfec-1010":{"source":"iana"},"video/vnd.iptvforum.2dparityfec-2005":{"source":"iana"},"video/vnd.iptvforum.ttsavc":{"source":"iana"},"video/vnd.iptvforum.ttsmpeg2":{"source":"iana"},"video/vnd.motorola.video":{"source":"iana"},"video/vnd.motorola.videop":{"source":"iana"},"video/vnd.mpegurl":{"source":"iana","extensions":["mxu","m4u"]},"video/vnd.ms-playready.media.pyv":{"source":"iana","extensions":["pyv"]},"video/vnd.nokia.interleaved-multimedia":{"source":"iana"},"video/vnd.nokia.mp4vr":{"source":"iana"},"video/vnd.nokia.videovoip":{"source":"iana"},"video/vnd.objectvideo":{"source":"iana"},"video/vnd.radgamettools.bink":{"source":"iana"},"video/vnd.radgamettools.smacker":{"source":"iana"},"video/vnd.sealed.mpeg1":{"source":"iana"},"video/vnd.sealed.mpeg4":{"source":"iana"},"video/vnd.sealed.swf":{"source":"iana"},"video/vnd.sealedmedia.softseal.mov":{"source":"iana"},"video/vnd.uvvu.mp4":{"source":"iana","extensions":["uvu","uvvu"]},"video/vnd.vivo":{"source":"iana","extensions":["viv"]},"video/vnd.youtube.yt":{"source":"iana"},"video/vp8":{"source":"iana"},"video/vp9":{"source":"iana"},"video/webm":{"source":"apache","compressible":false,"extensions":["webm"]},"video/x-f4v":{"source":"apache","extensions":["f4v"]},"video/x-fli":{"source":"apache","extensions":["fli"]},"video/x-flv":{"source":"apache","compressible":false,"extensions":["flv"]},"video/x-m4v":{"source":"apache","extensions":["m4v"]},"video/x-matroska":{"source":"apache","compressible":false,"extensions":["mkv","mk3d","mks"]},"video/x-mng":{"source":"apache","extensions":["mng"]},"video/x-ms-asf":{"source":"apache","extensions":["asf","asx"]},"video/x-ms-vob":{"source":"apache","extensions":["vob"]},"video/x-ms-wm":{"source":"apache","extensions":["wm"]},"video/x-ms-wmv":{"source":"apache","compressible":false,"extensions":["wmv"]},"video/x-ms-wmx":{"source":"apache","extensions":["wmx"]},"video/x-ms-wvx":{"source":"apache","extensions":["wvx"]},"video/x-msvideo":{"source":"apache","extensions":["avi"]},"video/x-sgi-movie":{"source":"apache","extensions":["movie"]},"video/x-smv":{"source":"apache","extensions":["smv"]},"x-conference/x-cooltalk":{"source":"apache","extensions":["ice"]},"x-shader/x-fragment":{"compressible":true},"x-shader/x-vertex":{"compressible":true}}')}
/***/
/******/},a={};
/************************************************************************/
/******/ // The module cache
/******/
/******/
/******/ // The require function
/******/function i(n){
/******/ // Check if module is in cache
/******/var t=a[n];
/******/if(void 0!==t)
/******/return t.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var s=a[n]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return e[n](s,s.exports,i),s.exports;
/******/}
/******/
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/i.n=e=>{
/******/var a=e&&e.__esModule?
/******/()=>e.default
/******/:()=>e
/******/;
/******/return i.d(a,{a}),a;
/******/},
/******/ // define getter functions for harmony exports
/******/i.d=(e,a)=>{
/******/for(var n in a)
/******/i.o(a,n)&&!i.o(e,n)&&
/******/Object.defineProperty(e,n,{enumerable:!0,get:a[n]})
/******/;
/******/},
/******/i.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a)
/******/,
/******/ // define __esModule on exports
/******/i.r=e=>{
/******/"undefined"!=typeof Symbol&&Symbol.toStringTag&&
/******/Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})
/******/,Object.defineProperty(e,"__esModule",{value:!0})}
/******/;
/******/
/************************************************************************/
var n={};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(()=>{"use strict";i.r(n),
/* harmony export */i.d(n,{
/* harmony export */main:()=>/* binding */o
/* harmony export */});
/* harmony import */var e=i(2505),a=i.n(e),t=i(4476),s=i(5498);
/* harmony import */const o=async({parameters:{waitForSearchIndexUpdate:e=!1}})=>{const i="pat-na1-4dd316d2-5666-4a2c-af82-a1d77cecd1e4";const n=await a().post("https://api.hubapi.com/crm/v3/objects/contacts",{properties:{}},{headers:{Authorization:`Bearer ${i}`,"Content-Type":"application/json"}}),o=t.z.object({id:t.z.string(),properties:t.z.record(t.z.unknown()),createdAt:t.z.string(),updatedAt:t.z.string(),archived:t.z.boolean()}).safeParse(n.data);if(!o.success)throw console.error("Unexpected createContact response:",n.data),console.error("Zod error:",o.error),Error("Failed to create contact (invalid response)");const r=o.data.id;if(e)try{await async function(e,a,i=15){console.info(`Waiting for contact ${e} to appear in search index...`);let n=0;for(;n<i;){n+=1,console.info(`Calling fetchContactsMain for contact ${e} (attempt ${n})...`);const a=(await(0,s.main)({parameters:{pageInfo:{offset:0,limit:5},orderBy:[{propertyName:"email",ascending:!0},{propertyName:"hs_createdate",ascending:!0}]}})).contacts.find((({_metadata:a})=>a.id===e));if(a)return void console.log(`Found contact ${e} in search index! Last modified at ${a.lastmodifieddate}`);await new Promise((e=>setTimeout(e,500)))}throw new Error(`Timed out waiting for contact ${e} to appear in search index.`)}(r)}catch(e){console.error(`Contact ${r} did not show up in search within the time limit.`)}return{id:r}}})(),module.exports=n})
/******/();