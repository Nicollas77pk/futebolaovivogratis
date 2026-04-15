// api/canais.js
module.exports = async (req, res) => {
  const lista = `
#EXTM3U

#EXTINF:-1 group-title="Abertos" type="embed",Globo SP
https://rdcanais.top/globosp/
https://sinalpublicoetv.vercel.app/?id=globosp

#EXTINF:-1 group-title="Abertos" type="embed",Globo RJ
https://rdcanais.top/globorj/
https://sinalpublicoetv.vercel.app/?id=globorj

#EXTINF:-1 group-title="Abertos" type="embed",SBT
https://rdcanais.top/sbt/
https://sinalpublicoetv.vercel.app/?id=sbt

#EXTINF:-1 group-title="Abertos" type="embed",Record
https://rdcanais.top/record/
https://sinalpublicoetv.vercel.app/?id=record

#EXTINF:-1 group-title="Abertos" type="embed",Band
https://rdcanais.top/band/
https://sinalpublicoetv.vercel.app/?id=band

#EXTINF:-1 group-title="Abertos" type="embed",RedeTV
https://rdcanais.top/redetv/
https://sinalpublicoetv.vercel.app/?id=redetv

#EXTINF:-1 group-title="Esportes" type="embed",ESPN
https://rdcanais.top/espn/
https://sinalpublicoetv.vercel.app/?id=espn1

#EXTINF:-1 group-title="Esportes" type="embed",ESPN 2
https://rdcanais.top/espn2/
https://sinalpublicoetv.vercel.app/?id=espn2

#EXTINF:-1 group-title="Esportes" type="embed",ESPN 3
https://rdcanais.top/espn3
https://sinalpublicoetv.vercel.app/?id=espn3

#EXTINF:-1 group-title="Esportes" type="embed",ESPN 4
https://rdcanais.top/espn4
https://sinalpublicoetv.vercel.app/?id=espn4

#EXTINF:-1 group-title="Esportes" type="embed",Sportv
https://rdcanais.com/sportvalternativo
https://sinalpublicoetv.vercel.app/?id=sportv1

#EXTINF:-1 group-title="Esportes" type="embed",Sportv 2
https://rdcanais.top/sportv2
https://sinalpublicoetv.vercel.app/?id=sportv2

#EXTINF:-1 group-title="Esportes" type="embed",Sportv 3
https://rdcanais.top/sportv3/
https://sinalpublicoetv.vercel.app/?id=sportv3

#EXTINF:-1 group-title="Esportes" type="embed",Combate
https://rdcanais.top/combate/
https://sinalpublicoetv.vercel.app/?id=combate

#EXTM3U

#EXTINF:-1 group-title="Esportes" type="embed",Premiere
https://rdcanais.top/premiereclubes/
https://sinalpublicoetv.vercel.app/?id=premiereclubes

#EXTINF:-1 group-title="Esportes" type="embed",Premiere 2
https://rdcanais.top/premiere2/
https://sinalpublicoetv.vercel.app/?id=premiere2

#EXTINF:-1 group-title="Esportes" type="embed",Premiere 3
https://rdcanais.top/premiere3/
https://sinalpublicoetv.vercel.app/?id=premiere3


#EXTINF:-1 group-title="Esportes" type="embed",Paramount 1
https://rdcanais.top/paramountplus/
https://sinalpublicoetv.vercel.app/?id=paramount1

#EXTINF:-1 group-title="Esportes" type="embed",Paramount 2
https://rdcanais.top/paramountplus2/
https://sinalpublicoetv.vercel.app/?id=paramount2

#EXTINF:-1 group-title="Esportes" type="embed",Paramount 3
https://rdcanais.top/paramountplus3/
https://sinalpublicoetv.vercel.app/?id=paramount3

#EXTINF:-1 group-title="Esportes" type="embed",Paramount 4
https://rdcanais.top/paramountplus4/
https://sinalpublicoetv.vercel.app/?id=paramount4


#EXTINF:-1 group-title="Esportes" type="embed",MAX 1
https://rdcanais.top/max/
https://sinalpublicoetv.vercel.app/?id=max1

#EXTINF:-1 group-title="Esportes" type="embed",MAX 2
https://rdcanais.top/max2/
https://sinalpublicoetv.vercel.app/?id=max2

#EXTINF:-1 group-title="Esportes" type="embed",MAX 3
https://rdcanais.top/max3/
https://sinalpublicoetv.vercel.app/?id=max3


#EXTINF:-1 group-title="Esportes" type="embed",Prime 1
https://rdcanais.top/primevideo
https://sinalpublicoetv.vercel.app/?id=prime1

#EXTINF:-1 group-title="Esportes" type="embed",Prime 2
https://rdcanais.top/primevideo2
https://sinalpublicoetv.vercel.app/?id=prime2

#EXTINF:-1 group-title="Esportes" type="embed",Prime 3
https://rdcanais.top/primevideo3
https://sinalpublicoetv.vercel.app/?id=prime3

#EXTINF:-1 group-title="Esportes" type="embed",Prime 4
https://rdcanais.top/primevideo4
https://sinalpublicoetv.vercel.app/?id=prime4


#EXTINF:-1 group-title="Abertos" type="embed",TV Cultura
https://rdcanais.top/tvcultura/
https://sinalpublicoetv.vercel.app/?id=tvcultura


#EXTINF:-1 group-title="Filmes" type="embed",Telecine Premium
https://rdcanais.top/telecinepremium/
https://sinalpublicoetv.vercel.app/?id=telecinepremium

#EXTINF:-1 group-title="Filmes" type="embed",Telecine Action
https://rdcanais.top/telecineaction/
https://sinalpublicoetv.vercel.app/?id=telecineaction

#EXTINF:-1 group-title="Filmes" type="embed",Telecine Touch
https://rdcanais.top/telecinetouch/
https://sinalpublicoetv.vercel.app/?id=telecinetouch

#EXTINF:-1 group-title="Filmes" type="embed",Telecine Fun
https://rdcanais.top/telecinefun/
https://sinalpublicoetv.vercel.app/?id=telecinefun

#EXTINF:-1 group-title="Filmes" type="embed",Telecine Pipoca
https://rdcanais.top/telecinepipoca/
https://sinalpublicoetv.vercel.app/?id=telecinepipoca

#EXTINF:-1 group-title="Filmes" type="embed",Telecine Cult
https://rdcanais.top/telecinecult/
https://sinalpublicoetv.vercel.app/?id=telecinecult

#EXTM3U

#EXTINF:-1 group-title="Filmes" type="embed",Telecine Touch
https://rdcanais.top/telecinetouch/
https://sinalpublicoetv.vercel.app/?id=telecinetouch

#EXTINF:-1 group-title="Filmes" type="embed",Telecine Fun
https://rdcanais.top/telecinefun/
https://sinalpublicoetv.vercel.app/?id=telecinefun

#EXTINF:-1 group-title="Filmes" type="embed",Telecine Pipoca
https://rdcanais.top/telecinepipoca/
https://sinalpublicoetv.vercel.app/?id=telecinepipoca

#EXTINF:-1 group-title="Filmes" type="embed",Telecine Cult
https://rdcanais.top/telecinecult/
https://sinalpublicoetv.vercel.app/?id=telecinecult


#EXTINF:-1 group-title="Filmes" type="embed",TNT
https://rdcanais.top/tnt/
https://sinalpublicoetv.vercel.app/?id=tnt

#EXTINF:-1 group-title="Filmes" type="embed",Space
https://rdcanais.top/space/
https://sinalpublicoetv.vercel.app/?id=space


#EXTINF:-1 group-title="Filmes" type="embed",HBO
https://rdcanais.top/hbo/
https://sinalpublicoetv.vercel.app/?id=hbo

#EXTINF:-1 group-title="Filmes" type="embed",HBO 2
https://rdcanais.top/hbo2/
https://sinalpublicoetv.vercel.app/?id=hbo2

#EXTINF:-1 group-title="Filmes" type="embed",HBO Plus
https://rdcanais.top/hboplus/
https://sinalpublicoetv.vercel.app/?id=hboplus

#EXTINF:-1 group-title="Filmes" type="embed",HBO Family
https://rdcanais.top/hbofamily/
https://sinalpublicoetv.vercel.app/?id=hbofamily

#EXTINF:-1 group-title="Filmes" type="embed",HBO Signature
https://rdcanais.top/hbosignature/
https://sinalpublicoetv.vercel.app/?id=hbosignature

#EXTINF:-1 group-title="Filmes" type="embed",HBO Xtreme
https://rdcanais.top/hboxtreme/
https://sinalpublicoetv.vercel.app/?id=hboxtreme


#EXTINF:-1 group-title="Desenhos" type="embed",Cartoon Network
https://rdcanais.top/cartoonnetwork/
https://sinalpublicoetv.vercel.app/?id=cartoonnetwork

#EXTINF:-1 group-title="Desenhos" type="embed",Disney Channel
https://rdcanais.top/disneychannel/
https://sinalpublicoetv.vercel.app/?id=disneychannel

#EXTINF:-1 group-title="Desenhos" type="embed",Disney XD
https://rdcanais.top/disneyxd/
https://sinalpublicoetv.vercel.app/?id=disneyxd

#EXTINF:-1 group-title="Desenhos" type="embed",Nickelodeon
https://rdcanais.top/nickelodeon/
https://sinalpublicoetv.vercel.app/?id=nickelodeon

#EXTINF:-1 group-title="Desenhos" type="embed",Nick Jr
https://rdcanais.top/nickjr/
https://sinalpublicoetv.vercel.app/?id=nickjr

#EXTINF:-1 group-title="Desenhos" type="embed",Boomerang
https://rdcanais.top/boomerang/
https://sinalpublicoetv.vercel.app/?id=boomerang

#EXTINF:-1 group-title="Desenhos" type="embed",Tooncast
https://rdcanais.top/tooncast/
https://sinalpublicoetv.vercel.app/?id=tooncast


#EXTINF:-1 group-title="Documentario" type="embed",Discovery Channel
https://rdcanais.top/discovery/
https://sinalpublicoetv.vercel.app/?id=discovery

#EXTINF:-1 group-title="Documentario" type="embed",Discovery Science
https://rdcanais.top/discoveryscience/
https://sinalpublicoetv.vercel.app/?id=discoveryscience

#EXTINF:-1 group-title="Documentario" type="embed",Animal Planet
https://rdcanais.top/animalplanet/
https://sinalpublicoetv.vercel.app/?id=animalplanet

#EXTINF:-1 group-title="Documentario" type="embed",National Geographic
https://rdcanais.top/natgeo/
https://sinalpublicoetv.vercel.app/?id=natgeo

#EXTINF:-1 group-title="Documentario" type="embed",History Channel
https://rdcanais.top/history/
https://sinalpublicoetv.vercel.app/?id=history

#EXTM3U

#EXTINF:-1 group-title="Variedades" type="embed",TLC
https://rdcanais.top/tlc/
https://sinalpublicoetv.vercel.app/?id=tlc

#EXTINF:-1 group-title="Filmes" type="embed",Paramount
https://rdcanais.top/paramount/
https://sinalpublicoetv.vercel.app/?id=paramount


#EXTINF:-1 group-title="Filmes" type="embed",AXN
https://rdcanais.top/axn/
https://sinalpublicoetv.vercel.app/?id=axn

#EXTINF:-1 group-title="Filmes" type="embed",Sony Channel
https://rdcanais.top/sony/
https://sinalpublicoetv.vercel.app/?id=sony

#EXTINF:-1 group-title="Filmes" type="embed",Warner Channel
https://rdcanais.top/warner/
https://sinalpublicoetv.vercel.app/?id=warner

#EXTINF:-1 group-title="Variedades" type="embed",Universal TV
https://rdcanais.top/universal/
https://sinalpublicoetv.vercel.app/?id=universal

#EXTINF:-1 group-title="Filmes" type="embed",Studio Universal
https://rdcanais.top/studiouniversal/
https://sinalpublicoetv.vercel.app/?id=studiouniversal

#EXTINF:-1 group-title="Filmes" type="embed",Megapix
https://rdcanais.top/megapix/
https://sinalpublicoetv.vercel.app/?id=megapix


#EXTINF:-1 group-title="Variedades" type="embed",Multishow
https://rdcanais.top/multishow
https://sinalpublicoetv.vercel.app/?id=multishow
#EXTINF:-1 group-title="Abertos",Gospel Movie TV
#EXTIMG https://example.com/icon.png
https://stmv1.srvif.com/gospelf/gospelf/playlist.m3u8

#EXTINF:-1 group-title="Abertos",Gospel Cartoon
#EXTIMG https://example.com/icon.png
https://stmv1.srvif.com/gospelcartoon/gospelcartoon/playlist.m3u8

#EXTINF:-1 group-title="Abertos",Retro Cartoon
#EXTIMG https://example.com/icon.png
https://stmv1.srvif.com/retrotv/retrotv/playlist.m3u8

#EXTINF:-1 group-title="Abertos",Tela Viva
#EXTIMG https://example.com/icon.png
https://srv4.zcast.com.br/telavivatv/telavivatv/playlist.m3u8

#EXTINF:-1 group-title="Abertos",Demais TV
#EXTIMG https://example.com/icon.png
https://stmv1.samcast.com.br/demaistv6503/demaistv6503/playlist.m3u8

#EXTINF:-1 group-title="Abertos",Play TV
#EXTIMG https://example.com/icon.png
https://playtv.mediastreaming.com.br/play/live.stream/playlist.m3u8

#EXTINF:-1 group-title="Abertos",Record News
#EXTIMG https://example.com/icon.png
https://stream.ads.ottera.tv/playlist.m3u8?network_id=2116

#EXTINF:-1 group-title="Abertos",Novo Tempo
#EXTIMG https://example.com/icon.png
https://stream.live.novotempo.com/tv/smil:tvnovotempo.smil/playlist.m3u8

#EXTINF:-1 group-title="Abertos",SBT Interior
#EXTIMG https://example.com/icon.png
https://cdn.jmvstream.com/w/LVW-1 group-title="Abertos"0801/LVW10801_Xvg4R0u57n/playlist.m3u8

#EXTINF:-1 group-title="Abertos",Animax
#EXTIMG https://example.com/icon.png
https://stream.ichibantv.com:3547/stream/play.m3u8

#EXTINF:-1 group-title="Abertos",TV Cine
#EXTIMG https://example.com/icon.png
https://stmv1.srvif.com/tvserie/tvserie/playlist.m3u8

#EXTINF:-1 group-title="Abertos",Bons Tempos
#EXTIMG https://example.com/icon.png
https://stmv1.srvif.com/canal29/canal29/playlist.m3u8

#EXTINF:-1 group-title="Abertos",Loading
#EXTIMG https://example.com/icon.png
https://stmv1.srvif.com/loadingtv/loadingtv/playlist.m3u8

#EXTINF:-1 group-title="Abertos",Otaku Sign
#EXTIMG https://example.com/icon.png
https://stmv1.srvif.com/otaku/otaku/playlist.m3u8

#EXTINF:-1 group-title="Abertos",TV Aracati
#EXTIMG https://example.com/icon.png
https://video04.logicahost.com.br/tvaracati/tvaracati/playlist.m3u8

#EXTINF:-1 group-title="Abertos",AniTV
#EXTIMG https://example.com/icon.png
https://stream.ichibantv.com:3764/hybrid/play.m3u8

#EXTINF:-1 group-title="Abertos",TV Zyn
#EXTIMG https://example.com/icon.png
https://amg01391-sbtinfast-amg01391c2-runtime-latam-1 group-title="Abertos"337.playouts.now.amagi.tv/playlist/amg01391-addigital-tvzyn-runtimelatam/playlist.m3u8

#EXTINF:-1 group-title="Abertos",ConecTV
#EXTIMG https://example.com/icon.png
https://stream01.msolutionbrasil.com.br/hls/conectv/live.m3u8

#EXTINF:-1 group-title="Abertos",Toon Goggles
#EXTIMG https://example.com/icon.png
https://stream.ads.ottera.tv/playlist.m3u8?network_id=274

#EXTINF:-1 group-title="Abertos",Adorando Jesus
#EXTIMG https://example.com/icon.png
https://stmv1.srvif.com/adorando/adorando/playlist.m3u8

#EXTINF:-1 group-title="Abertos",Mi TV
#EXTIMG https://example.com/icon.png
https://stmv4.voxtvhd.com.br/1990/1990/playlist.m3u8

#EXTINF:-1 group-title="Abertos",Gospel Music Television
#EXTIMG https://example.com/icon.png
https://stmv1.srvif.com/gmusic/gmusic/playlist.m3u8

#EXTINF:-1 group-title="Abertos",Filmes Online
#EXTIMG https://example.com/icon.png
https://stream.ads.ottera.tv/playlist.m3u8?network_id=6178

#EXTINF:-1 group-title="Abertos",TV Clássicos do Cinema
#EXTIMG https://example.com/icon.png
https://stmv1.srvif.com/movies1/movies1/playlist.m3u8

#EXTINF:-1 group-title="Abertos",Clouding
#EXTIMG https://example.com/icon.png
https://stmv1.paineltv.net/redeclonetv/redeclonetv/playlist.m3u8

#EXTINF:-1 group-title="Abertos",Runtime
#EXTIMG https://example.com/icon.png
https://stream.ads.ottera.tv/playlist.m3u8?network_id=2552

#EXTINF:-1 group-title="Abertos",TV Osório
#EXTIMG https://example.com/icon.png
https://stmv1.srvstm.com/demo2573/demo2573/playlist.m3u8

#EXTINF:-1 group-title="Abertos",Globo SP SD
#EXTIMG:https://imgur.com/waZJG1M.png
https://cdn-2.nxplay.com.br/GLOBO_SP_TK/tracks-v1a1/mono.m3u8

#EXTINF:-1 group-title="Abertos",RecordTV SP SD
#EXTIMG:https://imgur.com/lyQ1v9M.png
https://stream1.freetv.fun/record-sp-2-1 group-title="Abertos".m3u8

#EXTINF:-1 group-title="Abertos",RecordTV SP HD
#EXTIMG:https://imgur.com/lyQ1v9M.png
https://cdn-2.nxplay.com.br/RECORD_PAULISTA_PFZ_NXPLAY_01/tracks-v1a1/mono.m3u8

#EXTINF:-1 group-title="Abertos",RecordTV SP HD [Alter]
#EXTIMG:https://imgur.com/lyQ1v9M.png
https://stream1.freetv.fun/record-sp-2-3.m3u8

#EXTINF:-1 group-title="Abertos",RecordTV Juara HD
#EXTIMG:https://imgur.com/lyQ1v9M.png
https://cdn.jmvstream.com/w/LVW-1 group-title="Abertos"0842/LVW10842_513N26MDBL/chunklist.m3u8

#EXTINF:-1 group-title="Abertos",RecordTV Juina HD
#EXTIMG:https://imgur.com/lyQ1v9M.png
https://cdn.jmvstream.com/w/LVW-1 group-title="Abertos"0841/LVW10841_mT77z9o2cP/playlist.m3u8

#EXTINF:-1 group-title="Abertos",Band RJ HD
#EXTIMG:https://imgur.com/xYGjfh8.png
https://stream1.freetv.fun/band-rj-1 group-title="Abertos".ctv

#EXTINF:-1 group-title="Abertos",Band SP SD
#EXTIMG:https://imgur.com/xYGjfh8.png
https://cdn-2.nxplay.com.br/BAND_HD_PFZ_NX/tracks-v1a1/mono.m3u8

#EXTINF:-1 group-title="Abertos",Band SP HD
#EXTIMG:https://imgur.com/xYGjfh8.png
https://cdn-2.nxplay.com.br/BAND_HD_PFZ_NX/index.m3u8

#EXTINF:-1 group-title="Abertos",Band SP HD [Alter]
#EXTIMG:https://imgur.com/xYGjfh8.png
https://stream1.freetv.fun/band-sp-1 group-title="Abertos".m3u8

#EXTINF:-1 group-title="Abertos",Band HD
#EXTIMG:https://imgur.com/xYGjfh8.png
https://stream1.freetv.fun/band-1 group-title="Abertos".m3u8

#EXTINF:-1 group-title="Abertos",Band Arapuan HD
#EXTIMG:https://i.imgur.com/yyFeDm7.png
https://5b7f3c45ab7c2.streamlock.net/arapuan/ngrp:arapuan_all/chunklist.m3u8

#EXTINF:-1 group-title="Abertos",Band TV - Vale do Uruará SD
#EXTIMG:https://i.imgur.com/oTkOmnH.png
https://stmv1.paineltv.net/valeradiowebtv/valeradiowebtv/chunklist_w1873032931.m3u8

#EXTINF:-1 group-title="Abertos",NEW BRASIL HD
#EXTIMG:https://imgur.com/vSKVrvH.png
https://cc-7pakstinpyajo.akamaized.net/playlist720lp.m3u8

#EXTINF:-1 group-title="Abertos",NEW BRASIL FHD
#EXTIMG:https://imgur.com/vSKVrvH.png
https://cc-7pakstinpyajo.akamaized.net/playlist1080p.m3u8


#EXTINF:-1 group-title="Abertos",SBT Interior SP HD
#EXTIMG:https://imgur.com/KO1v3pS.png
https://cdn.jmvstream.com/w/LVW-1 group-title="Abertos"0801/LVW10801_Xvg4R0u57n/playlist.m3u8

#EXTINF:-1 group-title="Abertos",SBT Guajará
#EXTIMG:https://i.imgur.com/oOhk9Gg.png
https://video05.logicahost.com.br/tvguajara/tvguajara/playlist.m3u8

#EXTINF:-1 group-title="Abertos",TV ARATU HD
#EXTIMG:https://imgur.com/tyFtNYn.png
https://cdn.jmvstream.com/w/LVW-8379/LVW8379_rIq6ZYiIiA/chunklist.m3u8

#EXTINF:-1 group-title="Abertos",SBT CIDADE VERDE FHD
#EXTIMG:https://imgur.com/KO1v3pS.png
https://stmv1.transmissaodigital.com/cidadeverdenovo/cidadeverdenovo/playlist.m3u8

#EXTINF:-1 group-title="Abertos",RedeTV!
#EXTIMG:https://imgur.com/EgKx2J1.png
https://cdn.jmvstream.com/w/AVJ-1 group-title="Abertos"5235/playlist/chunklist.m3u8

#EXTINF:-1 group-title="Abertos",RedeTV! 
#EXTIMG:https://imgur.com/2vYqKX5.png
https://cdn2.easy.tv.br/redetv/index.m3u8
#EXTINF:-1 group-title="Abertos",RedeTV! PR HD
#EXTIMG:https://imgur.com/2vYqKX5.png
https://tv02.zas.media:1936/redetvparana/redetvparana/playlist.m3u8

#EXTINF:-1 group-title="Abertos",RedeTV! PI SD
#EXTIMG:https://imgur.com/2vYqKX5.png
https://59e4b6c1beddc.streamlock.net/tvodia/tvodia/chunklist_w157393531.m3u8

#EXTINF:-1 group-title="Abertos",TV Gazeta HD
#EXTIMG:https://i.imgur.com/Ak037l4.png
https://stream1.freetv.fun/tv-gazeta-1 group-title="Abertos".m3u8

#EXTINF:-1 group-title="Abertos",TV Gazeta MA SD
#EXTIMG:https://i.imgur.com/Ak037l4.png
https://stmv5.samcast.com.br/wagner7919/wagner7919/chunklist_w1606860923.m3u8

#EXTINF:-1 group-title="Abertos",TV Gazeta PA
#EXTIMG:https://i.imgur.com/Ak037l4.png
https://video01.kshost.com.br:4443/moises3834/moises3834/chunklist_w1625878121.m3u8

#EXTINF:-1 group-title="Abertos",TV Cultura Brasil 
#EXTIMG:https://i.imgur.com/xL9QvHp.png
https://player-tvcultura.stream.uol.com.br/live/tvcultura.m3u8

#EXTINF:-1 group-title="Abertos",TV Cultura RN FHD
#EXTIMG:https://i.imgur.com/xL9QvHp.png
https://tv02.zas.media:1936/futurotv21/futurotv21/chunklist_w309642670.m3u8

#EXTINF:-1 group-title="Abertos",SporTV UHD
#EXTIMG:https://imgur.com/bwqLqyg.png
https://anonmedia.foo/sportv/tracks-v1a1/mono.m3u8

#EXTINF:-1 group-title="Abertos",ESPN SD 
#EXTIMG:https://i.imgur.com/CkoAvYH.png
https://cdn-2.nxplay.com.br/ESPN/tracks-v1a1/mono.m3u8

#EXTINF:-1 group-title="Abertos",ESPN UHD
#EXTIMG:https://i.imgur.com/CkoAvYH.png
https://anonmedia.foo/espn/tracks-v1a1/mono.m3u8

#EXTINF:-1 group-title="Abertos",ESPN 2 SD 
#EXTIMG:https://i.imgur.com/CkoAvYH.png
https://cdn-2.nxplay.com.br/ESPN_2/tracks-v1a1/mono.m3u8

#EXTINF:-1 group-title="Abertos",ESPN 2 HD 
#EXTIMG:https://i.imgur.com/ZAHnoPh.png
https://cdn-2.nxplay.com.br/ESPN_2/index.m3u8

#EXTINF:-1 group-title="Abertos",ESPN 2 HD
#EXTIMG:https://i.imgur.com/ZAHnoPh.png
https://anonmedia.foo/espn2/tracks-v1a1/mono.m3u8

#EXTINF:-1 group-title="Abertos",ESPN 3 SD 
#EXTIMG:https://i.imgur.com/CkoAvYH.png
https://cdn-2.nxplay.com.br/ESPN_3/tracks-v1a1/mono.m3u8

#EXTINF:-1 group-title="Abertos",ESPN 3 HD 
#EXTIMG:https://imgur.com/VCPTlBD.png
https://cdn-2.nxplay.com.br/ESPN_3/index.m3u8

#EXTINF:-1 group-title="Abertos",ESPN 3 UHD
#EXTIMG:https://imgur.com/VCPTlBD.png
https://anonmedia.foo/espn3/tracks-v1a1/mono.m3u8

#EXTINF:-1 group-title="Abertos",ESPN 4 SD 
#EXTIMG:https://imgur.com/ErWFVO3.png
https://cdn-2.nxplay.com.br/ESPN_4/tracks-v1a1/mono.m3u8

#EXTINF:-1 group-title="Abertos",ESPN 4 HD 
#EXTIMG:https://imgur.com/ErWFVO3.png
https://cdn-2.nxplay.com.br/ESPN_4/index.m3u8

#EXTINF:-1 group-title="Abertos",ESPN 4 UHD
#EXTIMG:https://imgur.com/ErWFVO3.png
https://anonmedia.foo/espn4/tracks-v1a1/mono.m3u8

#EXTINF:-1 group-title="Abertos",Band Sports SD
#EXTIMG:https://i.imgur.com/LSZ5VKi.png
https://cdn-1 group-title="Abertos".nxplay.com.br/BAND_SPORTS/tracks-v1a1/mono.m3u8

#EXTINF:-1 group-title="Abertos",Band Sports HD
#EXTIMG:https://i.imgur.com/LSZ5VKi.png
https://cdn-1 group-title="Abertos".nxplay.com.br/BAND_SPORTS/tracks-v2a1/mono.m3u8

#EXTINF:-1 group-title="Abertos",Band Sports FHD
#EXTIMG:https://i.imgur.com/LSZ5VKi.png
https://stream1.freetv.fun/band-sports-3.m3u8

#EXTINF:-1 group-title="Abertos",Premiere Clubes HD2
#EXTIMG:https://imgur.com/XxJNMns.png
https://anonmedia.foo/premiereclubes/tracks-v1a1/mono.m3u8

#EXTINF:-1 group-title="Abertos",Premiere 2 HD
#EXTIMG:https://imgur.com/oTkPiQA.png
https://anonmedia.foo/premiere2/tracks-v1a1/mono.m3u8

#EXTINF:-1 group-title="Abertos",Premiere 3 UHD
#EXTIMG:https://imgur.com/s81XtWC.png
https://anonmedia.foo/premiere3/tracks-v1a1/mono.m3u8

#EXTINF:-1 group-title="Abertos",Premiere 4 UHD
#EXTIMG:https://imgur.com/BT5vktj.png
https://anonmedia.foo/premiere4/tracks-v1a1/mono.m3u8

#EXTINF:-1 group-title="Abertos",Premiere 5 HD
#EXTIMG:https://imgur.com/eLomVAg.png
https://anonmedia.foo/premiere5/tracks-v1a1/mono.m3u8

#EXTINF:-1 group-title="Abertos",Premiere 6 HD
#EXTIMG:https://imgur.com/DrogUkK.png
https://anonmedia.foo/premiere6/tracks-v1a1/mono.m3u8

#EXTINF:-1 group-title="Abertos",Premiere 7 HD
#EXTIMG:https://imgur.com/doQNvx2.png
https://anonmedia.foo/premiere7/tracks-v1a1/mono.m3u8

#EXTINF:-1 group-title="Abertos",CazéTV HD
#EXTIMG:https://i.imgur.com/oJJ8AAI.png
https://cc-panvcqnzkgrdl.akamaized.net/Caze/Caze_TV_BR/Caze_TV.m3u8

#EXTINF:-1 group-title="Abertos",Esportes Brasília 
#EXTIMG:https://imgur.com/6fU9ulW.png
https://a.cdni.live/radioesporte/radioesporte/chunklist_w1002148111.m3u8

#EXTINF:-1 group-title="Abertos",JP NEWS 576p
#EXTIMG:https://i.imgur.com/MWGAfvV.png
https://d9tard1jbwri9.cloudfront.net/playlist576p.m3u8

#EXTINF:-1 group-title="Abertos",CNN BRASIL
#EXTIMG:https://imgur.com/4dfmnBs.png
https://d25usgadhphvwi.cloudfront.net/hls/main.m3u8

#EXTINF:-1 group-title="Abertos",CNN BRASIL SD
#EXTIMG:https://imgur.com/4dfmnBs.png
https://cdn-2.nxplay.com.br/CNN_FAST/tracks-v2a1/mono.m3u8

#EXTINF:-1 group-title="Abertos",CNN BRASIL HD
#EXTIMG:https://imgur.com/4dfmnBs.png
https://cdn-1 group-title="Abertos".nxplay.com.br/CNN_FAST/index.m3u8

#EXTINF:-1 group-title="Abertos",Globo News HD [Alter]
#EXTIMG:https://imgur.com/Wu4ykxo.png
https://stream1.freetv.fun/globo-news-2.m3u8

#EXTINF:-1 group-title="Abertos",Band News SD
#EXTIMG:https://imgur.com/jCZzNjF.png
https://cdn-2.nxplay.com.br/BAND_NEWS_TK/tracks-v1a1/mono.m3u8

#EXTINF:-1 group-title="Abertos",AVANÇA BRASIL
#EXTIMG:https://live.staticflickr.com/2053/2308291877_4e9d0bd251_c.jpg
https://video01.soultv.com.br/avancabrasil/avancabrasil/playlist.m3u8

#EXTINF:-1 group-title="Abertos",4 POR 4 
#EXTIMG:https://i.imgur.com/B1KhZs2.png
https://video01.soultv.com.br/programa4por4/programa4por4/playlist.m3u8

#EXTINF:-1 group-title="Abertos",Resumo da Ópera
#EXTIMG:https://i.imgur.com/yVux2yk.png
https://011news.akamaized.net/011news/011news/chunklist_480p.m3u8

#EXTINF:-1 group-title="Abertos", 011 News HD
#EXTIMG:https://i.imgur.com/MGNoiZW.png
https://011news.akamaized.net/011news/011news/playlist.m3u8

#EXTINF:-1 group-title="Abertos",Record News HD
#EXTIMG:https://images.pluto.tv/channels/6102e04e9ab1db0007a980a1/colorLogoPNG.png
https://stream.ads.ottera.tv/playlist.m3u8?network_id=5431&avod=1&coppa=0&is_lat=0&dnt=0&us_privacy=1YN-&did=9794a1b041ad875093e398bc1632460a&app_bundle=com.ammo.runtime&app_store_url=https%3A%2F%2Fwww.runtime.tv%2Fdevices&app_domain=runtime.tv&app_name=runtime&custom_targeting=web&custom_4=internal&h=720&w=1280&content_channel=runtime&content_dist_name=internal&device_make=&device_model=&preferred_language=EN&consent=1&gdpr=0&custom_12=0&custom_15=pt-br&custom_16=EN&custom_17=en&site_page=https%253A%252F%252Fwww.runtime.tv%252F&gender=not_specified&yob=0&livestream=1&custom_param_0=&custom_param_1=handset&custom_param_2=&custom_param_3=&custom_param_4=internal&custom_param_5=web&custom_param_6=South%2520America&timestamp=1688604990&id=11709&ip=138.185.238.172&override_expiration=1500&sign=z%2BA66gwNz60ZptKvp8RUzKwjztJdlXb4BFuJDdDAARg%3D

#EXTINF:-1 group-title="Abertos",TV Camara De Deputados FHD
#EXTIMG:https://imgur.com/TlqB0Uo.png
https://stream3.camara.gov.br/tv1/manifest.m3u8

#EXTINF:-1 group-title="Abertos",TV Senado 
#EXTIMG:https://i.imgur.com/duy6waL.png
https://cdn-1 group-title="Abertos".nxplay.com.br/TV_SENADO/index.m3u8

#EXTINF:-1 group-title="Abertos",TV VIDEONEWS
#EXTIMG:https://imgur.com/4m1j3CL.png
https://video01.logicahost.com.br/tvideonews/tvideonews/chunklist.m3u8

#EXTINF:-1 group-title="Abertos",Canal UOL
#EXTIMG:https://imgur.com/dC2p8J1.png
https://d19fe0yjxkxylf.cloudfront.net/index.m3u8

#EXTINF:-1 group-title="Abertos",ARTE 1
#EXTIMG:https://imgur.com/4QWoV1Z.png
https://cdn-2.nxplay.com.br/ARTE1_TK/index.m3u8

#EXTINF:-1 group-title="Abertos",TLC HD
#EXTIMG:https://imgur.com/2F9asSD.png
https://cdn-2.nxplay.com.br/TLC_BR_NX/index.m3u8

#EXTINF:-1 group-title="Abertos",Receita Fast HD
#EXTIMG:https://imgur.com/X8bDYyO.png
https://cc-panvcqnzkgrdl.akamaized.net/Globo/Receitas_Fast_BR/Receitas_Fast.m3u8

#EXTINF:-1 group-title="Abertos",Food Network HD
#EXTIMG:https://imgur.com/AH3uBDj.png
https://cdn-2.nxplay.com.br/FOOD_NETWORK_NX/index.m3u8

#EXTINF:-1 group-title="Abertos",ID HD
#EXTIMG:https://imgur.com/OJWv4Ij.png
https://cdn-2.nxplay.com.br/DISCOVERY_ID_NX/index.m3u8

#EXTINF:-1 group-title="Abertos",Trace Brasil
#EXTIMG:https://i.imgur.com/IE8xwt4.png
https://cdn-2.nxplay.com.br/TRACE_BRAZUCA/index.m3u8

#EXTINF:-1 group-title="Abertos",People Are Awesome
#EXTIMG:https://i.imgur.com/BWfmUwV.png
https://jukin-peopleareawesome-2-br.samsung.wurl.tv/playlist.m3u8

#EXTINF:-1 group-title="Abertos",Motorvision FHD
#EXTIMG:https://imgur.com/jlhvLJb.png
https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01329-ottera-motorvision-samsungbr/playlist.m3u8

#EXTINF:-1 group-title="Abertos",Motorvision |PT HD
#EXTIMG:https://imgur.com/jlhvLJb.png
https://stream.ads.ottera.tv/playlist.m3u8?network_id=2182

#EXTINF:-1 group-title="Abertos",Cultne TV
#EXTIMG:https://images.pluto.tv/channels/66296e755a402e00086a2c47/colorLogoPNG.png
https://cc-wn1j3f2wnu5lr.akamaized.net/manifest.m3u8

#EXTINF:-1 group-title="Abertos",Discovery World HD
#EXTIMG:https://imgur.com/6sTkahx.png
https://cdn-2.nxplay.com.br/DISCOVERY_WORLD_NX/index.m3u8

#EXTINF:-1 group-title="Abertos",Disc. Home & Health  HD
#EXTIMG:https://imgur.com/VSezlWv.png
https://cdn-2.nxplay.com.br/DISCOVERY_HH_NX/index.m3u8

#EXTINF:-1 group-title="Abertos",Discovery Channel SD
#EXTIMG:https://imgur.com/dgGgYjc.png
https://cdn-2.nxplay.com.br/DISCOVERY_CHANNEL_NX/tracks-v1a1/mono.m3u8

#EXTINF:-1 group-title="Abertos",Discovery Science HD 
#EXTIMG:https://imgur.com/1Hm6dQU.png
https://cdn-2.nxplay.com.br/DISCOVERY_SCIENCE_NX/index.m3u8

#EXTINF:-1 group-title="Abertos",HGTV SD
#EXTIMG:https://i.imgur.com/dT19vNc.png
https://cdn-2.nxplay.com.br/HGTV_BR_NX/tracks-v1a1/mono.m3u8

#EXTINF:-1 group-title="Abertos",HGTV HD
#EXTIMG:https://i.imgur.com/dT19vNc.png
https://cdn-2.nxplay.com.br/HGTV_BR_NX/index.m3u8

#EXTINF:-1 group-title="Abertos",History HD
#EXTIMG:https://imgur.com/0rNNqVy.png
https://cdn-2.nxplay.com.br/HISTORY_TK/index.m3u8

#EXTINF:-1 group-title="Abertos",Animal Planet HD
#EXTIMG:https://imgur.com/t97qwNh.png
https://cdn-2.nxplay.com.br/ANIMAL_PLANET_NX/index.m3u8

#EXTINF:-1 group-title="Abertos",Rakuten Documentários | português e inglês
#EXTIMG:https://i.imgur.com/QwPiPlI.png
https://rakuten-documentaries-1 group-title="Abertos"4-pt.samsung.wurl.tv/playlist.m3u8

#EXTINF:-1 group-title="Abertos",Curta!
#EXTIMG:https://i.imgur.com/g9AtH3s.png
https://video01.logicahost.com.br/canalcurta/canalcurta/playlist.m3u8

#EXTINF:-1 group-title="Abertos",TNT Novelas SD
#EXTIMG:https://imgur.com/x9XvCqL.png
https://cdn-2.nxplay.com.br/TNT_NOVELAS_TK/tracks-v1a1/mono.m3u8

#EXTINF:-1 group-title="Abertos",TNT Novelas HD
#EXTIMG:https://imgur.com/x9XvCqL.png
https://cdn-2.nxplay.com.br/TNT_NOVELAS_TK/tracks-v2a1/mono.m3u8

#EXTINF:-1 group-title="Abertos",Os Dez Mandamentos 
#EXTIMG:https://imgur.com/tzYimlq.png
https://cc-97z35d907q26w.akamaized.net/Samsung/Os_Dez_Mandamentos_BR/Os_Dez_Mandamentos.m3u8

#EXTINF:-1 group-title="Abertos", Malhação Fast
#EXTIMG:https://imgur.com/0gDjNFs.png
https://cc-b6t4lda8x3u3t.akamaized.net/Globo/Malhacao_Fast_BR/Malhacao_Fast.m3u8

#EXTINF:-1 group-title="Abertos",A Escrava_Isaura
#EXTIMG:https://imgur.com/851wj7w.png
https://cc-slllnk8iujdo8.akamaized.net/Samsung/A_Escrava_Isaura_BR/A_Escrava_Isaura.m3u8

#EXTINF:-1 group-title="Abertos",TVi Ficção
#EXTIMG:https://i.imgur.com/crseFhh.png
https://video-auth2.iol.pt/live_tvi_ficcao/live_tvi_ficcao/edge_servers/tvificcao-720p/playlist.m3u8

#EXTINF:-1 group-title="Abertos",TELEVISA
#EXTIMG:https://i.imgur.com/EBkFVPb.png
https://televisa-televisa-1 group-title="Abertos"-it.samsung.wurl.tv/playlist.m3u8

#EXTINF:-1 group-title="Abertos",Novelas Turcas
#EXTIMG:https://images.pluto.tv/channels/5dcde0cc2efd2700090b7ff4/colorLogoPNG.png
https://stream.ads.ottera.tv/playlist.m3u8?network_id=5088

#EXTINF:-1 group-title="Abertos",Canela Telenovelas
#EXTIMG:https://i.imgur.com/GrtNJki.png
https://stream.ads.ottera.tv/playlist.m3u8?network_id=1152

#EXTINF:-1 group-title="Abertos",Novelissima
#EXTIMG:https://imgur.com/7MCMU3j.png
https://stream.ads.ottera.tv/playlist.m3u8?network_id=2380

#EXTINF:-1 group-title="Abertos",Novelissima BR
#EXTIMG:https://imgur.com/7MCMU3j.png
https://cis-no-samsung.otteravision.com/cis/no/no_h265.m3u8

#EXTINF:-1 group-title="Abertos",Sony Novelas | LG
#EXTIMG:https://i.imgur.com/mqEHDE1.png
https://spt-novelas-1 group-title="Abertos"-us.lg.wurl.tv/playlist.m3u8
`;

  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send(lista);
};
