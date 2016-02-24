$wnd.GwtBootstrap3Demo.runAsyncCallback40("function vRc(){}\nfunction zRc(){}\nfunction BRc(){}\nfunction CRc(){CRc=Rgb;yRc=new BRc}\nfunction Cvc(a){nyb.call(this,a);Bvc(this)}\nfunction uRc(){zJb.call(this);xJb(this,wRc(new xRc))}\nfunction oRc(a,b,c){LIb();hJb.call(this,a,b,c,(Yvc(),Xvc))}\nfunction xRc(){this.a=(new zRc,CRc(),yRc);ARc(this.a)}\nfunction $Vc(a){var b;if(!a.M){b=new uRc(new vRc);a.M=b}return a.M}\nfunction ZVc(a){var b;if(!a.L){b=new oRc(kIb(OJb(a.a)),$Vc(a),YVc(a));DIb((RJb(a.a),b),bKb(RJb(a.a)));a.L=b}return a.L}\nfunction ARc(a){if(!a.a){a.a=true;hx((kD(),'.GPBYFDEEM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDEFM{margin-top:0 !important;}.GPBYFDEGM{margin-left:5px;}'));return true}return false}\nfunction wRc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new m5b;G$b(a,(b=new $0b(aKd),G$b(b,(c=new S3b,c.a='Offline',R3b(c),c)),G$b(b,(d=new N_b,G$b(d,(e=new M1b((Ndc(),Kdc)),Vkb((rsb(),e.eb),'GPBYFDEFM',true),Qvc(e.b,eQd),H$b(e,e.b,0),e)),G$b(d,new Kvc((j=new TPb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new Lib(j.a)).a)),G$b(d,(f=new a0c,b5b(f,(k=new TPb,k.a+=fQd,new Lib(k.a)).a),Vkb(f.eb,fKd,true),f)),G$b(d,new Kvc((l=new TPb,l.a+=gQd,new Lib(l.a)).a)),G$b(d,(g=new a0c,b5b(g,(m=new TPb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new Lib(m.a)).a),Vkb(g.eb,fKd,true),g)),Vkb(d.eb,'GPBYFDEEM',true),d)),G$b(b,(h=new d4b,G$b(h,(n=new s4b,G$b(n,(o=new M1b(Jdc),Qvc(o.b,'What is Offline?'),H$b(o,o.b,0),o)),n)),G$b(h,(p=new f4b,G$b(p,new Cvc((q=new TPb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new Lib(q.a)).a)),p)),G$b(h,new p4b),h)),G$b(b,(i=new d4b,G$b(i,(r=new s4b,G$b(r,(s=new M1b(Jdc),Qvc(s.b,'How to configure?'),H$b(s,s.b,0),s)),r)),G$b(i,(t=new f4b,G$b(t,new Kvc((u=new TPb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new Lib(u.a)).a)),G$b(t,(v=new a0c,b5b(v,(w=new TPb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new Lib(w.a)).a),Vkb(v.eb,fKd,true),v)),G$b(t,new Kvc((A=new TPb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new Lib(A.a)).a)),G$b(t,(B=new a0c,b5b(B,(C=new TPb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new Lib(C.a)).a),Vkb(B.eb,fKd,true),B)),G$b(t,new Kvc((D=new TPb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new Lib(D.a)).a)),G$b(t,(F=new a0c,b5b(F,(G=new TPb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new Lib(G.a)).a),Vkb(F.eb,fKd,true),F)),t)),G$b(i,new p4b),i)),b));return a}\nQgb(405,228,TGd,Cvc);Qgb(968,44,dHd,oRc);var I5=hOb(TJd,'OfflinePresenter',968);Qgb(1203,48,eHd,uRc);var N5=hOb(TJd,'OfflineView',1203);Qgb(1473,1,{},vRc);var M5=hOb(TJd,'OfflineView_BinderImpl',1473);Qgb(1474,1,{},xRc);var J5=hOb(TJd,'OfflineView_BinderImpl/Widgets',1474);Qgb(1816,1,{},zRc);var yRc;var L5=hOb(TJd,'OfflineView_BinderImpl_GenBundle_en_InlineClientBundleGenerator',1816);Qgb(1817,1,{},BRc);_.a=false;var K5=hOb(TJd,'OfflineView_BinderImpl_GenBundle_en_InlineClientBundleGenerator/1',1817);Qgb(892,1,pJd);_.Sb=function wWc(){uLb(this.b,ZVc(this.a.a))};AEd(No)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")
