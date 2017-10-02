var rootview, page;
rootview = ui("root");
page = sm("do_Page");

rootview.setMapping({
    "UserName.text" : "NickName",
    "InforDescribe.text" : "InforDescribe",
    "InforTime.text" : "InforTime",
    "InforReply.text" : "InforReply",

    "InforImage0.source" : "InforImage0",
    "InforImage1.source" : "InforImage1",
    "InforImage2.source" : "InforImage2",
    "InforImage3.source" : "InforImage3",
    "InforImage4.source" : "InforImage4",
    "InforImage5.source" : "InforImage5",

    "InforImage0.visible" : "InforImage0V",
    "InforImage1.visible" : "InforImage1V",
    "InforImage2.visible" : "InforImage2V",
    "InforImage3.visible" : "InforImage3V",
    "InforImage4.visible" : "InforImage4V",
    "InforImage5.visible" : "InforImage5V",

    "InforType.source" : "InforType0",
    "tag" : "IMGShowerSources"
});

