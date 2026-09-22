"use strict";

/* ============================================================
   AUTOMETA - APP.JS
   Leitura da planilha + metas diárias + envio de e-mails
   ============================================================ */


/* ============================================================
   E-MAILS DAS LOJAS - TESTE
   ============================================================ */

const EMAILS_LOJAS = {
    "001": "loja01@cobasi.com.br",
    "002": "loja02@cobasi.com.br",
    "003": "loja03@cobasi.com.br",
    "004": "loja04@cobasi.com.br",
    "005": "loja05@cobasi.com.br",
    "006": "loja06@cobasi.com.br",
    "007": "loja07@cobasi.com.br",

    "009": "loja09@cobasi.com.br",
    "010": "loja10@cobasi.com.br",
    "011": "loja11@cobasi.com.br",
    "012": "loja12@cobasi.com.br",

    "014": "loja14@cobasi.com.br",
    "015": "loja15@cobasi.com.br",
    "016": "loja16@cobasi.com.br",
    "017": "loja17@cobasi.com.br",
    "018": "loja18@cobasi.com.br",
    "019": "loja19@cobasi.com.br",

    "020": "loja20@cobasi.com.br",
    "021": "loja21@cobasi.com.br",
    "022": "loja22@cobasi.com.br",
    "023": "loja23@cobasi.com.br",
    "024": "loja24@cobasi.com.br",
    "025": "loja25@cobasi.com.br",
    "026": "loja26@cobasi.com.br",
    "027": "loja27@cobasi.com.br",
    "028": "loja28@cobasi.com.br",
    "029": "loja29@cobasi.com.br",

    "030": "loja30@cobasi.com.br",
    "031": "loja31@cobasi.com.br",
    "032": "loja32@cobasi.com.br",
    "033": "loja33@cobasi.com.br",
    "034": "loja34@cobasi.com.br",
    "035": "loja35@cobasi.com.br",
    "036": "loja36@cobasi.com.br",
    "037": "loja37@cobasi.com.br",
    "038": "loja38@cobasi.com.br",
    "039": "loja39@cobasi.com.br",

    "040": "loja40@cobasi.com.br",
    "041": "loja41@cobasi.com.br",
    "042": "loja42@cobasi.com.br",
    "043": "loja43@cobasi.com.br",
    "044": "loja44@cobasi.com.br",
    "045": "loja45@cobasi.com.br",
    "046": "loja46@cobasi.com.br",
    "047": "loja47@cobasi.com.br",
    "048": "loja48@cobasi.com.br",
    "049": "loja49@cobasi.com.br",

    "050": "loja50@cobasi.com.br",
    "051": "loja51@cobasi.com.br",

    "053": "loja53@cobasi.com.br",
    "054": "loja54@cobasi.com.br",
    "055": "loja55@cobasi.com.br",
    "056": "loja56@cobasi.com.br",
    "057": "loja57@cobasi.com.br",
    "058": "loja58@cobasi.com.br",
    "059": "loja59@cobasi.com.br",

    "060": "loja60@cobasi.com.br",
    "061": "loja61@cobasi.com.br",
    "062": "loja62@cobasi.com.br",
    "063": "loja63@cobasi.com.br",
    "064": "loja64@cobasi.com.br",
    "065": "loja65@cobasi.com.br",
    "066": "loja66@cobasi.com.br",
    "067": "loja67@cobasi.com.br",
    "068": "loja68@cobasi.com.br",
    "069": "loja69@cobasi.com.br",

    "070": "loja70@cobasi.com.br",
    "071": "loja71@cobasi.com.br",
    "072": "loja72@cobasi.com.br",
    "073": "loja73@cobasi.com.br",
    "074": "loja74@cobasi.com.br",
    "075": "loja75@cobasi.com.br",
    "076": "loja76@cobasi.com.br",
    "077": "loja77@cobasi.com.br",
    "078": "loja78@cobasi.com.br",
    "079": "loja79@cobasi.com.br",

    "080": "loja80@cobasi.com.br",
    "081": "loja81@cobasi.com.br",
    "082": "loja82@cobasi.com.br",
    "083": "loja83@cobasi.com.br",
    "084": "loja84@cobasi.com.br",
    "085": "loja85@cobasi.com.br",
    "086": "loja86@cobasi.com.br",
    "087": "loja87@cobasi.com.br",
    "088": "loja88@cobasi.com.br",
    "089": "loja89@cobasi.com.br",

    "090": "loja90@cobasi.com.br",
    "091": "loja91@cobasi.com.br",
    "092": "loja92@cobasi.com.br",
    "093": "loja93@cobasi.com.br",
    "094": "loja94@cobasi.com.br",
    "095": "loja95@cobasi.com.br",
    "096": "loja96@cobasi.com.br",
    "097": "loja97@cobasi.com.br",
    "098": "loja98@cobasi.com.br",
    "099": "loja99@cobasi.com.br",

    "100": "loja100@cobasi.com.br",
    "101": "loja101@cobasi.com.br",
    "102": "loja102@cobasi.com.br",
    "103": "loja103@cobasi.com.br",
    "104": "loja104@cobasi.com.br",
    "105": "loja105@cobasi.com.br",
    "106": "loja106@cobasi.com.br",
    "107": "loja107@cobasi.com.br",
    "108": "loja108@cobasi.com.br",
    "109": "loja109@cobasi.com.br",
    "110": "loja110@cobasi.com.br",
    "111": "loja111@cobasi.com.br",
    "112": "loja112@cobasi.com.br",
    "113": "loja113@cobasi.com.br",
    "114": "loja114@cobasi.com.br",
    "115": "loja115@cobasi.com.br",
    "116": "loja116@cobasi.com.br",
    "117": "loja117@cobasi.com.br",
    "118": "loja118@cobasi.com.br",
    "119": "loja119@cobasi.com.br",
    "120": "loja120@cobasi.com.br",
    "121": "loja121@cobasi.com.br",
    "122": "loja122@cobasi.com.br",
    "123": "loja123@cobasi.com.br",
    "124": "loja124@cobasi.com.br",
    "125": "loja125@cobasi.com.br",
    "126": "loja126@cobasi.com.br",
    "127": "loja127@cobasi.com.br",
    "128": "loja128@cobasi.com.br",
    "129": "loja129@cobasi.com.br",
    "130": "loja130@cobasi.com.br",
    "131": "loja131@cobasi.com.br",
    "132": "loja132@cobasi.com.br",
    "133": "loja133@cobasi.com.br",
    "134": "loja134@cobasi.com.br",
    "135": "loja135@cobasi.com.br",
    "136": "loja136@cobasi.com.br",
    "137": "loja137@cobasi.com.br",
    "138": "loja138@cobasi.com.br",
    "139": "loja139@cobasi.com.br",
    "140": "loja140@cobasi.com.br",
    "141": "loja141@cobasi.com.br",
    "142": "loja142@cobasi.com.br",
    "143": "loja143@cobasi.com.br",
    "144": "loja144@cobasi.com.br",
    "145": "loja145@cobasi.com.br",
    "146": "loja146@cobasi.com.br",
    "147": "loja147@cobasi.com.br",
    "148": "loja148@cobasi.com.br",
    "149": "loja149@cobasi.com.br",
    "150": "loja150@cobasi.com.br",
    "151": "loja151@cobasi.com.br",
    "152": "loja152@cobasi.com.br",
    "153": "loja153@cobasi.com.br",
    "154": "loja154@cobasi.com.br",
    "155": "loja155@cobasi.com.br",
    "156": "loja156@cobasi.com.br",
    "157": "loja157@cobasi.com.br",
    "158": "loja158@cobasi.com.br",
    "159": "loja159@cobasi.com.br",
    "160": "loja160@cobasi.com.br",
    "161": "loja161@cobasi.com.br",
    "162": "loja162@cobasi.com.br",
    "163": "loja163@cobasi.com.br",
    "164": "loja164@cobasi.com.br",
    "165": "loja165@cobasi.com.br",
    "166": "loja166@cobasi.com.br",
    "167": "loja167@cobasi.com.br",
    "168": "loja168@cobasi.com.br",
    "169": "loja169@cobasi.com.br",
    "170": "loja170@cobasi.com.br",
    "171": "loja171@cobasi.com.br",
    "172": "loja172@cobasi.com.br",
    "173": "loja173@cobasi.com.br",
    "174": "loja174@cobasi.com.br",
    "175": "loja175@cobasi.com.br",
    "176": "loja176@cobasi.com.br",

    "178": "loja178@cobasi.com.br",
    "179": "loja179@cobasi.com.br",
    "180": "loja180@cobasi.com.br",
    "181": "loja181@cobasi.com.br",
    "182": "loja182@cobasi.com.br",
    "183": "loja183@cobasi.com.br",
    "184": "loja184@cobasi.com.br",
    "185": "loja185@cobasi.com.br",
    "186": "loja186@cobasi.com.br",
    "187": "loja187@cobasi.com.br",
    "188": "loja188@cobasi.com.br",
    "189": "loja189@cobasi.com.br",
    "190": "loja190@cobasi.com.br",
    "191": "loja191@cobasi.com.br",
    "192": "loja192@cobasi.com.br",
    "193": "loja193@cobasi.com.br",
    "194": "loja194@cobasi.com.br",
    "195": "loja195@cobasi.com.br",
    "196": "loja196@cobasi.com.br",
    "197": "loja197@cobasi.com.br",
    "198": "loja198@cobasi.com.br",
    "199": "loja199@cobasi.com.br",

    "350": "loja350@cobasi.com.br",
    "351": "loja351@cobasi.com.br",
    "352": "loja352@cobasi.com.br",
    "353": "loja353@cobasi.com.br",
    "354": "loja354@cobasi.com.br",
    "355": "loja355@cobasi.com.br",
    "356": "loja356@cobasi.com.br",
    "357": "loja357@cobasi.com.br",
    "358": "loja358@cobasi.com.br",
    "359": "loja359@cobasi.com.br",
    "360": "loja360@cobasi.com.br",
    "361": "loja361@cobasi.com.br",
    "362": "loja362@cobasi.com.br",
    "363": "loja363@cobasi.com.br",
    "364": "loja364@cobasi.com.br",
    "365": "loja365@cobasi.com.br",

    "367": "loja367@cobasi.com.br",
    "368": "loja368@cobasi.com.br",
    "369": "loja369@cobasi.com.br",
    "370": "loja370@cobasi.com.br",
    "371": "loja371@cobasi.com.br",
    "372": "loja372@cobasi.com.br",
    "373": "loja373@cobasi.com.br",
    "374": "loja374@cobasi.com.br",
    "375": "loja375@cobasi.com.br",
    "376": "loja376@cobasi.com.br",
    "377": "loja377@cobasi.com.br",

    "379": "loja379@cobasi.com.br",
    "380": "loja380@cobasi.com.br",
    "381": "loja381@cobasi.com.br",
    "382": "loja382@cobasi.com.br",
    "383": "loja383@cobasi.com.br",
    "384": "loja384@cobasi.com.br",
    "385": "loja385@cobasi.com.br",
    "386": "loja386@cobasi.com.br",

    "388": "loja388@cobasi.com.br",
    "389": "loja389@cobasi.com.br",
    "390": "loja390@cobasi.com.br",
    "391": "loja391@cobasi.com.br",
    "392": "loja392@cobasi.com.br",
    "393": "loja393@cobasi.com.br",
    "394": "loja394@cobasi.com.br",
    "395": "loja395@cobasi.com.br",
    "396": "loja396@cobasi.com.br",
    "397": "loja397@cobasi.com.br",
    "398": "loja398@cobasi.com.br",
    "399": "loja399@cobasi.com.br",
    "400": "loja400@cobasi.com.br",
    "401": "loja401@cobasi.com.br",
    "402": "loja402@cobasi.com.br",
    "403": "loja403@cobasi.com.br",
    "404": "loja404@cobasi.com.br",
    "405": "loja405@cobasi.com.br",
    "406": "loja406@cobasi.com.br",
    "407": "loja407@cobasi.com.br",
    "408": "loja408@cobasi.com.br",
    "409": "loja409@cobasi.com.br",
    "410": "loja410@cobasi.com.br",
    "411": "loja411@cobasi.com.br",
    "412": "loja412@cobasi.com.br",
    "413": "loja413@cobasi.com.br",
    "414": "loja414@cobasi.com.br",
    "415": "loja415@cobasi.com.br",
}

