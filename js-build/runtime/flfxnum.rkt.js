import * as $rjs_core from './core.js';import * as M1 from "./lib.rkt.js";var fl_times_ = M1.Core.attachProcedureArity(M1.Core.Number.mul,0);var fl_by_ = M1.Core.attachProcedureArity(M1.Core.Number.div,1);var fl_plus_ = M1.Core.attachProcedureArity(M1.Core.Number.add,0);var fl_ = M1.Core.attachProcedureArity(M1.Core.Number.sub,1);var fl_lt_ = M1.Core.attachProcedureArity(M1.Core.Number.lt,1);var fl_gt_ = M1.Core.attachProcedureArity(M1.Core.Number.gt,1);var fl_lt__eq_ = M1.Core.attachProcedureArity(M1.Core.Number.lte,1);var fl_gt__eq_ = M1.Core.attachProcedureArity(M1.Core.Number.gte,1);var fl_eq_ = M1.Core.attachProcedureArity(M1.Core.Number.equals,1);var flabs = Math.abs;var flmin = Math.min;var flmax = Math.max;var flround = Math.round;var flfloor = Math.floor;var flceiling = Math.ceil;var fltruncate = Math.trunc;var flsin = Math.sin;var flcos = Math.cos;var fltan = Math.tan;var flasin = Math.asin;var flacos = Math.acos;var flatan = Math.atan;var fllog = Math.log;var flexp = Math.exp;var flsqrt = Math.sqrt;var flexpt = Math.pow;var fx_plus_ = function(a909, b910) {return (a909+b910)|0;};var fx_ = function(a911, b912) {return (a911-b912)|0;};var fx_times_ = function(a913, b914) {return (a913*b914)|0;};var fxquotient = function(a915, b916) {return (a915/b916)|0;};var fxremainder = function(a917, b918) {return (a917%b918)|0;};var fxmodulo = function(a919, b920) {var remainder921 = a919%b920;if ((remainder921>=0)!==false) {var if_res409 = remainder921;} else {var if_res409 = remainder921+b920;}return Math.floor(if_res409);};var fxabs = function(a922) {return Math.abs(a922);};var fx_eq_ = function(a923, b924) {return a923===b924;};var fx_lt_ = function(a925, b926) {return a925<b926;};var fx_lt__eq_ = function(a927, b928) {return a927<=b928;};var fx_gt_ = function(a929, b930) {return a929>b930;};var fx_gt__eq_ = function(a931, b932) {return a931>=b932;};var fxmin = function(a933, b934) {if ((a933<b934)!==false) {var if_res410 = a933;} else {var if_res410 = b934;}return if_res410;};var fxmax = function(a935, b936) {if ((a935>b936)!==false) {var if_res411 = b936;} else {var if_res411 = a935;}return if_res411;};var fxrshift = function(a937, b938) {return (a937>>b938)|0;};var fxlshift = function(a939, b940) {return (a939<<b940)|0;};var fxand = function(a941, b942) {return (a941&&b942)|0;};var fxior = function(a943, b944) {return (a943||b944)|0;};var fxxor = function(a945, b946) {return (a945^b946)|0;};var fxnot = M1.Core.bitwiseNot;var __rjs_quoted__ = {};export { __rjs_quoted__,fl_times_,fl_by_,fl_plus_,fl_,fl_lt_,fl_gt_,fl_lt__eq_,fl_gt__eq_,fl_eq_,flabs,flmin,flmax,flround,flfloor,flceiling,fltruncate,flsin,flcos,fltan,flasin,flacos,flatan,fllog,flexp,flsqrt,flexpt,fx_plus_,fx_,fx_times_,fxquotient,fxremainder,fxmodulo,fxabs,fx_eq_,fx_lt_,fx_lt__eq_,fx_gt_,fx_gt__eq_,fxmin,fxmax,fxrshift,fxlshift,fxand,fxior,fxxor,fxnot };