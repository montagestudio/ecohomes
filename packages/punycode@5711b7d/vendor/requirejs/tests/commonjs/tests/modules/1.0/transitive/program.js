define(["require","exports","module","test","a"],function(e,t,i){var r=e("test");r.assert(1==e("a").foo(),"transitive"),r.print("DONE","info")});