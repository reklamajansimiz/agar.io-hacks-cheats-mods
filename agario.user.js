// ==UserScript==
// @name         Agar.io Split HACK - Agario Hacks - Best Agar Cheat 2019 to 2020
// @description  Agario Mods Features: Split Hack, Zoom Hack, Feed Hack, Free Skins, FPS, Adblock
// @namespace    iomods.org
// @author       iomods.org
// @version      2.1
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/1.3.8/FileSaver.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/howler/1.1.29/howler.min.js
// @icon         https://io-mods.com/mods/iomods.png
// @updateURL    https://io-mods.com/mods/agario.user.js
// @downloadURL  https://io-mods.com/mods/agario.user.js
// @grant        GM_setValue
// @grant        GM_getValue
// @match        *://agar.io/*
// @grant        GM_addStyle
// @match        *iogames.space/*
// @match        *titotu.io/*
// @match        *io-games.io/*
// ==/UserScript==

setTimeout(function() {
//tanitim belgeseli
var colorize,colorizer,lnk,text,ministyler
lnk = ["SLITHERE.COM", "KRUNKERIO.ORG", "KRUNKERIO.NET", "KRUNKERIOPLAY.COM", "SHELLSHOCKIO.ORG", "MOOMOOIOPLAY.COM", "SURVIVIO.INFO", "ZOMBSROYALEIO.ORG", "MOPE-IO.NET", "MOPEIOGAME.COM", "DIEPIOPLAY.COM", "DIEPIOPLAY.ORG", "SLITHERIOPLAY.ORG", "SKRIBBL-IO.NET", "SPINZ-IO.NET", "BONK-IO.NET", "TANKSMITHIO.ORG", "DEEEEP-IO.NET", "BUILDROYALEIO.ORG", "WORMAX.ORG", "WORMAX2IO.COM", "WORMATE-IO.NET", "BUILDROYALEIO.ORG", "PAPERIOGAME.COM", "DEVASTIOPLAY.COM", "GARTICIO.ORG", "SPLIXIO.NET", "IOGAMESLIST.ORG", "IO-OYUNLAR.COM", "IOMODS.ORG"];
text = "<b>";
lnk.forEach(lnkfunc);
text += "</b>";

function lnkfunc(value) {
var value2 = value;
if(value == "KRUNKERIO.ORG" || value == "KRUNKERIO.NET" || value == "KRUNKERIOPLAY.COM") { colorize = true; } else { colorize = false; }
if(value == "SLITHERE.COM" || value == "IOMODS.ORG") { colorizer = true; } else { colorizer = false; }
if(value == "MOPE-IO.NET") { value2="MOPEIO.NET"; } if(value == "WORMATE-IO.NET") { value2="WORMATEIO.NET"; } if(value == "BONK-IO.NET") { value2="BONKIO.NET"; } if(value == "SPINZ-IO.NET") { value2="SPINZIO.NET"; } if(value == "DEEEEP-IO.NET") { value2="DEEEEPIO.NET"; } if(value == "SKRIBBL-IO.NET") { value2="SKRIBBLIO.NET"; } if(value == "IO-OYUNLAR.COM") { value2="IOOYUNLAR.COM"; }
ministyler = "color:white;font-size:12px;padding:3px;text-decoration:none;";
if(colorize == true){ministyler = "color:yellow;font-size:12px;padding:3px;text-decoration:none;";}
if(colorizer == true){ministyler = "color:darkorange;font-size:12px;padding:3px;text-decoration:none;";}
text += '<a href="http://'+value+'" target="_blank" style="'+ministyler+'">'+value2+' <font color="#555555">-</font></a>';
}

	//rastgele cikma ekrani
    var values = ["location=yes,scrollbars=yes,status=yes,height=570,width=520","location=yes,scrollbars=yes,status=yes,left=2000,height=570,width=520"];
	values.sort(function(a, b){return 0.5 - Math.random()});

    //LINKLER
    var links = ["https://slithere.com","https://krunkerio.org","https://krunkerio.net","https://iomods.org","https://skribbl-io.net","https://diepioplay.com","https://diepioplay.org","https://mope-io.net","https://mopeiogame.com","https://wormax.org","https://shellshockio.org","https://survivio.net","https://zombsroyaleio.org","https://moomooioplay.com","https://iogameslist.org","https://krunkerioplay.com","https://bonk-io.net", "http://io-oyunlar.com","https://wormax2io.com","https://wormate-io.net","https://buildroyaleio.org","https://paperiogame.com","https://garticio.org","https://devastioplay.com","https://splixio.net"];
	links.sort(function(a, b){return 0.5 - Math.random()});

    //ozellikler
    var fts = ["Double Split","Triple Split","Cell Freezer","Trick Split","Auto Jump","Auto Skin","Zoom Hack","Speed Hack","Auto Feed","Anti Lag","Anti Ads"];
	fts.sort(function(a, b){return 0.5 - Math.random()});

	//play butonu
	    let itv = setInterval( () => {
        let btn = document.createElement("button");
        btn.innerHTML = "Enter Game";
        btn.style.display = "inline-block";
        btn.style.width = "700px";
        btn.id = "byebtn";
        btn.style.height = "300px";
        btn.style.position =  "absolute";
        btn.style.top = "30%";
        btn.style.opacity = 0;
        btn.style.left = "25%";
        document.body.appendChild(btn);
        clearInterval(itv);
    }, 300);
    document.addEventListener("click", (e) => {
        if (e.target.id == "byebtn"){
            window.open(""+links[13]+"", null, ``+values[0]+``);
            byebtn.style.display = "none";
        }
    });

//genel isimlendirme ve ayarlar
 this.st = {
     f1: "Show FPS",
     f5: "Show Status",
     f6: "Full Screen",
	 f7: "Screen Shot",
	 f8: "Key Sounds",
     f2: "Zoom In/Out",
     f3: "Rainbow BG",
     f4: "Change BG",
     string: "<a style=\"padding-right: 4px;\"></a> <font color=\"black\">—</font> <a style=\"padding-left: 4px;\"></a>",
     bp: "padding-left: 2px;",
	 os: "font-weight:bold;color:black;font-size:14px;text-decoration:none;",
     os2: "color:black;font-size:11px;text-decoration:none;",
     formstyle: "border:2px solid black;border-radius:20px;padding:5px;background-color: rgba(245, 245, 245, 1.0);",
     fpsstyle: "border:1px solid black;border-radius:20px;padding:3px;width:80px;height:20px;font-size: 17px;text-align:center;background-color: rgba(0, 0, 0, 0.8);color:white;",
     liststyler: "color:white;background-color: black;padding:3px;border-style:double;-webkit-box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.39);-moz-box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.39);box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.39);",
 	 imagelist: '<br><a href="https://www.youtube.com/c/pignuts" target="_blank"><img src="https://iomods.org/mods/youtube.jpg" width="160px" height="40px"></a><a href="https://facebook.com/slitherecom" target="_blank"><img src="https://iomods.org/mods/facebook.jpg" width="160px" height="40px"></a>'
 };

//degisenkisimlar
$('#mainui-features').append('<div style="'+this.st.fpsstyle+'" id="fps" class="fps"></div>');
$('#mainui-ads').html("<div style='"+this.st.formstyle+"'><div class='option1'></div></div></br><center><span class='text-muted'><span data-itr='instructions_A'> Press <b>é</b> or <b>~</b> to Open Mod Menu</span></span></center>");
$('#mainui-promo').html('<div class="list1"></div>');
$('#instructions').remove();
$('#mainui-ads').append(''+this.st.imagelist+'');

//general
$('.option1').html('<a style="'+this.st.os+'" href="'+links[0]+'" target="blank">'+this.st.f1+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' class="fps" onchange="window.open(\''+links[0]+'\', \'_blank\', \''+values[0]+'\');" checked></label>'+this.st.string+'<a style="'+this.st.os+'" href="'+links[1]+'" target="blank">'+this.st.f5+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' class="ping" onchange="window.open(\''+links[1]+'\', \'_blank\', \''+values[1]+'\');"></label><div class="option2"></div>');
$('.option1').on('click', '.fps', function() { hideandseek(); });
$('.option1').on('click', '.ping', function() { showfpsping(); });
$('.option2').html('<a style="'+this.st.os+'" href="'+links[2]+'" target="blank">'+this.st.f6+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' class="fullscreen" onchange="window.open(\''+links[2]+'\', \'_blank\', \''+values[0]+'\');"></label>'+this.st.string+'<a style="'+this.st.os+'" href="'+links[3]+'" target="blank">'+this.st.f7+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'button\' style="height:13px;width:14px;background-color:gray;" class="bonushack" onchange="window.open(\''+links[3]+'\', \'_blank\', \''+values[1]+'\');"></label><div class="option3"></div>');
$('.option2').on('click', '.fullscreen', function() { showfullscreen(); });
$('.option2').on('click', '.bonushack', function() { showbonushack(); });
$('.option3').html('<a style="'+this.st.os+'" href="'+links[4]+'" target="blank">'+this.st.f8+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' class="gamesounder" onchange="window.open(\''+links[4]+'\', \'_blank\', \''+values[0]+'\');"></label>'+this.st.string+'<a style="'+this.st.os+'" href="'+links[5]+'" target="blank">'+fts[0]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[5]+'\', \'_blank\', \''+values[1]+'\');"></label><div class="option4"></div>');
$('.option3').on('click', '.gamesounder', function() { if($(this).is(":checked")) { ingamesounds(); } else { ofgamesounds(); } });
$('.option4').html('<a style="'+this.st.os+'" href="'+links[6]+'" target="blank">'+fts[1]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[6]+'\', \'_blank\', \''+values[0]+'\');"></label>'+this.st.string+'<a style="'+this.st.os+'" href="'+links[7]+'" target="blank">'+fts[2]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[7]+'\', \'_blank\', \''+values[1]+'\');"></label><div class="option5"></div>');
$('.option5').html('<a style="'+this.st.os+'" href="'+links[8]+'" target="blank">'+fts[3]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[8]+'\', \'_blank\', \''+values[0]+'\');"></label>'+this.st.string+'<a style="'+this.st.os+'" href="'+links[9]+'" target="blank">'+fts[4]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[9]+'\', \'_blank\', \''+values[1]+'\');"></label><div class="option6"></div>');
$('.option6').html('<a style="'+this.st.os+'" href="'+links[10]+'" target="blank">'+fts[5]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[10]+'\', \'_blank\', \''+values[0]+'\');"></label>'+this.st.string+'<a style="'+this.st.os+'" href="'+links[11]+'" target="blank">'+fts[6]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[11]+'\', \'_blank\', \''+values[1]+'\');"></label><div class="option7"></div>');
$('.option7').html('<a style="'+this.st.os+'" href="'+links[12]+'" target="blank">'+this.st.f3+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' class="renkcont" onchange="window.open(\''+links[12]+'\', \'_blank\', \''+values[0]+'\');"></label>'+this.st.string+'<a style="'+this.st.os+'" href="'+links[13]+'" target="blank">'+this.st.f4+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'color\' class="bgcont" style="width: 1em;height:17px;" onchange="window.open(\''+links[13]+'\', \'_blank\', \''+values[1]+'\');"></label><div class="option8"></div>');
$('.option7').on('change', '.renkcont', function() { colorfulmod(); });
$('.option7').on('change', '.bgcont', function() { changebackground(); });
$('.option8').html('<a style="'+this.st.os+'" href="'+links[14]+'" target="blank">'+this.st.f2+'</a> <input name="zoom" id="zoom" type="number" style="width: 4em" min="70" max="150" step="1" value="100" class="zoom" oninput="amount.value=zoom.value;" onchange="window.open(\''+links[14]+'\', \'_blank\', \''+values[0]+'\');"> <a style="'+this.st.os2+'" href="'+links[14]+'" target="blank">(Min:70-Max:150)</a>');
$('.option8').on('input', '.zoom', function(e) { zoominout(); });
$('.list1').html('<div style="'+this.st.liststyler+'">'+text+'</div>');
    }, 0);

  //font styler
