$wnd.GwtBootstrap3Demo.runAsyncCallback40("function BTc(){}\nfunction FTc(){}\nfunction HTc(){}\nfunction ITc(){ITc=cib;ETc=new HTc}\nfunction Ixc(a){Bzb.call(this,a);Hxc(this)}\nfunction ATc(){NKb.call(this);LKb(this,CTc(new DTc))}\nfunction uTc(a,b,c){ZJb();vKb.call(this,a,b,c,(_xc(),$xc))}\nfunction DTc(){this.a=(new FTc,ITc(),ETc);GTc(this.a)}\nfunction PYc(a){var b;if(!a.M){b=new ATc(new BTc);a.M=b}return a.M}\nfunction OYc(a){var b;if(!a.L){b=new uTc(yJb(aLb(a.a)),PYc(a),NYc(a));RJb((dLb(a.a),b),pLb(dLb(a.a)));a.L=b}return a.L}\nfunction GTc(a){if(!a.a){a.a=true;Rx((UD(),'.GPBYFDEEM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDEFM{margin-top:0 !important;}.GPBYFDEGM{margin-left:5px;}'));return true}return false}\nfunction CTc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new F6b;U_b(a,(b=new r2b(rOd),U_b(b,(c=new j5b,c.a='Offline',i5b(c),c)),U_b(b,(d=new e1b,U_b(d,(e=new d3b((jfc(),gfc)),gmb((Etb(),e.eb),'GPBYFDEFM',true),Wxc(e.b,wUd),V_b(e,e.b,0),e)),U_b(d,new Qxc((j=new fRb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new Yjb(j.a)).a)),U_b(d,(f=new Z2c,u6b(f,(k=new fRb,k.a+=xUd,new Yjb(k.a)).a),gmb(f.eb,wOd,true),f)),U_b(d,new Qxc((l=new fRb,l.a+=yUd,new Yjb(l.a)).a)),U_b(d,(g=new Z2c,u6b(g,(m=new fRb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new Yjb(m.a)).a),gmb(g.eb,wOd,true),g)),gmb(d.eb,'GPBYFDEEM',true),d)),U_b(b,(h=new w5b,U_b(h,(n=new L5b,U_b(n,(o=new d3b(ffc),Wxc(o.b,'What is Offline?'),V_b(o,o.b,0),o)),n)),U_b(h,(p=new y5b,U_b(p,new Ixc((q=new fRb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new Yjb(q.a)).a)),p)),U_b(h,new I5b),h)),U_b(b,(i=new w5b,U_b(i,(r=new L5b,U_b(r,(s=new d3b(ffc),Wxc(s.b,'How to configure?'),V_b(s,s.b,0),s)),r)),U_b(i,(t=new y5b,U_b(t,new Qxc((u=new fRb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new Yjb(u.a)).a)),U_b(t,(v=new Z2c,u6b(v,(w=new fRb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new Yjb(w.a)).a),gmb(v.eb,wOd,true),v)),U_b(t,new Qxc((A=new fRb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new Yjb(A.a)).a)),U_b(t,(B=new Z2c,u6b(B,(C=new fRb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new Yjb(C.a)).a),gmb(B.eb,wOd,true),B)),U_b(t,new Qxc((D=new fRb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new Yjb(D.a)).a)),U_b(t,(F=new Z2c,u6b(F,(G=new fRb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new Yjb(G.a)).a),gmb(F.eb,wOd,true),F)),t)),U_b(i,new I5b),i)),b));return a}\nbib(408,233,dLd,Ixc);bib(1012,44,pLd,uTc);var t6=vPb(hOd,'OfflinePresenter',1012);bib(1251,47,qLd,ATc);var y6=vPb(hOd,'OfflineView',1251);bib(1526,1,{},BTc);var x6=vPb(hOd,'OfflineView_BinderImpl',1526);bib(1527,1,{},DTc);var u6=vPb(hOd,'OfflineView_BinderImpl/Widgets',1527);bib(1876,1,{},FTc);var ETc;var w6=vPb(hOd,'OfflineView_BinderImpl_GenBundle_en_InlineClientBundleGenerator',1876);bib(1877,1,{},HTc);_.a=false;var v6=vPb(hOd,'OfflineView_BinderImpl_GenBundle_en_InlineClientBundleGenerator/1',1877);bib(934,1,DNd);_.Sb=function oZc(){IMb(this.b,OYc(this.a.a))};LId(vp)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")
