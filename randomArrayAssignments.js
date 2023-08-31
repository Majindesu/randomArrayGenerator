function randomArrayGen(min, max, arraysize){
    let randomArray = [];
    for (let i = 0; i < arraysize; i++) {
        randomArray.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return randomArray;
}

function calculateTotal(array){
    let total = 0;
    for (let i = 0; i < array.length; i++){
        total += array[i];
    }
    return total;
}

function calculateAverage(array){
    return calculateTotal(array) / array.length;
}

function separator(array){
    let evenArray = [];
    let oddArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0){
            evenArray.push(array[i]);
        } else {
            oddArray.push(array[i]);
        }
    }
    return [evenArray, oddArray];
}

// Penggunaan

const generatedArray = randomArrayGen(1, 50, 100);
const [generatedEven, generatedOdd] = separator(generatedArray);

const evenMin = Math.min(...generatedEven);
const evenMax = Math.max(...generatedEven);
const evenTotal = calculateTotal(generatedEven);
const evenAverage = calculateAverage(generatedEven);

const oddMin = Math.min(...generatedOdd);
const oddMax = Math.max(...generatedOdd);
const oddTotal = calculateTotal(generatedOdd);
const oddAverage = calculateAverage(generatedOdd);

const minComparison = evenMin > oddMin ? "Min lebih besar array genap" : "Min lebih besar array ganjil";
const maxComparison = evenMax > oddMax ? "Max lebih besar array genap" : "Max lebih besar array ganjil";
const totalComparison = evenTotal === oddTotal ? "Total memiliki nilai sama antara array genap dan ganjil" : "Total tidak sama antara array genap dan ganjil";
const averageComparison = evenAverage > oddAverage ? "Rata-rata lebih besar array genap" : "Rata-rata lebih besar array ganjil";

console.log("Array dengan jumlah index 100:", generatedArray);
console.log("Array genap:", generatedEven);
console.log("Array ganjil", generatedOdd);
console.log("Min, Max, Total, Rata-rata pada array genap:", evenMin, evenMax, evenTotal, evenAverage);
console.log("Min, Max, Total, Rata-rata pada array ganjil:", oddMin, oddMax, oddTotal, oddAverage);
console.log("Perbandingan nilai:");
console.log(minComparison);
console.log(maxComparison);
console.log(totalComparison);
console.log(averageComparison);



