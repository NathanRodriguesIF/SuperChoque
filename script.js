subTitle = document.getElementById("subTitle");
function showMain() {
    main = document.getElementById("main");
    subTitle.innerText = "Clique em cada peça para obter mais informações!!!"
    main.style.opacity = 1;
}

section1 = document.getElementById("section1");
section2 = document.getElementById("section2");
section3 = document.getElementById("section3");
section4 = document.getElementById("section4");
section5 = document.getElementById("section5");


// SECTION1

contadorPlacaMae = 0
function placaMae() {
    if(contadorPlacaMae == 0) {
        section1.innerHTML += "<aside><img src='assets/Bateria.png' class='imagens' onclick='Bateria()'><p>Bateria</p></aside>"
    }
    contadorPlacaMae += 1
    window.alert("Sendo a parte mais importante do computador, a placa mãe tem a função de realizar a comunicação entre todos os componentes do computador. A placa mãe ainda pode ter outros componentes embutidos nela, ou seja, integrados, como placas de vídeo e som");
}

contadorBateria = 0
function Bateria() {
    if(contadorBateria == 0) {
        section1.innerHTML += "<aside><img src='assets/Conectores.png' class='imagens' onclick='Conectores()'><p>Conectores</p></aside>"
    }
    contadorBateria += 1
    window.alert("Possuindo características similares a de pilhas recarregáveis, baterias de íon de lítio(normalmente a mais usada em notebooks) são constituídas de 4 a 12 células de lítio que realizam o processo de carga e descarga da bateria, envolvidas pela carcaça da bateria que tem a função de proteger os componentes internos. Também é composta por uma placa controladora, que é uma placa de circuitos que se comunicam com a placa-mãe que armazena informações da bateria, tem o trabalho de interromper a carga da bateria em casos de temperaturas muito altas evitando o superaquecimento do dispositivo e informar a carga atual da bateria. Para além, o driver é essencial para o funcionamento da bateria, sendo responsável pela comunicação da placa controladora com a placa-mãe.");
}

contadorConectores = 0
function Conectores() {
    if(contadorConectores == 0) {
        section1.innerHTML += "<aside><img src='assets/Controladores.png' class='imagens' onclick='Controladores()'><p>Controladores</p></aside>"
    }
    contadorConectores += 1
    window.alert("Dentro da placa-mãe, existem diversos conectores, e cada um deles desenvolve uma função diferente, mas que no final se relacionam e conversam entre si para que a placa-mãe possa funcionar da melhor forma possível. Os Conectores para Luzes Frontais da Caixa, por exemplo, permitem conectar as luzes do painel frontal do gabinete dentro da placa-mãe. Além desse, existem os conectores para porta paralela, PS/2, USB, de encaixe, para ligar a ficha da fonte de alimentação, dentre outros. Um dos principais fatores para a rapidez de processamento do SSD é que ele não possui partes móveis, tudo ali acontece por meio de cargas elétricas. Cabe destacar ainda que é plausível utilizar um HD e SSD simultaneamente em uma máquina, dispondo então de uma maior capacidade de armazenamento de um HD junto a rapidez de um SSD. Por fim, é importante destacar que todos os modelos SSD têm o módulo de interface Flash, o controlador, o cache DRAM e a interface SATA.");
}

contadorControladores = 0
function Controladores() {
    if(contadorControladores == 0) {
        section1.innerHTML += "<aside><img src='assets/Capacitores.png' class='imagens' onclick='Capacitores()'><p>Capacitores</p></aside>"
    }
    contadorControladores += 1
    window.alert("Dentro da placa-mãe, existem diversos conectores, e cada um deles desenvolve uma função diferente, mas que no final se relacionam e conversam entre si para que a placa-mãe possa funcionar da melhor forma possível. Os Conectores para Luzes Frontais da Caixa, por exemplo, permitem conectar as luzes do painel frontal do gabinete dentro da placa-mãe. Além desse, existem os conectores para porta paralela, PS/2, USB, de encaixe, para ligar a ficha da fonte de alimentação, dentre outros. Um dos principais fatores para a rapidez de processamento do SSD é que ele não possui partes móveis, tudo ali acontece por meio de cargas elétricas. Cabe destacar ainda que é plausível utilizar um HD e SSD simultaneamente em uma máquina, dispondo então de uma maior capacidade de armazenamento de um HD junto a rapidez de um SSD. Por fim, é importante destacar que todos os modelos SSD têm o módulo de interface Flash, o controlador, o cache DRAM e a interface SATA.");
}

