var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_RBI25K_ADMINISTRASI_AR_1 = new ol.format.GeoJSON();
var features_RBI25K_ADMINISTRASI_AR_1 = format_RBI25K_ADMINISTRASI_AR_1.readFeatures(json_RBI25K_ADMINISTRASI_AR_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RBI25K_ADMINISTRASI_AR_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RBI25K_ADMINISTRASI_AR_1.addFeatures(features_RBI25K_ADMINISTRASI_AR_1);
var lyr_RBI25K_ADMINISTRASI_AR_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RBI25K_ADMINISTRASI_AR_1, 
                style: style_RBI25K_ADMINISTRASI_AR_1,
                popuplayertitle: "RBI25K_ADMINISTRASI_AR",
                interactive: true,
                title: '<img src="styles/legend/RBI25K_ADMINISTRASI_AR_1.png" /> RBI25K_ADMINISTRASI_AR'
            });
var format_bataswilayah_2 = new ol.format.GeoJSON();
var features_bataswilayah_2 = format_bataswilayah_2.readFeatures(json_bataswilayah_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bataswilayah_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bataswilayah_2.addFeatures(features_bataswilayah_2);
var lyr_bataswilayah_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_bataswilayah_2, 
                style: style_bataswilayah_2,
                popuplayertitle: "batas wilayah",
                interactive: true,
    title: 'batas wilayah<br />\
    <img src="styles/legend/bataswilayah_2_0.png" /> bendungan hilir<br />\
    <img src="styles/legend/bataswilayah_2_1.png" /> bunggur<br />\
    <img src="styles/legend/bataswilayah_2_2.png" /> cempaka baru<br />\
    <img src="styles/legend/bataswilayah_2_3.png" /> cempaka putih barat<br />\
    <img src="styles/legend/bataswilayah_2_4.png" /> cempaka putih timur<br />\
    <img src="styles/legend/bataswilayah_2_5.png" /> Cideng<br />\
    <img src="styles/legend/bataswilayah_2_6.png" /> cikini<br />\
    <img src="styles/legend/bataswilayah_2_7.png" /> Duri Pulo<br />\
    <img src="styles/legend/bataswilayah_2_8.png" /> gambir<br />\
    <img src="styles/legend/bataswilayah_2_9.png" /> gelora<br />\
    <img src="styles/legend/bataswilayah_2_10.png" /> Gondangdia<br />\
    <img src="styles/legend/bataswilayah_2_11.png" /> gunung sari selatan<br />\
    <img src="styles/legend/bataswilayah_2_12.png" /> gunung sari utara<br />\
    <img src="styles/legend/bataswilayah_2_13.png" /> harapan mulya<br />\
    <img src="styles/legend/bataswilayah_2_14.png" /> johan baru<br />\
    <img src="styles/legend/bataswilayah_2_15.png" /> Kampung Bali<br />\
    <img src="styles/legend/bataswilayah_2_16.png" /> kampung raya<br />\
    <img src="styles/legend/bataswilayah_2_17.png" /> karang anyar<br />\
    <img src="styles/legend/bataswilayah_2_18.png" /> karet tengsin<br />\
    <img src="styles/legend/bataswilayah_2_19.png" /> kebon kacang<br />\
    <img src="styles/legend/bataswilayah_2_20.png" /> Kebon Kelapa<br />\
    <img src="styles/legend/bataswilayah_2_21.png" /> kebon kosong<br />\
    <img src="styles/legend/bataswilayah_2_22.png" /> kebon melati<br />\
    <img src="styles/legend/bataswilayah_2_23.png" /> kebon sirih<br />\
    <img src="styles/legend/bataswilayah_2_24.png" /> kemayoran<br />\
    <img src="styles/legend/bataswilayah_2_25.png" /> kramat<br />\
    <img src="styles/legend/bataswilayah_2_26.png" /> kwintang<br />\
    <img src="styles/legend/bataswilayah_2_27.png" /> mangga dua selatan<br />\
    <img src="styles/legend/bataswilayah_2_28.png" /> menteng<br />\
    <img src="styles/legend/bataswilayah_2_29.png" /> palmerah<br />\
    <img src="styles/legend/bataswilayah_2_30.png" /> pasar baru<br />\
    <img src="styles/legend/bataswilayah_2_31.png" /> Paseban<br />\
    <img src="styles/legend/bataswilayah_2_32.png" /> Pegangsaan<br />\
    <img src="styles/legend/bataswilayah_2_33.png" /> Petambunan<br />\
    <img src="styles/legend/bataswilayah_2_34.png" /> Petojo Selatan<br />\
    <img src="styles/legend/bataswilayah_2_35.png" /> rawasari<br />\
    <img src="styles/legend/bataswilayah_2_36.png" /> rutan panjang<br />\
    <img src="styles/legend/bataswilayah_2_37.png" /> senayan<br />\
    <img src="styles/legend/bataswilayah_2_38.png" /> senen<br />\
    <img src="styles/legend/bataswilayah_2_39.png" /> serdang<br />\
    <img src="styles/legend/bataswilayah_2_40.png" /> sumur batu<br />\
    <img src="styles/legend/bataswilayah_2_41.png" /> tanah tinggi<br />\
    <img src="styles/legend/bataswilayah_2_42.png" /> <br />'
        });
