$wnd.GwtBootstrap3Demo.runAsyncCallback39("function zDc(){}\nfunction DDc(){}\nfunction FDc(){}\nfunction GDc(){GDc=n8;CDc=new FDc}\nfunction yDc(){AAb(this,ADc(new BDc))}\nfunction zjc(a){opb.call(this,a);yjc(this)}\nfunction sDc(a,b,c){Rzb();lAb.call(this,a,b,c,(Ujc(),Tjc))}\nfunction BDc(){this.a=(new DDc,GDc(),CDc);EDc(this.a)}\nfunction xHc(a){var b;if(!a.I){b=new yDc(new zDc);a.I=b}return a.I}\nfunction wHc(a){var b;if(!a.H){b=new sDc(qzb(PAb(a.a)),xHc(a),vHc(a));Jzb((SAb(a.a),b),cBb(SAb(a.a)));a.H=b}return a.H}\nfunction EDc(a){if(!a.a){a.a=true;zu((dA(),'.GPBYFDEOL{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDEPL{margin-top:0 !important;}.GPBYFDEAM{margin-left:5px;}'));return true}return false}\nfunction ADc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new aXb;dRb(a,(b=new oTb(did),dRb(b,(c=new TVb,c.a='Offline',SVb(c),c)),dRb(b,(d=new bSb,dRb(d,(e=new ZTb((I3b(),F3b)),ucb((Ojb(),e.db),'GPBYFDEPL',true),Mjc(e.b,ood),eRb(e,e.b,0),e)),dRb(d,new Gjc((j=new JGb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new lab(j.a)).a)),dRb(d,(f=new uNc,RWb(f,(k=new JGb,k.a+=pod,new lab(k.a)).a),ucb(f.db,iid,true),f)),dRb(d,new Gjc((l=new JGb,l.a+=qod,new lab(l.a)).a)),dRb(d,(g=new uNc,RWb(g,(m=new JGb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new lab(m.a)).a),ucb(g.db,iid,true),g)),ucb(d.db,'GPBYFDEOL',true),d)),dRb(b,(h=new dWb,dRb(h,(n=new sWb,dRb(n,(o=new ZTb(E3b),Mjc(o.b,'What is Offline?'),eRb(o,o.b,0),o)),n)),dRb(h,(p=new fWb,dRb(p,new zjc((q=new JGb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new lab(q.a)).a)),p)),dRb(h,new pWb),h)),dRb(b,(i=new dWb,dRb(i,(r=new sWb,dRb(r,(s=new ZTb(E3b),Mjc(s.b,'How to configure?'),eRb(s,s.b,0),s)),r)),dRb(i,(t=new fWb,dRb(t,new Gjc((u=new JGb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new lab(u.a)).a)),dRb(t,(v=new uNc,RWb(v,(w=new JGb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new lab(w.a)).a),ucb(v.db,iid,true),v)),dRb(t,new Gjc((A=new JGb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new lab(A.a)).a)),dRb(t,(B=new uNc,RWb(B,(C=new JGb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new lab(C.a)).a),ucb(B.db,iid,true),B)),dRb(t,new Gjc((D=new JGb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new lab(D.a)).a)),dRb(t,(F=new uNc,RWb(F,(G=new JGb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new lab(G.a)).a),ucb(F.db,iid,true),F)),t)),dRb(i,new pWb),i)),b));return a}\nm8(378,216,tgd,zjc);m8(893,48,ffd,sDc);var w_=$Eb(Thd,'OfflinePresenter',893);m8(1126,gfd,hfd,yDc);var B_=$Eb(Thd,'OfflineView',1126);m8(1351,1,{},zDc);var A_=$Eb(Thd,'OfflineView_BinderImpl',1351);m8(1352,1,{},BDc);var x_=$Eb(Thd,'OfflineView_BinderImpl/Widgets',1352);m8(1673,1,{},DDc);var CDc;var z_=$Eb(Thd,'OfflineView_BinderImpl_GenBundle_en_InlineClientBundleGenerator',1673);m8(1674,1,{},FDc);_.a=false;var y_=$Eb(Thd,'OfflineView_BinderImpl_GenBundle_en_InlineClientBundleGenerator/1',1674);m8(818,1,rhd);_.Ob=function WIc(){mCb(this.b,wHc(this.a.a))};Tcd(mm)(39);\n//# sourceURL=GwtBootstrap3Demo-39.js\n")