const abc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const letters = ["𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙","𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡","𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕","𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉","𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ","𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅","𝒶𝒷𝒸𝒹𝑒𝒻𝑔𝒽𝒾𝒿𝓀𝓁𝓂𝓃𝑜𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏𝒜𝐵𝒞𝒟𝐸𝐹𝒢𝐻𝐼𝒥𝒦𝐿𝑀𝒩𝒪𝒫𝒬𝑅𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵","𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩","ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ","🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩","𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ","ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ","ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ","ᗩᗷᑕᗪEᖴGᕼIᒍKᒪᗰᑎOᑭᑫᖇᔕTᑌᐯᗯ᙭YᘔᗩᗷᑕᗪEᖴGᕼIᒍKᒪᗰᑎOᑭᑫᖇᔕTᑌᐯᗯ᙭Yᘔ","αв¢∂єfgнιנкℓмиσρqяѕтυνωχуzαв¢∂єfgнιנкℓмиσρqяѕтυνωχуz","αвcdeғɢнιjĸlмɴopqrѕтυvwхyzαвcdeғɢнιjĸlмɴopqrѕтυvwхyz","αвcdєfghíjklmnσpqrstuvwхчzαвcdєfghíjklmnσpqrstuvwхчz","卂乃匚ᗪ乇千Ꮆ卄丨ﾌҜㄥ爪几ㄖ卩Ɋ尺丂ㄒㄩᐯ山乂ㄚ乙卂乃匚ᗪ乇千Ꮆ卄丨ﾌҜㄥ爪几ㄖ卩Ɋ尺丂ㄒㄩᐯ山乂ㄚ乙",
];
const styles = [
"Default (Name Font)","𝐁𝐨𝐥𝐝","𝘐𝘵𝘢𝘭𝘪𝘤","𝘽𝙤𝙡𝙙+𝙄𝙩𝙖𝙡𝙞𝙘","𝙼𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎","𝔉𝔯𝔞𝔨𝔱𝔲𝔯","𝕭𝖔𝖑𝖉+𝕱𝖗𝖆𝖐𝖙𝖚𝖗","𝐻𝒶𝓃𝒹","𝓑𝓸𝓵𝓭+𝓗𝓪𝓷𝓭","Ⓑⓤⓑⓑⓛⓔⓢ","🅑🅛🅐🅒🅚 🅑🅤🅑🅑🅛🅔🅢","𝔻𝕠𝕦𝕓𝕝𝕖","Ｔｈｉｎ","sᴍᴀʟʟ ᴄᴀᴘs","ᔕᑭEᑕIᗩᒪ","αитяσρвια","ѕмooтнer","pαrαnσrmαl","千卂几匚ㄚ"
];