/* ============================================================
   VÍNCULO LOJA -> PET ANJO
   A posição da linha NÃO é usada. O código do Pet Anjo é a chave.
   ============================================================ */
const MAPA_PET_ANJO = {
    "001": ["801"], "003": ["803"], "005": ["805"],
    "006": ["8060"], "008": ["8087"], "002": ["8028"],
    "004": ["8044"], "011": ["811"], "018": ["818"],
    "019": ["819"], "020": ["820"], "021": ["821"],
    "024": ["8249"], "025": ["8257"], "026": ["8265"],
    "030": ["8303"], "033": ["8338"], "036": ["8362"],
    "037": ["8370"], "038": ["8389"], "042": ["8427"],
    "043": ["8435"], "044": ["8443"], "049": ["8494"],
    "050": ["8508"], "051": ["8516"], "052": ["8524"],
    "053": ["8532"], "055": ["8559"], "060": ["8605"],
    "061": ["8613"], "063": ["8630"], "064": ["8648"],
    "065": ["8656"], "069": ["8699"], "070": ["870"],
    "071": ["8710"], "073": ["8737"], "074": ["8745"],
    "075": ["8753"], "076": ["8761"], "077": ["877"],
    "078": ["8788"], "079": ["8796"], "081": ["881"],
    "082": ["8826"], "083": ["8834"], "084": ["8842"],
    "086": ["8869"], "088": ["8885"], "090": ["8907"],
    "091": ["8915"], "093": ["8931"], "094": ["8940"],
    "095": ["8958"], "096": ["8966"], "098": ["8982"],
    "099": ["8990"], "100": ["8133"], "102": ["9024"],
    "103": ["9032"], "104": ["9040"], "106": ["9067"],
    "110": ["7102"], "115": ["9156"], "116": ["9164"],
    "118": ["9180"], "119": ["9199"], "122": ["9229"],
    "129": ["929"], "130": ["9300"], "131": ["9318"],
    "133": ["9334"], "135": ["9350"], "136": ["9369"],
    "137": ["9377"], "138": ["9385"], "139": ["9393"],
    "141": ["9415"], "143": ["9431"], "146": ["9466"],
    "147": ["9474"], "148": ["9482"], "149": ["9490"],
    "150": ["9504"], "156": ["956"], "157": ["9571"],
    "158": ["9580"], "159": ["9598"], "162": ["9628"],
    "163": ["9636"], "164": ["9644"], "167": ["9679"],
    "168": ["9687"], "170": ["9709"], "171": ["6629"],
    "172": ["9725"], "173": ["9733"], "174": ["9741"],
    "176": ["9768"], "178": ["9784"], "180": ["9806"],
    "181": ["9814"], "182": ["9822"], "184": ["9849"],
    "188": ["9881"], "189": ["9890"], "191": ["9911"],
    "192": ["9920"], "193": ["9938"], "196": ["9962"],
    "198": ["9989"], "199": ["9997"], "379": ["7790"],
    "393": ["7935"], "383": ["7838"], "391": ["7919"],
    "394": ["7943"], "398": ["7480"], "375": ["7757"],
    "402": ["7200"], "351": ["7510"], "401": ["7013"],
    "408": ["668"], "407": ["6670"], "406": ["6661"],
    "410": ["6700"], "411": ["671"], "415": ["6750"],
    "412": ["672"]
};