contadorCapacitores = 0
function Capacitores() {
    if(contadorCapacitores == 0) {
        section1.innerHTML += "<aside><img src='assets/Chipset.png' class='imagens' onclick='Chipset()'><p>Chipset</p></aside>"
    }
    contadorCapacitores += 1
    window.alert("Os capacitores são elementos fundamentais para uma ação acoplada ao funcionamento da placa-mãe. Dessa forma, eles são peças que armazenam uma quantidade de cargas elétricas em seu interior. Assim, em processos como as descargas, os capacitores vão obter a capacidade para fornecer energia suficiente e manter o fluxo correto que alimenta os outros elementos da placa-mãe dentro desse circuito.");
}

contadorChipset = 0
function Chipset() {
    if(contadorChipset == 0) {
        section1.innerHTML += "<aside><img src='assets/Bios.png' class='imagens' onclick='Bios()'><p>Bios</p></aside>"
    }
    contadorChipset += 1
    window.alert("O Northbridge é um dos dois chips que estão localizados no chipset. O chipset é um elemento responsável que auxilia na comunicação entres os componentes de um computador, ele armazena itens eletrônicos suportando-os com uma baixa qualidade. O Northbridge particularmente, é responsável por estabelecer a comunicação entre os elementos e recursos da placa-mãe, como a memória RAM, Barramento (AGP), PCI Express e a Unidade Central de Processamento (CPU). Por outro lado, o Southbridge, também inserido no chipset, também realiza algumas comunicações, especificamente entre a CPU e outros componentes do computador, por exemplo a memória, armazenamento e periféricos, que são hardwares que quando conectados no computador realizam a entrada e saída de dados.");
}

contadorBios = 0
function Bios() {
    if(contadorBios == 0) {
        section1.innerHTML += "<aside><img src='assets/MemoriaROM.png' class='imagens' onclick='MemoriaROM()'><p>Memoria ROM</p></aside>"
    }
    contadorBios += 1
    window.alert("Também conhecido como Basic Input/Output System, o BIOS é responsável pela identificação de todos os componentes, elementos e funcionalidades da máquina  quando no processo de inicialização, como por exemplo o carregamento do sistema operacional que está instalado no computador. Com isso, é possível ajustar e visualizar as informações dos componentes instalados e ligados ao PC.");
}

contadorMemoriaROM = 0
function MemoriaROM() {
    if(contadorMemoriaROM == 0) {
        section1.innerHTML += "<aside><img src='assets/Jumper.png' class='imagens' onclick='Jumper()'><p>Jumper</p></aside>"
    }
    contadorMemoriaROM += 1
    window.alert("A memória ROM é também um elemento físico do computador que fica responsável por representar um armazenamento interno definitivo dos dados em um computador. Assim, os dados gravados só podem ser assim feitos uma única vez, não possibilitando a edição ou exclusão destes, apenas o acesso. Ademais, uma característica relevante da memória ROM é que para a gravação destes dados não há necessidade do uso de corrente elétrica, apenas código binário.");
}

contadorJumper = 0
function Jumper() {
    if(contadorJumper == 0) {
        section1.innerHTML += "<aside><img src='assets/Barramentos.png' class='imagens' onclick='Barramentos()'><p>Barramentos</p></aside>"
    }
    contadorJumper += 1
    window.alert("O jumper, normalmente localizado próximo à bateria, é responsável por conduzir dois pontos de um circuito elétrico, assim, ele consegue ajustar, atualizar, regular e desativar algumas configurações e funções de elementos quando isso não se é possível através do serviço do software, e por isso, são chamadas de chaves elétricas que conseguem configurar placas de circuitos, como por exemplo, as placas-mãe.");
}

