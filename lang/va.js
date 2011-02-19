var lang = [
	  "Torrents||*.torrent||Tots els archius (*.*)||*.*||"
	, "Acceptar"
	, "Cancelar"
	, "Aplicar"
	, "Yes"
	, "No"
	, "Tancar"
	, "Preferències"
	, "Idioma"
	, "Idioma:"
	, "Privacitat"
	, "Buscar actualisacions automàticament"
	, "Actualisar a versions beta"
	, "Enviar informació anònima en la comprovació de les actualisacions"
	, "Quan finalise la descàrrega"
	, "Afegir .!ut als archius incomplets"
	, "Preasignar tots els archius"
	, "Previndre standby si hi han torrents actius"
	, "Opcions de Pantalla"
	, "Confirmar quan es borren torrents"
	, "Confirmar quan es borren torrents"
	, "Mostrar confirmació per a eixir"
	, "Alternar el color del fondo de la llista"
	, "Mostrar la vel. en la barra de títul"
	, "Mostrar llímit de vel. en la barra d'estat"
	, "A l'afegir Torrents"
	, "No començar la transferència automàticament"
	, "Activar la finestra del programa"
	, "Mostrar una finestra en els archius continguts en el torrent"
	, "Accions per al Doble clic"
	, "Per a torrents compartint:"
	, "Per a torrents descarregant:"
	, "Carpeta d'archius descarregats"
	, "Posar les descàrregues en:"
	, "Mostrar sempre el dialec d'agregació manual"
	, "Moure descàrreges completes a:"
	, "Afegir l'etiqueta del torrent"
	, "Només moure des de la carpeta de descàrregues per defecte"
	, "Ubicació dels .torrents"
	, "Guardar .torrents en:"
	, "Moure .torrents de faenes acabades a:"
	, "Carregar automàticament .torrents desde:"
	, "Borrar .torrents carregats"
	, "Escoltar Port"
	, "Port utilisat per a conexions entrants:"
	, "Port aleatori"
	, "Seleccionar un port aleatori cuan inicies"
	, "Activar UPnP port mapping"
	, "Activar NAT-PMP port mapping"
	, "Servidor Proxy"
	, "Tipo:"
	, "Proxy:"
	, "Port:"
	, "Autentificació"
	, "Usuari:"
	, "Contrasenya:"
	, "Resoldre els hostnames a través del proxy"
	, "Utilisar un servidor proxy per a les conexions p2p"
	, "Afegir com excepció al Firewall de Windows"
	, "Proxy Privacy"
	, "Disable all local DNS lookups"
	, "Disable all features that leak identifying information"
	, "Disable connections unsupported by the proxy"
	, "Llimitació de velocitat de pujada"
	, "Velocitat màxima de pujada (kB/s): [0: illimitat]"
	, "Automàtic"
	, "Alternar vel. de pujada quan no descarreges (kB/s):"
	, "Llimitació de velocitat de baixada"
	, "Vel. màx. de descàrrega (kB/s): [0: illimitat]"
	, "Número de Conexions:"
	, "Número màxim de conexions globals:"
	, "Número màxim de conexions per torrent:"
	, "Número de slots de pujada per torrent:"
	, "Utilisar slots extra si la velocitat de pujada es < 90%"
	, "Global Rate Limit Options"
	, "Apply rate limit to transport overhead"
	, "Apply rate limit to uTP connections"
	, "Característiques basiques de Bittorrent"
	, "Activar xàrcia DHT"
	, "Demanar al tracker info. de scrape"
	, "Activar DHT per als nous torrents"
	, "Activar Intercanvi de Parelles"
	, "Activar Descobriment de Parelles Locals"
	, "Llímit d'ample de banda entre parelles locals"
	, "Informar de la IP/Hostname al tracker:"
	, "Protocol d'Encriptació"
	, "Ixent:"
	, "Permetre conexions entrants heredades"
	, "Enable bandwidth management [uTP]"
	, "Enable UDP tracker support"
	, "Enable Transfer Cap"
	, "Cap Settings"
	, "Limit Type:"
	, "Bandwidth Cap:"
	, "Time Period (days):"
	, "Usage history for selected period:"
	, "Uploaded:"
	, "Downloaded:"
	, "Uploaded + Downloaded:"
	, "Time period:"
	, "Last %d days"
	, "Reset History"
	, "Config. de la coa"
	, "Número màxim de torrents actius (pujada o descàrrega):"
	, "Número màxim de descàrregues actives:"
	, "Compartir mentres [valors predeterminats]"
	, "Minimum ratio (%):"
	, "Minimum seeding time (minutes):"
	, "Faenes de compartició en més prioritat que les de descàrrega"
	, "Cuant µTorrent acabe de compartir"
	, "Llímit de vel. de pujada a: [0: parat]"
	, "Activar planificador"
	, "Taula de planificació"
	, "Preferències planificador"
	, "Velocitat de pujada (kB/s):"
	, "Velocitat de descàrrega (kB/s):"
	, "Desactivar DHT a l'apagar"
	, "Activar Web UI"
	, "Autentificació"
	, "Usuari:"
	, "Contrasenya:"
	, "Activar conte Convidat en nom d'usuari:"
	, "Conectivitat"
	, "Port d'escolta alternatiu (per defecte el port de conexió):"
	, "Restringir accés a les següents IP's (Separar entrades multiples en ,)"
	, "Opcions avançades [Atenció: No modificar!]"
	, "Valor:"
	, "Verdader"
	, "Fals"
	, "Establir"
	, "Llista de velocitats emergent [Separar valors en una coma]"
	, "Sobreescriure la llista de velocitats emergent"
	, "Llista de pujada:"
	, "Llista de descàrrega:"
	, "Etiquetes [Separa-les en un |]"
	, "Motor de Busca [Format: nom|URL]"
	, "Configuració basica de Cache"
	, "La cache de disc s'utilisa per a mantindre les senyes accedides constantment en la memòria per a reduir el número de llectures i escritures en el disc. µTorrent sol administrar la cache automàticament, pero pot canviar-ho des d'ací."
	, "Especificar un tamany de cache manualment:"
	, "Reduir l'us de memòria quan no se necessita la cache"
	, "Configuració Avançada de  Cache"
	, "Activar cache d'escritures de disc"
	, "Escriure blocs intactes cada 2 minuts"
	, "Escriure peces acabades inmediatament"
	, "Activar cache de llectures de disc"
	, "Apagar cache de llectura si la velocitat de pujada es baixa"
	, "Eliminar blocs vells de la cache"
	, "Aumentar el tamany de la cache automàticament quan se necessite"
	, "Desactivar finestra cache d'escritures de disc"
	, "Desactivar finestra cache de llectures de disc"
	, "Run Program"
	, "Run this program when a torrent finishes:"
	, "Run this program when a torrent changes state:"
	, "You can use these commands:\r\n%F - Name of downloaded file (for single file torrents)\r\n%D - Directory where files are saved\r\n%N - Title of torrent\r\n%S - State of torrent\r\n%L - Label\r\n%T - Tracker\r\n%M - Status message string (same as status column)\r\n%I - hex encoded info-hash\r\n\r\nState is a combination of:\r\nstarted = 1, checking = 2, start-after-check = 4,\r\nchecked = 8, error = 16, paused = 32, auto = 64, loaded = 128"
	, "Propietats del Torrent"
	, "Trackers (Separa'ls posant una llínia buida)"
	, "Ajusts de l'Ample de Banda"
	, "Vel. Màxima de Pujada (kB/s): [0: defecte]"
	, "Vel. Màxima de Descàrrega (kB/s): [0: defecte]"
	, "Número de slots de pujada: [blanc: defecte]"
	, "Compartir mentres"
	, "Invalidar ajusts per defecte"
	, "Minimum ratio (%):"
	, "Minimum seeding time (minutes):"
	, "Atres Ajusts"
	, "Compartició Inicial"
	, "Activar DHT"
	, "Intercanvi de Parelles"
	, "Feed"
	, "Feed URL:"
	, "Personalisar Àlies:"
	, "Subscripció"
	, "No descarregar automàticament tots els artículs"
	, "Descarregar automàticament tots els artículs publicats en el feed"
	, "Utilisa el filtre de cap. inteligent"
	, "Feeds||Favorits||Història||"
	, "Tots els Feeds"
	, "Configuració dels filtres"
	, "Nom:"
	, "Filtre:"
	, "No:"
	, "Guardar en:"
	, "Feed:"
	, "Calitat:"
	, "Capítul número: [eix. 1x12-14]"
	, "El filtre junta el nom original en més del nom descifrat."
	, "No començar les descarregues automàticament"
	, "Filtre Smart cap."
	, "Donar a la descàrrega la màx. prioritat"
	, "Interval mínim:"
	, "Etiqueta per als nous torrents:"
	, "Afegir RSS Feed..."
	, "Editar Feed..."
	, "Desactivar Feed"
	, "Activar Feed"
	, "Actualisar Feed"
	, "Borrar Feed"
	, "Descàrrega"
	, "Obrir URL en Navegador"
	, "Afegir a Favorits"
	, "Afegir"
	, "Borrar"
	, "TOT"
	, "(Tot)"
	, "(Coincidir Sempre)||(Coincidir una volta)||12 Hores||1 Dia||2 Dies||3 Dies||4 Dies||1 Semana||2 Semanes||3 Semanes||1 Mes||"
	, "Afegir RSS Feed"
	, "Editar RSS Feed"
	, "Remove RSS Feed(s)"
	, "Really delete the %d selected RSS Feeds?"
	, "¿Realment vols borrar RSS Feed \"%s\"?"
	, "Nom sancer"
	, "Nom"
	, "Episodi"
	, "Format"
	, "Codec"
	, "Date"
	, "Feed"
	, "URL"
	, "IP"
	, "Port"
	, "Client"
	, "Banderes"
	, "%"
	, "Importància"
	, "Vel. Descàrrega"
	, "Vel. Pujada"
	, "Respostes"
	, "Esperat"
	, "Pujat"
	, "Descarregat"
	, "Hasherr"
	, "Vel. Descàrrega"
	, "PujaMàx"
	, "DescMàx"
	, "En Coa"
	, "Inactiu"
	, "Fet"
	, "Nom"
	, "%"
	, "Prioritat"
	, "Tamany"
	, "Botar"
	, "Baixa"
	, "Normal"
	, "Alta"
	, "Descarregat:"
	, "Pujat:"
	, "Origens:"
	, "Esperant:"
	, "Vel. Descàrrega:"
	, "Vel. Pujada:"
	, "Parelles:"
	, "Ratio:"
	, "Archiu:"
	, "Hash:"
	, "General"
	, "Transferència"
	, "%d de %d conectats (%d en l'eixam)"
	, "D:%s P:%s - %s"
	, "Copiar"
	, "Reset"
	, "Illimitat"
	, "Resoldre IPs"
	, "Get File(s)"
	, "No Descarregar"
	, "Prioritat Alta"
	, "Prioritat Baixa"
	, "Prioritat Normal"
	, "Copiar Imant URI"
	, "Eliminar Senyes"
	, "Borrar .torrent"
	, "Eliminar .torrent + Senyes"
	, "Forçar Comprovació"
	, "Forçar Inici"
	, "Etiqueta"
	, "Pausa"
	, "Propietats"
	, "Moure Avall"
	, "Moure Amunt"
	, "Eliminar"
	, "Eliminar i"
	, "Començar"
	, "Parar"
	, "Actiu"
	, "Tots"
	, "Completat"
	, "Descarregant"
	, "Inactiu"
	, "Sense Etiqueta"
	, "||Dispon.||Disponibilitat"
	, "Afegit a"
	, "Complet a"
	, "Fet"
	, "Descarregat"
	, "Vel. Descàrrega"
	, "Temps restant"
	, "Etiqueta"
	, "Nom"
	, "#"
	, "Parelles"
	, "Esperant"
	, "Origens"
	, "Origens/Parelles"
	, "Ratio"
	, "Tamany"
	, "URL orige"
	, "Estat"
	, "Pujat"
	, "Vel. Pujada"
	, "¿Estàs segur que vols eliminar els %d torrents seleccionats i les seues senyes?"
	, "¿Estàs segur que vols eliminar el torrent seleccionat i les seues senyes?"
	, "¿Estàs segur que vols eliminar els %d torrents seleccionats?"
	, "¿Estàs segur que vols eliminar el torrent seleccionat?"
	, "¿Segur que vols borrar el filtre RSS \"%s\"?"
	, "Comprovat%:.1d%%"
	, "Descarregant"
	, "Error: %s"
	, "Acabat"
	, "Pausat"
	, "En Coa"
	, "Orige en coa"
	, "Compartint"
	, "Parat"
	, "Pose una Etiqueta"
	, "Pose una nova etiqueta per als torrents seleccionats:"
	, "Nova Etiqueta..."
	, "Eliminar Etiqueta"
	, "General||Trackers||Parelles||Peces||Archius||Velocitat||Registrar||"
	, "Afegir torrent"
	, "Afegir torrent des de URL"
	, "Pausa"
	, "Preferències"
	, "Moure Avall"
	, "Moure Amunt"
	, "Eliminar"
	, "Descarregar RSS"
	, "Començar"
	, "Parar"
	, "Archiu"
	, "Afegir Torrent..."
	, "Afegir Torrent des de URL..."
	, "Opcions"
	, "Preferències"
	, "Mostrar Llista de Categories"
	, "Mostrar Llista Detallada"
	, "Mostrar Barra d'Estat"
	, "Mostrar Toolbar"
	, "Icons en Pestanyes"
	, "Ajuda"
	, "Plana Web µTorrent"
	, "Fòrums µTorrent"
	, "Send WebUI Feedback"
	, "About µTorrent WebUI"
	, "Torrents"
	, "Pausar tots els torrents"
	, "Reprendre tots els torrents"
	, "D: %s%z/s"
	, " C: %z/s"
	, " O: %z/s"
	, " T: %Z"
	, "P: %s%z/s"
	, "B"
	, "EB"
	, "GB"
	, "kB"
	, "MB"
	, "PB"
	, "TB"
	, "Avançat"
	, "Ample de banda"
	, "Conexió"
	, "Cache de Disc"
	, "Directoris"
	, "General"
	, "Planificador"
	, "En Coa"
	, "Extres UI"
	, "Configuració UI"
	, "BitTorrent"
	, "Web UI"
	, "Transfer Cap"
	, "Run Program"
	, "Mostrar Propietats||Iniciar/Parar||Obrir Carpeta||Mostrar Barra de Desc.||"
	, "Desactivat||Activat||Forçat||"
	, "(Cap)||Socks4||Socks5||HTTPS||HTTP||"
	, "Uploads||Downloads||Uploads + Downloads||"
	, "MB||GB||"
	, "1||2||5||7||10||14||15||20||21||28||30||31||"
	, "Nom"
	, "Valor"
	, "Dil||Dima||Dime||Dij||Div||Dis||Dum||"
	, "Dilluns||Dimarts||Dimecres||Dijous||Divendres||Dissabte||Dumenge||"
	, "Vel. Compl."
	, "Vel. Màxima - Utilisar llímits d'ample de banda globals"
	, "Llimitada"
	, "Llimitat- Utilisar llímits d'ample de banda especificats en el planificador"
	, "Només compartir"
	, "Només compartir - Només pujar senyes (inclosos els incomplets)"
	, "Apagar"
	, "Apagar - Parar tots els torrents que no estiguen forçats"
	, "<= %d hores"
	, "(Ignorar)"
	, "<= %d minuts"
	, "%dd %dh"
	, "%dh %dm"
	, "%dm %ds"
	, "%ds"
	, "%dw %dd"
	, "%dy %dw"
];