/* ============================================================
   ESTADO DA APLICAÇÃO
   ============================================================ */

const estado = {
    usuarioSelecionado: null,
    arquivoSelecionado: null,

    dadosPlanilha: [],
    metasProcessadas: [],

    metasEnviadas: 0,
    totalLojas: 0,

    processamentoAtivo: false
};


/* ============================================================
   ELEMENTOS DO DOM
   ============================================================ */

const DOM = {};


/* ============================================================
   INICIALIZAÇÃO
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

    mapearElementos();
    configurarEventos();

    // NOVO FLUXO: não existe mais tela de seleção manual.
    // O servidor consulta o Outlook instalado na máquina e identifica
    // automaticamente qual das três contas autorizadas está disponível.
    estado.usuarioSelecionado = null;
    entrarTelaPrincipal();

    console.log("======================================");
    console.log("AUTOMETA INICIADO");
    console.log("======================================");
    console.log("Identificando usuário pelo Outlook...");

    atualizarElementosDeData();
    detectarUsuarioOutlook();
});


/* ============================================================
   MAPEAR ELEMENTOS
   ============================================================ */

function mapearElementos() {

    DOM.telaPrincipal =
        document.getElementById("mainScreen");

    DOM.usuarioAtual =
        document.getElementById("currentUser");

    DOM.usuarioAtualEmail =
        document.getElementById("currentUserEmail");

    DOM.profileAvatar =
        document.getElementById("profileAvatar");

    DOM.welcomeTitle =
        document.getElementById("welcomeTitle");

    DOM.inputPlanilha =
        document.getElementById("fileInput");

    DOM.areaUpload =
        document.getElementById("dropArea");

    DOM.btnSelecionarArquivo =
        document.getElementById("selectFile");

    DOM.btnProcessar =
        document.getElementById("processBtn") ||
        document.getElementById("btnProcessar");

    DOM.btnEnviarTodas =
        document.getElementById("sendAll");

    DOM.tabela =
        document.getElementById("storesTable");

    DOM.tabelaBody =
        document.querySelector("#storesTable tbody");

    DOM.totalLojas =
        document.getElementById("totalStores") ||
        document.getElementById("totalLojas");

    DOM.totalMetas =
        document.getElementById("totalGoals") ||
        document.getElementById("totalMetas");

    DOM.metasEnviadas =
        document.getElementById("sentGoals") ||
        document.getElementById("metasEnviadas");

    DOM.enviosConcluidos =
        document.getElementById("completedSends") ||
        document.getElementById("enviosConcluidos");

    DOM.ultimoEnvio =
        document.getElementById("lastSend") ||
        document.getElementById("ultimoEnvio");

    DOM.status =
        document.getElementById("statusMessage") ||
        document.getElementById("status");

    DOM.summaryStores = document.getElementById("summaryStores");
    DOM.summaryValid = document.getElementById("summaryValid");
    DOM.summaryErrors = document.getElementById("summaryErrors");
    DOM.currentClock = document.getElementById("currentClock");
}


/* ============================================================
   IDENTIFICAR USUÁRIO PELO OUTLOOK
   ============================================================ */

async function detectarUsuarioOutlook() {
    try {
        console.log("Consultando a conta padrão do Outlook...");

        const resposta = await fetch("/api/usuario-outlook", {
            method: "GET",
            cache: "no-store",
            headers: { "Accept": "application/json" }
        });

        const texto = await resposta.text();
        console.log("RESPOSTA /api/usuario-outlook:", texto);

        let resultado;
        try {
            resultado = JSON.parse(texto);
        } catch {
            throw new Error("O servidor não retornou JSON válido. Abra o sistema por http://127.0.0.1:5000");
        }

        if (!resposta.ok || !resultado.success || !resultado.usuario) {
            throw new Error(resultado.message || "Não foi possível identificar a conta padrão do Outlook.");
        }

        const usuario = {
            nome: String(resultado.usuario.nome || "Usuário Outlook").trim(),
            email: String(resultado.usuario.email || "").trim()
        };

        estado.usuarioSelecionado = usuario;
        mostrarUsuarioSelecionado(usuario);
        entrarTelaPrincipal();

        console.log("USUÁRIO DO OUTLOOK:", usuario.nome);
        console.log("CONTA PADRÃO DO OUTLOOK:", usuario.email);

        mostrarStatus(
            `Outlook identificado: ${usuario.email || usuario.nome}.`,
            "success"
        );

    } catch (erro) {
        console.error("ERRO AO IDENTIFICAR OUTLOOK:", erro);
        estado.usuarioSelecionado = null;

        if (DOM.usuarioAtual) DOM.usuarioAtual.textContent = "Outlook não identificado";
        if (DOM.usuarioAtualEmail) DOM.usuarioAtualEmail.textContent = "Abra o Outlook e mantenha o servidor ativo";
        if (DOM.profileAvatar) DOM.profileAvatar.textContent = "?";
        if (DOM.welcomeTitle) DOM.welcomeTitle.textContent = "Outlook não identificado";

        mostrarStatus(
            "Não foi possível identificar a conta padrão do Outlook. Verifique se o Outlook está aberto.",
            "error"
        );
    }
}


