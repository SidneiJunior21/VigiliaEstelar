//função para fade-out do fundo preto:
window.onload = () => {
    fadein()
}
//animação para Bot1
const b1A = () => {
    const b1 = document.getElementById('b1') //identifacação do b1

    b1.onclick = b1.src = '' //combinado com o de baixo faz com q o gif resete
    b1.onclick = b1.src = './images/Botao1.gif'
}
//desativação do Bot1
const b1D = () => {
    const b1 = document.getElementById('b1') //identifacação do b1
        b1.onclick = b1.src = './images/Botao1.png' //troca o gif pelo png
}
//animação para Bot2
const b2A = () => {
    const b1 = document.getElementById('b2') //identifacação do b1

    b1.onclick = b2.src = '' //combinado com o de baixo faz com q o gif resete
    b1.onclick = b2.src = './images/Botao2.gif'
}
//desativação do Bot2
const b2D = () => {
    const b2 = document.getElementById('b2') //identifacação do b1
        b2.onclick = b2.src = './images/Botao2.png' //troca o gif pelo png
}

//animação para "X"s e resetar o jogo caso a função seja chamada 4 vezes (4 erros)
const marcaX = () => {
    if(document.getElementById('x3').style.display != 'inline'){document.getElementById('x3').style.display = 'inline'}
    else if (document.getElementById('x2').style.display != 'inline'){document.getElementById('x2').style.display = 'inline'}
    else if (document.getElementById('x1').style.display != 'inline'){document.getElementById('x1').style.display = 'inline'}
    else {
        document.getElementById("FadeOut").style.opacity = '1';
        document.getElementById("FadeOut").style.zIndex = '10';
        setTimeout(()=>location.reload(true),2000)
    }
}

//animação para a comporta do manual:
const abremanual = () => {
    document.getElementById('comportaF').style.display = 'none' //esconde a imagem estática da comporta fechada

    //define partes importantes para a função como constantes mais fáceis de serem chamadas:
    const botC = document.getElementById('botC')
    const botCGif = document.getElementById('botCGif')
    const compA = document.getElementById('comportaA')  
    const compB = document.getElementById('comportaB')

    //animação:
    if(compA.style.display != 'inline') {   //checa se o gif de abertura não está visível
        botC.disabled = true //desativa o botão (anti-spam de cliques)
        botCGif.src = '' //combinado com o de baixo faz com q o gif resete
        botCGif.src = './images/BotaoC.gif'
        compA.style.display = 'inline' //prepara para mostrar o gif da comporta abrindo
        compB.style.display = 'none' //esconde o gif da comporta fechando
        compA.src = './images/Comporta-do-Manual-abrindo.gif' //mostra o gif da comporta abrindo (forçando a recarregar pela troca do src)
        compB.src = '' //muda a src do gif da comporta fechando p forçar o recarregamento quando ele for chamado
        setTimeout(() => {compA.style.zIndex = 3; botC.disabled = false}, 420) //enquanto o gif da comporta abrindo estiver sendo reproduzido ele é exibido acima do texto (linha 33), porém ao terminar, o coloca abaixo do texto e o botão volta a ser clicável
    } else { //se o gif de abertura estiver visível, então o gif a ser reproduzido é o da comporta fechando
        botC.disabled = true //desativa o botão (anti-spam de cliques)
        botCGif.src = '' //combinado com o de baixo faz com q o gif resete
        botCGif.src = './images/BotaoC.gif'
        compA.style.zIndex = 9 //eleva o gif da comporta abrindo para a próxima chamada
        compA.style.display = 'none' //esconde o gif da comporta abrindo
        compB.style.display = 'inline' //prepara para mostrar o gif da comporta abrindo
        compA.src = '' //muda a src do gif de abertura para forçar o recarregamento na próxima chamada
        compB.src = './images/Comporta-do-Manual-fechando.gif' //exibe o gif da comporta fechando
        setTimeout(()=>{botC.disabled = false}, 420 ) //deixa o botão não clicável enquanto o gif é reproduzido

    }
}

