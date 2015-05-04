$wnd.GwtBootstrap3Demo.runAsyncCallback39("function wEc(){}\nfunction AEc(){}\nfunction CEc(){}\nfunction DEc(){DEc=j9;zEc=new CEc}\nfunction vEc(){xBb(this,xEc(new yEc))}\nfunction wkc(a){dqb.call(this,a);vkc(this)}\nfunction pEc(a,b,c){OAb();iBb.call(this,a,b,c,(Rkc(),Qkc))}\nfunction yEc(){this.a=(new AEc,DEc(),zEc);BEc(this.a)}\nfunction uIc(a){var b;if(!a.I){b=new vEc(new wEc);a.I=b}return a.I}\nfunction tIc(a){var b;if(!a.H){b=new pEc(nAb(MBb(a.a)),uIc(a),sIc(a));GAb((PBb(a.a),b),_Bb(PBb(a.a)));a.H=b}return a.H}\nfunction BEc(a){if(!a.a){a.a=true;Du((DA(),'.GPBYFDEOL{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDEPL{margin-top:0 !important;}.GPBYFDEAM{margin-left:5px;}'));return true}return false}\nfunction xEc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new ZXb;aSb(a,(b=new lUb(cjd),aSb(b,(c=new QWb,c.a='Offline',PWb(c),c)),aSb(b,(d=new $Sb,aSb(d,(e=new WUb((F4b(),C4b)),mdb((Ckb(),e.db),'GPBYFDEPL',true),Jkc(e.b,npd),bSb(e,e.b,0),e)),aSb(d,new Dkc((j=new GHb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new dbb(j.a)).a)),aSb(d,(f=new rOc,OXb(f,(k=new GHb,k.a+=opd,new dbb(k.a)).a),mdb(f.db,hjd,true),f)),aSb(d,new Dkc((l=new GHb,l.a+=ppd,new dbb(l.a)).a)),aSb(d,(g=new rOc,OXb(g,(m=new GHb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new dbb(m.a)).a),mdb(g.db,hjd,true),g)),mdb(d.db,'GPBYFDEOL',true),d)),aSb(b,(h=new aXb,aSb(h,(n=new pXb,aSb(n,(o=new WUb(B4b),Jkc(o.b,'What is Offline?'),bSb(o,o.b,0),o)),n)),aSb(h,(p=new cXb,aSb(p,new wkc((q=new GHb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new dbb(q.a)).a)),p)),aSb(h,new mXb),h)),aSb(b,(i=new aXb,aSb(i,(r=new pXb,aSb(r,(s=new WUb(B4b),Jkc(s.b,'How to configure?'),bSb(s,s.b,0),s)),r)),aSb(i,(t=new cXb,aSb(t,new Dkc((u=new GHb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new dbb(u.a)).a)),aSb(t,(v=new rOc,OXb(v,(w=new GHb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new dbb(w.a)).a),mdb(v.db,hjd,true),v)),aSb(t,new Dkc((A=new GHb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new dbb(A.a)).a)),aSb(t,(B=new rOc,OXb(B,(C=new GHb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new dbb(C.a)).a),mdb(B.db,hjd,true),B)),aSb(t,new Dkc((D=new GHb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new dbb(D.a)).a)),aSb(t,(F=new rOc,OXb(F,(G=new GHb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new dbb(G.a)).a),mdb(F.db,hjd,true),F)),t)),aSb(i,new mXb),i)),b));return a}\ni9(377,216,shd,wkc);i9(892,48,egd,pEc);var s0=XFb(Sid,'OfflinePresenter',892);i9(1125,fgd,ggd,vEc);var x0=XFb(Sid,'OfflineView',1125);i9(1348,1,{},wEc);var w0=XFb(Sid,'OfflineView_BinderImpl',1348);i9(1349,1,{},yEc);var t0=XFb(Sid,'OfflineView_BinderImpl/Widgets',1349);i9(1674,1,{},AEc);var zEc;var v0=XFb(Sid,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator',1674);i9(1675,1,{},CEc);_.a=false;var u0=XFb(Sid,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator/1',1675);i9(817,1,qid);_.Ob=function TJc(){jDb(this.b,tIc(this.a.a))};Rdd(mm)(39);\n//# sourceURL=GwtBootstrap3Demo-39.js\n")