/* ============================================================
   MOSTRAR USUÁRIO
   ============================================================ */

function mostrarUsuarioSelecionado(usuario) {

    if (DOM.usuarioAtual) {
        DOM.usuarioAtual.textContent =
            usuario.nome;
    }

    if (DOM.usuarioAtualEmail) {
        DOM.usuarioAtualEmail.textContent =
            usuario.email;
    }

    if (DOM.profileAvatar) {
        DOM.profileAvatar.textContent =
            obterIniciaisUsuario(usuario.nome);
    }

    if (DOM.welcomeTitle) {
        DOM.welcomeTitle.textContent =
            `Olá, ${usuario.nome}!`;
    }
}


/* ============================================================
   ENTRAR NO DASHBOARD
   ============================================================ */

function entrarTelaPrincipal() {
    if (DOM.telaPrincipal) {
        DOM.telaPrincipal.classList.remove("hidden");
        DOM.telaPrincipal.classList.add("active");
        DOM.telaPrincipal.style.display = "";
    }
}


/* ============================================================
   EVENTOS
   ============================================================ */

function configurarEventos() {

    /* BOTÃO SELECIONAR ARQUIVO */

    if (
        DOM.btnSelecionarArquivo &&
        DOM.inputPlanilha
    ) {

        DOM.btnSelecionarArquivo.addEventListener(
            "click",
            evento => {

                evento.preventDefault();

                DOM.inputPlanilha.click();
            }
        );
    }


    /* INPUT DA PLANILHA */

    if (DOM.inputPlanilha) {

        DOM.inputPlanilha.addEventListener(
            "change",
            async evento => {

                const arquivo =
                    evento.target.files &&
                    evento.target.files[0];

                if (!arquivo) {
                    return;
                }

                const valido =
                    selecionarArquivo(arquivo);

                if (!valido) {
                    return;
                }

                await processarPlanilha();
            }
        );
    }


    /* BOTÃO PROCESSAR */

    if (DOM.btnProcessar) {

        DOM.btnProcessar.addEventListener(
            "click",
            processarPlanilha
        );
    }


    /* ENVIAR TODAS */

    if (DOM.btnEnviarTodas) {

        DOM.btnEnviarTodas.addEventListener(
            "click",
            enviarTodasMetas
        );
    }


    configurarDragAndDrop();
}


/* ============================================================
   DRAG AND DROP
   ============================================================ */

function configurarDragAndDrop() {

    if (!DOM.areaUpload) {
        return;
    }

    ["dragenter", "dragover"].forEach(tipo => {

        DOM.areaUpload.addEventListener(
            tipo,
            evento => {

                evento.preventDefault();
                evento.stopPropagation();

                DOM.areaUpload.classList.add(
                    "drag-active"
                );
            }
        );
    });


    ["dragleave", "drop"].forEach(tipo => {

        DOM.areaUpload.addEventListener(
            tipo,
            evento => {

                evento.preventDefault();
                evento.stopPropagation();

                DOM.areaUpload.classList.remove(
                    "drag-active"
                );
            }
        );
    });


    DOM.areaUpload.addEventListener(
        "drop",
        async evento => {

            const arquivos =
                evento.dataTransfer.files;

            if (!arquivos || !arquivos.length) {
                return;
            }

            const arquivo = arquivos[0];

            if (!selecionarArquivo(arquivo)) {
                return;
            }

            await processarPlanilha();
        }
    );
}


/* ============================================================
   SELECIONAR ARQUIVO
   ============================================================ */

function selecionarArquivo(arquivo) {

    const nome =
        String(arquivo.name || "").toLowerCase();

    const permitido =
        nome.endsWith(".xlsx") ||
        nome.endsWith(".xls") ||
        nome.endsWith(".csv");

    if (!permitido) {

        alert(
            "Selecione uma planilha .xlsx, .xls ou .csv."
        );

        return false;
    }

    estado.arquivoSelecionado = arquivo;

    const nomeVisual =
        document.querySelector(".file-name strong");

    const detalheVisual =
        document.querySelector(".file-name span");

    if (nomeVisual) {
        nomeVisual.textContent =
            arquivo.name;
    }

    if (detalheVisual) {

        detalheVisual.textContent =
            `${(arquivo.size / 1024).toFixed(1)} KB`;
    }

    return true;
}


/* ============================================================
   PROCESSAR PLANILHA
   ============================================================ */

async function processarPlanilha() {

    if (estado.processamentoAtivo) {
        return;
    }

    if (!estado.arquivoSelecionado) {

        alert(
            "Primeiro selecione uma planilha."
        );

        return;
    }

    estado.processamentoAtivo = true;

    mostrarStatus(
        "Lendo a planilha...",
        "info"
    );

    try {

        const arquivo =
            estado.arquivoSelecionado;

        const extensao =
            arquivo.name
                .split(".")
                .pop()
                .toLowerCase();

        let dados;

        if (extensao === "csv") {
            dados = await lerCSV(arquivo);
        } else {
            dados = await lerExcelPeloServidor(arquivo);
        }


        console.log(
            "Linhas encontradas:",
            dados.length
        );


        if (!dados.length) {

            throw new Error(
                "A planilha não possui dados."
            );
        }


        estado.dadosPlanilha =
            dados;


        console.log(
            "Primeira linha lida:",
            dados[0]
        );


        const metas =
            transformarDadosEmMetas(dados);


        console.log(
            "METAS PROCESSADAS:",
            metas
        );


        if (!metas.length) {

            throw new Error(
                "Nenhuma filial com metas diárias foi encontrada."
            );
        }


        estado.metasProcessadas =
            metas;

        estado.totalLojas =
            metas.length;

        estado.metasEnviadas = 0;

        if (DOM.summaryStores) DOM.summaryStores.textContent = metas.length;
        if (DOM.summaryValid) DOM.summaryValid.textContent = metas.filter(m => m.email).length;
        if (DOM.summaryErrors) DOM.summaryErrors.textContent = metas.filter(m => !m.email).length;

        renderizarTabela();

        atualizarDashboard();


        const totalDias =
            metas.reduce(
                (total, meta) =>
                    total + meta.quantidadeDias,
                0
            );


        mostrarStatus(
            `${metas.length} filial(is) encontrada(s), com ${totalDias} meta(s) diária(s).`,
            "success"
        );


        console.log(
            "======================================"
        );

        console.log(
            "PLANILHA PROCESSADA COM SUCESSO"
        );

        console.log(
            "Lojas:",
            metas.length
        );

        console.log(
            "======================================"
        );

    } catch (erro) {

        console.error(
            "ERRO AO PROCESSAR PLANILHA:",
            erro
        );

        mostrarStatus(
            erro.message ||
            "Erro ao processar a planilha.",
            "error"
        );

        alert(
            erro.message ||
            "Erro ao processar a planilha."
        );

    } finally {

        estado.processamentoAtivo = false;
    }
}