function Barramentos() {
    window.alert("O barramento AGP permite a interligação entre dispositivos, e especificamente, este é uma ligação ponto-a-ponto, conectando dois dispositivos para a comunicação de forma direta, por isso não existem “paradas” em seu meio. Ele estabelece essa linha de comunicação entre o cpu, o sistema de memória central e a placa gráfica. O barramento PCI é responsável por encadear periféricos em computadores, que são hardwares que quando conectados no computador realizam a entrada e saída de dados. Ele tolera as funções em um formato padronizado que é independente de qualquer barramento particular nativo do processador. Por serem um barramento de alta velocidade padrão do setor, eles permitem que você instale uma grande diversidade de placas de expansão. O barramento IDE tem sua funcionalidade responsável por transmitir sinais paralelos, sendo assim, ele possui diversos caminhos diferentes para que possa transmitir os dados e informações necessários. Além disso, é um elemento padronizado onde conecta drives de armazenamento que utilizam uma controladora de entrada/saída integrada ao próprio HD. O barramento ISA (Industry Standard Architecture) é formado por slides que ligam os periféricos ao barramento e sua velocidade depende do barramento em que estão sendo utilizados. Ademais, algumas placas-mãe, o barramento ISA era usado internamente para a comunicação entre o processador e alguns chips presentes na placa-mãe.");
}


// SECTION2
contadorCPU = 0
function CPU() {
    if(contadorCPU == 0) {
        section2.innerHTML += "<aside><img src='assets/CoolerCPU.png' class='imagens' onclick='CoolerCPU()'><p>Cooler CPU</p></aside>"
    }
    contadorCPU += 1
    window.alert("Um processador é uma espécie de microchip especializado. A sua função é acelerar, endereçar, resolver ou preparar dados, dependendo da aplicação. Basicamente, um processador é uma poderosa máquina de calcular: Ela recebe um determinado volume de dados, orientados em padrão binário 0 e 1 e tem a função de responder a esse volume, processando a informação com base em instruções armazenadas em sua memória interna.");
}

contadorCoolerCPU = 0
function CoolerCPU() {
    if(contadorCoolerCPU == 0) {
        section2.innerHTML += "<aside><img src='assets/RAM.png' class='imagens' onclick='RAM()'><p>Memória Ram</p></aside>"
    }
    contadorCoolerCPU += 1
    window.alert("O cooler do processador tem a função de resfirar o cérebro da máquina. Ou seja, ele pega o calor produzido pela CPU em uso e a transefere em forma de ar quente para o exterior do gabinete.");
}

contadorRAM = 0
function RAM() {
    if(contadorRAM == 0) {
        section2.innerHTML += "<aside><img src='assets/PlacaVideo.png' class='imagens' onclick='PlacaVideo()'><p>Placa de Vídeo</p></aside>"
    }
    contadorRAM += 1
    window.alert("MEMÓRIA RAM");
}

contadorPlacaVideo = 0
function PlacaVideo() {
    if(contadorPlacaVideo == 0) {
        section2.innerHTML += "<aside><img src='assets/PlacaRede.png' class='imagens' onclick='PlacaRede()'><p>Placa de Rede</p></aside>"
    }
    contadorPlacaVideo += 1
    window.alert("A placa de vídeo é a peça do seu computador responsável por gerar as imagens que você vê na tela, seja essa página da web, um documento no Word ou mesmo um filme ou um game. Essa peça também é conhecida como unidade de processamento gráfico (ou GPU). Esse modelo de placa, assim como outras, pode ser integrada ao processador, ou dedicada, tendo um desempenho maior nesse segundo caso.");
}

