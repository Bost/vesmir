import * as $rjs_core from '../../../runtime/core.js';import * as M0 from "../../../runtime/kernel.rkt.js";import * as M1 from "../../../runtime/core.rkt.js";M1.__rjs_quoted__.___declare;$rjs_core.Keyword.make("cross-phase-persistent");var reverse = function(l896) {if (M0.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference"))!==false) {var if_res404 = M0.rvoid();} else {if (M0.list_p(l896)!==false) {var if_res403 = M0.rvoid();} else {var if_res403 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("reverse"),$rjs_core.UString.make("list?"),l896);}var if_res404 = if_res403;}if_res404;var loop897 = function(a898, l899) {if (M0.null_p(l899)!==false) {var if_res405 = a898;} else {var if_res405 = loop897(M0.cons(M0.car(l899),a898),M0.cdr(l899));}return if_res405;};return loop897(M0.rnull,l896);};var __rjs_quoted__ = {};export { __rjs_quoted__,reverse as alt_reverse };