/* ============================================================
   LER EXCEL PELO SERVIDOR FLASK
   Evita depender de CDN/SheetJS na máquina corporativa.
   ============================================================ */
async function lerExcelPeloServidor(arquivo) {
    const formData = new FormData();
    formData.append("arquivo", arquivo, arquivo.name);

    console.log("Enviando planilha para leitura no servidor...");

    const resposta = await fetch("/api/ler-planilha", {
        method: "POST",
        body: formData,
        cache: "no-store"
    });

    const texto = await resposta.text();
    console.log("RESPOSTA /api/ler-planilha:", texto.slice(0, 1000));

    let resultado;
    try {
        resultado = JSON.parse(texto);
    } catch {
        throw new Error("O servidor não retornou JSON válido ao ler a planilha.");
    }

    if (!resposta.ok || !resultado.success) {
        throw new Error(resultado.message || "Erro ao ler a planilha no servidor.");
    }

    console.log("Aba selecionada pelo servidor:", resultado.aba);
    console.log("Linha do cabeçalho:", resultado.linha_cabecalho);

    return Array.isArray(resultado.dados) ? resultado.dados : [];
}

/* ============================================================
   IDENTIFICAR COLUNAS DE DATA
   ============================================================ */

function temColunasDeData(matriz) {

    return matriz.some(linha => {

        if (!Array.isArray(linha)) {
            return false;
        }

        return linha.some(valor =>
            !!normalizarDataCabecalho(valor)
        );
    });
}


/* ============================================================
   ENCONTRAR CABEÇALHO
   ============================================================ */

function encontrarLinhaCabecalho(matriz) {

    for (
        let i = 0;
        i < Math.min(matriz.length, 50);
        i++
    ) {

        const linha =
            matriz[i] || [];


        const valores =
            linha.map(valor =>
                normalizarTexto(valor)
            );


        const possuiFilial =
            valores.some(valor =>
                [
                    "filial",
                    "codigo filial",
                    "codigo da filial",
                    "loja",
                    "codigo loja",
                    "codigo da loja"
                ].includes(valor)
            );


        const quantidadeDatas =
            linha.filter(valor =>
                !!normalizarDataCabecalho(valor)
            ).length;


        console.log(
            `Linha ${i}: filial=${possuiFilial}, datas=${quantidadeDatas}`
        );


        /*
           NO SEU ARQUIVO:
           Filial | Grupo de Loja | REGIÃO | Regional |
           Meta de 08/2026 | Venda | % | 01/08/2026...
        */

        if (
            possuiFilial &&
            quantidadeDatas >= 1
        ) {

            return i;
        }
    }


    return -1;
}


/* ============================================================
   LER CSV
   ============================================================ */

function lerCSV(arquivo) {

    return new Promise((resolve, reject) => {

        const reader =
            new FileReader();


        reader.onload =
            evento => {

                try {

                    const texto =
                        evento.target.result;


                    const linhas =
                        texto
                            .split(/\r?\n/)
                            .filter(
                                linha =>
                                    linha.trim()
                            );


                    if (!linhas.length) {

                        resolve([]);

                        return;
                    }


                    const cabecalhos =
                        separarCSV(linhas[0]);


                    const dados =
                        linhas
                            .slice(1)
                            .map(linha => {

                                const valores =
                                    separarCSV(linha);

                                const objeto = {};


                                cabecalhos.forEach(
                                    (cabecalho, index) => {

                                        objeto[cabecalho] =
                                            valores[index] || "";
                                    }
                                );


                                return objeto;
                            });


                    resolve(dados);

                } catch (erro) {

                    reject(erro);
                }
            };


        reader.onerror =
            () => {

                reject(
                    new Error(
                        "Erro ao ler CSV."
                    )
                );
            };


        reader.readAsText(
            arquivo,
            "UTF-8"
        );
    });
}


/* ============================================================
   SEPARAR CSV
   ============================================================ */

function separarCSV(linha) {

    const resultado = [];

    let atual = "";

    let dentroAspas = false;


    for (
        let i = 0;
        i < linha.length;
        i++
    ) {

        const caractere =
            linha[i];


        if (caractere === '"') {

            if (
                dentroAspas &&
                linha[i + 1] === '"'
            ) {

                atual += '"';

                i++;

            } else {

                dentroAspas =
                    !dentroAspas;
            }

            continue;
        }


        if (
            (
                caractere === "," ||
                caractere === ";"
            ) &&
            !dentroAspas
        ) {

            resultado.push(
                atual.trim()
            );

            atual = "";

        } else {

            atual += caractere;
        }
    }


    resultado.push(
        atual.trim()
    );


    return resultado;
}


/* ============================================================
   TRANSFORMAR PLANILHA EM METAS
   ============================================================ */