contadorPlacaRede = 0
function PlacaRede() {
    if(contadorPlacaRede == 0) {
        section2.innerHTML += "<aside><img src='assets/PlacaSom.png' class='imagens' onclick='PlacaSom()'><p>Placa de Áudio</p></aside>"
    }
    contadorPlacaRede += 1
    window.alert("A placa de rede é responsável por permitir que nosso computador se comunique com outras, seja em rede local fechada ou através da internet. A placa de rede também desempenha outras funções, como erros e verificação dos dados recebidos.");
}

function PlacaSom() {
    window.alert("A placa de áudio, uma peça essencial da parte hardware de um computador, possui como principal função fazer a conversão de sons produzidos digitalmente nos computadores, áudios de aplicativos e sites, músicas, jogos entre outros, possam ser reproduzidos pelas saídas de sons. A placa consiste em três principais elementos para que seu funcionamento seja eficaz, são eles: DSP ou Digital Signal Processor (responsável pelos procedimentos e efeitos), DAC ou Digital to Analog Converter (responsável pela modificação das informações de áudios para sinal analógico) e ADC ou Analog to Digital Converter (responsável por digitalizar os sinais analógicos).");
}

// SECTION3

contadorGabineteLateral = 0
function GabineteLateral() {
    if(contadorGabineteLateral == 0) {
        section3.innerHTML += "<aside><img src='assets/GabineteFrontal.png' class='imagens' onclick='GabineteFrontal()'><p>PainelFrontal</p></aside>"
    }
    contadorGabineteLateral += 1
    window.alert("O gabinete é o componente de hardware usado para alocar a maioria das peças de um computador. Muitas vezes, é referido metonimicamente como CPU, referindo-se a um componente situado dentro da caixa. O gabinete pode ser de 2 modelos, de acordo com a sua posição. A função do Gabinete é proteger os componentes de sujeira e umidade, e também evitar superaquecimento dos componentes.");
}

contadorGabineteFrontal = 0
function GabineteFrontal() {
    if(contadorGabineteFrontal == 0) {
        section3.innerHTML += "<aside><img src='assets/GabineteTraseiro.png' class='imagens' onclick='GabineteTraseiro()'><p>Painel Traseiro</p></aside>"
    }
    contadorGabineteFrontal += 1
    window.alert("O Painel Frontal, que é diretamente conectado do gabinete para a placa-mãe, é responsável por fazer o computador ligar e desligar, visto que o dispositivo funciona através de pequenos curtos circuitos.");
}

contadorGabineteTraseiro = 0
function GabineteTraseiro() {
    if(contadorGabineteTraseiro == 0) {
        section3.innerHTML += "<aside><img src='assets/Fonte.png' class='imagens' onclick='Fonte()'><p>Fonte</p></aside>"
    }
    contadorGabineteTraseiro += 1
    window.alert("O painel traseiro do computador mantêm conectores e terminais, que compõe e melhoram o desempenho do dispositivo. Contém antenas sem fio (para conexões de rede externas), cabo de alimentação (para conectar à tomada elétrica) terminais SPEAKERS (para conexão de auto falantes), VOLTAGE SELECTOR (para selecionar a voltagem) e conectores: HDMI OUT (para conectar à TV), HDMI 1-4 (para conectar dispositivos compatíveis e introduzir sinais de áudio e vídeo), ANTENNA (para conectar antenas de radio), NETWORK (para conexão de rede com fio), AV (para conectar a dispositivos de áudio e vídeo), MONITOR OUT (para conectar à TV) e SUBWOOFER (para conectar ao amplificador).");
}

contadorFonte = 0
function Fonte() {
    if(contadorFonte == 0) {
        section3.innerHTML += "<aside><img src='assets/Ventoinha.png' class='imagens' onclick='Ventoinha()'><p>Cooler</p></aside>"
    }
    contadorFonte += 1
    window.alert("A fonte de alimentação é o dispositivo responsável por fornecer energia elétrica aos componentes de um computador. Portanto, é um tipo de equipamento que deve ser escolhido e manipulado com cuidado, afinal, qualquer equívoco pode resultar em provimento inadequado de eletricidade ou em danos à máquina. De acordo com a forma de desligamento, a fonte pode ser classificada em 2 tipos: AT e ATX. A fonte AT faz um corte instantâneo de energia, enquanto a fonte ATX faz o fechamento dos programas antes de desligar.");
}

