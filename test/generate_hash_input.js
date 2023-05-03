const path = require("path");
const fs = require("fs");

function buffer2bitArray(b) {
    const res = [];
    for (let i = 0; i < b.length; i++) {
        for (let j = 0; j < 8; j++) {
            res.push((b[i] >> (7 - j) & 1));
        }
    }
    return res;
}

const testStr = "abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq";
const b = Buffer.from(testStr, "utf8");
const arrIn = buffer2bitArray(b);

const data = { "in": arrIn };

fs.writeFile('test_input.json', JSON.stringify(data), err => {
    if (err) {
        console.error(err)
        return;
    }
    console.log('Data logged to test_input.json');
});
