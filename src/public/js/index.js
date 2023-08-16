// Strawberry init
const data = sb.init();

data.qtys = {};
data.moves = [];
data.items = () =>
    Object.keys(data.qtys).map((name) => ({
        name,
        quantity: data.qtys[name],
    }));

// "Business Logic"
function create(item) {
    if (item in data.qtys) {
        return alert(`${item} exists.`);
    }

    data.qtys[item] = 0;
}

function move(item, quantity) {
    const stock = data.qtys[item] ?? 0;
    if (quantity + stock < 0) {
        return alert(`Insufficient quantity ${stock} of ${item}.`);
    }

    data.qtys[item] = quantity + stock;
    data.moves.push({
        index: data.moves.length + 1,
        time: new Date().toTimeString().split(' ')[0],
        item,
        quantity,
    });
}

// Button onclick listeners
document.getElementById('add-button')?.addEventListener('click', () => {
    const item = document.getElementById('item-name')?.value;
    if (typeof item === 'string' && item) {
        create(item);
    }
});

document.getElementById('move-button')?.addEventListener('click', () => {
    const item = document.getElementById('move-item')?.value;
    const qty = Number(document.getElementById('move-qty')?.value);

    if (typeof item === 'string' && item && !Number.isNaN(qty)) {
        move(item, qty);
    }
});

// Demo Data
create('Strawberry');
create('Mulberry');
move('Strawberry', 7);
move('Mulberry', 1);
move('Strawberry', -1);