contadorVentoinha = 0
function Ventoinha() {
    if(contadorVentoinha == 0) {
        section3.innerHTML += "<aside><img src='assets/HD.png' class='imagens' onclick='HD()'><p>HD</p></aside>"
    }
    contadorVentoinha += 1
    window.alert("O Cooler (ventoinha) consiste em um nome genérico utilizado para referir-se aos sistemas especializados em resfriamento no computador. Eles impedem que as peças sejam danificadas por excesso de calor, aprimorando o desempenho e a vida útil da máquina. Os sistemas de resfriamento podem ser subdivididos em dois grupos bem definidos: Os resfriadores passivos, e os resfriadores ativos. O primeiro citado é caracterizado por não ter nenhum tipo de mecanismo eletrônico utilizado para o resfriamento, utilizando-se apenas da transferência de calor por contato físico e irradiação em seu funcionamento. Já o segundo possui sistemas mecânicos que agem ativamente no controle de temperatura, deslocando substâncias, como ar e água, além da energia em forma de calor. Ambos os sistemas são utilizados simultaneamente para que a eficiência do resfriamento seja ainda maior.");
}

contadorHD = 0
function HD() {
    if(contadorHD == 0) {
        section3.innerHTML += "<aside><img src='assets/SSD.png' class='imagens' onclick='SSD()'><p>SSD</p></aside>"
    }
    contadorHD += 1
    window.alert("O HD, também conhecido como disco rígido ou unidade de armazenamento em disco, é responsável pela armazenagem de dados em um disco magnético. Ele é um meio magnético onde são gravados os dados, normalmente feitos de alumínio coberto por um material magnético, podendo haver entre 1 e 8 discos em um só HD. Outro fator importante que merece destaque é o desempenho de um disco rígido. Ele depende de três fatores: tempo de acesso, taxa de transferência externa e taxa de transferência interna. O tempo de acesso está relacionado com a velocidade de movimentação do braço. A taxa de transferência externa é a velocidade de transferência de dados entre a memória interna do disco rígido e a memória da placa-mãe. Além disso, a taxa de transferência interna é a velocidade de leitura e gravação de arquivos grandes. Apesar desse tipo de armazenamento ser o mais comum, ele não necessariamente é o mais veloz.");
}

contadorSSD = 0
function SSD() {
    if(contadorSSD == 0) {
        section3.innerHTML += "<aside><img src='assets/LeitorCd.png' class='imagens' onclick='LeitorCd()'><p>Leitor de CD</p></aside>"
    }
    contadorSSD += 1
    window.alert("O SSD, ou Solid State Drive, é um disco de estado sólido, ou seja, uma memória secundária. Com a evolução das máquinas o HD foi deixando de atender seus usuários, com isso, surge então o SSD, com a promessa de ter menor latência - tempo que um pacote de dados leva do destino para retornar à máquina origem - em relação ao HD (Hard Disk).");
}

function LeitorCd() {
    window.alert("Um leitor de CD ou disquete é um componente que possui como principal função a leitura, tradução e escrita em discos flexíveis, assim, é possível que ele possa identificar as informações do armazenamento que foram inseridas nesses discos, como por exemplo, programas e até sistemas operacionais");
}

// SECTION4

contadorMouse = 0
function Mouse() {
    if(contadorMouse == 0) {
        section4.innerHTML += "<aside><img src='assets/Teclado.png' class='imagens' onclick='Teclado()'><p>Teclado</p></aside>"
    }
    contadorMouse += 1
    window.alert("O mouse faz parte dos periféricos do seu computador e é a parte que nos permite interagir com os objetos que aparecem na tela através de um cursor que podemos ver no monitor. Geralmente o mouse possui dois botões: o esquerdo é usado para abrir, arrastar, selecionar e executar funções. Por outro lado, o direito permite acessar as funções adicionais dos comandos. O mouse (ou rato, em português) possui uma rodinha central conhecida como Scroll. Com ela, você pode rolar as telas ou os documentos de cima para baixo e vice-versa.");
}

