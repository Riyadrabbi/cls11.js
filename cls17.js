let nme = 'Rafidha';
nme = 'rafu';
console.log(nme);


const cls = { Name: 'Aru', Addres: 'Dhaka' }

cls.roll = 167945;
delete cls.Name;
console.log(cls);


function frnd() {
    const bondu = 'Afroza'
    console.log(bondu)
}
frnd();

function SendMoney(send_money, cashout = 0) {
    const recvd = send_money + cashout;
    console.log(recvd);
    return recvd;

}
const returnrecvd = SendMoney(20000);

function allSalary(salary, bonous = 1500) {
    const total = salary + bonous;
    console.log(total)
    return total;

}
const returnTotal = allSalary(40000)