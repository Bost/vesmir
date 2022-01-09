import * as $rjs_core from './core.js';import * as Core from "./core.js";var unsafe_fx_plus_ = function(a134, b135) {return (a134+b135)|0;};var unsafe_fx_ = function(a136, b137) {return (a136-b137)|0;};var unsafe_fx_times_ = function(a138, b139) {return (a138*b139)|0;};var unsafe_fxquotient = function(a140, b141) {return (a140/b141)|0;};var unsafe_fxremainder = function(a142, b143) {return (a142%b143)|0;};var unsafe_fxmodulo = function(a144, b145) {var remainder146 = a144%b145;if ((remainder146>=0)!==false) {var if_res28 = remainder146;} else {var if_res28 = remainder146+b145;}return Math.floor(if_res28);};var unsafe_fxabs = function(a147) {return Math.abs(a147);};var unsafe_fx_eq_ = function(a148, b149) {return a148===b149;};var unsafe_fx_lt_ = function(a150, b151) {return a150<b151;};var unsafe_fx_lt__eq_ = function(a152, b153) {return a152<=b153;};var unsafe_fx_gt_ = function(a154, b155) {return a154>b155;};var unsafe_fx_gt__eq_ = function(a156, b157) {return a156>=b157;};var unsafe_fxmin = function(a158, b159) {if ((a158<b159)!==false) {var if_res29 = a158;} else {var if_res29 = b159;}return if_res29;};var unsafe_fxmax = function(a160, b161) {if ((a160>b161)!==false) {var if_res30 = b161;} else {var if_res30 = a160;}return if_res30;};var unsafe_fl_eq_ = function(a162, b163) {return a162===b163;};var unsafe_fl_lt_ = function(a164, b165) {return a164<b165;};var unsafe_fl_lt__eq_ = function(a166, b167) {return a166<=b167;};var unsafe_fl_gt_ = function(a168, b169) {return a168>b169;};var unsafe_fl_gt__eq_ = function(a170, b171) {return a170>=b171;};var unsafe_flmin = function(a172, b173) {if ((a172<b173)!==false) {var if_res31 = a172;} else {var if_res31 = b173;}return if_res31;};var unsafe_flmax = function(a174, b175) {if ((a174>b175)!==false) {var if_res32 = b175;} else {var if_res32 = a174;}return if_res32;};var unsafe_fxrshift = function(a176, b177) {return (a176>>b177)|0;};var unsafe_fxlshift = function(a178, b179) {return (a178<<b179)|0;};var unsafe_fxand = function(a180, b181) {return (a180&&b181)|0;};var unsafe_fxior = function(a182, b183) {return (a182||b183)|0;};var unsafe_fxxor = function(a184, b185) {return (a184^b185)|0;};var unsafe_fxnot = Core.bitwiseNot;var unsafe_car = function(v186) {return v186.hd;};var unsafe_cdr = function(v187) {return v187.tl;};var unsafe_mcar = function(v188) {return v188.hd;};var unsafe_mcdr = function(v189) {return v189.tl;};var unsafe_set_mcar_bang_ = function(p190, v191) {return p190.setCar(v191);};var unsafe_set_mcdr_bang_ = function(p192, v193) {return p192.setCdr(v193);};var unsafe_cons_list = function(v194, rest195) {return Core.Pair.make(v194,rest195);};var unsafe_struct_ref = function(v196, k197) {return v196._fields[k197];};var unsafe_vector_ref = function(v198, k199) {return v198.ref(k199);};var unsafe_vector_set_bang_ = function(v200, k201, val202) {return v200.set(k201,val202);};var unsafe_vector_length = function(v203) {return v203.length();};var unsafe_immutable_hash_iterate_first = function(h204) {return h204.iterateFirst();};var unsafe_immutable_hash_iterate_next = function(h205, i206) {return h205.iterateNext(i206);};var unsafe_immutable_hash_iterate_key = function(h207, i208) {return h207.iterateKey(i208);};var unsafe_immutable_hash_iterate_value = function(h209, i210) {return h209.iterateValue(i210);};var unsafe_immutable_hash_iterate_key_plus_value = function(h211, i212) {return h211.iterateKeyValue(i212);};var unsafe_immutable_hash_iterate_pair = function(h213, i214) {return h213.iteratePair(i214);};var unsafe_mutable_hash_iterate_first = function(h215) {return h215.iterateFirst();};var unsafe_mutable_hash_iterate_next = function(h216, i217) {return h216.iterateNext(i217);};var unsafe_mutable_hash_iterate_key = function(h218, i219) {return h218.iterateKey(i219);};var unsafe_mutable_hash_iterate_value = function(h220, i221) {return h220.iterateValue(i221);};var unsafe_mutable_hash_iterate_key_plus_value = function(h222, i223) {return h222.iterateKeyValue(i223);};var unsafe_mutable_hash_iterate_pair = function(h224, i225) {return h224.iteratePair(i225);};var unsafe_undefined = Core.theUnsafeUndefined;var unsafe_make_place_local = Core.Box.make;var unsafe_place_local_set_bang_ = function(b226, v227) {return b226.set(v227);};var unsafe_place_local_ref = function(b228) {return b228.get();};var variable_reference_from_unsafe_p = function(v229) {return false;};var unsafe_root_continuation_prompt_tag = function() {return Core.Marks.defaultContinuationPromptTag();};var __rjs_quoted__ = {};export { __rjs_quoted__,unsafe_fx_plus_,unsafe_fx_,unsafe_fx_times_,unsafe_fxquotient,unsafe_fxremainder,unsafe_fxmodulo,unsafe_fxabs,unsafe_fx_eq_,unsafe_fx_lt_,unsafe_fx_lt__eq_,unsafe_fx_gt_,unsafe_fx_gt__eq_,unsafe_fxmin,unsafe_fxmax,unsafe_fl_eq_,unsafe_fl_lt_,unsafe_fl_lt__eq_,unsafe_fl_gt_,unsafe_fl_gt__eq_,unsafe_flmin,unsafe_flmax,unsafe_fxrshift,unsafe_fxlshift,unsafe_fxand,unsafe_fxior,unsafe_fxxor,unsafe_fxnot,unsafe_car,unsafe_cdr,unsafe_mcar,unsafe_mcdr,unsafe_set_mcar_bang_,unsafe_set_mcdr_bang_,unsafe_cons_list,unsafe_struct_ref,unsafe_vector_ref,unsafe_vector_set_bang_,unsafe_vector_length,unsafe_immutable_hash_iterate_first,unsafe_immutable_hash_iterate_next,unsafe_immutable_hash_iterate_key,unsafe_immutable_hash_iterate_value,unsafe_immutable_hash_iterate_key_plus_value,unsafe_immutable_hash_iterate_pair,unsafe_mutable_hash_iterate_first,unsafe_mutable_hash_iterate_next,unsafe_mutable_hash_iterate_key,unsafe_mutable_hash_iterate_value,unsafe_mutable_hash_iterate_key_plus_value,unsafe_mutable_hash_iterate_pair,unsafe_undefined,unsafe_make_place_local,unsafe_place_local_set_bang_,unsafe_place_local_ref,variable_reference_from_unsafe_p,unsafe_root_continuation_prompt_tag };