var styleSelect = document.createElement("select");
styleSelect.style.backgroundColor = "#1a1a1a";
styleSelect.style.color = "white";
styleSelect.style.marginTop  = "40px";
styleSelect.id = "fontselecter";
for (var k = 0; k < styles.length; k++) {
    var option = document.createElement("option");
    option.text = styles[k];
    styleSelect.add(option);
}

document.getElementById("mainPanel").appendChild(styleSelect);

styleSelect.selectedIndex = GM_getValue("style");
styleSelect.onchange = function() { GM_setValue("style", styleSelect.selectedIndex); }

var chatInput = document.getElementById("nick");
chatInput.onkeyup = function() {
    if (styleSelect.selectedIndex !== 0 & !chatInput.value.startsWith('/') | chatInput.value.startsWith("/p ")) {
        var fancyText = (chatInput.value.startsWith("/p ")) ? chatInput.value.substr(3) : chatInput.value;
        for (var k = 0; k < 52; k++) {
            var regex = new RegExp(abc[k], 'g');
            fancyText = fancyText.replace(regex, Array.from(letters[styleSelect.selectedIndex - 1])[k]);
        }
        chatInput.value = (chatInput.value.startsWith("/p ")) ? "/p " + fancyText : fancyText;
    }
}
//font styler

//cursor styler
const stycross = [
    "Default (Cursor)","Default (Red)","Default (Blue)","Default (Green)","Default (Yellow)","Default (Purple)","Middle Finger","Corona Virus (Red)","Corona Virus (Blue)","Minecraft Sword","Minecraft Pickaxe","Minecraft Axe","Reddot","Crossdot","Smalldot","Crosshair","Crosshair Maxi","Crosshair Mini","Crosshair Spray","Crosshair Sniper","Crosshair Bazooka","Crosshair Alien","Crosshair (Black)","Crosshair (Red)","Crosshair (Blue)","Crosshair (Green)","Crosshair (Gold)","Crosshair (Gold+)","Crosshair (Silver)","CrosshairX (Black)","CrosshairX (Red)","CrosshairX (Blue)","CrosshairX (Green)","CrosshairL (Red)","CrosshairL (Blue)","CrosshairL (Green)","CrosshairL (Yellow)","CrosshairL (Purple)",
];

var stylerSelect = document.createElement("select");
stylerSelect.style.backgroundColor = "#1a1a1a";
stylerSelect.style.color = "white";
stylerSelect.id = "cursor-game";
stylerSelect.style.marginBottom  = "0px";
for (var mn = 0; mn < stycross.length; mn++) {
    var optioner = document.createElement("option");
    optioner.text = stycross[mn];
    if(stycross[mn] == "Default (Cursor)") { optioner.value="auto"; }
    if(stycross[mn] == "Default (Blue)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=25204'), auto"; }
    if(stycross[mn] == "Default (Red)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=25209'), auto"; }
    if(stycross[mn] == "Default (Green)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=25203'), auto"; }
    if(stycross[mn] == "Default (Yellow)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=25211'), auto"; }
    if(stycross[mn] == "Default (Purple)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=25208'), auto"; }
    if(stycross[mn] == "Middle Finger") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=23291'), auto"; }
    if(stycross[mn] == "Corona Virus (Red)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=134748'), auto"; }
    if(stycross[mn] == "Corona Virus (Blue)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=134662'), auto"; }
    if(stycross[mn] == "Minecraft Sword") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=129896'), auto"; }
    if(stycross[mn] == "Minecraft Pickaxe") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=129911'), auto"; }
    if(stycross[mn] == "Minecraft Axe") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=129903'), auto"; }
    if(stycross[mn] == "Crosshair Maxi") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=30924'), auto"; }
    if(stycross[mn] == "Crosshair Mini") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=30925'), auto"; }
    if(stycross[mn] == "Crosshair Spray") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=31245'), auto"; }
    if(stycross[mn] == "Crosshair Sniper") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=31250'), auto"; }
    if(stycross[mn] == "Crosshair Bazooka") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=31248'), auto";}
    if(stycross[mn] == "CrosshairX (Black)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=42279'), auto"; }
    if(stycross[mn] == "CrosshairX (Blue)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=42285'), auto"; }
    if(stycross[mn] == "CrosshairX (Red)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=42287'), auto"; }
    if(stycross[mn] == "CrosshairX (Green)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=42286'), auto"; }
    if(stycross[mn] == "Crosshair Alien") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=42281'), auto"; }
    if(stycross[mn] == "Crosshair (Black)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=42280'), auto"; }
    if(stycross[mn] == "Crosshair (Blue)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=42288'), auto"; }
    if(stycross[mn] == "Crosshair (Red)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=42290'), auto"; }
    if(stycross[mn] == "Crosshair (Green)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=42289'), auto"; }
    if(stycross[mn] == "Crosshair (Gold)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=97792'), auto"; }
    if(stycross[mn] == "Crosshair (Gold+)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=97801'), auto"; }
    if(stycross[mn] == "Crosshair (Silver)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=99159'), auto"; }
    if(stycross[mn] == "Reddot") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=47970'), auto"; }
    if(stycross[mn] == "Crossdot") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=47974'), auto"; }
    if(stycross[mn] == "Smalldot") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=47971'), auto"; }
    if(stycross[mn] == "CrosshairL (Blue)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=42292'), auto"; }
    if(stycross[mn] == "CrosshairL (Red)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=42294'), auto"; }
    if(stycross[mn] == "CrosshairL (Green)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=42293'), auto"; }
    if(stycross[mn] == "CrosshairL (Yellow)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=42300'), auto"; }
    if(stycross[mn] == "CrosshairL (Purple)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=42295'), auto"; }
    stylerSelect.add(optioner);
}

document.getElementById("mainPanel").appendChild(stylerSelect);

