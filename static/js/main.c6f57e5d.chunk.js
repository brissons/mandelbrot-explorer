(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{129:function(t,e,a){"use strict";a.r(e);var i=a(0),s=a.n(i),n=a(53),r=a.n(n),o=(a(39),a(33)),c=a.n(o),l=a(54),h=a(55),d=a(34);var p=class extends i.Component{render(){const t={loop:!0,autoplay:!0,animationData:l,rendererSettings:{preserveAspectRatio:"xMidYMid slice"}},e={loop:!0,autoplay:!0,animationData:h,rendererSettings:{preserveAspectRatio:"xMidYMid slice"}};return s.a.createElement(s.a.Fragment,null,s.a.createElement(d.BrowserView,null,s.a.createElement("div",{className:"mouseClick"},s.a.createElement(c.a,{options:t,height:75,width:75}))),s.a.createElement(d.MobileView,null,s.a.createElement("div",{className:"handClick"},s.a.createElement(c.a,{options:e,height:125,width:125}))))}},m=a(56),x=a.n(m),k=a(20);var u=class extends s.a.Component{constructor(t){super(t),this.state={rendered:!1}}imageLoaded(){this.setState({rendered:!0})}render(){return s.a.createElement("div",{onClick:this.props.onClick,className:this.props.intro?"introContainer fadeIn":"introContainer noPointer fadeOut"},s.a.createElement("img",{ref:"placeholder-image",src:x.a,onLoad:this.imageLoaded.bind(this),className:"introBlur",alt:"mandelBrot-blurry"}),s.a.createElement("div",{className:"introContainer"},s.a.createElement("div",{className:this.props.loading?"spinner spinnerIntroFadeIn":"spinner spinnerIntroFadeOut"},s.a.createElement(k.CircleSpinner,{size:25,color:"#8c8c8c",loading:!0})),s.a.createElement("div",{style:{opacity:0},className:!this.props.loading&&this.state.rendered?"introMouseFadeIn":""},s.a.createElement(p,null))))}},g=a(59);var y=class extends s.a.Component{calculateText(){return this.props.scale<1e4?[this.props.scale,"",""]:[this.props.scale.toExponential(1).substring(0,3),"\xb710",this.props.scale.toString(10).length-1]}render(){let t=this.calculateText();return s.a.createElement("div",{className:this.props.intro?"invisible introContainer noPointer":"visible introContainer noPointer"},s.a.createElement("div",{className:this.props.loading?"":"fadeOut"},s.a.createElement("div",{className:this.props.loading?"scaleBackground scaleFadeOut":"invisible"},s.a.createElement(g.Textfit,{mode:"multi",className:"text",max:56},s.a.createElement("div",{className:"scale"},s.a.createElement("p",null,t[0],s.a.createElement("text",{style:{fontSize:14}},t[1]),s.a.createElement("text",{className:"super"},t[2]))))),s.a.createElement("div",{className:this.props.loading?"scaleSpinner center scaleSpinnerFadeIn":"scaleSpinner center",style:{opacity:0}},s.a.createElement(k.CircleSpinner,{size:25,color:"#FFFFFF",loading:!0}))))}},E=a(60),v=a.n(E);var f=class extends i.Component{render(){return s.a.createElement("div",{className:this.props.end&&!this.props.loading?"fadeIn scaleBackground":" invisible noPointer scaleBackground",style:{zIndex:4,cursor:"pointer"},onClick:this.props.onClick},s.a.createElement("img",{src:v.a,alt:"Restart from beginning.",className:"reloadIcon"}))}},w="https://mandelbrot-service.herokuapp.com/mandelbrot?";var S=class extends s.a.Component{constructor(t){super(t),this.handleClick=(t=>{if(this.state.scale>4398046511104)this.setState({end:!0});else if(!this.state.loading){const e=this.refs.canvas;let a=e.getBoundingClientRect(),i=a.width/a.height<4/3?4*a.height/3:a.width,s=a.width/a.height>4/3?3*a.width/4:a.height,n=e.width/i,r=e.height/s,o=(t.clientX-a.width/2+i/2-a.left)*n,c=(t.clientY-a.height/2+s/2-a.top)*r;this.setState(t=>({x:t.x+(o-this.state.width/2)/this.state.scale,y:t.y+(c-this.state.height/2)/this.state.scale,i:t.i+=10,scale:t.scale*=2,loading:!0}))}}),this.state={width:1920,height:1440,x:920,y:720,scale:1,i:50,intro:!0,loading:!0,end:!1},this.startingState=this.state}componentDidMount(){let t=this.refs.canvas,e=this.refs.canvas.getContext("2d"),a=this.refs.canvasTwo.getContext("2d"),i=this.refs.image;i.onload=(()=>{a.drawImage(i,0,0),t.classList.remove("visible"),t.classList.add("fadeOut"),setTimeout(function(){e.drawImage(i,0,0),t.classList.remove("fadeOut"),t.classList.add("visible")},500),this.setState({loading:!1})})}removeIntro(){this.state.loading||this.setState({intro:!1})}restart(){this.setState(this.startingState)}render(){var t=w+"width="+this.state.width+"&height="+this.state.height+"&x="+this.state.x+"&y="+this.state.y+"&scale="+this.state.scale+"&i="+this.state.i;return console.log(t),s.a.createElement(s.a.Fragment,null,s.a.createElement(u,{intro:this.state.intro,loading:this.state.loading,onClick:this.removeIntro.bind(this)}),s.a.createElement(y,{scale:this.state.scale,intro:this.state.intro,loading:this.state.loading}),s.a.createElement(f,{end:this.state.end,loading:this.state.loading,onClick:this.restart.bind(this)}),s.a.createElement("canvas",{ref:"canvas",className:"center",style:{zIndex:"1"},width:this.state.width,height:this.state.height,onClick:this.handleClick.bind(this)}),s.a.createElement("canvas",{ref:"canvasTwo",className:"center",width:this.state.width,height:this.state.height}),s.a.createElement("img",{ref:"image",src:t,alt:"new",style:{display:"none"}})," ;")}};const B=document.getElementById("root");r.a.render(s.a.createElement(S,null),B)},39:function(t,e,a){},54:function(t){t.exports={v:"4.10.1",fr:30,ip:0,op:45,w:1280,h:720,nm:"Comp 1",ddd:0,assets:[],layers:[{ddd:0,ind:1,ty:4,nm:"Tool Outlines",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[817.747,342.922,0],ix:2},a:{a:0,k:[960,540,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[-86.502,0],[0,0]],o:[[0,-81.179],[0,0],[0,0]],v:[[-78.313,73.494],[78.313,-73.494],[78.313,73.494]],c:!1},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[.203921568627,.211764705882,.196078431373,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[698.518,405.783],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:1,k:[{i:{x:[.833,.833],y:[.833,.833]},o:{x:[.167,.167],y:[.167,.167]},n:["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],t:0,s:[100,100],e:[95,95]},{i:{x:[.833,.833],y:[.833,.833]},o:{x:[.167,.167],y:[.167,.167]},n:["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],t:7,s:[95,95],e:[100,100]},{t:15.0000006109625}],ix:3},r:{a:0,k:0,ix:6},o:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:0,s:[100],e:[80]},{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:7,s:[80],e:[100]},{t:15.0000006109625}],ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[86.502,0],[0,0]],o:[[0,-81.179],[0,0],[0,0]],v:[[78.313,73.494],[-78.313,-73.494],[-78.313,73.494]],c:!1},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[.203921568627,.211764705882,.196078431373,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[865.988,405.783],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 2",np:2,cix:2,ix:2,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[89.497,0],[0,89.497],[0,0],[0,0]],o:[[0,89.497],[-89.497,0],[0,0],[0,0],[0,0]],v:[[162.048,-16.867],[0,145.18],[-162.049,-16.867],[-162.049,-145.18],[162.048,-145.18]],c:!0},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[.203921568627,.211764705882,.196078431373,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[782.253,636.687],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 3",np:2,cix:2,ix:3,mn:"ADBE Vector Group",hd:!1}],ip:0,op:300.00001221925,st:0,bm:0}]}},55:function(t){t.exports={v:"5.5.1",fr:30,ip:0,op:60,w:124,h:124,nm:"tap",ddd:0,assets:[],layers:[{ddd:0,ind:1,ty:4,nm:"hand 2",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:1,k:[{i:{x:[.667],y:[1]},o:{x:[.333],y:[0]},t:4,s:[0]},{i:{x:[.667],y:[1]},o:{x:[.333],y:[0]},t:18,s:[-4.231]},{t:31,s:[0]}],ix:10},p:{a:0,k:[65.077,83.85,0],ix:2},a:{a:0,k:[26.739,44.532,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:1,k:[{i:{x:.667,y:1},o:{x:.333,y:0},t:4,s:[{i:[[0,0],[0,0],[-1.959,0],[0,-1.96],[0,0],[0,0],[-1.425,-1.299],[0,0],[0,-2.175],[0,0],[4.552,0],[0,0],[1.594,2.113],[0,0],[-1.386,1.386],[-1.386,-1.385],[0,0]],o:[[0,0],[0,-1.96],[1.961,0],[0,0],[0,0],[1.929,0],[0,0],[1.606,1.465],[0,0],[0,4.551],[0,0],[-2.647,0],[0,0],[-1.386,-1.386],[1.386,-1.385],[0,0],[0,0]],v:[[-7.02,8.663],[-7.02,-18.467],[-3.458,-22.031],[.107,-18.467],[.107,-3.592],[8.277,-3.592],[13.488,-1.574],[15.967,.686],[18.49,6.4],[18.49,13.792],[10.249,22.031],[-3.12,22.031],[-9.855,18.676],[-17.104,9.066],[-17.104,4.027],[-12.064,4.027],[-7.324,8.412]],c:!1}]},{i:{x:.667,y:1},o:{x:.333,y:0},t:16,s:[{i:[[0,0],[0,0],[-1.959,0],[0,-1.96],[0,0],[0,0],[-1.425,-1.299],[0,0],[0,-2.175],[0,0],[4.552,0],[0,0],[1.594,2.113],[0,0],[-1.386,1.386],[-1.386,-1.385],[0,0]],o:[[0,0],[0,-1.96],[1.961,0],[0,0],[0,0],[1.929,0],[0,0],[1.606,1.465],[0,0],[0,4.551],[0,0],[-2.647,0],[0,0],[-1.386,-1.386],[1.386,-1.385],[0,0],[0,0]],v:[[-7.02,8.662],[-8.333,-15.592],[-4.77,-19.156],[-1.206,-15.592],[.107,-3.592],[8.277,-3.592],[13.488,-1.574],[15.967,.687],[18.49,6.4],[18.49,13.792],[10.249,22.031],[-3.12,22.031],[-9.855,18.676],[-16.138,10.569],[-16.138,5.529],[-11.098,5.529],[-7.324,8.412]],c:!1}]},{i:{x:.667,y:1},o:{x:.333,y:0},t:20,s:[{i:[[0,0],[0,0],[-1.959,0],[0,-1.96],[0,0],[0,0],[-1.425,-1.299],[0,0],[0,-2.175],[0,0],[4.552,0],[0,0],[1.594,2.113],[0,0],[-1.386,1.386],[-1.386,-1.385],[0,0]],o:[[0,0],[0,-1.96],[1.961,0],[0,0],[0,0],[1.929,0],[0,0],[1.606,1.465],[0,0],[0,4.551],[0,0],[-2.647,0],[0,0],[-1.386,-1.386],[1.386,-1.385],[0,0],[0,0]],v:[[-7.02,8.662],[-8.333,-15.592],[-4.77,-19.156],[-1.206,-15.592],[.107,-3.592],[8.277,-3.592],[13.488,-1.574],[15.967,.687],[18.49,6.4],[18.49,13.792],[10.249,22.031],[-3.12,22.031],[-9.855,18.676],[-16.138,10.569],[-16.138,5.529],[-11.098,5.529],[-7.325,8.412]],c:!1}]},{t:31,s:[{i:[[0,0],[0,0],[-1.959,0],[0,-1.96],[0,0],[0,0],[-1.425,-1.299],[0,0],[0,-2.175],[0,0],[4.552,0],[0,0],[1.594,2.113],[0,0],[-1.386,1.386],[-1.386,-1.385],[0,0]],o:[[0,0],[0,-1.96],[1.961,0],[0,0],[0,0],[1.929,0],[0,0],[1.606,1.465],[0,0],[0,4.551],[0,0],[-2.647,0],[0,0],[-1.386,-1.386],[1.386,-1.385],[0,0],[0,0]],v:[[-7.02,8.663],[-7.02,-18.467],[-3.458,-22.031],[.107,-18.467],[.107,-3.592],[8.277,-3.592],[13.488,-1.574],[15.967,.686],[18.49,6.4],[18.49,13.792],[10.249,22.031],[-3.12,22.031],[-9.855,18.676],[-17.104,9.066],[-17.104,4.027],[-12.064,4.027],[-7.324,8.412]],c:!1}]}],ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.611764705882353,.611764705882353,.611764705882353,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:2,ix:5},lc:2,lj:2,bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[23.489,27.032],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:2,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:60,st:0,bm:0},{ddd:0,ind:2,ty:4,nm:"lines ",parent:1,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[19.807,3.237,0],ix:2},a:{a:0,k:[11.98,6.058,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[-1.702,2.259],[4.693,-5.269]],c:!1},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.611764705882353,.611764705882353,.611764705882353,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:2,ix:5},lc:2,lj:2,bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[21.258,8.856],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 1",np:2,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[.01,2.829],[.019,-6.704]],c:!1},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.611764705882353,.611764705882353,.611764705882353,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:2,ix:5},lc:2,lj:2,bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[11.989,3.829],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 2",np:2,cix:2,bm:0,ix:2,mn:"ADBE Vector Group",hd:!1},{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[1.719,2.247],[-4.279,-4.812]],c:!1},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[.611764705882353,.611764705882353,.611764705882353,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:2,ix:5},lc:2,lj:2,bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[2.719,8.015],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Group 3",np:2,cix:2,bm:0,ix:3,mn:"ADBE Vector Group",hd:!1},{ty:"tm",s:{a:1,k:[{i:{x:[.667],y:[1]},o:{x:[.333],y:[0]},t:17,s:[0]},{t:27,s:[100]}],ix:1},e:{a:1,k:[{i:{x:[.667],y:[1]},o:{x:[.333],y:[0]},t:13,s:[0]},{t:24,s:[100]}],ix:2},o:{a:0,k:0,ix:3},m:1,ix:4,nm:"Trim Paths 1",mn:"ADBE Vector Filter - Trim",hd:!1}],ip:0,op:60,st:0,bm:0}],markers:[]}},56:function(t,e,a){t.exports=a.p+"static/media/placeHolder.56431f47.png"},60:function(t,e,a){t.exports=a.p+"static/media/restart.26926850.svg"},63:function(t,e,a){t.exports=a(129)}},[[63,1,2]]]);
//# sourceMappingURL=main.c6f57e5d.chunk.js.map