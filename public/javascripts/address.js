var icity		= new Array;
var iprovince	= new Array;
var iarea	= new Array;
var cityprov	= new Array;
var areaprov	= new Array;
iprovince[1]='Beijing        北京';
iprovince[2]='Shanghai       上海';
iprovince[3]='Tianjin        天津';
iprovince[4]='Chongqing      重庆';
iprovince[17]='Anhui          安徽';
iprovince[33]='Macao          澳门';
iprovince[19]='Fujian         福建'; 
iprovince[13]='Gansu          甘肃';
iprovince[23]='Guangdong      广东';
iprovince[24]='Guangxi        广西';
iprovince[26]='Guizhou        贵州';
iprovince[31]='Hainan         海南';
iprovince[8]='Hebei          河北';
iprovince[9]='Henan          河南';
iprovince[5]='Heilongjiang   黑龙江';
iprovince[20]='Hubei          湖北';
iprovince[21]='Hunan          湖南';
iprovince[6]='Jilin          吉林';
iprovince[15]='Jiangsu        江苏';
iprovince[18]='Jiangxi        江西';
iprovince[7]='Liaoning       辽宁';
iprovince[28]='Neimenggu      内蒙古';
iprovince[14]='Ningxia        宁夏';
iprovince[27]='Qinghai        青海';
iprovince[10]='Shandong       山东';
iprovince[11]='Shanxi         山西';
iprovince[12]='Shanxi         陕西';
iprovince[22]='Sichuan        四川';
iprovince[34]='Taiwan         台湾';
iprovince[30]='Xizang         西藏';
iprovince[32]='Hongkong       香港';
iprovince[29]='Xinjiang       新疆';
iprovince[25]='Yunnan         云南';
iprovince[16]='Zhejiang       浙江';

cityprov[1]= new Array('1');
cityprov[2]= new Array('2');
//cityprov[2]= new Array('2','1100');
cityprov[3]= new Array('3');
cityprov[4]= new Array('4');
cityprov[5]= new Array('5','149','150','157','281','317','517','867','1121','1128','0');
cityprov[6]= new Array('158','159','456','1116','0');
cityprov[7]= new Array('6','178','211','221','231','252','254','327','351','352','387','440','451','1048','1050','1155','0');
cityprov[8]= new Array('147','185','216','242','275','290','340','428','468','550','562','947','0');
cityprov[9]= new Array('181','331','350','385','436','441','507','510','551','559','951','1088','1093','1094','0');
cityprov[10]= new Array('7','144','236','318','454','475','479','533','542','569','614','1071','1074','1106','0');
cityprov[11]= new Array('105','136','137','139','140','386','513','907','1092','0');
cityprov[12]= new Array('10','110','111','112','118','129','171','269','287','527','1030','0');
cityprov[13]= new Array('100','326','388','404','464','662','663','664','1021','1158','0');
cityprov[14]= new Array('99','321','0');
cityprov[15]= new Array('12','13','14','15','16','82','213','272','353','512','579','0');
cityprov[16]= new Array('17','22','86','308','346','375','407','491','571','578','0');
cityprov[17]= new Array('23','177','182','218','257','278','459','478','521','589','1006','1024','1078','0');
cityprov[18]= new Array('24','268','305','376','411','518','534','603','933','0');
cityprov[19]= new Array('25','258','348','378','406','437','560','606','667','0');
cityprov[20]= new Array('245','292','328','452','477','496','515','937','992','1117','0');
cityprov[21]= new Array('27','201','206','282','297','395','539','598','612','918','970','1110','1111','1125','0');
cityprov[22]= new Array('28','237','267','345','355','370','377','514','544','1011','1097','1148','0');
cityprov[23]= new Array('30','31','32','215','223','251','299','316','422','447','547','552','553','692','693','956','1105','1139','0');
cityprov[24]= new Array('33','189','354','380','492','1113','1140','0');
cityprov[25]= new Array('34','35','36','37','93','186','197','435','555','985','0');
cityprov[26]= new Array('38','179','333','558','605','975','0');
cityprov[27]= new Array('124','0');
cityprov[28]= new Array('103','141','202','458','1133','1134','0');
cityprov[29]= new Array('39','40','98','109','166','173','175','285','294','330','455','0');
cityprov[30]= new Array('41','92','97','108','439','575','0');
cityprov[31]= new Array('42','43','0');
cityprov[32]= new Array('58','0');
cityprov[33]= new Array('59','0');
cityprov[34]= new Array('617','720','0');

