$wnd.GwtBootstrap3Demo.runAsyncCallback39("function uEc(){}\nfunction yEc(){}\nfunction AEc(){}\nfunction BEc(){BEc=i9;xEc=new AEc}\nfunction tEc(){vBb(this,vEc(new wEc))}\nfunction ukc(a){jqb.call(this,a);tkc(this)}\nfunction nEc(a,b,c){MAb();gBb.call(this,a,b,c,(Pkc(),Okc))}\nfunction wEc(){this.a=(new yEc,BEc(),xEc);zEc(this.a)}\nfunction sIc(a){var b;if(!a.I){b=new tEc(new uEc);a.I=b}return a.I}\nfunction rIc(a){var b;if(!a.H){b=new nEc(lAb(KBb(a.a)),sIc(a),qIc(a));EAb((NBb(a.a),b),ZBb(NBb(a.a)));a.H=b}return a.H}\nfunction zEc(a){if(!a.a){a.a=true;zu((BA(),'.GPBYFDEOL{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDEPL{margin-top:0 !important;}.GPBYFDEAM{margin-left:5px;}'));return true}return false}\nfunction vEc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new XXb;$Rb(a,(b=new jUb(Zid),$Rb(b,(c=new OWb,c.a='Offline',NWb(c),c)),$Rb(b,(d=new YSb,$Rb(d,(e=new UUb((D4b(),A4b)),pdb((Jkb(),e.db),'GPBYFDEPL',true),Hkc(e.b,hpd),_Rb(e,e.b,0),e)),$Rb(d,new Bkc((j=new EHb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new gbb(j.a)).a)),$Rb(d,(f=new pOc,MXb(f,(k=new EHb,k.a+=ipd,new gbb(k.a)).a),pdb(f.db,cjd,true),f)),$Rb(d,new Bkc((l=new EHb,l.a+=jpd,new gbb(l.a)).a)),$Rb(d,(g=new pOc,MXb(g,(m=new EHb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new gbb(m.a)).a),pdb(g.db,cjd,true),g)),pdb(d.db,'GPBYFDEOL',true),d)),$Rb(b,(h=new $Wb,$Rb(h,(n=new nXb,$Rb(n,(o=new UUb(z4b),Hkc(o.b,'What is Offline?'),_Rb(o,o.b,0),o)),n)),$Rb(h,(p=new aXb,$Rb(p,new ukc((q=new EHb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new gbb(q.a)).a)),p)),$Rb(h,new kXb),h)),$Rb(b,(i=new $Wb,$Rb(i,(r=new nXb,$Rb(r,(s=new UUb(z4b),Hkc(s.b,'How to configure?'),_Rb(s,s.b,0),s)),r)),$Rb(i,(t=new aXb,$Rb(t,new Bkc((u=new EHb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new gbb(u.a)).a)),$Rb(t,(v=new pOc,MXb(v,(w=new EHb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new gbb(w.a)).a),pdb(v.db,cjd,true),v)),$Rb(t,new Bkc((A=new EHb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new gbb(A.a)).a)),$Rb(t,(B=new pOc,MXb(B,(C=new EHb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new gbb(C.a)).a),pdb(B.db,cjd,true),B)),$Rb(t,new Bkc((D=new EHb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new gbb(D.a)).a)),$Rb(t,(F=new pOc,MXb(F,(G=new EHb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new gbb(G.a)).a),pdb(F.db,cjd,true),F)),t)),$Rb(i,new kXb),i)),b));return a}\nh9(378,216,nhd,ukc);h9(892,48,_fd,nEc);var r0=VFb(Nid,'OfflinePresenter',892);h9(1125,agd,bgd,tEc);var w0=VFb(Nid,'OfflineView',1125);h9(1350,1,{},uEc);var v0=VFb(Nid,'OfflineView_BinderImpl',1350);h9(1351,1,{},wEc);var s0=VFb(Nid,'OfflineView_BinderImpl/Widgets',1351);h9(1674,1,{},yEc);var xEc;var u0=VFb(Nid,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator',1674);h9(1675,1,{},AEc);_.a=false;var t0=VFb(Nid,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator/1',1675);h9(817,1,lid);_.Ob=function RJc(){hDb(this.b,rIc(this.a.a))};Pdd(mm)(39);\n//# sourceURL=GwtBootstrap3Demo-39.js\n")
