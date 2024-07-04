const str = "Kunja";
for(const char of str){
    console.log(char);
}

// for…of Loop Example – Looping over Map
const map =new Map([
    ['key1', 'value1'],
    ['key2', 'value2'],
    ['key3','value3']
]);
for(const [key, value] of map){
    console.log('key:'+ key + 'value:' + value);
}