contadorTeclado = 0
function Teclado() {
    if(contadorTeclado == 0) {
        section4.innerHTML += "<aside><img src='assets/Monitor.png' class='imagens' onclick='Monitor()'><p>Monitor</p></aside>"
    }
    contadorTeclado += 1
    window.alert("O teclado de um computador é uma peça hardware que contém diversas teclas, desde símbolos a letras do alfabeto e números, onde o usuário vai digitar e inserir dados no próprio computador. É um dispositivo fundamental, pois além de permitir o usuário navegar pelo seu computador, ele fornece uma série de atalhos para diversas funções, facilitando a realização das tarefas e consequentemente a melhora nos resultados produzidos a partir do computador.");
}

function Monitor() {
    window.alert("O monitor é uma parte fundamental de um computador, é nele que toda a interface e todas as informações sobre o computador serão transmitidas ao usuário. Os monitores são semelhantes às TVs, mas geralmente exibem informações em uma resolução muito mais alta. Também ao contrário das televisões, os monitores geralmente ficam em cima de uma mesa em vez de serem montados na parede. Um monitor às vezes é chamado de tela, monitor de vídeo, terminal de exibição de vídeo, unidade de exibição de vídeo ou tela de vídeo. Existem diversos tipos de monitores (como o monitor convencional e o gamer), além de vários tipos (plano, curvo e ultrawide).");
}


// SECTION5

contadorWindows = 0
function Windows() {
    if(contadorWindows == 0) {
        section5.innerHTML += "<aside><img src='assets/Linux.png' class='imagens' onclick='Linux()'><p>Linux</p></aside>"
    }
    contadorWindows += 1
    window.alert("Windows é um sistema operacional desenvolvido em 1981 pela Microsoft. Sua primeira versão foi lançada em 1993, sofrendo frequentes atualizações tanto em design quanto em serviços desde então. Com interfaces eficientes, atrativas e intuitivas, tem como principal objetivo facilitar o acesso ao computador para o usuário, sendo considerado o Sistema Operacional mais utilizado em todo o mundo. Integra softwares avançados e rápidos, organizados em, literalmente, 'janelas'.");
}

contadorLinux = 0
function Linux() {
    if(contadorLinux == 0) {
        section5.innerHTML += "<aside><img src='assets/MacOs.png' class='imagens' onclick='MacOs()'><p>MacOs</p></aside>"
    }
    contadorLinux += 1
    window.alert("Linux é o nome dado a um kernel utilizado em um sistema operacional. Ou seja, é um conjunto de instruções sobre como será utilizado processador, memória, disco e dispositivos periféricos, lançado em 1991 com a idealização de Linus Torvalds. O Kernel se juntou ao GNU de Richard Stallman, um sistema operacional livre baseado no Unix (outro sistema operaciona, esse não livre). A união dos dois trouxe ao mundo o Sistema Operacional GNU/Linux, mais conhecido como Linux e que tem como garoto propaganda um simpático pinguim chamado Tux. Possuindo código aberto, esse sistema conta com inúmeras versões, criadas por vários idealizadores ao redor xo globo, sendo utilizado por uma crescente comunidade de usuários. Entre suas principais versões, estão Ubuntu, Unity e Shell, de maneira que sua pluralidade é uma de suas principais vantagens, oferecendo diferentes serviços e interfaces para diferentes objetivos e usuários.");
}

function MacOs() {
    window.alert("MacOS é um sistema operacional criado pela equipe da Apple em 2001 e utilizado nos conputadores produzidos pela empresa. É o segundo Sitema Operacional para computadores mais utilizado do mundo, estando pré instalado em todos os Macs desde 2002.");
}