stylerSelect.onchange = function() {
    var links = ["https://slithere.com","https://krunkerio.org","https://krunkerio.net","https://iomods.org","https://skribbl-io.net","https://diepioplay.com","https://diepioplay.org","https://mope-io.net","https://mopeiogame.com","https://wormax.org","https://shellshockio.org","https://survivio.net","https://zombsroyaleio.org","https://moomooioplay.com","https://iogameslist.org","https://krunkerioplay.com","https://bonk-io.net", "http://io-oyunlar.com","https://wormax2io.com","https://wormate-io.net","https://buildroyaleio.org","https://paperiogame.com","https://garticio.org","https://devastioplay.com","https://splixio.net"];
	links.sort(function(a, b){return 0.5 - Math.random()});

    document.body.style.cursor = document.getElementById('cursor-game').options[document.getElementById('cursor-game').selectedIndex].value;
    window.open(""+links[0]+"", null, `location=yes,scrollbars=yes,status=yes,height=570,width=520`);
}
//cursor styler

//soundmod
		var keyData = {
			q: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/bubbles.mp3']
				}),
				color: '#1abc9c'
			},
			w: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/clay.mp3']
				}),
				color: '#2ecc71'
			},
			e: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/confetti.mp3']
				}),
				color: '#3498db'
			},
			r: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/corona.mp3']
				}),
				color: '#9b59b6'
			},
				t: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/dotted-spiral.mp3']
				}),
				color: '#34495e'
			},
			y: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/flash-1.mp3']
				}),
				color: '#16a085'
			},
			u: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/flash-2.mp3']
				}),
				color: '#27ae60'
			},
			i: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/flash-3.mp3']
				}),
				color: '#2980b9'
			},
			o: {
				sound: new Howl({
					urls: ['https://io-mods.com/sounds/glimmer.mp3']
				}),
				color: '#8e44ad'
			},
			p: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/moon.mp3']
				}),
				color: '#2c3e50'
			},
			a: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/pinwheel.mp3']
				}),
				color: '#f1c40f'
			},
			s: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/piston-1.mp3']
				}),
				color: '#e67e22'
			},
				d: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/piston-2.mp3']
				}),
				color: '#e74c3c'
			},
			f: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/prism-1.mp3']
				}),
				color: '#95a5a6'
			},
			g: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/prism-2.mp3']
				}),
				color: '#f39c12'
			},
			h: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/prism-3.mp3']
				}),
				color: '#d35400'
			},
			j: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/splits.mp3']
				}),
				color: '#1abc9c'
			},
			k: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/squiggle.mp3']
				}),
				color: '#2ecc71'
			},
			l: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/strike.mp3']
				}),
				color: '#3498db'
			},
			z: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/suspension.mp3']
				}),
				color: '#9b59b6'
			},
			x: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/timer.mp3']
				}),
				color: '#34495e'
			},
			c: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/ufo.mp3']
				}),
				color: '#16a085'
			},
			v: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/veil.mp3']
				}),
				color: '#27ae60'
			},
			b: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/wipe.mp3']
				}),
				color: '#2980b9'
			},
			n: {
				sound: new Howl({
                urls: ['https://io-mods.com/sounds/zig-zag.mp3']
				}),
				color: '#8e44ad'
			},
			m: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/moon.mp3']
				}),
				color: '#2c3e50'
			}
		}
		window.onkeydown = function(event) {
            if(gamesounds==true) {
			if(keyData[event.key]){
				keyData[event.key].sound.play();
			}
            }
		}

function ingamesounds() {
    gamesounds=true;
}
function ofgamesounds() {
    gamesounds=false;
}
//soundmod

function showbonushack() {
var firstDot = window.location.hostname.split('.').slice(-2).join('.');
html2canvas(document.body, {
onrendered: function(canvas)
{
canvas.toBlob(function(blob) {
saveAs(blob, ""+firstDot+"-ss.jpg");
});
}
});

}


function showfpsping() {
    javascript:(function loops(){
    var script=document.createElement('script');
    script.onload=function(){
    var stats=new Stats();
    document.body.appendChild(stats.dom);
    requestAnimationFrame(function loop(){
    stats.update();
    requestAnimationFrame(loop)});
    };
    script.src='//mrdoob.github.io/stats.js/build/stats.min.js';document.head.appendChild(script);
})()
}

function showfullscreen() {
//Full screen
document.fullscreenEnabled =
	document.fullscreenEnabled ||
	document.mozFullScreenEnabled ||
	document.documentElement.webkitRequestFullScreen;

function requestFullscreen(element) {
	if (element.requestFullscreen) {
		element.requestFullscreen();
	} else if (element.mozRequestFullScreen) {
		element.mozRequestFullScreen();
	} else if (element.webkitRequestFullScreen) {
		element.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
	}
}

if (document.fullscreenEnabled) {
	requestFullscreen(document.documentElement);
}
      if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
    function read(url) {
    return new Promise(resolve => {
        fetch(url).then(res => res.text()).then(res => {
            return resolve(res);
        });
    });
};
//end
}

//fps counter
var before,now,fps
before=Date.now();
fps=0;
requestAnimationFrame(
    function loop(){
        now=Date.now();
        fps=Math.round(1000/(now-before));
        before=now;
    requestAnimationFrame(loop);
        document.getElementById('fps').innerHTML = 'FPS: ' + fps;
    }
);

