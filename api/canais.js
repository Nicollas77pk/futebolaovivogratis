// api/canais.js
module.exports = async (req, res) => {
  const lista = `
#EXTM3U

############################
# 📺 ABERTOS
############################
#EXTINF:-1 group-title="Abertos" type="embed",Globo SP
https://rdcanais.top/globosp

#EXTINF:-1 group-title="Abertos" type="embed",Globo RJ
https://rdcanais.top/globorj

#EXTINF:-1 group-title="Abertos" type="embed",SBT
https://rdcanais.top/sbt

#EXTINF:-1 group-title="Abertos" type="embed",Record
https://rdcanais.top/record

#EXTINF:-1 group-title="Abertos" type="embed",Band
https://rdcanais.top/band

#EXTINF:-1 group-title="Abertos" type="embed",RedeTV
https://rdcanais.top/redetv


############################
# ⚽ ESPORTES
############################
#EXTINF:-1 group-title="Esportes" type="embed",ESPN
https://rdcanais.top/espn

#EXTINF:-1 group-title="Esportes" type="embed",ESPN 2
https://rdcanais.top/espn2

#EXTINF:-1 group-title="Esportes" type="embed",ESPN 3
https://rdcanais.top/espn3

#EXTINF:-1 group-title="Esportes" type="embed",ESPN 4
https://rdcanais.top/espn4

#EXTINF:-1 group-title="Esportes" type="embed",SporTV
https://rdcanais.top/sportv

#EXTINF:-1 group-title="Esportes" type="embed",SporTV 2
https://rdcanais.top/sportv2

#EXTINF:-1 group-title="Esportes" type="embed",SporTV 3
https://rdcanais.top/sportv3

#EXTINF:-1 group-title="Esportes" type="embed",Premiere
https://rdcanais.top/premiere

#EXTINF:-1 group-title="Esportes" type="embed",Premiere 2
https://rdcanais.top/premiere2

#EXTINF:-1 group-title="Esportes" type="embed",Premiere 3
https://rdcanais.top/premiere3

#EXTINF:-1 group-title="Esportes" type="embed",Combate
https://rdcanais.top/combate

#EXTINF:-1 group-title="Esportes" type="embed",TNT Sports
https://rdcanais.top/tntsports


############################
# 🎬 FILMES (HBO)
############################
#EXTINF:-1 group-title="Filmes - HBO" type="embed",HBO
https://rdcanais.top/hbo

#EXTINF:-1 group-title="Filmes - HBO" type="embed",HBO 2
https://rdcanais.top/hbo2

#EXTINF:-1 group-title="Filmes - HBO" type="embed",HBO Plus
https://rdcanais.top/hboplus

#EXTINF:-1 group-title="Filmes - HBO" type="embed",HBO Family
https://rdcanais.top/hbofamily

#EXTINF:-1 group-title="Filmes - HBO" type="embed",HBO Signature
https://rdcanais.top/hbosignature


############################
# 🎥 FILMES (TELECINE)
############################
#EXTINF:-1 group-title="Filmes - Telecine" type="embed",Telecine Premium
https://rdcanais.top/telecinepremium

#EXTINF:-1 group-title="Filmes - Telecine" type="embed",Telecine Action
https://rdcanais.top/telecineaction

#EXTINF:-1 group-title="Filmes - Telecine" type="embed",Telecine Pipoca
https://rdcanais.top/telecinepipoca

#EXTINF:-1 group-title="Filmes - Telecine" type="embed",Telecine Touch
https://rdcanais.top/telecinetouch

#EXTINF:-1 group-title="Filmes - Telecine" type="embed",Telecine Cult
https://rdcanais.top/telecinecult


############################
# 🧸 INFANTIL
############################
#EXTINF:-1 group-title="Infantil" type="embed",Cartoon Network
https://rdcanais.top/cartoonnetwork

#EXTINF:-1 group-title="Infantil" type="embed",Disney Channel
https://rdcanais.top/disneychannel


############################
# 🌍 DOCUMENTÁRIOS
############################
#EXTINF:-1 group-title="Documentários" type="embed",Discovery Channel
https://rdcanais.top/discoverychannel

#EXTINF:-1 group-title="Documentários" type="embed",History
https://rdcanais.top/history

#EXTINF:-1 group-title="Documentários" type="embed",National Geographic
https://rdcanais.top/nationalgeographic


############################
# 🎵 VARIEDADES
############################
#EXTINF:-1 group-title="Variedades" type="embed",Multishow
https://rdcanais.top/multishow

  `.trim();

  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send(lista);
};