var format_Book2_3 = new ol.format.GeoJSON();
var features_Book2_3 = format_Book2_3.readFeatures(json_Book2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Book2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Book2_3.addFeatures(features_Book2_3);
var lyr_Book2_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Book2_3, 
                style: style_Book2_3,
                popuplayertitle: "Book2",
                interactive: true,
    title: 'Book2<br />\
    <img src="styles/legend/Book2_3_0.png" /> rs tni al<br />\
    <img src="styles/legend/Book2_3_1.png" /> RSU Bunda Jakarta<br />\
    <img src="styles/legend/Book2_3_2.png" /> Rumah Sakit Kramat 128<br />\
    <img src="styles/legend/Book2_3_3.png" /> Rumah Sakit Pusat Angkatan Darat Gatot Soebroto<br />\
    <img src="styles/legend/Book2_3_4.png" /> Rumah Sakit Umum Daerah (RSUD) Johar Baru<br />'
        });
var format_RS_4 = new ol.format.GeoJSON();
var features_RS_4 = format_RS_4.readFeatures(json_RS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RS_4.addFeatures(features_RS_4);
var lyr_RS_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RS_4, 
                style: style_RS_4,
                popuplayertitle: "RS",
                interactive: true,
    title: 'RS<br />\
    <img src="styles/legend/RS_4_0.png" /> LAYANAN KESEHATAN BUDI KEMULIAN<br />\
    <img src="styles/legend/RS_4_1.png" /> RS DR MANGUNHARJO<br />\
    <img src="styles/legend/RS_4_2.png" /> RS GIGI DAN MULUT TNI AL<br />\
    <img src="styles/legend/RS_4_3.png" /> RS HERMINA KEMAJORAN<br />\
    <img src="styles/legend/RS_4_4.png" /> RS MURNI TEGUH SUDIRMAN<br />\
    <img src="styles/legend/RS_4_5.png" /> RS TARAKAN<br />\
    <img src="styles/legend/RS_4_6.png" /> RS THT BEDAH PROF NIZAR<br />\
    <img src="styles/legend/RS_4_7.png" /> RSPAD GATOT SUBROTO<br />\
    <img src="styles/legend/RS_4_8.png" /> RSU KEC. TANAH ABANG<br />'
        });
var format_LAYANANKESEHATAN_5 = new ol.format.GeoJSON();
var features_LAYANANKESEHATAN_5 = format_LAYANANKESEHATAN_5.readFeatures(json_LAYANANKESEHATAN_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LAYANANKESEHATAN_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LAYANANKESEHATAN_5.addFeatures(features_LAYANANKESEHATAN_5);
var lyr_LAYANANKESEHATAN_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LAYANANKESEHATAN_5, 
                style: style_LAYANANKESEHATAN_5,
                popuplayertitle: "LAYANAN KESEHATAN",
                interactive: true,
                title: '<img src="styles/legend/LAYANANKESEHATAN_5.png" /> LAYANAN KESEHATAN'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_RBI25K_ADMINISTRASI_AR_1.setVisible(true);lyr_bataswilayah_2.setVisible(true);lyr_Book2_3.setVisible(true);lyr_RS_4.setVisible(true);lyr_LAYANANKESEHATAN_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_RBI25K_ADMINISTRASI_AR_1,lyr_bataswilayah_2,lyr_Book2_3,lyr_RS_4,lyr_LAYANANKESEHATAN_5];
lyr_RBI25K_ADMINISTRASI_AR_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_bataswilayah_2.set('fieldAliases', {'id': 'id', 'kelurahan': 'kelurahan', });
lyr_Book2_3.set('fieldAliases', {'kota': 'kota', 'x': 'x', 'y': 'y', });
lyr_RS_4.set('fieldAliases', {'id': 'id', 'NO': 'NO', 'NAMA': 'NAMA', });
lyr_LAYANANKESEHATAN_5.set('fieldAliases', {'id': 'id', 'NO': 'NO', 'LOKASI': 'LOKASI', 'FOTO': 'FOTO', });
lyr_RBI25K_ADMINISTRASI_AR_1.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'Range', 'SHAPE_AREA': 'TextEdit', 'SHAPE_LEN': 'TextEdit', });
lyr_bataswilayah_2.set('fieldImages', {'id': 'TextEdit', 'kelurahan': 'TextEdit', });
lyr_Book2_3.set('fieldImages', {'kota': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_RS_4.set('fieldImages', {'id': 'TextEdit', 'NO': 'TextEdit', 'NAMA': 'TextEdit', });
lyr_LAYANANKESEHATAN_5.set('fieldImages', {'id': 'TextEdit', 'NO': 'TextEdit', 'LOKASI': 'TextEdit', 'FOTO': 'ExternalResource', });
lyr_RBI25K_ADMINISTRASI_AR_1.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', });
lyr_bataswilayah_2.set('fieldLabels', {'id': 'no label', 'kelurahan': 'no label', });
lyr_Book2_3.set('fieldLabels', {'kota': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_RS_4.set('fieldLabels', {'id': 'no label', 'NO': 'no label', 'NAMA': 'no label', });
lyr_LAYANANKESEHATAN_5.set('fieldLabels', {'id': 'no label', 'NO': 'no label', 'LOKASI': 'no label', 'FOTO': 'no label', });
lyr_LAYANANKESEHATAN_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});