import * as $rjs_core from '../../../runtime/core.js';import * as M0 from "../../../runtime/kernel.rkt.js";import * as M1 from "./kw.rkt.js";import * as M2 from "./map.rkt.js";import * as M3 from "./pre-base.rkt.js";import * as M4 from "./sort.rkt.js";import * as M5 from "../../../runtime/unsafe.rkt.js";import * as M6 from "./reverse.rkt.js";var sort = function(cache_keys_p2902, key1903, lst5904, less_p6905) {var lst906 = lst5904;var less_p907 = less_p6905;if (false!==false) {var if_res407 = false;} else {var if_res407 = key1903;}var getkey908 = if_res407;if (false!==false) {var if_res408 = false;} else {var if_res408 = cache_keys_p2902;}var cache_keys_p909 = if_res408;if (M0.list_p(lst906)!==false) {var if_res409 = M0.rvoid();} else {var if_res409 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("sort"),$rjs_core.UString.make("list?"),lst906);}if_res409;if (M0.procedure_p(less_p907)!==false) {var if_res410 = M0.procedure_arity_includes_p(less_p907,2);} else {var if_res410 = false;}if (if_res410!==false) {var if_res411 = M0.rvoid();} else {var if_res411 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("sort"),$rjs_core.UString.make("(any/c any/c . -> . any/c)"),less_p907);}if_res411;if (getkey908!==false) {if (M0.procedure_p(getkey908)!==false) {var if_res412 = M0.procedure_arity_includes_p(getkey908,1);} else {var if_res412 = false;}var if_res413 = M0.not(if_res412);} else {var if_res413 = false;}if (if_res413!==false) {var if_res414 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("sort"),$rjs_core.UString.make("(any/c . -> . any/c)"),getkey908);} else {var if_res414 = M0.rvoid();}if_res414;if (getkey908!==false) {var if_res415 = M4.sort(lst906,less_p907,getkey908,cache_keys_p909);} else {var if_res415 = M4.sort(lst906,less_p907);}return if_res415;};var sort901 = function(given_kws910, given_args911, lst5912, less_p6913) {if (M0.pair_p(given_kws910)!==false) {var if_res416 = M0.eq_p($rjs_core.Keyword.make("cache-keys?"),M0.car(given_kws910));} else {var if_res416 = false;}var cache_keys_p4914 = if_res416;if (cache_keys_p4914!==false) {var if_res417 = M0.car(given_args911);} else {var if_res417 = false;}var cache_keys_p2915 = if_res417;if (cache_keys_p4914!==false) {var if_res418 = M0.cdr(given_kws910);} else {var if_res418 = given_kws910;}var kws63282916 = if_res418;if (cache_keys_p4914!==false) {var if_res419 = M0.cdr(given_args911);} else {var if_res419 = given_args911;}var kw_args63283917 = if_res419;var key3918 = M0.pair_p(kws63282916);if (key3918!==false) {var if_res420 = M0.car(kw_args63283917);} else {var if_res420 = false;}var key1919 = if_res420;return sort(cache_keys_p2915,key1919,lst5912,less_p6913);};var cl424 = function(given_kws926, given_args927, lst928, less_p929) {return sort901(given_kws926,given_args927,lst928,less_p929);};var temp426 = $rjs_core.attachProcedureArity(function() {var fixed_lam425 = {'4':cl424}[arguments.length];if (fixed_lam425!==undefined) {return fixed_lam425.apply(null,arguments);} else {return M0.error($rjs_core.UString.make("case-lambda: invalid case"));}},[4]);var temp423 = $rjs_core.Pair.makeList($rjs_core.Keyword.make("cache-keys?"),$rjs_core.Keyword.make("key"));var cl421 = function(lst930, less_p931) {return sort901(M0.rnull,M0.rnull,lst930,less_p931);};var sort7 = M1.__rjs_quoted__.make_optional_keyword_procedure(function(given_kws920, given_argc921) {if (M0.__eq_(given_argc921,4)!==false) {var l163284922 = given_kws920;if (M0.null_p(l163284922)!==false) {var if_res428 = l163284922;} else {if (M0.eq_p(M0.car(l163284922),$rjs_core.Keyword.make("cache-keys?"))!==false) {var if_res427 = M0.cdr(l163284922);} else {var if_res427 = l163284922;}var if_res428 = if_res427;}var l163284923 = if_res428;var l163285924 = l163284923;if (M0.null_p(l163285924)!==false) {var if_res430 = l163285924;} else {if (M0.eq_p(M0.car(l163285924),$rjs_core.Keyword.make("key"))!==false) {var if_res429 = M0.cdr(l163285924);} else {var if_res429 = l163285924;}var if_res430 = if_res429;}var l163285925 = if_res430;var if_res431 = M0.null_p(l163285925);} else {var if_res431 = false;}return if_res431;},temp426,M0.rnull,temp423,$rjs_core.attachProcedureArity(function() {var fixed_lam422 = {'2':cl421}[arguments.length];if (fixed_lam422!==undefined) {return fixed_lam422.apply(null,arguments);} else {return M0.error($rjs_core.UString.make("case-lambda: invalid case"));}},[2]));var do_remove = function(who932, item933, list934, equal_p935) {if (M0.list_p(list934)!==false) {var if_res432 = M0.rvoid();} else {var if_res432 = M0.raise_argument_error(who932,$rjs_core.UString.make("list?"),list934);}if_res432;var loop936 = function(list937) {if (M0.null_p(list937)!==false) {var if_res435 = list937;} else {if (equal_p935(item933,M0.car(list937))!==false) {var if_res434 = M0.cdr(list937);} else {var next938 = loop936(M0.cdr(list937));if (M0.eq_p(next938,M0.cdr(list937))!==false) {var if_res433 = list937;} else {var if_res433 = M0.cons(M0.car(list937),next938);}var if_res434 = if_res433;}var if_res435 = if_res434;}return if_res435;};return loop936(list934);};var cl436 = function(item939, list940) {return do_remove($rjs_core.PrimitiveSymbol.make("remove"),item939,list940,M0.equal_p);};var cl437 = function(item941, list942, equal_p943) {if (M0.procedure_p(equal_p943)!==false) {var if_res439 = M0.procedure_arity_includes_p(equal_p943,2);} else {var if_res439 = false;}if (if_res439!==false) {var if_res440 = M0.rvoid();} else {var if_res440 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("remove"),$rjs_core.UString.make("(any/c any/c . -> . any/c)"),equal_p943);}if_res440;return do_remove($rjs_core.PrimitiveSymbol.make("remove"),item941,list942,equal_p943);};var remove = $rjs_core.attachProcedureArity(function() {var fixed_lam438 = {'2':cl436,'3':cl437}[arguments.length];if (fixed_lam438!==undefined) {return fixed_lam438.apply(null,arguments);} else {return M0.error($rjs_core.UString.make("case-lambda: invalid case"));}},[2,3]);var remq = function(item944, list945) {return do_remove($rjs_core.PrimitiveSymbol.make("remq"),item944,list945,M0.eq_p);};var remv = function(item946, list947) {return do_remove($rjs_core.PrimitiveSymbol.make("remv"),item946,list947,M0.eqv_p);};var do_remove_times_ = function(who948, l949, r950, equal_p951) {if (M0.list_p(l949)!==false) {var if_res441 = M0.rvoid();} else {var if_res441 = M0.raise_argument_error(who948,$rjs_core.UString.make("list?"),l949);}if_res441;if (M0.list_p(r950)!==false) {var if_res442 = M0.rvoid();} else {var if_res442 = M0.raise_argument_error(who948,$rjs_core.UString.make("list?"),r950);}if_res442;var rloop952 = function(r953) {if (M0.null_p(r953)!==false) {var if_res446 = r953;} else {var first_r954 = M0.car(r953);var loop955 = function(l_rest956) {if (M0.null_p(l_rest956)!==false) {var next957 = rloop952(M0.cdr(r953));if (M0.eq_p(next957,M0.cdr(r953))!==false) {var if_res443 = r953;} else {var if_res443 = M0.cons(first_r954,next957);}var if_res445 = if_res443;} else {if (equal_p951(M0.car(l_rest956),first_r954)!==false) {var if_res444 = rloop952(M0.cdr(r953));} else {var if_res444 = loop955(M0.cdr(l_rest956));}var if_res445 = if_res444;}return if_res445;};var if_res446 = loop955(l949);}return if_res446;};return rloop952(r950);};var cl447 = function(l958, r959) {return do_remove_times_($rjs_core.PrimitiveSymbol.make("remove*"),l958,r959,M0.equal_p);};var cl448 = function(l960, r961, equal_p962) {if (M0.procedure_p(equal_p962)!==false) {var if_res450 = M0.procedure_arity_includes_p(equal_p962,2);} else {var if_res450 = false;}if (if_res450!==false) {var if_res451 = M0.rvoid();} else {var if_res451 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("remove*"),$rjs_core.UString.make("(any/c any/c . -> . any/c)"),equal_p962);}if_res451;return do_remove_times_($rjs_core.PrimitiveSymbol.make("remove*"),l960,r961,equal_p962);};var remove_times_ = $rjs_core.attachProcedureArity(function() {var fixed_lam449 = {'2':cl447,'3':cl448}[arguments.length];if (fixed_lam449!==undefined) {return fixed_lam449.apply(null,arguments);} else {return M0.error($rjs_core.UString.make("case-lambda: invalid case"));}},[2,3]);var remq_times_ = function(l963, r964) {return do_remove_times_($rjs_core.PrimitiveSymbol.make("remq*"),l963,r964,M0.eq_p);};var remv_times_ = function(l965, r966) {return do_remove_times_($rjs_core.PrimitiveSymbol.make("remv*"),l965,r966,M0.eqv_p);};var memf = function(f967, list968) {if (M0.procedure_p(f967)!==false) {var if_res452 = M0.procedure_arity_includes_p(f967,1);} else {var if_res452 = false;}if (if_res452!==false) {var if_res453 = M0.rvoid();} else {var if_res453 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("memf"),$rjs_core.UString.make("(any/c . -> any/c)"),f967);}if_res453;var loop969 = function(l970) {if (M0.null_p(l970)!==false) {var if_res456 = false;} else {if (M0.not(M0.pair_p(l970))!==false) {var if_res455 = M0.raise_mismatch_error($rjs_core.PrimitiveSymbol.make("memf"),$rjs_core.UString.make("not a proper list: "),list968);} else {if (f967(M0.car(l970))!==false) {var if_res454 = l970;} else {var if_res454 = loop969(M0.cdr(l970));}var if_res455 = if_res454;}var if_res456 = if_res455;}return if_res456;};return loop969(list968);};var findf = function(f971, list972) {if (M0.procedure_p(f971)!==false) {var if_res457 = M0.procedure_arity_includes_p(f971,1);} else {var if_res457 = false;}if (if_res457!==false) {var if_res458 = M0.rvoid();} else {var if_res458 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("findf"),$rjs_core.UString.make("(any/c . -> . any/c)"),f971);}if_res458;var loop973 = function(l974) {if (M0.null_p(l974)!==false) {var if_res461 = false;} else {if (M0.not(M0.pair_p(l974))!==false) {var if_res460 = M0.raise_mismatch_error($rjs_core.PrimitiveSymbol.make("findf"),$rjs_core.UString.make("not a proper list: "),list972);} else {var a975 = M0.car(l974);if (f971(a975)!==false) {var if_res459 = a975;} else {var if_res459 = loop973(M0.cdr(l974));}var if_res460 = if_res459;}var if_res461 = if_res460;}return if_res461;};return loop973(list972);};var bad_list = function(who976, orig_l977) {return M0.raise_mismatch_error(who976,$rjs_core.UString.make("not a proper list: "),orig_l977);};var bad_item = function(who978, a979, orig_l980) {return M0.raise_arguments_error(who978,$rjs_core.UString.make("non-pair found in list"),$rjs_core.UString.make("non-pair"),a979,$rjs_core.UString.make("list"),orig_l980);};var assq981 = function(x985, l986) {var loop987 = function(l988, t989) {if (M0.pair_p(l988)!==false) {var a990 = M5.unsafe_car(l988);if (M0.pair_p(a990)!==false) {if (M0.eq_p(x985,M5.unsafe_car(a990))!==false) {var if_res467 = a990;} else {var l991 = M5.unsafe_cdr(l988);if (M0.pair_p(l991)!==false) {var a992 = M5.unsafe_car(l991);if (M0.pair_p(a992)!==false) {if (M0.eq_p(x985,M5.unsafe_car(a992))!==false) {var if_res463 = a992;} else {var t993 = M5.unsafe_cdr(t989);var l994 = M5.unsafe_cdr(l991);if (M0.eq_p(l994,t993)!==false) {var if_res462 = bad_list($rjs_core.PrimitiveSymbol.make("assq"),l986);} else {var if_res462 = loop987(l994,t993);}var if_res463 = if_res462;}var if_res464 = if_res463;} else {var if_res464 = bad_item($rjs_core.PrimitiveSymbol.make("assq"),a992,l986);}var if_res466 = if_res464;} else {if (M0.null_p(l991)!==false) {var if_res465 = false;} else {var if_res465 = bad_list($rjs_core.PrimitiveSymbol.make("assq"),l986);}var if_res466 = if_res465;}var if_res467 = if_res466;}var if_res468 = if_res467;} else {var if_res468 = bad_item($rjs_core.PrimitiveSymbol.make("assq"),a990,l986);}var if_res470 = if_res468;} else {if (M0.null_p(l988)!==false) {var if_res469 = false;} else {var if_res469 = bad_list($rjs_core.PrimitiveSymbol.make("assq"),l986);}var if_res470 = if_res469;}return if_res470;};return loop987(l986,l986);};var assv982 = function(x995, l996) {var loop997 = function(l998, t999) {if (M0.pair_p(l998)!==false) {var a1000 = M5.unsafe_car(l998);if (M0.pair_p(a1000)!==false) {if (M0.eqv_p(x995,M5.unsafe_car(a1000))!==false) {var if_res476 = a1000;} else {var l1001 = M5.unsafe_cdr(l998);if (M0.pair_p(l1001)!==false) {var a1002 = M5.unsafe_car(l1001);if (M0.pair_p(a1002)!==false) {if (M0.eqv_p(x995,M5.unsafe_car(a1002))!==false) {var if_res472 = a1002;} else {var t1003 = M5.unsafe_cdr(t999);var l1004 = M5.unsafe_cdr(l1001);if (M0.eq_p(l1004,t1003)!==false) {var if_res471 = bad_list($rjs_core.PrimitiveSymbol.make("assv"),l996);} else {var if_res471 = loop997(l1004,t1003);}var if_res472 = if_res471;}var if_res473 = if_res472;} else {var if_res473 = bad_item($rjs_core.PrimitiveSymbol.make("assv"),a1002,l996);}var if_res475 = if_res473;} else {if (M0.null_p(l1001)!==false) {var if_res474 = false;} else {var if_res474 = bad_list($rjs_core.PrimitiveSymbol.make("assv"),l996);}var if_res475 = if_res474;}var if_res476 = if_res475;}var if_res477 = if_res476;} else {var if_res477 = bad_item($rjs_core.PrimitiveSymbol.make("assv"),a1000,l996);}var if_res479 = if_res477;} else {if (M0.null_p(l998)!==false) {var if_res478 = false;} else {var if_res478 = bad_list($rjs_core.PrimitiveSymbol.make("assv"),l996);}var if_res479 = if_res478;}return if_res479;};return loop997(l996,l996);};var cl480 = function(x1005, l1006) {var loop1007 = function(l1008, t1009) {if (M0.pair_p(l1008)!==false) {var a1010 = M5.unsafe_car(l1008);if (M0.pair_p(a1010)!==false) {if (M0.equal_p(x1005,M5.unsafe_car(a1010))!==false) {var if_res488 = a1010;} else {var l1011 = M5.unsafe_cdr(l1008);if (M0.pair_p(l1011)!==false) {var a1012 = M5.unsafe_car(l1011);if (M0.pair_p(a1012)!==false) {if (M0.equal_p(x1005,M5.unsafe_car(a1012))!==false) {var if_res484 = a1012;} else {var t1013 = M5.unsafe_cdr(t1009);var l1014 = M5.unsafe_cdr(l1011);if (M0.eq_p(l1014,t1013)!==false) {var if_res483 = bad_list($rjs_core.PrimitiveSymbol.make("assoc"),l1006);} else {var if_res483 = loop1007(l1014,t1013);}var if_res484 = if_res483;}var if_res485 = if_res484;} else {var if_res485 = bad_item($rjs_core.PrimitiveSymbol.make("assoc"),a1012,l1006);}var if_res487 = if_res485;} else {if (M0.null_p(l1011)!==false) {var if_res486 = false;} else {var if_res486 = bad_list($rjs_core.PrimitiveSymbol.make("assoc"),l1006);}var if_res487 = if_res486;}var if_res488 = if_res487;}var if_res489 = if_res488;} else {var if_res489 = bad_item($rjs_core.PrimitiveSymbol.make("assoc"),a1010,l1006);}var if_res491 = if_res489;} else {if (M0.null_p(l1008)!==false) {var if_res490 = false;} else {var if_res490 = bad_list($rjs_core.PrimitiveSymbol.make("assoc"),l1006);}var if_res491 = if_res490;}return if_res491;};return loop1007(l1006,l1006);};var cl481 = function(x1015, l1016, is_equal_p1017) {if (M0.procedure_p(is_equal_p1017)!==false) {var if_res492 = M0.procedure_arity_includes_p(is_equal_p1017,2);} else {var if_res492 = false;}if (if_res492!==false) {var if_res493 = M0.rvoid();} else {var if_res493 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("assoc"),$rjs_core.UString.make("(any/c any/c . -> . any/c)"),is_equal_p1017);}if_res493;var loop1018 = function(l1019, t1020) {if (M0.pair_p(l1019)!==false) {var a1021 = M5.unsafe_car(l1019);if (M0.pair_p(a1021)!==false) {if (is_equal_p1017(x1015,M5.unsafe_car(a1021))!==false) {var if_res499 = a1021;} else {var l1022 = M5.unsafe_cdr(l1019);if (M0.pair_p(l1022)!==false) {var a1023 = M5.unsafe_car(l1022);if (M0.pair_p(a1023)!==false) {if (is_equal_p1017(x1015,M5.unsafe_car(a1023))!==false) {var if_res495 = a1023;} else {var t1024 = M5.unsafe_cdr(t1020);var l1025 = M5.unsafe_cdr(l1022);if (M0.eq_p(l1025,t1024)!==false) {var if_res494 = bad_list($rjs_core.PrimitiveSymbol.make("assoc"),l1016);} else {var if_res494 = loop1018(l1025,t1024);}var if_res495 = if_res494;}var if_res496 = if_res495;} else {var if_res496 = bad_item($rjs_core.PrimitiveSymbol.make("assoc"),a1023,l1016);}var if_res498 = if_res496;} else {if (M0.null_p(l1022)!==false) {var if_res497 = false;} else {var if_res497 = bad_list($rjs_core.PrimitiveSymbol.make("assoc"),l1016);}var if_res498 = if_res497;}var if_res499 = if_res498;}var if_res500 = if_res499;} else {var if_res500 = bad_item($rjs_core.PrimitiveSymbol.make("assoc"),a1021,l1016);}var if_res502 = if_res500;} else {if (M0.null_p(l1019)!==false) {var if_res501 = false;} else {var if_res501 = bad_list($rjs_core.PrimitiveSymbol.make("assoc"),l1016);}var if_res502 = if_res501;}return if_res502;};return loop1018(l1016,l1016);};var assoc983 = $rjs_core.attachProcedureArity(function() {var fixed_lam482 = {'2':cl480,'3':cl481}[arguments.length];if (fixed_lam482!==undefined) {return fixed_lam482.apply(null,arguments);} else {return M0.error($rjs_core.UString.make("case-lambda: invalid case"));}},[2,3]);var assf984 = function(f1026, l1027) {if (M0.procedure_p(f1026)!==false) {var if_res503 = M0.procedure_arity_includes_p(f1026,1);} else {var if_res503 = false;}if (if_res503!==false) {var if_res504 = M0.rvoid();} else {var if_res504 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("assf"),$rjs_core.UString.make("(any/c . -> . any/c)"),f1026);}if_res504;var loop1028 = function(l1029, t1030) {if (M0.pair_p(l1029)!==false) {var a1031 = M5.unsafe_car(l1029);if (M0.pair_p(a1031)!==false) {if ((function(_1032, a1033) {return f1026(a1033);})(false,M5.unsafe_car(a1031))!==false) {var if_res510 = a1031;} else {var l1034 = M5.unsafe_cdr(l1029);if (M0.pair_p(l1034)!==false) {var a1035 = M5.unsafe_car(l1034);if (M0.pair_p(a1035)!==false) {if ((function(_1036, a1037) {return f1026(a1037);})(false,M5.unsafe_car(a1035))!==false) {var if_res506 = a1035;} else {var t1038 = M5.unsafe_cdr(t1030);var l1039 = M5.unsafe_cdr(l1034);if (M0.eq_p(l1039,t1038)!==false) {var if_res505 = bad_list($rjs_core.PrimitiveSymbol.make("assf"),l1027);} else {var if_res505 = loop1028(l1039,t1038);}var if_res506 = if_res505;}var if_res507 = if_res506;} else {var if_res507 = bad_item($rjs_core.PrimitiveSymbol.make("assf"),a1035,l1027);}var if_res509 = if_res507;} else {if (M0.null_p(l1034)!==false) {var if_res508 = false;} else {var if_res508 = bad_list($rjs_core.PrimitiveSymbol.make("assf"),l1027);}var if_res509 = if_res508;}var if_res510 = if_res509;}var if_res511 = if_res510;} else {var if_res511 = bad_item($rjs_core.PrimitiveSymbol.make("assf"),a1031,l1027);}var if_res513 = if_res511;} else {if (M0.null_p(l1029)!==false) {var if_res512 = false;} else {var if_res512 = bad_list($rjs_core.PrimitiveSymbol.make("assf"),l1027);}var if_res513 = if_res512;}return if_res513;};return loop1028(l1027,l1027);};var let_result514 = M0.values(assq981,assv982,assoc983,assf984);var assq = let_result514.getAt(0);var assv = let_result514.getAt(1);var assoc = let_result514.getAt(2);var assf = let_result514.getAt(3);var mapadd = function(f1040, l1041, last1042) {var loop1043 = function(l1044) {if (M0.null_p(l1044)!==false) {var if_res515 = M0.list(last1042);} else {var if_res515 = M0.cons(f1040(M0.car(l1044)),loop1043(M0.cdr(l1044)));}return if_res515;};return loop1043(l1041);};var check_fold = function(name1045, proc1046, init1047, l1048, more1049) {if (M0.procedure_p(proc1046)!==false) {var if_res516 = M0.rvoid();} else {var if_res516 = M0.apply(M0.raise_argument_error,name1045,$rjs_core.UString.make("procedure?"),0,proc1046,init1047,l1048,more1049);}if_res516;if (M0.list_p(l1048)!==false) {var if_res517 = M0.rvoid();} else {var if_res517 = M0.apply(M0.raise_argument_error,name1045,$rjs_core.UString.make("list?"),2,proc1046,init1047,l1048,more1049);}if_res517;if (M0.null_p(more1049)!==false) {if (M0.procedure_arity_includes_p(proc1046,2)!==false) {var if_res518 = M0.rvoid();} else {var if_res518 = M0.raise_mismatch_error(name1045,$rjs_core.UString.make("given procedure does not accept 2 arguments: "),proc1046);}var if_res523 = if_res518;} else {var len1050 = M0.length(l1048);var loop1051 = function(remaining1052, n1053) {if (M0.null_p(remaining1052)!==false) {var if_res521 = M0.rvoid();} else {if (M0.list_p(M0.car(remaining1052))!==false) {var if_res519 = M0.rvoid();} else {var if_res519 = M0.apply(M0.raise_argument_error,name1045,$rjs_core.UString.make("list?"),n1053,proc1046,init1047,l1048,more1049);}if_res519;if (M0.__eq_(len1050,M0.length(M0.car(remaining1052)))!==false) {var if_res520 = M0.rvoid();} else {var if_res520 = M0.raise_mismatch_error(name1045,$rjs_core.UString.make("given list does not have the same size as the first list: "),M0.car(remaining1052));}if_res520;var if_res521 = loop1051(M0.cdr(remaining1052),M0.add1(n1053));}return if_res521;};loop1051(more1049,3);if (M0.procedure_arity_includes_p(proc1046,2+M0.length(more1049))!==false) {var if_res522 = M0.rvoid();} else {var if_res522 = M0.raise_mismatch_error(name1045,M0.format($rjs_core.UString.make("given procedure does not accept ~a arguments: "),2+M0.length(more1049)),proc1046);}var if_res523 = if_res522;}return if_res523;};var cl524 = function(f1054, init1055, l1056) {check_fold($rjs_core.PrimitiveSymbol.make("foldl"),f1054,init1055,l1056,M0.rnull);var loop1057 = function(init1058, l1059) {if (M0.null_p(l1059)!==false) {var if_res528 = init1058;} else {var if_res528 = loop1057(f1054(M0.car(l1059),init1058),M0.cdr(l1059));}return if_res528;};return loop1057(init1055,l1056);};var cl525 = $rjs_core.attachProcedureArity(function(f1060, init1061, l1062, ...ls1063529) {var ls1063 = $rjs_core.Pair.listFromArray(ls1063529);check_fold($rjs_core.PrimitiveSymbol.make("foldl"),f1060,init1061,l1062,ls1063);var loop1064 = function(init1065, ls1066) {if (M0.pair_p(M0.car(ls1066))!==false) {var if_res530 = loop1064(M0.apply(f1060,mapadd(M0.car,ls1066,init1065)),M2.map(M0.cdr,ls1066));} else {var if_res530 = init1065;}return if_res530;};return loop1064(init1061,M0.cons(l1062,ls1063));});var foldl = $rjs_core.attachProcedureArity(function() {var fixed_lam526 = {'3':cl524}[arguments.length];if (fixed_lam526!==undefined) {return fixed_lam526.apply(null,arguments);} else {if (M0.__gt__eq_(cl525.length,1)!==false) {var if_res527 = cl525.apply(null,arguments);} else {var if_res527 = M0.error($rjs_core.UString.make("case-lambda: invalid case"));}return if_res527;}},[M0.make_arity_at_least(3)]);var cl531 = function(f1067, init1068, l1069) {check_fold($rjs_core.PrimitiveSymbol.make("foldr"),f1067,init1068,l1069,M0.rnull);var loop1070 = function(init1071, l1072) {if (M0.null_p(l1072)!==false) {var if_res535 = init1071;} else {var if_res535 = f1067(M0.car(l1072),loop1070(init1071,M0.cdr(l1072)));}return if_res535;};return loop1070(init1068,l1069);};var cl532 = $rjs_core.attachProcedureArity(function(f1073, init1074, l1075, ...ls1076536) {var ls1076 = $rjs_core.Pair.listFromArray(ls1076536);check_fold($rjs_core.PrimitiveSymbol.make("foldr"),f1073,init1074,l1075,ls1076);var loop1077 = function(ls1078) {if (M0.pair_p(M0.car(ls1078))!==false) {var if_res537 = M0.apply(f1073,mapadd(M0.car,ls1078,loop1077(M2.map(M0.cdr,ls1078))));} else {var if_res537 = init1074;}return if_res537;};return loop1077(M0.cons(l1075,ls1076));});var foldr = $rjs_core.attachProcedureArity(function() {var fixed_lam533 = {'3':cl531}[arguments.length];if (fixed_lam533!==undefined) {return fixed_lam533.apply(null,arguments);} else {if (M0.__gt__eq_(cl532.length,1)!==false) {var if_res534 = cl532.apply(null,arguments);} else {var if_res534 = M0.error($rjs_core.UString.make("case-lambda: invalid case"));}return if_res534;}},[M0.make_arity_at_least(3)]);var filter = function(f1079, list1080) {if (M0.procedure_p(f1079)!==false) {var if_res538 = M0.procedure_arity_includes_p(f1079,1);} else {var if_res538 = false;}if (if_res538!==false) {var if_res539 = M0.rvoid();} else {var if_res539 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("filter"),$rjs_core.UString.make("(any/c . -> . any/c)"),f1079);}if_res539;if (M0.list_p(list1080)!==false) {var if_res540 = M0.rvoid();} else {var if_res540 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("filter"),$rjs_core.UString.make("list?"),list1080);}if_res540;var loop1081 = function(l1082, result1083) {if (M0.null_p(l1082)!==false) {var if_res543 = M6.alt_reverse(result1083);} else {var temp542 = M0.cdr(l1082);if (f1079(M0.car(l1082))!==false) {var if_res541 = M0.cons(M0.car(l1082),result1083);} else {var if_res541 = result1083;}var if_res543 = loop1081(temp542,if_res541);}return if_res543;};return loop1081(list1080,M0.rnull);};var build_vector = function(n1084, fcn1085) {if (M0.exact_nonnegative_integer_p(n1084)!==false) {var if_res544 = M0.rvoid();} else {var if_res544 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("build-vector"),$rjs_core.UString.make("exact-nonnegative-integer?"),n1084);}if_res544;if (M0.procedure_p(fcn1085)!==false) {var if_res545 = M0.procedure_arity_includes_p(fcn1085,1);} else {var if_res545 = false;}if (if_res545!==false) {var if_res546 = M0.rvoid();} else {var if_res546 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("build-vector"),$rjs_core.UString.make("(exact-nonnegative-integer? . -> . any/c)"),fcn1085);}if_res546;var vec1086 = M0.make_vector(n1084);var loop1087 = function(i1088) {if (M0.__eq_(i1088,n1084)!==false) {var if_res547 = vec1086;} else {M0.vector_set_bang_(vec1086,i1088,fcn1085(i1088));var if_res547 = loop1087(M0.add1(i1088));}return if_res547;};return loop1087(0);};var build_string = function(n1089, fcn1090) {if (M0.exact_nonnegative_integer_p(n1089)!==false) {var if_res548 = M0.rvoid();} else {var if_res548 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("build-string"),$rjs_core.UString.make("exact-nonnegative-integer?"),n1089);}if_res548;if (M0.procedure_p(fcn1090)!==false) {var if_res549 = M0.procedure_arity_includes_p(fcn1090,1);} else {var if_res549 = false;}if (if_res549!==false) {var if_res550 = M0.rvoid();} else {var if_res550 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("build-string"),$rjs_core.UString.make("(exact-nonnegative-integer? . -> . char?)"),fcn1090);}if_res550;var str1091 = M0.make_string(n1089);var loop1092 = function(i1093) {if (M0.__eq_(i1093,n1089)!==false) {var if_res551 = str1091;} else {M0.string_set_bang_(str1091,i1093,fcn1090(i1093));var if_res551 = loop1092(M0.add1(i1093));}return if_res551;};return loop1092(0);};var build_list = function(n1094, fcn1095) {if (M0.exact_nonnegative_integer_p(n1094)!==false) {var if_res552 = M0.rvoid();} else {var if_res552 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("build-list"),$rjs_core.UString.make("exact-nonnegative-integer?"),n1094);}if_res552;if (M0.procedure_p(fcn1095)!==false) {var if_res553 = M0.procedure_arity_includes_p(fcn1095,1);} else {var if_res553 = false;}if (if_res553!==false) {var if_res554 = M0.rvoid();} else {var if_res554 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("build-list"),$rjs_core.UString.make("(exact-nonnegative-integer? . -> . any/c)"),fcn1095);}if_res554;var recr1096 = function(j1097, i1098) {if (M0.zero_p(i1098)!==false) {var if_res555 = M0.rnull;} else {var if_res555 = M0.cons(fcn1095(j1097),recr1096(M0.add1(j1097),M0.sub1(i1098)));}return if_res555;};return recr1096(0,n1094);};var pipeline11099 = function(f1100, rfuns1101) {return function(x1102) {var loop1103 = function(x1104, f1105, rfuns1106) {if (M0.null_p(rfuns1106)!==false) {var if_res556 = f1105(x1104);} else {var if_res556 = loop1103(f1105(x1104),M0.car(rfuns1106),M0.cdr(rfuns1106));}return if_res556;};return loop1103(x1102,f1100,rfuns1101);};};var pipeline_times_1107 = function(f1108, rfuns1109) {if (M0.eqv_p(1,M0.procedure_arity(f1108))!==false) {var loop1110 = function(f1111, rfuns1112) {if (M0.null_p(rfuns1112)!==false) {var if_res558 = f1111;} else {var fst1113 = M0.car(rfuns1112);if (M0.eqv_p(1,M0.procedure_arity(fst1113))!==false) {var if_res557 = function(x1114) {return fst1113(f1111(x1114));};} else {var if_res557 = function(x1115) {return M0.call_with_values(function() {return f1111(x1115);},fst1113);};}var if_res558 = loop1110(if_res557,M0.cdr(rfuns1112));}return if_res558;};var if_res565 = loop1110(f1108,rfuns1109);} else {var funs1116 = M6.alt_reverse(M0.cons(f1108,rfuns1109));var loop1117 = function(f1118, funs1119) {if (M0.null_p(funs1119)!==false) {var if_res564 = f1118;} else {var fst1120 = M0.car(funs1119);if (M0.eqv_p(1,M0.procedure_arity(f1118))!==false) {if (M0.eqv_p(1,M0.procedure_arity(fst1120))!==false) {var if_res560 = function(x1121) {return f1118(fst1120(x1121));};} else {var if_res560 = $rjs_core.attachProcedureArity(function(...xs1122559) {var xs1122 = $rjs_core.Pair.listFromArray(xs1122559);return f1118(M0.apply(fst1120,xs1122));});}var if_res563 = if_res560;} else {if (M0.eqv_p(1,M0.procedure_arity(fst1120))!==false) {var if_res562 = function(x1123) {return M0.call_with_values(function() {return fst1120(x1123);},f1118);};} else {var if_res562 = $rjs_core.attachProcedureArity(function(...xs1124561) {var xs1124 = $rjs_core.Pair.listFromArray(xs1124561);return M0.call_with_values(function() {return M0.apply(fst1120,xs1124);},f1118);});}var if_res563 = if_res562;}var if_res564 = loop1117(if_res563,M0.cdr(funs1119));}return if_res564;};var if_res565 = loop1117(M0.car(funs1116),M0.cdr(funs1116));}return if_res565;};var simple_compose1126 = function(f1127, g1128) {var arity1129 = M0.procedure_arity(g1128);var let_result566 = M1.procedure_keywords(g1128);var required_kwds1130 = let_result566.getAt(0);var allowed_kwds1131 = let_result566.getAt(1);if (M0.eq_p(1,arity1129)!==false) {var if_res573 = function(x1133) {return f1127(g1128(x1133));};} else {var cl567 = function(x1134) {return f1127(g1128(x1134));};var cl568 = function(x1135, y1136) {return f1127(g1128(x1135,y1136));};var cl569 = $rjs_core.attachProcedureArity(function(...args1137572) {var args1137 = $rjs_core.Pair.listFromArray(args1137572);return f1127(M0.apply(g1128,args1137));});var if_res573 = $rjs_core.attachProcedureArity(function() {var fixed_lam570 = {'1':cl567,'2':cl568}[arguments.length];if (fixed_lam570!==undefined) {return fixed_lam570.apply(null,arguments);} else {if (true!==false) {var if_res571 = cl569.apply(null,arguments);} else {var if_res571 = M0.error($rjs_core.UString.make("case-lambda: invalid case"));}return if_res571;}},[M0.make_arity_at_least(0)]);}var composed1132 = if_res573;if (M0.null_p(allowed_kwds1131)!==false) {var if_res575 = composed1132;} else {var if_res575 = M1.make_keyword_procedure($rjs_core.attachProcedureArity(function(kws1138, kw_args1139, ...xs1140574) {var xs1140 = $rjs_core.Pair.listFromArray(xs1140574);return f1127(M3.keyword_apply(g1128,kws1138,kw_args1139,xs1140));}),composed1132);}return if_res575;};var cl576 = function(f1141) {if (M0.procedure_p(f1141)!==false) {var if_res582 = f1141;} else {var if_res582 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("compose1"),$rjs_core.UString.make("procedure?"),0,f1141);}return if_res582;};var cl577 = function(f1142, g1143) {if (M0.procedure_p(f1142)!==false) {var if_res583 = M0.rvoid();} else {var if_res583 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("compose1"),$rjs_core.UString.make("procedure?"),0,f1142,g1143);}if_res583;if (M0.procedure_p(g1143)!==false) {var if_res584 = M0.rvoid();} else {var if_res584 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("compose1"),$rjs_core.UString.make("procedure?"),1,f1142,g1143);}if_res584;if (M0.procedure_arity_includes_p(f1142,1)!==false) {var if_res585 = M0.rvoid();} else {var if_res585 = M0.apply(M0.raise_argument_error,$rjs_core.PrimitiveSymbol.make("compose1"),$rjs_core.UString.make("(any/c . -> . any/c)"),0,f1142,$rjs_core.Pair.makeList());}if_res585;var let_result586 = M1.procedure_keywords(f1142);var req1144 = let_result586.getAt(0);var _1145 = let_result586.getAt(1);if (M0.null_p(req1144)!==false) {var if_res587 = M0.rvoid();} else {var if_res587 = M0.apply(M0.raise_argument_error,$rjs_core.PrimitiveSymbol.make("compose1"),$rjs_core.UString.make("procedure-with-no-required-keywords?"),0,f1142,$rjs_core.Pair.makeList());}if_res587;return simple_compose1126(f1142,g1143);};var cl578 = function() {return M0.values;};var cl579 = $rjs_core.attachProcedureArity(function(f01146, ...fs01147588) {var fs01147 = $rjs_core.Pair.listFromArray(fs01147588);var loop1148 = function(f1149, fs1150, i1151, rfuns1152) {if (M0.procedure_p(f1149)!==false) {var if_res589 = M0.rvoid();} else {var if_res589 = M0.apply(M0.raise_argument_error,$rjs_core.PrimitiveSymbol.make("compose1"),$rjs_core.UString.make("procedure?"),i1151,f01146,fs01147);}if_res589;if (M0.pair_p(fs1150)!==false) {if (M0.procedure_arity_includes_p(f1149,1)!==false) {var if_res590 = M0.rvoid();} else {var if_res590 = M0.apply(M0.raise_argument_error,$rjs_core.PrimitiveSymbol.make("compose1"),$rjs_core.UString.make("(any/c . -> . any/c)"),i1151,f01146,fs01147);}if_res590;var let_result591 = M1.procedure_keywords(f1149);var req1153 = let_result591.getAt(0);var _1154 = let_result591.getAt(1);if (M0.null_p(req1153)!==false) {var if_res592 = M0.rvoid();} else {var if_res592 = M0.apply(M0.raise_argument_error,$rjs_core.PrimitiveSymbol.make("compose1"),$rjs_core.UString.make("procedure-with-no-required-keywords?"),i1151,f01146,fs01147);}if_res592;var if_res593 = loop1148(M0.car(fs1150),M0.cdr(fs1150),M0.add1(i1151),M0.cons(f1149,rfuns1152));} else {var if_res593 = simple_compose1126(pipeline11099(M0.car(rfuns1152),M0.cdr(rfuns1152)),f1149);}return if_res593;};return loop1148(f01146,fs01147,0,$rjs_core.Pair.makeList());});var compose11125 = $rjs_core.attachProcedureArity(function() {var fixed_lam580 = {'1':cl576,'2':cl577,'0':cl578}[arguments.length];if (fixed_lam580!==undefined) {return fixed_lam580.apply(null,arguments);} else {if (M0.__gt__eq_(cl579.length,1)!==false) {var if_res581 = cl579.apply(null,arguments);} else {var if_res581 = M0.error($rjs_core.UString.make("case-lambda: invalid case"));}return if_res581;}},[0,M0.make_arity_at_least(1)]);var simple_compose1156 = function(f1157, g1158) {if (M0.eqv_p(1,M0.procedure_arity(f1157))!==false) {var arity1159 = M0.procedure_arity(g1158);var let_result594 = M1.procedure_keywords(g1158);var required_kwds1160 = let_result594.getAt(0);var allowed_kwds1161 = let_result594.getAt(1);if (M0.eq_p(1,arity1159)!==false) {var if_res601 = function(x1163) {return f1157(g1158(x1163));};} else {var cl595 = function(x1164) {return f1157(g1158(x1164));};var cl596 = function(x1165, y1166) {return f1157(g1158(x1165,y1166));};var cl597 = $rjs_core.attachProcedureArity(function(...args1167600) {var args1167 = $rjs_core.Pair.listFromArray(args1167600);return f1157(M0.apply(g1158,args1167));});var if_res601 = $rjs_core.attachProcedureArity(function() {var fixed_lam598 = {'1':cl595,'2':cl596}[arguments.length];if (fixed_lam598!==undefined) {return fixed_lam598.apply(null,arguments);} else {if (true!==false) {var if_res599 = cl597.apply(null,arguments);} else {var if_res599 = M0.error($rjs_core.UString.make("case-lambda: invalid case"));}return if_res599;}},[M0.make_arity_at_least(0)]);}var composed1162 = if_res601;if (M0.null_p(allowed_kwds1161)!==false) {var if_res603 = composed1162;} else {var if_res603 = M1.make_keyword_procedure($rjs_core.attachProcedureArity(function(kws1168, kw_args1169, ...xs1170602) {var xs1170 = $rjs_core.Pair.listFromArray(xs1170602);return f1157(M3.keyword_apply(g1158,kws1168,kw_args1169,xs1170));}),composed1162);}var if_res614 = if_res603;} else {var arity1171 = M0.procedure_arity(g1158);var let_result604 = M1.procedure_keywords(g1158);var required_kwds1172 = let_result604.getAt(0);var allowed_kwds1173 = let_result604.getAt(1);if (M0.eq_p(1,arity1171)!==false) {var if_res611 = function(x1175) {return M0.call_with_values(function() {return g1158(x1175);},f1157);};} else {var cl605 = function(x1176) {return M0.call_with_values(function() {return g1158(x1176);},f1157);};var cl606 = function(x1177, y1178) {return M0.call_with_values(function() {return g1158(x1177,y1178);},f1157);};var cl607 = $rjs_core.attachProcedureArity(function(...args1179610) {var args1179 = $rjs_core.Pair.listFromArray(args1179610);return M0.call_with_values(function() {return M0.apply(g1158,args1179);},f1157);});var if_res611 = $rjs_core.attachProcedureArity(function() {var fixed_lam608 = {'1':cl605,'2':cl606}[arguments.length];if (fixed_lam608!==undefined) {return fixed_lam608.apply(null,arguments);} else {if (true!==false) {var if_res609 = cl607.apply(null,arguments);} else {var if_res609 = M0.error($rjs_core.UString.make("case-lambda: invalid case"));}return if_res609;}},[M0.make_arity_at_least(0)]);}var composed1174 = if_res611;if (M0.null_p(allowed_kwds1173)!==false) {var if_res613 = composed1174;} else {var if_res613 = M1.make_keyword_procedure($rjs_core.attachProcedureArity(function(kws1180, kw_args1181, ...xs1182612) {var xs1182 = $rjs_core.Pair.listFromArray(xs1182612);return M0.call_with_values(function() {return M3.keyword_apply(g1158,kws1180,kw_args1181,xs1182);},f1157);}),composed1174);}var if_res614 = if_res613;}return if_res614;};var cl615 = function(f1183) {if (M0.procedure_p(f1183)!==false) {var if_res621 = f1183;} else {var if_res621 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("compose"),$rjs_core.UString.make("procedure?"),0,f1183);}return if_res621;};var cl616 = function(f1184, g1185) {if (M0.procedure_p(f1184)!==false) {var if_res622 = M0.rvoid();} else {var if_res622 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("compose"),$rjs_core.UString.make("procedure?"),0,f1184,g1185);}if_res622;if (M0.procedure_p(g1185)!==false) {var if_res623 = M0.rvoid();} else {var if_res623 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("compose"),$rjs_core.UString.make("procedure?"),1,f1184,g1185);}if_res623;var let_result624 = M1.procedure_keywords(f1184);var req1186 = let_result624.getAt(0);var _1187 = let_result624.getAt(1);if (M0.null_p(req1186)!==false) {var if_res625 = M0.rvoid();} else {var if_res625 = M0.apply(M0.raise_argument_error,$rjs_core.PrimitiveSymbol.make("compose"),$rjs_core.UString.make("procedure-with-no-required-keywords?"),0,f1184,$rjs_core.Pair.makeList());}if_res625;return simple_compose1156(f1184,g1185);};var cl617 = function() {return M0.values;};var cl618 = $rjs_core.attachProcedureArity(function(f01188, ...fs01189626) {var fs01189 = $rjs_core.Pair.listFromArray(fs01189626);var loop1190 = function(f1191, fs1192, i1193, rfuns1194) {if (M0.procedure_p(f1191)!==false) {var if_res627 = M0.rvoid();} else {var if_res627 = M0.apply(M0.raise_argument_error,$rjs_core.PrimitiveSymbol.make("compose"),$rjs_core.UString.make("procedure?"),i1193,f01188,fs01189);}if_res627;if (M0.pair_p(fs1192)!==false) {var let_result628 = M1.procedure_keywords(f1191);var req1195 = let_result628.getAt(0);var _1196 = let_result628.getAt(1);if (M0.null_p(req1195)!==false) {var if_res629 = M0.rvoid();} else {var if_res629 = M0.apply(M0.raise_argument_error,$rjs_core.PrimitiveSymbol.make("compose"),$rjs_core.UString.make("procedure-with-no-required-keywords?"),i1193,f01188,fs01189);}if_res629;var if_res630 = loop1190(M0.car(fs1192),M0.cdr(fs1192),M0.add1(i1193),M0.cons(f1191,rfuns1194));} else {var if_res630 = simple_compose1156(pipeline_times_1107(M0.car(rfuns1194),M0.cdr(rfuns1194)),f1191);}return if_res630;};return loop1190(f01188,fs01189,0,$rjs_core.Pair.makeList());});var compose1155 = $rjs_core.attachProcedureArity(function() {var fixed_lam619 = {'1':cl615,'2':cl616,'0':cl617}[arguments.length];if (fixed_lam619!==undefined) {return fixed_lam619.apply(null,arguments);} else {if (M0.__gt__eq_(cl618.length,1)!==false) {var if_res620 = cl618.apply(null,arguments);} else {var if_res620 = M0.error($rjs_core.UString.make("case-lambda: invalid case"));}return if_res620;}},[0,M0.make_arity_at_least(1)]);var let_result631 = M0.values(compose11125,compose1155);var compose1 = let_result631.getAt(0);var compose = let_result631.getAt(1);var __rjs_quoted__ = {};__rjs_quoted__.sort = sort;__rjs_quoted__.sort7 = sort7;export { __rjs_quoted__,compose1,compose,build_list,build_string,build_vector,sort,filter,assoc,assv,assq,findf,assf,memf,remove_times_,remq_times_,remv_times_,remove,remq,remv,foldr,foldl };