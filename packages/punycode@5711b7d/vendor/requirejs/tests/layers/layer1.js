define("alpha",["beta","gamma"],function(a,e){return{name:"alpha",betaName:a.name}}),define("beta",["gamma"],function(a){return{name:"beta",gammaName:a.name}}),define("gamma",["epsilon"],function(a){return{name:"gamma",epsilonName:a.name}});