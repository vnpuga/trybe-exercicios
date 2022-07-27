// queremos Active, Inactive, Paused, sendo: 1, 2, 3 respectivamente
var StudentStatus;
(function (StudentStatus) {
    StudentStatus[StudentStatus["Active"] = 1] = "Active";
    StudentStatus[StudentStatus["Inactive"] = 2] = "Inactive";
    StudentStatus[StudentStatus["Paused"] = 3] = "Paused";
})(StudentStatus || (StudentStatus = {}));
var newStudentStatus = StudentStatus.Inactive;
console.log(newStudentStatus); //saída: 2 
// Enums suportam o acesso ao dado em ambos as direções: da chave ao valor e do valor à chave.
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["OK"] = 200] = "OK";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
    StatusCodes[StatusCodes["Unauthorized"] = 401] = "Unauthorized";
    StatusCodes[StatusCodes["PaymentRequired"] = 402] = "PaymentRequired";
    StatusCodes[StatusCodes["Forbidden"] = 403] = "Forbidden";
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
})(StatusCodes || (StatusCodes = {}));
var ok = StatusCodes.OK;
var indiceOk = StatusCodes["OK"];
var stringBadRequest = StatusCodes[400];
console.log(ok); //saída: 200
console.log(indiceOk); //saída: 200
console.log(stringBadRequest); //saída: BadRequest
