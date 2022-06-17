let employee = {
    name: "",
    sname: "",
    baseprice: 0,
    exp: 0,

}
let Developer = [];
Developer[0] = {
    countedSalary() {
        if (exp > 5) {
            price = baseprice * 1, 2 + 500;
        } else if (exp > 2) {
            price = baseprice + 200;
        } else {
            price = baseprice;
        }

    },
    __proto__: employee

}
Developer[0].name = "sasha";
Developer[0].sname = "kavchenko";
Developer[0].exp = 3;
Developer[0].baseprice = 100;
Developer[1] = {
    countedSalary() {
        if (exp > 5) {
            price = baseprice * 1, 2 + 500;
        } else if (exp > 2) {
            price = baseprice + 200;
        } else {
            price = baseprice;
        }

    },
    __proto__: employee

}
Developer[1].name = "sasha1";
Developer[1].sname = "kavchenko";
Developer[1].exp = 2;
Developer[1].baseprice = 200;
Developer[2] = {
    countedSalary() {
        if (exp > 5) {
            price = baseprice * 1, 2 + 500;
        } else if (exp > 2) {
            price = baseprice + 200;
        } else {
            price = baseprice;
        }

    },
    __proto__: employee
}
Developer[2].name = "sasha2";
Developer[2].sname = "kavchenko";
Developer[2].exp = 5;
Developer[2].baseprice = 50;
Developer[3] = {
    countedSalary() {
        if (exp > 5) {
            price = baseprice * 1, 2 + 500;
        } else if (exp > 2) {
            price = baseprice + 200;
        } else {
            price = baseprice;
        }

    },
    __proto__: employee
}
Developer[3].name = "sasha3";
Developer[3].sname = "kavchenko";
Developer[3].exp = 8;
Developer[3].baseprice = 150;
Developer[4] = {
    countedSalary() {
        if (exp > 5) {
            price = baseprice * 1, 2 + 500;
        } else if (exp > 2) {
            price = baseprice + 200;
        } else {
            price = baseprice;
        }

    },
    __proto__: employee
}
Developer[4].name = "sasha4";
Developer[4].sname = "kavchenko";
Developer[4].exp = 1;
Developer[4].baseprice = 170;
let Designer = [];
Designer[0] = {
    effect: 0,
    countedSalary() {
        if (exp > 5) {
            price = (baseprice * 1, 2 + 500) * this.effect;
        } else if (exp > 2) {
            price = (baseprice + 200) * this.effect;
        } else {
            price = (baseprice) * this.effect;
        }

    },
    __proto__: employee
}
Designer[0].name = "masha";
Designer[0].effect = 0, 1;
Designer[0].sname = "kavchenko";
Designer[0].exp = 1;
Designer[0].baseprice = 170;
Designer[1] = {
    effect: 0,
    countedSalary() {
        if (exp > 5) {
            price = (baseprice * 1, 2 + 500) * this.effect;
        } else if (exp > 2) {
            price = (baseprice + 200) * this.effect;
        } else {
            price = (baseprice) * this.effect;
        }

    },
    __proto__: employee
}
Designer[1].name = "masha1";
Designer[1].effect = 0, 7;
Designer[1].sname = "kavchenko";
Designer[1].exp = 9;
Designer[1].baseprice = 170;
Designer[2] = {
    effect: 0,
    countedSalary() {
        if (exp > 5) {
            price = (baseprice * 1, 2 + 500) * this.effect;
        } else if (exp > 2) {
            price = (baseprice + 200) * this.effect;
        } else {
            price = (baseprice) * this.effect;
        }

    },
    __proto__: employee
}
Designer[2].name = "masha2";
Designer[2].effect = 0, 5;
Designer[2].sname = "kavchenko";
Designer[2].exp = 3;
Designer[2].baseprice = 70;
Designer[3] = {
    effect: 0,
    countedSalary() {
        if (exp > 5) {
            price = (baseprice * 1, 2 + 500) * this.effect;
        } else if (exp > 2) {
            price = (baseprice + 200) * this.effect;
        } else {
            price = (baseprice) * this.effect;
        }

    },
    __proto__: employee
}
Designer[3].name = "masha3";
Designer[3].effect = 0, 5;
Designer[3].sname = "kavchenko";
Designer[3].exp = 7;
Designer[3].baseprice = 170;

let Manager = [];
Manager[0] = {
    Dev: [],
    Des: [],
    kilk: 0,
    kilkDev: 0,
    kilkDes: 0,
    countedSalary() {
        if (exp > 5) {
            if (this.kilk > 10) {
                price = price + 300
            } else if (this.kilk > 5) {
                price = price + 200
            }
            if (this.kilkDev > this.kilkDes) {
                result = (price / 100 * 10);
                price = result;
            }
        } else if (exp > 2) {
            if (this.kilk > 10) {
                price = price + 300
            } else if (this.kilk > 5) {
                price = price + 200
            }
            if (this.kilkDev > this.kilkDes) {
                result = (price / 100 * 10);
                price = result;
            }

        } else {
            if (this.kilk > 10) {
                price = price + 300
            } else if (this.kilk > 5) {
                price = price + 200
            }
            if (this.kilkDev > this.kilkDes) {
                result = (price / 100 * 10);
                price = result;
            }
        }

    },
    __proto__: employee
}
Manager[0].name = "man1";
Manager[0].sname = "kavchenko";
Manager[0].exp = 3;
Manager[0].baseprice = 400;

Manager[1] = {
    Dev: [],
    Des: [],
    countedSalary() {
        if (exp > 5) {
            if (this.kilk > 10) {
                price = price + 300
            } else if (this.kilk > 5) {
                price = price + 200
            }
            if (this.kilkDev > this.kilkDes) {
                result = (price / 100 * 10);
                price = result;
            }
        } else if (exp > 2) {
            if (this.kilk > 10) {
                price = price + 300
            } else if (this.kilk > 5) {
                price = price + 200
            }
            if (this.kilkDev > this.kilkDes) {
                result = (price / 100 * 10);
                price = result;
            }

        } else {
            if (this.kilk > 10) {
                price = price + 300
            } else if (this.kilk > 5) {
                price = price + 200
            }
            if (this.kilkDev > this.kilkDes) {
                result = (price / 100 * 10);
                price = result;
            }
        }

    },
    __proto__: employee
}
Manager[1].name = "man2";
Manager[1].sname = "kavchenko";
Manager[1].exp = 3;
Manager[1].baseprice = 400;

for (let i = 0; i < 5; i++) {
    Manager[0].Dev[i] = Developer[i];
}

for (let i = 0; i < 4; i++) {
    Manager[0].Des[i] = Designer[i];
}
for (let i = 0; i < 5; i++) {
    Manager[1].Dev[i] = Developer[i];
}

for (let i = 0; i < 4; i++) {
    Manager[1].Des[i] = Designer[i];
}

let Department = {
    Man: [],
    giveSalary() {

        for (let i = 0; i < 2; i++) {
            for (let b = 0; b < 4; b++) {
                Manager[i].countedSalary();
                alert(`${Manager[i].Des[b].baseprice}`);
            }
            for (let b = 0; b < 4; b++) {
                alert(`${Manager[i].Dev[b].baseprice}`);
            }
        }
    }
}
for (let i = 0; i < 2; i++) {
    Department.Man[i] = Manager[i];
}
for (let i = 0; i < 2; i++) {
    //alert(Department.Man[i].Dev[i].name);
}
Department.giveSalary();