//função para percorrer as páginas do manual:
const percorreManual = (pgs, p = 0) => {
    const setaL = document.getElementById("setaL1")
    const setaR = document.getElementById("setaR1")

    pgs[p].style.display = 'block'

    if (p === 0) {
        setaL.onclick = () => {
            pgs[p].style.display = 'none';
            percorreManual(pgs, pgs.length-1);
        }
        setaR.onclick = () => {
            pgs[p].style.display = 'none';
            percorreManual(pgs, p+1);
        }
    }
    else if (p === pgs.length-1) {
        setaL.onclick = () => {
            pgs[p].style.display = 'none';
            percorreManual(pgs, p-1);
        }
        setaR.onclick = () => {
            pgs[p].style.display = 'none';
            percorreManual(pgs, 0);
        }
    }
    else {
        setaL.onclick = () => {
            pgs[p].style.display = 'none';
            percorreManual(pgs, p-1);
        }
        setaR.onclick = () => {
            pgs[p].style.display = 'none';
            percorreManual(pgs, p+1);
        }
    }
}

const páginas = document.getElementsByClassName("página")

percorreManual(páginas)

// Funções que guiam a introdução
const preIntro = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");

    document.getElementById("transcT").innerHTML = 'Devido a acusações de traição, o antigo oficial foi... Afastado do serviço, se é que podemos falar assim. Mas não se preocupe Oficial, se não quiser ter o mesmo final que o antigo teve, faça diferente, tome as decisões certas e as coisas vão dar certo no final, o Deus-Imperador garantirá que vai dar certo.';

    // Atualiza as consequências
    //document.getElementById("consequenciasT").innerHTML = "Você se lembrou do seu juramento.";

    // Remove event listeners anteriores e adiciona os novos
    bot3.onclick = introT1;
    bot4.onclick = nadakk;
}

const introT1 = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");

    document.getElementById("transcT").innerHTML = 'E não se esqueça do juramento que você fez, "Vivo para servir, servirei até a morte. e se o imperador pedir, mesmo morto vou servir". Imagino que você saiba das responsabilidades que um Sumo Oficial Fronteiriço tem, mas mesmo assim irei relembra-lo, você decide tudo que entra e sai desse planeta, permitindo a passagem de quem deve e usando das anti-aéreas em quem tiver a entrada negada.';

    // Atualiza as consequências
    //document.getElementById("consequenciasT").innerHTML = "Você se lembrou do seu juramento.";

    // Remove event listeners anteriores e adiciona os novos
    bot3.onclick = introT2;
    bot4.onclick = preIntro;
}

const introT2 = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");

    document.getElementById("transcT").innerHTML = 'Lembre-se, ninguém que tenha a entrada negada pode simplesmente fugir, ter a entrada negada quer dizer que o Deus-Imperador nunca quis sua presença aqui e ter vindo aqui sabendo disso é heresia, e você sabe bem o que acontece com hereges, Oficial, de certo modo tem seu emprego por conta da heresia dos outros.';

    // Atualiza as consequências
    //document.getElementById("consequenciasT").innerHTML = "Você se lembrou das consequências de suas ações.";

    // Configura os próximos passos
    bot3.onclick = tutorial1;
    bot4.onclick = introT1;
}

const tutorial1 = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");

    document.getElementById("transcT").innerHTML = 'Imagino que já tenha se familiarizado com a mesa de controle, o botão de cima faz com que a entrada seja permitida, o de baixo ordena as baterias anti-aéreas a disparar, tenha em mente que não temos tempo para falhas, estamos em situação crítica e qualquer erro não será tolerado, não podemos dar chance aos hereges para que nos derrubem. O que eu estou dizendo é que não há confirmação para os botões, um clique é o necessário para ter sua mensagem passada, somente aperte o botão quando tiver certo do que fazer.';

    bot3.onclick = tutorial2;
    bot4.onclick = introT2;
}