iarea[1] = '华东区';
iarea[2] = '华南区';
iarea[3] = '华西区';
iarea[4] = '华北区';
iarea[5] = '华中区';
iarea[6] = '其他';

areaprov[1] = new Array('2','15','16');
areaprov[2] = new Array('19','23','24','31','32','33','34');
areaprov[3] = new Array('4','13','14','22','25','26','27','28','29','30');
areaprov[4] = new Array('1','3','5','6','7','8','9','10','11','12');
areaprov[5] = new Array('9','17','18','20','21');
areaprov[6] = new Array('35');

 
icity[0] = 'Qita	其他';
icity[1]='Beijing     北京';
icity[2]='Shanghai    上海';
icity[1100]='Guangan     广安';
icity[3]='Tianjin     天津';
icity[4]='Chongqing   重庆';
icity[5]='Harbin      哈尔滨';
icity[867]='Yanbian     延边';
icity[149]='Qiqihar     齐齐哈尔';
icity[150]='Mudanjiang  牡丹江';
icity[157]='Jixi        鸡西';
icity[281]='Heihe       黑河';
icity[317]='Jiamusi     佳木斯';
icity[1121]='Jingmen     荆门';
icity[1128]='Suihua      绥化';
icity[517]='Yichun      伊春';
icity[158]='Changchun   长春';
icity[159]='Jilin       吉林';
icity[1116]='Baicheng    白城';
icity[456]='Tonghua     通化';
icity[6]='Dalian      大连';
icity[211]='Chaoyang    朝阳';
icity[221]='Dandong     丹东';
icity[231]='Daqing      大庆';
icity[252]='Fuxun       抚顺';
icity[254]='Fuxin       阜新';
icity[387]='Panjing     盘锦';
icity[440]='Siping      四平';
icity[178]='Anshan      鞍山';
icity[327]='Jinzhou     锦州';
icity[351]='Liaoyang    辽阳';
icity[352]='Liaoyuan    辽源';
icity[1048]='Tielin      铁岭';
icity[1050]='Huludao     葫芦岛';
icity[1155]='Benxi       本溪';
icity[451]='Shenyang    沈阳';
icity[216]='Cangzhou    沧州';
icity[242]='Dezhou      德州';
icity[275]='Handan      邯郸';
icity[428]='Shijiazhuang石家庄';
icity[147]='Qinhuangdao 秦皇岛';
icity[185]='Baoding     保定';
icity[290]='Hengshui    衡水';
icity[340]='Langfang    廊坊';
icity[947]='Xingtai     邢台';
icity[468]='Tangshan    唐山';
icity[550]='Zhangjiakou 张家口';
icity[562]='Chende      承德';
icity[385]='Nanyang     南阳';
icity[436]='Sanmenxia   三门峡';
icity[441]='Shangqiu    商丘';
icity[181]='Anyang      安阳';
icity[331]='Kaifeng     开封';
icity[350]='Luoyang     洛阳';
icity[951]='Hebi        鹤壁';
icity[1088]='Luohe       漯河';
icity[1093]='Jiaozuo     焦作';
icity[1094]='Xuchang     许昌';
icity[507]='Xinxiang    新乡';
icity[510]='Xinyang     信阳';
icity[551]='Zhumadian   驻马店';
icity[559]='Zhengzhou   郑州';
icity[7]='Qingdao     青岛';
icity[236]='Dongying    东营';
icity[144]='Jinan       济南';
icity[318]='Jining      济宁';
icity[1071]='Liaocheng   聊城';
icity[1074]='Heze        菏泽';
icity[1106]='Rezhao      日照';
icity[454]='Taian       泰安';
icity[475]='Weifang     潍坊';
icity[479]='Weihai      威海';
icity[533]='Yantai      烟台';
icity[542]='Zibo        淄博';
icity[569]='Linyi       临沂';
icity[614]='Zhaozhuang  枣庄';
icity[386]='Pingdingshan平顶山';
icity[105]='Taiyuan     太原';
icity[136]='Datong      大同';
icity[137]='Changzhi    长治';
icity[139]='Linfen      临汾';
icity[140]='Yuncheng    运城';
icity[907]='Yangquan    阳泉';
icity[1092]='Jincheng    晋城';
icity[513]='Xinzhou     忻州';
icity[10]='Xian        西安';
icity[269]='Huaian      淮安';
icity[110]='Yanan       延安';
icity[111]='Xianyang    咸阳';
icity[112]='Baoji       宝鸡';
icity[118]='Tongchuan   铜川';
icity[129]='Hanzhong    汉中';
icity[171]='Ankang      安康';
icity[287]='Huainan     淮南';
icity[1030]='Weinan      渭南';
icity[527]='Yulin       榆林';
icity[388]='Pingliang   平凉';
icity[404]='Qingyang    庆阳';
icity[662]='Jiuquan     酒泉';
icity[663]='Zhangye     张掖';
icity[664]='Wuwei       武威';
icity[100]='Lanzhou     兰州';
icity[326]='Jiayuguan   嘉峪关';
icity[1021]='Dingxi      定西';
icity[1158]='Jinchang    金昌';
icity[464]='Tianshui    天水';
icity[99]='Yinchuan    银川';
icity[321]='Guyuan      固原';
icity[12]='Nanjing     南京';
icity[13]='Wuxi        无锡';
icity[14]='Suzhou      苏州';
icity[15]='Yangzhou    扬州';
icity[16]='Zhengjiang  镇江';
icity[82]='Nantong     南通';
icity[213]='Changzhou   常州';
icity[272]='Huaibei     淮北';
icity[353]='Lianyungang 连云港';
icity[1200]='yancheng    盐城';
icity[512]='Xuzhou      徐州';
icity[579]='Taizhou     泰州';
icity[17]='Hangzhou    杭州';
icity[22]='Shaoxing    绍兴';
icity[86]='Huzhou      湖州';
icity[375]='Ningbo      宁波';
icity[407]='Quzhou      衢州';
icity[308]='Jinhua      金华';
icity[346]='Lishui      丽水';
icity[491]='Wenzhou     温州';
icity[571]='Jiaxing     嘉兴';
icity[578]='Taizhou     台州';
icity[23]='Huangshan   黄山';
icity[218]='Chizhou     池州';
icity[257]='Fuyang      阜阳';
icity[177]='Anqing      安庆';
icity[182]='Bangbu      蚌埠';
icity[278]='Hefei       合肥';
icity[1006]='Xuancheng   宣城';
icity[1024]='Maanshan    马鞍山';
icity[1078]='Bozhou      亳州';
icity[459]='Tongling    铜陵';
icity[478]='Wuhu        芜湖';
icity[521]='Suzhou      宿州(县)';
icity[589]='Chaohu      巢湖';
icity[24]='Jiujiang    九江';
icity[268]='Ganzhou     赣州';
icity[376]='Nanchang    南昌';
icity[411]='Shangrao    上饶';
icity[305]='Jingdezhen  景德镇';
icity[933]='Jian        吉安';
icity[518]='Yichun      宜春';
icity[534]='Yingtan     鹰潭';
icity[603]='Xinyu       新余';
icity[25]='Xiamen      厦门';
icity[258]='Fuzhou      福州';
icity[378]='Ningde      宁德';
icity[406]='Quanzhou    泉州';
icity[437]='Sanming     三明';
icity[667]='Putian      莆田';
icity[348]='Longyan     龙岩';
icity[560]='Zhangzhou   漳州';
icity[606]='Nanping     南平';
icity[245]='Enshi       恩施';
icity[292]='Huangshi    黄石';
icity[328]='Jinzhou     荆州';
icity[937]='Xianning    咸宁';
icity[992]='Ezhou       鄂州';
icity[1117]='Suizhou     随州';
icity[452]='Shiyan      十堰';
icity[477]='Wuhan       武汉';
icity[496]='Xiangfan    襄樊';
icity[515]='Yichang     宜昌';
icity[27]='Zhangjiajie 张家界';
icity[201]='Changde     常德';
icity[206]='Changsha    长沙';
icity[395]='Pingxiang   萍乡';
icity[282]='Huaihua     怀化';
icity[297]='Hengyang    衡阳';
icity[918]='Loudi       娄底';
icity[970]='Yongzhou    永州';
icity[1110]='Jishou      吉首';
icity[1111]='Shaoyang    邵阳';
icity[1125]='Yiyang      益阳';
icity[539]='Yueyang     岳阳';
icity[598]='Xiangtan    湘潭';
icity[612]='Chengzhou   郴州';
icity[28]='Chengdu     成都';
icity[237]='Deyang      德阳';
icity[267]='Guangyuan   广元';
icity[370]='Mianyang    绵阳';
icity[377]='Nanchong    南充';
icity[345]='Leshan      乐山';
icity[355]='Luzhou      泸州';
icity[1011]='Neijiang    内江';
icity[1097]='Panzhihua   攀枝花';
icity[1148]='Meishan     眉山';
icity[514]='Yibin       宜宾';
icity[544]='Zigong      自贡';
icity[30]='Shenzhen    深圳';
icity[31]='Zhuhai      珠海';
icity[32]='Guangzhou   广州';
icity[215]='chaozhou    潮州';
icity[223]='Dongguan    东莞';
icity[251]='Foshan      佛山';
icity[422]='Shaoguan    韶关';
icity[692]='Yangjiang   阳江';
icity[693]='Heyuan      河源';
icity[299]='Huizhou     惠州';
icity[316]='Jiangmen    江门';
icity[956]='Jieyang     揭阳';
icity[1105]='Maoming     茂名';
icity[1139]='Xingyi      兴义';
icity[447]='Shantou     汕头';
icity[547]='Zhanjiang   湛江';
icity[552]='Zhaoqing    肇庆';
icity[553]='Zhongshan   中山';
icity[33]='Guilin      桂林';
icity[380]='Nanning     南宁';
icity[189]='Beihai      北海';
icity[354]='Liuzhou     柳州';
icity[1113]='Yulin       玉林';
icity[1140]='Baise       百色';
icity[492]='Wuzhou      梧州';
icity[34]='Kunming     昆明';
icity[35]='Xishuangbann西双版纳';
icity[36]='Dali        大理';
icity[37]='Lijiang     丽江';
icity[197]='Baoshan     保山';
icity[435]='Simao       思茅';
icity[93]='Diqing      迪庆';
icity[186]='yuxi        玉溪';
icity[985]='Qujing      曲靖';
icity[555]='Zhaotong    昭通';
icity[38]='Guiyang     贵阳';
icity[179]='Anshun      安顺';
icity[333]='Kaili       凯里';
icity[975]='Duyun       都匀';
icity[558]='Zunyi       遵义';
icity[605]='Lps         六盘水';
icity[124]='Xining      西宁';
icity[202]='Chifeng     赤峰';
icity[103]='Hohhot      呼和浩特';
icity[141]='Baotou      包头';
icity[1133]='Wuhai       乌海';
icity[1134]='Shizuishan  石嘴山';
icity[458]='Tongliao    通辽';
icity[39]='Urumqi      乌鲁木齐';
icity[40]='Tulufan     吐鲁番';
icity[98]='Yili        伊犁';
icity[109]='Kashi       喀什';
icity[166]='Kelamayi    克拉玛依';
icity[173]='Aksu        阿克苏';
icity[175]='Aletai      阿勒泰';
icity[285]='Hami        哈密';
icity[294]='Hotan       和田';
icity[330]='Koria       库尔勒';
icity[455]='Tacheng     塔城';
icity[41]='Lhasa       拉萨';
icity[439]='Shannan     山南';
icity[92]='Rikazhe     日喀则';
icity[97]='Ali         阿里';
icity[108]='Linzhi      林芝';
icity[575]='Changdu     昌都';
icity[42]='Haikou      海口';
icity[43]='Sanya       三亚';
icity[58]='HongKong    香港';
icity[59]='Macao       澳门';
icity[720]='Kaohsiung   高雄';
icity[617]='Taipei      台北';

//============================================================================
function ImportProvince(oSelect)
{
var i,j;
j=1;
for (i=0;i<iprovince.length;i++)
	{
	if (iprovince[i])
		{
		oSelect.options[j] = new Option(iprovince[i],i);
		j++;
		}
	}

}


function ImportCity(iProvValue,oSelect)
{
var i,j;
j=1;
for (i=0;i<cityprov[iProvValue].length;i++)
	{
		oSelect.options[j] = new Option(icity[cityprov[iProvValue][i]],cityprov[iProvValue][i]);
		j++;
	}
}

function 	initSelected(pro, proid){
			for (var i=0; i< pro.length ; i++)
				if (pro.options[i].value==proid) pro.selectedIndex = i;
}


function changeArea(iProvValue, oAreaText) {
var i,j
	for(i=1; i<= 6 ; i++) {
		for(j=0; j< areaprov.length; j++) {
			if (iProvValue==areaprov[i][j]) {
				oAreaText.value = i ;
				break;
			}
		
		} 	
	}
}