function transformarDadosEmMetas(dados) {
    if (!Array.isArray(dados)) {
        return [];
    }

    // Primeiro indexamos TODAS as linhas Pet Anjo pelo código completo.
    const petAnjoPorCodigo = {};

    dados.forEach(linha => {
        const grupo = normalizarTexto(
            encontrarValor(linha, ["GRUPO DE LOJA", "GRUPO", "TIPO"])
        );

        const filial = encontrarValor(linha, [
            "FILIAL", "CODIGO FILIAL", "CODIGO DA FILIAL",
            "LOJA", "CODIGO LOJA", "CODIGO DA LOJA"
        ]);

        const parecePet =
            grupo.includes("pet anjo") ||
            normalizarTexto(filial).includes("pet anjo");

        if (!parecePet) return;

        const codigoPet = extrairCodigoPetAnjo(filial);
        if (!codigoPet) return;

        const metas = extrairMetasDiariasDaLinha(linha);
        if (Object.keys(metas).length) {
            petAnjoPorCodigo[codigoPet] = metas;
            console.log(`PET ANJO INDEXADO: ${codigoPet}`, metas);
        }
    });

    return dados
        .map((linha, index) => {
            const filial = encontrarValor(linha, [
                "FILIAL", "CODIGO FILIAL", "CODIGO DA FILIAL",
                "LOJA", "CODIGO LOJA", "CODIGO DA LOJA"
            ]);

            if (!filial) return null;

            const grupo = normalizarTexto(
                encontrarValor(linha, ["GRUPO DE LOJA", "GRUPO", "TIPO"])
            );

            // Não transforma as próprias linhas Pet Anjo em lojas destinatárias.
            if (grupo.includes("pet anjo") || normalizarTexto(filial).includes("pet anjo")) {
                return null;
            }

            const codigo = extrairCodigoFilial(filial);
            if (!codigo) return null;

            const emailPlanilha = encontrarValor(linha, [
                "EMAIL", "E-MAIL", "EMAIL LOJA", "E-MAIL LOJA",
                "EMAIL DA LOJA", "E-MAIL DA LOJA"
            ]);

            const email = emailPlanilha || encontrarEmailLoja(codigo, filial);

            const metasDiarias = extrairMetasDiariasDaLinha(linha);
            const datas = ordenarDatas(Object.keys(metasDiarias));
            if (!datas.length) return null;

            const metasOrdenadas = {};
            datas.forEach(data => metasOrdenadas[data] = metasDiarias[data]);

            const petCodes = MAPA_PET_ANJO[codigo] || [];
            const servicosDiarios = {};
            const detalhesPet = [];

            datas.forEach(data => {
                let totalServico = 0;

                petCodes.forEach(codigoPet => {
                    const metasPet = petAnjoPorCodigo[codigoPet];
                    if (metasPet && metasPet[data] !== undefined) {
                        totalServico += converterNumero(metasPet[data]);
                    }
                });

                // Para lojas sem Pet Anjo, a coluna SERVIÇO fica zero.
                servicosDiarios[data] = totalServico;
            });

            petCodes.forEach(codigoPet => {
                detalhesPet.push({
                    codigo: codigoPet,
                    encontrado: !!petAnjoPorCodigo[codigoPet]
                });
            });

            const quantidadeDias = datas.length;
            const mes = obterMesDasMetas(metasOrdenadas);

            console.log(`FILIAL ${codigo}: ${quantidadeDias} dias encontrados`);
            console.log(`E-MAIL ${codigo}:`, email || "SEM E-MAIL");
            console.log(`PET ANJO ${codigo}:`, petCodes.length ? petCodes : "NENHUM");

            return {
                id: codigo,
                codigo,
                loja: filial,
                email,
                metasDiarias: metasOrdenadas,
                servicosDiarios,
                petAnjo: petCodes,
                petAnjoDetalhes: detalhesPet,
                quantidadeDias,
                mes,
                status: email ? "Pendente" : "Sem e-mail",
                erro: "",
                enviadoEm: null
            };
        })
        .filter(Boolean);
}

function extrairMetasDiariasDaLinha(linha) {
    const resultado = {};

    Object.keys(linha || {}).forEach(coluna => {
        const data = normalizarDataCabecalho(coluna);
        if (!data) return;

        const valor = linha[coluna];
        if (valor === null || valor === undefined || String(valor).trim() === "") {
            return;
        }

        resultado[data] = String(valor).trim();
    });

    return resultado;
}

function converterNumero(valor) {
    if (typeof valor === "number") return valor;
    let texto = String(valor ?? "").trim();
    if (!texto) return 0;

    if (texto.includes(",") && texto.includes(".")) {
        texto = texto.replace(/\./g, "").replace(",", ".");
    } else if (texto.includes(",")) {
        texto = texto.replace(",", ".");
    }

    const numero = Number(texto);
    return Number.isFinite(numero) ? numero : 0;
}

/* ============================================================
   NORMALIZAR DATA DO CABEÇALHO
   ============================================================ */

function normalizarDataCabecalho(valor) {

    if (
        valor === undefined ||
        valor === null
    ) {

        return "";
    }


    let texto =
        String(valor).trim();


    /*
       Aceita:

       01/08/2026
       1/8/2026
       01-08-2026
       01.08.2026
       01/08/26
    */

    const match =
        texto.match(
            /^(\d{1,2})[\/.\-](\d{1,2})[\/.\-](\d{2,4})$/
        );


    if (!match) {
        return "";
    }


    const dia =
        Number(match[1]);


    const mes =
        Number(match[2]);


    let ano =
        Number(match[3]);


    if (ano < 100) {
        ano += 2000;
    }


    if (
        dia < 1 ||
        dia > 31 ||
        mes < 1 ||
        mes > 12
    ) {

        return "";
    }


    const data =
        new Date(
            ano,
            mes - 1,
            dia
        );


    /*
       Impede datas inválidas.
    */

    if (
        data.getFullYear() !== ano ||
        data.getMonth() !== mes - 1 ||
        data.getDate() !== dia
    ) {

        return "";
    }


    return (
        String(dia).padStart(2, "0") +
        "/" +
        String(mes).padStart(2, "0") +
        "/" +
        ano
    );
}


/* ============================================================
   ORDENAR DATAS
   ============================================================ */

function ordenarDatas(datas) {

    return [...datas].sort((a, b) => {

        const A =
            a.split("/").map(Number);

        const B =
            b.split("/").map(Number);


        return (
            new Date(
                A[2],
                A[1] - 1,
                A[0]
            ) -
            new Date(
                B[2],
                B[1] - 1,
                B[0]
            )
        );
    });
}


/* ============================================================
   OBTER MÊS
   ============================================================ */

function obterMesDasMetas(metas) {

    const datas =
        Object.keys(metas || {});


    if (!datas.length) {
        return "";
    }


    const partes =
        datas[0].split("/");


    const mes =
        Number(partes[1]);


    const ano =
        partes[2];


    const nomesMeses = [
        "",
        "janeiro",
        "fevereiro",
        "março",
        "abril",
        "maio",
        "junho",
        "julho",
        "agosto",
        "setembro",
        "outubro",
        "novembro",
        "dezembro"
    ];


    return `${nomesMeses[mes]}/${ano}`;
}


/* ============================================================
   EXTRAIR CÓDIGO DA FILIAL
   ============================================================ */

function extrairCodigoFilial(valor) {
    const texto = String(valor || "").trim();
    if (!texto) return "";

    // Caso principal da planilha: "0019 - 001 - VILLA LOBOS".
    // O código da loja é o SEGUNDO bloco numérico.
    let match = texto.match(/^\d{1,6}\s*[-–]\s*(\d{1,4})\s*[-–]/);
    if (match) {
        return String(Number(match[1])).padStart(3, "0");
    }

    // "001 - VILLA LOBOS"
    match = texto.match(/^(\d{1,4})\s*[-–]/);
    if (match) {
        return String(Number(match[1])).padStart(3, "0");
    }

    // "LOJA 001", "FILIAL 001", etc.
    match = texto.match(/(?:LOJA|FILIAL|CODIGO|CÓDIGO)\s*[-:]?\s*(\d{1,6})/i);
    if (match) {
        return String(Number(match[1])).padStart(3, "0");
    }

    if (/^\d{1,6}$/.test(texto)) {
        return String(Number(texto)).padStart(3, "0");
    }

    return "";
}