const tutorial2 = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");

    document.getElementById("transcT").innerHTML = 'Nos próximos momentos uma frota trazendo mais soldados da guarda da casa Von Velancius chegará para garantir a ordem, permita as entradas deles, e permita assim que eles aparecerem, esses soldados são de extrema importância, em hipótese alguma dispare as baterias na frota, será executado se fizer isso. Estarei deixando você sozinho agora, sirva bem e viva bem, adeus Oficial.';

    bot3.onclick = tutorial3;
    bot4.onclick = tutorial1;
}

const tutorial3 = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");
    b1A();
    b2A();

    document.getElementById("transcT").innerHTML = '-VOCÊ VÊ NO RADAR UMA FROTA COM CERCA DE 20 NAVES, TODOS TENDO ASSINATURAS DE GALEÕES DA CASA VON VELANCIUS, LEITURAS APONTAM MAIS DE 40 CANHÕES EM CADA LADO DAS NAVES E UM TAMANHO IGUAL AO DO REGULAMENTO IMPERIAL, NENHUMA LEITURA FOI CAPAZ DE IDENTIFICAR ALGUM TIPO DE MERCADORIA ALÉM DOS SUPRIMENTOS DA NAVE, LEITURAS SUGEREM CERCA DE 70 MIL PESSOAS NA NAVE, PASSAGEM PRIORITÁRIA IDENTIFICADA-';
    document.getElementById("monitorT").innerHTML = "SISTEMA"

    bot1.onclick = () => {b1A();entrada1()};
    bot2.onclick = () => {b2A();negada1()};
    bot3.disabled = true;
    bot4.disabled = true;
}

const negada1 = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");

    document.getElementById("transcT").innerHTML = '-ORDEM DE DISPARO NEGADA, PASSAGEM PROPRITÁRIA IDENTIFICADA, PERMITA A ENTRADA-';
    espera(tutorial3)

    bot1.onclick = () => {b1A();entrada1()}
    bot2.onclick = () => {b2A();negada1()}
    bot3.disabled = true;
    bot4.disabled = true;
}