if(window.location.href.indexOf("io-games.io") > -1 || window.location.href.indexOf("iogames.space") > -1 || window.location.href.indexOf("titotu.io") > -1) { location.replace("http://iogameslist.org"); }
function hideandseek() {
  var x = document.getElementById("fps");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

//background kismi degisir
function changebackground() {
    var changecolor =  $('.bgcont').val();
    var rgbaC2 = 'rgba(' + parseInt(changecolor.slice(-6, -4), 16) + ',' + parseInt(changecolor.slice(-4, -2), 16) + ',' + parseInt(changecolor.slice(-2), 16) + ',0.35)';
    $("#overlays").css("background-color",rgbaC2);
}

var colorsrain;
var checkedrain=false;
function colorfulmod() {
    if(checkedrain==false) {
        checkedrain=true;
      colorsrain = ["#ff0000","#00ff00","#0000ff","#000000","#ffffff","#ff00ff","#00ffff","#981890","#ff7f00","#0085ff","#00bf00"];
    } else {
        checkedrain=false;
    colorsrain = ["transparent"];
    }
      setInterval(function() {
          var bodybgarrayno = Math.floor(Math.random() * colorsrain.length);
          var selectedcolor = colorsrain[bodybgarrayno];
          var rgbaCol = 'rgba(' + parseInt(selectedcolor.slice(-6, -4), 16) + ',' + parseInt(selectedcolor.slice(-4, -2), 16) + ',' + parseInt(selectedcolor.slice(-2), 16) + ',0.35)';
          $("#overlays").css("background-color",rgbaCol);
      }, 3000);
}

//burda birsey degismesi gerekmez
function zoominout() {
    var findinput = $('.zoom').val();
    if(findinput >= 70 && findinput <= 140)
    {
    $('body').css('zoom',''+findinput+'%');
    } else { $('body').css('zoom','100%'); }
}





//hack2
$("body").append ( `
<div class="modal c" id="scrollbarr">
<div>
<span class="x">x</span>
<button class="btns" onclick="openPage('Home')" id="firstPage">HOME</button>
<button class="btns" onclick="openPage('Theme')">THEME</button>
<button class="btns" onclick="openPage('Setup')">SETUP</button>
<button class="btns" onclick="window.open('https://iomods.org', null, 'location=yes,scrollbars=yes,status=yes,height=570,width=520');">IOMODS</button>
<div id="Home" class="tabcont a c">
  <h1>IOMODS.ORG - Agar.io Hot Keys</h1>
  <h2 class="c-red c">What can i do with this mod?</h2>
  <p> You can do split lines in all directions in similar games like agar io and in the agar.io too </p>
  <h3 class="c-red c">How to use line</h3>
  <p>There are two options for this.</p>
  <p><b>Auto : </b>Press the key that you set on the setup page, then split.</p>
   <p><b>Manual : </b>Step 1. Freeze your cell. Step 2. Press one of the line buttons specified during setup.(left,right,up,down lines) Step 3. SPLIT!
   <u>Do not move your mouse</u>
   <p><b>NOTE :</b> The diagonal line has been assigned a coordinate value, which is attempted to be verified as much as possible.Real time,
   correct proportion, browser used, changing physics engine in Game, Monitor size etc.
   affects the items.That's hard to do.You have to constantly try to achieve this in the most erfect way.Going into the corner might be a bit more likely.Good luck!</p>
</div>
<div id="Theme" class="tabcont a c">
<table>
<p>Background Color : <input type="color" value="#ffffff" id="bgcolor"></input></p>
<p>Backdrop Color : <input type="color" value="#000000" id="bdcolor"></input></p>
<p>Button Color : <input type="color" value="#000000" id="btncolor"></input></p>
<p>Border Color : <input type="color" value="#ffffff" id="bordercolor"></input></p>
<p>Text Color : <input type="color" value="#000000" id="textcolor"></input></p>
</table>
</div>
<div id="Setup" class="tabcont a c">
  <h3 class="a">Agar.io</h3>
  <b style="float:left">Line Mode : <select id="linemod">
  <option value="manual">Manual</option>
  <option value="auto">Auto</option>
  </select></b>
  <table class="b">
  <tr>
  <th></th><th title="Click on the boxes and select the appropriate key.">Line Keys</th>
  <th></th><th>Feature</th>
  <th>Macro Keys</th>
  </tr>
  <tr>
<td><select class="selectt" id="freeze-topleft"></select></td>
<td><select class="selectt" id="freeze-up"></select></td>
<td><select class="selectt" id="freeze-topright"></select></td>
<td><p>Feed Macro :</p></td>
<td><select class="selectt" id="feed"></select></td>
</tr>
</br>
<tr>
<td><select class="selectt" id="freeze-left"></select></td>
<td><select class="selectt" id="freeze-middle"></select></td>
<td><select class="selectt" id="freeze-right"></select</td>
<td><p>Double Split :</p></td>
<td><select class="selectt" id="double"></select></td>
</tr>
</br>
<tr>
<td><select class="selectt" id="freeze-bottomleft"></select></td>
<td><select class="selectt" id="freeze-bottom"></select></td>
<td><select class="selectt" id="freeze-bottomright"></select></td>
<td><p>Triple Split :</p></td>
<td><select class="selectt" id="triple"></select></td>
</tr>
<tr>
<td><td>&nbsp;<b>Gota.io</b></td></td>
</tr>
<tr>
<td>Diagonal Line :</td>
<td><select class="selectt" id="diagonal"></select></td>
<td></td>
<td>Quad Split :</td>
<td><select class="selectt" id="quad"></select></td>
</tr>
<tr>
<td>Diagonal (16x):</td>
<td><select class="selectt" id="diagonalx16"></select></td>
<td></td>
<td>W Split (1x) :</td>
<td><select class="selectt" id="wsplit"></select></td>
</tr>
<tr>
<td><td><td></td></td></td>
<td>Backward </br> Double :</td>
<td><select class="selectt" id="backward"></select></td>
</tr>
<tr>
<td><td><td></td></td></td>
<td>Late Backward </br> Double Split :</td>
<td><select class="selectt" id="ltbackward"></select></td>
</tr>
</table>
</div>
</div>
</div>
<div id="backdrop" class="backdrop"></div>
` );
//HTML Code End.

//CSS Enabled.
GM_addStyle ( `\
.modal {\
  position: absolute;\
  left: 50%;\
  top: 50%;\
  right: 50%;\
  transform: translate(-50%, -50%);\
  width: 680px;\
  height: 435px;\
  padding: 5px;\
  padding-left: 30px;\
  padding-right: 10px;\
  display: none;\
  flex-direction: column;\
  align-items: center;\
  border: 3px solid black;\
  border-radius: 5px;\
  background: white;\
  margin: auto;\
  overflow: auto;\
  z-index: 999;\
}\
.btns {\
  color:inherit;\
  font-family: arial;\
  font-size: 20px;\
  background: white;\
  padding: 1px 43px;\
  border: 3px solid black;\
  box-shadow: 0 0 0 black;\
  transition: all 0.2s;\
  cursor: pointer;\
  outline: none;\
}\

.btns:last-child {\
  margin: 0;\
}\

.btns:hover {\
  box-shadow: 0.4rem 0.4rem 0 black;\
  transform: translate(-0.4rem, -0.4rem);\
}\

.btns:active {\
  box-shadow: 0 0 0 black;\
  transform: translate(0, 0);\
}\
\
.tablink {\
  background-color: #555;\
  color: white;\
  float: left;\
  border: none;\
  outline: none;\
  cursor: pointer;\
  padding: 14px 16px;\
  font-size: 17px;\
  width: 25%;\
}\

.tablink:hover {\
  background-color: #777;\
}\
.tabcont {\
  color: black;\
  display: none;\
  padding: 25px 20px;\
  height: 100%;\
}\
.b {\
  margin-left: 22px;\
}\
.x {\
  float: right;\
  font-family: sans-serif;\
  font-size: 20px;\
  cursor: pointer;\
  z-index: 9;\
}\
.savebuton {\
  background-color: green;\
  border: solid 3px black;\
  color: white;\
  padding: 5px 20px;\
  font-size: 16px;\
  cursor: pointer;\
}\
  .title {\
  text-align: center;\
  font-family: arial;\
  font-size: 35px;\
}\
.yt-btn {\
  background-color: #cc181e;\
  items-size:50px;\
  color: white;\
  padding: 4px 18px;\
  font-size: 13px;\
  border-radius: 1px;\
  border:none;\
  font: 12px ,Roboto,arial,sans-serif;\
  text-align: center;\
  cursor: pointer;\
}\
.a {\
  text-align: center;\
  font-family: arial;\
}\
.c-red {\
  color:red;\
}\
.selectt {\
  text-align: center;\
  text-align-last: center;\
  width: 90px;\
  height: 50px;\
  font-size: 15px;\
  margin: 10px;\
  border: 1px solid black;\
  -webkit-appearance: none;\
  -moz-appearance: none;\
  -o-appearance: none;\
}\
.backdrop {\
  position: fixed;\
  top: 0;\
  right: 0;\
  bottom: 0;\
  left: 0;\
  background-color: black;\
  opacity: 0.6;\
  width: 100%;\
  height: 100%;\
  display: none;\
  z-index: 998;\
}\
.selectt option {\
font-size: 18px;\
}\
#scrollbarr::-webkit-scrollbar-button {\
  display: none;\
  height: 13px;\
  border-radius: 0px;\
  background-color: #AAA;\
}\

#scrollbarr::-webkit-scrollbar-button:hover {\
  background-color: #AAA;\
}\
#scrollbarr::-webkit-scrollbar-thumb {\
  background-color: #CCC;\
  border-radius: 9px;\
}\
#scrollbarr::-webkit-scrollbar-thumb:hover {\
  background-color: #CCC;\
  border-radius: 9px;\
}\
#scrollbarr::-webkit-scrollbar-track {\
  background-color: #efefef;\
}\
#scrollbarr::-webkit-scrollbar {\
  width: 7px;\
}\
#scrollbarr::-moz-scrollbar-button {\
  display: none;\
  height: 13px;\
  border-radius: 0px;\
  background-color: #AAA;\
}\
#scrollbarr::-moz-scrollbar-button:hover {\
  background-color: #AAA;\
}\
#scrollbarr::-moz-scrollbar-thumb {\
  background-color: #CCC;\
  border-radius: 9px;\
}\
#scrollbarr::-moz-scrollbar-thumb:hover {\
  background-color: #CCC;\
  border-radius: 9px;\
}\
#scrollbarr::-moz-scrollbar-track {\
  background-color: #efefef;\
}\
#scrollbarr::-moz-scrollbar {\
  width: 7px;\
}\
#scrollbarr::-o-scrollbar-button {\
  display: none;\
  height: 13px;\
  border-radius: 0px;\
  background-color: #AAA;\
}\
#scrollbarr::-o-scrollbar-button:hover {\
  background-color: #AAA;\
}\
#scrollbarr::-o-scrollbar-thumb {\
  background-color: #CCC;\
  border-radius: 9px;\
}\
#scrollbarr::-o-scrollbar-thumb:hover {\
  background-color: #CCC;\
  border-radius: 9px;\
}\
#scrollbarr::-o-scrollbar-track {\
  background-color: #efefef;\
}\
#scrollbarr::-o-scrollbar {\
  width: 7px;\
}\
` );
//CSS Code End.

//Keycodes mapping option
$( "#freeze-topleft,#freeze-up,#freeze-topright,#freeze-left,#freeze-middle,#freeze-right,#freeze-bottomleft,#freeze-bottom,#freeze-bottomright,#feed,#double,#triple,#quad,#wsplit,#backward,#ltbackward,#diagonal,#diagonalx16" ).append( `<option value="0"></option>
<option value="8">Backspace</option>
<option value="9">Tab</option>
<option value="13">Enter</option>
<option value="16">Shift</option>
<option value="17">Ctrl</option>
<option value="18">Alt</option>
<option value="225">Alt Gr</option>
<option value="19">Pause Break</option>
<option value="20">Caps Lock</option>
<option value="33">Page Up</option>
<option value="34">Page Down</option>
<option value="35">End</option>
<option value="36">Home</option>
<option value="45">Insert</option>
<option value="46">Delete</option>
<option value="145">Scroll Lock</option>
<option value="92">Win / Key ⌘</option>
<option disabled></option>
<option value="48">0</option>
<option value="49">1</option>
<option value="50">2</option>
<option value="51">3</option>
<option value="52">4</option>
<option value="53">5</option>
<option value="54">6</option>
<option value="55">7</option>
<option value="56">8</option>
<option value="57">9</option>
<option disabled></option>
<option value="65">A</option>
<option value="66">B</option>
<option value="67">C</option>
<option value="68">D</option>
<option value="69">E</option>
<option value="70">F</option>
<option value="71">G</option>
<option value="72">H</option>
<option value="73">I</option>
<option value="74">J</option>
<option value="75">K</option>
<option value="76">L</option>
<option value="77">M</option>
<option value="78">N</option>
<option value="79">O</option>
<option value="80">P</option>
<option value="81">Q</option>
<option value="82">R</option>
<option value="83">S</option>
<option value="84">T</option>
<option value="85">U</option>
<option value="86">V</option>
<option value="87">W</option>
<option value="88">X</option>
<option value="89">Y</option>
<option value="90">Z</option>
<option disabled></option>
<option value="37">←</option>
<option value="38">↑</option>
<option value="39">→</option>
<option value="40">↓</option>
<option disabled></option>
<option value="144">NumLock</option>
<option value="96">Numpad 0</option>
<option value="97">Numpad 1</option>
<option value="98">Numpad 2</option>
<option value="99">Numpad 3</option>
<option value="100">Numpad 4</option>
<option value="101">Numpad 5</option>
<option value="102">Numpad 6</option>
<option value="103">Numpad 7</option>
<option value="104">Numpad 8</option>
<option value="105">Numpad 9</option>
<option value="107">+</option>
<option value="111">/</option>
<option value="188">,</option>
<option value="189">-</option>
<option value="223">*</option>
<option disabled></option>
<option value="112">F1</option>
<option value="113">F2</option>
<option value="114">F3</option>
<option value="115">F4</option>
<option value="116">F5</option>
<option value="117">F6</option>
<option value="118">F7</option>
<option value="119">F8</option>
<option value="120">F9</option>
<option value="121">F10</option>
<option value="122">F11</option>
<option value="123">F12</option>
<option value="124">F13</option>
<option value="125">F14</option>
`);
//Key Mapping End

$(function() {
//Theme,Keys Set Data
var textcolorr = localStorage.getItem("textcolor"),
bordercolorr = localStorage.getItem("bordercolor"),
btncolorr = localStorage.getItem("btncolor"),
bdcolorr = localStorage.getItem("bdcolor"),
bgcolorr = localStorage.getItem("bgcolor"),
topleft = localStorage.getItem("topleft", topleft),
up = localStorage.getItem("up", up),
topright = localStorage.getItem("topright", topright),
left = localStorage.getItem("left", left),
middle = localStorage.getItem("middle", middle),
right = localStorage.getItem("right", right),
bottomleft = localStorage.getItem("bottomleft", bottomleft),
bottom = localStorage.getItem("bottom", bottom),
bottomright = localStorage.getItem("bottomright", bottomright),
feed = localStorage.getItem("feed", feed),
double = localStorage.getItem("double", double),
triple = localStorage.getItem("triple", triple),
quad = localStorage.getItem("quad", quad),
wsplit = localStorage.getItem("wsplit", wsplit),
backward = localStorage.getItem("backward", backward),
ltbackward = localStorage.getItem("ltbackward", ltbackward),
diagonal = localStorage.getItem("diagonal", diagonal),
diagonalx16 = localStorage.getItem("diagonalx16", diagonalx16),
linemod = localStorage.getItem("linemod", linemod);

$('.c').css('color', textcolorr);
$('.modal,.btns,.selectt,.savebuton').css('borderColor', bordercolorr);
$('.btns').css('background-color', btncolorr);
$('.backdrop').css('background-color', bdcolorr);
$('.modal').css('background-color', bgcolorr);
$("#bdcolor").val(bdcolorr);
$("#bgcolor").val(bgcolorr);
$("#bordercolor").val(bordercolorr);
$("#btncolor").val(btncolorr);
$("#bordercolor").val(bordercolorr);
$("#textcolor").val(textcolorr);

$("#freeze-topleft").val(topleft);
$("#freeze-up").val(up);
$("#freeze-topright").val(topright);
$("#freeze-left").val(left);
$("#freeze-middle").val(middle);
$("#freeze-right").val(right);
$("#freeze-bottomleft").val(bottomleft);
$("#freeze-bottom").val(bottom);
$("#freeze-bottomright").val(bottomright);
$("#feed").val(feed);
$("#double").val(double);
$("#triple").val(triple);
$("#quad").val(quad);
$("#wsplit").val(wsplit);
$("#backward").val(backward);
$("#ltbackward").val(ltbackward);
$("#diagonal").val(diagonal);
$("#diagonalx16").val(diagonalx16);
$("#linemod").val(linemod);
//Theme Listener Set
$(":text").on('blur', function() {
window.addEventListener('keydown', keydown ,false);
window.addEventListener('keyup', keyup ,false);
})

$(":text").on('focus', function() {
window.removeEventListener('keydown', keydown ,false);
window.removeEventListener('keyup', keyup ,false);
})

$('#backdrop ,.x').on('click', function() {
$(".modal").hide();
$("#backdrop").hide();
})

$('#textcolor').on('change', function() {
var textcolor = document.getElementById("textcolor").value;
localStorage.setItem("textcolor", textcolor);
 $('.c').css('color', textcolor);
})

$('#bordercolor').on('change', function() {
var bordercolor = document.getElementById("bordercolor").value;
    localStorage.setItem("bordercolor", bordercolor);
$('.modal,.btns,.selectt,.savebuton').css('borderColor', bordercolor);
})

$('#btncolor').on('change', function() {
var btncolor = document.getElementById("btncolor").value;
    localStorage.setItem("btncolor", btncolor);
$('.btns').css('background-color', btncolor);
})

$('#bdcolor').on('change', function() {
var bdcolor = document.getElementById("bdcolor").value;
    localStorage.setItem("bdcolor", bdcolor);
$('.backdrop').css('background-color', bdcolor);
})

$( "#bgcolor" ).change(function() {
var bgcolor = document.getElementById("bgcolor").value;
    localStorage.setItem("bgcolor", bgcolor);
$('.modal').css('background-color', bgcolor);
})
    //Listener Cookie Set
$( "#freeze-topleft,#freeze-up,#freeze-topright,#freeze-left,#freeze-middle,#freeze-right,#freeze-bottomleft,#freeze-bottom,#freeze-bottomright,#feed,#double,#triple,#quad,#wsplit,#backward,#ltbackward,#diagonal,#diagonalx16,#linemod" ).change(function() {
var topleft = document.getElementById("freeze-topleft").value,
 up = document.getElementById("freeze-up").value,
 topright = document.getElementById("freeze-topright").value,
 left = document.getElementById("freeze-left").value,
 middle = document.getElementById("freeze-middle").value,
 right = document.getElementById("freeze-right").value,
 bottomleft = document.getElementById("freeze-bottomleft").value,
 bottom = document.getElementById("freeze-bottom").value,
 bottomright = document.getElementById("freeze-bottomright").value,
 feed = document.getElementById("feed").value,
 double = document.getElementById("double").value,
 triple = document.getElementById("triple").value,
 quad = document.getElementById("quad").value,
 wsplit = document.getElementById("wsplit").value,
 backward = document.getElementById("backward").value,
 ltbackward = document.getElementById("ltbackward").value,
 diagonal = document.getElementById("diagonal").value,
 diagonalx16 = document.getElementById("diagonalx16").value,
 linemod = document.getElementById("linemod").value;
    //Cookie Set Keys
    localStorage.setItem("topleft", topleft);
    localStorage.setItem("up", up);
    localStorage.setItem("topright", topright);
    localStorage.setItem("left", left);
    localStorage.setItem("middle", middle);
    localStorage.setItem("right", right);
    localStorage.setItem("bottomleft", bottomleft);
    localStorage.setItem("bottom", bottom);
    localStorage.setItem("bottomright", bottomright);
    localStorage.setItem("feed", feed);
    localStorage.setItem("double", double);
    localStorage.setItem("triple", triple);
    localStorage.setItem("quad", quad);
    localStorage.setItem("wsplit", wsplit);
    localStorage.setItem("backward", backward);
    localStorage.setItem("ltbackward", ltbackward);
    localStorage.setItem("diagonal", diagonal);
    localStorage.setItem("diagonalx16", diagonalx16);
    localStorage.setItem("linemod", linemod);
})
    //fixed menu button
  if (location.host == "balz.io" || location.host == "cellz.io" || location.host == "agar.red" || location.host == "xgar.io") {
	 $('.btns').css('padding','1px 40px');
     $('.modal').css('padding-left','22px');
     return;
}
    //auto select
  if (linemod == "" || linemod == null) {
      linemod = "auto"
  }
});
document.openPage = function (pageName) {
  var i, tabcont;
  tabcont = document.getElementsByClassName("tabcont");
  for (i = 0; i < tabcont.length; i++) {
  tabcont[i].style.display = "none";
}
document.getElementById(pageName).style.display = "block";
}
document.getElementById("firstPage").click();

window.addEventListener('keydown', keydown ,false);
window.addEventListener('keyup', keyup ,false);
var EjectDn = false;
var wspeed = 10;
function keydown(event) {
 //Key Value Porting
 var topleft = document.getElementById("freeze-topleft").value,
 up = document.getElementById("freeze-up").value,
 topright = document.getElementById("freeze-topright").value,
 left = document.getElementById("freeze-left").value,
 middle = document.getElementById("freeze-middle").value,
 right = document.getElementById("freeze-right").value,
 bottomleft = document.getElementById("freeze-bottomleft").value,
 bottom = document.getElementById("freeze-bottom").value,
 bottomright = document.getElementById("freeze-bottomright").value,
 feed = document.getElementById("feed").value,
 double = document.getElementById("double").value,
 triple = document.getElementById("triple").value,
 quad = document.getElementById("quad").value,
 wsplit = document.getElementById("wsplit").value,
 backward = document.getElementById("backward").value,
 ltbackward = document.getElementById("ltbackward").value,
 diagonal = document.getElementById("diagonal").value,
 diagonalx16 = document.getElementById("diagonalx16").value,
 linemod = document.getElementById("linemod").value,
 keys = event.keyCode;
 //Key Value Porting End

 //Controls
    if (keys == middle) {
        X = window.innerWidth / 2;
        Y = window.innerHeight / 2;
        $("canvas").trigger($.Event("mousemove", {clientX: X, clientY: Y}));
        return;
    }
     if (keys == left && linemod == "manual") {
        X = window.innerWidth / 3;
        Y = window.innerHeight / 2;
        $("canvas").trigger($.Event("mousemove", {clientX: X, clientY: Y}));
        return;
    }
    else if (keys == left && linemod == "auto") {
        center();
        X = window.innerWidth / 3;
        Y = window.innerHeight / 2;
        setTimeout(function () { $("canvas").trigger($.Event("mousemove", {clientX: X, clientY: Y}))}, 570);
    }
     if (keys == right && linemod == "manual") {
        X = window.innerWidth / 1;
        Y = window.innerHeight / 2;
        $("canvas").trigger($.Event("mousemove", {clientX: X, clientY: Y}));
        return;
    }
    else if (keys == right && linemod == "auto") {
        center();
        X = window.innerWidth / 1;
        Y = window.innerHeight / 2;
        setTimeout(function () { $("canvas").trigger($.Event("mousemove", {clientX: X, clientY: Y}))}, 570);
    }
    if (keys == bottom && linemod == "manual") {
        X = window.innerWidth / 2;
        Y = window.innerHeight / 1;
        $("canvas").trigger($.Event("mousemove", {clientX: X, clientY: Y}));
        return;
    }
    else if (keys == bottom && linemod == "auto") {
        center();
        X = window.innerWidth / 2;
        Y = window.innerHeight / 1;
        setTimeout(function () { $("canvas").trigger($.Event("mousemove", {clientX: X, clientY: Y}))}, 570);
    }
    if (keys == up && linemod == "manual") {
        X = window.innerWidth / 2;
        Y = window.innerHeight / 3;
        $("canvas").trigger($.Event("mousemove", {clientX: X, clientY: Y}));
        return;
    }
    else if (keys == up && linemod == "auto") {
        center();
        X = window.innerWidth / 2;
        Y = window.innerHeight / 3;
        setTimeout(function () { $("canvas").trigger($.Event("mousemove", {clientX: X, clientY: Y}))}, 570);
    }
    if (keys == topleft && linemod == "manual") {
        X = window.innerWidth / 2.008
        Y = window.innerHeight / 2.008
        $("canvas").trigger($.Event("mousemove", {clientX: X, clientY: Y}));
        return;
    }
    else if (keys == topleft && linemod == "auto") {
        center();
        X = window.innerWidth / 2.008;
        Y = window.innerHeight / 2.008;
        setTimeout(function () { $("canvas").trigger($.Event("mousemove", {clientX: X, clientY: Y}))}, 570);
    }
    if (keys == topright && linemod == "manual") {
        X = window.innerWidth / 1.994
        Y = window.innerHeight / 2.008
        $("canvas").trigger($.Event("mousemove", {clientX: X, clientY: Y}));
        return;
    }
    else if (keys == topright && linemod == "auto") {
        center();
        X = window.innerWidth / 1.994;
        Y = window.innerHeight / 2.008;
        setTimeout(function () { $("canvas").trigger($.Event("mousemove", {clientX: X, clientY: Y}))}, 570);
    }
    if (keys == bottomright && linemod == "manual") {
        X = window.innerWidth / 1.994
        Y = window.innerHeight / 1.994
        $("canvas").trigger($.Event("mousemove", {clientX: X, clientY: Y}));
        return;
    }
    else if (keys == bottomright && linemod == "auto") {
        center();
        X = window.innerWidth / 1.994;
        Y = window.innerHeight / 1.994;
        setTimeout(function () { $("canvas").trigger($.Event("mousemove", {clientX: X, clientY: Y}))}, 570);
    }
    if (keys == bottomleft && linemod == "manual") {
        X = window.innerWidth / 2.008
        Y = window.innerHeight / 1.994
        $("canvas").trigger($.Event("mousemove", {clientX: X, clientY: Y}));
        return;
    }
    else if (keys == bottomleft && linemod == "auto") {
        center();
        X = window.innerWidth / 2.008;
        Y = window.innerHeight / 1.994;
        setTimeout(function () { $("canvas").trigger($.Event("mousemove", {clientX: X, clientY: Y}))}, 570);
    }

    if (keys == double) {
        split();
        setTimeout(split, 10);
        return;
    }

    if (keys == triple) {
        split();
        setTimeout(split, 10);
        setTimeout(split, 20);
        return;
    }
    if (keys == quad) {
        split();
        setTimeout(split, 10);
        setTimeout(split, 20);
        setTimeout(split, 30);
        return;
    }
    if (keys == wsplit) {
        ww();
        setTimeout(split, 5);
        return;
    }

    if (keys == diagonal && location.host == "gota.io" && document.getElementById("main").style.display == "none") {
        split();
        split();
        split();
        menu_off();
        block();
        setTimeout(none, 1050);
        setTimeout(menu_on, 1050);
        return;
    }

    if (keys == backward) {
        split();
        center();
        center();
        center();
        split();
        return;
    }

    if (keys == feed && EjectDn === false) {
        EjectDn = true;
        setTimeout(eject, wspeed);
        return;
    }

    if (keys == diagonalx16 && location.host == "gota.io" && document.getElementById("main").style.display == "none") {
        split();
        split();
        split();
        split();
        menu_off();
        block();
        setTimeout(none, 1050);
        setTimeout(menu_on, 1050);
        return;
    }
    if (keys == 192) {
        $(".modal").show();
        $("#backdrop").show();
        return;
    }
    if (keys == ltbackward) {
        split();
        split();
        setTimeout(center, 300);
        return;
    }
}
    function none() { //changing display value
        var m = document.getElementById("main");
        m.style.display = "none";
    }
    function block() { //changing display value
        var m = document.getElementById("main");
        m.style.display = "block";
    }
    function menu_on() { //show the menu
        var m = document.getElementById("main");
        m.style.zIndex = "2";
    }
    function menu_off() { //hide the menu
        var m = document.getElementById("main");
        m.style.zIndex = "-99";
    }
    function center() { //routing the mouse event to the center
    X = window.innerWidth / 2;
    Y = window.innerHeight / 2;
    $("canvas").trigger($.Event("mousemove", {clientX: X, clientY: Y}));
        }
    function split() { //Space key listener the assigned number
    $("body").trigger($.Event("keydown", { keyCode: 32}));
    $("body").trigger($.Event("keyup", { keyCode: 32}));
        }
    function esc() { //ESC key listener the assigned number
    $("body").trigger($.Event("keydown", { keyCode: 27}));
    $("body").trigger($.Event("keyup", { keyCode: 27}));
        }
    function ww() {
    $("body").trigger($.Event("keydown", { keyCode: 87}));
    $("body").trigger($.Event("keyup", { keyCode: 87}));
        }
    function keyup(event) {
        var feeding = document.getElementById("feed"),
        feed = feeding.value;
        if (event.keyCode == feed) {
        EjectDn = false;
    }
}
    function eject() {
        if (EjectDn) {
    $("body").trigger($.Event("keydown", { keyCode: 87}));
    $("body").trigger($.Event("keyup", { keyCode: 87}));
        setTimeout(eject, wspeed);
    }
}
    //