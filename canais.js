// api/canais.js
module.exports = async (req, res) => {
  const lista = `
#EXTM3U
#EXTINF:-1,Kuriakos Kids 
#EXTIMG https://example.com/icon.png
https://w2.manasat.com/kkids/smil:kkids.smil/playlist.m3u8

#EXTINF:-1,filme
#EXTIMG https://example.com/icon.png
http://46.151.196.211/vauth/249965.mp4?token=HJCklA0eMbyYq0zP8xU-jUt9_K9xAAzrxRgYneouo9NunbkteejgVS-YKbaj-9hqDPR-SETFL0xUf6HA4GW6uhI9ZiTnbWTZLTbnwn6e3xevvcj9YE1P1IxVjBHAiwBcaPW0Ij2VS8TEkKL52w9JHayh_gmSI8X5HN-CMdfPZuUYJi-SKAHzZfaumCy0zwrZR0MScYOVcTm6GMi6QoLMNF_gVbvcekIcnMDAutedY8eto5okV8ZbsP5uSWoR7T1bbgrGz-LBt9h6YBJ_NrDt9E5RNREl9v2nDtg37lldrz1MC-rCNQ2PYE4j4mJunp6LGYgw2bftJqbhB9NDMtXBksKYrLglI9HVLj-wfyTDMBZyk_8JrjC2GKG2q-SxIIx9IyP0yk_dCtyzJxJI2wShmbTRuzmUyUljSNHWdC2-v8-u6qkdMmZHcksLg2WGJIIUJEqdOd97CRqOV4RC4bW3L61MPPXzMJJIm1eoKWnHCS33G7HQwwW0G0wg0KMwW1wsQwhGkhYPYzyNGDrun0bSSLjAqSJnQZ6K1Qk8rXcBxmcpkvaBku0IHp8D06KT2mKcHxROct7wQ-LZ3tBbq2TxRqmSYzStKlgM2tmgNg4fTuw

#EXTINF:-1,Gospel Movie TV
#EXTIMG https://example.com/icon.png
https://stmv1.srvif.com/gospelf/gospelf/playlist.m3u8

#EXTINF:-1,Gospel Cartoon
#EXTIMG https://example.com/icon.png
https://stmv1.srvif.com/gospelcartoon/gospelcartoon/playlist.m3u8

#EXTINF:-1,Retro Cartoon
#EXTIMG https://example.com/icon.png
https://stmv1.srvif.com/retrotv/retrotv/playlist.m3u8

#EXTINF:-1,Tela Viva
#EXTIMG https://example.com/icon.png
https://srv4.zcast.com.br/telavivatv/telavivatv/playlist.m3u8

#EXTINF:-1,Demais TV
#EXTIMG https://example.com/icon.png
https://stmv1.samcast.com.br/demaistv6503/demaistv6503/playlist.m3u8

#EXTINF:-1,Play TV
#EXTIMG https://example.com/icon.png
https://playtv.mediastreaming.com.br/play/live.stream/playlist.m3u8

#EXTINF:-1,Record News
#EXTIMG https://example.com/icon.png
https://stream.ads.ottera.tv/playlist.m3u8?network_id=2116

#EXTINF:-1,Novo Tempo
#EXTIMG https://example.com/icon.png
https://stream.live.novotempo.com/tv/smil:tvnovotempo.smil/playlist.m3u8

#EXTINF:-1,SBT Interior
#EXTIMG https://example.com/icon.png
https://cdn.jmvstream.com/w/LVW-10801/LVW10801_Xvg4R0u57n/playlist.m3u8

#EXTINF:-1,Animax
#EXTIMG https://example.com/icon.png
https://stream.ichibantv.com:3547/stream/play.m3u8

#EXTINF:-1,TV Cine
#EXTIMG https://example.com/icon.png
https://stmv1.srvif.com/tvserie/tvserie/playlist.m3u8

#EXTINF:-1,Bons Tempos
#EXTIMG https://example.com/icon.png
https://stmv1.srvif.com/canal29/canal29/playlist.m3u8

#EXTINF:-1,Loading
#EXTIMG https://example.com/icon.png
https://stmv1.srvif.com/loadingtv/loadingtv/playlist.m3u8

#EXTINF:-1,Otaku Sign
#EXTIMG https://example.com/icon.png
https://stmv1.srvif.com/otaku/otaku/playlist.m3u8

#EXTINF:-1,TV Aracati
#EXTIMG https://example.com/icon.png
https://video04.logicahost.com.br/tvaracati/tvaracati/playlist.m3u8

#EXTINF:-1,AniTV
#EXTIMG https://example.com/icon.png
https://stream.ichibantv.com:3764/hybrid/play.m3u8

#EXTINF:-1,TV Zyn
#EXTIMG https://example.com/icon.png
https://amg01391-sbtinfast-amg01391c2-runtime-latam-1337.playouts.now.amagi.tv/playlist/amg01391-addigital-tvzyn-runtimelatam/playlist.m3u8

#EXTINF:-1,ConecTV
#EXTIMG https://example.com/icon.png
https://stream01.msolutionbrasil.com.br/hls/conectv/live.m3u8

#EXTINF:-1,Toon Goggles
#EXTIMG https://example.com/icon.png
https://stream.ads.ottera.tv/playlist.m3u8?network_id=274

#EXTINF:-1,Adorando Jesus
#EXTIMG https://example.com/icon.png
https://stmv1.srvif.com/adorando/adorando/playlist.m3u8

#EXTINF:-1,Mi TV
#EXTIMG https://example.com/icon.png
https://stmv4.voxtvhd.com.br/1990/1990/playlist.m3u8

#EXTINF:-1,Gospel Music Television
#EXTIMG https://example.com/icon.png
https://stmv1.srvif.com/gmusic/gmusic/playlist.m3u8

#EXTINF:-1,Filmes Online
#EXTIMG https://example.com/icon.png
https://stream.ads.ottera.tv/playlist.m3u8?network_id=6178

#EXTINF:-1,TV Clássicos do Cinema
#EXTIMG https://example.com/icon.png
https://stmv1.srvif.com/movies1/movies1/playlist.m3u8

#EXTINF:-1,Clouding
#EXTIMG https://example.com/icon.png
https://stmv1.paineltv.net/redeclonetv/redeclonetv/playlist.m3u8

#EXTINF:-1,Runtime
#EXTIMG https://example.com/icon.png
https://stream.ads.ottera.tv/playlist.m3u8?network_id=2552

#EXTINF:-1,TV Osório
#EXTIMG https://example.com/icon.png
https://stmv1.srvstm.com/demo2573/demo2573/playlist.m3u8

#EXTINF:-1,Globo SP SD
#EXTIMG:https://imgur.com/waZJG1M.png
https://cdn-2.nxplay.com.br/GLOBO_SP_TK/tracks-v1a1/mono.m3u8

#EXTINF:-1,RecordTV SP SD
#EXTIMG:https://imgur.com/lyQ1v9M.png
https://stream1.freetv.fun/record-sp-2-1.m3u8

#EXTINF:-1,RecordTV SP HD
#EXTIMG:https://imgur.com/lyQ1v9M.png
https://cdn-2.nxplay.com.br/RECORD_PAULISTA_PFZ_NXPLAY_01/tracks-v1a1/mono.m3u8

#EXTINF:-1,RecordTV SP HD [Alter]
#EXTIMG:https://imgur.com/lyQ1v9M.png
https://stream1.freetv.fun/record-sp-2-3.m3u8

#EXTINF:-1,RecordTV Juara HD
#EXTIMG:https://imgur.com/lyQ1v9M.png
https://cdn.jmvstream.com/w/LVW-10842/LVW10842_513N26MDBL/chunklist.m3u8

#EXTINF:-1,RecordTV Juina HD
#EXTIMG:https://imgur.com/lyQ1v9M.png
https://cdn.jmvstream.com/w/LVW-10841/LVW10841_mT77z9o2cP/playlist.m3u8

#EXTINF:-1,Band RJ HD
#EXTIMG:https://imgur.com/xYGjfh8.png
https://stream1.freetv.fun/band-rj-1.ctv

#EXTINF:-1,Band SP SD
#EXTIMG:https://imgur.com/xYGjfh8.png
https://cdn-2.nxplay.com.br/BAND_HD_PFZ_NX/tracks-v1a1/mono.m3u8

#EXTINF:-1,Band SP HD
#EXTIMG:https://imgur.com/xYGjfh8.png
https://cdn-2.nxplay.com.br/BAND_HD_PFZ_NX/index.m3u8

#EXTINF:-1,Band SP HD [Alter]
#EXTIMG:https://imgur.com/xYGjfh8.png
https://stream1.freetv.fun/band-sp-1.m3u8

#EXTINF:-1,Band HD
#EXTIMG:https://imgur.com/xYGjfh8.png
https://stream1.freetv.fun/band-1.m3u8

#EXTINF:-1,Band Arapuan HD
#EXTIMG:https://i.imgur.com/yyFeDm7.png
https://5b7f3c45ab7c2.streamlock.net/arapuan/ngrp:arapuan_all/chunklist.m3u8

#EXTINF:-1,Band TV - Vale do Uruará SD
#EXTIMG:https://i.imgur.com/oTkOmnH.png
https://stmv1.paineltv.net/valeradiowebtv/valeradiowebtv/chunklist_w1873032931.m3u8

#EXTINF:-1,NEW BRASIL HD
#EXTIMG:https://imgur.com/vSKVrvH.png
https://cc-7pakstinpyajo.akamaized.net/playlist720lp.m3u8

#EXTINF:-1,NEW BRASIL FHD
#EXTIMG:https://imgur.com/vSKVrvH.png
https://cc-7pakstinpyajo.akamaized.net/playlist1080p.m3u8


#EXTINF:-1,SBT Interior SP HD
#EXTIMG:https://imgur.com/KO1v3pS.png
https://cdn.jmvstream.com/w/LVW-10801/LVW10801_Xvg4R0u57n/playlist.m3u8

#EXTINF:-1,SBT Guajará
#EXTIMG:https://i.imgur.com/oOhk9Gg.png
https://video05.logicahost.com.br/tvguajara/tvguajara/playlist.m3u8

#EXTINF:-1,TV ARATU HD
#EXTIMG:https://imgur.com/tyFtNYn.png
https://cdn.jmvstream.com/w/LVW-8379/LVW8379_rIq6ZYiIiA/chunklist.m3u8

#EXTINF:-1,SBT CIDADE VERDE FHD
#EXTIMG:https://imgur.com/KO1v3pS.png
https://stmv1.transmissaodigital.com/cidadeverdenovo/cidadeverdenovo/playlist.m3u8

#EXTINF:-1,RedeTV!
#EXTIMG:https://imgur.com/EgKx2J1.png
https://cdn.jmvstream.com/w/AVJ-15235/playlist/chunklist.m3u8

#EXTINF:-1,RedeTV! 
#EXTIMG:https://imgur.com/2vYqKX5.png
https://cdn2.easy.tv.br/redetv/index.m3u8
#EXTINF:-1,RedeTV! PR HD
#EXTIMG:https://imgur.com/2vYqKX5.png
https://tv02.zas.media:1936/redetvparana/redetvparana/playlist.m3u8

#EXTINF:-1,RedeTV! PI SD
#EXTIMG:https://imgur.com/2vYqKX5.png
https://59e4b6c1beddc.streamlock.net/tvodia/tvodia/chunklist_w157393531.m3u8

#EXTINF:-1,TV Gazeta HD
#EXTIMG:https://i.imgur.com/Ak037l4.png
https://stream1.freetv.fun/tv-gazeta-1.m3u8

#EXTINF:-1,TV Gazeta MA SD
#EXTIMG:https://i.imgur.com/Ak037l4.png
https://stmv5.samcast.com.br/wagner7919/wagner7919/chunklist_w1606860923.m3u8

#EXTINF:-1,TV Gazeta PA
#EXTIMG:https://i.imgur.com/Ak037l4.png
https://video01.kshost.com.br:4443/moises3834/moises3834/chunklist_w1625878121.m3u8

#EXTINF:-1,TV Cultura Brasil 
#EXTIMG:https://i.imgur.com/xL9QvHp.png
https://player-tvcultura.stream.uol.com.br/live/tvcultura.m3u8

#EXTINF:-1,TV Cultura RN FHD
#EXTIMG:https://i.imgur.com/xL9QvHp.png
https://tv02.zas.media:1936/futurotv21/futurotv21/chunklist_w309642670.m3u8

#EXTINF:-1,SporTV UHD
#EXTIMG:https://imgur.com/bwqLqyg.png
https://anonmedia.foo/sportv/tracks-v1a1/mono.m3u8

#EXTINF:-1,ESPN SD 
#EXTIMG:https://i.imgur.com/CkoAvYH.png
https://cdn-2.nxplay.com.br/ESPN/tracks-v1a1/mono.m3u8

#EXTINF:-1,ESPN UHD
#EXTIMG:https://i.imgur.com/CkoAvYH.png
https://anonmedia.foo/espn/tracks-v1a1/mono.m3u8

#EXTINF:-1,ESPN 2 SD 
#EXTIMG:https://i.imgur.com/CkoAvYH.png
https://cdn-2.nxplay.com.br/ESPN_2/tracks-v1a1/mono.m3u8

#EXTINF:-1,ESPN 2 HD 
#EXTIMG:https://i.imgur.com/ZAHnoPh.png
https://cdn-2.nxplay.com.br/ESPN_2/index.m3u8

#EXTINF:-1,ESPN 2 HD
#EXTIMG:https://i.imgur.com/ZAHnoPh.png
https://anonmedia.foo/espn2/tracks-v1a1/mono.m3u8

#EXTINF:-1,ESPN 3 SD 
#EXTIMG:https://i.imgur.com/CkoAvYH.png
https://cdn-2.nxplay.com.br/ESPN_3/tracks-v1a1/mono.m3u8

#EXTINF:-1,ESPN 3 HD 
#EXTIMG:https://imgur.com/VCPTlBD.png
https://cdn-2.nxplay.com.br/ESPN_3/index.m3u8

#EXTINF:-1,ESPN 3 UHD
#EXTIMG:https://imgur.com/VCPTlBD.png
https://anonmedia.foo/espn3/tracks-v1a1/mono.m3u8

#EXTINF:-1,ESPN 4 SD 
#EXTIMG:https://imgur.com/ErWFVO3.png
https://cdn-2.nxplay.com.br/ESPN_4/tracks-v1a1/mono.m3u8

#EXTINF:-1,ESPN 4 HD 
#EXTIMG:https://imgur.com/ErWFVO3.png
https://cdn-2.nxplay.com.br/ESPN_4/index.m3u8

#EXTINF:-1,ESPN 4 UHD
#EXTIMG:https://imgur.com/ErWFVO3.png
https://anonmedia.foo/espn4/tracks-v1a1/mono.m3u8

#EXTINF:-1,Band Sports SD
#EXTIMG:https://i.imgur.com/LSZ5VKi.png
https://cdn-1.nxplay.com.br/BAND_SPORTS/tracks-v1a1/mono.m3u8

#EXTINF:-1,Band Sports HD
#EXTIMG:https://i.imgur.com/LSZ5VKi.png
https://cdn-1.nxplay.com.br/BAND_SPORTS/tracks-v2a1/mono.m3u8

#EXTINF:-1,Band Sports FHD
#EXTIMG:https://i.imgur.com/LSZ5VKi.png
https://stream1.freetv.fun/band-sports-3.m3u8

#EXTINF:-1,Premiere Clubes HD2
#EXTIMG:https://imgur.com/XxJNMns.png
https://anonmedia.foo/premiereclubes/tracks-v1a1/mono.m3u8

#EXTINF:-1,Premiere 2 HD
#EXTIMG:https://imgur.com/oTkPiQA.png
https://anonmedia.foo/premiere2/tracks-v1a1/mono.m3u8

#EXTINF:-1,Premiere 3 UHD
#EXTIMG:https://imgur.com/s81XtWC.png
https://anonmedia.foo/premiere3/tracks-v1a1/mono.m3u8

#EXTINF:-1,Premiere 4 UHD
#EXTIMG:https://imgur.com/BT5vktj.png
https://anonmedia.foo/premiere4/tracks-v1a1/mono.m3u8

#EXTINF:-1,Premiere 5 HD
#EXTIMG:https://imgur.com/eLomVAg.png
https://anonmedia.foo/premiere5/tracks-v1a1/mono.m3u8

#EXTINF:-1,Premiere 6 HD
#EXTIMG:https://imgur.com/DrogUkK.png
https://anonmedia.foo/premiere6/tracks-v1a1/mono.m3u8

#EXTINF:-1,Premiere 7 HD
#EXTIMG:https://imgur.com/doQNvx2.png
https://anonmedia.foo/premiere7/tracks-v1a1/mono.m3u8

#EXTINF:-1,CazéTV HD
#EXTIMG:https://i.imgur.com/oJJ8AAI.png
https://cc-panvcqnzkgrdl.akamaized.net/Caze/Caze_TV_BR/Caze_TV.m3u8

#EXTINF:-1,Esportes Brasília 
#EXTIMG:https://imgur.com/6fU9ulW.png
https://a.cdni.live/radioesporte/radioesporte/chunklist_w1002148111.m3u8

#EXTINF:-1,JP NEWS 576p
#EXTIMG:https://i.imgur.com/MWGAfvV.png
https://d9tard1jbwri9.cloudfront.net/playlist576p.m3u8

#EXTINF:-1,CNN BRASIL
#EXTIMG:https://imgur.com/4dfmnBs.png
https://d25usgadhphvwi.cloudfront.net/hls/main.m3u8

#EXTINF:-1,CNN BRASIL SD
#EXTIMG:https://imgur.com/4dfmnBs.png
https://cdn-2.nxplay.com.br/CNN_FAST/tracks-v2a1/mono.m3u8

#EXTINF:-1,CNN BRASIL HD
#EXTIMG:https://imgur.com/4dfmnBs.png
https://cdn-1.nxplay.com.br/CNN_FAST/index.m3u8

#EXTINF:-1,Globo News HD [Alter]
#EXTIMG:https://imgur.com/Wu4ykxo.png
https://stream1.freetv.fun/globo-news-2.m3u8

#EXTINF:-1,Band News SD
#EXTIMG:https://imgur.com/jCZzNjF.png
https://cdn-2.nxplay.com.br/BAND_NEWS_TK/tracks-v1a1/mono.m3u8

#EXTINF:-1,AVANÇA BRASIL
#EXTIMG:https://live.staticflickr.com/2053/2308291877_4e9d0bd251_c.jpg
https://video01.soultv.com.br/avancabrasil/avancabrasil/playlist.m3u8

#EXTINF:-1,4 POR 4 
#EXTIMG:https://i.imgur.com/B1KhZs2.png
https://video01.soultv.com.br/programa4por4/programa4por4/playlist.m3u8

#EXTINF:-1,Resumo da Ópera
#EXTIMG:https://i.imgur.com/yVux2yk.png
https://011news.akamaized.net/011news/011news/chunklist_480p.m3u8

#EXTINF:-1, 011 News HD
#EXTIMG:https://i.imgur.com/MGNoiZW.png
https://011news.akamaized.net/011news/011news/playlist.m3u8

#EXTINF:-1,Record News HD
#EXTIMG:https://images.pluto.tv/channels/6102e04e9ab1db0007a980a1/colorLogoPNG.png
https://stream.ads.ottera.tv/playlist.m3u8?network_id=5431&avod=1&coppa=0&is_lat=0&dnt=0&us_privacy=1YN-&did=9794a1b041ad875093e398bc1632460a&app_bundle=com.ammo.runtime&app_store_url=https%3A%2F%2Fwww.runtime.tv%2Fdevices&app_domain=runtime.tv&app_name=runtime&custom_targeting=web&custom_4=internal&h=720&w=1280&content_channel=runtime&content_dist_name=internal&device_make=&device_model=&preferred_language=EN&consent=1&gdpr=0&custom_12=0&custom_15=pt-br&custom_16=EN&custom_17=en&site_page=https%253A%252F%252Fwww.runtime.tv%252F&gender=not_specified&yob=0&livestream=1&custom_param_0=&custom_param_1=handset&custom_param_2=&custom_param_3=&custom_param_4=internal&custom_param_5=web&custom_param_6=South%2520America&timestamp=1688604990&id=11709&ip=138.185.238.172&override_expiration=1500&sign=z%2BA66gwNz60ZptKvp8RUzKwjztJdlXb4BFuJDdDAARg%3D

#EXTINF:-1,TV Camara De Deputados FHD
#EXTIMG:https://imgur.com/TlqB0Uo.png
https://stream3.camara.gov.br/tv1/manifest.m3u8

#EXTINF:-1,TV Senado 
#EXTIMG:https://i.imgur.com/duy6waL.png
https://cdn-1.nxplay.com.br/TV_SENADO/index.m3u8

#EXTINF:-1,TV VIDEONEWS
#EXTIMG:https://imgur.com/4m1j3CL.png
https://video01.logicahost.com.br/tvideonews/tvideonews/chunklist.m3u8

#EXTINF:-1,Canal UOL
#EXTIMG:https://imgur.com/dC2p8J1.png
https://d19fe0yjxkxylf.cloudfront.net/index.m3u8

#EXTINF:-1,ARTE 1
#EXTIMG:https://imgur.com/4QWoV1Z.png
https://cdn-2.nxplay.com.br/ARTE1_TK/index.m3u8

#EXTINF:-1,TLC HD
#EXTIMG:https://imgur.com/2F9asSD.png
https://cdn-2.nxplay.com.br/TLC_BR_NX/index.m3u8

#EXTINF:-1,Receita Fast HD
#EXTIMG:https://imgur.com/X8bDYyO.png
https://cc-panvcqnzkgrdl.akamaized.net/Globo/Receitas_Fast_BR/Receitas_Fast.m3u8

#EXTINF:-1,Food Network HD
#EXTIMG:https://imgur.com/AH3uBDj.png
https://cdn-2.nxplay.com.br/FOOD_NETWORK_NX/index.m3u8

#EXTINF:-1,ID HD
#EXTIMG:https://imgur.com/OJWv4Ij.png
https://cdn-2.nxplay.com.br/DISCOVERY_ID_NX/index.m3u8

#EXTINF:-1,Trace Brasil
#EXTIMG:https://i.imgur.com/IE8xwt4.png
https://cdn-2.nxplay.com.br/TRACE_BRAZUCA/index.m3u8

#EXTINF:-1,People Are Awesome
#EXTIMG:https://i.imgur.com/BWfmUwV.png
https://jukin-peopleareawesome-2-br.samsung.wurl.tv/playlist.m3u8

#EXTINF:-1,Motorvision FHD
#EXTIMG:https://imgur.com/jlhvLJb.png
https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01329-ottera-motorvision-samsungbr/playlist.m3u8

#EXTINF:-1,Motorvision |PT HD
#EXTIMG:https://imgur.com/jlhvLJb.png
https://stream.ads.ottera.tv/playlist.m3u8?network_id=2182

#EXTINF:-1,Cultne TV
#EXTIMG:https://images.pluto.tv/channels/66296e755a402e00086a2c47/colorLogoPNG.png
https://cc-wn1j3f2wnu5lr.akamaized.net/manifest.m3u8

#EXTINF:-1,Discovery World HD
#EXTIMG:https://imgur.com/6sTkahx.png
https://cdn-2.nxplay.com.br/DISCOVERY_WORLD_NX/index.m3u8

#EXTINF:-1,Disc. Home & Health  HD
#EXTIMG:https://imgur.com/VSezlWv.png
https://cdn-2.nxplay.com.br/DISCOVERY_HH_NX/index.m3u8

#EXTINF:-1,Discovery Channel SD
#EXTIMG:https://imgur.com/dgGgYjc.png
https://cdn-2.nxplay.com.br/DISCOVERY_CHANNEL_NX/tracks-v1a1/mono.m3u8

#EXTINF:-1,Discovery Science HD 
#EXTIMG:https://imgur.com/1Hm6dQU.png
https://cdn-2.nxplay.com.br/DISCOVERY_SCIENCE_NX/index.m3u8

#EXTINF:-1,HGTV SD
#EXTIMG:https://i.imgur.com/dT19vNc.png
https://cdn-2.nxplay.com.br/HGTV_BR_NX/tracks-v1a1/mono.m3u8

#EXTINF:-1,HGTV HD
#EXTIMG:https://i.imgur.com/dT19vNc.png
https://cdn-2.nxplay.com.br/HGTV_BR_NX/index.m3u8

#EXTINF:-1,History HD
#EXTIMG:https://imgur.com/0rNNqVy.png
https://cdn-2.nxplay.com.br/HISTORY_TK/index.m3u8

#EXTINF:-1,Animal Planet HD
#EXTIMG:https://imgur.com/t97qwNh.png
https://cdn-2.nxplay.com.br/ANIMAL_PLANET_NX/index.m3u8

#EXTINF:-1,Rakuten Documentários | português e inglês
#EXTIMG:https://i.imgur.com/QwPiPlI.png
https://rakuten-documentaries-14-pt.samsung.wurl.tv/playlist.m3u8

#EXTINF:-1,Curta!
#EXTIMG:https://i.imgur.com/g9AtH3s.png
https://video01.logicahost.com.br/canalcurta/canalcurta/playlist.m3u8

#EXTINF:-1,TNT Novelas SD
#EXTIMG:https://imgur.com/x9XvCqL.png
https://cdn-2.nxplay.com.br/TNT_NOVELAS_TK/tracks-v1a1/mono.m3u8

#EXTINF:-1,TNT Novelas HD
#EXTIMG:https://imgur.com/x9XvCqL.png
https://cdn-2.nxplay.com.br/TNT_NOVELAS_TK/tracks-v2a1/mono.m3u8

#EXTINF:-1,Os Dez Mandamentos 
#EXTIMG:https://imgur.com/tzYimlq.png
https://cc-97z35d907q26w.akamaized.net/Samsung/Os_Dez_Mandamentos_BR/Os_Dez_Mandamentos.m3u8

#EXTINF:-1, Malhação Fast
#EXTIMG:https://imgur.com/0gDjNFs.png
https://cc-b6t4lda8x3u3t.akamaized.net/Globo/Malhacao_Fast_BR/Malhacao_Fast.m3u8

#EXTINF:-1,A Escrava_Isaura
#EXTIMG:https://imgur.com/851wj7w.png
https://cc-slllnk8iujdo8.akamaized.net/Samsung/A_Escrava_Isaura_BR/A_Escrava_Isaura.m3u8

#EXTINF:-1,TVi Ficção
#EXTIMG:https://i.imgur.com/crseFhh.png
https://video-auth2.iol.pt/live_tvi_ficcao/live_tvi_ficcao/edge_servers/tvificcao-720p/playlist.m3u8

#EXTINF:-1,TELEVISA
#EXTIMG:https://i.imgur.com/EBkFVPb.png
https://televisa-televisa-1-it.samsung.wurl.tv/playlist.m3u8

#EXTINF:-1,Novelas Turcas
#EXTIMG:https://images.pluto.tv/channels/5dcde0cc2efd2700090b7ff4/colorLogoPNG.png
https://stream.ads.ottera.tv/playlist.m3u8?network_id=5088

#EXTINF:-1,Canela Telenovelas
#EXTIMG:https://i.imgur.com/GrtNJki.png
https://stream.ads.ottera.tv/playlist.m3u8?network_id=1152

#EXTINF:-1,Novelissima
#EXTIMG:https://imgur.com/7MCMU3j.png
https://stream.ads.ottera.tv/playlist.m3u8?network_id=2380

#EXTINF:-1,Novelissima BR
#EXTIMG:https://imgur.com/7MCMU3j.png
https://cis-no-samsung.otteravision.com/cis/no/no_h265.m3u8

#EXTINF:-1,Sony Novelas | LG
#EXTIMG:https://i.imgur.com/mqEHDE1.png
https://spt-novelas-1-us.lg.wurl.tv/playlist.m3u8

#EXTINF:-1,SPACE SD
#EXTIMG:https://imgur.com/RxETCgZ.png
https://cdn-1.nxplay.com.br/SPACE_TK/tracks-v1a1/mono.m3u8

#EXTINF:-1,SPACE HD
#EXTIMG:https://imgur.com/RxETCgZ.png
https://cdn-1.nxplay.com.br/SPACE_TK/index.m3u8

#EXTINF:-1,TNT HD
#EXTIMG:https://imgur.com/kA3ov0x.png
https://cdn-2.nxplay.com.br/TNT_TK/index.m3u8

#EXTINF:-1,TNT FHD
#EXTIMG:https://imgur.com/kA3ov0x.png
https://stream1.freetv.fun/tnt-2.m3u8

#EXTINF:-1,TNT Séries SD
#EXTIMG:https://imgur.com/vH2tkQt.png
https://cdn-1.nxplay.com.br/TNT_SERIES_TK/tracks-v1a1/mono.m3u8

#EXTINF:-1,TNT Séries HD
#EXTIMG:https://imgur.com/vH2tkQt.png
https://cdn-1.nxplay.com.br/TNT_SERIES_TK/tracks-v2a1/mono.m3u8

#EXTINF:-1,Warner Channel HD
#EXTIMG:https://imgur.com/zR0XZG7.png
https://stream1.freetv.fun/warner-channel-3.ctv

#EXTINF:-1,A&E SD
#EXTIMG:https://imgur.com/EYAmbe4.png
https://cdn-1.nxplay.com.br/AeE_BRASIL_TK/tracks-v1a1/mono.m3u8

#EXTINF:-1,A&E HD
#EXTIMG:https://imgur.com/EYAmbe4.png
https://cdn-1.nxplay.com.br/AeE_BRASIL_TK/index.m3u8

#EXTINF:-1,AXN SD
#EXTIMG:https://imgur.com/IaxysZJ.png
https://cdn-1.nxplay.com.br/AXN_TK/tracks-v1a1/mono.m3u8

#EXTINF:-1,AXN HD 
#EXTIMG:https://imgur.com/IaxysZJ.png
https://cdn-1.nxplay.com.br/AXN_TK/tracks-v2a1/mono.m3u8

#EXTINF:-1,Lifetime SD
#EXTIMG:https://i.imgur.com/lAPINbh.png
https://cdn-1.nxplay.com.br/LIFE_TIME_TK/index.m3u8

#EXTINF:-1,AMC HD
#EXTIMG:https://imgur.com/2lr4rvX.png
https://cdn-1.nxplay.com.br/AMC_BRASIL_TK/index.m3u8

#EXTINF:-1,Sony Channel HD
#EXTIMG:https://i.imgur.com/18X62CK.png
https://cdn-1.nxplay.com.br/SONY_CHANNEL/index.m3u8

#EXTINF:-1,HBO HD
#EXTIMG:https://imgur.com/IKjcTJH.png
https://stream1.freetv.fun/hbo-1-4.ctv

#EXTINF:-1,Studio Universal FHD
#EXTIMG:https://imgur.com/mMLZhgP.png
https://stream1.freetv.fun/studio-universal-4.m3u8

#EXTINF:-1,Cine Brasil HD
#EXTIMG:https://i.imgur.com/yrzQyEu.png
https://cdn-2.nxplay.com.br/Cinebrasil/index.m3u8

#EXTINF:-1,MyTime Movies
#EXTIMG:https://imgur.com/f35UF5q.png
https://appletree-mytime-samsungbrazil.amagi.tv/playlist720p.m3u8

#EXTINF:-1,MOVIE SPHERE
#EXTIMG:https://imgur.com/92rUCKL.png
https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg00353-lionsgatestudio-moviespherebrazil-samsungbr/playlist.m3u8

#EXTINF:-1,Sony One Classics
#EXTIMG:https://imgur.com/9xo2bJt.png
https://spt-sonyoneclassicas-1-br.samsung.wurl.tv/playlist.m3u8

#EXTINF:-1,Cine Monde
#EXTIMG:https://i.imgur.com/dpat1CH.png
https://video01.soultv.com.br/cinemonde/cinemonde/playlist.m3u8


#EXTINF:-1,Dark Flix
#EXTIMG:https://imgur.com/x13Zoz1.png
https://video01.soultv.com.br/darkflix/darkflix/playlist.m3u8

#EXTINF:-1,CHANNEL ONE 
#EXTIMG:https://imgur.com/u8XN65I.png
https://video02.logicahost.com.br/tvone/tvone/playlist.m3u8

#EXTINF:-1,HTO FILMES
#EXTIMG:https://hdtvone.tv/wp-content/uploads/2018/09/cropped-HTO.tv-LOGO-HEADER-e1535917877621-1.png
https://cdn-1.nxplay.com.br/HTO_Filmes/tracks-v1a1/mono.m3u8

#EXTINF:-1,Runtime Ação HD
#EXTIMG:https://imgur.com/3Wpaz9E.png
https://stream.ads.ottera.tv/playlist.m3u8?network_id=2552

#EXTINF:-1,Runtime TV e Filmes HD
#EXTIMG:https://imgur.com/5aavtj1.png
https://stream.ads.ottera.tv/playlist.m3u8?network_id=2153

#EXTINF:-1,Runtime Comédia HD 
#EXTIMG:https://imgur.com/TZ7LfjB.png
https://stream.ads.ottera.tv/playlist.m3u8?network_id=2553

#EXTINF:-1,Runtime Família 
#EXTIMG:https://imgur.com/pFtnILf.png
https://stream.ads.ottera.tv/playlist.m3u8?network_id=5589

#EXTINF:-1,Runtime Romance
#EXTIMG:https://imgur.com/U6ElKK3.png
https://stream.ads.ottera.tv/playlist.m3u8?network_id=4866

#EXTINF:-1,Runtime Cine Espanto
#EXTIMG:https://imgur.com/bzX7MO8.png
https://stream.ads.ottera.tv/playlist.m3u8?network_id=4865

#EXTINF:-1,Runtime Crime
#EXTIMG:https://imgur.com/KQt9WGA.png
https://stream.ads.ottera.tv/playlist.m3u8?network_id=4864

#EXTINF:-1,Hallo Classic
#EXTIMG:https://i.imgur.com/Z8BnjPs.png
https://cdn-2.nxplay.com.br/HALLOCLASSIC/index.m3u8?token=cdntv_62qwd7eSv1Ihnlni

#EXTINF:-1,Hallo Movies
#EXTIMG:https://i.imgur.com/Q16ZNjl.png
https://cdn-2.nxplay.com.br/HALLOMOVIES/index.m3u8?token=cdntv_62qwd7eSv1Ihnlni

#EXTINF:-1,Hallo Series
#EXTIMG:https://i.imgur.com/BMV8Nbn.png
https://cdn-1.nxplay.com.br/HALLOSERIES/tracks-v1a1/index.m3u8?token=cdntv_62qwd7eSv1Ihnlni

#EXTINF:-1,Otaku Sign TV
#EXTIMG:https://i0.wp.com/otakudvd.com/wp-content/uploads/2021/02/otakulogo-e1625667755127.png
https://stmv1.srvif.com/otaku/otaku/playlist.m3u8

#EXTINF:-1,Loading...TV HD
#EXTIMG:https://listaiptv.gratis/logos/imagens/loadingamarelo.png
https://stmv1.srvif.com/loadingtv/loadingtv/playlist.m3u8

#EXTINF:-1,WORDING TV
#EXTIMG:https://i.imgur.com/C5nMqAf.png
https://tv02.zas.media:1936/wordingtv/wordingtv/chunklist_w1264551258.m3u8

#EXTINF:-1,Geekdot​
#EXTIMG:https://i.imgur.com/NMMtJ8F.png
https://stream.ichibantv.com:3764/hybrid/play.m3u8

#EXTINF:-1,Animes TV
#EXTIMG:https://imgur.com/K4IrU99.png
https://stmv1.srvif.com/animetv/animetv/playlist.m3u8

#EXTINF:-1,AniTV
#EXTIMG:https://i.imgur.com/3pOHk57.png
https://stream.ichibantv.com:3764/hybrid/play.m3u8

#EXTINF:-1,Hallo Anime HD
#EXTIMG:https://i.imgur.com/2HaiovZ.png
https://cdn-2.nxplay.com.br/HALLOANIME/index.m3u8

#EXTINF:-1,Animax
#EXTIMG:https://imgur.com/BatygW5.png 
https://stream.ichibantv.com:3547/hybrid/play.m3u8

#EXTINF:-1,Clouding
#EXTIMG:https://raw.githubusercontent.com/mariosanthos/arquivos/main/clouding.png
https://stmv1.paineltv.net/redeclonetv/redeclonetv/chunklist_w739638910.m3u8

#EXTINF:-1,Kid Mais
#EXTIMG:https://i.imgur.com/IbCiig8.png
https://video03.logicahost.com.br/novafamilia01/novafamilia01/playlist.m3u8

#EXTINF:-1, Kuriakos Kids
#EXTIMG:https://i.imgur.com/qSC5fSZ.png
https://w2.manasat.com/kkids/smil:kkids.smil/playlist.m3u8

#EXTINF:-1,Toon Googles HD
#EXTIMG:https://i.imgur.com/QyAPwBx.png
https://stream.ads.ottera.tv/playlist.m3u8?network_id=5442

#EXTINF:-1,Os Jetsons | Brasil
#EXTIMG:https://i.imgur.com/sqUlcaY.png
https://stmv1.srvif.com/jetsontv/jetsontv/chunklist.m3u8

#EXTINF:-1,Rakuten Família
#EXTIMG:https://i.imgur.com/uBjpsWE.png
https://rakuten-family-14-pt.samsung.wurl.tv/playlist.m3u8

#EXTINF:-1,GLOOB FHD
#EXTIMG:https://imgur.com/qgyrEps.png
https://stream1.freetv.fun/gloob-1.ctv

#EXTINF:-1,Nick jr. HD
#EXTIMG:http://app.tvdigital.link:2095/logoscanais/NICKJR.png
https://stream1.freetv.fun/nick-jr-19.ctv

#EXTINF:-1,Fox Kids
#EXTIMG:https://imgur.com/9X7XBlD.png
https://stmv1.srvif.com/emlsilva/emlsilva/playlist.m3u8

#EXTINF:-1,Tooncast HD
#EXTIMG:https://i.imgur.com/TRu90uI.png
https://cdn-1.nxplay.com.br/TOONCAST_TK/index.m3u8

#EXTINF:-1,DISCOVERY KIDS HD
#EXTIMG:https://imgur.com/WxKCkhL.png
https://cdn-1.nxplay.com.br/DISCOVERY_KIDS_NX/index.m3u8

#EXTINF:-1,Zoomoo HD
#EXTIMG:https://imgur.com/WHmHmUH.png
https://cdn-1.nxplay.com.br/ZOOMOO_HD_NX_TK/index.m3u8

#EXTINF:-1,RETRO CARTOON
#EXTIMG:https://i.imgur.com/x33MwPN.png
https://stmv1.srvif.com/retrotv/retrotv/playlist-480p.m3u8

#EXTINF:-1, DREAM WORKS
#EXTIMG:https://i.imgur.com/zDbdnwu.png
https://cdn-1.nxplay.com.br/DREAMWORKS/index.m3u8

#EXTINF:-1,DCPC Infantil 
#EXTIMG:https://i.imgur.com/NQG19uf.png
https://cdn-1.nxplay.com.br/dcpc/index.m3u8

#EXTINF:-1,Ministério Infantil TV
#EXTIMG:https://i.imgur.com/1JVrZFk.png
https://stmv4.voxtvhd.com.br/1990/1990/playlist.m3u8

#EXTINF:-1,TOP TV FHD
#EXTIMG:https://i.imgur.com/G5SWqHS.png
https://isaocorp.cloudecast.com/toptv/index.m3u8

#EXTINF:-1,MaisUm
#EXTIMG:https://imgur.com/wE5uBK7.png
https://stream.ichibantv.com:3230/hybrid/play.m3u8

#EXTINF:-1,POP PEGAJOSO
#EXTIMG:https://imgur.com/yF42kfj.png
https://stream.ads.ottera.tv/playlist.m3u8?network_id=1086

#EXTINF:-1,Kiss TV
#EXTIMG:https://i.imgur.com/8uXwaqs.png
https://isaocorp.cloudecast.com/kisstv/index.m3u8

#EXTINF:-1,Hallo Music
#EXTIMG:https://i.imgur.com/6hDnWxA.png
https://cdn-1.nxplay.com.br/HALLOMUSIC/index.m3u8?token=cdntv_62qwd7eSv1Ihnlni

#EXTINF:-1,Gospel Music TV
#EXTIMG:https://i.imgur.com/47oBUBM.png
https://stmv1.srvif.com/gmusic/gmusic/playlist.m3u8

#EXTINF:-1,ATIVIDADE FM 87.9 Canudos BA
#EXTIMG:https://imgur.com/11DH4AQ.png
https://1.stmip.net:8070/stream

#EXTINF:-1,Gospel Internacional
#EXTIMG:https://i.imgur.com/UiNMxT2.png
https://stream.vagalume.fm/hls/1470245767122628/aac.m3u8

#EXTINF:-1,Brado Rádio 
#EXTIMG:https://i.imgur.com/d2qdM76.png
https://servidor17-5.brlogic.com:8300/live?source=links_page

#EXTINF:-1,Shockwave
#EXTIMG:https://i.imgur.com/atmex20.png
https://stm8.painelcast.com:6982/stream

#EXTINF:-1,Tratamento de Choque
#EXTIMG:https://i.imgur.com/4c7bwSN.png
https://amg00353-lionsgatestudio-tratamentodechoque-runtimelatam-rmwee.amagi.tv/playlist/amg00353-lionsgatestudio-tratamentodechoque-runtimelatam/playlist.m3u8

#EXTINF:-1,RTN TV SP HD
#EXTIMG:https://imgur.com/oiyGlGY.png
https://tv01.zas.media:1936/rtntv/rtntv/playlist.m3u8

#EXTINF:-1,TV Evangelizar 
#EXTIMG:http://i.imgur.com/FoPnWx0.png
https://tvevangelizar.brasilstream.com.br/hls/tvevangelizar/index.m3u8

#EXTINF:-1,SANTA CRUZ WEB TV
#EXTIMG:https://imgur.com/JxyVX6Y.png
https://stmv1.srvstm.com/santacruztv9906/santacruztv9906/playlist.m3u8

#EXTINF:-1,TV Novo Tempo SD
#EXTIMG:https://i.imgur.com/wEOoyzq.png
https://stream.live.novotempo.com/tv/smil:tvnovotempo.smil/chunklist_b1628000_slpor.m3u8

#EXTINF:-1,TV Novo Tempo HD
#EXTIMG:https://i.imgur.com/wEOoyzq.png
https://stream.live.novotempo.com/tv/smil:tvnovotempo.smil/chunklist_b3628000_slpor.m3u8

#EXTINF:-1,TV Paraná Turismo 
#EXTIMG:https://i.imgur.com/OP1rFwr.png
https://aovivo.paranaeducativa.pr.gov.br/hls/tve.m3u8

#EXTINF:-1,TV Candidés
#EXTIMG:https://i.imgur.com/0Hbt4qg.png
https://cdn.live.br1.jmvstream.com/w/LVW-8067/ngrp:LVW8067_ZffQjxn7UC_all/playlist.m3u8

#EXTINF:-1,BS TV
#EXTIMG:https://imgur.com/IAQIkuQ.png
https://br5093.streamingdevideo.com.br/bstv/bstv/chunklist_w1014792137.m3u8

#EXTINF:-1,TV CLASSICOS
#EXTIMG:https://imgur.com/LrTGoQn.png
https://stmv1.srvif.com/canal29/canal29/playlist.m3u8

#EXTINF:-1,OTAKU SIGN TV
#EXTIMG:https://imgur.com/gD0hmt2.png
https://stmv1.srvif.com/otaku/otaku/chunklist_w776677652.m3u8

#EXTINF:-1,AmazonSat
#EXTIMG:https://i.imgur.com/ev3SsBX.png
https://amazonsat.brasilstream.com.br/hls/amazonsat/index.m3u8

#EXTINF:-1,TV Aparecida HD
#EXTIMG:https://i.imgur.com/egU0jsZ.png
https://cdn.jmvstream.com/w/LVW-9716/LVW9716_HbtQtezcaw/playlist.m3u8

#EXTINF:-1,PBC TV
#EXTIMG:https://imgur.com/sxB1tnb.png
https://stmv2.samcast.com.br/adao6116/adao6116/playlist.m3u8

#EXTINF:-1,TOP Mix TV
#EXTIMG:https://i.imgur.com/tnv08Si.png
https://59f1cbe63db89.streamlock.net:1443/topmixtv/_definst_/topmixtv/playlist.m3u8

#EXTINF:-1, Rede Vida
#EXTIMG:https://imgur.com/0uNleBN.png
https://cvd1.cds.ebtcvd.net/live-redevida/smil:redevida.smil/playlist.m3u8

#EXTINF:-1,GLN TV
#EXTIMG:https://imgur.com/uJfsfJV.png
https://stmv1.paineltv.net/glnfilmes/glnfilmes/playlist.m3u8
#EXTINF:-1,TV Grão Pará

#EXTIMG:https://i.imgur.com/CbmctRN.png
https://video01.kshost.com.br:4443/moises3834/moises3834/playlist.m3u8

#EXTINF:-1,Soul Cine Clube
#EXTIMG:https://imgur.com/52LSunV.png
https://video01.soultv.com.br/soulcine/soulcine/playlist.m3u8

#EXTINF:-1,Clube Web TV
#EXTIMG:https://imgur.com/3nNqJHr.png
https://5c483b9d1019c.streamlock.net/8186/8186/playlist.m3u8

#EXTINF:-1,Tela Viva TV 
#EXTIMG:https://i.imgur.com/n232OSq.png
https://srv4.zcast.com.br/telavivatv/telavivatv/playlist.m3u8

#EXTINF:-1,ISTV HD
#EXTIMG:https://i.imgur.com/YSIvnhC.png
https://cdn2.easy.tv.br/istv/index.m3u8

#EXTINF:-1,ISTV FHD
#EXTIMG:https://i.imgur.com/YSIvnhC.png
https://video08.logicahost.com.br/istvnacional/srt.stream/istvnacional.m3u8

#EXTINF:-1,NBT
#EXTIMG:https://i.imgur.com/0QYXJwv.png
https://isaocorp.cloudecast.com/nbt/index.m3u8

#EXTINF:-1,NGT
#EXTIMG:https://i.imgur.com/yGBFPRH.png
https://isaocorp.cloudecast.com/ngt/index.m3u8

#EXTINF:-1,Canal 29
#EXTIMG:https://imgur.com/WwEyKVj.png
https://stmv1.srvif.com/canal29/canal29/playlist.m3u8

#EXTINF:-1,TV Aracati
#EXTIMG:https://i.imgur.com/xrbBNPa.png
https://video04.logicahost.com.br/tvaracati/tvaracati/playlist.m3u8

#EXTINF:-1,Sou TV.
#EXTIMG:https://imgur.com/V3haAYn.png
https://vdo1.audiostream.com.br:3010/live/soutvlive.m3u8

#EXTINF:-1,TV BRASIL
#EXTIMG:https://i.imgur.com/9dGaIdY.png
https://tvbrasil-stream.ebc.com.br/index.m3u8

#EXTINF:-1,Rede Brasil HD
#EXTIMG:https://i.imgur.com/XqAcHMg.png
https://cdn2.easy.tv.br/redebrasil/index.m3u8

#EXTINF:-1,TBO HD (Rede Brasil)
#EXTIMG:https://imgur.com/Po8jJt4.png
https://5ad482a77183d.streamlock.net/operacaotbomt.com/operacaotbomt.com/playlist.m3u8

#EXTINF:-1,Vivax TV
#EXTIMG:https://i.imgur.com/rGJNeou.png
https://stmv2.samcast.com.br/marcus8647/marcus8647/playlist.m3u8

#EXTINF:-1,TV Brasil Hits
#EXTIMG:https://imgur.com/21W4K2J.png
https://video01.logicahost.com.br/brasilhits/brasilhits/chunklist_w1407789719.m3u8

#EXTINF:-1,Agro Brasil 
#EXTIMG:https://imgur.com/WjWjQ2A.png
https://server.flixtv.com.br/agrobrasiltv/agrobrasiltv/playlist.m3u8

#EXTINF:-1,AgroMais HD
#EXTIMG:https://i.imgur.com/NY4GvIC.png
https://cdn-2.nxplay.com.br/AGROMAIS_HD_TK/tracks-v1a1/mono.m3u8

#EXTINF:-1,TV Brasil Central
#EXTIMG:https://i.imgur.com/tbxAkds.png
https://tbc.zoeweb.tv:443/tbc/tbc/playlist.m3u8

#EXTINF:-1,REDE SECULO 21
#EXTIMG:https://imgur.com/faofls5.png
https://cdn.jmvstream.com/w/LVW-10024/ngrp:LVW10024_H3QLdAY6kx_all/playlist.m3u8

#EXTINF:-1,CONECTV
#EXTIMG:https://imgur.com/AUdVAuP.png
https://stream01.msolutionbrasil.com.br/hls/conectv/live.m3u8

#EXTINF:-1,TV A Folha
#EXTIMG:https://i.imgur.com/I7XGMhj.png
https://video01.logicahost.com.br/tvafolha/tvafolha/playlist.m3u8

#EXTINF:-1,Astral TV FHD
#EXTIMG:https://i.imgur.com/xnBg83J.png
https://isaocorp.cloudecast.com/astraltv/index.m3u8

#EXTINF:-1,Caravana Play
#EXTIMG:https://imgur.com/qUiPZiw.png
https://srv4.zcast.com.br/keynni2406/keynni2406/playlist.m3u8

#EXTINF:-1,TV Cidade Verde
#EXTIMG:https://imgur.com/QmhUB1N.png
https://televisaocidadeverde.brasilstream.com.br/hls/televisaocidadeverde/index.m3u8

#EXTINF:-1, Wtj TV Minas
#EXTIMG:https://imgur.com/oWwYGI1.png
https://video02.logicahost.com.br/wtjtvminas/wtjtvminas/playlist.m3u8

#EXTINF:-1,Play TV
#EXTIMG:https://i.imgur.com/mcEd9qv.png
https://isaocorp.cloudecast.com/playtv/index.m3u8

#EXTINF:-1, Ypê TV
#EXTIMG:https://nVFiftB.png
https://video01.logicahost.com.br/ypetv/ypetv/playlist.m3u8

#EXTINF:-1,Seven TV
#EXTIMG:https://imgur.com/kjL8Dvg.png
https://video01.kshost.com.br/aubrey3291/aubrey3291/playlist.m3u8?t=1698888926

#EXTINF:-1,SPTV
#EXTIMG:https://imgur.com/MByVw7Z.png
https://video01.logicahost.com.br/websptv/websptv/playlist.m3u8

#EXTINF:-1,Imperial TV
#EXTIMG:https://imgur.com/XFp4O1Q.png
https://acesso.ecast.site:3630/live/imperiallive.m3u8

#EXTINF:-1,TV Fala Litoral 
#EXTIMG:https://imgur.com/X3lIFxM.png
https://5c483b9d1019c.streamlock.net/falalitoraltv/falalitoraltv/chunklist_w1605044150.m3u8

#EXTINF:-1,TV Vianney
#EXTIMG:http://i.imgur.com/QqdFSOV.png
https://58c8a6b3c74e2.streamlock.net:1936/paroquiavianney/smil:paroquiavianney.smil/playlist.m3u8

#EXTINF:-1, TV Imaculada
#EXTIMG:http://i.imgur.com/5HoOtda.png
https://caikron.com.br:19360/tvmi/tvmi.m3u8

#EXTINF:-1,Canção Nova SD
#EXTIMG:https://i.imgur.com/Z49TV0y.png
https://cdn-2.nxplay.com.br/CANCAO_NOVA_TK/tracks-v1a1/mono.m3u8

#EXTINF:-1,Canção Nova HD
#EXTIMG:https://i.imgur.com/Z49TV0y.png
https://cdn2.easy.tv.br/cancaonova/index.m3u8


#EXTINF:-1,PIXTV HD
#EXTIMG:https://i.imgur.com/jdd5Jsa.png
https://cdn-2.nxplay.com.br/PIX_TV/index.m3u8

#EXTINF:-1,Canal Futura
#EXTIMG:https://raw.githubusercontent.com/LITUATUI/M3UPT/main/logos/Canal-Futura.png
https://tv.unisc.br/hls/test.m3u8

#EXTINF:-1,TV Mais
#EXTIMG:https://i.imgur.com/Y9N1RL3.png
https://video01.soultv.com.br/tvmaisabc/tvmaisabc/playlist.m3u8

#EXTINF:-1,RIT TV
#EXTIMG:https://imgur.com/psyk2C5.png
https://cdn-1.nxplay.com.br/RIT_TV/index.m3u8

#EXTINF:-1,TV Alternativa
#EXTIMG:https://i.imgur.com/BdTbhqX.gif
https://stmv1.samcast.com.br/wagner7919/wagner7919/playlist.m3u8

#EXTINF:-1,40 GRAUS TV
#EXTIMG:https://www.40graustv.com.br/wp-content/uploads/2017/02/logo-circular.png
https://acesso.ecast.site:3125/stream/play.m3u8

#EXTINF:-1,TV GAZETA NORTE MINEIRA
#EXTIMG:https://imgur.com/3YP7dFy.png
https://59e4b6c1beddc.streamlock.net:443/tvgazeta/tvgazeta/playlist.m3u8

#EXTINF:-1,CLASSIQUE TV WETERN
#EXTIMG:https://westerntvclassics.com/wp-content/uploads/2018/07/westernclassics-header-logo.png
https://stmv1.srvif.com/classiquew/classiquew/chunklist_w696892955.m3u8

#EXTINF:-1,CLASSIQUE TV SERIES
#EXTIMG:https://imgur.com/YvJ3OPd.png
https://stmv1.srvif.com/tvserie/tvserie/playlist.m3u8

#EXTINF:-1,CLASSIQUE TV
#EXTIMG:https://imgur.com/mvuZGvt.png
https://stmv1.srvif.com/classique/classique/playlist.m3u8

#EXTINF:-1,TV RIO MADEIRA
#EXTIMG:https://imgur.com/Klwjy9d.png
https://stmv1.srvif.com/tvriomadeira/tvriomadeira/playlist.m3u8

#EXTINF:-1,TV OURO NEGRO
#EXTIMG:https://imgur.com/mfdXYXs.png
https://StmV1.srvstm.com/diegodemenezes3156/diegodemenezes3156/playlist.m3u8

#EXTINF:-1,Igreja Universal
#EXTIMG:https://i.imgur.com/TIsk5zN.png 
https://644398c.ha.azioncdn.net/primary/tvuniversal_480p.sdp/playlist.m3u8

#EXTINF:-1,WEB TV PROGRESSO
#EXTIMG:https://imgur.com/qIzyAmA.png
https://5a0c3936c25c8.streamlock.net/oprogressotvstation/oprogressotvstation/chunklist_w73777379.m3u8

#EXTINF:-1,VRT Channel 
#EXTIMG:https://imgur.com/akpYIW2.png
https://sistemavrt2023.vrtchannel.tv.br:3626/hybrid/play.m3u8

#EXTINF:-1,Tenda TV
#EXTIMG:https://i.imgur.com/2Wl6vWI.png
https://tv02.zas.media:1936/tendatv/tendatv/playlist.m3u8

#EXTINF:-1,Gospel Internacional
#EXTIMG:https://i.imgur.com/UiNMxT2.png
https://stream.vagalume.fm/hls/1470245767122628/aac.m3u8

#EXTINF:-1,Gospel Music TV
#EXTIMG:https://i.imgur.com/47oBUBM.png
https://stmv1.srvif.com/gmusic/gmusic/playlist.m3u8

#EXTINF:-1,Gospel Cartoon
#EXTIMG:https://i.imgur.com/xf2VM5n.png
https://stmv1.srvif.com/gospelcartoon/gospelcartoon/playlist.m3u8

#EXTINF:-1,Gospel Movies TV
#EXTIMG:https://i.imgur.com/niOjbp5.png
https://stmv1.srvif.com/gospelf/gospelf/playlist.m3u8


#EXTINF:-1,Rede Gospel
#EXTIMG:https://i.imgur.com/ngbsXOB.png
https://cdn.jmvstream.com/w/LVW-8719/LVW8719_AcLVAxWy5J/playlist.m3u8

#EXTINF:-1,TV gospel 
#EXTIMG:https://imgur.com/lzBM8Gh.png
https://5cf4a2c2512a2.streamlock.net/8036/8036/playlist.m3u8

#EXTINF:-1,Rede QDM
#EXTIMG:https://imgur.com/c8J2flM.png
https://video03.logicahost.com.br/tvkidmais01/tvkidmais01/playlist.m3u8

#EXTINF:-1,TV Gramado
#EXTIMG:https://i.imgur.com/wdyq9R9.png
https://isaocorp.cloudecast.com/tvgramado/tracks-v1/index.fmp4.m3u8

#EXTINF:-1,TVC
#EXTIMG:https://i.imgur.com/bUVp1U1.png
https://video01.kshost.com.br:4443/inside2133/inside2133/chunklist_w384766910.m3u8

#EXTINF:-1,TV União Fortaleza 
#EXTIMG:https://i.imgur.com/pw0RLlI.png
https://live.uniaoplus.com/hls/0gmf9QNc7bQ6V0Lu.m3u8

#EXTINF:-1,TV União Brasília
#EXTIMG:https://i.imgur.com/pw0RLlI.png
https://live.uniaoplus.com/hls/sqYJRqIsBLTW36TC.m3u8

#EXTINF:-1,TV União Rio Branco
#EXTIMG:https://i.imgur.com/pw0RLlI.png
https://live.uniaoplus.com/hls/8b43MluBjzR7M1Uk.m3u8

#EXTINF:-1,TV Vitória PE
#EXTIMG:https://i.imgur.com/IfPT4sF.png
https://5a0c3936c25c8.streamlock.net/tvvitoriape/tvvitoriape/playlist.m3u8

#EXTINF:-1,TV SIM São Mateus
#EXTIMG:https://i.imgur.com/tLkF2BE.png
https://5cf4a2c2512a2.streamlock.net/8236/8236/playlist.m3u8

#EXTINF:-1,TV SIM Linhares
#EXTIMG:https://i.imgur.com/tLkF2BE.png
https://5cf4a2c2512a2.streamlock.net/8104/8104/playlist.m3u8

#EXTINF:-1,TV SIM Colatina
#EXTIMG:https://i.imgur.com/tLkF2BE.png
https://5cf4a2c2512a2.streamlock.net/8132/8132/playlist.m3u8

#EXTINF:-1,TV Recon
#EXTIMG:https://i.imgur.com/iBzrYCV.png
https://acesso.ecast.site:3862/hybrid/play.m3u8


#EXTINF:-1,TV Paraense
#EXTIMG:https://i.imgur.com/nh3yugR.png
https://cdn.jmvstream.com/w/AVJ-13102/playlist/playlist.m3u8


#EXTINF:-1,TV da Gente
#EXTIMG:https://i.imgur.com/jbCBogB.png
https://srv6.zcast.com.br/tvdagente/tvdagente/playlist.m3u8

#EXTINF:-1,O Dia TV
#EXTIMG:https://i.imgur.com/NMx2Cxc.png
https://59e4b6c1beddc.streamlock.net/tvodia/tvodia/playlist.m3u8

#EXTINF:-1,CATVE 2
#EXTIMG:https://i.imgur.com/BJVNmJv.png
https://5b33b873179a2.streamlock.net:1443/catve2/catve2/playlist.m3u8

#EXTINF:-1,RS News WebTV 1
#EXTIMG:https://i.imgur.com/nLBwn2Z.png
https://video01.logicahost.com.br/rsnewswebtv/rsnewswebtv/playlist.m3u8

#EXTINF:-1,RS News WebTV 2
#EXTIMG:https://i.imgur.com/nLBwn2Z.png
https://video01.logicahost.com.br/rsnewswebtv/rsnewswebtv/playlist.m3u8

#EXTINF:-1,Ministério Infantil TV
#EXTIMG:https://i.imgur.com/1JVrZFk.png
https://stmv4.voxtvhd.com.br/1990/1990/playlist.m3u8

#EXTINF:-1,REDE MINAS
#EXTIMG:https://imgur.com/lGGbSTG.png
https://8hzcavccys.zoeweb.tv/redeminas/ngrp:redeminas_all/playlist.m3u8

#EXTINF:-1,TV CNB ORLANDO
#EXTIMG:https://imgur.com/RpQKY4x.png
https://5cf4a2c2512a2.streamlock.net/tvcnb/tvcnb/chunklist_w130040152.m3u8

#EXTINF:-1,TV CNB AMERICAN
#EXTIMG:https://imgur.com/eCMeuc4.png
https://5cf4a2c2512a2.streamlock.net/tvcnbamerican/tvcnbamerican/chunklist_w144456680.m3u8

#EXTINF:-1,TV NBN
#EXTIMG:https://imgur.com/Pw2v6ne.png
https://cdn.jmvstream.com/w/LVW-8410/LVW8410_uiZOVm6vz1/playlist.m3u8

#EXTINF:-1,VClassic TV
#EXTIMG:https://i.imgur.com/vBlBL5U.png
https://5eaccbab48461.streamlock.net:1936/8112/8112/chunklist_w1549591707.m3u8

#EXTINF:-1,TV Sonata 
#EXTIMG:https://i.imgur.com/uMdQYEe.png
https://video01.kshost.com.br:4443/tiago2001/tiago2001/playlist.m3u8

#EXTINF:-1,TV Mais Brasil 
#EXTIMG:https://i.imgur.com/OaLL6zj.png
https://stmv1.paineltv.net/tvmaisbrasil/tvmaisbrasil/playlist.m3u8

#EXTINF:-1,Rede Clone TV
#EXTIMG:https://i.imgur.com/iBlmVp6.png
https://stmv1.paineltv.net/redeclonetv/redeclonetv/playlist.m3u8

#EXTINF:-1,TV Japi
#EXTIMG:https://i.imgur.com/t7tFDIb.png
https://stmv1.paineltv.net/tvjapi/tvjapi/playlist.m3u8


#EXTINF:-1,Rede TV Sul
#EXTIMG:https://i.imgur.com/baoWqMK.png
https://5a0c3936c25c8.streamlock.net/8032/8032/playlist.m3u8

#EXTINF:-1,Vila TV
#EXTIMG:https://i.imgur.com/f97c5Fk.png
https://streamserver.streamingdevideo.com.br/8072/8072/playlist.m3u8

#EXTINF:-1,TV Channel Network 
#EXTIMG:https://i.imgur.com/XJwljjR.png
https://stmv1.srvif.com/movies1/movies1/playlist.m3u8


#EXTINF:-1,TV Clube
#EXTIMG:https://i.imgur.com/3xAPAkE.png
https://5c483b9d1019c.streamlock.net/8186/8186/playlist.m3u8

#EXTINF:-1,TV Chroma
#EXTIMG:https://i.imgur.com/FpLO71B.png
https://5c483b9d1019c.streamlock.net/8054/8054/playlist.m3u8

#EXTINF:-1,Qtal Channel 
#EXTIMG:https://i.imgur.com/xeW2Hsa.png
https://video03.logicahost.com.br/qtalchannel01/qtalchannel01/playlist.m3u8

#EXTINF:-1,VV8 TV
#EXTIMG:https://i.imgur.com/ga5pHL9.png
https://video01.kshost.com.br:4443/seap8272/seap8272/playlist.m3u8

#EXTINF:-1,Web TV Campeão De Tudo
#EXTIMG:https://i.imgur.com/VdcLJto.png
https://stmv1.paineldevideo.com.br/claudiorlp/claudiorlp/playlist.m3u8

#EXTINF:-1,TV Rio Preto
#EXTIMG:https://i.imgur.com/03l7P4i.png
https://video02.logicahost.com.br/tvriopreto/tvriopreto/playlist.m3u8

#EXTINF:-1, Rede IBTV
#EXTIMG:https://i.imgur.com/0Qqpy6u.png
https://video01.kshost.com.br:4443/k34006/k34006/playlist.m3u8

#EXTINF:-1,Demais TV
#EXTIMG:https://i.imgur.com/T1G2nHK.png
https://stmv1.samcast.com.br/demaistv6503/demaistv6503/playlist.m3u8

#EXTINF:-1,WTV Brasil
#EXTIMG:https://i.imgur.com/NwIolMu.png
https://stmv7.samcast.com.br/wtvbrasil/wtvbrasil/playlist.m3u8

#EXTINF:-1,Canal Smart
#EXTIMG:https://i.imgur.com/urwEPnx.png
https://5ffab78b24f94.streamlock.net/smart/smart/playlist.m3u8

#EXTINF:-1,TV Nostalgia 
#EXTIMG:https://i.imgur.com/TLhvH1F.png
https://stmv1.srvif.com/emlsilva/emlsilva/playlist.m3u8

#EXTINF:-1, WEB TV BOANOVA
#EXTIMG:https://i.imgur.com/jl4UUmb.png
https://stmv.video.expressolider.com.br/tvboanova/tvboanova/playlist.m3u8

#EXTINF:-1,AgitoMax
#EXTIMG:https://i.imgur.com/oyShsQU.png
https://stmv2.samcast.com.br/agitomax/agitomax/playlist.m3u8

#EXTINF:-1, Universo TV
#EXTIMG:https://i.imgur.com/TQKRfvo.png
https://srv5.zcast.com.br/universotv/universotv/playlist.m3u8

#EXTINF:-1,Sic TV
#EXTIMG:https://imgur.com/11aNWuU.png
https://d1zx6l1dn8vaj5.cloudfront.net/out/v1/b89cc37caa6d418eb423cf092a2ef970/index_3.m3u8

#EXTINF:-1,TVi Realitys
#EXTIMG:https://imgur.com/hbkDjva.png
https://video-auth4.iol.pt/live_tvi_reality/live_tvi_reality/edge_servers/tvireality-720_passthrough/chunks.m3u8

#EXTINF:-1,TVi África 
#EXTIMG:https://github.com/inspirationlinks/inspiration-1/raw/master/TVI_%C3%81frica.png
https://video-auth4.iol.pt/live_tvi_africa/live_tvi_africa/edge_servers/tviafrica-480p/playlist.m3u8

#EXTINF:-1,TV5 Mond
#EXTIMG:https://i.imgur.com/jhFxUc1.png
https://ott.tv5monde.com/Content/HLS/Live/channel(info)/index.m3u8

#EXTINF:-1,FOX News NOW | EUA 
#EXTIMG:https://i.imgur.com/1JnyzHv.png
https://fox-foxnewsnow-samsungus.amagi.tv/playlist.m3u8
#EXTINF:-1,COMBATE GLOBAL
#EXTIMG:https://imgur.com/VhU32Jw.png
https://stream.ads.ottera.tv/playlist.m3u8?network_id=960

#EXTINF:-1,COMBATV
#EXTIMG:https://imgur.com/kVyHCec.png
https://aym-cbtv.otteravision.com/aym/cbtv/cbtv_480p.m3u8

  `.trim();

  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send(lista);
};