const entrada1 = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");

    document.getElementById("transcT").innerHTML = '-ENTRADA PERMITIDA-';
    espera(tarefa1)
    Dbot(bot1, bot2, bot3, bot4);

    bot1.onclick = entrada1;
    bot1.onclick = entrada1;
    bot3.disabled = true;
    bot4.disabled = true;
}
//2 trabalhos comuns até o dilema
/*const passaTarefa = (tarefas, penaliza, nT = 0) => {
   const areaT = document.getElementById("transcT")
   const bot1 = document.getElementById("bot1")
   const bot2 = document.getElementById("bot2")
   
   if (nT <= tarefas.length) {

    areaT.innerHTML = tarefas[nT].texto

    const processaClique = (resposta, mensagem) => {
        if (resposta === tarefas[nT].resposta) {
            areaT.innerHTML = mensagem
            setTimeout(passaTarefa(tarefas, nT+1), 500)
        }
        else {
            areaT.innerHTML = mensagem
            setTimeout(penaliza(), 500)
            passaTarefa(tarefas, nT+1)
        }
    }

    bot1.onclick = () => {processaClique(1, '-ACESSO PERMITIDO-');bot1.src = './images/Botao1.gif'};
    bot2.onclick = () => {processaClique(2, '-ACESSO NEGADO-');bot2.src = './images/Botao2.gif'}
    }
}
//passaTarefa(tarefas, marcaX)*/
const tarefa1 = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");
    const areaT = document.getElementById("transcT");

    areaT.innerHTML = tarefasD1[0].texto;

    bot1.onclick = () => {marcaX();areaT.innerHTML = '-ACESSO PERMITIDO-'; b1A(); espera(tarefa2)};
    bot2.onclick = () => {areaT.innerHTML = '-ACESSO NEGADO-'; b2A(); espera(tarefa2)};
    bot3.disabled = true;
    bot4.disabled = true;
}
const tarefa2 = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");
    const areaT = document.getElementById("transcT");

    areaT.innerHTML = tarefasD1[1].texto;

    bot1.onclick = () => {areaT.innerHTML = '-ACESSO PERMITIDO-'; b1A(); espera(dilema1)};
    bot2.onclick = () => {marcaX();areaT.innerHTML = '-ACESSO NEGADO-'; b2A(); espera(dilema1)};
    bot3.disabled = true;
    bot4.disabled = true;
}
//dilema do dia
const dilema1 = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");
    const areaT = document.getElementById("transcT");
    const monitorT = document.getElementById("monitorT");

    areaT.innerHTML = '-TRANSMISSÃO EM ADAMENTO-';
    espera(dilema11)

    bot1.disabled = true;
    bot2.disabled = true;
    bot3.disabled = true;
    bot4.disabled = true;
}
const dilema11 = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");
    const areaT = document.getElementById("transcT");
    const monitorT = document.getElementById("monitorT");
    bot1.disabled = false
    bot2.disabled = false

    monitorT.innerHTML = 'Capitão de Classe Raeda'
    areaT.innerHTML = 'Não atire! Por favor, nos escute, somos antigos soldados da casa RavenHawk, a casa que tinha controle do planeta antes da Lady Theodora tomar controle, estamos sem ter para onde ir, depois de nosso líder ter sido acusado e morto por traição não conseguimos encontrar trabalho em lugar nenhum, sei que somos de casas rivais e que suas ordens devem ser de atirar em nós, mas por favor tenha piedade, nossa frota esta de acordo com o regulamento, se você nós deixar entrar o sistema não irá te punir, não iremos contar para ninguém do que você fez! Por favor, tenha misericórdia e nós de a chance de encontrar abrigo no planeta novamente.'

    bot1.onclick = () => {monitorT.innerHTML = 'SISTEMA';areaT.innerHTML = '-ACESSO PERMITIDO-'; b1A(); espera(dilema1H)};
    bot2.onclick = () => {monitorT.innerHTML = 'SISTEMA' ;areaT.innerHTML = '-ACESSO NEGADO-'; b2A(); espera(dilema1D)};
    bot3.disabled = true;
    bot4.disabled = true;
}
const dilema1H = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");
    const areaT = document.getElementById("transcT");
    const monitorT = document.getElementById("monitorT");

    monitorT.innerHTML = 'SISTEMA'
    areaT.innerHTML = '-OBRIGAÇÕES DIÁRIAS CONCLUÍDAS, SAIA IMEDIATAMENTE DA SALA E RETORNE AMANHÃ, SERÁ PUNIDO DE ACORDO COM O REGULAMENTO CASO NÃO RETORNE, APROVEITE O SEU DIA, OFICIAL-'
    espera(fdia1)
}
const dilema1D = () => {
    const bot1 = document.getElementById("bot1");
    const bot2 = document.getElementById("bot2");
    const bot3 = document.getElementById("bot3");
    const bot4 = document.getElementById("bot4");
    const areaT = document.getElementById("transcT");
    const monitorT = document.getElementById("monitorT");

    monitorT.innerHTML = 'SISTEMA'
    areaT.innerHTML = '-QUANTIDADE DE DESTROÇOS EM ORBITA MUITO ALTA, CESSANDO ATIVIDADE FRONTEIRIÇA DIÁRIA, SAIA IMEDIATAMENTE DA SALA E RETORNE AMANHÃ, SERÁ PUNIDO DE ACORDO COM O REGULAMENTO CASO NÃO RETORNE, APROVEITE O SEU DIA, OFICIAL-'
    espera(fdia1)
}
//função para puxar próximo dia 
const fdia1 = () => {
    fadeout();
    espera(cdia2())
}