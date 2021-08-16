var names = ['momo', 'shanu', 'ishrat'];

console.log('Before Reverse :');
console.log(names);


for (var i = 0; i < Math.floor(names.length / 2); i++) {

    [names[i], names[names.length - 1 - i]] = [names[names.length - 1 - i], names[i]];

}

console.log('After Reverse :');
console.log(names);