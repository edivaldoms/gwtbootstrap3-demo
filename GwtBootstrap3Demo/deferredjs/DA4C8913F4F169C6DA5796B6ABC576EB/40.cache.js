$wnd.GwtBootstrap3Demo.runAsyncCallback40("function bFc(){}\nfunction fFc(){}\nfunction hFc(){}\nfunction iFc(){iFc=A9;eFc=new hFc}\nfunction aFc(){QBb(this,cFc(new dFc))}\nfunction Kkc(a){wqb.call(this,a);Jkc(this)}\nfunction WEc(a,b,c){fBb();BBb.call(this,a,b,c,(dlc(),clc))}\nfunction dFc(){this.a=(new fFc,iFc(),eFc);gFc(this.a)}\nfunction dJc(a){var b;if(!a.L){b=new aFc(new bFc);a.L=b}return a.L}\nfunction cJc(a){var b;if(!a.K){b=new WEc(GAb(dCb(a.a)),dJc(a),bJc(a));ZAb((gCb(a.a),b),sCb(gCb(a.a)));a.K=b}return a.K}\nfunction gFc(a){if(!a.a){a.a=true;Hu((HA(),'.GPBYFDEBM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDECM{margin-top:0 !important;}.GPBYFDEDM{margin-left:5px;}'));return true}return false}\nfunction cFc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new oYb;tSb(a,(b=new DUb(akd),tSb(b,(c=new fXb,c.a='Offline',eXb(c),c)),tSb(b,(d=new qTb,tSb(d,(e=new mVb((T4b(),Q4b)),Ddb((Vkb(),e.db),'GPBYFDECM',true),Xkc(e.b,lqd),uSb(e,e.b,0),e)),tSb(d,new Rkc((j=new ZHb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new ubb(j.a)).a)),tSb(d,(f=new fPc,dYb(f,(k=new ZHb,k.a+=mqd,new ubb(k.a)).a),Ddb(f.db,fkd,true),f)),tSb(d,new Rkc((l=new ZHb,l.a+=nqd,new ubb(l.a)).a)),tSb(d,(g=new fPc,dYb(g,(m=new ZHb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new ubb(m.a)).a),Ddb(g.db,fkd,true),g)),Ddb(d.db,'GPBYFDEBM',true),d)),tSb(b,(h=new rXb,tSb(h,(n=new GXb,tSb(n,(o=new mVb(P4b),Xkc(o.b,'What is Offline?'),uSb(o,o.b,0),o)),n)),tSb(h,(p=new tXb,tSb(p,new Kkc((q=new ZHb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new ubb(q.a)).a)),p)),tSb(h,new DXb),h)),tSb(b,(i=new rXb,tSb(i,(r=new GXb,tSb(r,(s=new mVb(P4b),Xkc(s.b,'How to configure?'),uSb(s,s.b,0),s)),r)),tSb(i,(t=new tXb,tSb(t,new Rkc((u=new ZHb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new ubb(u.a)).a)),tSb(t,(v=new fPc,dYb(v,(w=new ZHb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new ubb(w.a)).a),Ddb(v.db,fkd,true),v)),tSb(t,new Rkc((A=new ZHb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new ubb(A.a)).a)),tSb(t,(B=new fPc,dYb(B,(C=new ZHb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new ubb(C.a)).a),Ddb(B.db,fkd,true),B)),tSb(t,new Rkc((D=new ZHb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new ubb(D.a)).a)),tSb(t,(F=new fPc,dYb(F,(G=new ZHb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new ubb(G.a)).a),Ddb(F.db,fkd,true),F)),t)),tSb(i,new DXb),i)),b));return a}\nz9(378,216,pid,Kkc);z9(894,48,bhd,WEc);var H0=oGb(Rjd,'OfflinePresenter',894);z9(1129,chd,dhd,aFc);var M0=oGb(Rjd,'OfflineView',1129);z9(1358,1,{},bFc);var L0=oGb(Rjd,'OfflineView_BinderImpl',1358);z9(1359,1,{},dFc);var I0=oGb(Rjd,'OfflineView_BinderImpl/Widgets',1359);z9(1685,1,{},fFc);var eFc;var K0=oGb(Rjd,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator',1685);z9(1686,1,{},hFc);_.a=false;var J0=oGb(Rjd,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator/1',1686);z9(818,1,njd);_.Ob=function BJc(){CDb(this.b,cJc(this.a.a))};Oed(mm)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")
