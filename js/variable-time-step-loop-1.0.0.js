



<!DOCTYPE html>
<html>
<head>
 <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" >
 <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" >
 
 <meta name="ROBOTS" content="NOARCHIVE">
 
 <link rel="icon" type="image/vnd.microsoft.icon" href="http://www.gstatic.com/codesite/ph/images/phosting.ico">
 
 
 <script type="text/javascript">
 
 
 
 
 var codesite_token = "QeQ3CrvbjWSIt0B6Qa8mNe8zI2Y:1334507683279";
 
 
 var CS_env = {"profileUrl":["/u/100630599901009391548/"],"token":"QeQ3CrvbjWSIt0B6Qa8mNe8zI2Y:1334507683279","assetHostPath":"http://www.gstatic.com/codesite/ph","domainName":null,"assetVersionPath":"http://www.gstatic.com/codesite/ph/17979195433110598383","projectHomeUrl":"/p/kineticjs-viewport","relativeBaseUrl":"","projectName":"kineticjs-viewport","loggedInUserEmail":"alundgren04@gmail.com"};
 var _gaq = _gaq || [];
 _gaq.push(
 ['siteTracker._setAccount', 'UA-18071-1'],
 ['siteTracker._trackPageview']);
 
 
 </script>
 
 
 <title>variable-time-step-loop-1.0.0.js - 
 kineticjs-viewport -
 
 
 A KineticJS extension for displaying a view region of a larger logical space. - Google Project Hosting
 </title>
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/17979195433110598383/css/core.css">
 
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/17979195433110598383/css/ph_detail.css" >
 
 
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/17979195433110598383/css/d_sb.css" >
 
 
 
