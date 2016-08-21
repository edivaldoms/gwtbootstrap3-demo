$wnd.GwtBootstrap3Demo.runAsyncCallback40("function oUc(){}\nfunction sUc(){}\nfunction uUc(){}\nfunction vUc(){vUc=Vib;rUc=new uUc}\nfunction vyc(a){wAb.call(this,a);uyc(this)}\nfunction nUc(){zLb.call(this);xLb(this,pUc(new qUc))}\nfunction hUc(a,b,c){LKb();hLb.call(this,a,b,c,(Oyc(),Nyc))}\nfunction qUc(){this.a=(new sUc,vUc(),rUc);tUc(this.a)}\nfunction zZc(a){var b;if(!a.M){b=new nUc(new oUc);a.M=b}return a.M}\nfunction yZc(a){var b;if(!a.L){b=new hUc(kKb(OLb(a.a)),zZc(a),xZc(a));DKb((RLb(a.a),b),bMb(RLb(a.a)));a.L=b}return a.L}\nfunction tUc(a){if(!a.a){a.a=true;Kx((lE(),'.GPBYFDEEM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDEFM{margin-top:0 !important;}.GPBYFDEGM{margin-left:5px;}'));return true}return false}\nfunction pUc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new s7b;G0b(a,(b=new e3b(cPd),G0b(b,(c=new Y5b,c.a='Offline',X5b(c),c)),G0b(b,(d=new T1b,G0b(d,(e=new S3b((Yfc(),Vfc)),bnb((Cub(),e.eb),'GPBYFDEFM',true),Jyc(e.b,fVd),H0b(e,e.b,0),e)),G0b(d,new Dyc((j=new TRb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new Tkb(j.a)).a)),G0b(d,(f=new J3c,h7b(f,(k=new TRb,k.a+=gVd,new Tkb(k.a)).a),bnb(f.eb,hPd,true),f)),G0b(d,new Dyc((l=new TRb,l.a+=hVd,new Tkb(l.a)).a)),G0b(d,(g=new J3c,h7b(g,(m=new TRb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new Tkb(m.a)).a),bnb(g.eb,hPd,true),g)),bnb(d.eb,'GPBYFDEEM',true),d)),G0b(b,(h=new j6b,G0b(h,(n=new y6b,G0b(n,(o=new S3b(Ufc),Jyc(o.b,'What is Offline?'),H0b(o,o.b,0),o)),n)),G0b(h,(p=new l6b,G0b(p,new vyc((q=new TRb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new Tkb(q.a)).a)),p)),G0b(h,new v6b),h)),G0b(b,(i=new j6b,G0b(i,(r=new y6b,G0b(r,(s=new S3b(Ufc),Jyc(s.b,'How to configure?'),H0b(s,s.b,0),s)),r)),G0b(i,(t=new l6b,G0b(t,new Dyc((u=new TRb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new Tkb(u.a)).a)),G0b(t,(v=new J3c,h7b(v,(w=new TRb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new Tkb(w.a)).a),bnb(v.eb,hPd,true),v)),G0b(t,new Dyc((A=new TRb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new Tkb(A.a)).a)),G0b(t,(B=new J3c,h7b(B,(C=new TRb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new Tkb(C.a)).a),bnb(B.eb,hPd,true),B)),G0b(t,new Dyc((D=new TRb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new Tkb(D.a)).a)),G0b(t,(F=new J3c,h7b(F,(G=new TRb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new Tkb(G.a)).a),bnb(F.eb,hPd,true),F)),t)),G0b(i,new v6b),i)),b));return a}\nUib(409,233,QLd,vyc);Uib(1011,44,aMd,hUc);var l7=hQb(UOd,'OfflinePresenter',1011);Uib(1250,47,bMd,nUc);var q7=hQb(UOd,'OfflineView',1250);Uib(1527,1,{},oUc);var p7=hQb(UOd,'OfflineView_BinderImpl',1527);Uib(1528,1,{},qUc);var m7=hQb(UOd,'OfflineView_BinderImpl/Widgets',1528);Uib(1877,1,{},sUc);var rUc;var o7=hQb(UOd,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator',1877);Uib(1878,1,{},uUc);_.a=false;var n7=hQb(UOd,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator/1',1878);Uib(933,1,oOd);_.Sb=function $Zc(){uNb(this.b,yZc(this.a.a))};xJd(vp)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")