function extrairCodigoPetAnjo(valor) {
    const texto = String(valor || "").trim();
    if (!texto) return "";

    // Pet Anjo na fonte: "6629 - 662 - SERV RIO VERMELHO - BA".
    const match = texto.match(/^(\d{1,6})\s*[-–]/);
    if (match) return String(Number(match[1]));

    if (/^\d{1,6}$/.test(texto)) return String(Number(texto));

    return "";
}

/* ============================================================
   ENCONTRAR E-MAIL DA LOJA
   ============================================================ */

function encontrarEmailLoja(codigo, loja) {

    const entradas =
        Object.entries(
            EMAILS_LOJAS
        );


    const candidatos = [

        codigo,

        loja,

        `LOJA ${codigo}`,

        `FILIAL ${codigo}`

    ]
        .filter(Boolean)
        .map(normalizarTexto);


    for (
        const [chave, email]
        of entradas
    ) {

        if (
            candidatos.includes(
                normalizarTexto(chave)
            )
        ) {

            return email;
        }
    }


    return "";
}


/* ============================================================
   RENDERIZAR TABELA
   ============================================================ */

function renderizarTabela() {

    if (!DOM.tabelaBody) {
        return;
    }


    const thead =
        DOM.tabela
            ? DOM.tabela.querySelector("thead")
            : null;


    if (thead) {

        thead.innerHTML = `
            <tr>
                <th>ID</th>
                <th>Loja</th>
                <th>E-mail</th>
                <th>Metas diárias</th>
                <th>Dias</th>
                <th>Status</th>
                <th>Ação</th>
            </tr>
        `;
    }


    DOM.tabelaBody.innerHTML = "";


    estado.metasProcessadas.forEach(
        (meta, index) => {

            const tr =
                document.createElement("tr");


            const metasHTML =
                Object.entries(
                    meta.metasDiarias
                )
                .map(
                    ([data, valor]) => `
                        <div style="margin-bottom:4px;">
                            <strong>
                                ${escaparHTML(data)}
                            </strong>
                            — ${escaparHTML(valor)}
                        </div>
                    `
                )
                .join("");


            const desabilitado =
                !meta.email ||
                meta.status === "Enviado" ||
                meta.status === "Enviando";


            tr.innerHTML = `

                <td>
                    ${escaparHTML(meta.codigo)}
                </td>

                <td>
                    <strong>
                        ${escaparHTML(meta.loja)}
                    </strong>
                    ${meta.petAnjo && meta.petAnjo.length ? `<div style="font-size:6px;color:#5f6f85;margin-top:3px;">Pet Anjo: ${escaparHTML(meta.petAnjo.join(", "))}</div>` : ""}
                </td>

                <td>
                    ${
                        meta.email
                            ? escaparHTML(meta.email)
                            : `<span style="color:red;">
                                Sem e-mail
                               </span>`
                    }
                </td>

                <td>

                    <div style="
                        max-height:220px;
                        overflow:auto;
                        text-align:left;
                    ">

                        ${metasHTML}

                    </div>

                </td>

                <td>
                    ${meta.quantidadeDias}
                </td>

                <td>
                    ${escaparHTML(meta.status)}
                </td>

                <td>

                    <button
                        type="button"
                        class="table-send-btn"
                        data-index="${index}"
                        ${desabilitado ? "disabled" : ""}
                    >
                        Enviar
                    </button>

                </td>
            `;


            const botao =
                tr.querySelector(
                    ".table-send-btn"
                );


            if (botao) {

                botao.addEventListener(
                    "click",
                    () => enviarMeta(index)
                );
            }


            DOM.tabelaBody.appendChild(tr);
        }
    );
}


/* ============================================================
   ENVIAR UMA META
   ============================================================ */

async function enviarMeta(index) {
    const meta = estado.metasProcessadas[index];

    if (!meta) return false;

    if (!estado.usuarioSelecionado) {
        alert("O usuário será identificado automaticamente pelo Outlook. Aguarde a identificação terminar.");
        return false;
    }

    if (!meta.email) {
        alert(`A loja ${meta.loja} não possui e-mail cadastrado.`);
        return false;
    }

    const assunto = `Metas Filial ${meta.loja}`;
    const periodoMeta = formatarPeriodoMeta(meta.mes);

    const corpo =
`Olá,

Segue as metas referente ao mês de ${periodoMeta}.

Ótimas vendas!`;

    meta.status = "Enviando";
    renderizarTabela();

    try {
        console.log("======================================");
        console.log("INICIANDO ENVIO REAL");
        console.log("Loja:", meta.loja);
        console.log("Código:", meta.codigo);
        console.log("Destinatário:", meta.email);
        console.log("Conta Outlook detectada:", estado.usuarioSelecionado.email || estado.usuarioSelecionado.nome);
        console.log("Pet Anjo:", meta.petAnjo || []);

        // O servidor gera a cópia individual do METAS.xlsx,
        // preserva as fórmulas e anexa o arquivo ao e-mail.
        const resposta = await fetch("/api/enviar-meta", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                usuarioOutlook: estado.usuarioSelecionado.nome,
                usuarioEmail: estado.usuarioSelecionado.email,
                destinatario: meta.email,
                assunto,
                corpo,
                loja: meta.loja,
                codigo: meta.codigo,
                mes: meta.mes,
                metasDiarias: meta.metasDiarias,
                servicosDiarios: meta.servicosDiarios,
                petAnjo: meta.petAnjo || []
            })
        });

        const texto = await resposta.text();
        console.log("RESPOSTA SERVIDOR:", texto);

        let resultado;
        try {
            resultado = JSON.parse(texto);
        } catch {
            throw new Error("O servidor não retornou JSON válido.\n\n" + texto);
        }

        if (!resposta.ok || !resultado.success) {
            throw new Error(resultado.message || "Erro ao enviar e-mail.");
        }

        meta.status = "Enviado";
        meta.enviadoEm = new Date().toISOString();
        meta.erro = "";
        meta.arquivoGerado = resultado.arquivo || "";

        estado.metasEnviadas++;

        renderizarTabela();
        atualizarDashboard();

        if (DOM.ultimoEnvio) {
            DOM.ultimoEnvio.textContent = new Date().toLocaleString("pt-BR");
        }

        mostrarStatus(
            `Meta da ${meta.loja} enviada com sucesso para ${meta.email}.`,
            "success"
        );

        console.log("ENVIO CONCLUÍDO COM SUCESSO");
        console.log("======================================");

        return true;

    } catch (erro) {
        console.error("ERRO COMPLETO AO ENVIAR:", erro);

        meta.status = "Erro";
        meta.erro = erro.message;

        renderizarTabela();
        mostrarStatus(`Erro ao enviar ${meta.loja}: ${erro.message}`, "error");

        alert("ERRO AO ENVIAR:\n\n" + erro.message);
        return false;
    }
}