<!--[if IE]>
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/17979195433110598383/css/d_ie.css" >
<![endif]-->
 <style type="text/css">
 .menuIcon.off { background: no-repeat url(http://www.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 -42px }
 .menuIcon.on { background: no-repeat url(http://www.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 -28px }
 .menuIcon.down { background: no-repeat url(http://www.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 0; }
 
 
 
  tr.inline_comment {
 background: #fff;
 vertical-align: top;
 }
 div.draft, div.published {
 padding: .3em;
 border: 1px solid #999; 
 margin-bottom: .1em;
 font-family: arial, sans-serif;
 max-width: 60em;
 }
 div.draft {
 background: #ffa;
 } 
 div.published {
 background: #e5ecf9;
 }
 div.published .body, div.draft .body {
 padding: .5em .1em .1em .1em;
 max-width: 60em;
 white-space: pre-wrap;
 white-space: -moz-pre-wrap;
 white-space: -pre-wrap;
 white-space: -o-pre-wrap;
 word-wrap: break-word;
 font-size: 1em;
 }
 div.draft .actions {
 margin-left: 1em;
 font-size: 90%;
 }
 div.draft form {
 padding: .5em .5em .5em 0;
 }
 div.draft textarea, div.published textarea {
 width: 95%;
 height: 10em;
 font-family: arial, sans-serif;
 margin-bottom: .5em;
 }

 
 .nocursor, .nocursor td, .cursor_hidden, .cursor_hidden td {
 background-color: white;
 height: 2px;
 }
 .cursor, .cursor td {
 background-color: darkblue;
 height: 2px;
 display: '';
 }
 
 
.list {
 border: 1px solid white;
 border-bottom: 0;
}

 
 </style>
</head>
<body class="t4">
<script type="text/javascript">
 (function() {
 var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
 ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
 (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ga);
 })();
</script>
<script type="text/javascript">
 window.___gcfg = {lang: 'en'};
 (function() 
 {var po = document.createElement("script");
 po.type = "text/javascript"; po.async = true;po.src = "https://apis.google.com/js/plusone.js";
 var s = document.getElementsByTagName("script")[0];
 s.parentNode.insertBefore(po, s);
 })();
</script>
<div class="headbg">

 <div id="gaia">
 

 <span>
 
 
 <a href="#" id="multilogin-dropdown" onclick="return false;"
 ><u><b>alundgren04@gmail.com</b></u> <small>&#9660;</small></a>
 
 
 | <a href="/u/100630599901009391548/" id="projects-dropdown" onclick="return false;"
 ><u>My favorites</u> <small>&#9660;</small></a>
 | <a href="/u/100630599901009391548/" onclick="_CS_click('/gb/ph/profile');"
 title="Profile, Updates, and Settings"
 ><u>Profile</u></a>
 | <a href="https://www.google.com/accounts/Logout?continue=http%3A%2F%2Fcode.google.com%2Fp%2Fkineticjs-viewport%2Fsource%2Fbrowse%2Fjs%2Fvariable-time-step-loop-1.0.0.js" 
 onclick="_CS_click('/gb/ph/signout');"
 ><u>Sign out</u></a>
 
 </span>

 </div>

 <div class="gbh" style="left: 0pt;"></div>
 <div class="gbh" style="right: 0pt;"></div>
 
 
 <div style="height: 1px"></div>
<!--[if lte IE 7]>
<div style="text-align:center;">
Your version of Internet Explorer is not supported. Try a browser that
contributes to open source, such as <a href="http://www.firefox.com">Firefox</a>,
<a href="http://www.google.com/chrome">Google Chrome</a>, or
<a href="http://code.google.com/chrome/chromeframe/">Google Chrome Frame</a>.
</div>
<![endif]-->



 <table style="padding:0px; margin: 0px 0px 10px 0px; width:100%" cellpadding="0" cellspacing="0"
 itemscope itemtype="http://schema.org/CreativeWork">
 <tr style="height: 58px;">
 
 <td id="plogo">
 <link itemprop="url" href="/p/kineticjs-viewport">
 <a href="/p/kineticjs-viewport/">
 
 
 <img src="/p/kineticjs-viewport/logo?cct=1332283147"
 alt="Logo" itemprop="image">
 
 </a>
 </td>
 
 <td style="padding-left: 0.5em">
 
 <div id="pname">
 <a href="/p/kineticjs-viewport/"><span itemprop="name">kineticjs-viewport</span></a>
 </div>
 
 <div id="psum">
 <a id="project_summary_link"
 href="/p/kineticjs-viewport/"><span itemprop="description">A KineticJS extension for displaying a view region of a larger logical space.</span></a>
 
 </div>
 
 
 </td>
 <td style="white-space:nowrap;text-align:right; vertical-align:bottom;">
 
 <form action="/hosting/search">
 <input size="30" name="q" value="" type="text">
 
 <input type="submit" name="projectsearch" value="Search projects" >
 </form>
 
 </tr>
 </table>

</div>

 
<div id="mt" class="gtb"> 
 <a href="/p/kineticjs-viewport/" class="tab ">Project&nbsp;Home</a>
 
 
 
 
 <a href="/p/kineticjs-viewport/downloads/list" class="tab ">Downloads</a>
 
 
 
 
 
 <a href="/p/kineticjs-viewport/w/list" class="tab ">Wiki</a>
 
 
 
 
 
 <a href="/p/kineticjs-viewport/issues/list"
 class="tab ">Issues</a>
 
 
 
 
 
 <a href="/p/kineticjs-viewport/source/checkout"
 class="tab active">Source</a>
 
 
 <a href="/p/kineticjs-viewport/admin"
 class="tab inactive">Administer</a>
 
 
 
 
 <div class=gtbc></div>
</div>
<table cellspacing="0" cellpadding="0" width="100%" align="center" border="0" class="st">
 <tr>
 
 
 
 
 
 
 <td class="subt">
 <div class="st2">
 <div class="isf">
 
 <form action="/p/kineticjs-viewport/source/browse" style="display: inline">
 
 Repository:
 <select name="repo" id="repo" style="font-size: 92%" onchange="submit()">
 <option value="default">default</option><option value="wiki">wiki</option>
 </select>
 </form>
 
 


 <span class="inst1"><a href="/p/kineticjs-viewport/source/checkout">Checkout</a></span> &nbsp;
 <span class="inst2"><a href="/p/kineticjs-viewport/source/browse/">Browse</a></span> &nbsp;
 <span class="inst3"><a href="/p/kineticjs-viewport/source/list">Changes</a></span> &nbsp;
 <span class="inst4"><a href="/p/kineticjs-viewport/source/clones">Clones</a></span> &nbsp; 
 &nbsp;
 
 <form action="/p/kineticjs-viewport/source/search" method="get" style="display:inline"
 onsubmit="document.getElementById('codesearchq').value = document.getElementById('origq').value">
 <input type="hidden" name="q" id="codesearchq" value="">
 <input type="text" maxlength="2048" size="38" id="origq" name="origq" value="" title="Google Code Search" style="font-size:92%">&nbsp;<input type="submit" value="Search Trunk" name="btnG" style="font-size:92%">
 
 
 
 
 <a href="/p/kineticjs-viewport/issues/entry?show=review&former=sourcelist">Request code review</a>
 
 
 
 </form>
 </div>
</div>

 </td>
 
 
 
 <td align="right" valign="top" class="bevel-right"></td>
 </tr>
</table>


<script type="text/javascript">
 var cancelBubble = false;
 function _go(url) { document.location = url; }
</script>
<div id="maincol"
 
>

 
<!-- IE -->




<div class="expand">
<div id="colcontrol">
<style type="text/css">
 #file_flipper { white-space: nowrap; padding-right: 2em; }
 #file_flipper.hidden { display: none; }
 #file_flipper .pagelink { color: #0000CC; text-decoration: underline; }
 #file_flipper #visiblefiles { padding-left: 0.5em; padding-right: 0.5em; }
</style>
<table id="nav_and_rev" class="list"
 cellpadding="0" cellspacing="0" width="100%">
 <tr>
 
 <td nowrap="nowrap" class="src_crumbs src_nav" width="33%">
 <strong class="src_nav">Source path:&nbsp;</strong>
 <span id="crumb_root">
 
 <a href="/p/kineticjs-viewport/source/browse/">git</a>/&nbsp;</span>
 <span id="crumb_links" class="ifClosed"><a href="/p/kineticjs-viewport/source/browse/js/">js</a><span class="sp">/&nbsp;</span>variable-time-step-loop-1.0.0.js</span>
 
 

 </td>
 
 
 <td nowrap="nowrap" width="33%" align="center">
 <a href="/p/kineticjs-viewport/source/browse/js/variable-time-step-loop-1.0.0.js?edit=1"
 ><img src="http://www.gstatic.com/codesite/ph/images/pencil-y14.png"
 class="edit_icon">Edit file</a>
 </td>
 
 
 <td nowrap="nowrap" width="33%" align="right">
 <table cellpadding="0" cellspacing="0" style="font-size: 100%"><tr>
 
 
 <td class="flipper"><b>f89689fb60f6</b></td>
 
 </tr></table>
 </td> 
 </tr>
</table>

<div class="fc">
 
 
 
<style type="text/css">
.undermouse span {
 background-image: url(http://www.gstatic.com/codesite/ph/images/comments.gif); }
</style>
<table class="opened" id="review_comment_area"
onmouseout="gutterOut()"><tr>
<td id="nums">
<pre><table width="100%"><tr class="nocursor"><td></td></tr></table></pre>
<pre><table width="100%" id="nums_table_0"><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_1"

 onmouseover="gutterOver(1)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',1);">&nbsp;</span
></td><td id="1"><a href="#1">1</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_2"

 onmouseover="gutterOver(2)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',2);">&nbsp;</span
></td><td id="2"><a href="#2">2</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_3"

 onmouseover="gutterOver(3)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',3);">&nbsp;</span
></td><td id="3"><a href="#3">3</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_4"

 onmouseover="gutterOver(4)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',4);">&nbsp;</span
></td><td id="4"><a href="#4">4</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_5"

 onmouseover="gutterOver(5)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',5);">&nbsp;</span
></td><td id="5"><a href="#5">5</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_6"

 onmouseover="gutterOver(6)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',6);">&nbsp;</span
></td><td id="6"><a href="#6">6</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_7"

 onmouseover="gutterOver(7)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',7);">&nbsp;</span
></td><td id="7"><a href="#7">7</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_8"

 onmouseover="gutterOver(8)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',8);">&nbsp;</span
></td><td id="8"><a href="#8">8</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_9"

 onmouseover="gutterOver(9)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',9);">&nbsp;</span
></td><td id="9"><a href="#9">9</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_10"

 onmouseover="gutterOver(10)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',10);">&nbsp;</span
></td><td id="10"><a href="#10">10</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_11"

 onmouseover="gutterOver(11)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',11);">&nbsp;</span
></td><td id="11"><a href="#11">11</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_12"

 onmouseover="gutterOver(12)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',12);">&nbsp;</span
></td><td id="12"><a href="#12">12</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_13"

 onmouseover="gutterOver(13)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',13);">&nbsp;</span
></td><td id="13"><a href="#13">13</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_14"

 onmouseover="gutterOver(14)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',14);">&nbsp;</span
></td><td id="14"><a href="#14">14</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_15"

 onmouseover="gutterOver(15)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',15);">&nbsp;</span
></td><td id="15"><a href="#15">15</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_16"

 onmouseover="gutterOver(16)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',16);">&nbsp;</span
></td><td id="16"><a href="#16">16</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_17"

 onmouseover="gutterOver(17)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',17);">&nbsp;</span
></td><td id="17"><a href="#17">17</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_18"

 onmouseover="gutterOver(18)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',18);">&nbsp;</span
></td><td id="18"><a href="#18">18</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_19"

 onmouseover="gutterOver(19)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',19);">&nbsp;</span
></td><td id="19"><a href="#19">19</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_20"

 onmouseover="gutterOver(20)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',20);">&nbsp;</span
></td><td id="20"><a href="#20">20</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_21"

 onmouseover="gutterOver(21)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',21);">&nbsp;</span
></td><td id="21"><a href="#21">21</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_22"

 onmouseover="gutterOver(22)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',22);">&nbsp;</span
></td><td id="22"><a href="#22">22</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_23"

 onmouseover="gutterOver(23)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',23);">&nbsp;</span
></td><td id="23"><a href="#23">23</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_24"

 onmouseover="gutterOver(24)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',24);">&nbsp;</span
></td><td id="24"><a href="#24">24</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_25"

 onmouseover="gutterOver(25)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',25);">&nbsp;</span
></td><td id="25"><a href="#25">25</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_26"

 onmouseover="gutterOver(26)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',26);">&nbsp;</span
></td><td id="26"><a href="#26">26</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_27"

 onmouseover="gutterOver(27)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',27);">&nbsp;</span
></td><td id="27"><a href="#27">27</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_28"

 onmouseover="gutterOver(28)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',28);">&nbsp;</span
></td><td id="28"><a href="#28">28</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_29"

 onmouseover="gutterOver(29)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',29);">&nbsp;</span
></td><td id="29"><a href="#29">29</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_30"

 onmouseover="gutterOver(30)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',30);">&nbsp;</span
></td><td id="30"><a href="#30">30</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_31"

 onmouseover="gutterOver(31)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',31);">&nbsp;</span
></td><td id="31"><a href="#31">31</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_32"

 onmouseover="gutterOver(32)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',32);">&nbsp;</span
></td><td id="32"><a href="#32">32</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_33"

 onmouseover="gutterOver(33)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',33);">&nbsp;</span
></td><td id="33"><a href="#33">33</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_34"

 onmouseover="gutterOver(34)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',34);">&nbsp;</span
></td><td id="34"><a href="#34">34</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_35"

 onmouseover="gutterOver(35)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',35);">&nbsp;</span
></td><td id="35"><a href="#35">35</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_36"

 onmouseover="gutterOver(36)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',36);">&nbsp;</span
></td><td id="36"><a href="#36">36</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_37"

 onmouseover="gutterOver(37)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',37);">&nbsp;</span
></td><td id="37"><a href="#37">37</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_38"

 onmouseover="gutterOver(38)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',38);">&nbsp;</span
></td><td id="38"><a href="#38">38</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_39"

 onmouseover="gutterOver(39)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',39);">&nbsp;</span
></td><td id="39"><a href="#39">39</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_40"

 onmouseover="gutterOver(40)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',40);">&nbsp;</span
></td><td id="40"><a href="#40">40</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_41"

 onmouseover="gutterOver(41)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',41);">&nbsp;</span
></td><td id="41"><a href="#41">41</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_42"

 onmouseover="gutterOver(42)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',42);">&nbsp;</span
></td><td id="42"><a href="#42">42</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_43"

 onmouseover="gutterOver(43)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',43);">&nbsp;</span
></td><td id="43"><a href="#43">43</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_44"

 onmouseover="gutterOver(44)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',44);">&nbsp;</span
></td><td id="44"><a href="#44">44</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_45"

 onmouseover="gutterOver(45)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',45);">&nbsp;</span
></td><td id="45"><a href="#45">45</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_46"

 onmouseover="gutterOver(46)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',46);">&nbsp;</span
></td><td id="46"><a href="#46">46</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_47"

 onmouseover="gutterOver(47)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',47);">&nbsp;</span
></td><td id="47"><a href="#47">47</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_48"

 onmouseover="gutterOver(48)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',48);">&nbsp;</span
></td><td id="48"><a href="#48">48</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_49"

 onmouseover="gutterOver(49)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',49);">&nbsp;</span
></td><td id="49"><a href="#49">49</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_50"

 onmouseover="gutterOver(50)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',50);">&nbsp;</span
></td><td id="50"><a href="#50">50</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_51"

 onmouseover="gutterOver(51)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',51);">&nbsp;</span
></td><td id="51"><a href="#51">51</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_52"

 onmouseover="gutterOver(52)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',52);">&nbsp;</span
></td><td id="52"><a href="#52">52</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_53"

 onmouseover="gutterOver(53)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',53);">&nbsp;</span
></td><td id="53"><a href="#53">53</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_54"

 onmouseover="gutterOver(54)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',54);">&nbsp;</span
></td><td id="54"><a href="#54">54</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_55"

 onmouseover="gutterOver(55)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',55);">&nbsp;</span
></td><td id="55"><a href="#55">55</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_56"

 onmouseover="gutterOver(56)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',56);">&nbsp;</span
></td><td id="56"><a href="#56">56</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_57"

 onmouseover="gutterOver(57)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',57);">&nbsp;</span
></td><td id="57"><a href="#57">57</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_58"

 onmouseover="gutterOver(58)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',58);">&nbsp;</span
></td><td id="58"><a href="#58">58</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_59"

 onmouseover="gutterOver(59)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',59);">&nbsp;</span
></td><td id="59"><a href="#59">59</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_60"

 onmouseover="gutterOver(60)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',60);">&nbsp;</span
></td><td id="60"><a href="#60">60</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_61"

 onmouseover="gutterOver(61)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',61);">&nbsp;</span
></td><td id="61"><a href="#61">61</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_62"

 onmouseover="gutterOver(62)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',62);">&nbsp;</span
></td><td id="62"><a href="#62">62</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_63"

 onmouseover="gutterOver(63)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',63);">&nbsp;</span
></td><td id="63"><a href="#63">63</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_64"

 onmouseover="gutterOver(64)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',64);">&nbsp;</span
></td><td id="64"><a href="#64">64</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_65"

 onmouseover="gutterOver(65)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',65);">&nbsp;</span
></td><td id="65"><a href="#65">65</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_66"

 onmouseover="gutterOver(66)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',66);">&nbsp;</span
></td><td id="66"><a href="#66">66</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_67"

 onmouseover="gutterOver(67)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',67);">&nbsp;</span
></td><td id="67"><a href="#67">67</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_68"

 onmouseover="gutterOver(68)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',68);">&nbsp;</span
></td><td id="68"><a href="#68">68</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_69"

 onmouseover="gutterOver(69)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',69);">&nbsp;</span
></td><td id="69"><a href="#69">69</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_70"

 onmouseover="gutterOver(70)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',70);">&nbsp;</span
></td><td id="70"><a href="#70">70</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_71"

 onmouseover="gutterOver(71)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',71);">&nbsp;</span
></td><td id="71"><a href="#71">71</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_72"

 onmouseover="gutterOver(72)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',72);">&nbsp;</span
></td><td id="72"><a href="#72">72</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_73"

 onmouseover="gutterOver(73)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',73);">&nbsp;</span
></td><td id="73"><a href="#73">73</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_74"

 onmouseover="gutterOver(74)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',74);">&nbsp;</span
></td><td id="74"><a href="#74">74</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_75"

 onmouseover="gutterOver(75)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',75);">&nbsp;</span
></td><td id="75"><a href="#75">75</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_76"

 onmouseover="gutterOver(76)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',76);">&nbsp;</span
></td><td id="76"><a href="#76">76</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_77"

 onmouseover="gutterOver(77)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',77);">&nbsp;</span
></td><td id="77"><a href="#77">77</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_78"

 onmouseover="gutterOver(78)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',78);">&nbsp;</span
></td><td id="78"><a href="#78">78</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_79"

 onmouseover="gutterOver(79)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',79);">&nbsp;</span
></td><td id="79"><a href="#79">79</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_80"

 onmouseover="gutterOver(80)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',80);">&nbsp;</span
></td><td id="80"><a href="#80">80</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_81"

 onmouseover="gutterOver(81)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',81);">&nbsp;</span
></td><td id="81"><a href="#81">81</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_82"

 onmouseover="gutterOver(82)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',82);">&nbsp;</span
></td><td id="82"><a href="#82">82</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_83"

 onmouseover="gutterOver(83)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',83);">&nbsp;</span
></td><td id="83"><a href="#83">83</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_84"

 onmouseover="gutterOver(84)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',84);">&nbsp;</span
></td><td id="84"><a href="#84">84</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_85"

 onmouseover="gutterOver(85)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',85);">&nbsp;</span
></td><td id="85"><a href="#85">85</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_86"

 onmouseover="gutterOver(86)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',86);">&nbsp;</span
></td><td id="86"><a href="#86">86</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_87"

 onmouseover="gutterOver(87)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',87);">&nbsp;</span
></td><td id="87"><a href="#87">87</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_88"

 onmouseover="gutterOver(88)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',88);">&nbsp;</span
></td><td id="88"><a href="#88">88</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_89"

 onmouseover="gutterOver(89)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',89);">&nbsp;</span
></td><td id="89"><a href="#89">89</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_90"

 onmouseover="gutterOver(90)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',90);">&nbsp;</span
></td><td id="90"><a href="#90">90</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_91"

 onmouseover="gutterOver(91)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',91);">&nbsp;</span
></td><td id="91"><a href="#91">91</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_92"

 onmouseover="gutterOver(92)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',92);">&nbsp;</span
></td><td id="92"><a href="#92">92</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_93"

 onmouseover="gutterOver(93)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',93);">&nbsp;</span
></td><td id="93"><a href="#93">93</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_94"

 onmouseover="gutterOver(94)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',94);">&nbsp;</span
></td><td id="94"><a href="#94">94</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_95"

 onmouseover="gutterOver(95)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',95);">&nbsp;</span
></td><td id="95"><a href="#95">95</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_96"

 onmouseover="gutterOver(96)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',96);">&nbsp;</span
></td><td id="96"><a href="#96">96</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_97"

 onmouseover="gutterOver(97)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',97);">&nbsp;</span
></td><td id="97"><a href="#97">97</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_98"

 onmouseover="gutterOver(98)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',98);">&nbsp;</span
></td><td id="98"><a href="#98">98</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_99"

 onmouseover="gutterOver(99)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',99);">&nbsp;</span
></td><td id="99"><a href="#99">99</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_100"

 onmouseover="gutterOver(100)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',100);">&nbsp;</span
></td><td id="100"><a href="#100">100</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_101"

 onmouseover="gutterOver(101)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',101);">&nbsp;</span
></td><td id="101"><a href="#101">101</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_102"

 onmouseover="gutterOver(102)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',102);">&nbsp;</span
></td><td id="102"><a href="#102">102</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_103"

 onmouseover="gutterOver(103)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',103);">&nbsp;</span
></td><td id="103"><a href="#103">103</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_104"

 onmouseover="gutterOver(104)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',104);">&nbsp;</span
></td><td id="104"><a href="#104">104</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_105"

 onmouseover="gutterOver(105)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',105);">&nbsp;</span
></td><td id="105"><a href="#105">105</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_106"

 onmouseover="gutterOver(106)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',106);">&nbsp;</span
></td><td id="106"><a href="#106">106</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_107"

 onmouseover="gutterOver(107)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',107);">&nbsp;</span
></td><td id="107"><a href="#107">107</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_108"

 onmouseover="gutterOver(108)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',108);">&nbsp;</span
></td><td id="108"><a href="#108">108</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_109"

 onmouseover="gutterOver(109)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',109);">&nbsp;</span
></td><td id="109"><a href="#109">109</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_110"

 onmouseover="gutterOver(110)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',110);">&nbsp;</span
></td><td id="110"><a href="#110">110</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_111"

 onmouseover="gutterOver(111)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',111);">&nbsp;</span
></td><td id="111"><a href="#111">111</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_112"

 onmouseover="gutterOver(112)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',112);">&nbsp;</span
></td><td id="112"><a href="#112">112</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_113"

 onmouseover="gutterOver(113)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',113);">&nbsp;</span
></td><td id="113"><a href="#113">113</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_114"

 onmouseover="gutterOver(114)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',114);">&nbsp;</span
></td><td id="114"><a href="#114">114</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_115"

 onmouseover="gutterOver(115)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',115);">&nbsp;</span
></td><td id="115"><a href="#115">115</a></td></tr
><tr id="gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_116"

 onmouseover="gutterOver(116)"

><td><span title="Add comment" onclick="codereviews.startEdit('svnf89689fb60f6bafe804486ba044aca3e5a9eaf68',116);">&nbsp;</span
></td><td id="116"><a href="#116">116</a></td></tr
></table></pre>
<pre><table width="100%"><tr class="nocursor"><td></td></tr></table></pre>
</td>
<td id="lines">
<pre><table width="100%"><tr class="cursor_stop cursor_hidden"><td></td></tr></table></pre>
<pre class="prettyprint lang-js"><table id="src_table_0"><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_1

 onmouseover="gutterOver(1)"

><td class="source">/*<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_2

 onmouseover="gutterOver(2)"

><td class="source"> * VariableTimeStepLoop - Allows easy creation of variable time step loops for your games or applications.<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_3

 onmouseover="gutterOver(3)"

><td class="source"> *<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_4

 onmouseover="gutterOver(4)"

><td class="source"> * Copyright (c) 2012 Andrew Lundgren (http://grovebranch.net)<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_5

 onmouseover="gutterOver(5)"

><td class="source"> * Licensed under the MIT License<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_6

 onmouseover="gutterOver(6)"

><td class="source"> *<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_7

 onmouseover="gutterOver(7)"

><td class="source"> * http://code.google.com/p/variable-time-step-loop<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_8

 onmouseover="gutterOver(8)"

><td class="source"> *<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_9

 onmouseover="gutterOver(9)"

><td class="source"> * Version: 1.0.0<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_10

 onmouseover="gutterOver(10)"

><td class="source"> */<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_11

 onmouseover="gutterOver(11)"

><td class="source"><br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_12

 onmouseover="gutterOver(12)"

><td class="source">function VariableTimeStepLoop( /* optional */ onUpdateHandler) {<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_13

 onmouseover="gutterOver(13)"

><td class="source">	<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_14

 onmouseover="gutterOver(14)"

><td class="source">	// used to track the time elapsed since previous update<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_15

 onmouseover="gutterOver(15)"

><td class="source">	this.lastUpdateTime = null;<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_16

 onmouseover="gutterOver(16)"

><td class="source">	<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_17

 onmouseover="gutterOver(17)"

><td class="source">	// delay between one update completing and the next beginning<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_18

 onmouseover="gutterOver(18)"

><td class="source">	this.updateDelay = 0;<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_19

 onmouseover="gutterOver(19)"

><td class="source">	<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_20

 onmouseover="gutterOver(20)"

><td class="source">	this.onUpdate = function(secondsElapsed) {<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_21

 onmouseover="gutterOver(21)"

><td class="source">		// update everything in this method, based on the number of seconds elapsed<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_22

 onmouseover="gutterOver(22)"

><td class="source">		throw &quot;The &#39;onUpdate&#39; event must be assigned a handler.&quot;;<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_23

 onmouseover="gutterOver(23)"

><td class="source">	}<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_24

 onmouseover="gutterOver(24)"

><td class="source">	<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_25

 onmouseover="gutterOver(25)"

><td class="source">	if( typeof( onUpdateHandler ) == &quot;function&quot; ) {<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_26

 onmouseover="gutterOver(26)"

><td class="source">		// an update handler was supplied via the constructor -- store the ref<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_27

 onmouseover="gutterOver(27)"

><td class="source">		this.onUpdate = onUpdateHandler;<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_28

 onmouseover="gutterOver(28)"

><td class="source">	}<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_29

 onmouseover="gutterOver(29)"

><td class="source">	<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_30

 onmouseover="gutterOver(30)"

><td class="source">	// controls whether the loop is running<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_31

 onmouseover="gutterOver(31)"

><td class="source">	this.isOn == false;<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_32

 onmouseover="gutterOver(32)"

><td class="source">	<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_33

 onmouseover="gutterOver(33)"

><td class="source">	// on start event stub<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_34

 onmouseover="gutterOver(34)"

><td class="source">	this.onStop = function() {};<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_35

 onmouseover="gutterOver(35)"

><td class="source">	<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_36

 onmouseover="gutterOver(36)"

><td class="source">	// on stop event stub<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_37

 onmouseover="gutterOver(37)"

><td class="source">	this.onStart = function() {};<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_38

 onmouseover="gutterOver(38)"

><td class="source">}<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_39

 onmouseover="gutterOver(39)"

><td class="source">VariableTimeStepLoop.prototype.start = function() {<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_40

 onmouseover="gutterOver(40)"

><td class="source"><br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_41

 onmouseover="gutterOver(41)"

><td class="source">	// turn on the loop<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_42

 onmouseover="gutterOver(42)"

><td class="source">	this.isOn = true;<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_43

 onmouseover="gutterOver(43)"

><td class="source"><br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_44

 onmouseover="gutterOver(44)"

><td class="source">	// fire start event, incase anyone cares<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_45

 onmouseover="gutterOver(45)"

><td class="source">	this.onStart();<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_46

 onmouseover="gutterOver(46)"

><td class="source"><br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_47

 onmouseover="gutterOver(47)"

><td class="source">	// set the last update time to now<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_48

 onmouseover="gutterOver(48)"

><td class="source">	this.lastUpdateTime = new Date();<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_49

 onmouseover="gutterOver(49)"

><td class="source">	<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_50

 onmouseover="gutterOver(50)"

><td class="source">	// begin update loop by manually calling the update tick<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_51

 onmouseover="gutterOver(51)"

><td class="source">	this.onUpdateTick();<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_52

 onmouseover="gutterOver(52)"

><td class="source">}<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_53

 onmouseover="gutterOver(53)"

><td class="source">VariableTimeStepLoop.prototype.stop = function() {<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_54

 onmouseover="gutterOver(54)"

><td class="source"><br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_55

 onmouseover="gutterOver(55)"

><td class="source">	// turn off the loop<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_56

 onmouseover="gutterOver(56)"

><td class="source">	this.isOn = false;<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_57

 onmouseover="gutterOver(57)"

><td class="source">}<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_58

 onmouseover="gutterOver(58)"

><td class="source">VariableTimeStepLoop.prototype.onUpdateTick = function() {<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_59

 onmouseover="gutterOver(59)"

><td class="source"><br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_60

 onmouseover="gutterOver(60)"

><td class="source">	// get current time<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_61

 onmouseover="gutterOver(61)"

><td class="source">	var now = new Date();<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_62

 onmouseover="gutterOver(62)"

><td class="source"><br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_63

 onmouseover="gutterOver(63)"

><td class="source">	// get seconds elapsed<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_64

 onmouseover="gutterOver(64)"

><td class="source">	var secondsElapsed = (now - this.lastUpdateTime) / 1000;<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_65

 onmouseover="gutterOver(65)"

><td class="source"><br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_66

 onmouseover="gutterOver(66)"

><td class="source">	// call update function w/ elapsed seconds<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_67

 onmouseover="gutterOver(67)"

><td class="source">	this.onUpdate( secondsElapsed );<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_68

 onmouseover="gutterOver(68)"

><td class="source"><br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_69

 onmouseover="gutterOver(69)"

><td class="source">	// store new update time<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_70

 onmouseover="gutterOver(70)"

><td class="source">	this.lastUpdateTime = now;<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_71

 onmouseover="gutterOver(71)"

><td class="source">	<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_72

 onmouseover="gutterOver(72)"

><td class="source">	if( this.isOn == true ) <br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_73

 onmouseover="gutterOver(73)"

><td class="source">	{<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_74

 onmouseover="gutterOver(74)"

><td class="source">		// call this method again<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_75

 onmouseover="gutterOver(75)"

><td class="source">		var self = this;<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_76

 onmouseover="gutterOver(76)"

><td class="source">		setTimeout( function() { self.onUpdateTick(); }, this.updateDelay );<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_77

 onmouseover="gutterOver(77)"

><td class="source">	} <br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_78

 onmouseover="gutterOver(78)"

><td class="source">	else <br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_79

 onmouseover="gutterOver(79)"

><td class="source">	{<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_80

 onmouseover="gutterOver(80)"

><td class="source">		// the loop is stopped now -- fire stop event, incase anyone cares<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_81

 onmouseover="gutterOver(81)"

><td class="source">		this.onStop();<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_82

 onmouseover="gutterOver(82)"

><td class="source">	}<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_83

 onmouseover="gutterOver(83)"

><td class="source">}<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_84

 onmouseover="gutterOver(84)"

><td class="source"><br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_85

 onmouseover="gutterOver(85)"

><td class="source"><br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_86

 onmouseover="gutterOver(86)"

><td class="source">/*********** USAGE ***********<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_87

 onmouseover="gutterOver(87)"

><td class="source"><br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_88

 onmouseover="gutterOver(88)"

><td class="source">	function myUpdateHandler(secondsElapsed) {<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_89

 onmouseover="gutterOver(89)"

><td class="source">		// update everything in this method, based on the number of seconds elapsed<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_90

 onmouseover="gutterOver(90)"

><td class="source">	}<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_91

 onmouseover="gutterOver(91)"

><td class="source"><br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_92

 onmouseover="gutterOver(92)"

><td class="source">	// declare the loop<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_93

 onmouseover="gutterOver(93)"

><td class="source">	var myGameLoop = new VariableTimeStepLoop(myUpdateHandler);<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_94

 onmouseover="gutterOver(94)"

><td class="source"><br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_95

 onmouseover="gutterOver(95)"

><td class="source">	// start the loop<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_96

 onmouseover="gutterOver(96)"

><td class="source">	myGameLoop.start();<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_97

 onmouseover="gutterOver(97)"

><td class="source"><br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_98

 onmouseover="gutterOver(98)"

><td class="source"><br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_99

 onmouseover="gutterOver(99)"

><td class="source"><br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_100

 onmouseover="gutterOver(100)"

><td class="source">**** UPDATE HANDLER ALTERNATIVE 1 ****<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_101

 onmouseover="gutterOver(101)"

><td class="source"><br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_102

 onmouseover="gutterOver(102)"

><td class="source">Supply an anonymous delegate, e.g.<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_103

 onmouseover="gutterOver(103)"

><td class="source"><br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_104

 onmouseover="gutterOver(104)"

><td class="source">	var myGameLoop = new VariableTimeStepLoop(function myUpdateHandler(secondsElapsed) { ... } );<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_105

 onmouseover="gutterOver(105)"

><td class="source"><br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_106

 onmouseover="gutterOver(106)"

><td class="source"><br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_107

 onmouseover="gutterOver(107)"

><td class="source"><br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_108

 onmouseover="gutterOver(108)"

><td class="source">**** UPDATE HANDLER ALTERNATIVE 2 **** <br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_109

 onmouseover="gutterOver(109)"

><td class="source"><br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_110

 onmouseover="gutterOver(110)"

><td class="source">Assign update handler after declaring, e.g.<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_111

 onmouseover="gutterOver(111)"

><td class="source"><br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_112

 onmouseover="gutterOver(112)"

><td class="source">	var myGameLoop = new VariableTimeStepLoop();<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_113

 onmouseover="gutterOver(113)"

><td class="source">	<br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_114

 onmouseover="gutterOver(114)"

><td class="source">	myGameLoop.onUpdate = function myUpdateHandler(secondsElapsed) { ... } <br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_115

 onmouseover="gutterOver(115)"

><td class="source"><br></td></tr
><tr
id=sl_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_116

 onmouseover="gutterOver(116)"

><td class="source">*****************************/<br></td></tr
></table></pre>
<pre><table width="100%"><tr class="cursor_stop cursor_hidden"><td></td></tr></table></pre>
</td>
</tr></table>

 
<script type="text/javascript">
 var lineNumUnderMouse = -1;
 
 function gutterOver(num) {
 gutterOut();
 var newTR = document.getElementById('gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_' + num);
 if (newTR) {
 newTR.className = 'undermouse';
 }
 lineNumUnderMouse = num;
 }
 function gutterOut() {
 if (lineNumUnderMouse != -1) {
 var oldTR = document.getElementById(
 'gr_svnf89689fb60f6bafe804486ba044aca3e5a9eaf68_' + lineNumUnderMouse);
 if (oldTR) {
 oldTR.className = '';
 }
 lineNumUnderMouse = -1;
 }
 }
 var numsGenState = {table_base_id: 'nums_table_'};
 var srcGenState = {table_base_id: 'src_table_'};
 var alignerRunning = false;
 var startOver = false;
 function setLineNumberHeights() {
 if (alignerRunning) {
 startOver = true;
 return;
 }
 numsGenState.chunk_id = 0;
 numsGenState.table = document.getElementById('nums_table_0');
 numsGenState.row_num = 0;
 if (!numsGenState.table) {
 return; // Silently exit if no file is present.
 }
 srcGenState.chunk_id = 0;
 srcGenState.table = document.getElementById('src_table_0');
 srcGenState.row_num = 0;
 alignerRunning = true;
 continueToSetLineNumberHeights();
 }
 function rowGenerator(genState) {
 if (genState.row_num < genState.table.rows.length) {
 var currentRow = genState.table.rows[genState.row_num];
 genState.row_num++;
 return currentRow;
 }
 var newTable = document.getElementById(
 genState.table_base_id + (genState.chunk_id + 1));
 if (newTable) {
 genState.chunk_id++;
 genState.row_num = 0;
 genState.table = newTable;
 return genState.table.rows[0];
 }
 return null;
 }
 var MAX_ROWS_PER_PASS = 1000;
 function continueToSetLineNumberHeights() {
 var rowsInThisPass = 0;
 var numRow = 1;
 var srcRow = 1;
 while (numRow && srcRow && rowsInThisPass < MAX_ROWS_PER_PASS) {
 numRow = rowGenerator(numsGenState);
 srcRow = rowGenerator(srcGenState);
 rowsInThisPass++;
 if (numRow && srcRow) {
 if (numRow.offsetHeight != srcRow.offsetHeight) {
 numRow.firstChild.style.height = srcRow.offsetHeight + 'px';
 }
 }
 }
 if (rowsInThisPass >= MAX_ROWS_PER_PASS) {
 setTimeout(continueToSetLineNumberHeights, 10);
 } else {
 alignerRunning = false;
 if (startOver) {
 startOver = false;
 setTimeout(setLineNumberHeights, 500);
 }
 }
 }
 function initLineNumberHeights() {
 // Do 2 complete passes, because there can be races
 // between this code and prettify.
 startOver = true;
 setTimeout(setLineNumberHeights, 250);
 window.onresize = setLineNumberHeights;
 }
 initLineNumberHeights();
</script>

 
 
 <div id="log">
 <div style="text-align:right">
 <a class="ifCollapse" href="#" onclick="_toggleMeta(this); return false">Show details</a>
 <a class="ifExpand" href="#" onclick="_toggleMeta(this); return false">Hide details</a>
 </div>
 <div class="ifExpand">
 
 
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="changelog">
 <p>Change log</p>
 <div>
 <a href="/p/kineticjs-viewport/source/detail?spec=svnf89689fb60f6bafe804486ba044aca3e5a9eaf68&amp;r=f89689fb60f6bafe804486ba044aca3e5a9eaf68">f89689fb60f6</a>
 by Andrew Lundgren &lt;andrew@ubuntu.(none)&gt;
 on Mar 20, 2012
 &nbsp; <a href="/p/kineticjs-viewport/source/diff?spec=svnf89689fb60f6bafe804486ba044aca3e5a9eaf68&r=f89689fb60f6bafe804486ba044aca3e5a9eaf68&amp;format=side&amp;path=/js/variable-time-step-loop-1.0.0.js&amp;old_path=/js/variable-time-step-loop-1.0.0.js&amp;old=">Diff</a>
 </div>
 <pre>initial check-in
</pre>
 </div>
 
 
 
 
 
 
 <script type="text/javascript">
 var detail_url = '/p/kineticjs-viewport/source/detail?r=f89689fb60f6bafe804486ba044aca3e5a9eaf68&spec=svnf89689fb60f6bafe804486ba044aca3e5a9eaf68';
 var publish_url = '/p/kineticjs-viewport/source/detail?r=f89689fb60f6bafe804486ba044aca3e5a9eaf68&spec=svnf89689fb60f6bafe804486ba044aca3e5a9eaf68#publish';
 // describe the paths of this revision in javascript.
 var changed_paths = [];
 var changed_urls = [];
 
 changed_paths.push('/css/base.css');
 changed_urls.push('/p/kineticjs-viewport/source/browse/css/base.css?r\x3df89689fb60f6bafe804486ba044aca3e5a9eaf68\x26spec\x3dsvnf89689fb60f6bafe804486ba044aca3e5a9eaf68');
 
 
 changed_paths.push('/css/common.css');
 changed_urls.push('/p/kineticjs-viewport/source/browse/css/common.css?r\x3df89689fb60f6bafe804486ba044aca3e5a9eaf68\x26spec\x3dsvnf89689fb60f6bafe804486ba044aca3e5a9eaf68');
 
 
 changed_paths.push('/img/.gitignore');
 changed_urls.push('/p/kineticjs-viewport/source/browse/img/.gitignore?r\x3df89689fb60f6bafe804486ba044aca3e5a9eaf68\x26spec\x3dsvnf89689fb60f6bafe804486ba044aca3e5a9eaf68');
 
 
 changed_paths.push('/js/libs/canvg.js');
 changed_urls.push('/p/kineticjs-viewport/source/browse/js/libs/canvg.js?r\x3df89689fb60f6bafe804486ba044aca3e5a9eaf68\x26spec\x3dsvnf89689fb60f6bafe804486ba044aca3e5a9eaf68');
 
 
 changed_paths.push('/js/libs/jquery-1.7.1.min.js');
 changed_urls.push('/p/kineticjs-viewport/source/browse/js/libs/jquery-1.7.1.min.js?r\x3df89689fb60f6bafe804486ba044aca3e5a9eaf68\x26spec\x3dsvnf89689fb60f6bafe804486ba044aca3e5a9eaf68');
 
 
 changed_paths.push('/js/libs/jquery.mousewheel.js');
 changed_urls.push('/p/kineticjs-viewport/source/browse/js/libs/jquery.mousewheel.js?r\x3df89689fb60f6bafe804486ba044aca3e5a9eaf68\x26spec\x3dsvnf89689fb60f6bafe804486ba044aca3e5a9eaf68');
 
 
 changed_paths.push('/js/libs/kinetic-v3.8.1.js');
 changed_urls.push('/p/kineticjs-viewport/source/browse/js/libs/kinetic-v3.8.1.js?r\x3df89689fb60f6bafe804486ba044aca3e5a9eaf68\x26spec\x3dsvnf89689fb60f6bafe804486ba044aca3e5a9eaf68');
 
 
 changed_paths.push('/js/libs/modernizr-2.5.3.min.js');
 changed_urls.push('/p/kineticjs-viewport/source/browse/js/libs/modernizr-2.5.3.min.js?r\x3df89689fb60f6bafe804486ba044aca3e5a9eaf68\x26spec\x3dsvnf89689fb60f6bafe804486ba044aca3e5a9eaf68');
 
 
 changed_paths.push('/js/libs/rgbcolor.js');
 changed_urls.push('/p/kineticjs-viewport/source/browse/js/libs/rgbcolor.js?r\x3df89689fb60f6bafe804486ba044aca3e5a9eaf68\x26spec\x3dsvnf89689fb60f6bafe804486ba044aca3e5a9eaf68');
 
 
 changed_paths.push('/js/test.js');
 changed_urls.push('/p/kineticjs-viewport/source/browse/js/test.js?r\x3df89689fb60f6bafe804486ba044aca3e5a9eaf68\x26spec\x3dsvnf89689fb60f6bafe804486ba044aca3e5a9eaf68');
 
 
 changed_paths.push('/js/variable-time-step-loop-1.0.0.js');
 changed_urls.push('/p/kineticjs-viewport/source/browse/js/variable-time-step-loop-1.0.0.js?r\x3df89689fb60f6bafe804486ba044aca3e5a9eaf68\x26spec\x3dsvnf89689fb60f6bafe804486ba044aca3e5a9eaf68');
 
 var selected_path = '/js/variable-time-step-loop-1.0.0.js';
 
 
 changed_paths.push('/notes.txt');
 changed_urls.push('/p/kineticjs-viewport/source/browse/notes.txt?r\x3df89689fb60f6bafe804486ba044aca3e5a9eaf68\x26spec\x3dsvnf89689fb60f6bafe804486ba044aca3e5a9eaf68');
 
 
 changed_paths.push('/svg/butterfly.svg');
 changed_urls.push('/p/kineticjs-viewport/source/browse/svg/butterfly.svg?r\x3df89689fb60f6bafe804486ba044aca3e5a9eaf68\x26spec\x3dsvnf89689fb60f6bafe804486ba044aca3e5a9eaf68');
 
 
 changed_paths.push('/test.html');
 changed_urls.push('/p/kineticjs-viewport/source/browse/test.html?r\x3df89689fb60f6bafe804486ba044aca3e5a9eaf68\x26spec\x3dsvnf89689fb60f6bafe804486ba044aca3e5a9eaf68');
 
 
 function getCurrentPageIndex() {
 for (var i = 0; i < changed_paths.length; i++) {
 if (selected_path == changed_paths[i]) {
 return i;
 }
 }
 }
 function getNextPage() {
 var i = getCurrentPageIndex();
 if (i < changed_paths.length - 1) {
 return changed_urls[i + 1];
 }
 return null;
 }
 function getPreviousPage() {
 var i = getCurrentPageIndex();
 if (i > 0) {
 return changed_urls[i - 1];
 }
 return null;
 }
 function gotoNextPage() {
 var page = getNextPage();
 if (!page) {
 page = detail_url;
 }
 window.location = page;
 }
 function gotoPreviousPage() {
 var page = getPreviousPage();
 if (!page) {
 page = detail_url;
 }
 window.location = page;
 }
 function gotoDetailPage() {
 window.location = detail_url;
 }
 function gotoPublishPage() {
 window.location = publish_url;
 }
</script>

 
 <style type="text/css">
 #review_nav {
 border-top: 3px solid white;
 padding-top: 6px;
 margin-top: 1em;
 }
 #review_nav td {
 vertical-align: middle;
 }
 #review_nav select {
 margin: .5em 0;
 }
 </style>
 <div id="review_nav">
 <table><tr><td>Go to:&nbsp;</td><td>
 <select name="files_in_rev" onchange="window.location=this.value">
 
 <option value="/p/kineticjs-viewport/source/browse/css/base.css?r=f89689fb60f6bafe804486ba044aca3e5a9eaf68&amp;spec=svnf89689fb60f6bafe804486ba044aca3e5a9eaf68"
 
 >/css/base.css</option>
 
 <option value="/p/kineticjs-viewport/source/browse/css/common.css?r=f89689fb60f6bafe804486ba044aca3e5a9eaf68&amp;spec=svnf89689fb60f6bafe804486ba044aca3e5a9eaf68"
 
 >/css/common.css</option>
 
 <option value="/p/kineticjs-viewport/source/browse/img/.gitignore?r=f89689fb60f6bafe804486ba044aca3e5a9eaf68&amp;spec=svnf89689fb60f6bafe804486ba044aca3e5a9eaf68"
 
 >/img/.gitignore</option>
 
 <option value="/p/kineticjs-viewport/source/browse/js/libs/canvg.js?r=f89689fb60f6bafe804486ba044aca3e5a9eaf68&amp;spec=svnf89689fb60f6bafe804486ba044aca3e5a9eaf68"
 
 >/js/libs/canvg.js</option>
 
 <option value="/p/kineticjs-viewport/source/browse/js/libs/jquery-1.7.1.min.js?r=f89689fb60f6bafe804486ba044aca3e5a9eaf68&amp;spec=svnf89689fb60f6bafe804486ba044aca3e5a9eaf68"
 
 >/js/libs/jquery-1.7.1.min.js</option>
 
 <option value="/p/kineticjs-viewport/source/browse/js/libs/jquery.mousewheel.js?r=f89689fb60f6bafe804486ba044aca3e5a9eaf68&amp;spec=svnf89689fb60f6bafe804486ba044aca3e5a9eaf68"
 
 >/js/libs/jquery.mousewheel.js</option>
 
 <option value="/p/kineticjs-viewport/source/browse/js/libs/kinetic-v3.8.1.js?r=f89689fb60f6bafe804486ba044aca3e5a9eaf68&amp;spec=svnf89689fb60f6bafe804486ba044aca3e5a9eaf68"
 
 >/js/libs/kinetic-v3.8.1.js</option>
 
 <option value="/p/kineticjs-viewport/source/browse/js/libs/modernizr-2.5.3.min.js?r=f89689fb60f6bafe804486ba044aca3e5a9eaf68&amp;spec=svnf89689fb60f6bafe804486ba044aca3e5a9eaf68"
 
 >/js/libs/modernizr-2.5.3.min.js</option>
 
 <option value="/p/kineticjs-viewport/source/browse/js/libs/rgbcolor.js?r=f89689fb60f6bafe804486ba044aca3e5a9eaf68&amp;spec=svnf89689fb60f6bafe804486ba044aca3e5a9eaf68"
 
 >/js/libs/rgbcolor.js</option>
 
 <option value="/p/kineticjs-viewport/source/browse/js/test.js?r=f89689fb60f6bafe804486ba044aca3e5a9eaf68&amp;spec=svnf89689fb60f6bafe804486ba044aca3e5a9eaf68"
 
 >/js/test.js</option>
 
 <option value="/p/kineticjs-viewport/source/browse/js/variable-time-step-loop-1.0.0.js?r=f89689fb60f6bafe804486ba044aca3e5a9eaf68&amp;spec=svnf89689fb60f6bafe804486ba044aca3e5a9eaf68"
 selected="selected"
 >...variable-time-step-loop-1.0.0.js</option>
 
 <option value="/p/kineticjs-viewport/source/browse/notes.txt?r=f89689fb60f6bafe804486ba044aca3e5a9eaf68&amp;spec=svnf89689fb60f6bafe804486ba044aca3e5a9eaf68"
 
 >/notes.txt</option>
 
 <option value="/p/kineticjs-viewport/source/browse/svg/butterfly.svg?r=f89689fb60f6bafe804486ba044aca3e5a9eaf68&amp;spec=svnf89689fb60f6bafe804486ba044aca3e5a9eaf68"
 
 >/svg/butterfly.svg</option>
 
 <option value="/p/kineticjs-viewport/source/browse/test.html?r=f89689fb60f6bafe804486ba044aca3e5a9eaf68&amp;spec=svnf89689fb60f6bafe804486ba044aca3e5a9eaf68"
 
 >/test.html</option>
 
 </select>
 </td></tr></table>
 
 
 <div id="review_instr" class="closed">
 <a class="ifOpened" href="/p/kineticjs-viewport/source/detail?r=f89689fb60f6bafe804486ba044aca3e5a9eaf68&spec=svnf89689fb60f6bafe804486ba044aca3e5a9eaf68#publish">Publish your comments</a>
 <div class="ifClosed">Double click a line to add a comment</div>
 </div>
 
 </div>
 
 
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="older_bubble">
 <p>Older revisions</p>
 
 <a href="/p/kineticjs-viewport/source/list?path=/js/variable-time-step-loop-1.0.0.js&r=f89689fb60f6bafe804486ba044aca3e5a9eaf68">All revisions of this file</a>
 </div>
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="fileinfo_bubble">
 <p>File info</p>
 
 <div>Size: 2738 bytes,
 116 lines</div>
 
 <div><a href="//kineticjs-viewport.googlecode.com/git/js/variable-time-step-loop-1.0.0.js">View raw file</a></div>
 </div>
 
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 </div>
 </div>


</div>

</div>
</div>

<script src="http://www.gstatic.com/codesite/ph/17979195433110598383/js/prettify/prettify.js"></script>
<script type="text/javascript">prettyPrint();</script>


<script src="http://www.gstatic.com/codesite/ph/17979195433110598383/js/source_file_scripts.js"></script>

 <script type="text/javascript" src="https://kibbles.googlecode.com/files/kibbles-1.3.3.comp.js"></script>
 <script type="text/javascript">
 var lastStop = null;
 var initialized = false;
 
 function updateCursor(next, prev) {
 if (prev && prev.element) {
 prev.element.className = 'cursor_stop cursor_hidden';
 }
 if (next && next.element) {
 next.element.className = 'cursor_stop cursor';
 lastStop = next.index;
 }
 }
 
 function pubRevealed(data) {
 updateCursorForCell(data.cellId, 'cursor_stop cursor_hidden');
 if (initialized) {
 reloadCursors();
 }
 }
 
 function draftRevealed(data) {
 updateCursorForCell(data.cellId, 'cursor_stop cursor_hidden');
 if (initialized) {
 reloadCursors();
 }
 }
 
 function draftDestroyed(data) {
 updateCursorForCell(data.cellId, 'nocursor');
 if (initialized) {
 reloadCursors();
 }
 }
 function reloadCursors() {
 kibbles.skipper.reset();
 loadCursors();
 if (lastStop != null) {
 kibbles.skipper.setCurrentStop(lastStop);
 }
 }
 // possibly the simplest way to insert any newly added comments
 // is to update the class of the corresponding cursor row,
 // then refresh the entire list of rows.
 function updateCursorForCell(cellId, className) {
 var cell = document.getElementById(cellId);
 // we have to go two rows back to find the cursor location
 var row = getPreviousElement(cell.parentNode);
 row.className = className;
 }
 // returns the previous element, ignores text nodes.
 function getPreviousElement(e) {
 var element = e.previousSibling;
 if (element.nodeType == 3) {
 element = element.previousSibling;
 }
 if (element && element.tagName) {
 return element;
 }
 }
 function loadCursors() {
 // register our elements with skipper
 var elements = CR_getElements('*', 'cursor_stop');
 var len = elements.length;
 for (var i = 0; i < len; i++) {
 var element = elements[i]; 
 element.className = 'cursor_stop cursor_hidden';
 kibbles.skipper.append(element);
 }
 }
 function toggleComments() {
 CR_toggleCommentDisplay();
 reloadCursors();
 }
 function keysOnLoadHandler() {
 // setup skipper
 kibbles.skipper.addStopListener(
 kibbles.skipper.LISTENER_TYPE.PRE, updateCursor);
 // Set the 'offset' option to return the middle of the client area
 // an option can be a static value, or a callback
 kibbles.skipper.setOption('padding_top', 50);
 // Set the 'offset' option to return the middle of the client area
 // an option can be a static value, or a callback
 kibbles.skipper.setOption('padding_bottom', 100);
 // Register our keys
 kibbles.skipper.addFwdKey("n");
 kibbles.skipper.addRevKey("p");
 kibbles.keys.addKeyPressListener(
 'u', function() { window.location = detail_url; });
 kibbles.keys.addKeyPressListener(
 'r', function() { window.location = detail_url + '#publish'; });
 
 kibbles.keys.addKeyPressListener('j', gotoNextPage);
 kibbles.keys.addKeyPressListener('k', gotoPreviousPage);
 
 
 kibbles.keys.addKeyPressListener('h', toggleComments);
 
 }
 </script>
<script src="http://www.gstatic.com/codesite/ph/17979195433110598383/js/code_review_scripts.js"></script>
<script type="text/javascript">
 function showPublishInstructions() {
 var element = document.getElementById('review_instr');
 if (element) {
 element.className = 'opened';
 }
 }
 var codereviews;
 function revsOnLoadHandler() {
 // register our source container with the commenting code
 var paths = {'svnf89689fb60f6bafe804486ba044aca3e5a9eaf68': '/js/variable-time-step-loop-1.0.0.js'}
 codereviews = CR_controller.setup(
 {"profileUrl":["/u/100630599901009391548/"],"token":"QeQ3CrvbjWSIt0B6Qa8mNe8zI2Y:1334507683279","assetHostPath":"http://www.gstatic.com/codesite/ph","domainName":null,"assetVersionPath":"http://www.gstatic.com/codesite/ph/17979195433110598383","projectHomeUrl":"/p/kineticjs-viewport","relativeBaseUrl":"","projectName":"kineticjs-viewport","loggedInUserEmail":"alundgren04@gmail.com"}, '', 'svnf89689fb60f6bafe804486ba044aca3e5a9eaf68', paths,
 CR_BrowseIntegrationFactory);
 
 // register our source container with the commenting code
 // in this case we're registering the container and the revison
 // associated with the contianer which may be the primary revision
 // or may be a previous revision against which the primary revision
 // of the file is being compared.
 codereviews.registerSourceContainer(document.getElementById('lines'), 'svnf89689fb60f6bafe804486ba044aca3e5a9eaf68');
 
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_DRAFT_PLATE, showPublishInstructions);
 
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_PUB_PLATE, pubRevealed);
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_DRAFT_PLATE, draftRevealed);
 codereviews.registerActivityListener(CR_ActivityType.DISCARD_DRAFT_COMMENT, draftDestroyed);
 
 
 
 
 
 
 
 var initialized = true;
 reloadCursors();
 }
 window.onload = function() {keysOnLoadHandler(); revsOnLoadHandler();};

</script>
<script type="text/javascript" src="http://www.gstatic.com/codesite/ph/17979195433110598383/js/dit_scripts.js"></script>

 
 
 
 <script type="text/javascript" src="http://www.gstatic.com/codesite/ph/17979195433110598383/js/ph_core.js"></script>
 
 
 
 
 <script type="text/javascript" src="/js/codesite_product_dictionary_ph.pack.04102009.js"></script>
</div> 
<div id="footer" dir="ltr">
 <div class="text">
 &copy;2011 Google -
 <a href="/projecthosting/terms.html">Terms</a> -
 <a href="http://www.google.com/privacy.html">Privacy</a> -
 <a href="/p/support/">Project Hosting Help</a>
 </div>
</div>
 <div class="hostedBy" style="margin-top: -20px;">
 <span style="vertical-align: top;">Powered by <a href="http://code.google.com/projecthosting/">Google Project Hosting</a></span>
 </div>
 
 


 
 </body>
</html>

