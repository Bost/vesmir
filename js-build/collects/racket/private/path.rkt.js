import * as $rjs_core from '../../../runtime/core.js';import * as M0 from "../../../runtime/kernel.rkt.js";var path_string_p = function(s2104) {var or_part2105 = M0.path_p(s2104);if (or_part2105!==false) {var if_res1370 = or_part2105;} else {if (M0.string_p(s2104)!==false) {var or_part2106 = M0.__rjs_quoted__.relative_path_p(s2104);if (or_part2106!==false) {var if_res1368 = or_part2106;} else {var if_res1368 = M0.__rjs_quoted__.absolute_path_p(s2104);}var if_res1369 = if_res1368;} else {var if_res1369 = false;}var if_res1370 = if_res1369;}return if_res1370;};var bsbs = M0.string($rjs_core.Char.charFromCodepoint(92),$rjs_core.Char.charFromCodepoint(92));var normal_case_path = function(s2107) {var or_part2108 = M0.__rjs_quoted__.path_for_some_system_p(s2107);if (or_part2108!==false) {var if_res1371 = or_part2108;} else {var if_res1371 = path_string_p(s2107);}if (if_res1371!==false) {var if_res1372 = M0.rvoid();} else {var if_res1372 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("normal-path-case"),$rjs_core.UString.make("(or/c path-for-some-system? path-string?)"),s2107);}if_res1372;if (M0.__rjs_quoted__.path_for_some_system_p(s2107)!==false) {var if_res1373 = M0.eq_p(M0.__rjs_quoted__.path_convention_type(s2107),$rjs_core.PrimitiveSymbol.make("windows"));} else {var if_res1373 = M0.eq_p(M0.system_type(),$rjs_core.PrimitiveSymbol.make("windows"));}if (if_res1373!==false) {if (M0.string_p(s2107)!==false) {var if_res1374 = false;} else {var if_res1374 = M0.__rjs_quoted__.path__gt_bytes(s2107);}var bstr2109 = if_res1374;if (M0.string_p(s2107)!==false) {var if_res1375 = M0.regexp_match_p($rjs_core.Regexp.fromString("^[\\][\\][?][\\]"),s2107);} else {var if_res1375 = false;}if (if_res1375!==false) {var if_res1384 = M0.string__gt_path(s2107);} else {if (bstr2109!==false) {var if_res1376 = M0.regexp_match_p($rjs_core.Regexp.fromString("^[\\][\\][?][\\]"),bstr2109);} else {var if_res1376 = false;}if (if_res1376!==false) {var if_res1383 = s2107;} else {var norm2110 = function(s2113) {return M0.__rjs_quoted__.string_locale_downcase(M0.__rjs_quoted__.regexp_replace_times_($rjs_core.Regexp.fromString("/"),s2113,bsbs));};var norm_tail2111 = function(s2114) {if (M0.regexp_match_p($rjs_core.Regexp.fromString("[/\\][. ]+[/\\]*$"),s2114)!==false) {var if_res1377 = s2114;} else {var if_res1377 = M0.__rjs_quoted__.regexp_replace_times_($rjs_core.Regexp.fromString("(?<=[^ ./\\])[ .]+([/\\]*)$"),s2114,$rjs_core.UString.make("\\1"));}return if_res1377;};var finish2112 = function(bstr2115) {return M0.__rjs_quoted__.bytes__gt_path(bstr2115,$rjs_core.PrimitiveSymbol.make("windows"));};if (M0.string_p(s2107)!==false) {var if_res1382 = finish2112(M0.string__gt_bytes_by_locale(norm2110(norm_tail2111(s2107))));} else {var c2116 = M0.__rjs_quoted__.bytes_open_converter($rjs_core.UString.make(""),$rjs_core.UString.make("UTF-8"));var loop2117 = function(offset2118) {var let_result1378 = M0.__rjs_quoted__.bytes_convert(c2116,bstr2109,offset2118,M0.bytes_length(bstr2109));var new_bstr2119 = let_result1378.getAt(0);var used2120 = let_result1378.getAt(1);var status2121 = let_result1378.getAt(2);var s2122 = M0.__rjs_quoted__.bytes__gt_string_by_locale(new_bstr2119);if (M0.eq_p(status2121,$rjs_core.PrimitiveSymbol.make("complete"))!==false) {var if_res1379 = norm_tail2111(s2122);} else {var if_res1379 = s2122;}var tail_s2123 = if_res1379;var done2124 = M0.string__gt_bytes_by_locale(norm2110(tail_s2123));if (M0.eq_p(status2121,$rjs_core.PrimitiveSymbol.make("complete"))!==false) {var if_res1381 = done2124;} else {if (M0.eq_p(status2121,$rjs_core.PrimitiveSymbol.make("aborts"))!==false) {var if_res1380 = M0.bytes_append(done2124,M0.__rjs_quoted__.subbytes(bstr2109,offset2118+used2120));} else {var if_res1380 = M0.bytes_append(done2124,M0.__rjs_quoted__.subbytes(bstr2109,offset2118+used2120,offset2118+used2120+1),loop2117(offset2118+used2120+1));}var if_res1381 = if_res1380;}return if_res1381;};var if_res1382 = finish2112(loop2117(0));}var if_res1383 = if_res1382;}var if_res1384 = if_res1383;}var if_res1386 = if_res1384;} else {if (M0.string_p(s2107)!==false) {var if_res1385 = M0.string__gt_path(s2107);} else {var if_res1385 = s2107;}var if_res1386 = if_res1385;}return if_res1386;};var check_extension_call = function(s2125, sfx2126, who2127, sep2128, trust_sep_p2129) {var or_part2132 = M0.__rjs_quoted__.path_for_some_system_p(s2125);if (or_part2132!==false) {var if_res1387 = or_part2132;} else {var if_res1387 = path_string_p(s2125);}if (M0.not(if_res1387)!==false) {var if_res1393 = M0.values($rjs_core.UString.make("(or/c path-for-some-system? path-string?)"),0);} else {var or_part2133 = M0.string_p(sfx2126);if (or_part2133!==false) {var if_res1388 = or_part2133;} else {var if_res1388 = M0.bytes_p(sfx2126);}if (M0.not(if_res1388)!==false) {var if_res1392 = M0.values($rjs_core.UString.make("(or/c string? bytes?)"),1);} else {var or_part2134 = trust_sep_p2129;if (or_part2134!==false) {var if_res1390 = or_part2134;} else {var or_part2135 = M0.string_p(sep2128);if (or_part2135!==false) {var if_res1389 = or_part2135;} else {var if_res1389 = M0.bytes_p(sep2128);}var if_res1390 = if_res1389;}if (M0.not(if_res1390)!==false) {var if_res1391 = M0.values($rjs_core.UString.make("(or/c string? bytes?)"),2);} else {var if_res1391 = M0.values(false,false);}var if_res1392 = if_res1391;}var if_res1393 = if_res1392;}var let_result1394 = if_res1393;var err_msg2130 = let_result1394.getAt(0);var err_index2131 = let_result1394.getAt(1);if (err_msg2130!==false) {if (trust_sep_p2129!==false) {var if_res1395 = M0.raise_argument_error(who2127,err_msg2130,err_index2131,s2125,sfx2126);} else {var if_res1395 = M0.raise_argument_error(who2127,err_msg2130,err_index2131,s2125,sfx2126,sep2128);}var if_res1396 = if_res1395;} else {var if_res1396 = M0.rvoid();}if_res1396;var let_result1397 = M0.__rjs_quoted__.split_path(s2125);var base2136 = let_result1397.getAt(0);var name2137 = let_result1397.getAt(1);var dir_p2138 = let_result1397.getAt(2);if (M0.not(base2136)!==false) {var if_res1398 = M0.raise_mismatch_error(who2127,$rjs_core.UString.make("cannot add an extension to a root path: "),s2125);} else {var if_res1398 = M0.rvoid();}if_res1398;return M0.values(base2136,name2137);};var path_adjust_extension = function(name2139, sep2140, rest_bytes2141, s2142, sfx2143, trust_sep_p2144) {var let_result1399 = check_extension_call(s2142,sfx2143,name2139,sep2140,trust_sep_p2144);var base2145 = let_result1399.getAt(0);var name2146 = let_result1399.getAt(1);var bs2147 = M0.__rjs_quoted__.path_element__gt_bytes(name2146);var finish2148 = function(i2149, sep2150, i22151) {var temp1404 = M0.__rjs_quoted__.subbytes(bs2147,0,i2149);if (M0.string_p(sep2150)!==false) {var if_res1403 = M0.string__gt_bytes_by_locale(sep2150,M0.char__gt_integer($rjs_core.Char.charFromCodepoint(63)));} else {var if_res1403 = sep2150;}var temp1402 = rest_bytes2141(bs2147,i22151);if (M0.string_p(sfx2143)!==false) {var if_res1401 = M0.string__gt_bytes_by_locale(sfx2143,M0.char__gt_integer($rjs_core.Char.charFromCodepoint(63)));} else {var if_res1401 = sfx2143;}var temp1405 = M0.bytes_append(temp1404,if_res1403,temp1402,if_res1401);if (M0.__rjs_quoted__.path_for_some_system_p(s2142)!==false) {var if_res1400 = M0.__rjs_quoted__.path_convention_type(s2142);} else {var if_res1400 = M0.__rjs_quoted__.system_path_convention_type();}return M0.__rjs_quoted__.bytes__gt_path_element(temp1405,if_res1400);};var loop2153 = function(i2154) {if (M0.zero_p(i2154)!==false) {var if_res1408 = finish2148(M0.bytes_length(bs2147),$rjs_core.Bytes.fromIntArray([]),M0.bytes_length(bs2147));} else {var i2155 = M0.sub1(i2154);if (M0.not(M0.zero_p(i2155))!==false) {var if_res1406 = M0.eq_p(M0.char__gt_integer($rjs_core.Char.charFromCodepoint(46)),M0.bytes_ref(bs2147,i2155));} else {var if_res1406 = false;}if (if_res1406!==false) {var if_res1407 = finish2148(i2155,sep2140,M0.add1(i2155));} else {var if_res1407 = loop2153(i2155);}var if_res1408 = if_res1407;}return if_res1408;};var new_name2152 = loop2153(M0.bytes_length(bs2147));if (M0.__rjs_quoted__.path_for_some_system_p(base2145)!==false) {var if_res1409 = M0.build_path(base2145,new_name2152);} else {var if_res1409 = new_name2152;}return if_res1409;};var path_replace_extension = function(s2156, sfx2157) {return path_adjust_extension($rjs_core.PrimitiveSymbol.make("path-replace-extension"),$rjs_core.Bytes.fromIntArray([]),function(bs2158, i2159) {return $rjs_core.Bytes.fromIntArray([]);},s2156,sfx2157,true);};var cl1410 = function(s2160, sfx2161) {return path_adjust_extension($rjs_core.PrimitiveSymbol.make("path-add-extension"),$rjs_core.Bytes.fromIntArray([95]),M0.__rjs_quoted__.subbytes,s2160,sfx2161,true);};var cl1411 = function(s2162, sfx2163, sep2164) {return path_adjust_extension($rjs_core.PrimitiveSymbol.make("path-add-extension"),sep2164,M0.__rjs_quoted__.subbytes,s2162,sfx2163,false);};var path_add_extension = $rjs_core.attachProcedureArity(function() {var fixed_lam1412 = {'2':cl1410,'3':cl1411}[arguments.length];if (fixed_lam1412!==undefined) {return fixed_lam1412.apply(null,arguments);} else {return M0.error($rjs_core.UString.make("case-lambda: invalid case"));}},[2,3]);var reroot_path = function(p2165, root2166) {var or_part2167 = path_string_p(p2165);if (or_part2167!==false) {var if_res1413 = or_part2167;} else {var if_res1413 = M0.__rjs_quoted__.path_for_some_system_p(p2165);}if (if_res1413!==false) {var if_res1414 = M0.rvoid();} else {var if_res1414 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("reroot-path"),$rjs_core.UString.make("(or/c path-string? path-for-some-system?)"),0,p2165,root2166);}if_res1414;var let_result1415 = M0.values();var or_part2168 = path_string_p(root2166);if (or_part2168!==false) {var if_res1416 = or_part2168;} else {var if_res1416 = M0.__rjs_quoted__.path_for_some_system_p(root2166);}if (if_res1416!==false) {var if_res1417 = M0.rvoid();} else {var if_res1417 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("reroot-path"),$rjs_core.UString.make("(or/c path-string? path-for-some-system?)"),1,p2165,root2166);}if_res1417;var let_result1418 = M0.values();if (M0.__rjs_quoted__.path_for_some_system_p(p2165)!==false) {var if_res1419 = M0.__rjs_quoted__.path_convention_type(p2165);} else {var if_res1419 = M0.__rjs_quoted__.system_path_convention_type();}var conv2169 = if_res1419;var or_part2170 = M0.__rjs_quoted__.complete_path_p(p2165);if (or_part2170!==false) {var if_res1420 = or_part2170;} else {var if_res1420 = M0.eq_p(M0.__rjs_quoted__.system_path_convention_type(),conv2169);}if (if_res1420!==false) {var if_res1421 = M0.rvoid();} else {var if_res1421 = M0.raise_arguments_error($rjs_core.PrimitiveSymbol.make("reroot-path"),$rjs_core.UString.make("path is not complete and not the platform's convention"),$rjs_core.UString.make("path"),p2165,$rjs_core.UString.make("platform convention type"),M0.__rjs_quoted__.system_path_convention_type());}if_res1421;var let_result1422 = M0.values();if (M0.__rjs_quoted__.path_for_some_system_p(root2166)!==false) {var if_res1423 = M0.__rjs_quoted__.path_convention_type(root2166);} else {var if_res1423 = M0.__rjs_quoted__.system_path_convention_type();}if (M0.eq_p(if_res1423,conv2169)!==false) {var if_res1424 = M0.rvoid();} else {var if_res1424 = M0.raise_arguments_error($rjs_core.PrimitiveSymbol.make("reroot-path"),$rjs_core.UString.make("given paths use different conventions"),$rjs_core.UString.make("path"),p2165,$rjs_core.UString.make("root path"),root2166);}if_res1424;var let_result1425 = M0.values();if (M0.__rjs_quoted__.complete_path_p(p2165)!==false) {var if_res1426 = p2165;} else {var if_res1426 = M0.__rjs_quoted__.path__gt_complete_path(p2165);}var c_p2171 = normal_case_path(M0.__rjs_quoted__.cleanse_path(if_res1426));var bstr2172 = M0.__rjs_quoted__.path__gt_bytes(c_p2171);if (M0.eq_p(conv2169,$rjs_core.PrimitiveSymbol.make("unix"))!==false) {if (M0.bytes_eq__p(bstr2172,$rjs_core.Bytes.fromIntArray([47]))!==false) {if (M0.__rjs_quoted__.path_for_some_system_p(root2166)!==false) {var if_res1427 = root2166;} else {var if_res1427 = M0.string__gt_path(root2166);}var if_res1428 = if_res1427;} else {var if_res1428 = M0.build_path(root2166,M0.__rjs_quoted__.bytes__gt_path(M0.__rjs_quoted__.subbytes(M0.__rjs_quoted__.path__gt_bytes(c_p2171),1),conv2169));}var if_res1435 = if_res1428;} else {if (M0.eq_p(conv2169,$rjs_core.PrimitiveSymbol.make("windows"))!==false) {if (M0.regexp_match_p($rjs_core.Regexp.fromString("^\\\\\\\\[?]\\\\[a-z]:"),bstr2172)!==false) {var if_res1433 = M0.bytes_append($rjs_core.Bytes.fromIntArray([92,92,63,92,82,69,76,92]),M0.__rjs_quoted__.subbytes(bstr2172,4,5),$rjs_core.Bytes.fromIntArray([92]),M0.__rjs_quoted__.subbytes(bstr2172,6));} else {if (M0.regexp_match_p($rjs_core.Regexp.fromString("^\\\\\\\\[?]\\\\UNC\\\\"),bstr2172)!==false) {var if_res1432 = M0.bytes_append($rjs_core.Bytes.fromIntArray([92,92,63,92,82,69,76,92]),M0.__rjs_quoted__.subbytes(bstr2172,4));} else {if (M0.regexp_match_p($rjs_core.Regexp.fromString("^\\\\\\\\[?]\\\\UNC\\\\"),bstr2172)!==false) {var if_res1431 = M0.bytes_append($rjs_core.Bytes.fromIntArray([92,92,63,92,82,69,76,92]),M0.__rjs_quoted__.subbytes(bstr2172,4));} else {if (M0.regexp_match_p($rjs_core.Regexp.fromString("^\\\\\\\\"),bstr2172)!==false) {var if_res1430 = M0.bytes_append($rjs_core.Bytes.fromIntArray([85,78,67,92]),M0.__rjs_quoted__.subbytes(bstr2172,2));} else {if (M0.regexp_match_p($rjs_core.Regexp.fromString("^[a-z]:"),bstr2172)!==false) {var if_res1429 = M0.bytes_append(M0.__rjs_quoted__.subbytes(bstr2172,0,1),M0.__rjs_quoted__.subbytes(bstr2172,2));} else {var if_res1429 = M0.rvoid();}var if_res1430 = if_res1429;}var if_res1431 = if_res1430;}var if_res1432 = if_res1431;}var if_res1433 = if_res1432;}var if_res1434 = M0.build_path(root2166,M0.__rjs_quoted__.bytes__gt_path(if_res1433,conv2169));} else {var if_res1434 = M0.rvoid();}var if_res1435 = if_res1434;}return if_res1435;};var __rjs_quoted__ = {};export { __rjs_quoted__,reroot_path,path_add_extension,path_replace_extension,normal_case_path,path_string_p };