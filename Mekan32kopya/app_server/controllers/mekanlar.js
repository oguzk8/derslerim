var express = require('express');
var router = express.Router();

const anaSayfa=function(req,res,next){
	res.render('mekanlar-liste',
				{'baslik':'Anasayfa',
					'sayfaBaslik':{
					'siteAd':'Mekan322',
					'aciklama':'Ispartadaki mekanları keşfedin!'
					},
				'mekanlar':[
				{
					'ad':'Starbucks',
					'adres':'Centrum Garden',
					'puan':'3',
					'imkanlar':['kahve','çay','pasta'],
					'mesafe':'10km'
				},
				{
					'ad':'Gloria Jeans',
					'adres':'İyaş AVM',
					'puan':'2',
					'imkanlar':['kahve','kek','çay'],
					'mesafe':'5km'
				}
			]
		}
	);
}

const mekanBilgisi=function(req,res){
	res.render('mekan-detay',{
		'baslik':'Mekan Bilgisi',
		'sayfaBaslik':'Starbucks',
		'mekanBilgisi':{
			'ad':'Starbucks',
			'adres':'Centrum Garden',
			'puan':'3',
			'imkanlar':['kahve', 'pasta', 'kek'],
			'koordinatlar':{
				'enlem':37.781885,
				'boylam':30.566034
			},
			'saatler':[
				{
					'gunler':'Pazartesi-Cuma',
					'acilis':'7:00',
					'kapanis':'23:00',
					'kapali':false
				},
				{
					'gunler':'Cumartesi',
					'acilis':'9:00',
					'kapanis':'22:30',
					'kapali':false
				},
				{
					'gunler':'Pazar',
					'kapali':true
				}
			],
			'yorumlar':[
				{
					'yorumYapan':'Asım Sinan Yüksel0',
					'puan':3,
					'tarih':'18 Ekim 2017',
					'yorumMetni':'kahveleri çok güzel*'
				}
			]
		}
	});
}

const yorumEkle=function(req,res){
	res.render('yorum-ekle',{'title':'Yorum Ekle'});
}

module.exports = {
	anaSayfa,
	mekanBilgisi,
	yorumEkle
};