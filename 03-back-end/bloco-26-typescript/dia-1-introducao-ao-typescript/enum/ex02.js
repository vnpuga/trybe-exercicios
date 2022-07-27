// Crie uma Enum que represente os dias da semana. Seu valor deve ser o número do dia.
var DayOfWeek;
(function (DayOfWeek) {
    DayOfWeek[DayOfWeek["Sunday"] = 1] = "Sunday";
    DayOfWeek[DayOfWeek["Monday"] = 2] = "Monday";
    DayOfWeek[DayOfWeek["Tuesday"] = 3] = "Tuesday";
    DayOfWeek[DayOfWeek["Wednesday"] = 4] = "Wednesday";
    DayOfWeek[DayOfWeek["Thursday"] = 5] = "Thursday";
    DayOfWeek[DayOfWeek["Friday"] = 6] = "Friday";
    DayOfWeek[DayOfWeek["Saturday"] = 7] = "Saturday";
})(DayOfWeek || (DayOfWeek = {}));
//Crie uma Enum que represente as cores do arco-íris. Seu valor deve ser o nome das cores em português.
var RainbowColors;
(function (RainbowColors) {
    RainbowColors["Red"] = "Vermelho";
    RainbowColors["Orange"] = "Laranja";
    RainbowColors["Yellow"] = "Amarelo";
    RainbowColors["Green"] = "Verde";
    RainbowColors["Blue"] = "Azul";
    RainbowColors["Indigo"] = "Anil";
    RainbowColors["Violet"] = "Violeta";
})(RainbowColors || (RainbowColors = {}));
//Crie uma Enum que represente as ações: salvar, imprimir, abrir, visualizar e fechar. Seu valor deve ser do tipo inteiro.
var Actions;
(function (Actions) {
    Actions[Actions["Save"] = 0] = "Save";
    Actions[Actions["Print"] = 1] = "Print";
    Actions[Actions["Open"] = 2] = "Open";
    Actions[Actions["View"] = 3] = "View";
    Actions[Actions["Close"] = 4] = "Close";
})(Actions || (Actions = {}));
//Crie uma Enum que represente os pontos cardeais: Norte, Leste, Sul e Oeste. Seu valor deve ser a primeira letra do nome do ponto cardial.
var CardinalPoints;
(function (CardinalPoints) {
    CardinalPoints["North"] = "N";
    CardinalPoints["East"] = "E";
    CardinalPoints["South"] = "S";
    CardinalPoints["West"] = "W";
})(CardinalPoints || (CardinalPoints = {}));