/* ============================================================
   ENVIAR TODAS
   ============================================================ */

async function enviarTodasMetas() {

    if (!estado.usuarioSelecionado) {

        alert(
            "A conta do Outlook ainda não foi identificada. Aguarde alguns segundos e tente novamente."
        );

        return;
    }


    if (!estado.metasProcessadas.length) {

        alert(
            "Primeiro selecione uma planilha."
        );

        return;
    }


    const pendentes =
        estado.metasProcessadas
            .map(
                (meta, index) => ({
                    meta,
                    index
                })
            )
            .filter(
                item =>
                    item.meta.email &&
                    item.meta.status !== "Enviado"
            );


    if (!pendentes.length) {

        alert(
            "Não existem metas pendentes."
        );

        return;
    }


    const confirmou =
        confirm(

            `Usuário identificado pelo Outlook: ${estado.usuarioSelecionado.nome}.\n\n` +

            `Os e-mails serão enviados pela conta:\n` +

            `${estado.usuarioSelecionado.email}\n\n` +

            `Filiais: ${pendentes.length}\n\n` +

            `Cada filial receberá um único e-mail contendo todas as metas diárias do mês.\n\n` +

            `Deseja continuar?`
        );


    if (!confirmou) {
        return;
    }


    if (DOM.btnEnviarTodas) {

        DOM.btnEnviarTodas.disabled =
            true;
    }


    let sucesso = 0;

    let erro = 0;


    try {

        for (
            const item of pendentes
        ) {

            const resultado =
                await enviarMeta(
                    item.index
                );


            if (resultado) {

                sucesso++;

            } else {

                erro++;
            }


            await esperar(300);
        }


        mostrarStatus(
            `Envio concluído: ${sucesso} enviado(s), ${erro} erro(s).`,
            erro ? "warning" : "success"
        );


    } finally {

        if (DOM.btnEnviarTodas) {

            DOM.btnEnviarTodas.disabled =
                false;
        }
    }
}


function formatarPeriodoMeta(mes) {
    const texto = String(mes || "").trim();
    const match = texto.match(/^([a-zçãéêíóôú]+)\/(\d{4})$/i);
    if (match) return `${match[1]} de ${match[2]}`;
    return texto || "mês informado na planilha";
}

/* ============================================================
   DATA DA INTERFACE - SEM DATAS FIXAS
   ============================================================ */
function atualizarElementosDeData() {
    const agora = new Date();
    const textoData = agora.toLocaleDateString("pt-BR");
    const agendamento = document.getElementById("nextScheduledDate") || document.querySelector(".scheduled .date");

    if (DOM.currentClock) {
        DOM.currentClock.textContent = agora.toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit"
        });
    }
    if (agendamento) {
        const proximoMes = new Date(agora.getFullYear(), agora.getMonth() + 1, 1);
        agendamento.textContent = proximoMes.toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        }) + " às 08:00";
    }
}

/* ============================================================
   DASHBOARD
   ============================================================ */

function atualizarDashboard() {

    if (DOM.totalLojas) {

        DOM.totalLojas.textContent =
            estado.totalLojas;
    }


    /*
       TOTAL DE METAS DIÁRIAS

       Exemplo:
       3 lojas × 31 dias = 93 metas
    */

    if (DOM.totalMetas) {

        const totalMetas =
            estado.metasProcessadas.reduce(
                (total, meta) =>
                    total + meta.quantidadeDias,
                0
            );


        DOM.totalMetas.textContent =
            totalMetas;
    }


    if (DOM.metasEnviadas) {

        DOM.metasEnviadas.textContent =
            estado.metasEnviadas;
    }


    if (DOM.enviosConcluidos) {

        const total =
            estado.metasProcessadas.length;


        const percentual =
            total
                ? Math.round(
                    (
                        estado.metasEnviadas /
                        total
                    ) * 100
                )
                : 0;


        DOM.enviosConcluidos.textContent =
            `${percentual}%`;
    }
}


/* ============================================================
   LIMPAR TABELA
   ============================================================ */

function limparTabela() {

    if (!DOM.tabelaBody) {
        return;
    }


    DOM.tabelaBody.innerHTML = `

        <tr>

            <td colspan="7">
                Nenhuma planilha processada.
            </td>

        </tr>

    `;
}


/* ============================================================
   STATUS
   ============================================================ */

function mostrarStatus(mensagem, tipo) {

    console.log(
        `[${tipo}] ${mensagem}`
    );


    if (DOM.status) {

        DOM.status.textContent =
            mensagem;
    }
}


/* ============================================================
   ENCONTRAR VALOR
   ============================================================ */

function encontrarValor(
    objeto,
    possibilidades
) {

    const chaves =
        Object.keys(objeto || {});


    /*
       PRIMEIRO:
       procura correspondência exata.
    */

    for (
        const possibilidade
        of possibilidades
    ) {

        const chave =
            chaves.find(
                item =>
                    normalizarTexto(item) ===
                    normalizarTexto(possibilidade)
            );


        if (chave) {

            return String(
                objeto[chave] ?? ""
            ).trim();
        }
    }


    /*
       SEGUNDO:
       procura correspondência parcial.
    */

    for (
        const possibilidade
        of possibilidades
    ) {

        const chave =
            chaves.find(
                item =>
                    normalizarTexto(item)
                        .includes(
                            normalizarTexto(
                                possibilidade
                            )
                        )
            );


        if (chave) {

            return String(
                objeto[chave] ?? ""
            ).trim();
        }
    }


    return "";
}


/* ============================================================
   NORMALIZAR TEXTO
   ============================================================ */

function normalizarTexto(valor) {

    return String(valor ?? "")
        .normalize("NFD")
        .replace(
            /[\u0300-\u036f]/g,
            ""
        )
        .trim()
        .toLowerCase()
        .replace(
            /\s+/g,
            " "
        );
}


/* ============================================================
   INICIAIS
   ============================================================ */

function obterIniciaisUsuario(nome) {

    const partes =
        String(nome || "")
            .trim()
            .split(/\s+/)
            .filter(Boolean);


    if (!partes.length) {
        return "";
    }


    if (partes.length === 1) {

        return partes[0]
            .slice(0, 2)
            .toUpperCase();
    }


    return (
        partes[0][0] +
        partes[partes.length - 1][0]
    ).toUpperCase();
}


/* ============================================================
   ESCAPAR HTML
   ============================================================ */

function escaparHTML(valor) {

    return String(valor ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* ============================================================
   ESPERAR
   ============================================================ */

function esperar(ms) {

    return new Promise(
        resolve =>
            setTimeout(resolve, ms)
    );
}
