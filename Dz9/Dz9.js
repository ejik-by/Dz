var formDef1 = [{label: 'Название сайта:', kind: 'longtext', name: 'sitename'}, {
    label: 'URL сайта:',
    kind: 'longtext',
    name: 'siteurl'
}, {label: 'Посетителей в сутки:', kind: 'number', name: 'visitors'},
    {
        label: 'E-mail для связи:',
        kind: 'shorttext',
        name: 'email'
    }, {
        label: 'Рубрика каталога:',
        kind: 'combo',
        name: 'division',
        variants: [{text: 'здоровье', value: 1}, {text: 'домашний уют', value: 2}, {text: 'бытовая техника', value: 3}]
    }, {
        label: 'Размещение:',
        kind: 'radio',
        name: 'payment',
        variants: [{text: 'бесплатное', value: 1}, {text: 'платное', value: 2}, {text: 'VIP', value: 3}]
    }, {label: 'Разрешить отзывы:', kind: 'check', name: 'votes'}, {
        label: 'Описание сайта:',
        kind: 'memo',
        name: 'description'
    }, {caption: 'Опубликовать', kind: 'submit'},];
var formDef2 = [{label: 'Фамилия:', kind: 'longtext', name: 'lastname'}, {
    label: 'Имя:',
    kind: 'longtext',
    name: 'firstname'
}, {label: 'Отчество:', kind: 'longtext', name: 'secondname'}, {
    label: 'Возраст:',
    kind: 'number',
    name: 'age'
}, {caption: 'Зарегистрироваться', kind: 'submit'},];

function debug(obj) {
    var contener = document.querySelector("#qwe")
    for (key in obj) {
        var formelem = obj[key];
        console.log(formelem.label);
        if (formelem.kind !== "submit") {
            contener.innerHTML += "<label> " + formelem.label + "</label>"
        }

        if (formelem.kind === "shorttext") {
            contener.innerHTML += "<input type='text' name='" + formelem.name + "' />"
        }
        if (formelem.kind === "longtext") {
            contener.innerHTML += "<input type='text' name='" + formelem.name + "'/>"
        }
        if (formelem.kind === "memo") {
            contener.innerHTML += "</br><textarea name='" + formelem.name + "'></textarea>"
        }
        if (formelem.kind === "number") {
            contener.innerHTML += "<input type='text' name='" + formelem.name + "' />"
        }
        if (formelem.kind === "radio") {
            for (keyvar in formelem.variants) {
                var objvariants = formelem.variants[keyvar];
                console.log(objvariants);
                contener.innerHTML += " " + "<input type='radio' value='" + objvariants.value + "' name='" + formelem.name + "'/>" + objvariants.text
            }
        }
        if (formelem.kind === "check") {
            contener.innerHTML += "<input type='checkbox' checked name='"+formelem.name +"' />"
        }
        if (formelem.kind === "combo") {
            var comboContener = "";
            comboContener += "<select name='"+formelem.name +"'>"
            for (keyvar in formelem.variants) {
                var objvariants = formelem.variants[keyvar];
                comboContener += "<option value='" + objvariants.value + "'> " + objvariants.text + "</option>"
            }
            comboContener += "</select>"
            contener.innerHTML += comboContener;
        }
        if (formelem.kind === "submit") {
            contener.innerHTML += "<input type='submit' value='" + formelem.caption + "' name='"+formelem.name +"' />"
        }
        contener.innerHTML += "</br>";
    }
}

debug(formDef1);
debug(formDef2);

