$(document).ready(function(){function t(t,n){$(t).click(function(){$("img").removeClass().addClass(n)})}function n(){$(c).velocity({left:"-100%"},{duration:400,easing:"swing"},[20,50]),$("img").removeClass()}function o(){$(c).velocity({left:"0"},{duration:400,easing:"swing"},[20,50]).addClass("panel-bottom").css("height",r)}function e(){$(document).mouseup(function(t){c.is(t.target)||0!==c.has(t.target).length||n()})}function a(){$("#holder").css("min-height",s)}var i=["saturate","saturotate","rotamatrix","tablen","dishue","matrix","matrix-dos","huerotate","luminance","discrete","discrete-dos","table","table-dos","identity","linear","gamma","turbulence","sepia","turbu-map","fematrix-uno","fematrix-dos","map-uno","map-dos","blur-uno","blur-dos","blur-tres","morpho-uno","morpho-dos","morpho-tres","morpho-cuatro"],r=$(".section-buttons").outerHeight()+50,u=$("picture").find("img"),s=$(u).outerHeight(),b=$(".section-buttons").find("button"),m=$("#panel-btn-close"),c=$(".panel"),l=$(".btn-saturate"),d=$(".btn-saturotate"),h=$(".btn-rotamatrix"),p=$(".btn-tablen"),f=$(".btn-multitable"),g=$(".btn-dishue"),x=$(".btn-matrix"),v=$(".btn-matrix-dos"),y=$(".btn-hueRotate"),C=$(".btn-luminance"),k=$(".btn-discrete"),w=$(".btn-discrete-dos"),H=$(".btn-table"),R=$(".btn-table-dos"),j=$(".btn-identity"),q=$(".btn-linear"),z=$(".btn-gamma"),A=$(".btn-turbulence"),B=$(".btn-sepia"),D=$(".btn-turbu-map"),E=$(".btn-con-matrix-uno"),F=$(".btn-con-matrix-dos"),G=$(".btn-map-uno"),I=$(".btn-map-dos"),J=$(".btn-blur-uno"),K=$(".btn-blur-dos"),L=$(".btn-blur-tres"),M=$(".btn-morpho-uno"),N=$(".btn-morpho-dos"),O=$(".btn-morpho-tres"),P=$(".btn-morpho-cuatro");$(b).click(function(){o()}),$(m).click(function(){n()}),a(),e(),t(l,i[0]),t(d,i[1]),t(h,i[2]),t(p,i[3]),t(f,i[4]),t(g,i[5]),t(x,i[6]),t(v,i[7]),t(y,i[8]),t(C,i[9]),t(k,i[10]),t(w,i[11]),t(H,i[12]),t(R,i[13]),t(j,i[14]),t(q,i[15]),t(z,i[16]),t(A,i[17]),t(B,i[18]),t(D,i[19]),t(E,i[20]),t(F,i[21]),t(G,i[22]),t(I,i[23]),t(J,i[24]),t(K,i[25]),t(L,i[26]),t(M,i[27]),t(N,i[28]),t(O,i[29]),t(P,i[30])});